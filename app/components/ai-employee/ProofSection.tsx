'use client'

import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { SectionHeading, ProofQuote } from '@/app/components/marketing'

export default function ProofSection() {
  const language = useLanguage()
  const cs = translations[language].aiEmployeePage.caseStudy

  return (
    <section id="proof" className="marketing-simple border-b border-border bg-surface py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label={cs.label}
          title={cs.title}
          titleHighlight={cs.titleHighlight}
          supporting={cs.subtitle}
        />
        <div className="mt-10">
          <ProofQuote quote={cs.testimonial} name={cs.testimonialAuthor} role={cs.testimonialRole} />
        </div>
        <Link
          href="/case-studies"
          className="type-body mt-8 inline-block font-medium text-accent underline-offset-4 hover:underline"
        >
          {cs.expandStory} →
        </Link>
      </div>
    </section>
  )
}
