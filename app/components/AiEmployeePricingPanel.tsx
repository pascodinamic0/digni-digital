'use client'

import { useEffect, useState } from 'react'
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={
        promoActive
          ? 'rounded-2xl border border-success/40 bg-surface shadow-lg shadow-success/5 overflow-hidden'
          : 'rounded-2xl border border-border bg-surface shadow-lg overflow-hidden'
      }
    >
      <div className="p-6 sm:p-8 text-center">
        {promoActive && (
          <span className="inline-block px-2.5 py-0.5 bg-destructive/15 text-destructive text-[10px] font-semibold rounded-full border border-destructive/25 mb-3">
            {p.limitedLabel}
          </span>
        )}

        <h3 className="font-display text-xl sm:text-2xl font-bold text-text mb-4">{p.planName}</h3>

        {!showAmounts ? (
          <div className="mx-auto max-w-md space-y-4 mb-6 text-left sm:text-center">
            <p className="text-sm text-muted leading-relaxed">{p.assessmentNote}</p>
            <p className="text-xs text-success/90 leading-relaxed">{p.investmentNote}</p>
            <Link
              href={getAssessmentPath('ai-employee')}
              className="btn-primary w-full text-center text-sm sm:text-base py-3 inline-flex items-center justify-center"
            >
              {p.assessmentCta}
            </Link>
          </div>
        ) : (
          <>
            <div className="mx-auto grid max-w-xs grid-cols-2 gap-3 mb-6">
              <div className="rounded-lg border border-border/60 bg-background/80 px-3 py-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1">{p.setupLabel}</div>
                {promoActive ? (
                  <>
                    <div className="text-xs text-muted line-through decoration-destructive/40">{p.setupFee}</div>
                    <div className="font-display text-lg font-bold text-success">{p.setupFeeWaivedDisplay}</div>
                  </>
                ) : (
                  <div className="font-display text-lg font-bold text-text">{p.setupFee}</div>
                )}
              </div>
              <div className="rounded-lg border border-success/20 bg-success/10 px-3 py-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1">{p.monthlyLabel}</div>
                <div className="font-display text-lg font-bold text-success leading-none">
                  {p.price}
                  <span className="text-xs font-normal text-muted">{p.period}</span>
                </div>
              </div>
            </div>

            {promoActive && (
              <p className="text-xs text-success/90 mb-5 leading-snug">
                {p.setupFeePromo}{' '}
                <span className="font-semibold tabular-nums" aria-live="polite">
                  {days > 0 && `${days}d · `}
                  {padCountdownUnit(hours)}h · {padCountdownUnit(minutes)}m · {padCountdownUnit(seconds)}s
                </span>
              </p>
            )}
          </>
        )}

        <div className="mx-auto max-w-sm space-y-2">
          <StripeCheckoutButton
            plan="ai_employee"
            className="btn-primary w-full text-center text-sm sm:text-base py-3"
            redirectingLabel={checkoutRedirectingLabel}
          >
            {continueToSecureCheckoutLabel}
          </StripeCheckoutButton>
          <a
            {...bookingLinkProps}
            className="btn-secondary w-full text-center text-sm sm:text-base py-3 block"
          >
            {p.cta}
          </a>
        </div>
      </div>

      <div className="border-t border-warning/20 bg-warning/5 px-4 py-2.5 text-center">
        <AiEmployeeScarcityBanner variant="compact" />
      </div>
    </motion.div>
  )
}
