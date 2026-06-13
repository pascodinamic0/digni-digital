'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { getAssessmentPath } from '@/lib/assessments/paths'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import AiEmployeeHeroChatPreview from '@/app/components/ai-employee/AiEmployeeHeroChatPreview'

export default function AiEmployeeHeroSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage
  const booking = getBookingLinkProps()

  return (
    <section className="software-hero relative isolate overflow-hidden border-b border-[var(--software-border)] bg-gradient-mesh-brand pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pb-28">
      <PremiumHeroBackdrop />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-20 bg-gradient-to-t from-[var(--software-canvas)] to-transparent"
        aria-hidden
      />

      <PremiumHeroParallax className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          >
            <span className="type-caption relative z-10 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-semibold uppercase tracking-[0.1em] text-accent">
              {t.hero.badge}
            </span>

            <h1 className="software-hero-headline font-display mx-auto mt-3 font-bold text-text lg:mx-0">
              <span className="software-hero-line">{t.hero.titleLine1}</span>
              <span className="software-hero-highlight">{t.hero.titleHighlight}</span>
            </h1>

            <p className="type-body software-hero-subhead mx-auto mt-3 max-w-md leading-relaxed text-muted lg:mx-0">
              {t.hero.hook}
            </p>

            <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-2.5 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
              <Link
                href={getAssessmentPath('ai-employee')}
                className="btn-primary w-full px-5 py-3 text-center sm:w-auto"
              >
                {t.hero.primaryCta}
              </Link>
              <a {...booking} className="btn-secondary w-full px-5 py-3 text-center sm:w-auto">
                {translations[language].cta.bookStrategy}
              </a>
            </div>

            {t.hero.footnote.trim() ? (
              <p className="type-caption mx-auto mt-4 flex max-w-md items-start justify-center gap-2 text-left text-muted lg:mx-0 lg:justify-start">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" strokeWidth={2} aria-hidden />
                <span>{t.hero.footnote}</span>
              </p>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <AiEmployeeHeroChatPreview />
          </motion.div>
        </div>
      </PremiumHeroParallax>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <ScrollIndicator direction="down" />
      </div>
    </section>
  )
}
