'use client'

import { Bot, GraduationCap, Layers3 } from 'lucide-react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SectionChapter from '@/app/components/patterns/SectionChapter'
import CapabilityPillarGrid from '@/app/components/patterns/CapabilityPillarGrid'

export default function HomeCapabilitiesSection() {
  const language = useLanguage()
  const w = translations[language].home.whatWeDo

  const pillars = [
    {
      title: w.aiEmployeeTitle,
      description: w.aiEmployeeDesc.split('\n\n')[0],
      href: '/ai-receptionist',
      icon: <Bot className="h-8 w-8" aria-hidden />,
    },
    {
      title: w.futureReadyTitle,
      description: w.futureReadyDesc.split('\n\n')[0],
      href: '/future-ready-graduate',
      icon: <GraduationCap className="h-8 w-8" aria-hidden />,
    },
    {
      title: w.agenticSoftwaresTitle,
      description: w.agenticSoftwaresDesc.split('\n\n')[0],
      href: '/agentic-softwares',
      icon: <Layers3 className="h-8 w-8" aria-hidden />,
    },
  ]

  return (
    <SectionChapter
      id="home-capabilities"
      index="02"
      label={w.badge}
      title={
        <>
          {w.title}
          <span className="gradient-text"> {w.subtitle}</span>
        </>
      }
      subtitle={w.whatWeDoDescription}
      variant="alt"
    >
      <CapabilityPillarGrid pillars={pillars} />
    </SectionChapter>
  )
}
