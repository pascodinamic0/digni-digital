'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SoftwareSidebar from './SoftwareSidebar'
import type { SoftwareNavId } from './software-nav'

type Props = {
  activeNav: SoftwareNavId
  moduleTitle?: string
  children: ReactNode
  className?: string
  /** Hide outer window chrome (traffic lights) when nested inside hero */
  showWindowChrome?: boolean
  /**
   * `demo` — marketing sections: offer-scoped sidebar.
   * `app` — hero preview (same chrome, full-width content area).
   */
  presentation?: 'app' | 'demo'
}

export default function ProductWorkspaceFrame({
  activeNav,
  moduleTitle,
  children,
  className = '',
  showWindowChrome = true,
  presentation = 'app',
}: Props) {
  const isDemo = presentation === 'demo'
  const language = useLanguage()
  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  return (
    <div
      className={`software-workspace-frame overflow-hidden rounded-xl border border-[var(--software-border)] bg-[var(--software-panel)] shadow-[var(--software-frame-shadow)] md:rounded-2xl ${className}`}
    >
      {showWindowChrome ? (
        <div className="flex h-9 items-center gap-2 border-b border-[var(--software-border)] bg-[var(--software-chrome-bar)] px-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 truncate text-center text-[11px] font-medium text-[var(--software-text-muted)]">
            {sw.productName}
            {moduleTitle ? ` — ${moduleTitle}` : ''}
          </span>
          <span className="w-12" aria-hidden />
        </div>
      ) : null}

      <div
        className={`flex min-h-0 flex-col ${isDemo ? 'min-h-[clamp(460px,54vh,780px)]' : 'md:min-h-[420px]'}`}
      >
        <div className="flex min-h-0 flex-1">
          <SoftwareSidebar
            activeNav={activeNav}
            labels={sw.nav}
            brandName={sw.brandName}
            navScope="offer"
            enableScrollNav={isDemo}
          />
          <div
            className={`software-workspace-content flex min-w-0 flex-1 flex-col bg-[var(--software-content)] ${
              isDemo ? 'min-h-0 overflow-auto' : 'overflow-hidden'
            }`}
          >
            <div className={isDemo ? 'software-demo-module flex min-h-0 flex-1 flex-col' : 'min-h-0'}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
