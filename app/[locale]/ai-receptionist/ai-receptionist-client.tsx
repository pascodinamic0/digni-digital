'use client'

import { use } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import HowDigniWorks from '@/app/components/HowDigniWorks'
import { howDigniWorksByLanguage } from '@/app/i18n/howDigniWorks'
import {
  AiEmployeeHeroSection,
  AiEmployeeChatPreviewSection,
  ProblemStatsSection,
  TimeToValueSection,
  ProofSection,
  QualificationSection,
  BonusStackSection,
  PricingSection,
} from '@/app/components/ai-employee'
import {
  AIReceptionistPainDreamDemos,
  AIReceptionistHowItWorksDemos,
} from './ai-receptionist-product-demos'
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
      <AiEmployeeChatPreviewSection />

      {/* Problem */}
      <ProblemStatsSection />
      <ProofSection />
      <HowDigniWorks
        className="py-24 bg-surface"
        stepOverrides={{
          identify: {
            title: howDigniWorksByLanguage[language].steps.identify.title,
            description:
              language === 'fr'
                ? 'Nous cartographions votre flux inbound : appels, WhatsApp, formulaires, messages, et où il se casse.'
                : 'We map your inbound workflow—calls, WhatsApp, forms, messages—and where it breaks.',
          },
          connect: {
            title: howDigniWorksByLanguage[language].steps.connect.title,
            description:
              language === 'fr'
                ? 'Nous le branchons à vos canaux, CRM et calendrier existants.'
                : 'We connect it to the channels, CRM, and calendar you already use.',
          },
        }}
      />

      {/* Demonstration — product tours after mechanism */}
      <AIReceptionistHowItWorksDemos showTaskQueueDemo={showTaskQueueDemo} />

      {/* Contrast — leaky bucket vs loop */}
      <AIReceptionistPainDreamDemos />

      {/* Fit + offer */}
      <QualificationSection />
      <BonusStackSection />
      <TimeToValueSection />
      <PricingSection
        checkoutRedirectingLabel={ctaT.checkoutRedirecting}
        continueToSecureCheckoutLabel={ctaT.continueToSecureCheckout}
      />
    </main>
  )
}
