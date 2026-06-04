'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

export default function CapabilitiesSection() {
  const language = useLanguage()
  const c = translations[language].aiEmployeePage.capabilities

  return (
    <AnimatedSection id="capabilities" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label={c.badge}
          title={c.title}
          titleHighlight={c.titleHighlight}
          supporting={c.subtitle}
          align="center"
          className="mb-12 max-w-4xl"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {c.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-lg border border-[var(--software-border)] bg-[var(--software-panel)] p-6"
            >
              <h3 className="type-h4 font-display font-bold text-text mb-2">{item.title}</h3>
              <p className="type-small text-[var(--software-text-muted)] leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
