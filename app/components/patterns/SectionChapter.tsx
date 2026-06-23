'use client'

import { ReactNode } from 'react'

type SectionChapterProps = {
  id?: string
  index?: string
  label?: string
  title?: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  variant?: 'default' | 'alt' | 'demo'
  className?: string
  headerClassName?: string
  align?: 'left' | 'center'
}

export default function SectionChapter({
  id,
  index,
  label,
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
  headerClassName = '',
  align = 'left',
}: SectionChapterProps) {
  const variantClass =
    variant === 'alt' ? 'marketing-chapter-alt' : variant === 'demo' ? 'demo-frame demo-frame-dark' : ''

  return (
    <section
      id={id}
      className={`marketing-chapter ${variantClass} ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {(index || label || title || subtitle) && (
          <header
            className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${headerClassName}`.trim()}
          >
            {index && <p className="section-index mb-3">{index}</p>}
            {label && <span className="section-label">{label}</span>}
            {title && (
              <h2 className="editorial-headline mt-2 text-balance">{title}</h2>
            )}
            {subtitle && (
              <p className={`editorial-subhead mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
