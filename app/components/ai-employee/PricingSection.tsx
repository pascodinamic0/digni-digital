'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'
import AiEmployeePricingPanel from '@/app/components/AiEmployeePricingPanel'

type Props = {
  checkoutRedirectingLabel: string
  continueToSecureCheckoutLabel: string
}

export default function PricingSection({
  checkoutRedirectingLabel,
  continueToSecureCheckoutLabel,
}: Props) {
  const language = useLanguage()
  const p = translations[language].aiEmployeePage.pricing

  return (
    <AnimatedSection id="pricing" className="border-t border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          label={p.planName}
          title={p.title}
          titleHighlight={p.titleHighlight}
          supporting={p.subtitle}
          align="center"
          className="mx-auto mb-10 [&_.section-label]:rounded-full [&_.section-label]:border-accent/25 [&_.section-label]:bg-accent/10 [&_.section-label]:px-4 [&_.section-label]:py-2 [&_.section-label]:text-accent"
        />

        <AiEmployeePricingPanel
          pricing={p}
          checkoutRedirectingLabel={checkoutRedirectingLabel}
          continueToSecureCheckoutLabel={continueToSecureCheckoutLabel}
        />
      </div>
    </AnimatedSection>
  )
}
