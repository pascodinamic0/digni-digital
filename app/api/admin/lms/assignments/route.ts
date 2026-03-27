import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { parseSortOrder } from '@/lib/lms/validate'

export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const lessonId = new URL(request.url).searchParams.get('lessonId')
  if (!lessonId) return NextResponse.json({ error: 'lessonId query required' }, { status: 400 })

  const { data, error } = await db.from('assignments').select('*').eq('lesson_id', lessonId).order('sort_order', { ascending: true })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ assignments: data ?? [] })
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { lessonId?: string; title?: string; instructions?: string | null; sort_order?: number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.lessonId?.trim() || !body.title?.trim()) {
    return NextResponse.json({ error: 'lessonId and title required' }, { status: 400 })
  }

  const { data: les } = await db.from('lessons').select('id').eq('id', body.lessonId).maybeSingle()
  if (!les) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })

  const { data, error } = await db
    .from('assignments')
    .insert({
      lesson_id: body.lessonId,
      title: body.title.trim(),
      instructions: body.instructions?.trim() ?? null,
      sort_order: parseSortOrder(body.sort_order, 0),
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ assignment: data })
}
