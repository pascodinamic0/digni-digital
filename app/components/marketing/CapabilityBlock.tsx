'use client'

import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'

type CapabilityBlockProps = {
  label?: string
  title: string
  supporting: string
  outcome?: string
  cta?: { href: string; label: string; external?: boolean }
  icon?: ReactNode
  className?: string
}

export default function CapabilityBlock({
  label,
  title,
  supporting,
  outcome,
  cta,
  icon,
  className = '',
}: CapabilityBlockProps) {
  return (
    <article className={`marketing-simple border-t border-border py-10 first:border-t-0 first:pt-0 ${className}`}>
      {label ? <span className="section-label mb-2 inline-block">{label}</span> : null}
      <div className="flex items-start gap-4">
        {icon ? <div className="mt-1 shrink-0 text-accent">{icon}</div> : null}
        <div className="min-w-0 flex-1">
          <h3 className="type-h3 font-display font-semibold text-text">{title}</h3>
          <p className="type-body mt-3 max-w-2xl leading-relaxed text-muted">{supporting}</p>
          {outcome ? (
            <p className="type-body mt-3 max-w-2xl font-medium text-text/90">{outcome}</p>
          ) : null}
          {cta ? (
            cta.external ? (
              <a
                href={cta.href}
                className="type-body mt-4 inline-block font-medium text-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.label} →
              </a>
            ) : (
              <Link
                href={cta.href}
                className="type-body mt-4 inline-block font-medium text-accent underline-offset-4 hover:underline"
              >
                {cta.label} →
              </Link>
            )
          ) : null}
        </div>
      </div>
    </article>
  )
}
