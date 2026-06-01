'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'

export default function AiEmployeeDreamOutcomeSection() {
  const language = useLanguage()
  const d = translations[language].aiEmployeePage.dreamOutcome

  return (
    <AnimatedSection id="dream-outcome" className="py-16 md:py-20 bg-surface border-y border-border-light">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">{d.badge}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-3">{d.title}</h2>
        <p className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed">{d.subtitle}</p>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-destructive/25 bg-destructive/10 p-6"
          >
            <p className="text-xs uppercase tracking-wider text-destructive font-semibold mb-2">{d.beforeLabel}</p>
            <p className="font-display text-4xl md:text-5xl font-bold text-destructive">{d.beforeMetric}</p>
            <p className="text-muted text-sm mt-2">{d.beforeHint}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-accent/30 bg-accent/10 p-6 flex flex-col items-center justify-center"
            aria-hidden
          >
            <span className="text-3xl text-accent">→</span>
            <p className="text-sm font-medium text-text mt-2">{d.arrowLabel}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-success/30 bg-success/10 p-6"
          >
            <p className="text-xs uppercase tracking-wider text-success font-semibold mb-2">{d.afterLabel}</p>
            <p className="font-display text-4xl md:text-5xl font-bold text-success">{d.afterMetric}</p>
            <p className="text-success/90 text-sm font-semibold mt-2">{d.referralLine}</p>
            <p className="text-muted text-sm mt-1">{d.afterHint}</p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
