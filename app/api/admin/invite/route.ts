import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { FUTURE_READY_COURSE_ID } from '@/lib/course-ids'

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const admin = gate.db

  let body: { applicationId?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const applicationId = body.applicationId
  if (!applicationId) {
    return NextResponse.json({ error: 'applicationId required' }, { status: 400 })
  }

  const { data: app, error: appErr } = await admin.from('program_applications').select('*').eq('id', applicationId).single()

  if (appErr || !app) {
    return NextResponse.json({ error: 'Application not found' }, { status: 404 })
  }

  if (app.status !== 'payment_verified') {
    return NextResponse.json({ error: 'Application must be payment_verified first' }, { status: 400 })
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const redirectTo = `${site}/auth/callback?next=${encodeURIComponent('/us-en/learn')}`

  const { data: inviteData, error: inviteErr } = await admin.auth.admin.inviteUserByEmail(app.email, {
    redirectTo,
  })

  if (inviteErr || !inviteData?.user?.id) {
    console.error(inviteErr)
    return NextResponse.json({ error: inviteErr?.message ?? 'Invite failed' }, { status: 500 })
  }

  const userId = inviteData.user.id

  const { error: upErr } = await admin
    .from('program_applications')
    .update({
      status: 'invited',
      invited_user_id: userId,
    })
    .eq('id', applicationId)

  if (upErr) {
    return NextResponse.json({ error: upErr.message }, { status: 500 })
  }

  const { error: enErr } = await admin.from('enrollments').upsert(
    {
      user_id: userId,
      course_id: FUTURE_READY_COURSE_ID,
      status: 'active',
      invited_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,course_id' }
  )

  if (enErr) {
    console.error('enrollment upsert error', enErr)
    return NextResponse.json({ error: enErr.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, userId })
}
