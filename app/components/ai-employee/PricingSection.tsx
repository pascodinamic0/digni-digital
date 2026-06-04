'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
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
    <AnimatedSection id="pricing" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:mb-7">
          <h2 className="type-h2 mb-2 font-display font-bold">{p.title}</h2>
          <p className="type-body mx-auto max-w-md leading-relaxed text-muted">{p.subtitle}</p>
        </div>

        <AiEmployeePricingPanel
          pricing={p}
          checkoutRedirectingLabel={checkoutRedirectingLabel}
          continueToSecureCheckoutLabel={continueToSecureCheckoutLabel}
        />
      </div>
    </AnimatedSection>
  )
}
