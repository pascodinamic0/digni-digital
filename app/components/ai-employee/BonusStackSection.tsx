'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

export default function BonusStackSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.bonusStack

  return (
    <AnimatedSection id="bonus-stack" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label={t.badge}
          title={t.title}
          supporting={t.subtitle}
          align="center"
          className="mb-12 max-w-3xl [&_.section-label]:rounded-full [&_.section-label]:border-success/25 [&_.section-label]:bg-success/10 [&_.section-label]:px-4 [&_.section-label]:py-2 [&_.section-label]:text-success"
        />

        <div className="mb-8 space-y-4">
          {t.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card flex flex-col gap-4 border-success/20 p-6 sm:flex-row sm:items-center md:p-7"
            >
              <div className="min-w-0 flex-1 text-left">
                <h3 className="type-h4 font-display font-bold text-text mb-1">{item.name}</h3>
                <p className="type-small text-muted leading-relaxed">{item.description}</p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                <span className="type-small text-muted line-through decoration-destructive/50">{item.value}</span>
                <span className="type-small font-semibold text-success">{t.includedLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="type-small text-center text-muted">
          <span className="mr-2 line-through decoration-destructive/40">{t.totalValue}</span>
          <span className="font-semibold text-success">{t.includedLabel}</span>
        </p>
      </div>
    </AnimatedSection>
  )
}
