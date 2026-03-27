import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

const MAX_BYTES = 500 * 1024 * 1024
const ALLOWED = new Set(['video/mp4', 'video/webm', 'video/quicktime', 'video/x-m4v'])

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: lessonId } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const { data: lesson, error: leErr } = await db
    .from('lessons')
    .select('id, video_storage_path, modules!inner(course_id)')
    .eq('id', lessonId)
    .single()

  if (leErr || !lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })

  const courseId = (lesson.modules as unknown as { course_id: string }).course_id

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Expected multipart form' }, { status: 400 })
  }

  const file = form.get('file')
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'file required' }, { status: 400 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Video must be 500MB or smaller' }, { status: 400 })
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json({ error: 'Use MP4, WebM, QuickTime, or M4V' }, { status: 400 })
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_') || 'video'
  const path = `${courseId}/${lessonId}/${Date.now()}-${safeName}`

  const buf = Buffer.from(await file.arrayBuffer())
  const { error: upErr } = await db.storage.from('lms-videos').upload(path, buf, {
    contentType: file.type,
    upsert: true,
  })

  if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 })

  const oldPath = lesson.video_storage_path as string | null
  if (oldPath && oldPath !== path) {
    await db.storage.from('lms-videos').remove([oldPath])
  }

  const { data: updated, error: upLesson } = await db
    .from('lessons')
    .update({ video_storage_path: path })
    .eq('id', lessonId)
    .select()
    .single()

  if (upLesson) return NextResponse.json({ error: upLesson.message }, { status: 500 })
  return NextResponse.json({ lesson: updated, path })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: lessonId } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const { data: lesson, error: leErr } = await db.from('lessons').select('id, video_storage_path').eq('id', lessonId).single()
  if (leErr || !lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })

  const p = lesson.video_storage_path as string | null
  if (p) {
    await db.storage.from('lms-videos').remove([p])
  }

  const { data: updated, error } = await db
    .from('lessons')
    .update({ video_storage_path: null })
    .eq('id', lessonId)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ lesson: updated })
}
