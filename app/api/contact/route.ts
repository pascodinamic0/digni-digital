import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

const PROJECT_TYPE_LABELS: Record<string, string> = {
  'ai-employee': 'AI Employee',
  'future-ready-graduate': 'Digni Digital Literacy',
  'custom-saas': 'Custom SaaS',
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Contact API is running',
    hasResendKey: !!RESEND_API_KEY,
  })
}

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to your environment.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, company, message, projectType } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const projectTypeLabel = projectType
      ? PROJECT_TYPE_LABELS[projectType] || projectType
      : 'Not specified'

    const resend = new Resend(RESEND_API_KEY)
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectTypeLabel)}</p>
      <h3>Message</h3>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color:#666;font-size:12px;">Sent from Digni Digital contact form</p>
    `

    const { data, error } = await resend.emails.send({
      from: `Digni Digital <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Contact: ${name}${company ? ` (${company})` : ''}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
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
