'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { getAssessmentPath } from '@/lib/assessments/paths'
import StripeCheckoutButton from '@/app/components/StripeCheckoutButton'
import AiEmployeeScarcityBanner from '@/app/components/AiEmployeeScarcityBanner'
import { AI_EMPLOYEE_SETUP_PROMO_END_MS, isAiEmployeeSetupPromoActive } from '@/lib/ai-employee-setup-promo'
import type { AiEmployeePageTranslations } from '@/app/i18n/aiEmployeePage'

function padCountdownUnit(n: number) {
  return String(n).padStart(2, '0')
}

type AiEmployeePricingPanelProps = {
  pricing: AiEmployeePageTranslations['pricing']
  checkoutRedirectingLabel: string
  continueToSecureCheckoutLabel: string
  /** When false, hides setup/monthly amounts on the product page (shown after assessment). */
  showAmounts?: boolean
}

export default function AiEmployeePricingPanel({
  pricing: p,
  checkoutRedirectingLabel,
  continueToSecureCheckoutLabel,
  showAmounts = false,
}: AiEmployeePricingPanelProps) {
  const bookingLinkProps = getBookingLinkProps()

  const [nowTick, setNowTick] = useState<number | null>(null)
  useEffect(() => {
    setNowTick(Date.now())
    const id = window.setInterval(() => setNowTick(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const at = nowTick ?? Date.now()
  const promoActive = showAmounts && isAiEmployeeSetupPromoActive(at)
  const remainMs = Math.max(0, AI_EMPLOYEE_SETUP_PROMO_END_MS - at)
  const totalSec = Math.floor(remainMs / 1000)
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  if (!showAmounts) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-xl border border-accent/30 bg-[var(--software-panel)] p-8 md:p-10"
      >
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
            <p className="type-body-lg leading-relaxed text-foreground/85">{p.assessmentNote}</p>
            <p className="type-caption mt-4 text-success/90">{p.investmentNote}</p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-stretch gap-3 md:w-auto md:min-w-[17.5rem]">
            <Link
              href={getAssessmentPath('ai-employee')}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-center"
            >
              {p.assessmentCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a {...bookingLinkProps} className="btn-secondary px-6 py-3.5 text-center">
              {p.cta}
            </a>
            <AiEmployeeScarcityBanner variant="inline" className="mt-1 text-center md:text-left" />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={
        promoActive
          ? 'overflow-hidden rounded-xl border border-success/35 bg-[var(--software-panel)] shadow-[var(--shadow-success-glow)]'
          : 'overflow-hidden rounded-xl border border-accent/30 bg-[var(--software-panel)]'
      }
    >
      <div className="p-8 text-center md:p-10">
        {promoActive ? (
          <span className="type-caption mb-4 inline-flex rounded-full border border-destructive/25 bg-destructive/15 px-3 py-1 font-semibold text-destructive">
            {p.limitedLabel}
          </span>
        ) : null}

        <div className="mx-auto mb-8 grid max-w-md grid-cols-2 gap-4">
          <div className="rounded-lg border border-border/60 bg-background/80 px-4 py-4">
            <div className="type-caption mb-2 font-semibold uppercase tracking-wider text-muted">{p.setupLabel}</div>
            {promoActive ? (
              <>
                <div className="type-small text-muted line-through decoration-destructive/40">{p.setupFee}</div>
                <div className="type-h4 font-display font-bold text-success">{p.setupFeeWaivedDisplay}</div>
              </>
            ) : (
              <div className="type-h4 font-display font-bold text-text">{p.setupFee}</div>
            )}
          </div>
          <div className="rounded-lg border border-success/25 bg-success/10 px-4 py-4">
            <div className="type-caption mb-2 font-semibold uppercase tracking-wider text-muted">{p.monthlyLabel}</div>
            <div className="type-h4 font-display font-bold leading-none text-success">
              {p.price}
              <span className="type-small font-normal text-muted">{p.period}</span>
            </div>
          </div>
        </div>

        {promoActive ? (
          <p className="type-small mb-6 text-success/90 leading-snug">
            {p.setupFeePromo}{' '}
            <span className="font-semibold tabular-nums" aria-live="polite">
              {days > 0 && `${days}d · `}
              {padCountdownUnit(hours)}h · {padCountdownUnit(minutes)}m · {padCountdownUnit(seconds)}s
            </span>
          </p>
        ) : null}

        <div className="mx-auto flex max-w-md flex-col gap-3">
          <StripeCheckoutButton
            plan="ai_employee"
            className="btn-primary w-full px-6 py-3.5 text-center"
            redirectingLabel={checkoutRedirectingLabel}
          >
            {continueToSecureCheckoutLabel}
          </StripeCheckoutButton>
          <a {...bookingLinkProps} className="btn-secondary w-full px-6 py-3.5 text-center">
            {p.cta}
          </a>
          <AiEmployeeScarcityBanner variant="inline" className="mt-1" />
        </div>
      </div>
    </motion.div>
  )
}
