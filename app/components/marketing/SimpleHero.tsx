'use client'

import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'

type CtaLink =
  | { href: string; label: string; external?: false }
  | { href: string; label: string; external: true; target?: string; rel?: string }

type SimpleHeroProps = {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle: string
  primaryCta: CtaLink
  secondaryCta?: CtaLink
  /** Soft glow pulse on the primary button (one per page). */
  primaryCtaPulse?: boolean
  children?: ReactNode
  className?: string
}

function HeroCta({
  cta,
  variant,
  pulse,
}: {
  cta: CtaLink
  variant: 'primary' | 'secondary'
  pulse?: boolean
}) {
  const className =
    variant === 'primary'
      ? `btn-primary w-full px-6 py-3 text-center sm:w-auto${pulse ? ' btn-primary-pulse' : ''}`
      : 'btn-secondary w-full px-6 py-3 text-center sm:w-auto'

  if (cta.external) {
    return (
      <a
        href={cta.href}
        className={className}
        target={cta.target ?? '_blank'}
        rel={cta.rel ?? 'noopener noreferrer'}
      >
        {cta.label}
      </a>
    )
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  )
}

export default function SimpleHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryCtaPulse = false,
  children,
  className = '',
}: SimpleHeroProps) {
  return (
    <section
      className={`marketing-simple border-b border-border bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        {badge ? (
          <span className="section-label mb-4 inline-block">{badge}</span>
        ) : null}
        <h1 className="type-h1 font-display font-bold leading-tight text-text">
          {title}
          {titleHighlight ? (
            <>
              <br />
              <span className="gradient-text">{titleHighlight}</span>
            </>
          ) : null}
        </h1>
        <p className="type-body-large mt-5 max-w-2xl leading-relaxed text-muted">{subtitle}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <HeroCta cta={primaryCta} variant="primary" pulse={primaryCtaPulse} />
          {secondaryCta ? <HeroCta cta={secondaryCta} variant="secondary" /> : null}
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  )
}
