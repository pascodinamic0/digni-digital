import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  canAccessLesson,
  canMarkLessonComplete,
  canUncompleteLesson,
} from '@/lib/lms/lesson-gates'

export async function POST(request: Request) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { lessonId?: string; complete?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const lessonId = body.lessonId
  const complete = body.complete !== false

  if (!lessonId) {
    return NextResponse.json({ error: 'lessonId required' }, { status: 400 })
  }

  const { data: lesson } = await supabase
    .from('lessons')
    .select('id, modules!inner(course_id)')
    .eq('id', lessonId)
    .single()

  if (!lesson) {
    return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  }

  const modules = lesson.modules as unknown as { course_id: string }
  const courseId = modules.course_id

  const { data: en } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .maybeSingle()

  if (!en) {
    return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  }

  const allowed = await canAccessLesson(supabase, user.id, courseId, lessonId)
  if (!allowed) {
    return NextResponse.json({ error: 'Complete the previous lesson first.' }, { status: 403 })
  }

  if (complete) {
    const gate = await canMarkLessonComplete(supabase, user.id, lessonId)
    if (!gate.ok) {
      return NextResponse.json({ error: gate.reason }, { status: 400 })
    }

    const { error } = await supabase.from('lesson_progress').upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        completed_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,lesson_id' }
    )
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  } else {
    const ok = await canUncompleteLesson(supabase, user.id, courseId, lessonId)
    if (!ok) {
      return NextResponse.json(
        { error: 'Unmark this lesson only after clearing completion on later lessons.' },
        { status: 400 }
      )
    }

    const { error } = await supabase.from('lesson_progress').delete().eq('user_id', user.id).eq('lesson_id', lessonId)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }

  return NextResponse.json({ ok: true })
}
