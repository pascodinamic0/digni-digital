import { getBookingUrl } from '@/app/config/cta.config'
import { officeLocations, formatFullAddress } from '@/app/data/locations'
import { BRAND_LOGO_PATH } from '@/lib/site-assets'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'
export const AGENT_DATA_LAST_UPDATED = '2026-04-28'
export const DEFAULT_LOCALE = 'us-en'

type JsonLd = Record<string, unknown>

export function absoluteUrl(path = '') {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function localizedUrl(locale: string, path = '') {
  const normalizedPath = path === '/' ? '' : path
  return absoluteUrl(`/${locale}${normalizedPath}`)
}

export function jsonLdScriptProps(data: JsonLd | JsonLd[]) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  }
}

const provider = {
  '@type': 'Organization',
  name: 'Digni Digital LLC',
  url: SITE_URL,
  logo: absoluteUrl(BRAND_LOGO_PATH),
}

export const businessProfile = {
  name: 'Digni Digital LLC',
  legalName: 'Digni Digital LLC',
  url: SITE_URL,
  logo: absoluteUrl(BRAND_LOGO_PATH),
  description:
    'Digital transformation agency building AI Employee systems, agentic software, Future-Ready Graduate programs, and custom SaaS products for growth-focused organizations.',
  foundingDate: '2019',
  founder: 'Pascal Digny Djohodo',
  primaryEmail: 'support@digni-digital-llc.com',
  headquartersEmail: 'hq@digni-digital-llc.com',
  whatsapp: 'https://wa.me/254702593518',
  bookingUrl: getBookingUrl(),
  sameAs: [
    'https://www.linkedin.com/company/digni-digital-llc',
    'https://share.google/esoeHJdqRK5C5hbTF',
    'https://share.google/TduwbXrcnQSjCaENN',
  ],
  areaServed: ['United States', 'Kenya', 'Democratic Republic of the Congo', 'Africa', 'Europe', 'Middle East'],
  knowsAbout: [
    'AI Employee Systems',
    'AI Receptionist',
    'Agentic Software',
    'Custom SaaS Development',
    'Digital Transformation',
    'Digital Skills Training',
    'Future-Ready Graduate Program',
  ],
  lastUpdated: AGENT_DATA_LAST_UPDATED,
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
  alternateName?: string
  url: string
  shortDescription: string
  whoItIsFor: string[]
  outcomes: string[]
  deliverables: string[]
  technologies: string[]
  timeline: string
  pricingSummary: string
  offers: AgentOffer[]
  faqs: Array<{ question: string; answer: string }>
  proof: Array<{ metric: string; description: string }>
  lastUpdated: string
}

