'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
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
}

export default function AiEmployeePricingPanel({
  pricing: p,
  checkoutRedirectingLabel,
  continueToSecureCheckoutLabel,
}: AiEmployeePricingPanelProps) {
  const language = useLanguage()
  const a = p.valueAnchor
  const b = translations[language].aiEmployeePage.valueBadges
  const bookingLinkProps = getBookingLinkProps()

  const [nowTick, setNowTick] = useState<number | null>(null)
  useEffect(() => {
    setNowTick(Date.now())
    const id = window.setInterval(() => setNowTick(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const at = nowTick ?? Date.now()
  const promoActive = isAiEmployeeSetupPromoActive(at)
  const remainMs = Math.max(0, AI_EMPLOYEE_SETUP_PROMO_END_MS - at)
  const totalSec = Math.floor(remainMs / 1000)
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  const badgeItems = [
    { icon: '⚡', text: b.responseTime, className: 'bg-success/15 text-success border-success/30' },
    { icon: '⏱', text: b.setupSpeed, className: 'bg-accent/15 text-accent border-accent/30' },
    { icon: '✨', text: b.zeroEffort, className: 'bg-info/15 text-info border-info/30' },
  ]

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
      {/* Speed / effort — single compact row */}
      <div
        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-4 py-3 border-b border-border/80 bg-background/50"
        aria-label={b.ariaLabel}
      >
        {badgeItems.map((badge) => (
          <span
            key={badge.text}
            className={`inline-flex items-center gap-1 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide border px-2 py-1 ${badge.className}`}
          >
            <span aria-hidden>{badge.icon}</span>
            {badge.text}
          </span>
        ))}
      </div>

      {/* Value stack ↔ price — side by side on md+ */}
      <div className="grid md:grid-cols-[1fr_minmax(220px,280px)] md:divide-x divide-border/80">
        <div className="p-5 sm:p-6 md:pr-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-3">{a.heading}</p>
          <ul className="space-y-1.5 mb-4">
            {a.lineItems.map((line) => (
              <li key={line.label} className="flex justify-between gap-3 text-xs sm:text-sm leading-snug">
                <span className="text-muted min-w-0">{line.label}</span>
                <span className="text-muted/80 line-through decoration-destructive/40 shrink-0 tabular-nums">
                  {line.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-baseline justify-between gap-3 pt-3 border-t border-border/70">
            <span className="text-[10px] uppercase tracking-wider text-muted">{a.totalLabel}</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-muted line-through decoration-destructive/45 tabular-nums">
              {a.totalValue}
            </span>
          </div>
          <p className="text-[11px] text-muted mt-2 leading-snug">{a.investmentNote}</p>
        </div>

        <div className="p-5 sm:p-6 bg-surface/80 md:bg-transparent flex flex-col">
          {promoActive && (
            <span className="self-center inline-block px-2.5 py-0.5 bg-destructive/15 text-destructive text-[10px] font-semibold rounded-full border border-destructive/25 mb-3">
              {p.limitedLabel}
            </span>
          )}
          <p className="text-[10px] uppercase tracking-wider text-muted text-center md:text-left mb-1">
            {a.investmentLabel}
          </p>
          <h3 className="font-display text-lg font-bold text-text text-center md:text-left mb-4">{p.planName}</h3>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="rounded-lg bg-background/80 border border-border/60 px-3 py-2.5 text-center">
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">{p.setupLabel}</div>
              {promoActive ? (
                <>
                  <div className="text-xs text-muted line-through decoration-destructive/40">{p.setupFee}</div>
                  <div className="font-display text-base font-bold text-success">{p.setupFeeWaivedDisplay}</div>
                </>
              ) : (
                <div className="font-display text-base font-bold text-text">{p.setupFee}</div>
              )}
            </div>
            <div className="rounded-lg bg-success/10 border border-success/20 px-3 py-2.5 text-center">
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">{p.monthlyLabel}</div>
              <div className="font-display text-lg font-bold text-success leading-none">
                {p.price}
                <span className="text-xs font-normal text-muted">{p.period}</span>
              </div>
            </div>
          </div>

          {promoActive && (
            <p className="text-[10px] text-success/90 text-center md:text-left mb-3 leading-snug">
              {p.setupFeePromo}{' '}
              <span className="font-semibold tabular-nums" aria-live="polite">
                {days > 0 && `${days}d · `}
                {padCountdownUnit(hours)}h · {padCountdownUnit(minutes)}m · {padCountdownUnit(seconds)}s
              </span>
            </p>
          )}

          <p className="text-[11px] text-muted text-center md:text-left mb-4 leading-snug flex-1">{p.note}</p>

          <div className="space-y-2 mt-auto">
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
      </div>

      {/* Scarcity — one tight footer strip */}
      <div className="px-4 py-3 border-t border-warning/20 bg-warning/5 text-center">
        <AiEmployeeScarcityBanner variant="compact" />
      </div>
    </motion.div>
  )
}
