'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { ChevronRight } from 'lucide-react'
import {
  getFlowStepPrefix,
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
  /** Product-page layout: denser type (SaaS feature sections). */
  variant?: 'marketing' | 'software'
  /** Software sections on the product page use centered copy for scanability. */
  align?: 'center' | 'left'
  /** Override scroll anchor (e.g. Ads Manager between journey steps). */
  anchorId?: AiReceptionistScrollAnchor
  /** Scroll-to-next demo CTA (software product page). */
  nextCta?: { label: string; targets: readonly string[] }
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
  variant = 'marketing',
  align,
  anchorId,
  nextCta,
  className = 'mb-12 md:mb-16',
}: Props) {
  const language = useLanguage()
  const prefix = getFlowStepPrefix(language)
  const isSoftware = variant === 'software'
  const isCentered = align === 'center' || (!isSoftware && align !== 'left')

  return (
    <div
      id={anchorId ?? flowStepAnchor(step)}
      className={`scroll-mt-28 ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mb-5 flex gap-3 sm:gap-4 ${
          isCentered
            ? 'flex-col items-center justify-center sm:flex-row'
            : isSoftware
              ? 'flex-row items-center'
              : 'flex-col items-center justify-center sm:flex-row'
        }`}
      >
        <span
          className={`flex shrink-0 items-center justify-center rounded-lg font-display font-bold ${
            isSoftware
              ? 'h-9 w-9 bg-[var(--software-nav-active)] text-accent text-sm'
              : 'h-11 w-11 rounded-xl bg-accent text-on-accent text-lg shadow-md shadow-accent/25'
          }`}
          aria-hidden
        >
          {step}
        </span>
        <p
          className={`font-bold uppercase tracking-widest text-[var(--software-text-muted)] ${
            isSoftware ? 'text-[10px] sm:text-[11px]' : 'text-[11px] sm:text-xs text-muted text-center sm:text-left'
          }`}
        >
          {prefix} {step} · {journeyPhase}
        </p>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block border text-xs font-semibold uppercase tracking-wide mb-3 ${
          isSoftware
            ? 'rounded-md px-2.5 py-1 bg-accent/10 border-accent/25 text-accent'
            : `px-4 py-2 rounded-full mb-4 ${BADGE_CLASS[badgeTone]}`
        }`}
      >
        {badge}
      </motion.span>
      <motion.h2
        id={titleId}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display font-bold mb-3 text-[var(--software-text)] ${
          isSoftware
            ? 'text-2xl sm:text-3xl md:text-4xl leading-tight'
            : `mt-4 mb-6 ${
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
            <span className={isSoftware ? 'software-demo-title-highlight' : 'gradient-text-brand'}>{titleHighlight}</span>
          </>
        ) : (
          <>
            {title}{' '}
            <span className={isSoftware ? 'software-demo-title-highlight' : 'gradient-text-brand'}>{titleHighlight}</span>
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
            ? `text-sm sm:text-base text-[var(--software-text-muted)] max-w-2xl ${isCentered ? 'mx-auto' : ''}`
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
