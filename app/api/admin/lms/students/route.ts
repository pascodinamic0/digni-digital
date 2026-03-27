import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

/** All enrollments with course + profile email for admin directory. */
export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const { data: rows, error } = await db
    .from('enrollments')
    .select('id, user_id, status, enrolled_at, invited_at, last_activity_at, courses(id, title, slug)')
    .order('enrolled_at', { ascending: false })
    .limit(500)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const userIds = [...new Set((rows ?? []).map((r) => r.user_id))]
  const { data: profiles } = await db.from('profiles').select('id, email, full_name').in('id', userIds)

  const profileById = new Map((profiles ?? []).map((p) => [p.id, p]))

  const students = (rows ?? []).map((r) => ({
    ...r,
    profile: profileById.get(r.user_id) ?? null,
  }))

  return NextResponse.json({ students })
}
