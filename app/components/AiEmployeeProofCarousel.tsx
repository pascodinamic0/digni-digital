'use client'

import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { AiEmployeePageTranslations } from '@/app/i18n/aiEmployeePage'

const CARD_WIDTH = 260

type CaseStudy = AiEmployeePageTranslations['caseStudy']

type Slide =
  | { id: 'overview'; badge: string; title: string; metric: string; hint: string }
  | { id: 'context' | 'challenge' | 'solution'; label: string; body: string }
  | { id: 'outcomes'; label: string; results: CaseStudy['results'] }

function buildSlides(cs: CaseStudy): Slide[] {
  return [
    {
      id: 'overview',
      badge: cs.industry,
      title: cs.company,
      metric: cs.results[0].metric,
      hint: cs.results[0].description,
    },
    { id: 'context', label: cs.contextLabel, body: cs.context },
    { id: 'challenge', label: cs.challengeLabel, body: cs.challenge },
    { id: 'solution', label: cs.solutionLabel, body: cs.solution },
    { id: 'outcomes', label: cs.outcomesHeading, results: cs.results },
  ]
}

type ProofSlideCardProps = {
  slide: Slide
  isActive: boolean
  onSelect: () => void
}

function ProofSlideCard({ slide, isActive, onSelect }: ProofSlideCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`snap-center shrink-0 rounded-xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isActive
          ? 'border-accent/40 bg-[var(--software-panel)] shadow-md shadow-accent/10 ring-1 ring-accent/25'
          : 'border-[var(--software-border)] bg-[var(--software-panel)]/70 opacity-90 hover:border-accent/25 hover:opacity-100'
      }`}
      style={{ width: `min(78vw, ${CARD_WIDTH}px)` }}
      aria-pressed={isActive}
    >
      {slide.id === 'overview' ? (
        <>
          <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            {slide.badge}
          </span>
          <h3 className="font-display mt-2 text-base font-bold leading-snug text-[var(--software-text)]">
            {slide.title}
          </h3>
          <p className="mt-3 font-display text-2xl font-bold tabular-nums text-accent">{slide.metric}</p>
          <p className="mt-1.5 text-[11px] leading-snug text-[var(--software-text-muted)] line-clamp-2">
            {slide.hint}
          </p>
        </>
      ) : slide.id === 'outcomes' ? (
        <>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">{slide.label}</span>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {slide.results.map((r, i) => (
              <div
                key={i}
                className="rounded-lg border border-[var(--software-border)] bg-[var(--software-canvas)]/50 px-2 py-1.5 text-center"
              >
                <span className="font-display text-sm font-bold tabular-nums text-accent">{r.metric}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-[var(--software-text-muted)] line-clamp-1">
            {slide.results[0].description}
          </p>
        </>
      ) : (
        <>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--software-text-muted)]">
            {slide.label}
          </span>
          <p className="mt-2 text-xs leading-snug text-[var(--software-text)] line-clamp-4">{slide.body}</p>
        </>
      )}
    </button>
  )
}

type Props = {
  caseStudy: CaseStudy
}

export default function AiEmployeeProofCarousel({ caseStudy }: Props) {
  const slides = buildSlides(caseStudy)
  const [activeIndex, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = useCallback((index: number) => {
    setActiveIndex(index)
    const el = carouselRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--software-canvas)] to-transparent sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--software-canvas)] to-transparent sm:w-14"
          aria-hidden
        />

        <div
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-4 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: 'max(1rem, calc(50% - 8.5rem))',
            paddingRight: 'max(1rem, calc(50% - 8.5rem))',
          }}
        >
          {slides.map((slide, i) => (
            <ProofSlideCard
              key={slide.id}
              slide={slide}
              isActive={activeIndex === i}
              onSelect={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-6 bg-accent' : 'w-1.5 bg-[var(--software-border)]'
            }`}
            aria-label={
              slide.id === 'overview' ? slide.title : slide.id === 'outcomes' ? slide.label : slide.label
            }
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--software-border)] bg-[var(--software-panel)] px-4 py-2 text-xs font-medium text-[var(--software-text)] transition-colors hover:border-accent/40 hover:text-accent sm:text-sm"
          aria-expanded={expanded}
        >
          {expanded ? caseStudy.collapseStory : caseStudy.expandStory}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} className="text-accent" aria-hidden>
            ▾
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="proof-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-xl border border-[var(--software-border)] bg-[var(--software-panel)] p-5 sm:p-6">
              <div className="mb-4 text-center">
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
                  {caseStudy.industry}
                </span>
                <h3 className="font-display mt-2 text-lg font-bold">{caseStudy.company}</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--software-text-muted)]">
                    {caseStudy.contextLabel}
                  </span>
                  <p className="mt-1 leading-relaxed text-[var(--software-text-muted)]">{caseStudy.context}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--software-text-muted)]">
                    {caseStudy.challengeLabel}
                  </span>
                  <p className="mt-1 leading-relaxed text-[var(--software-text-muted)]">{caseStudy.challenge}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--software-text-muted)]">
                    {caseStudy.solutionLabel}
                  </span>
                  <p className="mt-1 leading-relaxed text-[var(--software-text)]">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-[var(--software-border)] pt-5">
                <h4 className="font-display mb-4 text-center text-sm font-bold">{caseStudy.outcomesHeading}</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="rounded-lg border border-[var(--software-border)] bg-[var(--software-canvas)]/40 px-3 py-2.5 text-center">
                      <div className="font-display text-xl font-bold tabular-nums text-accent">{result.metric}</div>
                      <p className="mt-1 text-[11px] leading-snug text-[var(--software-text-muted)]">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
