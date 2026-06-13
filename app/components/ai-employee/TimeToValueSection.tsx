'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
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
          <div className="relative z-10 flex flex-col gap-8">
            <span className="type-caption inline-flex w-fit items-center gap-2 rounded-full border border-border-light bg-foreground/10 px-3 py-1 font-medium text-foreground/80 backdrop-blur-sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.badge}
            </span>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl text-center sm:text-left">
                <h2 className="type-h2 font-display font-bold text-text">{t.title}</h2>
                <p className="type-body-lg mt-3 leading-relaxed text-foreground/80">{t.subtitle}</p>
              </div>
              <div className="shrink-0 text-center sm:text-right">
                <p className="type-h1 font-display font-bold tabular-nums leading-none text-text">{t.statBig}</p>
                <p className="type-small mt-2 text-foreground/60">{t.statSmall}</p>
              </div>
            </div>

            <AiEmployeeValueBadges variant="grid" className="border-t border-[var(--software-border)] pt-8" />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
