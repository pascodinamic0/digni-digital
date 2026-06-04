'use client'

import type { AiEmployeeSoftwareTranslations } from '@/app/i18n/aiEmployeeSoftware'

type Props = {
  copy: AiEmployeeSoftwareTranslations
  moduleTitle?: string
  className?: string
}

export default function SoftwareTopBar({ copy, moduleTitle, className = '' }: Props) {
  return (
    <header
      className={`software-topbar flex h-12 shrink-0 items-center justify-between gap-3 border-b border-[var(--software-border)] bg-[var(--software-panel)] px-3 md:px-4 ${className}`}
    >
      <div className="flex min-w-0 items-center gap-2 md:gap-3">
        <button
          type="button"
          className="hidden items-center gap-1.5 rounded-md border border-[var(--software-border)] bg-[var(--software-sidebar)] px-2.5 py-1.5 text-left text-xs font-medium text-[var(--software-text)] sm:flex"
          tabIndex={-1}
          aria-hidden
        >
          <span className="text-[var(--software-text-muted)]">{copy.workspaceLabel}</span>
          <span className="truncate max-w-[120px]">{copy.workspaceName}</span>
          <svg className="h-3 w-3 text-[var(--software-text-muted)]" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {moduleTitle ? (
          <>
            <span className="hidden text-[var(--software-text-muted)] sm:inline" aria-hidden>
              /
            </span>
            <span className="truncate text-xs font-semibold text-[var(--software-text)] md:text-sm">
              {moduleTitle}
            </span>
          </>
        ) : null}
      </div>

      <div className="mx-2 hidden max-w-md flex-1 items-center justify-center md:flex">
        <div className="flex w-full items-center gap-2 rounded-lg border border-[var(--software-border)] bg-[var(--software-sidebar)] px-3 py-1.5 text-xs text-[var(--software-text-muted)]">
          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="truncate">{copy.searchPlaceholder}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 md:gap-3">
        <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-success md:text-[11px]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
          {copy.liveStatus}
        </span>
      </div>
    </header>
  )
}
