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

  const spotsLine =
    snapshot != null
      ? `${snapshot.remaining}/${snapshot.total} ${s.spotsSuffix} ${snapshot.month}.`
      : `2/5 ${s.spotsSuffix} ${new Date().toLocaleString(language === 'ar' ? 'ar' : language, { month: 'long' })}.`

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
      <p className="text-sm md:text-base text-muted leading-relaxed">{s.prefix}</p>
      <p className="mt-2 text-base md:text-lg font-semibold text-warning">
        <span className="text-text">{s.currentlyLabel}</span> {spotsLine}
      </p>
    </>
  )

  if (variant === 'inline') {
    return <div className={className}>{content}</div>
  }

  return (
    <div
      className={`rounded-2xl border border-warning/30 bg-warning/10 px-5 py-4 text-center ${className}`}
      aria-live="polite"
    >
      {content}
    </div>
  )
}
