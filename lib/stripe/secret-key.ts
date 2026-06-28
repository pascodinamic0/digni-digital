import { stripeServerEnv } from '@/lib/stripe/env'

/**
 * Resolve Stripe secret key from env.
 * Vercel Marketplace Stripe integration uses STRIPE_SECRET_KEY.
 * Some templates use STRIPE_API_KEY — we accept both.
 */
export function getStripeSecretKey(): string | undefined {
  const a = stripeServerEnv('STRIPE_SECRET_KEY')
  if (a) return a
  const b = stripeServerEnv('STRIPE_API_KEY')
  if (b) return b
  return undefined
}

export function getStripeSecretMode(): 'test' | 'live' | null {
  const key = getStripeSecretKey()
  if (key?.startsWith('sk_test_')) return 'test'
  if (key?.startsWith('sk_live_')) return 'live'
  return null
}
