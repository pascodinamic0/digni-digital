'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

export default function ProblemStatsSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.problem

  return (
    <AnimatedSection
      id="problem"
      className="border-y border-[var(--software-border)] py-16 md:py-20"
      aria-labelledby="ai-employee-problem-stats"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          label={t.badge}
          title={t.title}
          titleHighlight={t.titleHighlight}
          supporting={t.subtitle}
          id="ai-employee-problem-stats"
          highlightClassName="text-destructive"
          className="mb-10 [&_.section-label]:rounded-md [&_.section-label]:border [&_.section-label]:border-destructive/25 [&_.section-label]:bg-destructive/10 [&_.section-label]:px-2.5 [&_.section-label]:py-1 [&_.section-label]:text-destructive"
        />

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {t.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="rounded-lg border border-destructive/20 bg-[var(--software-panel)] p-6 text-center md:p-7"
            >
              <p className="type-h2 font-display font-bold tabular-nums text-destructive mb-3">{stat.value}</p>
              <p className="type-body font-medium text-text mb-2">{stat.label}</p>
              <p className="type-small text-muted">{stat.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
