'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

export default function DreamOutcomeSection() {
  const language = useLanguage()
  const d = translations[language].aiEmployeePage.dreamOutcome

  return (
    <AnimatedSection id="dream-outcome" className="border-y border-border-light bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          label={d.badge}
          title={d.title}
          supporting={d.subtitle}
          align="center"
          className="mb-10 max-w-3xl"
        />

        <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-destructive/25 bg-destructive/10 p-6"
          >
            <p className="type-caption font-semibold uppercase tracking-wider text-destructive mb-2">
              {d.beforeLabel}
            </p>
            <p className="type-h2 font-display font-bold tabular-nums text-destructive">{d.beforeMetric}</p>
            <p className="type-small mt-2 text-muted">{d.beforeHint}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 p-6"
            aria-hidden
          >
            <span className="type-h3 text-accent">→</span>
            <p className="type-small mt-2 font-medium text-text">{d.arrowLabel}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-success/30 bg-success/10 p-6"
          >
            <p className="type-caption font-semibold uppercase tracking-wider text-success mb-2">
              {d.afterLabel}
            </p>
            <p className="type-h2 font-display font-bold tabular-nums text-success">{d.afterMetric}</p>
            <p className="type-small mt-2 font-semibold text-success/90">{d.referralLine}</p>
            <p className="type-small mt-1 text-muted">{d.afterHint}</p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
