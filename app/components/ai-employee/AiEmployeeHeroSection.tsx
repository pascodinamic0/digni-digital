'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { getAssessmentPath } from '@/lib/assessments/paths'
import { getAiEmployeeInboundFlow } from '@/app/i18n/aiEmployeeInboundFlow'
import { INBOUND_STAGE_ATMOSPHERE } from '@/lib/inbound-visual-assets'
import InboundTacticCard from '@/app/components/InboundTacticCard'

const HERO_TACTIC_THEME = {
  accent: 'text-success',
  glow: 'from-success/25',
  border: 'border-success/30',
} as const

export default function AiEmployeeHeroSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage
  const inbound = getAiEmployeeInboundFlow(language)
  const heroExample = inbound.sources.find((s) => s.id === 'organic')!.examples[0]!
  const booking = getBookingLinkProps()

  return (
    <section className="ai-employee-hero relative isolate min-h-[min(88vh,920px)] overflow-hidden border-b border-[var(--software-border)]">
      <div className="inbound-stage-photo absolute inset-0" aria-hidden>
        <Image
          src={INBOUND_STAGE_ATMOSPHERE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="inbound-stage-photo-img object-cover object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--software-canvas)] via-[var(--software-canvas)]/88 to-[var(--software-canvas)]/25"
        aria-hidden
      />
      <div className="inbound-stage-vignette absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[min(88vh,920px)] w-full max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,420px)] lg:gap-10 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center rounded-full border border-accent/35 bg-accent/10 px-3 py-1 type-caption font-semibold uppercase tracking-[0.14em] text-accent">
              {t.timeToValue.title}
            </span>

            <h1 className="type-h1 font-display mt-5 font-bold leading-[1.06] tracking-tight text-[var(--software-text)] sm:mt-6">
              {t.hero.titleLine1}
            </h1>

            <p className="type-h4 font-display mt-3 font-semibold leading-snug gradient-text-brand sm:mt-4 sm:type-h3">
              {t.hero.titleHighlight}
            </p>

            <p className="type-body mt-5 max-w-lg leading-relaxed text-[var(--software-text-muted)] sm:mt-6 sm:type-body-lg">
              {t.hero.hook}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={getAssessmentPath('ai-employee')}
                className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 sm:w-auto"
              >
                {t.hero.primaryCta}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <a
                {...booking}
                className="inline-flex w-full items-center justify-center gap-1.5 px-2 py-3.5 type-small font-semibold text-accent transition-colors hover:text-accent-light sm:w-auto"
              >
                {translations[language].cta.bookStrategy}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
              </a>
            </div>

            {t.hero.footnote.trim() ? (
              <p className="type-small mt-6 flex max-w-md items-start gap-2 text-[var(--software-text-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={2} aria-hidden />
                <span>{t.hero.footnote}</span>
              </p>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[400px] lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <InboundTacticCard
              sourceId="organic"
              example={heroExample}
              index={0}
              theme={HERO_TACTIC_THEME}
              capturedLabel={inbound.capturedLabel}
              isHero
              layout="stack"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
