/**
 * Machine-readable business data (ai.json, services.json, products.json,
 * case-studies.json, faq.json), Organization/WebSite JSON-LD and the DigniGuide
 * system prompt. Derived from the V2 registries in content/v2 so the site, the
 * feeds and the guide never drift apart.
 */
import { getBookingUrl } from '@/app/config/cta.config'
import { officeLocations, formatFullAddress } from '@/app/data/locations'
import { BRAND_LOGO_PATH } from '@/lib/site-assets'
import { LINKS } from '@/content/v2/locales'
import { projects } from '@/content/v2/work'
import { products, productView } from '@/content/v2/products'
import { services, servicePath } from '@/content/v2/services'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'
export const AGENT_DATA_LAST_UPDATED = '2026-10-07'
export const DEFAULT_LOCALE = 'us-en'

type JsonLd = Record<string, unknown>

const JSON_LD_CONTEXT = 'https://schema.org'

export function absoluteUrl(path = '') {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function localizedUrl(locale: string, path = '') {
  const normalizedPath = path === '/' ? '' : path
  return absoluteUrl(`/${locale}${normalizedPath}`)
}

export function jsonLdScriptProps(data: JsonLd | JsonLd[]) {
  // Safari throws when ld+json is a root level array (it expects @graph + single @context).
  const payload: JsonLd = Array.isArray(data)
    ? data.length === 1
      ? data[0]
      : { '@context': JSON_LD_CONTEXT, '@graph': data }
    : data
  return { __html: JSON.stringify(payload).replace(/</g, '\\u003c') }
}

export const businessProfile = {
  name: 'Digni Digital LLC',
  legalName: 'Digni Digital LLC',
  url: SITE_URL,
  logo: absoluteUrl(BRAND_LOGO_PATH),
  slogan: 'Close the gaps. Let the systems run.',
  description:
    'Digni Digital builds the systems organisations run on: custom platforms and AI agents for operations (Agentic Systems & Platforms), an AI Employee that answers and books inbound demand (Growth), and a practical AI skills programme for schools and professionals (Future Ready). Operating from Kinshasa and Nairobi.',
  /** Digni Digital LLC was formed on 1 September 2025 (Wyoming). The practice behind it has run since 2018. */
  foundingDate: '2025-09-01',
  practiceSince: '2018',
  founder: 'Pascal Digny Djohodo',
  founderJobTitle: 'Founder & COO',
  primaryEmail: LINKS.email,
  headquartersEmail: 'hq@digni-digital-llc.com',
  whatsapp: LINKS.whatsapp,
  phone: '+243822378097',
  bookingUrl: getBookingUrl(),
  sameAs: [LINKS.linkedin, 'https://share.google/esoeHJdqRK5C5hbTF', 'https://share.google/TduwbXrcnQSjCaENN'],
  areaServed: ['Democratic Republic of the Congo', 'Kenya', 'Africa', 'United States', 'Europe', 'Middle East'],
  knowsAbout: [
    'School management systems',
    'Monitoring & evaluation platforms',
    'Agentic software',
    'Custom platforms',
    'AI Employee',
    'Inbound lead response and booking',
    'AI skills training',
    'Digital transformation in the DRC',
  ],
  lastUpdated: AGENT_DATA_LAST_UPDATED,
}

const provider = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: businessProfile.name,
  url: SITE_URL,
  logo: businessProfile.logo,
}

export type AgentOffer = {
  name: string
  price?: number
  priceCurrency?: string
  billingPeriod?: string
  priceText: string
  availability: 'InStock' | 'PreOrder' | 'LimitedAvailability'
  checkoutPlan?: string
  url: string
}

export type AgentService = {
  id: string
  name: string
  pillar: string
  url: string
  shortDescription: string
  closes: string
  outcomes: string[]
  deliverables: string[]
  timeline: string
  pricingSummary: string
  offers: AgentOffer[]
  faqs: Array<{ question: string; answer: string }>
  relatedWork: string[]
  lastUpdated: string
}

