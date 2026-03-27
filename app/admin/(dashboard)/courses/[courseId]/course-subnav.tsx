'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: (id: string) => `/admin/courses/${id}` as const, label: 'Structure', end: true },
  { href: (id: string) => `/admin/courses/${id}/enrollments` as const, label: 'Enrollments' },
  { href: (id: string) => `/admin/courses/${id}/progress` as const, label: 'Progress' },
]

export function CourseSubnav({ courseId }: { courseId: string }) {
  const pathname = usePathname()

  return (
    <nav className="mb-8 flex flex-wrap gap-2 border-b border-border-light/80 pb-4" aria-label="Course sections">
      {tabs.map(({ href, label, end }) => {
        const to = href(courseId)
        const active = end ? pathname === to || pathname === `${to}/` : pathname.startsWith(to)
        return (
          <Link
            key={label}
            href={to}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              active ? 'bg-accent/12 text-accent ring-1 ring-inset ring-accent/35' : 'text-muted hover:bg-surface-light/60 hover:text-text'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
