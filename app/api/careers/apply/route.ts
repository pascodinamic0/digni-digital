import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  CAREER_MAX_FILE_BYTES,
  CAREER_MAX_TOTAL_BYTES,
  CAREER_ROLE_IDS,
  CAREER_ROLE_LABEL,
  type CareerRoleId,
} from '@/lib/careers-apply-limits'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const TO_EMAIL = process.env.CAREERS_EMAIL || process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

const ALLOWED_CV_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

const ALLOWED_PORTFOLIO_TYPES = new Set([
  ...ALLOWED_CV_TYPES,
  'image/png',
  'image/jpeg',
  'image/webp',
  'application/zip',
])

function extOk(name: string, exts: string[]) {
  const lower = name.toLowerCase()
  return exts.some((e) => lower.endsWith(e))
}

function isAllowedCv(file: File): boolean {
  if (file.type && ALLOWED_CV_TYPES.has(file.type)) return true
  return extOk(file.name, ['.pdf', '.doc', '.docx'])
}

function isAllowedPortfolio(file: File): boolean {
  if (file.type && ALLOWED_PORTFOLIO_TYPES.has(file.type)) return true
  return extOk(file.name, ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg', '.webp', '.zip'])
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

function isCareerRoleId(v: string): v is CareerRoleId {
  return (CAREER_ROLE_IDS as readonly string[]).includes(v)
}

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to your environment.' },
        { status: 503 }
      )
    }

    const form = await request.formData()

    const roleRaw = String(form.get('role') ?? '')
    if (!isCareerRoleId(roleRaw)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
    }

    const fullName = String(form.get('fullName') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const timezone = String(form.get('timezone') ?? '').trim()
    const portfolioLink = String(form.get('portfolioLink') ?? '').trim()
    const intro = String(form.get('intro') ?? '').trim()

    if (!fullName || !email || !intro) {
      return NextResponse.json(
        { error: 'Full name, email, and your introduction are required' },
        { status: 400 }
      )
    }

    const cv = form.get('cv')
    if (!cv || typeof cv === 'string' || !('arrayBuffer' in cv)) {
      return NextResponse.json({ error: 'CV file is required' }, { status: 400 })
    }

    const cvFile = cv as File
    if (cvFile.size === 0) {
      return NextResponse.json({ error: 'CV file is empty' }, { status: 400 })
    }
    if (cvFile.size > CAREER_MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: `CV must be ${Math.floor(CAREER_MAX_FILE_BYTES / (1024 * 1024))}MB or smaller` },
        { status: 400 }
      )
    }
    if (!isAllowedCv(cvFile)) {
      return NextResponse.json(
        { error: 'CV must be a PDF or Word document' },
        { status: 400 }
      )
    }

    const portfolio = form.get('portfolio')
    let portfolioFile: File | null = null
    if (portfolio && typeof portfolio !== 'string' && 'arrayBuffer' in portfolio) {
      portfolioFile = portfolio as File
      if (portfolioFile.size > 0) {
        if (portfolioFile.size > CAREER_MAX_FILE_BYTES) {
          return NextResponse.json(
            { error: `Portfolio file must be ${Math.floor(CAREER_MAX_FILE_BYTES / (1024 * 1024))}MB or smaller` },
            { status: 400 }
          )
        }
        if (!isAllowedPortfolio(portfolioFile)) {
          return NextResponse.json(
            { error: 'Portfolio file: use PDF, images, Word, or ZIP' },
            { status: 400 }
          )
        }
      } else {
        portfolioFile = null
      }
    }

    let total = cvFile.size + (portfolioFile?.size ?? 0)
    if (total > CAREER_MAX_TOTAL_BYTES) {
      return NextResponse.json(
        {
          error: `Total upload size must be under ${Math.ceil(CAREER_MAX_TOTAL_BYTES / (1024 * 1024))}MB. Try smaller files or use the portfolio link field.`,
        },
        { status: 400 }
      )
    }

    const roleLabel = CAREER_ROLE_LABEL[roleRaw]

    const cvBuf = Buffer.from(await cvFile.arrayBuffer())
    const attachments: { filename: string; content: Buffer }[] = [
      {
        filename: cvFile.name || 'cv.pdf',
        content: cvBuf,
      },
    ]

    if (portfolioFile) {
      const pBuf = Buffer.from(await portfolioFile.arrayBuffer())
      attachments.push({
        filename: portfolioFile.name || 'portfolio',
        content: pBuf,
      })
    }

    const html = `
      <h2>New careers application</h2>
      <p><strong>Role:</strong> ${escapeHtml(roleLabel)}</p>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Country / timezone:</strong> ${escapeHtml(timezone || '—')}</p>
      <p><strong>Portfolio link:</strong> ${portfolioLink ? escapeHtml(portfolioLink) : '—'}</p>
      <h3>Introduction</h3>
      <p>${escapeHtml(intro).replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color:#666;font-size:12px;">Attachments: CV${portfolioFile ? ' + portfolio file' : ''}</p>
    `

    const resend = new Resend(RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: `Digni Digital <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Careers application: ${roleLabel} — ${fullName}`,
      html,
      attachments,
    })

    if (error) {
      console.error('Resend careers error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Careers apply API error:', err)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}
