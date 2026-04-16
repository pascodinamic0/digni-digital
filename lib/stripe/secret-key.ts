/**
 * Resolve Stripe secret key from env.
 * Vercel Marketplace Stripe integration uses STRIPE_SECRET_KEY.
 * Some templates use STRIPE_API_KEY — we accept both.
 */
export function getStripeSecretKey(): string | undefined {
  const a = process.env.STRIPE_SECRET_KEY?.trim()
  if (a) return a
  const b = process.env.STRIPE_API_KEY?.trim()
  if (b) return b
  return undefined
}
