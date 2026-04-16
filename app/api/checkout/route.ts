import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { locales } from '@/i18n/routing'
import { getStripe } from '@/lib/stripe/client'
import {
  CHECKOUT_PLANS,
  isCheckoutPlanKey,
  resolvePriceIdsForPlan,
  stripeCheckoutLocale,
} from '@/lib/stripe/checkout-plans'
import { getSiteOrigin } from '@/lib/stripe/site-url'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const stripe = getStripe()
  if (!stripe) {
    return NextResponse.json({ error: 'Payments are not configured.' }, { status: 503 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const planRaw = 'plan' in body ? (body as { plan: unknown }).plan : undefined
  const localeRaw = 'locale' in body ? (body as { locale: unknown }).locale : undefined

  if (!isCheckoutPlanKey(planRaw)) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const locale =
    typeof localeRaw === 'string' && (locales as readonly string[]).includes(localeRaw) ? localeRaw : 'us-en'

  const priceIds = resolvePriceIdsForPlan(planRaw)
  if (!priceIds) {
    return NextResponse.json(
      { error: 'This offer is not available for checkout yet. Please book a call.' },
      { status: 503 },
    )
  }

  const origin = getSiteOrigin()
  const def = CHECKOUT_PLANS[planRaw]
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = priceIds.map((price) => ({
    price,
    quantity: 1,
  }))

  try {
    const session = await stripe.checkout.sessions.create({
      mode: def.mode,
      line_items,
      success_url: `${origin}/${locale}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${locale}/checkout/canceled`,
      allow_promotion_codes: true,
      locale: stripeCheckoutLocale(locale),
      metadata: { plan: planRaw, locale },
      ...(def.mode === 'payment'
        ? { customer_creation: 'always' as const }
        : { subscription_data: { metadata: { plan: planRaw, locale } } }),
    })

    if (!session.url) {
      return NextResponse.json({ error: 'No checkout URL returned' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error('[checkout]', e)
    const message = e instanceof Error ? e.message : 'Checkout failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