export const agentServices: AgentService[] = [
  {
    id: 'ai-employee-systems',
    name: 'AI Employee Systems',
    alternateName: 'AI Receptionist',
    url: localizedUrl(DEFAULT_LOCALE, '/ai-receptionist'),
    shortDescription:
      'Always-on AI reception, qualification, booking, follow-up, and unified inbox systems for service businesses.',
    whoItIsFor: ['Clinics', 'real estate teams', 'local service businesses', 'agencies', 'growth teams'],
    outcomes: ['Instant lead response', 'more booked calls', 'fewer missed opportunities', '24/7 client intake'],
    deliverables: [
      'Voice and messaging AI',
      'Lead qualification',
      'Calendar booking',
      'CRM handoff',
      'Follow-up automations',
      'Performance reporting',
    ],
    technologies: ['Voice AI', 'messaging AI', 'CRM integrations', 'calendar integrations', 'Stripe checkout'],
    timeline: 'Often live in 48 hours after project approval.',
    pricingSummary: '$500 setup plus $500 per month for the listed AI Employee plan.',
    offers: [
      {
        name: 'AI Employee System',
        price: 500,
        priceCurrency: 'USD',
        billingPeriod: 'month',
        priceText: '$500 setup plus $500/month',
        availability: 'InStock',
        checkoutPlan: 'ai_employee',
        url: localizedUrl(DEFAULT_LOCALE, '/ai-receptionist'),
      },
    ],
    faqs: [
      {
        question: 'What does the AI Employee System do?',
        answer:
          'It responds to leads, qualifies inquiries, books appointments, follows up, and routes conversations to your team from one operating system.',
      },
      {
        question: 'How fast can it go live?',
        answer: 'Many implementations can go live in about 48 hours once access, scripts, and calendar details are approved.',
      },
      {
        question: 'Who is it best for?',
        answer:
          'It is best for service businesses that miss calls, need faster lead response, or want booking and follow-up to run after hours.',
      },
    ],
    proof: [
      { metric: '24/7', description: 'Always-on lead capture and client intake' },
      { metric: '48h', description: 'Typical time-to-value target after approval' },
      { metric: '98%', description: 'Reported client satisfaction signal used across the site' },
    ],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'future-ready-graduate',
    name: 'Future-Ready Graduate Program',
    url: localizedUrl(DEFAULT_LOCALE, '/future-ready-graduate'),
    shortDescription:
      'Digital skills and employability program for schools, institutes, and learners who need practical AI-era career readiness.',
    whoItIsFor: ['Private schools', 'professional institutes', 'vocational centers', 'students', 'adult learners'],
    outcomes: ['Job-ready portfolios', 'digital skills', 'entrepreneurial capability', 'career placement readiness'],
    deliverables: [
      'Digital foundation training',
      'Web development basics',
      'Digital marketing and analytics',
      'Professional portfolio building',
      'Job readiness training',
      'Industry placement support',
    ],
    technologies: ['AI-assisted learning', 'web development tools', 'digital marketing platforms', 'portfolio systems'],
    timeline: '9 months for the school program, with guided learning options available separately.',
    pricingSummary: '$49 guided learning, $5,000 per semester for school partnerships, or $12,000 yearly.',
    offers: [
      {
        name: 'Guided Learning',
        price: 49,
        priceCurrency: 'USD',
        priceText: '$49 one-time',
        availability: 'LimitedAvailability',
        checkoutPlan: 'frg_guided',
        url: localizedUrl(DEFAULT_LOCALE, '/future-ready-graduate'),
      },
      {
        name: 'School Partnership Program',
        price: 5000,
        priceCurrency: 'USD',
        billingPeriod: 'semester',
        priceText: '$5,000/semester or $12,000/year',
        availability: 'InStock',
        checkoutPlan: 'frg_school_semester',
        url: localizedUrl(DEFAULT_LOCALE, '/future-ready-graduate'),
      },
    ],
    faqs: [
      {
        question: 'Who is the Future-Ready Graduate Program for?',
        answer:
          'It is for schools, vocational centers, institutes, and learners who need practical digital skills, portfolios, and job readiness.',
      },
      {
        question: 'How long is the school program?',
        answer: 'The school program is designed around a 9-month academic year with three trimesters.',
      },
      {
        question: 'What does the program teach?',
        answer:
          'It teaches digital foundations, web development, digital marketing, portfolio building, job readiness, and AI-assisted work skills.',
      },
    ],
    proof: [
      { metric: '85%', description: 'Target graduate employment rate used across the program page' },
      { metric: '42 weeks', description: 'Full school-year curriculum structure' },
      { metric: '50+', description: 'Target employer partnerships for flagship implementations' },
    ],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'agentic-softwares',
    name: 'Agentic Softwares',
    alternateName: 'Agentic Software Development',
    url: localizedUrl(DEFAULT_LOCALE, '/agentic-softwares'),
    shortDescription:
      'Custom AI-native software with autonomous workflows, agent architecture, integrations, and owned systems for niche business problems.',
    whoItIsFor: ['Founders', 'operators', 'enterprise teams', 'service businesses', 'product teams'],
    outcomes: ['AI-native workflows', 'owned custom software', 'autonomous agents', 'faster operations'],
    deliverables: [
      'Agent design',
      'Workflow automation',
      'LLM integration',
      'API specification',
      'Production deployment',
      'Monitoring and continuous improvement',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Supabase', 'PostgreSQL', 'OpenAI API', 'Stripe'],
    timeline: '7 days to 3 months depending on MVP, enterprise, or full platform scope.',
    pricingSummary: 'Custom scope with project deposit available.',
    offers: [
      {
        name: 'Agentic Software Project Deposit',
        priceText: 'Project deposit available; final scope quoted after discovery',
        availability: 'InStock',
        checkoutPlan: 'agentic_deposit',
        url: localizedUrl(DEFAULT_LOCALE, '/agentic-softwares'),
      },
    ],
    faqs: [
      {
        question: 'What is agentic software?',
        answer:
          'It is software designed around AI agents and workflows that can perceive context, reason through steps, and act through approved tools or integrations.',
      },
      {
        question: 'How long does an agentic software project take?',
        answer: 'Small MVPs can take 7 days to 2 weeks; larger platforms can take 1 to 3 months depending on scope.',
      },
      {
        question: 'Do clients own the software?',
        answer: 'Yes. The service is designed around owned systems rather than generic shelf software.',
      },
    ],
    proof: [
      { metric: '90%', description: 'Faster proposal creation reported for Proposal Agent' },
      { metric: '360 degrees', description: 'Operations, bookings, and access in one dashboard for Kabinda Lodge' },
      { metric: 'Live', description: 'Production systems shipped for listed internal and client projects' },
    ],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
]

export const agentProducts = [
  {
    id: 'proposal-agent',
    name: 'ProposalAgent',
    url: localizedUrl(DEFAULT_LOCALE, '/products#proposal-agent'),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    status: 'Live',
    description: 'Voice-to-proposal software that structures spoken project notes into professional proposals.',
    features: [
      'Voice-to-text conversion',
      'AI-powered proposal structuring',
      'Brand customization',
      'Template library',
      'Client portal',
      'Analytics dashboard',
    ],
    offers: [
      { name: 'Starter', price: 29, priceCurrency: 'USD', billingPeriod: 'month', priceText: '$29/month' },
      { name: 'Pro', price: 79, priceCurrency: 'USD', billingPeriod: 'month', priceText: '$79/month' },
      { name: 'Enterprise', price: 199, priceCurrency: 'USD', billingPeriod: 'month', priceText: '$199/month' },
    ],
    proof: [
      { metric: '10x', description: 'Faster proposal creation' },
      { metric: '85%', description: 'Average time saved' },
      { metric: '40%', description: 'Higher close rates' },
    ],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'crm-lite',
    name: 'CRM Lite',
    url: localizedUrl(DEFAULT_LOCALE, '/products#crm-lite'),
    status: 'Planned',
    description: 'Simple CRM for contacts, deals, email integration, and reporting.',
    expectedAvailability: 'Planned roadmap item',
    features: ['Contact management', 'Deal pipeline', 'Email integration', 'Reporting'],
    offers: [],
    proof: [],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'invoice-ai',
    name: 'Invoice AI',
    url: localizedUrl(DEFAULT_LOCALE, '/products#invoice-ai'),
    status: 'Planned',
    description: 'AI-assisted invoicing, payment tracking, reminders, and tax support.',
    expectedAvailability: 'Planned roadmap item',
    features: ['Auto invoice generation', 'Payment tracking', 'Smart reminders', 'Tax compliance'],
    offers: [],
    proof: [],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'social-assistant',
    name: 'Social Assistant',
    url: localizedUrl(DEFAULT_LOCALE, '/products#social-assistant'),
    status: 'Planned',
    description: 'AI content, scheduling, analytics, and multi-platform social workflows.',
    expectedAvailability: 'Planned roadmap item',
    features: ['Content generation', 'Scheduling', 'Analytics', 'Multi-platform publishing'],
    offers: [],
    proof: [],
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
]

export const agentCaseStudies = [
  {
    id: 'healthcare-clinic',
    name: 'Regional Healthcare Clinic',
    client: 'Fremo Medical & Birth Center',
    industry: 'Healthcare',
    location: 'Lagos, Nigeria',
    url: localizedUrl(DEFAULT_LOCALE, '/case-studies'),
    challenge:
      'Manual appointment booking caused no-shows, lost revenue, and scheduling pressure on staff.',
    solution:
      'Online booking, automated SMS and email reminders, staff dashboard, records integration, and payment processing.',
    results: [
      { metric: '85%', description: 'Reduction in no-shows' },
      { metric: '$50k', description: 'Additional monthly revenue' },
      { metric: '3 hours', description: 'Daily staff time saved' },
      { metric: '95%', description: 'Patient satisfaction score' },
    ],
    testimonial:
      'Digni Digital transformed our entire patient experience. The booking system alone has saved us countless hours and significantly improved our revenue.',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'real-estate-agency',
    name: 'Premium Real Estate Agency',
    client: 'Shep Engineering',
    industry: 'Real Estate',
    location: 'Accra, Ghana',
    url: localizedUrl(DEFAULT_LOCALE, '/case-studies'),
    challenge:
      'Agents spent too many hours on proposals and lost deals to faster competitors.',
    solution:
      'AI-powered proposal generation, property database, client portal, mobile app, and CRM integration.',
    results: [
      { metric: '90%', description: 'Faster proposal delivery' },
      { metric: '40%', description: 'Higher close rate' },
      { metric: '25', description: 'More deals per month' },
      { metric: '$200k', description: 'Increased monthly revenue' },
    ],
    testimonial:
      'Our agents can now create professional proposals in minutes instead of hours. This has been a game-changer for our competitive advantage.',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
  {
    id: 'kabinda-lodge',
    name: 'Kabinda Lodge',
    client: 'Kabinda Lodge',
    industry: 'Hospitality',
    location: 'Democratic Republic of the Congo',
    url: localizedUrl(DEFAULT_LOCALE, '/agentic-softwares'),
    challenge:
      'Owners needed remote visibility into rooms, bookings, access, payments, and restaurant operations.',
    solution:
      'Hotel operating system with online booking, role-based access, Stripe-backed payments, and smart card workflows.',
    results: [
      { metric: '4+', description: 'Role levels from owner to front desk and restaurant' },
      { metric: '360 degrees', description: 'Operations, bookings, and access in one dashboard' },
      { metric: 'Live', description: 'Production guest booking and smart access' },
    ],
    testimonial:
      'A production hotel operating system connecting bookings, access, payments, and staff workflows.',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
  },
]

export const agentFaqs = [
  {
    question: 'What does Digni Digital sell?',
    answer:
      'Digni Digital sells AI Employee systems, agentic software development, Future-Ready Graduate programs, and SaaS products for businesses and schools.',
  },
  {
    question: 'Who is Digni Digital for?',
    answer:
      'The company serves growth-focused service businesses, schools, institutes, founders, and operators that need measurable digital transformation.',
  },
  {
    question: 'How can an AI agent contact or book Digni Digital?',
    answer:
      'Use the public booking URL, support email, WhatsApp link, or contact page listed in the business profile and service feeds.',
  },
  {
    question: 'Does Digni Digital publish machine-readable service data?',
    answer:
      'Yes. Public JSON feeds are available for business profile, services, products, case studies, and FAQs.',
  },
]

export function getOrganizationJsonLd(): JsonLd {
  const primaryOffice = officeLocations.find((location) => location.isPrimary) ?? officeLocations[0]
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: businessProfile.name,
    legalName: businessProfile.legalName,
    url: SITE_URL,
    logo: businessProfile.logo,
    description: businessProfile.description,
    foundingDate: businessProfile.foundingDate,
    founder: {
      '@type': 'Person',
      name: businessProfile.founder,
      jobTitle: 'Founder & CEO',
    },
    sameAs: businessProfile.sameAs,
    areaServed: businessProfile.areaServed,
    knowsAbout: businessProfile.knowsAbout,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: businessProfile.primaryEmail,
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Spanish', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        url: businessProfile.bookingUrl,
        contactType: 'sales',
      },
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
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Digni Digital',
    url: SITE_URL,
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: localizedUrl(locale, '/blog?q={search_term_string}'),
      'query-input': 'required name=search_term_string',
    },
  }
}

function offerToJsonLd(offer: AgentOffer): JsonLd {
  return {
    '@type': 'Offer',
    name: offer.name,
    url: offer.url,
    price: offer.price,
    priceCurrency: offer.priceCurrency,
    availability: `https://schema.org/${offer.availability}`,
    description: offer.priceText,
  }
}

function serviceToJsonLd(service: AgentService, locale: string): JsonLd {
  return {
    '@type': 'Service',
    '@id': `${service.url}#service`,
    name: service.name,
    alternateName: service.alternateName,
    url: service.url.replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`),
    description: service.shortDescription,
    provider,
    areaServed: businessProfile.areaServed,
    audience: service.whoItIsFor.map((audience) => ({ '@type': 'Audience', audienceType: audience })),
    serviceType: service.name,
    offers: service.offers.map(offerToJsonLd),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} offers`,
      itemListElement: service.offers.map((offer) => ({
        '@type': 'Offer',
        name: offer.name,
        url: offer.url.replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`),
        price: offer.price,
        priceCurrency: offer.priceCurrency,
        description: offer.priceText,
        availability: `https://schema.org/${offer.availability}`,
      })),
    },
    review: service.proof.map((item) => ({
      '@type': 'Review',
      reviewBody: `${item.metric}: ${item.description}`,
      author: { '@type': 'Organization', name: 'Digni Digital' },
    })),
    dateModified: service.lastUpdated,
  }
}

