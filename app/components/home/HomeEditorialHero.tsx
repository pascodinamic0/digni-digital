'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import EditorialHero from '@/app/components/patterns/EditorialHero'
import { ctaConfig } from '@/app/config/cta.config'

export default function HomeEditorialHero() {
  const language = useLanguage()
  const t = translations[language].home.hero
  const ctaT = translations[language].cta
  const greeting = translations[language].home.chapters?.greeting

  return (
    <div id="home-hero">
      <EditorialHero
        index="01"
        greeting={greeting}
        title={t.title}
        titleHighlight={t.titleHighlight}
        subtitle={t.subtitle}
        primaryCta={{ label: ctaT.talkToDigniGuide, href: ctaConfig.digniPath }}
        secondaryCta={{ label: t.whatWeDo, href: '#home-capabilities' }}
      />
    </div>
  )
}
