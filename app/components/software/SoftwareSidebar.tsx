'use client'

import type { AiEmployeeSoftwareTranslations } from '@/app/i18n/aiEmployeeSoftware'
import {
  getSoftwareNavItems,
  scrollToProductNav,
  type SoftwareNavId,
  navLabel,
} from './software-nav'
import SoftwareBrandMark from './SoftwareBrandMark'

type Props = {
  activeNav: SoftwareNavId
  labels: AiEmployeeSoftwareTranslations['nav']
  brandName: string
  /** `offer` — AI Employee journey modules only; `full` — entire workspace nav */
  navScope?: 'full' | 'offer'
  /** Scroll to the matching journey demo on the product page */
  enableScrollNav?: boolean
  /** Icon-only rail (52px) — for tight embeds only, not product demos */
  compact?: boolean
  className?: string
}

export default function SoftwareSidebar({
  activeNav,
  labels,
  brandName,
  navScope = 'offer',
  enableScrollNav = true,
  compact = false,
  className = '',
}: Props) {
  const navItems = getSoftwareNavItems(navScope)

  const handleNavClick = (id: SoftwareNavId) => {
    if (!enableScrollNav) return
    scrollToProductNav(id)
  }

  const showLabels = !compact

  return (
    <aside
      className={`software-sidebar flex shrink-0 flex-col border-r border-[var(--software-border)] bg-[var(--software-sidebar)] ${
        compact ? 'w-[52px]' : 'w-[52px] md:w-[216px]'
      } ${className}`}
      aria-label="Product navigation"
    >
      <div
        className={`border-b border-[var(--software-border)] ${
          compact ? 'flex justify-center px-2 py-3' : 'px-3 py-4 md:px-4 md:py-5'
        }`}
      >
        {compact ? (
          <SoftwareBrandMark size="sidebarCompact" />
        ) : (
          <>
            <div className="flex justify-center md:hidden">
              <SoftwareBrandMark size="sidebarCompact" />
            </div>
            <div className="hidden flex-col items-center gap-2.5 text-center md:flex">
              <SoftwareBrandMark size="sidebarWide" />
              <div>
                <p className="font-display text-[15px] font-bold leading-[1.15] tracking-tight text-[var(--software-text)]">
                  {brandName}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--software-text-muted)]">
                  AI Employee
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-2 md:p-2.5">
        {navItems.map(({ id, Icon }) => {
          const active = id === activeNav
          const sharedClass = `software-sidebar-nav-item flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-left text-[13px] font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
            compact ? 'justify-center px-2' : ''
          } ${
            active
              ? 'bg-[var(--software-nav-active)] font-semibold text-accent'
              : 'text-[var(--software-text-muted)] hover:bg-[var(--software-nav-hover)] hover:text-[var(--software-text)] focus-visible:bg-[var(--software-nav-hover)]'
          }`

          if (enableScrollNav) {
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={sharedClass}
                aria-current={active ? 'page' : undefined}
                title={compact ? navLabel(id, labels) : undefined}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={active ? 2.25 : 1.75} aria-hidden />
                {showLabels ? (
                  <span className="hidden truncate leading-snug md:inline">{navLabel(id, labels)}</span>
                ) : null}
              </button>
            )
          }

          return (
            <div key={id} className={sharedClass} aria-current={active ? 'page' : undefined}>
              <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={active ? 2.25 : 1.75} aria-hidden />
              {showLabels ? (
                <span className="hidden truncate leading-snug md:inline">{navLabel(id, labels)}</span>
              ) : null}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
