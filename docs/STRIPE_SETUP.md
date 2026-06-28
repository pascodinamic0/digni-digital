# Stripe Setup

This app uses Next.js App Router routes for Stripe Checkout:

- Checkout session creation: `/api/checkout`
- Webhook receiver: `/api/webhooks/stripe`
- Redirect pages: `/:locale/checkout/success` and `/:locale/checkout/canceled`

## Required Environment Variables

Set these locally in `.env.local` and in Netlify environment variables:

```bash
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000

STRIPE_PRICE_AI_EMPLOYEE_MONTHLY=price_...
STRIPE_PRICE_AI_EMPLOYEE_SETUP=price_...
STRIPE_PRICE_FRG_SCHOOL_SEMESTER=price_...
STRIPE_PRICE_FRG_SCHOOL_YEARLY=price_...
STRIPE_PRICE_FRG_GUIDED=price_...
STRIPE_PRICE_FRG_PROFESSIONAL_MONTHLY=price_...
STRIPE_PRICE_AGENTIC_DEPOSIT=price_...
```

For local development with `sk_test_...`, every `STRIPE_PRICE_*` value must be a test mode Price ID. The committed `config/stripe-price-ids-live.env` file is a live catalog fallback only.

## Local Webhooks

1. Start the app with `npm run dev`.
2. In another terminal, run:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

3. Copy the printed `whsec_...` value into `.env.local` as `STRIPE_WEBHOOK_SECRET`.
4. Run `npm run check-stripe`.

## Netlify

In Netlify, add the same variables under Site configuration → Environment variables.

Set `NEXT_PUBLIC_SITE_URL` to the canonical production domain, for example:

```bash
NEXT_PUBLIC_SITE_URL=https://digni-digital-llc.com
```

Create a Stripe Dashboard webhook endpoint:

```text
https://YOUR_DOMAIN/api/webhooks/stripe
```

Subscribe it to these events:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `checkout.session.async_payment_failed`

Copy that endpoint's signing secret into Netlify as `STRIPE_WEBHOOK_SECRET`.

## Supabase Fulfillment

Apply the Supabase migrations before relying on webhook fulfillment:

```bash
supabase db push
```

The webhook stores confirmed Checkout sessions in `public.stripe_checkout_sessions`. For the `frg_guided` plan, it also marks an existing `program_applications` row with the same email as `payment_verified`.
