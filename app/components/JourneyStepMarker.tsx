'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { getFlowStepPrefix, getJourneyPhaseTitle, flowStepAnchor } from '@/lib/ai-receptionist-flow'

type Props = {
  step: 1 | 2 | 3 | 4 | 5 | 6
  description?: string
}

/** Compact journey marker inside a demo (e.g. step 5 follow-up within pipeline). */
export default function JourneyStepMarker({ step, description }: Props) {
  const language = useLanguage()
  const prefix = getFlowStepPrefix(language)
  const phase = getJourneyPhaseTitle(language, step)

  return (
    <div id={flowStepAnchor(step)} className="scroll-mt-28 max-w-3xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 rounded-xl border border-border-light bg-surface/80 px-4 py-3"
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/90 text-on-accent font-display text-sm font-bold"
          aria-hidden
        >
          {step}
        </span>
        <div className="text-left min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
            {prefix} {step} · {phase}
          </p>
          {description ? <p className="text-sm text-muted mt-1 leading-snug">{description}</p> : null}
        </div>
      </motion.div>
    </div>
  )
}
