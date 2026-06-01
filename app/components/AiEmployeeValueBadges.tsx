'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

type AiEmployeeValueBadgesProps = {
  className?: string
  size?: 'sm' | 'md'
}

export default function AiEmployeeValueBadges({ className = '', size = 'md' }: AiEmployeeValueBadgesProps) {
  const language = useLanguage()
  const b = translations[language].aiEmployeePage.valueBadges
  const sizeClass =
    size === 'sm'
      ? 'text-[10px] px-2.5 py-1'
      : 'text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2'

  const badges = [
    { icon: '⚡', text: b.responseTime, className: 'bg-success text-background border-success shadow-success/30' },
    { icon: '⏱', text: b.setupSpeed, className: 'bg-accent text-background border-accent shadow-accent/25' },
    { icon: '✨', text: b.zeroEffort, className: 'bg-info text-background border-info shadow-info/20' },
  ]

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`} aria-label={b.ariaLabel}>
      {badges.map((badge) => (
        <span
          key={badge.text}
          className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wide border shadow-sm ${badge.className} ${sizeClass}`}
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
