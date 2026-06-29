'use client'

import Image from 'next/image'
import { clients } from '@/app/config/clients.config'
import { formatPartnerCountLabel } from '@/lib/site-partners'

interface ClientLogosProps {
  title?: string
  titleHighlight?: string
  subtitle?: string
  badge?: string
}

const LOGO_MAX_W = 108
const LOGO_MAX_H = 40
const LOGO_MIN_H = 28

const PROOF_STATS = [
  { value: formatPartnerCountLabel(), label: 'Partners' },
  { value: '12+', label: 'Industries' },
  { value: '3', label: 'Continents' },
] as const

function LogoCell({ client }: { client: (typeof clients)[0] }) {
  const scale = Math.min(1, LOGO_MAX_W / client.w, LOGO_MAX_H / client.h)
  let w = Math.round(client.w * scale)
  let h = Math.round(client.h * scale)

  if (h < LOGO_MIN_H && client.w / client.h > 2.5) {
    const minScale = LOGO_MIN_H / client.h
    h = LOGO_MIN_H
    w = Math.min(Math.round(client.w * minScale), 128)
  }

  return (
    <li className="client-logo-cell group flex min-h-[4.75rem] items-center justify-center p-4 sm:min-h-[5.25rem] sm:p-5">
      <div
        className="relative opacity-65 grayscale transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        style={{ width: w, height: h }}
      >
        {client.logoDark ? (
          <>
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain client-logo-variant-light"
              sizes={`${w}px`}
              loading="lazy"
            />
            <Image
              src={client.logoDark}
              alt={client.name}
              fill
              className="object-contain client-logo-variant-dark"
              sizes={`${w}px`}
              loading="lazy"
            />
          </>
        ) : (
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
            sizes={`${w}px`}
            loading="lazy"
          />
        )}
      </div>
    </li>
  )
}

export default function ClientLogos({
  title = 'Trusted by businesses across the globe',
  titleHighlight,
  subtitle,
  badge = 'Trusted by',
}: ClientLogosProps) {
  return (
    <section className="client-logos-section border-y border-border/70 bg-surface/45">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <div className="lg:pt-2">
            <span className="section-label block mb-4">{badge}</span>
            <h2 className="client-logos-headline type-h2 font-bold text-text">
              {titleHighlight ? (
                <>
                  <span className="block text-text/90">{title}</span>
                  <span className="gradient-text client-logos-highlight mt-2 block">{titleHighlight}</span>
                </>
              ) : (
                <span className="gradient-text client-logos-highlight">{title}</span>
              )}
            </h2>
            {subtitle && (
              <p className="type-body-lg text-muted mt-4 max-w-xl font-medium leading-relaxed">{subtitle}</p>
            )}

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border/70 pt-8 sm:gap-6">
              {PROOF_STATS.map(({ value, label }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="type-h3 font-display font-bold text-accent">{value}</dd>
                  <dd className="type-caption mt-1 text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="client-logos-wall overflow-hidden rounded-2xl border border-border bg-background/70 shadow-sm">
            <ul className="grid grid-cols-3 divide-x divide-y divide-border/40 sm:grid-cols-4">
              {clients.map((client) => (
                <LogoCell key={client.name} client={client} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
