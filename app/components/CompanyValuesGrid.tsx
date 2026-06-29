'use client'

import { motion } from 'framer-motion'
import { HeartHandshake, Scale, Sprout, TrendingUp, type LucideIcon } from 'lucide-react'
import type { TranslationKeys } from '@/app/config/translations'

export type CompanyMissionCopy = TranslationKeys['home']['mission']

type CompanyValuesGridProps = {
  mission: CompanyMissionCopy
}

type ValueAccent = 'accent' | 'success'

export default function CompanyValuesGrid({ mission: m }: CompanyValuesGridProps) {
  const values: {
    title: string
    description: string
    principle: string
    icon: LucideIcon
    accent: ValueAccent
  }[] = [
    { title: m.humanFirst, description: m.humanFirstDesc, principle: m.humanFirstPrinciple, icon: HeartHandshake, accent: 'accent' },
    { title: m.equalAccess, description: m.equalAccessDesc, principle: m.equalAccessPrinciple, icon: Scale, accent: 'success' },
    { title: m.realResults, description: m.realResultsDesc, principle: m.realResultsPrinciple, icon: TrendingUp, accent: 'accent' },
    { title: m.builtToLast, description: m.builtToLastDesc, principle: m.builtToLastPrinciple, icon: Sprout, accent: 'success' },
  ]

  return (
    <>
      <div className="text-center mb-12 md:mb-14">
        <div className="engineered-header-frame mb-6 inline-block">
          <span className="section-label !m-0">{m.valuesTitle}</span>
        </div>
        <h3 className="type-h3 font-bold text-text">{m.valuesSubtitle}</h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {values.map((value, i) => {
          const Icon = value.icon
          const isAccent = value.accent === 'accent'

          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`card group flex h-full flex-col p-7 md:p-8 ${
                isAccent ? 'hover:border-accent/50' : 'hover:border-success/50'
              }`}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 ${
                    isAccent
                      ? 'border-accent/25 bg-accent/10 text-accent'
                      : 'border-success/25 bg-success/10 text-success'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <span
                  className={`type-caption font-bold tabular-nums ${
                    isAccent ? 'text-accent/70' : 'text-success/70'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h4
                className={`type-h4 mb-3 font-bold text-text transition-colors duration-300 ${
                  isAccent ? 'group-hover:text-accent' : 'group-hover:text-success'
                }`}
              >
                {value.title}
              </h4>
              <p className="type-body flex-1 text-muted leading-relaxed">{value.description}</p>

              <p
                className={`type-caption mt-6 border-t pt-4 font-medium italic ${
                  isAccent
                    ? 'border-accent/20 text-accent'
                    : 'border-success/20 text-success'
                }`}
              >
                &ldquo;{value.principle}&rdquo;
              </p>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
