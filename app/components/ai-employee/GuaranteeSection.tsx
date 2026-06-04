'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'

export default function GuaranteeSection() {
  const language = useLanguage()
  const g = translations[language].aiEmployeePage.guarantee

  return (
    <AnimatedSection id="guarantee" className="border-b border-[var(--software-border)] py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-success/35 bg-success/[0.08] px-6 py-8 text-center md:px-10"
        >
          <span className="type-caption font-bold uppercase tracking-wider text-success">{g.badge}</span>
          <h2 className="type-h3 font-display font-bold text-text mt-3 mb-3">{g.title}</h2>
          <p className="type-body text-muted leading-relaxed">{g.body}</p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
