'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import AnimatedSection from '@/app/components/AnimatedSection'
import AiEmployeeValueBadges from '@/app/components/AiEmployeeValueBadges'

export default function TimeToValueSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.timeToValue

  return (
    <AnimatedSection id="time-to-value" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-accent/30 bg-[var(--software-panel)] p-8 md:p-10"
        >
          <div className="relative z-10 flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
              <div className="text-center md:max-w-[55%] md:text-left">
                <span className="type-caption mb-4 inline-flex items-center gap-2 rounded-full border border-border-light bg-foreground/10 px-3 py-1 font-medium text-foreground/80 backdrop-blur-sm">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t.badge}
                </span>
                <h2 className="type-h2 font-display font-bold text-text mb-4">{t.title}</h2>
                <p className="type-body-lg mx-auto max-w-lg leading-relaxed text-foreground/80 md:mx-0">
                  {t.subtitle}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-center gap-4 md:items-end md:pt-1">
                <div className="text-center md:text-right">
                  <p className="type-h1 font-display font-bold tabular-nums leading-none text-text mb-2">
                    {t.statBig}
                  </p>
                  <p className="type-small text-foreground/60">{t.statSmall}</p>
                </div>
                <a
                  {...getBookingLinkProps()}
                  className="btn-primary inline-flex items-center gap-2 whitespace-nowrap px-6 py-3"
                >
                  {t.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            <AiEmployeeValueBadges variant="grid" className="border-t border-[var(--software-border)] pt-8" />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
