'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

type AiEmployeeValueBadgesProps = {
  className?: string
  size?: 'sm' | 'md'
  /** Inline pills (default) or full-width software-style feature cards */
  variant?: 'inline' | 'grid'
}

const BADGE_STYLES = [
  {
    icon: '⚡',
    pillClass: 'bg-success text-background border-success shadow-success/30',
    gridIcon: 'bg-success/15 text-success border-success/25',
  },
  {
    icon: '⏱',
    pillClass: 'bg-accent text-background border-accent shadow-accent/25',
    gridIcon: 'bg-accent/15 text-accent border-accent/25',
  },
  {
    icon: '✨',
    pillClass: 'bg-info text-background border-info shadow-info/20',
    gridIcon: 'bg-info/15 text-info border-info/25',
  },
]

export default function AiEmployeeValueBadges({
  className = '',
  size = 'md',
  variant = 'inline',
}: AiEmployeeValueBadgesProps) {
  const language = useLanguage()
  const b = translations[language].aiEmployeePage.valueBadges
  const sizeClass =
    size === 'sm'
      ? 'text-[10px] px-2.5 py-1'
      : 'text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2'

  const badges = BADGE_STYLES.map((style, i) => ({
    ...style,
    text: [b.responseTime, b.setupSpeed, b.zeroEffort][i]!,
  }))

  if (variant === 'grid') {
    return (
      <div
        className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 ${className}`}
        aria-label={b.ariaLabel}
      >
        {badges.map((badge) => (
          <div
            key={badge.text}
            className="group flex min-w-0 items-center gap-3 rounded-xl border border-[var(--software-border)] bg-[var(--software-canvas)]/60 p-4 transition-colors hover:border-accent/25 hover:bg-[var(--software-canvas)]"
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-lg ${badge.gridIcon}`}
              aria-hidden
            >
              {badge.icon}
            </span>
            <span className="min-w-0 text-left text-sm font-semibold leading-snug tracking-tight text-[var(--software-text)]">
              {badge.text}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`} aria-label={b.ariaLabel}>
      {badges.map((badge) => (
        <span
          key={badge.text}
          className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wide shadow-sm ${badge.pillClass} ${sizeClass}`}
        >
          <span className="opacity-90" aria-hidden>
            {badge.icon}
          </span>
          {badge.text}
        </span>
      ))}
    </div>
  )
}