function faqPageJsonLd(faqs: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function breadcrumbJsonLd(locale: string, items: Array<{ name: string; path: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: localizedUrl(locale, item.path),
    })),
  }
}

export function getServicesPageJsonLd(locale = DEFAULT_LOCALE): JsonLd[] {
  return [
    breadcrumbJsonLd(locale, [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Digni Digital service catalog',
      url: localizedUrl(locale, '/services'),
      itemListElement: agentServices.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: serviceToJsonLd(service, locale),
      })),
    },
  ]
}

export function getServicePageJsonLd(serviceId: string, locale = DEFAULT_LOCALE): JsonLd[] {
  const service = agentServices.find((item) => item.id === serviceId)
  if (!service) return []
  return [
    breadcrumbJsonLd(locale, [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: new URL(service.url).pathname.replace(`/${DEFAULT_LOCALE}`, '') },
    ]),
    serviceToJsonLd(service, locale),
    faqPageJsonLd(service.faqs),
  ]
}

export function getProductsPageJsonLd(locale = DEFAULT_LOCALE): JsonLd[] {
  const liveProduct = agentProducts[0]
  return [
    breadcrumbJsonLd(locale, [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: liveProduct.name,
      url: localizedUrl(locale, '/products#proposal-agent'),
      applicationCategory: liveProduct.applicationCategory,
      operatingSystem: liveProduct.operatingSystem,
      description: liveProduct.description,
      offers: liveProduct.offers.map((offer) => ({
        '@type': 'Offer',
        name: offer.name,
        price: offer.price,
        priceCurrency: offer.priceCurrency,
        availability: 'https://schema.org/InStock',
        description: offer.priceText,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '95',
      },
      dateModified: liveProduct.lastUpdated,
      provider,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Digni Digital product catalog',
      url: localizedUrl(locale, '/products'),
      itemListElement: agentProducts.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': product.status === 'Live' ? 'SoftwareApplication' : 'Product',
          name: product.name,
          url: product.url.replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`),
          description: product.description,
        },
      })),
    },
  ]
}

export function getFutureReadyGraduateJsonLd(locale = DEFAULT_LOCALE): JsonLd[] {
  const service = agentServices.find((item) => item.id === 'future-ready-graduate')
  if (!service) return []
  return [
    ...getServicePageJsonLd(service.id, locale),
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: service.name,
      description: service.shortDescription,
      provider,
      url: localizedUrl(locale, '/future-ready-graduate'),
      coursePrerequisites: 'No advanced technical background required',
      educationalCredentialAwarded: 'Digital certificate and professional portfolio',
      offers: service.offers.map(offerToJsonLd),
      dateModified: service.lastUpdated,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOccupationalProgram',
      name: service.name,
      description: service.shortDescription,
      provider,
      timeToComplete: 'P9M',
      occupationalCategory: ['Digital marketing', 'Web development', 'AI-assisted knowledge work'],
      offers: service.offers.map(offerToJsonLd),
    },
  ]
}

export function getCaseStudiesPageJsonLd(locale = DEFAULT_LOCALE): JsonLd[] {
  return [
    breadcrumbJsonLd(locale, [
      { name: 'Home', path: '/' },
      { name: 'Case Studies', path: '/case-studies' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Digni Digital case studies',
      url: localizedUrl(locale, '/case-studies'),
      itemListElement: agentCaseStudies.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: study.name,
          url: study.url.replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`),
          about: study.industry,
          locationCreated: study.location,
          description: `${study.challenge} ${study.solution}`,
          provider,
          review: {
            '@type': 'Review',
            reviewBody: study.testimonial,
            author: { '@type': 'Organization', name: study.client },
          },
          dateModified: study.lastUpdated,
        },
      })),
    },
  ]
}

export function getContactPageJsonLd(locale = DEFAULT_LOCALE): JsonLd[] {
  return [
    breadcrumbJsonLd(locale, [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
    faqPageJsonLd(agentFaqs),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Digni Digital',
      url: localizedUrl(locale, '/contact'),
      mainEntity: getOrganizationJsonLd(),
    },
  ]
}

export function getBusinessFeed() {
  return {
    schemaVersion: '1.0',
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
  return {
    schemaVersion: '1.0',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
    services: agentServices,
  }
}

export function getProductsFeed() {
  return {
    schemaVersion: '1.0',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
    products: agentProducts,
  }
}

export function getCaseStudiesFeed() {
  return {
    schemaVersion: '1.0',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
    caseStudies: agentCaseStudies,
  }
}

export function getFaqFeed() {
  return {
    schemaVersion: '1.0',
    lastUpdated: AGENT_DATA_LAST_UPDATED,
    faqs: [...agentFaqs, ...agentServices.flatMap((service) => service.faqs)],
  }
}
