'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import AiEmployeeValueBadges from '@/app/components/AiEmployeeValueBadges'

export default function AiEmployeeDenominatorSection() {
  const language = useLanguage()
  const d = translations[language].aiEmployeePage.denominator

  const pillars = [
    { icon: '⚡', label: d.pillarSpeed, hint: d.pillarSpeedHint },
    { icon: '🛠', label: d.pillarDeploy, hint: d.pillarDeployHint },
    { icon: '✨', label: d.pillarEffort, hint: d.pillarEffortHint },
  ]

  return (
    <AnimatedSection id="speed-effort" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">{d.badge}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">{d.title}</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">{d.subtitle}</p>
        <AiEmployeeValueBadges className="mb-10" />

        <div className="grid md:grid-cols-3 gap-4 text-left">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-5 border-accent/20"
            >
              <span className="text-2xl" aria-hidden>
                {p.icon}
              </span>
              <p className="font-display font-bold text-text mt-3 mb-1">{p.label}</p>
              <p className="text-muted text-sm leading-relaxed">{p.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
