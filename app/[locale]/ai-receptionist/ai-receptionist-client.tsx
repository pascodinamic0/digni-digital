'use client'

import dynamic from 'next/dynamic'
import { use } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { Link } from '@/i18n/navigation'
import { getAssessmentPath } from '@/lib/assessments/paths'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import DemoPresentationDownload from '@/app/components/DemoPresentationDownload'
import AiEmployeeScarcityBanner from '@/app/components/AiEmployeeScarcityBanner'
import {
  ProblemStatsSection,
  TimeToValueSection,
  CapabilitiesSection,
  DreamOutcomeSection,
  ProofSection,
  DenominatorSection,
  QualificationSection,
  ClientOutcomesSection,
  BonusStackSection,
  GuaranteeSection,
  MobileAppBannerSection,
  PricingSection,
  FinalCtaSection,
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
  const t = translations[language].aiEmployeePage
  const ctaT = translations[language].cta
  const pageJsonLd = getServicePageJsonLd('ai-employee-systems', locale)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      {/* H1 — Promise */}
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh-brand">
        <PremiumHeroBackdrop />
        <PremiumHeroParallax className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            {t.hero.badge.trim() ? (
              <span className="mb-4 inline-block rounded-full border border-border-light px-3 py-1 type-caption font-medium tracking-wide text-muted">
                {t.hero.badge}
              </span>
            ) : null}
            <h1 className="type-h1 font-display mx-auto mb-4 max-w-4xl px-2 font-bold leading-tight tracking-tight text-text">
              {t.hero.titleLine1}
              {t.hero.titleHighlight ? (
                <>
                  {' '}
                  <span className="gradient-text-brand">{t.hero.titleHighlight}</span>
                </>
              ) : null}
            </h1>
            <p
              className={`type-body mx-auto max-w-2xl px-2 leading-relaxed text-muted ${t.hero.footnote.trim() ? 'mb-6' : 'mb-8'}`}
            >
              {t.hero.hook}
            </p>
            {t.hero.footnote.trim() ? (
              <p className="type-small mx-auto mb-8 max-w-xl px-2 font-medium leading-relaxed text-text/90">
                {t.hero.footnote}
              </p>
            ) : null}
            <div className="flex flex-col items-center gap-3 px-2">
              <Link
                href={getAssessmentPath('ai-employee')}
                className="btn-primary w-full px-6 py-3 text-center text-sm sm:w-auto sm:text-base"
              >
                {t.hero.primaryCta}
              </Link>
              <DemoPresentationDownload service="aiEmployee" variant="text" />
            </div>
            <div className="mx-auto mt-5 max-w-md">
              <AiEmployeeScarcityBanner variant="inline" />
            </div>
          </motion.div>
        </PremiumHeroParallax>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Problem */}
      <ProblemStatsSection />

      {/* Solution — speed + capabilities */}
      <TimeToValueSection />
      <CapabilitiesSection />
      <DreamOutcomeSection />

      <ProofSection />

      {/* Process — product demos */}
      <AIReceptionistHowItWorksDemos showTaskQueueDemo={showTaskQueueDemo} />
      <ClientOutcomesSection />

      {/* Contrast — leaky bucket vs loop */}
      <AIReceptionistPainDreamDemos />

      <DenominatorSection />

      {/* Fit + offer */}
      <QualificationSection />
      <BonusStackSection />
      <GuaranteeSection />
      <MobileAppBannerSection />
      <PricingSection
        checkoutRedirectingLabel={ctaT.checkoutRedirecting}
        continueToSecureCheckoutLabel={ctaT.continueToSecureCheckout}
      />

      {/* CTA */}
      <FinalCtaSection />
    </main>
  )
}
