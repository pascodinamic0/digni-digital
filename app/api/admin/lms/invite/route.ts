import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { generateInviteSecret } from '@/lib/lms/invite-token'
import { sendLmsInviteEmail } from '@/lib/email/send-lms-invite'

function ttlHoursFromEnv(): number {
  const raw = process.env.LMS_INVITE_TTL_HOURS
  const n = raw ? Number(raw) : 48
  if (!Number.isFinite(n)) return 48
  return Math.min(168, Math.max(1, Math.floor(n)))
}

/**
 * Creates a hashed invite row and emails a Resend link. Enrollment is completed when the learner
 * opens the link (existing account) or finishes the Supabase invite flow (new account, auth callback).
 */
export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db, user } = gate

  let body: { email?: string; courseId?: string; locale?: string; ttlHours?: number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = body.email?.trim()
  const courseId = body.courseId?.trim()
  const locale = (body.locale?.trim() || 'us-en').replace(/^\//, '')
  if (!email || !courseId) {
    return NextResponse.json({ error: 'email and courseId required' }, { status: 400 })
  }

  const ttl =
    body.ttlHours != null && Number.isFinite(body.ttlHours)
      ? Math.min(168, Math.max(1, Math.floor(Number(body.ttlHours))))
      : ttlHoursFromEnv()

  const { data: course } = await db.from('courses').select('id, title').eq('id', courseId).maybeSingle()
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 })

  const { plain, hash } = generateInviteSecret()
  const expiresAt = new Date(Date.now() + ttl * 3600 * 1000).toISOString()

  const { data: row, error: insErr } = await db
    .from('lms_invites')
    .insert({
      email: email.toLowerCase(),
      course_id: courseId,
      token_hash: hash,
      expires_at: expiresAt,
      created_by: user.id,
    })
    .select('id')
    .single()

  if (insErr || !row) {
    return NextResponse.json({ error: insErr?.message ?? 'Failed to create invite' }, { status: 500 })
  }

  const site = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
  const inviteUrl = `${site}/${locale}/learn/invite?token=${encodeURIComponent(plain)}`

  const sent = await sendLmsInviteEmail({
    to: email,
    courseTitle: course.title,
    inviteUrl,
    expiresInHours: ttl,
  })

  if (!sent.ok) {
    await db.from('lms_invites').delete().eq('id', row.id)
    return NextResponse.json({ error: sent.error }, { status: 503 })
  }

  return NextResponse.json({
    ok: true,
    inviteId: row.id,
    message: `Invite email sent to ${email} for "${course.title}". Link expires in ${ttl}h.`,
  })
}