/** Pricing as published on the previous site / Stripe plans. */
const servicePricing: Record<string, { timeline: string; pricingSummary: string; offers: Omit<AgentOffer, 'url'>[] }> = {
  'agentic-systems': {
    timeline: '7 days to 3 months depending on scope (MVP, platform or enterprise).',
    pricingSummary: 'Custom scope, quoted after discovery. A project deposit can be paid online.',
    offers: [{ name: 'Agentic Systems project deposit', priceText: 'Project deposit; final scope quoted after discovery', availability: 'InStock', checkoutPlan: 'agentic_deposit' }],
  },
  'ai-employee': {
    timeline: 'Often live within days of project approval, once access, scripts and calendar details are ready.',
    pricingSummary: '$500 setup plus $500 per month.',
    offers: [{ name: 'AI Employee', price: 500, priceCurrency: 'USD', billingPeriod: 'month', priceText: '$500 setup plus $500/month', availability: 'InStock', checkoutPlan: 'ai_employee' }],
  },
  'future-ready': {
    timeline: 'School programme over the academic year; professional and guided tracks available.',
    pricingSummary: 'School partnership per semester or per year; professional and guided options.',
    offers: [
      { name: 'School partnership (semester)', price: 5000, priceCurrency: 'USD', billingPeriod: 'semester', priceText: '$5,000/semester or $12,000/year', availability: 'InStock', checkoutPlan: 'frg_school_semester' },
      { name: 'Guided learning', price: 49, priceCurrency: 'USD', priceText: '$49 one time', availability: 'LimitedAvailability', checkoutPlan: 'frg_guided' },
    ],
  },
}

export const agentServices: AgentService[] = services.map((s) => {
  const c = s.copy.en
  const url = localizedUrl(DEFAULT_LOCALE, servicePath(s.slug))
  const pricing = servicePricing[s.slug]
  return {
    id: s.slug,
    name: c.name,
    pillar: c.k,
    url,
    shortDescription: c.body,
    closes: c.gap,
    outcomes: c.points,
    deliverables: c.build.map(([title]) => title),
    timeline: pricing.timeline,
    pricingSummary: pricing.pricingSummary,
    offers: pricing.offers.map((o) => ({ ...o, url })),
    faqs: c.faqs.map(([question, answer]) => ({ question, answer })),
    relatedWork: s.related.map((slug) => localizedUrl(DEFAULT_LOCALE, `/work/${slug}`)),
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  }
})

const statusLabel: Record<string, string> = { live: 'Live', deployed: 'Deployed', demo: 'Demo', beta: 'Beta', progress: 'In progress', delivered: 'Delivered' }

export const agentProducts = products.map((p) => {
  const v = productView(p)
  const url = p.path ? localizedUrl(DEFAULT_LOCALE, p.path) : v.url ?? (p.work ? localizedUrl(DEFAULT_LOCALE, `/work/${p.work}`) : localizedUrl(DEFAULT_LOCALE, '/products'))
  return {
    id: p.id,
    name: p.name,
    alternateName: p.alsoKnownAs,
    group: p.group,
    url,
    caseStudy: p.work ? localizedUrl(DEFAULT_LOCALE, `/work/${p.work}`) : undefined,
    applicationCategory: p.category,
    operatingSystem: 'Web',
    status: statusLabel[p.status] ?? p.status,
    description: v.summary?.en ?? '',
    features: v.tags?.en ?? [],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  }
})

export const agentCaseStudies = projects.map((w) => ({
  id: w.slug,
  name: w.name,
  client: w.client.en,
  sector: w.sector,
  status: statusLabel[w.status] ?? w.status,
  location: w.location?.en,
  year: w.year,
  url: localizedUrl(DEFAULT_LOCALE, `/work/${w.slug}`),
  liveUrl: w.url,
  summary: w.summary.en,
  context: w.context.en,
  built: w.built.en,
  role: w.role.en,
  stack: w.stack,
  lastUpdated: AGENT_DATA_LAST_UPDATED,
}))

