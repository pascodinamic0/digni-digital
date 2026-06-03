'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getPartnerScarcity, type PartnerScarcitySnapshot } from '@/lib/ai-employee-partner-scarcity'

type AiEmployeeScarcityBannerProps = {
  className?: string
  variant?: 'inline' | 'card' | 'compact'
}

export default function AiEmployeeScarcityBanner({ className = '', variant = 'card' }: AiEmployeeScarcityBannerProps) {
  const language = useLanguage()
  const s = translations[language].aiEmployeePage.scarcity
  const [snapshot, setSnapshot] = useState<PartnerScarcitySnapshot | null>(null)

  useEffect(() => {
    setSnapshot(getPartnerScarcity())
  }, [])

  const monthName =
    snapshot?.month ??
    new Date().toLocaleString(language === 'ar' ? 'ar' : language, { month: 'long' })
  const remaining = snapshot?.remaining ?? 2
  const total = snapshot?.total ?? 5

  const spotsLine = `${remaining}/${total} ${s.spotsSuffix} ${monthName}.`

  if (variant === 'inline') {
    return (
      <p
        className={`text-xs sm:text-sm text-muted/75 leading-snug ${className}`}
        aria-live="polite"
      >
        <span className="font-semibold text-warning">
          {remaining}/{total}
        </span>{' '}
        {s.inlineSuffix.replace('{month}', monthName)}
      </p>
    )
  }

  if (variant === 'compact') {
    return (
      <p className={`text-xs sm:text-sm text-muted leading-snug ${className}`} aria-live="polite">
        <span>{s.prefix}</span>{' '}
        <span className="font-semibold text-warning">
          {s.currentlyLabel} {spotsLine}
        </span>
      </p>
    )
  }

  const content = (
    <>
      <p className="text-sm text-muted leading-snug">{s.prefix}</p>
      <p className="mt-1.5 text-sm font-semibold text-warning">
        <span className="text-text">{s.currentlyLabel}</span> {spotsLine}
      </p>
    </>
  )

  return (
    <div
      className={`rounded-2xl border border-warning/30 bg-warning/10 px-5 py-4 text-center ${className}`}
      aria-live="polite"
    >
      {content}
    </div>
  )
}
