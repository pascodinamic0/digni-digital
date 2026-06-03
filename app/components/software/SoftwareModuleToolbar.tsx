'use client'

import type { ReactNode } from 'react'

type Tab = { id: string; label: string; active?: boolean }

type Props = {
  title: string
  subtitle?: string
  statusLabel?: string
  tabs?: Tab[]
  trailing?: ReactNode
  className?: string
}

/** In-app module header (tabs, live status) inside the workspace content area. */
export default function SoftwareModuleToolbar({
  title,
  subtitle,
  statusLabel,
  tabs,
  trailing,
  className = '',
}: Props) {
  return (
    <div
      className={`software-module-toolbar shrink-0 border-b border-[var(--software-border)] bg-[var(--software-panel)] ${className}`}
    >
      {tabs && tabs.length > 0 ? (
        <div className="flex gap-0.5 border-b border-[var(--software-border)] px-3 md:px-4">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              className={`px-3 py-2.5 text-[11px] font-semibold md:text-xs ${
                tab.active
                  ? 'border-b-2 border-accent text-accent'
                  : 'text-[var(--software-text-muted)]'
              }`}
            >
              {tab.label}
            </span>
          ))}
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3 md:px-4 md:py-3.5">
        <div className="min-w-0">
          <h3 className="truncate font-display text-sm font-bold text-[var(--software-text)] md:text-base">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-0.5 truncate text-[11px] text-[var(--software-text-muted)] md:text-xs">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {statusLabel ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-success md:text-[11px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
              {statusLabel}
            </span>
          ) : null}
          {trailing}
        </div>
      </div>
    </div>
  )
}
