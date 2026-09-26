'use client'

import { ExternalLink } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { localizeAgentic, agenticSoftwaresCopy } from '@/app/i18n/agenticSystemsPage'

const LIVE_APPS = [
  { title: 'AMS', link: 'https://ams-xi-two.vercel.app/', category: 'Education' },
  { title: 'DigniGuide', link: '/digni', category: 'AI Guide' },
  { title: 'SwiftDrop', link: 'https://swift-drop-chi.vercel.app/', category: 'Delivery' },
  { title: 'DispatchFlow', link: 'https://dispatch-flow-one.vercel.app/', category: 'Operations' },
] as const

export default function ProductSuiteProof() {
  const language = useLanguage()
  const copy = agenticSoftwaresCopy[language]

  return (
    <div className="divide-y divide-border">
      {LIVE_APPS.map((app) => {
        const inner = (
          <>
            <div className="min-w-0">
              <p className="type-small font-display font-semibold text-text">{app.title}</p>
              <p className="type-caption text-muted">
                {localizeAgentic(language, app.category)} · {copy.viewApplication}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          </>
        )
        const className =
          'flex items-center justify-between gap-4 px-4 py-4 transition-colors hover:bg-surface sm:px-6'

        return app.link.startsWith('http') ? (
          <a
            key={app.title}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {inner}
          </a>
        ) : (
          <Link key={app.title} href={app.link} className={className}>
            {inner}
          </Link>
        )
      })}
    </div>
  )
}
