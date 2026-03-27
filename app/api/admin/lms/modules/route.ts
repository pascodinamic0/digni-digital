import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { parseSortOrder } from '@/lib/lms/validate'

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { courseId?: string; title?: string; sort_order?: number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.courseId?.trim() || !body.title?.trim()) {
    return NextResponse.json({ error: 'courseId and title required' }, { status: 400 })
  }

  const { data: course } = await db.from('courses').select('id').eq('id', body.courseId).maybeSingle()
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 })

  const { data, error } = await db
    .from('modules')
    .insert({
      course_id: body.courseId,
      title: body.title.trim(),
      sort_order: parseSortOrder(body.sort_order, 0),
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ module: data })
}
