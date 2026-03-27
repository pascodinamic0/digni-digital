import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

/** List LMS invites (optional filter by course). */
export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const url = new URL(request.url)
  const courseId = url.searchParams.get('courseId')?.trim()

  let q = db
    .from('lms_invites')
    .select('id, email, course_id, expires_at, used_at, revoked_at, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  if (courseId) {
    q = q.eq('course_id', courseId)
  }

  const { data, error } = await q

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ invites: data ?? [] })
}
