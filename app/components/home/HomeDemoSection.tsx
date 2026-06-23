'use client'

import dynamic from 'next/dynamic'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SectionChapter from '@/app/components/patterns/SectionChapter'
import ProductDemoFrame from '@/app/components/patterns/ProductDemoFrame'

const ClientJourneyDemo = dynamic(() => import('@/app/components/ClientJourneyDemo'), {
  loading: () => (
    <div className="min-h-[320px] animate-pulse rounded-xl bg-white/5" aria-hidden />
  ),
})

export default function HomeDemoSection() {
  const language = useLanguage()
  const t = translations[language].clientJourney

  return (
    <SectionChapter
      id="home-demo"
      index="04"
      label={t.badge}
      title={
        <>
          {t.title}{' '}
          <span className="gradient-text-brand">{t.subtitle}</span>
        </>
      }
      subtitle={t.subtext}
      className="!py-0"
    >
      <ProductDemoFrame dark>
        <ClientJourneyDemo prominent />
      </ProductDemoFrame>
    </SectionChapter>
  )
}
