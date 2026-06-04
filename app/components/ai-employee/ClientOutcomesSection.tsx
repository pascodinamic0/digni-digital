'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

const STEP_STYLES = [
  { border: 'border-info/35', text: 'text-info' },
  { border: 'border-accent/35', text: 'text-accent' },
  { border: 'border-success/35', text: 'text-success' },
] as const

export default function ClientOutcomesSection() {
  const language = useLanguage()
  const c = translations[language].aiEmployeePage.clientOutcomes
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <AnimatedSection id="how-it-works-outcomes" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          label={c.badge}
          title={c.title}
          titleHighlight={c.titleHighlight}
          supporting={c.subtitle}
          align="center"
          className="mb-10 max-w-3xl"
        />

        <div className="space-y-4">
          {c.steps.map((step, i) => {
            const open = expandedIndex === i
            const style = STEP_STYLES[i]
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-xl border bg-[var(--software-panel)] ${style.border}`}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                  aria-expanded={open}
                  onClick={() => setExpandedIndex(open ? null : i)}
                >
                  <div>
                    <p className={`type-caption font-bold uppercase tracking-wider ${style.text}`}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="type-h4 mt-2 font-display font-bold text-text">{step.title}</h3>
                    <p className="type-body mt-2 text-muted leading-relaxed">{step.body}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    className="type-body mt-1 shrink-0 text-muted"
                    aria-hidden
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 border-t border-[var(--software-border)] px-5 pb-5 pt-4 md:px-6 md:pb-6">
                        {step.technical.map((line) => (
                          <li key={line} className="type-small flex gap-2 text-muted">
                            <span className="text-accent" aria-hidden>
                              •
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
        <p className="type-caption mt-6 text-center text-muted">
          {expandedIndex === null ? c.expandTechnical : c.collapseTechnical}
        </p>
      </div>
    </AnimatedSection>
  )
}
