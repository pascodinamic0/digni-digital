'use client'

import { Link } from '@/i18n/navigation'

type FinalCtaBandProps = {
  title: string
  subtitle?: string
  primaryCta: { href: string; label: string; external?: boolean }
  secondaryCta?: { href: string; label: string; external?: boolean }
  className?: string
}

export default function FinalCtaBand({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className = '',
}: FinalCtaBandProps) {
  return (
    <section className={`marketing-simple border-t border-border bg-surface py-20 ${className}`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="type-h2 font-display font-bold text-text">{title}</h2>
        {subtitle ? (
          <p className="type-body mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{subtitle}</p>
        ) : null}
        <div className="mt-8 flex flex-col items-center gap-4">
          {primaryCta.external ? (
            <a
              href={primaryCta.href}
              className="btn-primary w-full px-8 py-3 text-center sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryCta.label}
            </a>
          ) : (
            <Link href={primaryCta.href} className="btn-primary w-full px-8 py-3 text-center sm:w-auto">
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta ? (
            secondaryCta.external ? (
              <a
                href={secondaryCta.href}
                className="type-body font-medium text-muted underline-offset-4 hover:text-text hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link
                href={secondaryCta.href}
                className="type-body font-medium text-muted underline-offset-4 hover:text-text hover:underline"
              >
                {secondaryCta.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  )
}
