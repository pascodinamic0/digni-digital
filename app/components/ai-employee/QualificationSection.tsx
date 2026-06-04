'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

function CheckList({ heading, items, variant }: { heading: string; items: string[]; variant: 'for' | 'not' }) {
  const isFor = variant === 'for'
  return (
    <div
      className={`rounded-xl border p-6 md:p-7 ${
        isFor ? 'border-success/30 bg-success/[0.06]' : 'border-border bg-surface/60'
      }`}
    >
      <h3
        className={`type-h4 font-display font-bold mb-4 ${isFor ? 'text-success' : 'text-muted'}`}
      >
        {heading}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-text">
            <span
              className={`mt-0.5 shrink-0 font-bold ${isFor ? 'text-success' : 'text-muted'}`}
              aria-hidden
            >
              {isFor ? '✓' : '×'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function QualificationSection() {
  const language = useLanguage()
  const q = translations[language].aiEmployeePage.qualification

  return (
    <AnimatedSection id="qualification" className="py-16 md:py-20 bg-surface border-y border-border-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label={q.badge}
          title={q.title}
          titleHighlight={q.titleHighlight}
          align="center"
          className="mb-10 max-w-3xl"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <CheckList heading={q.forHeading} items={[...q.forItems]} variant="for" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <CheckList heading={q.notHeading} items={[...q.notItems]} variant="not" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
