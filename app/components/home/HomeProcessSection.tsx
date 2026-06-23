'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SectionChapter from '@/app/components/patterns/SectionChapter'
import ProcessSteps from '@/app/components/patterns/ProcessSteps'

export default function HomeProcessSection() {
  const language = useLanguage()
  const p = translations[language].home.process

  return (
    <SectionChapter
      id="home-process"
      index="07"
      label={p.badge}
      title={
        <>
          {p.title} <span className="gradient-text">{p.subtitle}</span>
        </>
      }
    >
      <ProcessSteps
        steps={[
          { index: '01', title: p.step1Title, description: p.step1Desc },
          { index: '02', title: p.step2Title, description: p.step2Desc },
          { index: '03', title: p.step3Title, description: p.step3Desc },
        ]}
      />
    </SectionChapter>
  )
}
