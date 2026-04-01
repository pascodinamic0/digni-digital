'use client'

import { motion } from 'framer-motion'
import type { TranslationKeys } from '@/app/config/translations'

export type CompanyMissionCopy = TranslationKeys['home']['mission']

type CompanyValuesGridProps = {
  mission: CompanyMissionCopy
}

export default function CompanyValuesGrid({ mission: m }: CompanyValuesGridProps) {
  const values = [
    { title: m.humanFirst, description: m.humanFirstDesc, icon: '🤝', principle: m.humanFirstPrinciple },
    { title: m.equalAccess, description: m.equalAccessDesc, icon: '⚖️', principle: m.equalAccessPrinciple },
    { title: m.realResults, description: m.realResultsDesc, icon: '⚡', principle: m.realResultsPrinciple },
    { title: m.builtToLast, description: m.builtToLastDesc, icon: '🌱', principle: m.builtToLastPrinciple },
  ]

  return (
    <>
      <div className="text-center mb-16">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">{m.valuesTitle}</span>
        <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
          {m.valuesSubtitle}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card p-8 group hover:border-accent/50"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {value.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted mb-4 leading-relaxed">{value.description}</p>
                <blockquote className="text-accent italic text-sm font-medium border-l-2 border-accent/30 pl-4">
                  &ldquo;{value.principle}&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
