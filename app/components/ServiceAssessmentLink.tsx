'use client'

import { ClipboardCheck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getAssessmentPath } from '@/lib/assessments/paths'
import type { AssessmentServiceId } from '@/lib/assessments/types'

type ServiceAssessmentLinkProps = {
  serviceId: AssessmentServiceId
  variant?: 'hero' | 'compact'
  className?: string
  onClick?: () => void
}

export default function ServiceAssessmentLink({
  serviceId,
  variant = 'hero',
  className = '',
  onClick,
}: ServiceAssessmentLinkProps) {
  const language = useLanguage()
  const t = translations[language]
  const href = getAssessmentPath(serviceId)

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`inline-flex items-center gap-1 text-xs font-medium text-accent/85 hover:text-accent transition-colors ${className}`}
      >
        {t.nav.fitCheck}
        <span aria-hidden>→</span>
      </Link>
    )
  }

  return (
    <p className={`text-sm text-muted/70 mt-3 ${className}`}>
      <Link
        href={href}
        onClick={onClick}
        className="inline-flex items-center justify-center gap-1.5 text-muted hover:text-accent transition-colors group"
      >
        <ClipboardCheck
          className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100"
          aria-hidden
        />
        <span>{t.nav.assessmentPrompt}</span>
      </Link>
    </p>
  )
}
