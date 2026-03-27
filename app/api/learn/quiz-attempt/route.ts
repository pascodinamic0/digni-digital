import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { quizId?: string; answers?: Record<string, number> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const quizId = body.quizId?.trim()
  const answers = body.answers
  if (!quizId || !answers || typeof answers !== 'object') {
    return NextResponse.json({ error: 'quizId and answers required' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { data: quiz } = await admin.from('quizzes').select('id, lesson_id, pass_percent').eq('id', quizId).single()
  if (!quiz) {
    return NextResponse.json({ error: 'Quiz not found' }, { status: 404 })
  }

  const { data: lesson } = await supabase
    .from('lessons')
    .select('module_id, modules!inner(course_id)')
    .eq('id', quiz.lesson_id)
    .single()

  const courseId = (lesson?.modules as unknown as { course_id: string })?.course_id
  if (!courseId) {
    return NextResponse.json({ error: 'Invalid lesson' }, { status: 400 })
  }

  const { data: en } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .maybeSingle()

  if (!en) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  const { data: questions } = await admin.from('quiz_questions').select('id, correct_index').eq('quiz_id', quizId)
  if (!questions?.length) {
    return NextResponse.json({ error: 'No questions in this quiz' }, { status: 400 })
  }

  let correct = 0
  for (const q of questions) {
    const pick = answers[q.id]
    if (typeof pick === 'number' && pick === q.correct_index) correct += 1
  }

  const scorePercent = Math.round((correct / questions.length) * 100)
  const passed = scorePercent >= quiz.pass_percent

  const { error } = await supabase.from('quiz_attempts').insert({
    quiz_id: quizId,
    user_id: user.id,
    score_percent: scorePercent,
    passed,
    answers: answers as Record<string, number>,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ scorePercent, passed })
}
