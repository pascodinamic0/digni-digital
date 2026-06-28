import { stripeServerEnv } from '@/lib/stripe/env'

/**
 * Base URL for Stripe Checkout success/cancel redirects.
 */
export function getSiteOrigin(): string {
  const explicit = stripeServerEnv('NEXT_PUBLIC_SITE_URL')?.replace(/\/$/, '')
  if (explicit) return explicit
  const netlifyUrl = stripeServerEnv('URL') || stripeServerEnv('DEPLOY_PRIME_URL')
  if (netlifyUrl) return netlifyUrl.replace(/\/$/, '')
  const vercel = stripeServerEnv('VERCEL_URL')
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`
  return 'http://localhost:3000'
}
