import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ctaConfig } from '@/app/config/cta.config'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

const SERVICE_IDS = ['ai-employee', 'future-ready', 'agentic-softwares'] as const
type ServiceId = (typeof SERVICE_IDS)[number]

type AnswerRow = { question: string; answer: string }

type AssessmentPayload = {
  serviceId?: string
  serviceName?: string
  matchPercent?: number
  bandLabel?: string
  answers?: AnswerRow[]
  locale?: string
  name?: string
  email?: string
  whatsapp?: string
  submissionId?: string
  kind?: 'completed' | 'lead'
  website?: string
}

function isServiceId(value: string): value is ServiceId {
  return (SERVICE_IDS as readonly string[]).includes(value)
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

function trimField(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function normalizeAnswers(raw: unknown): AnswerRow[] {
  if (!Array.isArray(raw)) return []
  return raw.slice(0, 20).flatMap((row) => {
    if (!row || typeof row !== 'object') return []
    const question = trimField((row as AnswerRow).question, 400)
    const answer = trimField((row as AnswerRow).answer, 400)
    if (!question || !answer) return []
    return [{ question, answer }]
  })
}

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Add RESEND_API_KEY.' },
        { status: 503 },
      )
    }

    const body = (await request.json()) as AssessmentPayload

    // Honeypot — bots that fill hidden fields get a fake success.
    if (trimField(body.website, 200)) {
      return NextResponse.json({ success: true })
    }

    const serviceId = trimField(body.serviceId, 40)
    if (!isServiceId(serviceId)) {
      return NextResponse.json({ error: 'Invalid service' }, { status: 400 })
    }

    const matchPercent = Number(body.matchPercent)
    if (!Number.isFinite(matchPercent) || matchPercent < 0 || matchPercent > 100) {
      return NextResponse.json({ error: 'Invalid match score' }, { status: 400 })
    }

    const answers = normalizeAnswers(body.answers)
    if (answers.length < 1) {
      return NextResponse.json({ error: 'Answers required' }, { status: 400 })
    }

    const serviceName = trimField(body.serviceName, 80) || serviceId
    const bandLabel = trimField(body.bandLabel, 80)
    const locale = trimField(body.locale, 20) || 'en'
    const submissionId = trimField(body.submissionId, 80)
    const kind = body.kind === 'lead' ? 'lead' : 'completed'
    const name = trimField(body.name, 120)
    const email = trimField(body.email, 200).toLowerCase()
    const whatsapp = trimField(body.whatsapp, 40)
    const emailOk = email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) : false

    if (kind === 'lead') {
      if (!name) {
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })
      }
      if (!emailOk && !whatsapp) {
        return NextResponse.json({ error: 'Email or WhatsApp is required' }, { status: 400 })
      }
    }

    const answerRows = answers
      .map(
        (row, i) =>
          `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top;color:#6b7280;">${i + 1}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(row.question)}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;"><strong>${escapeHtml(row.answer)}</strong></td>
          </tr>`,
      )
      .join('')

    const contactBlock =
      kind === 'lead'
        ? `
      <h3>Contact</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${emailOk ? escapeHtml(email) : '—'}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp ? escapeHtml(whatsapp) : '—'}</p>
    `
        : `<p style="color:#6b7280;">No contact left — they saw the score and may have bounced.</p>`

    const html = `
      <h2>${kind === 'lead' ? 'Fit check lead' : 'Fit check completed'}</h2>
      <p><strong>Service:</strong> ${escapeHtml(serviceName)} (${escapeHtml(serviceId)})</p>
      <p><strong>Match:</strong> ${Math.round(matchPercent)}%${bandLabel ? ` — ${escapeHtml(bandLabel)}` : ''}</p>
      <p><strong>Locale:</strong> ${escapeHtml(locale)}</p>
      ${submissionId ? `<p><strong>Submission ID:</strong> ${escapeHtml(submissionId)}</p>` : ''}
      ${contactBlock}
      <h3>Answers</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <thead>
          <tr>
            <th style="text-align:left;padding:8px 12px;border-bottom:2px solid #111;">#</th>
            <th style="text-align:left;padding:8px 12px;border-bottom:2px solid #111;">Question</th>
            <th style="text-align:left;padding:8px 12px;border-bottom:2px solid #111;">Answer</th>
          </tr>
        </thead>
        <tbody>${answerRows}</tbody>
      </table>
      <hr>
      <p style="color:#666;font-size:12px;">Sent from Digni Digital 2-minute fit check</p>
    `

    const score = `${Math.round(matchPercent)}% ${serviceName}`
    const subject =
      kind === 'lead'
        ? `Lead: ${name} (${score})`
        : `Fit check: ${score}`

    const resend = new Resend(RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: `Digni Digital <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      ...(emailOk ? { replyTo: email } : {}),
      subject,
      html,
    })

    if (error) {
      console.error('Assessment notify Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (kind === 'lead' && emailOk) {
      const bookingUrl = ctaConfig.bookingUrl
      const visitorHtml = `
        <p>Hi ${escapeHtml(name)},</p>
        <p>Your ${escapeHtml(serviceName)} fit check scored <strong>${Math.round(matchPercent)}%</strong>${bandLabel ? ` (${escapeHtml(bandLabel)})` : ''}.</p>
        <p>We received your answers and will follow up. If you want to skip the wait:</p>
        <p><a href="${bookingUrl}">Book a consultation</a></p>
        <hr>
        <p style="color:#666;font-size:12px;">Digni Digital — this score was generated from the 2-minute fit check you just completed.</p>
      `
      const visitorSend = await resend.emails.send({
        from: `Digni Digital <${FROM_EMAIL}>`,
        to: [email],
        subject: `Your ${serviceName} fit check: ${Math.round(matchPercent)}%`,
        html: visitorHtml,
      })
      if (visitorSend.error) {
        console.error('Assessment visitor email error:', visitorSend.error)
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Assessment notify error:', err)
    return NextResponse.json({ error: 'Failed to send assessment. Please try again.' }, { status: 500 })
  }
}
