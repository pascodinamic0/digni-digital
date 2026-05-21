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
    <AnimatedSection className="py-24 bg-background border-y border-border-light" aria-labelledby="ai-employee-problem-stats">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full text-destructive text-xs font-semibold mb-6 uppercase tracking-wide">
            {t.badge}
          </span>
          <h2
            id="ai-employee-problem-stats"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            {t.title}
            <br />
            <span className="text-destructive">{t.titleHighlight}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/20 p-8 text-center"
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
