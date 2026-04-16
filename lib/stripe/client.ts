import Stripe from 'stripe'
import { getStripeSecretKey } from '@/lib/stripe/secret-key'

let stripeSingleton: Stripe | null = null

export function getStripe(): Stripe | null {
  const key = getStripeSecretKey()
  if (!key) return null
  if (!stripeSingleton) {
    stripeSingleton = new Stripe(key, {
      apiVersion: '2025-10-29.clover',
      typescript: true,
    })
  }
  return stripeSingleton
}
