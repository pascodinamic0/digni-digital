'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import {
  flowStepAnchor,
  scrollToFlowTargets,
  type AiReceptionistScrollAnchor,
} from '@/lib/ai-receptionist-flow'

type BadgeTone = 'success' | 'accent'

const BADGE_CLASS: Record<BadgeTone, string> = {
  success: 'bg-success/10 border-success/20 text-success',
  accent: 'bg-accent/10 border-accent/20 text-accent',
}

type Props = {
  step: 1 | 2 | 3 | 4 | 5 | 6
  journeyPhase: string
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  titleId: string
  badgeTone?: BadgeTone
  titleLayout?: 'stacked' | 'inline'
  variant?: 'marketing' | 'software'
  align?: 'center' | 'left'
  anchorId?: AiReceptionistScrollAnchor
  nextCta?: { label: string; targets: readonly string[] }
  className?: string
}

/** Product demo copy block — feature headline only; journey steps live in the intro + timeline. */
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
  variant = 'marketing',
  align,
  anchorId,
  nextCta,
  className = 'mb-12 md:mb-16',
}: Props) {
  void journeyPhase

  const isSoftware = variant === 'software'
  const isCentered = align === 'center' || (!isSoftware && align !== 'left')

  return (
    <div
      id={isSoftware ? undefined : anchorId ?? flowStepAnchor(step)}
      className={`${isSoftware ? '' : 'scroll-mt-28'} ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'} ${className}`}
    >
      {!isSoftware ? (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block border px-4 py-2 rounded-full mb-4 text-xs font-semibold uppercase tracking-wide ${BADGE_CLASS[badgeTone]}`}
        >
          {badge}
        </motion.span>
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3 inline-block"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        id={titleId}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display font-bold mb-3 ${
          isSoftware
            ? 'type-h3 leading-tight text-[var(--software-text)]'
            : `mt-4 mb-6 text-text ${
                titleLayout === 'stacked'
                  ? 'text-3xl sm:text-4xl md:text-5xl'
                  : 'text-4xl md:text-5xl lg:text-6xl'
              }`
        }`}
      >
        {titleLayout === 'stacked' ? (
          <>
            {title}
            <br />
            <span className={isSoftware ? 'software-demo-title-highlight' : 'gradient-text-brand'}>
              {titleHighlight}
            </span>
          </>
        ) : (
          <>
            {title}{' '}
            <span className={isSoftware ? 'software-demo-title-highlight' : 'gradient-text-brand'}>
              {titleHighlight}
            </span>
          </>
        )}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`leading-relaxed ${
          isSoftware
            ? `type-body text-[var(--software-text-muted)] max-w-2xl ${isCentered ? 'mx-auto' : ''}`
            : 'text-muted mx-auto max-w-3xl text-base sm:text-lg'
        }`}
      >
        {subtitle}
      </motion.p>
      {isSoftware && nextCta ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28 }}
          className={`mt-5 ${isCentered ? 'flex justify-center' : ''}`}
        >
          <button
            type="button"
            onClick={() => scrollToFlowTargets(nextCta.targets)}
            className="group inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent/50 hover:bg-accent/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {nextCta.label}
            <ChevronRight
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </button>
        </motion.div>
      ) : null}
    </div>
  )
}
