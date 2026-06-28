import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe/client'
import { stripeServerEnv } from '@/lib/stripe/env'
import { handleCheckoutSessionPaid } from '@/lib/stripe/webhook-fulfillment'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const stripe = getStripe()
  const whSecret = stripeServerEnv('STRIPE_WEBHOOK_SECRET')
  if (!stripe || !whSecret) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature, whSecret)
  } catch (err) {
    console.error('[stripe webhook] signature', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  let handled = false
  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded':
      await handleCheckoutSessionPaid(event.data.object as Stripe.Checkout.Session, event.id)
      handled = true
      break
    case 'checkout.session.async_payment_failed':
      console.warn('[stripe webhook] async payment failed', {
        event: event.id,
        session: (event.data.object as Stripe.Checkout.Session).id,
      })
      break
    default:
      break
  }

  return NextResponse.json({ received: true, handled })
}
