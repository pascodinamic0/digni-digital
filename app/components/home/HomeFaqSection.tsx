'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SectionChapter from '@/app/components/patterns/SectionChapter'
import FaqAccordion from '@/app/components/patterns/FaqAccordion'

export default function HomeFaqSection() {
  const language = useLanguage()
  const f = translations[language].home.faq

  return (
    <SectionChapter
      id="home-faq"
      index="09"
      label={f.badge}
      title={f.title}
      variant="alt"
    >
      <FaqAccordion items={f.items} />
    </SectionChapter>
  )
}
