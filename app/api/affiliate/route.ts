import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, instagram, tiktok, youtube, audienceSize, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const resend = new Resend(RESEND_API_KEY)

    const html = `
      <h2>New Affiliate Application</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Instagram:</strong> ${escapeHtml(instagram || '—')}</p>
      <p><strong>TikTok:</strong> ${escapeHtml(tiktok || '—')}</p>
      <p><strong>YouTube:</strong> ${escapeHtml(youtube || '—')}</p>
      <p><strong>Audience Size:</strong> ${escapeHtml(audienceSize || '—')}</p>
      <h3>Why They Want to Partner</h3>
      <p>${escapeHtml(message || '—').replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color:#666;font-size:12px;">Sent from Digni Digital affiliate application form</p>
    `

    const { error } = await resend.emails.send({
      from: `Digni Digital <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Affiliate Application: ${name}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Affiliate API error:', err)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return String(text).replace(/[&<>"']/g, (m) => map[m])
}
