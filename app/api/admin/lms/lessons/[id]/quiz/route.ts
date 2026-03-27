import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

type QuestionIn = {
  prompt: string
  choice_a: string
  choice_b: string
  choice_c: string
  choice_d: string
  correct_index: number
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: lessonId } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { title?: string; passPercent?: number; questions?: QuestionIn[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { data: lesson } = await db.from('lessons').select('id').eq('id', lessonId).maybeSingle()
  if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })

  const questions = Array.isArray(body.questions) ? body.questions : []
  const title = (body.title ?? 'Lesson quiz').trim() || 'Lesson quiz'
  const passPercent =
    body.passPercent != null && Number.isFinite(body.passPercent)
      ? Math.min(100, Math.max(1, Math.round(Number(body.passPercent))))
      : 80

  const { data: existing } = await db.from('quizzes').select('id').eq('lesson_id', lessonId).maybeSingle()

  if (existing) {
    await db.from('quiz_questions').delete().eq('quiz_id', existing.id)
    await db.from('quizzes').delete().eq('id', existing.id)
  }

  if (questions.length === 0) {
    return NextResponse.json({ ok: true, quiz: null })
  }

  for (const q of questions) {
    if (!q.prompt?.trim()) {
      return NextResponse.json({ error: 'Each question needs a prompt' }, { status: 400 })
    }
    if (q.correct_index < 0 || q.correct_index > 3) {
      return NextResponse.json({ error: 'correct_index must be 0–3' }, { status: 400 })
    }
  }

  const { data: quiz, error: qErr } = await db
    .from('quizzes')
    .insert({
      lesson_id: lessonId,
      title,
      pass_percent: passPercent,
    })
    .select()
    .single()

  if (qErr || !quiz) {
    return NextResponse.json({ error: qErr?.message ?? 'Failed to create quiz' }, { status: 500 })
  }

  const rows = questions.map((q, i) => ({
    quiz_id: quiz.id,
    prompt: q.prompt.trim(),
    sort_order: i,
    choice_a: q.choice_a.trim(),
    choice_b: q.choice_b.trim(),
    choice_c: q.choice_c.trim(),
    choice_d: q.choice_d.trim(),
    correct_index: q.correct_index,
  }))

  const { error: insQ } = await db.from('quiz_questions').insert(rows)
  if (insQ) {
    await db.from('quizzes').delete().eq('id', quiz.id)
    return NextResponse.json({ error: insQ.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, quiz })
}
