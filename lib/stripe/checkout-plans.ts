import type Stripe from 'stripe'
import { stripePriceEnv } from '@/lib/stripe/price-env'

export const CHECKOUT_PLAN_KEYS = [
  'ai_employee',
  'frg_school_monthly',
  'frg_school_semester',
  'frg_school_yearly',
  'frg_guided',
  'frg_professional_monthly',
  'agentic_deposit',
] as const

export type CheckoutPlanKey = (typeof CHECKOUT_PLAN_KEYS)[number]

type PlanDefinition =
  | { mode: 'subscription'; envKeys: readonly string[] }
  | { mode: 'payment'; envKeys: readonly string[] }

export const CHECKOUT_PLANS: Record<CheckoutPlanKey, PlanDefinition> = {
  ai_employee: {
    mode: 'subscription',
    envKeys: ['STRIPE_PRICE_AI_EMPLOYEE_MONTHLY', 'STRIPE_PRICE_AI_EMPLOYEE_SETUP'],
  },
  frg_school_monthly: {
    mode: 'subscription',
    envKeys: ['STRIPE_PRICE_FRG_SCHOOL_MONTHLY'],
  },
  frg_school_semester: {
    mode: 'payment',
    envKeys: ['STRIPE_PRICE_FRG_SCHOOL_SEMESTER'],
  },
  frg_school_yearly: {
    mode: 'subscription',
    envKeys: ['STRIPE_PRICE_FRG_SCHOOL_YEARLY'],
  },
  frg_guided: {
    mode: 'payment',
    envKeys: ['STRIPE_PRICE_FRG_GUIDED'],
  },
  frg_professional_monthly: {
    mode: 'subscription',
    envKeys: ['STRIPE_PRICE_FRG_PROFESSIONAL_MONTHLY'],
  },
  agentic_deposit: {
    mode: 'payment',
    envKeys: ['STRIPE_PRICE_AGENTIC_DEPOSIT'],
  },
}

export function isCheckoutPlanKey(value: unknown): value is CheckoutPlanKey {
  return typeof value === 'string' && (CHECKOUT_PLAN_KEYS as readonly string[]).includes(value)
}

export function resolvePriceIdsForPlan(plan: CheckoutPlanKey): string[] | null {
  const def = CHECKOUT_PLANS[plan]
  const ids: string[] = []
  for (const envKey of def.envKeys) {
    const v = stripePriceEnv(envKey)
    if (!v || !v.startsWith('price_')) return null
    ids.push(v)
  }
  return ids
}

/** Stripe Checkout `locale` from route locale e.g. `us-en` → `en`. */
export function stripeCheckoutLocale(
  routeLocale: string,
): Stripe.Checkout.SessionCreateParams['locale'] {
  const lang = routeLocale.split('-')[1]?.toLowerCase()
  switch (lang) {
    case 'en':
      return 'en'
    case 'fr':
      return 'fr'
    case 'es':
      return 'es'
    case 'de':
      return 'de'
    case 'ar':
      return 'auto'
    default:
      return 'auto'
  }
}
