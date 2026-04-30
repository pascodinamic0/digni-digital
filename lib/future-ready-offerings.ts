export type OfferingAudience = 'schools' | 'professional' | 'everyone' | 'custom'

export type OfferingCtaMode = 'school' | 'professional' | 'guided' | 'consultation'

export type FutureReadyOffering = {
  id?: string
  slug: string
  name: string
  price: string
  period: string
  priceOptions?: { amount: string; period: string }[]
  description: string
  audience: OfferingAudience
  features: string[]
  popular: boolean
  comingSoon?: boolean
  isNew?: boolean
  spotsAvailable?: number | null
  ctaMode: OfferingCtaMode
  isVisible: boolean
  sortOrder: number
}

export const DEFAULT_FUTURE_READY_OFFERINGS: FutureReadyOffering[] = [
  {
    slug: 'school-partnership-program',
    name: 'School Partnership Program',
    price: '$5,000',
    period: '/semester',
    priceOptions: [
      { amount: '$5,000', period: '/semester (5 months)' },
      { amount: '$12,000', period: '/year' },
    ],
    description: 'Full program. Schools and institutions.',
    audience: 'schools',
    features: [
      'Full academic year curriculum (42 weeks)',
      'On-site facilitator and support',
      'Internet connectivity included',
      'Premium AI tools & subscriptions',
      'All learning materials provided',
      'Progress tracking and reporting',
      'Student assessment and certification',
      'Ongoing program support',
      'Job readiness training, and skills to create your own jobs',
      "Guided learning personalized to each student's talents and gifts",
      'Partnership success guarantee',
    ],
    popular: true,
    comingSoon: false,
    ctaMode: 'school',
    isVisible: true,
    sortOrder: 10,
  },
  {
    slug: 'guided-learning',
    name: 'Guided Learning',
    price: '$49',
    period: ' one-time',
    description: 'Digital skills. Personalized to your talents. Learn anywhere. Earn online.',
    audience: 'everyone',
    features: [
      'Full digital skills curriculum (start from scratch)',
      'Personalized guided learning, tailored to your unique talents and gifts',
      'Learn from home, school, university, or vocational center',
      'AI-powered tools and techniques for making money online',
      'Guided learning - study on your own schedule with support',
      'Skills that bring out your entrepreneurial potential',
      'Community support and peer learning forums',
      'Digital certificates upon completion',
      'Lifetime access to all course materials',
      'Portfolio building and job placement resources',
      'Learn how to use AI to compete with experts',
      'Start earning while you learn, create jobs or get hired',
    ],
    popular: false,
    isNew: true,
    spotsAvailable: 25,
    ctaMode: 'guided',
    isVisible: false,
    sortOrder: 20,
  },
  {
    slug: 'professional-institutes',
    name: 'Professional Institutes',
    price: '$1,000',
    period: '/vocational center',
    description: 'For each vocational center, training academy, or professional institute.',
    audience: 'professional',
    features: [
      'Full professional curriculum for adult learners',
      'Flexible schedule for working professionals',
      'Dedicated facilitator and cohort support',
      'Premium AI tools & subscriptions',
      'All learning materials provided',
      'Progress tracking and certification',
      'Job placement and industry partnerships',
      'Customizable program length',
      'On-site or hybrid delivery options',
      'Partnership success guarantee',
    ],
    popular: false,
    comingSoon: false,
    ctaMode: 'professional',
    isVisible: true,
    sortOrder: 30,
  },
]

type OfferingRow = {
  id?: string
  slug: string
  name: string
  price: string
  period: string
  price_options?: unknown
  description: string
  audience: OfferingAudience
  features?: string[] | null
  popular?: boolean | null
  coming_soon?: boolean | null
  is_new?: boolean | null
  spots_available?: number | null
  cta_mode?: OfferingCtaMode | null
  is_visible?: boolean | null
  sort_order?: number | null
}

export function normalizeOffering(row: OfferingRow): FutureReadyOffering {
  const priceOptions = Array.isArray(row.price_options)
    ? row.price_options.filter(
        (option): option is { amount: string; period: string } =>
          typeof option === 'object' &&
          option !== null &&
          typeof (option as { amount?: unknown }).amount === 'string' &&
          typeof (option as { period?: unknown }).period === 'string'
      )
    : []

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    price: row.price,
    period: row.period,
    priceOptions: priceOptions.length ? priceOptions : undefined,
    description: row.description,
    audience: row.audience,
    features: row.features ?? [],
    popular: row.popular ?? false,
    comingSoon: row.coming_soon ?? false,
    isNew: row.is_new ?? false,
    spotsAvailable: row.spots_available ?? null,
    ctaMode: row.cta_mode ?? 'consultation',
    isVisible: row.is_visible ?? true,
    sortOrder: row.sort_order ?? 0,
  }
}

export function visibleDefaultFutureReadyOfferings() {
  return DEFAULT_FUTURE_READY_OFFERINGS.filter((offering) => offering.isVisible)
}
