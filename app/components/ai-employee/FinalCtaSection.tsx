'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { getAssessmentPath } from '@/lib/assessments/paths'
import AnimatedSection from '@/app/components/AnimatedSection'
import AiEmployeeScarcityBanner from '@/app/components/AiEmployeeScarcityBanner'

export default function FinalCtaSection() {
  const language = useLanguage()
  const f = translations[language].aiEmployeePage.finalCta

  return (
    <AnimatedSection id="cta" className="py-20 md:py-28 bg-gradient-mesh-brand border-t border-border-light">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="type-h2 font-display font-bold text-text mb-4">
            {f.title}
            <br />
            <span className="gradient-text-brand">{f.titleHighlight}</span>
          </h2>
          <p className="type-body-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">{f.subtitle}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a {...getBookingLinkProps()} className="btn-primary w-full sm:w-auto px-8 py-3.5 text-center">
              {f.primaryCta}
            </a>
            <Link
              href={getAssessmentPath('ai-employee')}
              className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-center"
            >
              {translations[language].aiEmployeePage.pricing.assessmentCta}
            </Link>
          </div>
          <div className="mx-auto mt-6 max-w-md">
            <AiEmployeeScarcityBanner variant="inline" />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
