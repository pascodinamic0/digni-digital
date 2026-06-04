'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import AiEmployeeProofCarousel from '@/app/components/AiEmployeeProofCarousel'

export default function ProofSection() {
  const language = useLanguage()
  const cs = translations[language].aiEmployeePage.caseStudy

  return (
    <AnimatedSection id="proof" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center md:mb-10">
          <span className="section-label">{cs.label}</span>
          <h2 className="type-h2 mx-auto mt-3 mb-2 max-w-2xl font-display font-bold">{cs.title}</h2>
        </div>
        <AiEmployeeProofCarousel caseStudy={cs} />
      </div>
    </AnimatedSection>
  )
}
