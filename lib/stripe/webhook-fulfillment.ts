import type Stripe from 'stripe'
import { createAdminClient, isSupabaseServiceConfigured } from '@/lib/supabase/admin'
import { isCheckoutPlanKey } from '@/lib/stripe/checkout-plans'

function expandableId(value: string | { id?: string } | null): string | null {
  if (!value) return null
  if (typeof value === 'string') return value
  return typeof value.id === 'string' ? value.id : null
}

function isPaidSession(session: Stripe.Checkout.Session) {
  return session.payment_status === 'paid' || session.payment_status === 'no_payment_required'
}

export async function handleCheckoutSessionPaid(
  session: Stripe.Checkout.Session,
  eventId: string,
): Promise<{ stored: boolean; fulfilled: boolean; reason?: string }> {
  const plan = session.metadata?.plan
  const locale = session.metadata?.locale ?? null
  const email = session.customer_details?.email?.trim().toLowerCase() ?? null

  if (!isCheckoutPlanKey(plan)) {
    return { stored: false, fulfilled: false, reason: 'missing_plan_metadata' }
  }

  if (!isSupabaseServiceConfigured()) {
    console.info('[stripe webhook] Supabase not configured; verified session only', {
      session: session.id,
      event: eventId,
      plan,
    })
    return { stored: false, fulfilled: false, reason: 'supabase_not_configured' }
  }

  const db = createAdminClient()
  const now = new Date().toISOString()
  const fulfilled = isPaidSession(session)

  const { error: upsertError } = await db.from('stripe_checkout_sessions').upsert(
    {
      stripe_session_id: session.id,
      stripe_event_id: eventId,
      plan,
      locale,
      mode: session.mode,
      status: session.status,
      payment_status: session.payment_status,
      customer_email: email,
      customer_id: expandableId(session.customer),
      subscription_id: expandableId(session.subscription),
      amount_total: session.amount_total,
      currency: session.currency,
      raw: session,
      fulfilled_at: fulfilled ? now : null,
    },
    { onConflict: 'stripe_session_id' },
  )

  if (upsertError) {
    console.error('[stripe webhook] checkout session upsert failed', upsertError)
    throw new Error(upsertError.message)
  }

  if (fulfilled && plan === 'frg_guided' && email) {
    const { error: applicationError } = await db
      .from('program_applications')
      .update({ status: 'payment_verified' })
      .eq('email', email)
      .in('status', ['submitted', 'payment_pending'])

    if (applicationError) {
      console.error('[stripe webhook] application payment update failed', applicationError)
      throw new Error(applicationError.message)
    }
  }

  return { stored: true, fulfilled }
}
