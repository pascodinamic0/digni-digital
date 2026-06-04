'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  CircleOff,
  Clock,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import type { AiEmployeePageTranslations } from '@/app/i18n/aiEmployeePage'

type CaseStudy = AiEmployeePageTranslations['caseStudy']

type StoryTabId = 'context' | 'challenge' | 'solution'

const STORY_TABS: { id: StoryTabId; icon: LucideIcon }[] = [
  { id: 'context', icon: Building2 },
  { id: 'challenge', icon: AlertTriangle },
  { id: 'solution', icon: Sparkles },
]

const RESULT_ICONS = [CheckCircle2, CircleOff, Clock, TrendingUp] as const

type Props = {
  caseStudy: CaseStudy
}

export default function AiEmployeeProofCarousel({ caseStudy }: Props) {
  const [activeTab, setActiveTab] = useState<StoryTabId>('context')
  const primary = caseStudy.results[0]

  const tabCopy: Record<StoryTabId, { label: string; body: string }> = {
    context: { label: caseStudy.contextLabel, body: caseStudy.context },
    challenge: { label: caseStudy.challengeLabel, body: caseStudy.challenge },
    solution: { label: caseStudy.solutionLabel, body: caseStudy.solution },
  }

  return (
    <div className="space-y-10 md:space-y-12">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl border border-accent/30 bg-[var(--software-panel)] p-6 shadow-[var(--software-frame-shadow)] md:p-8 lg:col-span-5"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/12 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-success/10 blur-3xl" aria-hidden />

          <div className="relative z-10 flex h-full flex-col">
            <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 type-caption font-semibold uppercase tracking-wider text-accent">
              {caseStudy.industry}
            </span>

            <h3 className="type-h3 mt-4 font-display font-bold text-[var(--software-text)]">{caseStudy.company}</h3>

            <div className="mt-6 border-t border-[var(--software-border)] pt-6">
              <p className="type-h1 font-display font-bold tabular-nums text-accent">{primary.metric}</p>
              <p className="type-body-lg mt-3 font-medium leading-snug text-[var(--software-text)]">
                {primary.description}
              </p>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex flex-col rounded-2xl border border-[var(--software-border)] bg-[var(--software-panel)]/90 lg:col-span-7"
        >
          <div
            className="flex flex-wrap gap-1 border-b border-[var(--software-border)] p-2 sm:p-3"
            role="tablist"
            aria-label={caseStudy.company}
          >
            {STORY_TABS.map(({ id, icon: Icon }) => {
              const selected = activeTab === id
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex flex-1 min-w-[7.5rem] items-center justify-center gap-2 rounded-xl px-3 py-2.5 type-small font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    selected
                      ? 'bg-accent text-on-accent shadow-sm'
                      : 'text-[var(--software-text-muted)] hover:bg-[var(--software-sidebar)] hover:text-[var(--software-text)]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {tabCopy[id].label}
                </button>
              )
            })}
          </div>

          <div className="relative flex flex-1 flex-col p-5 sm:p-7 md:p-8" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.22 }}
                className="flex flex-1 flex-col"
              >
                <p className="type-caption font-bold uppercase tracking-wider text-accent">{tabCopy[activeTab].label}</p>
                <p className="type-body-lg mt-4 flex-1 leading-relaxed text-[var(--software-text)]">
                  {tabCopy[activeTab].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div>
        <h4 className="type-h4 mb-6 text-center font-display font-bold text-[var(--software-text)] md:mb-8">
          {caseStudy.outcomesHeading}
        </h4>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {caseStudy.results.map((result, i) => {
            const Icon = RESULT_ICONS[i] ?? CheckCircle2
            return (
              <motion.li
                key={result.description}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="list-none"
              >
                <article className="flex h-full flex-col rounded-2xl border border-[var(--software-border)] bg-[var(--software-panel)] p-5 transition-shadow duration-300 hover:shadow-md md:p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="type-h3 font-display font-bold tabular-nums text-accent">{result.metric}</p>
                  <p className="type-small mt-2 flex-1 leading-relaxed text-[var(--software-text-muted)]">
                    {result.description}
                  </p>
                </article>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
