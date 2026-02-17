import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID
const RESEND_SEGMENT_ID = process.env.RESEND_SEGMENT_ID

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const email = typeof body?.email === 'string' ? body.email.trim() : ''

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (RESEND_API_KEY && (RESEND_SEGMENT_ID || RESEND_AUDIENCE_ID)) {
      const resend = new Resend(RESEND_API_KEY)
      if (RESEND_SEGMENT_ID) {
        const { error } = await resend.contacts.create({ email, segments: [{ id: RESEND_SEGMENT_ID }] })
        if (error) {
          console.error('Newsletter signup Resend error:', error)
          return NextResponse.json({ error: error.message }, { status: 500 })
        }
      } else if (RESEND_AUDIENCE_ID) {
        const { error } = await resend.contacts.create({
          audienceId: RESEND_AUDIENCE_ID,
          email,
        } as { audienceId: string; email: string })
        if (error) {
          console.error('Newsletter signup Resend error:', error)
          return NextResponse.json({ error: error.message }, { status: 500 })
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
