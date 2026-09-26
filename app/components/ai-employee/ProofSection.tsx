'use client'

import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import PageProofBlock from '@/app/components/marketing/PageProofBlock'

export default function ProofSection() {
  const language = useLanguage()
  const cs = translations[language].aiEmployeePage.caseStudy

  return (
    <PageProofBlock
      page="ai-receptionist"
      sectionId="proof"
      id="proof"
      reverse
      surface="surface"
      heading={{
        label: cs.label,
        title: cs.title,
        titleHighlight: cs.titleHighlight,
        supporting: cs.subtitle,
      }}
      caseStudy={cs}
      footer={
        <Link
          href="/case-studies"
          className="type-body mt-6 inline-block font-medium text-accent underline-offset-4 hover:underline"
        >
          {cs.expandStory} →
        </Link>
      }
    />
  )
}
