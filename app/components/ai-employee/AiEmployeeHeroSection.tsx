'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { getAssessmentPath } from '@/lib/assessments/paths'
import { AI_EMPLOYEE_BRAND_LINE } from '@/lib/ai-employee-page'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import DemoPresentationDownload from '@/app/components/DemoPresentationDownload'
import AiEmployeeScarcityBanner from '@/app/components/AiEmployeeScarcityBanner'

const LOOP_ICONS = [MessageSquare, CalendarCheck, TrendingUp] as const
const LOOP_ACCENT = ['text-info', 'text-accent', 'text-success'] as const
const LOOP_BG = ['bg-info/10 border-info/25', 'bg-accent/10 border-accent/25', 'bg-success/10 border-success/25'] as const

export default function AiEmployeeHeroSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage
  const booking = getBookingLinkProps()
  const loopSteps = t.clientOutcomes.steps

  return (
    <section className="relative isolate flex min-h-0 flex-col justify-center overflow-x-hidden bg-gradient-mesh-brand pt-16 pb-14 sm:min-h-screen sm:pt-20 sm:pb-16">
      <PremiumHeroBackdrop />
      <PremiumHeroParallax className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full max-w-xl text-center sm:max-w-2xl lg:max-w-none"
          >
            <p className="type-caption mb-3 font-medium tracking-wide text-muted sm:mb-4">{AI_EMPLOYEE_BRAND_LINE}</p>

            {t.hero.badge.trim() ? (
              <span className="section-label mb-4 inline-block sm:mb-5">{t.hero.badge}</span>
            ) : null}

            <h1 className="type-h2 font-display mx-auto font-bold leading-[1.1] tracking-tight text-text sm:type-h1 sm:leading-[1.08]">
              {t.hero.titleLine1}
              <span className="mt-1.5 block gradient-text-brand sm:mt-2">{t.hero.titleHighlight}</span>
            </h1>

            <p className="type-body mx-auto mt-4 max-w-xl leading-relaxed text-muted sm:mt-5 sm:type-body-lg sm:max-w-2xl">
              {t.hero.hook}
            </p>

            {t.hero.footnote.trim() ? (
              <div className="mx-auto mt-5 flex max-w-xl flex-col items-center gap-2 rounded-xl border border-success/25 bg-success/5 px-4 py-3 text-center sm:mt-6 sm:flex-row sm:justify-center sm:gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-success" strokeWidth={2} aria-hidden />
                <p className="type-small font-medium leading-relaxed text-text">{t.hero.footnote}</p>
              </div>
            ) : null}

            <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link
                href={getAssessmentPath('ai-employee')}
                className="btn-primary w-full px-6 py-3.5 text-center sm:w-auto"
              >
                {t.hero.primaryCta}
              </Link>
              <a {...booking} className="btn-secondary w-full px-6 py-3.5 text-center sm:w-auto">
                {translations[language].cta.bookStrategy}
              </a>
            </div>

            <div className="mt-4 flex justify-center">
              <DemoPresentationDownload service="aiEmployee" variant="text" />
            </div>

            <div className="mx-auto mt-5 flex w-full max-w-md justify-center">
              <AiEmployeeScarcityBanner variant="inline" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="relative w-full max-w-md lg:max-w-none"
          >
            <div
              className="relative overflow-hidden rounded-2xl border border-[var(--software-border)] bg-[var(--software-panel)]/90 p-4 shadow-[var(--software-frame-shadow)] backdrop-blur-md sm:p-6 md:p-8"
              aria-hidden
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-success/15 blur-3xl" />

              <p className="type-caption relative z-10 mb-4 text-center font-semibold uppercase tracking-wider text-[var(--software-text-muted)] sm:mb-5">
                {t.clientOutcomes.badge}
              </p>

              <ol className="relative z-10 space-y-3 sm:space-y-4">
                {loopSteps.map((step, i) => {
                  const Icon = LOOP_ICONS[i]
                  return (
                    <li
                      key={step.title}
                      className="flex items-start gap-3 rounded-xl border border-[var(--software-border)] bg-[var(--software-sidebar)]/80 p-3 sm:gap-4 sm:p-4"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:h-11 sm:w-11 ${LOOP_BG[i]}`}
                      >
                        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${LOOP_ACCENT[i]}`} strokeWidth={1.75} aria-hidden />
                      </div>
                      <div className="min-w-0 pt-0.5 text-left">
                        <p className={`type-caption font-bold uppercase tracking-wide ${LOOP_ACCENT[i]}`}>
                          {String(i + 1).padStart(2, '0')} · {step.title}
                        </p>
                        <p className="type-small mt-1 font-medium leading-snug text-[var(--software-text)] sm:type-body">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </motion.div>
        </div>
      </PremiumHeroParallax>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollIndicator direction="down" />
      </div>
    </section>
  )
}
