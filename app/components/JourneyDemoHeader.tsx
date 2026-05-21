'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { getFlowStepPrefix, flowStepAnchor } from '@/lib/ai-receptionist-flow'

type BadgeTone = 'success' | 'accent'

const BADGE_CLASS: Record<BadgeTone, string> = {
  success: 'bg-success/10 border-success/20 text-success',
  accent: 'bg-accent/10 border-accent/20 text-accent',
}

type Props = {
  step: 1 | 2 | 3 | 4 | 5 | 6
  /** Small line tying this demo to the client-journey phase (from BusinessTimeline). */
  journeyPhase: string
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  titleId: string
  badgeTone?: BadgeTone
  /** `inbox` uses line break between title parts; others inline or line break via prop */
  titleLayout?: 'stacked' | 'inline'
  className?: string
}

/**
 * Shared header for product demos: journey step number + phase, then the demo’s own headline.
 */
export default function JourneyDemoHeader({
  step,
  journeyPhase,
  badge,
  title,
  titleHighlight,
  subtitle,
  titleId,
  badgeTone = 'success',
  titleLayout = 'stacked',
  className = 'mb-12 md:mb-16',
}: Props) {
  const language = useLanguage()
  const prefix = getFlowStepPrefix(language)

  return (
    <div
      id={flowStepAnchor(step)}
      className={`scroll-mt-28 text-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-on-accent font-display text-lg font-bold shadow-md shadow-accent/25"
          aria-hidden
        >
          {step}
        </span>
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-muted text-center sm:text-left">
          {prefix} {step} · {journeyPhase}
        </p>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-2 border rounded-full text-xs font-semibold uppercase tracking-wide mb-4 ${BADGE_CLASS[badgeTone]}`}
      >
        {badge}
      </motion.span>
      <motion.h2
        id={titleId}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display font-bold mt-4 mb-6 ${
          titleLayout === 'stacked'
            ? 'text-3xl sm:text-4xl md:text-5xl'
            : 'text-4xl md:text-5xl lg:text-6xl'
        }`}
      >
        {titleLayout === 'stacked' ? (
          <>
            {title}
            <br />
            <span className="gradient-text-brand">{titleHighlight}</span>
          </>
        ) : (
          <>
            {title} <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted text-base sm:text-lg max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
