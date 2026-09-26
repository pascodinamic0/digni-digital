'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import type { Language } from '@/app/config/translations'
import { SplitProofSection, ProofVisual } from '@/app/components/marketing'
import { getProofVisual } from '@/lib/proof-visuals/registry'
import type { ProofPageId } from '@/lib/proof-visuals/types'

type PageProofBlockProps = {
  page: ProofPageId
  sectionId: string
  reverse?: boolean
  surface?: 'default' | 'surface' | 'background'
  wide?: boolean
  priority?: boolean
  id?: string
  className?: string
  heading: {
    label?: string
    title: string
    titleHighlight?: string
    supporting?: string
    highlightClassName?: string
    titleLayout?: 'stacked' | 'inline'
    id?: string
  }
  footer?: ReactNode
  stats?: Array<{ value: string; label: string; hint?: string }>
  caseStudy?: import('@/app/i18n/aiEmployeePage').AiEmployeePageTranslations['caseStudy']
}

export default function PageProofBlock({
  page,
  sectionId,
  reverse,
  surface,
  wide,
  priority,
  id,
  className,
  heading,
  footer,
  stats,
  caseStudy,
}: PageProofBlockProps) {
  const language = useLanguage() as Language
  const config = getProofVisual(page, sectionId)

  if (!config) return null

  return (
    <SplitProofSection
      id={id ?? sectionId}
      reverse={reverse}
      surface={surface}
      wide={wide}
      className={className}
      heading={heading}
      footer={footer}
      visual={
        <ProofVisual
          config={config}
          language={language}
          stats={stats}
          caseStudy={caseStudy}
          priority={priority}
        />
      }
    />
  )
}
