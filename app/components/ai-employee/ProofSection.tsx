'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import AiEmployeeProofCarousel from '@/app/components/AiEmployeeProofCarousel'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

export default function ProofSection() {
  const language = useLanguage()
  const cs = translations[language].aiEmployeePage.caseStudy

  return (
    <AnimatedSection id="proof" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label={cs.label} title={cs.title} align="center" className="mb-10 md:mb-12" />
        <AiEmployeeProofCarousel caseStudy={cs} />
      </div>
    </AnimatedSection>
  )
}
