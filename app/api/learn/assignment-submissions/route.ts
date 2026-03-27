import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { assignmentId?: string; body?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.assignmentId || typeof body.body !== 'string') {
    return NextResponse.json({ error: 'assignmentId and body required' }, { status: 400 })
  }

  const text = body.body.trim()
  if (!text) return NextResponse.json({ error: 'Submission cannot be empty' }, { status: 400 })

  const { data: asg, error: aErr } = await supabase.from('assignments').select('id, lesson_id').eq('id', body.assignmentId).single()

  if (aErr || !asg) return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })

  const { data: modRow } = await supabase.from('lessons').select('module_id, modules!inner(course_id)').eq('id', asg.lesson_id).single()

  const courseId = (modRow?.modules as unknown as { course_id: string })?.course_id
  if (!courseId) return NextResponse.json({ error: 'Invalid lesson' }, { status: 400 })

  const { data: en } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .maybeSingle()

  if (!en) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })

  const { data: existing } = await supabase
    .from('assignment_submissions')
    .select('id')
    .eq('assignment_id', body.assignmentId)
    .eq('user_id', user.id)
    .maybeSingle()

  const now = new Date().toISOString()
  if (existing) {
    const { data, error } = await supabase
      .from('assignment_submissions')
      .update({ body: text, submitted_at: now })
      .eq('id', existing.id)
      .select()
      .single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ submission: data })
  }

  const { data, error } = await supabase
    .from('assignment_submissions')
    .insert({
      assignment_id: body.assignmentId,
      user_id: user.id,
      body: text,
      submitted_at: now,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ submission: data })
}
