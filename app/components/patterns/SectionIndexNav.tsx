'use client'

import { useEffect, useState } from 'react'

export type ChapterLink = {
  index: string
  label: string
  href: string
}

type SectionIndexNavProps = {
  chapters: ChapterLink[]
  className?: string
}

export default function SectionIndexNav({ chapters, className = '' }: SectionIndexNavProps) {
  const [active, setActive] = useState(chapters[0]?.href ?? '')

  useEffect(() => {
    const ids = chapters.map((c) => c.href.replace('#', '')).filter(Boolean)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [chapters])

  return (
    <nav
      aria-label="Page sections"
      className={`hidden xl:flex flex-col gap-3 fixed left-6 top-1/2 -translate-y-1/2 z-40 ${className}`.trim()}
    >
      {chapters.map((chapter) => {
        const isActive = active === chapter.href
        return (
          <a
            key={chapter.href}
            href={chapter.href}
            className={`group flex items-center gap-2 rounded-md px-2 py-1 transition-opacity ${
              isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
            }`}
          >
            <span className="section-index">{chapter.index}</span>
            <span className="type-caption font-semibold uppercase tracking-wider text-text">
              {chapter.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
