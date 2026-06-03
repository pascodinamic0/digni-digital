'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'

/** Stakes / proof block — placed after the journey demos, before contrast sections. */
export default function AiEmployeeProblemStatsSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.problem

  return (
    <AnimatedSection
      className="border-y border-[var(--software-border)] py-16 md:py-20"
      aria-labelledby="ai-employee-problem-stats"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-block rounded-md border border-destructive/25 bg-destructive/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-destructive">
            {t.badge}
          </span>
          <h2
            id="ai-employee-problem-stats"
            className="font-display text-2xl font-bold leading-tight text-[var(--software-text)] md:text-3xl lg:text-4xl"
          >
            {t.title}{' '}
            <span className="text-destructive">{t.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm text-[var(--software-text-muted)] sm:text-base">{t.subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="rounded-lg border border-destructive/20 bg-[var(--software-panel)] p-6 text-center md:p-7"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-destructive mb-3">{stat.value}</div>
              <p className="text-text font-medium mb-2">{stat.label}</p>
              <p className="text-muted text-sm">{stat.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