export const agentFaqs = [
  {
    question: 'What does Digni Digital do?',
    answer:
      'Digni Digital closes operational, growth and talent gaps with systems: custom platforms and AI agents (Agentic Systems & Platforms), an AI Employee that answers and books inbound demand, and the Future Ready AI skills programme for schools and professionals.',
  },
  {
    question: 'Where is Digni Digital based?',
    answer:
      'Digni Digital LLC is registered in Wyoming, USA, and operates day to day from Kinshasa (DRC) and Nairobi (Kenya). The practice behind it has been building systems since 2018.',
  },
  {
    question: 'How can an AI agent contact or book Digni Digital?',
    answer: `Use the booking link (${getBookingUrl()}), email ${LINKS.email}, WhatsApp ${LINKS.whatsapp}, or the contact page at ${localizedUrl(DEFAULT_LOCALE, '/contact')}.`,
  },
  {
    question: 'Does Digni Digital publish machine readable data?',
    answer: 'Yes. JSON feeds are available for the business profile (/ai.json), services, products, case studies and FAQs.',
  },
]

export function getOrganizationJsonLd(): JsonLd {
  const primaryOffice = officeLocations.find((location) => location.isPrimary) ?? officeLocations[0]
  return {
    '@context': JSON_LD_CONTEXT,
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: businessProfile.name,
    legalName: businessProfile.legalName,
    url: SITE_URL,
    logo: businessProfile.logo,
    slogan: businessProfile.slogan,
    description: businessProfile.description,
    foundingDate: businessProfile.foundingDate,
    founder: { '@type': 'Person', name: businessProfile.founder, jobTitle: businessProfile.founderJobTitle },
    sameAs: businessProfile.sameAs,
    areaServed: businessProfile.areaServed,
    knowsAbout: businessProfile.knowsAbout,
    email: businessProfile.primaryEmail,
    telephone: businessProfile.phone,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: businessProfile.primaryEmail,
        telephone: businessProfile.phone,
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Spanish', 'German', 'Arabic'],
      },
      { '@type': 'ContactPoint', url: businessProfile.bookingUrl, contactType: 'sales' },
    ],
    address: primaryOffice
      ? {
          '@type': 'PostalAddress',
          streetAddress: primaryOffice.address.street,
          addressLocality: primaryOffice.address.city,
          addressRegion: primaryOffice.address.state,
          postalCode: primaryOffice.address.postalCode,
          addressCountry: primaryOffice.address.country,
        }
      : undefined,
  }
}

export function getWebsiteJsonLd(locale = DEFAULT_LOCALE): JsonLd {
  return {
    '@context': JSON_LD_CONTEXT,
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Digni Digital',
    url: SITE_URL,
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export { provider as organizationRef }

export function getBusinessFeed() {
  return {
    schemaVersion: '2.0',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
    business: businessProfile,
    locations: officeLocations.map((location) => ({
      id: location.id,
      name: location.name,
      city: location.city,
      country: location.country,
      region: location.region,
      address: formatFullAddress(location),
      email: location.email,
      phone: location.phone,
      timezone: location.timezone,
    })),
    pages: {
      home: localizedUrl(DEFAULT_LOCALE, '/'),
      work: localizedUrl(DEFAULT_LOCALE, '/work'),
      services: localizedUrl(DEFAULT_LOCALE, '/services'),
      products: localizedUrl(DEFAULT_LOCALE, '/products'),
      about: localizedUrl(DEFAULT_LOCALE, '/about'),
      contact: localizedUrl(DEFAULT_LOCALE, '/contact'),
      blog: localizedUrl(DEFAULT_LOCALE, '/blog'),
    },
    publicFeeds: {
      business: absoluteUrl('/ai.json'),
      services: absoluteUrl('/services.json'),
      products: absoluteUrl('/products.json'),
      caseStudies: absoluteUrl('/case-studies.json'),
      faqs: absoluteUrl('/faq.json'),
    },
  }
}

export function getServicesFeed() {
  return { schemaVersion: '2.0', lastUpdated: AGENT_DATA_LAST_UPDATED, services: agentServices }
}

export function getProductsFeed() {
  return { schemaVersion: '2.0', lastUpdated: AGENT_DATA_LAST_UPDATED, products: agentProducts }
}

export function getCaseStudiesFeed() {
  return { schemaVersion: '2.0', lastUpdated: AGENT_DATA_LAST_UPDATED, caseStudies: agentCaseStudies }
}

export function getFaqFeed() {
  return {
    schemaVersion: '2.0',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
    faqs: [...agentFaqs, ...agentServices.flatMap((service) => service.faqs)],
  }
}
