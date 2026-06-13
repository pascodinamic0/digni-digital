'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleOff,
  Clock,
  Quote,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import type { AiEmployeePageTranslations } from '@/app/i18n/aiEmployeePage'

type CaseStudy = AiEmployeePageTranslations['caseStudy']

type StoryStepId = 'context' | 'challenge' | 'solution'

const STORY_STEPS: { id: StoryStepId; icon: LucideIcon }[] = [
  { id: 'context', icon: Building2 },
  { id: 'challenge', icon: AlertTriangle },
  { id: 'solution', icon: Sparkles },
]

const RESULT_ICONS = [CheckCircle2, CircleOff, Clock, TrendingUp] as const

type Props = {
  caseStudy: CaseStudy
}

function CaseStudyHeader({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 type-caption font-semibold uppercase tracking-wider text-accent md:px-3 md:py-1">
          {caseStudy.industry}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--software-border)] bg-[var(--software-sidebar)] px-2.5 py-0.5 type-caption font-semibold text-[var(--software-text-muted)] md:px-3 md:py-1">
          <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden />
          {caseStudy.timeline}
        </span>
      </div>
      <h3 className="type-h4 mt-3 font-display font-bold text-[var(--software-text)] lg:mt-4">
        {caseStudy.company}
      </h3>
    </>
  )
}

