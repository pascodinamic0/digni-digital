'use client'

import { useLanguage } from '@/app/context/LanguageContext'
import { downloadsConfig } from '@/app/config/downloads.config'
import { translations } from '@/app/config/translations'

type Service = 'futureReadyGraduate' | 'aiEmployee'

interface DemoPresentationDownloadProps {
  service: Service
  variant?: 'hero' | 'inline'
  label?: string
}

const langFlags: Record<string, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  ar: '🇸🇦',
}

export default function DemoPresentationDownload({
  service,
  variant = 'hero',
  label,
}: DemoPresentationDownloadProps) {
  const { language } = useLanguage()
  const pdfs = downloadsConfig[service]
  const href = pdfs[language] ?? pdfs.en
  const flag = langFlags[language] ?? langFlags.en
  const displayLabel = label ?? translations[language].download.demoPresentation

  if (variant === 'hero') {
    return (
      <a
        href={href}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
      >
        <span aria-hidden>{flag}</span>
        {displayLabel}
      </a>
    )
  }

  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
    >
      <span aria-hidden>{flag}</span>
      {displayLabel}
    </a>
  )
}
