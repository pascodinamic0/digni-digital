import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createAdminClient, isSupabaseServiceConfigured } from '@/lib/supabase/admin'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      instagram,
      tiktok,
      youtube,
      audienceSize,
      message,
      locale,
    } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailNorm = String(email).trim().toLowerCase()
    const localeStr = typeof locale === 'string' && locale ? locale : 'us-en'
    const phoneStr =
      typeof phone === 'string' && phone.trim() ? phone.trim() : null

    const hasSupabase = isSupabaseServiceConfigured()

    if (hasSupabase) {
      try {
        const admin = createAdminClient()
        const { error: dbError } = await admin.from('affiliate_applications').insert({
          name: String(name).trim(),
          email: emailNorm,
          phone: phoneStr,
          instagram: typeof instagram === 'string' ? instagram.trim() || null : null,
          tiktok: typeof tiktok === 'string' ? tiktok.trim() || null : null,
          youtube: typeof youtube === 'string' ? youtube.trim() || null : null,
          audience_size: typeof audienceSize === 'string' ? audienceSize.trim() || null : null,
          message: typeof message === 'string' ? message.trim() || null : null,
          locale: localeStr,
        })
        if (dbError) {
          console.error('Affiliate DB error:', dbError)
          return NextResponse.json(
            { error: 'Could not save your application. Please try again.' },
            { status: 500 }
          )
        }
      } catch (e) {
        console.error('Affiliate Supabase client error:', e)
        return NextResponse.json(
          { error: 'Could not save your application. Please try again.' },
          { status: 500 }
        )
      }
    }

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY)

      const html = `
      <h2>New Affiliate Application</h2>
      <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
      <p><strong>Email:</strong> ${escapeHtml(emailNorm)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phoneStr || '—')}</p>
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
        replyTo: emailNorm,
        subject: `Affiliate Application: ${name}`,
        html,
      })

      if (error) {
        console.error('Resend error:', error)
        if (!hasSupabase) {
          return NextResponse.json({ error: error.message }, { status: 500 })
        }
      }
    } else if (!hasSupabase) {
      return NextResponse.json(
        { error: 'Service not configured. Add Supabase keys and/or RESEND_API_KEY.' },
        { status: 503 }
      )
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