function StoryTimeline({
  stepCopy,
}: {
  stepCopy: Record<StoryStepId, { label: string; body: string }>
}) {
  return (
    <ol className="relative mt-5 space-y-0 md:mt-8">
      {STORY_STEPS.map(({ id, icon: Icon }, index) => {
        const isLast = index === STORY_STEPS.length - 1
        return (
          <li key={id} className={`relative flex gap-3 pb-5 md:gap-4 md:pb-8 ${isLast ? 'pb-0' : ''}`}>
            {!isLast ? (
              <span
                className="absolute start-[0.9375rem] top-9 bottom-0 w-px bg-[var(--software-border)] md:start-[1.125rem] md:top-10"
                aria-hidden
              />
            ) : null}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 md:h-9 md:w-9 md:rounded-xl">
              <Icon className="h-3.5 w-3.5 text-accent md:h-4 md:w-4" strokeWidth={2} aria-hidden />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="type-caption font-bold uppercase tracking-wider text-accent">{stepCopy[id].label}</p>
              <p className="type-small mt-1.5 leading-relaxed text-[var(--software-text)] lg:mt-2">
                {stepCopy[id].body}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

function StoryTabs({
  caseStudy,
  stepCopy,
  activeTab,
  onTabChange,
}: {
  caseStudy: CaseStudy
  stepCopy: Record<StoryStepId, { label: string; body: string }>
  activeTab: StoryStepId
  onTabChange: (id: StoryStepId) => void
}) {
  return (
    <div className="mt-4">
      <div
        className="flex gap-1 rounded-xl border border-[var(--software-border)] bg-[var(--software-sidebar)] p-1"
        role="tablist"
        aria-label={caseStudy.company}
      >
        {STORY_STEPS.map(({ id, icon: Icon }) => {
          const selected = activeTab === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onTabChange(id)}
              className={`inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-lg px-2 py-2 type-caption font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:gap-1.5 lg:px-3 lg:py-2.5 ${
                selected
                  ? 'bg-accent text-on-accent shadow-sm'
                  : 'text-[var(--software-text-muted)] hover:text-[var(--software-text)]'
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" strokeWidth={2} aria-hidden />
              <span className="truncate">{stepCopy[id].label}</span>
            </button>
          )
        })}
      </div>
      <div className="mt-3" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="type-small leading-relaxed text-[var(--software-text)]"
          >
            {stepCopy[activeTab].body}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

function TestimonialBlock({ caseStudy, compact = false }: { caseStudy: CaseStudy; compact?: boolean }) {
  return (
    <>
      <Quote
        className={`text-accent/70 ${compact ? 'h-5 w-5' : 'h-8 w-8'}`}
        strokeWidth={1.5}
        aria-hidden
      />
      <blockquote
        className={`flex-1 font-medium leading-relaxed text-[var(--software-text)] ${
          compact ? 'type-small mt-2' : 'type-body-lg mt-5'
        }`}
      >
        &ldquo;{caseStudy.testimonial}&rdquo;
      </blockquote>
      <footer className={`border-t border-[var(--software-border)] ${compact ? 'mt-3 pt-3' : 'mt-6 pt-5'}`}>
        <cite className="type-small not-italic font-semibold text-[var(--software-text)]">
          {caseStudy.testimonialAuthor}
        </cite>
        <p className="type-caption mt-0.5 text-[var(--software-text-muted)] md:mt-1">{caseStudy.testimonialRole}</p>
      </footer>
    </>
  )
}

export default function AiEmployeeProofCarousel({ caseStudy }: Props) {
  const [activeTab, setActiveTab] = useState<StoryStepId>('context')

  const stepCopy: Record<StoryStepId, { label: string; body: string }> = {
    context: { label: caseStudy.contextLabel, body: caseStudy.context },
    challenge: { label: caseStudy.challengeLabel, body: caseStudy.challenge },
    solution: { label: caseStudy.solutionLabel, body: caseStudy.solution },
  }

  return (
    <div className="space-y-5 md:space-y-10">
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-5">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-destructive/25 bg-destructive/[0.06] p-3.5 md:rounded-2xl md:p-6"
        >
          <span className="type-caption font-bold uppercase tracking-wider text-destructive">
            {caseStudy.before.label}
          </span>
          <p className="type-h3 mt-1.5 font-display font-bold tabular-nums text-destructive lg:mt-3">
            {caseStudy.before.metric}
          </p>
          <p className="type-caption mt-1.5 leading-snug text-[var(--software-text-muted)] lg:mt-2">
            {caseStudy.before.description}
          </p>
        </motion.article>

        <div className="hidden items-center justify-center text-[var(--software-text-muted)] md:flex" aria-hidden>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--software-border)] bg-[var(--software-panel)]">
            <ArrowRight className="h-4 w-4 text-accent" strokeWidth={2} />
          </div>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="rounded-xl border border-success/30 bg-success/[0.08] p-3.5 md:rounded-2xl md:p-6"
        >
          <span className="type-caption font-bold uppercase tracking-wider text-success">{caseStudy.after.label}</span>
          <p className="type-h3 mt-1.5 font-display font-bold tabular-nums text-success lg:mt-3">
            {caseStudy.after.metric}
          </p>
          <p className="type-caption mt-1.5 leading-snug text-[var(--software-text-muted)] lg:mt-2">
            {caseStudy.after.description}
          </p>
        </motion.article>
      </div>

      <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-xl border border-[var(--software-border)] bg-[var(--software-panel)] p-4 shadow-[var(--software-frame-shadow)] md:rounded-2xl md:p-8 lg:col-span-7"
        >
          <CaseStudyHeader caseStudy={caseStudy} />

          <div className="lg:hidden">
            <StoryTabs
              caseStudy={caseStudy}
              stepCopy={stepCopy}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          <div className="hidden lg:block">
            <StoryTimeline stepCopy={stepCopy} />
          </div>

          <div className="mt-4 border-t border-[var(--software-border)] pt-4 lg:hidden">
            <TestimonialBlock caseStudy={caseStudy} compact />
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="hidden flex-col rounded-2xl border border-accent/25 bg-accent/[0.06] p-6 md:p-8 lg:col-span-5 lg:flex"
        >
          <TestimonialBlock caseStudy={caseStudy} />
        </motion.aside>
      </div>

      <div>
        <h4 className="type-h4 mb-4 text-center font-display font-bold text-[var(--software-text)] md:mb-8">
          {caseStudy.outcomesHeading}
        </h4>
        <ul className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4 lg:gap-5">
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
                <article className="flex h-full flex-col rounded-xl border border-[var(--software-border)] bg-[var(--software-panel)] p-3.5 transition-shadow duration-300 hover:shadow-md md:rounded-2xl md:p-6">
                  <div className="mb-2 hidden h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 md:mb-4 md:flex">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="type-h4 font-display font-bold tabular-nums text-accent">{result.metric}</p>
                  <p className="type-caption mt-1 flex-1 leading-snug text-[var(--software-text-muted)] lg:mt-2">
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
