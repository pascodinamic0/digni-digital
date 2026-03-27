import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

/** Signed URL for private lms-videos playback (enrolled learners only). */
export async function GET(request: Request) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const lessonId = new URL(request.url).searchParams.get('lessonId')
  if (!lessonId) return NextResponse.json({ error: 'lessonId required' }, { status: 400 })

  const { data: lesson, error: lErr } = await supabase
    .from('lessons')
    .select('id, video_storage_path, modules!inner(course_id)')
    .eq('id', lessonId)
    .single()

  if (lErr || !lesson) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const path = lesson.video_storage_path as string | null
  if (!path) return NextResponse.json({ error: 'No uploaded video for this lesson' }, { status: 404 })

  const courseId = (lesson.modules as unknown as { course_id: string }).course_id

  const { data: en } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .maybeSingle()

  if (!en) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })

  const admin = createAdminClient()
  const { data: signed, error: sErr } = await admin.storage.from('lms-videos').createSignedUrl(path, 3600)

  if (sErr || !signed?.signedUrl) {
    return NextResponse.json({ error: sErr?.message ?? 'Could not create playback URL' }, { status: 500 })
  }

  return NextResponse.json({ url: signed.signedUrl, expiresIn: 3600 })
}
