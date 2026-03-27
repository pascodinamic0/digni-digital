import { Resend } from 'resend'

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function sendLmsInviteEmail(params: {
  to: string
  courseTitle: string
  inviteUrl: string
  expiresInHours: number
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    return { ok: false, error: 'RESEND_API_KEY is not configured' }
  }

  const resend = new Resend(key)
  const { to, courseTitle, inviteUrl, expiresInHours } = params

  const { error } = await resend.emails.send({
    from: `Digni Digital <${FROM_EMAIL}>`,
    to: [to],
    subject: `Your access link: ${courseTitle}`,
    html: `
      <h2>You’re invited</h2>
      <p>You’ve been invited to <strong>${escapeHtml(courseTitle)}</strong>.</p>
      <p>Open the secure link below to set your password (new accounts) or sign in and access the course.</p>
      <p><a href="${escapeHtml(inviteUrl)}" style="display:inline-block;padding:12px 20px;background:#2563eb;color:#fff;text-decoration:none;border-radius:8px;">Accept invitation</a></p>
      <p style="color:#64748b;font-size:14px;">This link expires in ${expiresInHours} hours. If you didn’t expect this email, you can ignore it.</p>
    `,
  })

  if (error) {
    console.error('LMS invite Resend error:', error)
    return { ok: false, error: error.message }
  }
  return { ok: true }
}
