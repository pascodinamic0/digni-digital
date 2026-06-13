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
      className="border-y border-[var(--software-border)] py-12 md:py-16 lg:py-20"
      aria-labelledby="ai-employee-problem-stats"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-destructive/25 bg-[var(--software-panel)] shadow-[var(--software-frame-shadow)]">
          <div className="relative border-b border-[var(--software-border)] px-5 py-6 sm:px-8 sm:py-7 md:px-10">
            <div
              className="pointer-events-none absolute inset-y-0 start-0 w-1 bg-gradient-to-b from-destructive/80 via-destructive/40 to-transparent"
              aria-hidden
            />
            <SectionHeading
              label={t.badge}
              title={t.title}
              titleHighlight={t.titleHighlight}
              supporting={t.subtitle}
              id="ai-employee-problem-stats"
              highlightClassName="text-destructive"
              titleLayout="inline"
              className="max-w-none [&_h2]:text-balance [&_h2]:leading-[1.14] [&_p]:max-w-2xl [&_.section-label]:rounded-md [&_.section-label]:border [&_.section-label]:border-destructive/25 [&_.section-label]:bg-destructive/10 [&_.section-label]:px-2.5 [&_.section-label]:py-1 [&_.section-label]:text-destructive"
            />
          </div>

          <ul className="grid divide-y divide-[var(--software-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.stats.map((stat, i) => (
              <motion.li
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * (i + 1) }}
                className="list-none"
              >
                <article className="flex h-full items-start gap-4 px-5 py-4 sm:flex-col sm:items-center sm:px-4 sm:py-5 sm:text-center md:px-5 md:py-6">
                  <p className="type-h3 w-[4.5rem] shrink-0 font-display font-bold tabular-nums leading-none text-destructive sm:w-auto">
                    {stat.value}
                  </p>
                  <div className="min-w-0 flex-1 sm:flex-none">
                    <p className="type-small font-semibold leading-snug text-[var(--software-text)]">
                      {stat.label}
                    </p>
                    <p className="type-caption mt-1.5 leading-snug text-[var(--software-text-muted)] sm:mt-2">
                      {stat.hint}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  )
}
