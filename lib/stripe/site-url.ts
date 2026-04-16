/**
 * Base URL for Stripe Checkout success/cancel redirects.
 */
export function getSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (explicit) return explicit
  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`
  return 'http://localhost:3000'
}
