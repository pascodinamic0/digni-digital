'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'

export default function AiEmployeeBonusStackSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.bonusStack

  return (
    <AnimatedSection id="bonus-stack" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-success/10 border border-success/25 rounded-full text-success text-xs font-semibold uppercase tracking-wide mb-4">
            {t.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="space-y-4 mb-8">
          {t.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4 border-success/20"
            >
              <div className="flex-1 min-w-0 text-left">
                <h3 className="font-display text-lg font-bold text-text mb-1">{item.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                <span className="text-muted text-sm line-through decoration-destructive/50">{item.value}</span>
                <span className="text-success font-semibold text-sm">{t.includedLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted text-sm">
          <span className="line-through decoration-destructive/40 mr-2">{t.totalValue}</span>
          <span className="text-success font-semibold">{t.includedLabel}</span>
        </p>
      </div>
    </AnimatedSection>
  )
}
