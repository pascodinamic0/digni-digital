import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient } from '@/lib/supabase/admin'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeqLxEb7t89Ju-sTx7s4MQj8PYBX-otT40f-R3nNSZ61DGRMA/formResponse'

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

function googleFormEnabled() {
  const v = process.env.EARLY_ACCESS_GOOGLE_FORM_ENABLED
  if (v === undefined || v === 'true') return true
  return v === '1'
}

export async function POST(request: Request) {
  try {
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
      locale,
    } = body

    if (!firstName || !lastName || !email || !whatsapp || !profession || !whyJoin || !commitReady || !paidProgram) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const emailNorm = String(email).trim().toLowerCase()
    const localeStr = typeof locale === 'string' && locale ? locale : 'us-en'

    const hasSupabase =
      process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY

    if (hasSupabase) {
      try {
        const admin = createAdminClient()
        const { error: dbError } = await admin.from('program_applications').upsert(
          {
            first_name: firstName,
            last_name: lastName,
            email: emailNorm,
            whatsapp,
            profession,
            why_join: whyJoin,
            commit_ready: commitReady,
            paid_program: paidProgram,
            locale: localeStr,
            status: 'submitted',
          },
          { onConflict: 'email' }
        )
        if (dbError) {
          console.error('Early Access DB error:', dbError)
          return NextResponse.json({ error: 'Could not save submission. Please try again.' }, { status: 500 })
        }
      } catch (e) {
        console.error('Early Access Supabase client error:', e)
        return NextResponse.json({ error: 'Could not save submission. Please try again.' }, { status: 500 })
      }
    }

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY)
      const html = `
      <h2>Early Access: Self-Learning Program</h2>
      <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(emailNorm)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
      <p><strong>Profession:</strong> ${escapeHtml(profession)}</p>
      <p><strong>Why join:</strong></p>
      <p>${escapeHtml(whyJoin).replace(/\n/g, '<br>')}</p>
      <p><strong>Ready to commit 3 days/week for 1 month:</strong> ${escapeHtml(commitReady)}</p>
      <p><strong>Agrees to paid program ($49/month):</strong> ${escapeHtml(paidProgram)}</p>
      <hr>
      <p style="color:#666;font-size:12px;">Sent from Digni Digital Early Access form</p>
    `

      const { data, error } = await resend.emails.send({
        from: `Digni Digital <${FROM_EMAIL}>`,
        to: [CONTACT_EMAIL],
        replyTo: emailNorm,
        subject: `Early Access: ${firstName} ${lastName} (${profession})`,
        html,
      })

      if (error) {
        console.error('Resend error:', error)
        if (!hasSupabase) {
          return NextResponse.json({ error: error.message }, { status: 500 })
        }
      } else if (data) {
        // continue
      }
    } else if (!hasSupabase) {
      return NextResponse.json(
        { error: 'Service not configured. Add Supabase keys and/or RESEND_API_KEY.' },
        { status: 503 }
      )
    }

    if (googleFormEnabled()) {
      const googleFormBody = new URLSearchParams({
        [`entry.${GOOGLE_FORM_ENTRIES.firstName}`]: firstName,
        [`entry.${GOOGLE_FORM_ENTRIES.lastName}`]: lastName,
        [`entry.${GOOGLE_FORM_ENTRIES.email}`]: emailNorm,
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
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Early Access API error:', err)
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 })
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
