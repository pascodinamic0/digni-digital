'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'

export default function AiEmployeeGuaranteeSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.guarantee

  return (
    <AnimatedSection id="guarantee" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border-2 border-success/40 bg-gradient-to-br from-success/15 via-surface to-success/5 p-8 md:p-10 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-success/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
          <span className="inline-block px-4 py-1.5 bg-success/20 border border-success/30 rounded-full text-success text-xs font-bold uppercase tracking-wider mb-5">
            {t.badge}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text mb-4">{t.title}</h2>
          <p className="text-text/90 text-base md:text-lg leading-relaxed font-medium">{t.body}</p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
