'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Check, MessageSquare, TrendingUp, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'

const STEP_CONFIG: {
  Icon: LucideIcon
  border: string
  iconWrap: string
  iconColor: string
  stepColor: string
}[] = [
  {
    Icon: MessageSquare,
    border: 'border-info/30',
    iconWrap: 'bg-info/10 border-info/25',
    iconColor: 'text-info',
    stepColor: 'bg-info text-background',
  },
  {
    Icon: CalendarCheck,
    border: 'border-accent/30',
    iconWrap: 'bg-accent/10 border-accent/25',
    iconColor: 'text-accent',
    stepColor: 'bg-accent text-on-accent',
  },
  {
    Icon: TrendingUp,
    border: 'border-success/30',
    iconWrap: 'bg-success/10 border-success/25',
    iconColor: 'text-success',
    stepColor: 'bg-success text-background',
  },
]

export default function ClientOutcomesSection() {
  const language = useLanguage()
  const c = translations[language].aiEmployeePage.clientOutcomes

  return (
    <AnimatedSection id="how-it-works-outcomes" className="border-b border-[var(--software-border)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label={c.badge}
          title={c.title}
          titleHighlight={c.titleHighlight}
          supporting={c.subtitle}
          align="center"
          className="mb-12 md:mb-14"
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-11 hidden h-0.5 rounded-full bg-gradient-to-r from-info/50 via-accent/50 to-success/50 lg:block"
            aria-hidden
          />

          <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {c.steps.map((step, i) => {
              const config = STEP_CONFIG[i]
              const { Icon } = config
              const stepNum = String(i + 1).padStart(2, '0')

              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="relative flex list-none"
                >
                  <article
                    className={`flex h-full w-full flex-col rounded-2xl border bg-[var(--software-panel)] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-7 ${config.border}`}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <span
                        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold tabular-nums shadow-sm ${config.stepColor}`}
                      >
                        {stepNum}
                      </span>
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${config.iconWrap}`}
                      >
                        <Icon className={`h-6 w-6 ${config.iconColor}`} strokeWidth={1.75} aria-hidden />
                      </div>
                    </div>

                    <h3 className="type-h4 font-display font-bold text-text">{step.title}</h3>
                    <p className="type-body-lg mt-2 font-medium leading-snug text-text">{step.body}</p>

                    <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-[var(--software-border)] pt-6">
                      {step.technical.map((line) => (
                        <li key={line} className="type-small flex gap-2.5 leading-relaxed text-[var(--software-text-muted)]">
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${config.iconColor}`}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </AnimatedSection>
  )
}
