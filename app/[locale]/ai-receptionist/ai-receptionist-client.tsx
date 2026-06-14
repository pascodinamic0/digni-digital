'use client'

import dynamic from 'next/dynamic'
import { use } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import {
  AiEmployeeHeroSection,
  ProblemStatsSection,
  TimeToValueSection,
  ProofSection,
  QualificationSection,
  BonusStackSection,
  MobileAppBannerSection,
  PricingSection,
} from '@/app/components/ai-employee'

const AIReceptionistPainDreamDemos = dynamic(
  () => import('./ai-receptionist-product-demos').then((m) => m.AIReceptionistPainDreamDemos),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[520px] bg-surface/40 animate-pulse" aria-hidden />
    ),
  },
)

const AIReceptionistHowItWorksDemos = dynamic(
  () => import('./ai-receptionist-product-demos').then((m) => m.AIReceptionistHowItWorksDemos),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[480px] bg-surface/40 animate-pulse" aria-hidden />
    ),
  },
)
import { getServicePageJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

type AIReceptionistClientProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
  showTaskQueueDemo: boolean
}

export function AIReceptionistClient({ params, searchParams, showTaskQueueDemo }: AIReceptionistClientProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const ctaT = translations[language].cta
  const pageJsonLd = getServicePageJsonLd('ai-employee-systems', locale)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      <AiEmployeeHeroSection />

      {/* Problem */}
      <ProblemStatsSection />

      {/* Proof */}
      <ProofSection />

      {/* Process — product demos */}
      <AIReceptionistHowItWorksDemos showTaskQueueDemo={showTaskQueueDemo} />

      {/* Contrast — leaky bucket vs loop */}
      <AIReceptionistPainDreamDemos />

      {/* Fit + offer */}
      <QualificationSection />
      <BonusStackSection />
      <MobileAppBannerSection />
      <TimeToValueSection />
      <PricingSection
        checkoutRedirectingLabel={ctaT.checkoutRedirecting}
        continueToSecureCheckoutLabel={ctaT.continueToSecureCheckout}
      />
    </main>
  )
}
