'use client'

import { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { ctaConfig } from '@/app/config/cta.config'

type BoldCtaBandProps = {
  title: ReactNode
  subtitle?: string
  primaryLabel: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function BoldCtaBand({
  title,
  subtitle,
  primaryLabel,
  primaryHref = ctaConfig.digniPath,
  secondaryLabel,
  secondaryHref,
}: BoldCtaBandProps) {
  return (
    <section className="bold-cta-band marketing-chapter">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="editorial-headline">{title}</h2>
        {subtitle && <p className="editorial-subhead mx-auto mt-4">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
