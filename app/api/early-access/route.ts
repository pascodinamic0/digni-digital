import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeqLxEb7t89Ju-sTx7s4MQj8PYBX-otT40f-R3nNSZ61DGRMA/formResponse'

/** Google Form entry IDs (from form HTML - text inputs use nested entry ID, not question ID) */
const GOOGLE_FORM_ENTRIES = {
  firstName: '1040531968',
  lastName: '1389620957',
  email: '528719712',
  whatsapp: '1342436349',
  profession: '1333221041',
  whyJoin: '1386820400',
  commitReady: '1964017135',
  paidProgram: '1668826988',
} as const

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to your environment.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      whatsapp,
      profession,
      whyJoin,
      commitReady,
      paidProgram,
    } = body

    if (!firstName || !lastName || !email || !whatsapp || !profession || !whyJoin || !commitReady || !paidProgram) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const resend = new Resend(RESEND_API_KEY)
    const html = `
      <h2>Early Access — Self-Learning Program</h2>
      <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
      <p><strong>Profession:</strong> ${escapeHtml(profession)}</p>
      <p><strong>Why join:</strong></p>
      <p>${escapeHtml(whyJoin).replace(/\n/g, '<br>')}</p>
      <p><strong>Ready to commit 3 days/week for 1 month:</strong> ${escapeHtml(commitReady)}</p>
      <p><strong>Agrees to paid program ($25/month):</strong> ${escapeHtml(paidProgram)}</p>
      <hr>
      <p style="color:#666;font-size:12px;">Sent from Digni Digital Early Access form</p>
    `

    const { data, error } = await resend.emails.send({
      from: `Digni Digital <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Early Access: ${firstName} ${lastName} (${profession})`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Also submit to Google Form (fire-and-forget; don't fail if it errors)
    const googleFormBody = new URLSearchParams({
      [`entry.${GOOGLE_FORM_ENTRIES.firstName}`]: firstName,
      [`entry.${GOOGLE_FORM_ENTRIES.lastName}`]: lastName,
      [`entry.${GOOGLE_FORM_ENTRIES.email}`]: email,
      [`entry.${GOOGLE_FORM_ENTRIES.whatsapp}`]: whatsapp,
      [`entry.${GOOGLE_FORM_ENTRIES.profession}`]: profession,
      [`entry.${GOOGLE_FORM_ENTRIES.whyJoin}`]: whyJoin,
      [`entry.${GOOGLE_FORM_ENTRIES.commitReady}`]: commitReady === 'yes' ? 'Yes' : 'No',
      [`entry.${GOOGLE_FORM_ENTRIES.paidProgram}`]: paidProgram === 'yes' ? 'Yes' : 'No',
    })
    fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: googleFormBody.toString(),
    }).catch((err) => console.error('Google Form submission error:', err))

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Early Access API error:', err)
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
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
