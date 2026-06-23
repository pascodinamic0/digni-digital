'use client'

import { ReactNode } from 'react'

interface SectionBlockProps {
  label?: string
  title: ReactNode
  children: ReactNode
  cta?: ReactNode
  className?: string
  titleClassName?: string
  variant?: 'editorial' | 'saas'
}

export default function SectionBlock({
  label,
  title,
  children,
  cta,
  className = '',
  titleClassName = '',
  variant = 'saas',
}: SectionBlockProps) {
  const isEditorial = variant === 'editorial'

  return (
    <section className={className}>
      <div className={`mb-10 md:mb-14 ${isEditorial ? 'max-w-3xl' : 'text-center'}`}>
        {label && <span className="section-label">{label}</span>}
        <h2
          className={`font-display font-bold text-text leading-tight ${
            isEditorial ? 'editorial-headline' : 'type-h2'
          } ${titleClassName}`}
        >
          {title}
        </h2>
      </div>
      <div className={`text-muted leading-relaxed ${isEditorial ? '' : ''}`}>{children}</div>
      {cta && (
        <div className={`mt-8 md:mt-10 flex ${isEditorial ? '' : 'justify-center'}`}>
          {cta}
        </div>
      )}
    </section>
  )
}
