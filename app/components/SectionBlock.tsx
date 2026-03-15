'use client'

import { ReactNode } from 'react'

interface SectionBlockProps {
  label?: string
  title: ReactNode
  children: ReactNode
  cta?: ReactNode
  className?: string
  titleClassName?: string
}

export default function SectionBlock({
  label,
  title,
  children,
  cta,
  className = '',
  titleClassName = '',
}: SectionBlockProps) {
  return (
    <section className={className}>
      <div className="text-center mb-10 md:mb-14">
        {label && <span className="section-label">{label}</span>}
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight ${titleClassName}`}
        >
          {title}
        </h2>
      </div>
      <div className="text-muted leading-relaxed">{children}</div>
      {cta && <div className="mt-8 md:mt-10 flex justify-center">{cta}</div>}
    </section>
  )
}
