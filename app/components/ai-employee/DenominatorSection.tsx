'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import AiEmployeeValueBadges from '@/app/components/AiEmployeeValueBadges'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

export default function DenominatorSection() {
  const language = useLanguage()
  const d = translations[language].aiEmployeePage.denominator

  const pillars = [
    { icon: '⚡', label: d.pillarSpeed, hint: d.pillarSpeedHint },
    { icon: '🛠', label: d.pillarDeploy, hint: d.pillarDeployHint },
    { icon: '✨', label: d.pillarEffort, hint: d.pillarEffortHint },
  ]

  return (
    <AnimatedSection id="speed-effort" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label={d.badge}
          title={d.title}
          supporting={d.subtitle}
          align="center"
          className="mb-8 max-w-3xl"
        />
        <AiEmployeeValueBadges className="mb-10" />

        <div className="grid gap-4 text-left md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card border-accent/20 p-5"
            >
              <span className="type-h4" aria-hidden>
                {p.icon}
              </span>
              <p className="type-h4 font-display font-bold text-text mt-3 mb-1">{p.label}</p>
              <p className="type-small text-muted leading-relaxed">{p.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
