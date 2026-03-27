import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

function findUserByEmail(users: { id: string; email?: string | null }[], email: string) {
  const e = email.trim().toLowerCase()
  return users.find((u) => u.email?.toLowerCase() === e)
}

export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const courseId = new URL(request.url).searchParams.get('courseId')
  if (!courseId) {
    return NextResponse.json({ error: 'courseId query required' }, { status: 400 })
  }

  const { data: enrollments, error } = await db.from('enrollments').select('*').eq('course_id', courseId).order('enrolled_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const userIds = [...new Set((enrollments ?? []).map((e) => e.user_id))]
  const { data: profiles } =
    userIds.length > 0
      ? await db.from('profiles').select('id, email, full_name').in('id', userIds)
      : { data: [] as { id: string; email: string | null; full_name: string | null }[] }

  const profMap = new Map((profiles ?? []).map((p) => [p.id, p]))

  const rows = (enrollments ?? []).map((e) => ({
    ...e,
    profile: profMap.get(e.user_id) ?? null,
  }))

  return NextResponse.json({ enrollments: rows })
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { courseId?: string; email?: string; status?: 'pending' | 'active' | 'completed' | 'cancelled' }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.courseId?.trim() || !body.email?.trim()) {
    return NextResponse.json({ error: 'courseId and email required' }, { status: 400 })
  }

  const { data: course } = await db.from('courses').select('id').eq('id', body.courseId).maybeSingle()
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 })

  const { data: list, error: listErr } = await db.auth.admin.listUsers({ page: 1, perPage: 1000 })
  if (listErr) return NextResponse.json({ error: listErr.message }, { status: 500 })

  const user = findUserByEmail(list.users, body.email)
  if (!user) {
    return NextResponse.json({ error: 'No user with that email. They must sign up first.' }, { status: 404 })
  }

  const status = body.status ?? 'active'
  const { data: existing } = await db
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', body.courseId)
    .maybeSingle()

  if (existing) {
    const { data, error } = await db.from('enrollments').update({ status }).eq('id', existing.id).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ enrollment: data, updated: true })
  }

  const { data, error } = await db
    .from('enrollments')
    .insert({
      user_id: user.id,
      course_id: body.courseId,
      status,
      enrolled_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ enrollment: data, updated: false })
}
