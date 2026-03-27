'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  ClipboardList,
  Kanban,
  MessageSquare,
  BookOpen,
  Users,
  Handshake,
  KeyRound,
  GraduationCap,
  UserCheck,
  Mail,
} from 'lucide-react'
import ThemeToggle from '@/app/components/ThemeToggle'
import { createClient } from '@/lib/supabase/client'
import { defaultLocale } from '@/i18n/routing'

const WORKSPACE_NAV: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: '/admin', label: 'Overview', Icon: LayoutDashboard },
  { href: '/admin/courses', label: 'Courses', Icon: GraduationCap },
  { href: '/admin/students', label: 'Students', Icon: UserCheck },
  { href: '/admin/invites', label: 'Invites', Icon: Mail },
  { href: '/admin/pipeline', label: 'Pipeline', Icon: Kanban },
  { href: '/admin/contacts', label: 'Contacts', Icon: Users },
]

const OPS_NAV: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: '/admin/applications', label: 'Applications', Icon: ClipboardList },
  { href: '/admin/affiliates', label: 'Affiliates', Icon: Handshake },
  { href: '/admin/chat', label: 'Live chat', Icon: MessageSquare },
  { href: '/admin/blog', label: 'Blog', Icon: BookOpen },
]

function navActive(pathname: string, href: string) {
  if (href === '/admin') return pathname === '/admin' || pathname === '/admin/'
  return pathname.startsWith(href)
}

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  const signOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.refresh()
    window.location.href = '/admin/login'
  }

  return (
    <div className="relative min-h-screen bg-background font-body text-text">
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-mesh" aria-hidden />
      <div className="grain-overlay z-[1] opacity-[0.025]" aria-hidden />

      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border-light/80 bg-background/90 px-4 backdrop-blur-md lg:hidden">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:border-border-medium hover:text-text"
          aria-expanded={mobileNavOpen}
          aria-label="Open menu"
          onClick={() => setMobileNavOpen(true)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <Link href="/admin" className="font-display text-base font-bold tracking-tight">
          Digni<span className="text-accent">Admin</span>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
        </div>
      </header>

      {mobileNavOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
      ) : null}

      <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] lg:min-h-screen">
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[min(100vw-3rem,280px)] flex-col border-r border-border-light/90 bg-surface shadow-2xl transition-transform duration-200 ease-out lg:static lg:z-20 lg:w-64 lg:min-h-screen lg:shadow-none ${
            mobileNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="border-b border-border-light/60 px-4 py-6 text-center sm:px-5">
            <Link
              href="/admin"
              className="inline-block whitespace-nowrap font-display text-lg font-bold leading-snug tracking-tight sm:text-xl"
              onClick={() => setMobileNavOpen(false)}
            >
              Digni <span className="text-accent">Digital</span>
            </Link>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Admin panel</p>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Admin">
            <p className="px-3 pb-1 pt-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted/90">Workspace</p>
            {WORKSPACE_NAV.map(({ href, label, Icon }) => {
              const active = navActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent/12 text-accent ring-1 ring-inset ring-accent/40'
                      : 'text-muted hover:bg-surface-light/60 hover:text-text'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${active ? 'text-accent' : 'text-muted group-hover:text-text'}`}
                    strokeWidth={1.75}
                  />
                  {label}
                </Link>
              )
            })}
            <p className="px-3 pb-1 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted/90">
              Programs and content
            </p>
            {OPS_NAV.map(({ href, label, Icon }) => {
              const active = navActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent/12 text-accent ring-1 ring-inset ring-accent/40'
                      : 'text-muted hover:bg-surface-light/60 hover:text-text'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${active ? 'text-accent' : 'text-muted group-hover:text-text'}`}
                    strokeWidth={1.75}
                  />
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="border-t border-border-light/60 p-3">
            <Link
              href={`/${defaultLocale}`}
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-light/60 hover:text-text"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M18 3v6m0 0l-3-3m3 3l3-3"
                />
              </svg>
              View marketing site
            </Link>
            <div className="mt-2 hidden items-center justify-between gap-2 px-1 lg:flex">
              <span className="text-[11px] text-muted">Theme</span>
              <ThemeToggle />
            </div>
            <Link
              href="/admin/account"
              onClick={() => setMobileNavOpen(false)}
              className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-light/60 hover:text-text"
            >
              <KeyRound className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
              Password
            </Link>
            <button
              type="button"
              onClick={() => void signOut()}
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Sign out
            </button>
          </div>
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">{children}</div>
        </div>
      </div>
    </div>
  )
}
