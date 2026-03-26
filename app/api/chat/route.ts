import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { Resend } from 'resend'
import { createAdminClient, isSupabaseServiceConfigured } from '@/lib/supabase/admin'

const CONTACT_EMAIL = process.env.CHAT_NOTIFY_EMAIL || process.env.CONTACT_EMAIL || 'support@digni-digital-llc.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

/** PostgREST when a column is missing from the remote schema cache (migration not applied). */
function isMissingColumnSchemaError(err: { code?: string; message?: string } | null): boolean {
  if (!err) return false
  if (err.code === 'PGRST204') return true
  const m = (err.message || '').toLowerCase()
  return m.includes('column') && m.includes('schema cache')
}

export async function POST(request: Request) {
  let body: {
    conversationId?: string
    visitorToken?: string
    message?: string
    visitorName?: string
    visitorEmail?: string
    visitorPhone?: string
    visitorCompany?: string
    visitorRole?: string
    pageUrl?: string
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const text = body.message?.trim()
  if (!text || text.length > 8000) {
    return NextResponse.json({ error: 'Message required (max 8000 chars)' }, { status: 400 })
  }

  const leadName = body.visitorName?.trim()
  const leadEmail = body.visitorEmail?.trim()
  const leadPhone = body.visitorPhone?.trim()
  const leadCompany = body.visitorCompany?.trim()
  const leadRole = body.visitorRole?.trim()
  const emailOk = leadEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail)

  if (!leadName || leadName.length > 200) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  if (!emailOk) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
  }
  if (!leadPhone || leadPhone.length > 40) {
    return NextResponse.json({ error: 'Phone is required' }, { status: 400 })
  }
  if (!leadCompany || leadCompany.length > 200) {
    return NextResponse.json({ error: 'Company is required' }, { status: 400 })
  }
  if (!leadRole || leadRole.length > 200) {
    return NextResponse.json({ error: 'Role is required' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY

  // No Supabase: still notify by email so the widget works before DB is wired
  if (!isSupabaseServiceConfigured()) {
    if (!resendKey) {
      return NextResponse.json(
        {
          error:
            'Chat is not configured. Add NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY to save threads, or set RESEND_API_KEY to receive messages by email only.',
        },
        { status: 503 }
      )
    }
    const resend = new Resend(resendKey)
    const { error } = await resend.emails.send({
      from: `Digni Digital <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: `Chat message from site (email-only — add Supabase to store threads)`,
      html: leadEmailHtml({
        pageUrl: body.pageUrl,
        name: leadName!,
        email: leadEmail!,
        phone: leadPhone!,
        company: leadCompany!,
        role: leadRole!,
        message: text,
      }),
    })
    if (error) {
      console.error('Chat email-only error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({
      ok: true,
      storage: 'email_only' as const,
      message: 'Message sent. Add Supabase keys to store conversations in the database.',
    })
  }

  const admin = createAdminClient()
  const cookieStore = await cookies()
  let visitorToken = body.visitorToken || cookieStore.get('chat_visitor')?.value || null
  let conversationId = body.conversationId as string | undefined

  if (!conversationId && visitorToken) {
    const { data: existing } = await admin
      .from('chat_conversations')
      .select('id')
      .eq('visitor_token', visitorToken)
      .maybeSingle()
    if (existing?.id) {
      conversationId = existing.id
    }
  }

  let usedLegacyConversationSchema = false

  if (!conversationId) {
    if (!visitorToken) {
      visitorToken = crypto.randomUUID()
    }
    const fullRow = {
      visitor_token: visitorToken,
      visitor_name: leadName!,
      visitor_email: leadEmail!,
      visitor_phone: leadPhone!,
      visitor_company: leadCompany!,
      visitor_role: leadRole!,
      page_url: body.pageUrl ?? null,
    }
    let { data: conv, error: cErr } = await admin.from('chat_conversations').insert(fullRow).select('id').single()

    if (cErr && isMissingColumnSchemaError(cErr)) {
      console.warn(
        'chat_conversations: full lead columns missing on DB; retrying minimal row. Apply supabase/migrations/20250325130000_chat_lead_fields.sql for structured fields.'
      )
      const retry = await admin
        .from('chat_conversations')
        .insert({
          visitor_token: visitorToken,
          visitor_name: leadName!,
          visitor_email: leadEmail!,
          page_url: body.pageUrl ?? null,
        })
        .select('id')
        .single()
      conv = retry.data
      cErr = retry.error
      if (!cErr && conv) usedLegacyConversationSchema = true
    }

    if (cErr || !conv) {
      console.error('chat_conversations insert:', cErr)
      // Table missing or RLS — fall back to email if possible
      if (resendKey) {
        const resend = new Resend(resendKey)
        await resend.emails
          .send({
            from: `Digni Digital <${FROM_EMAIL}>`,
            to: [CONTACT_EMAIL],
            subject: `Chat message (DB error — check Supabase migration)`,
            html:
              leadEmailHtml({
                pageUrl: body.pageUrl,
                name: leadName!,
                email: leadEmail!,
                phone: leadPhone!,
                company: leadCompany!,
                role: leadRole!,
                message: text,
                extra: String(cErr?.message || cErr),
              }),
          })
          .catch((err) => console.error(err))
        return NextResponse.json({
          ok: true,
          storage: 'email_only' as const,
          warning: 'Could not save to database; message was emailed. Run supabase/migrations SQL if you have not.',
        })
      }
      return NextResponse.json(
        { error: cErr?.message || 'Could not start chat. Confirm chat tables exist in Supabase.' },
        { status: 500 }
      )
    }
    conversationId = conv.id
  }

  const messageBodyForDb = usedLegacyConversationSchema
    ? `Phone: ${leadPhone}\nCompany: ${leadCompany}\nRole: ${leadRole}\n\n${text}`
    : text

  const { error: mErr } = await admin.from('chat_messages').insert({
    conversation_id: conversationId,
    body: messageBodyForDb,
    sender: 'visitor',
  })

  if (mErr) {
    console.error('chat_messages insert:', mErr)
    if (resendKey) {
      const resend = new Resend(resendKey)
      await resend.emails
        .send({
          from: `Digni Digital <${FROM_EMAIL}>`,
          to: [CONTACT_EMAIL],
          subject: `Chat message (DB insert failed)`,
          html: leadEmailHtml({
            pageUrl: body.pageUrl,
            name: leadName!,
            email: leadEmail!,
            phone: leadPhone!,
            company: leadCompany!,
            role: leadRole!,
            message: text,
          }),
        })
        .catch((err) => console.error(err))
      return NextResponse.json({
        ok: true,
        storage: 'email_only' as const,
        warning: 'Message emailed; could not save to DB.',
      })
    }
    return NextResponse.json({ error: mErr.message }, { status: 500 })
  }

  await admin
    .from('chat_conversations')
    .update({ updated_at: new Date().toISOString() })
    .eq('id', conversationId)

  const res = NextResponse.json({
    ok: true,
    conversationId,
    visitorToken: visitorToken!,
    storage: 'database' as const,
  })

  res.cookies.set('chat_visitor', visitorToken!, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  if (resendKey) {
    const resend = new Resend(resendKey)
    await resend.emails
      .send({
        from: `Digni Digital <${FROM_EMAIL}>`,
        to: [CONTACT_EMAIL],
        subject: `Chat message from site`,
        html: leadEmailHtml({
          pageUrl: body.pageUrl,
          name: leadName!,
          email: leadEmail!,
          phone: leadPhone!,
          company: leadCompany!,
          role: leadRole!,
          message: text,
          conversationId,
        }),
      })
      .catch((err) => console.error('Chat notify email:', err))
  }

  return res
}

function leadEmailHtml(opts: {
  pageUrl?: string
  name: string
  email: string
  phone: string
  company: string
  role: string
  message: string
  conversationId?: string
  extra?: string
}) {
  const h = escapeHtml
  const lines = [
    opts.conversationId ? `<p><strong>Conversation</strong> ${h(opts.conversationId)}</p>` : '',
    `<p><strong>Name:</strong> ${h(opts.name)}</p>`,
    `<p><strong>Email:</strong> ${h(opts.email)}</p>`,
    `<p><strong>Phone:</strong> ${h(opts.phone)}</p>`,
    `<p><strong>Company:</strong> ${h(opts.company)}</p>`,
    `<p><strong>Role:</strong> ${h(opts.role)}</p>`,
    `<p><strong>Page:</strong> ${h(opts.pageUrl || '—')}</p>`,
    `<p><strong>Message</strong></p><p>${h(opts.message).replace(/\n/g, '<br>')}</p>`,
    opts.extra ? `<p><strong>Note:</strong> ${h(opts.extra)}</p>` : '',
  ]
  return lines.filter(Boolean).join('\n')
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]!))
}
