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

const LOGO_MAX_W = 120
const LOGO_MAX_H = 44
const LOGO_MIN_H = 30

const mid = Math.ceil(clients.length / 2)
const rowA = clients.slice(0, mid)
const rowB = clients.slice(mid)

function LogoMark({ client }: { client: (typeof clients)[0] }) {
  const scale = Math.min(1, LOGO_MAX_W / client.w, LOGO_MAX_H / client.h)
  let w = Math.round(client.w * scale)
  let h = Math.round(client.h * scale)

  if (h < LOGO_MIN_H && client.w / client.h > 2.5) {
    const minScale = LOGO_MIN_H / client.h
    h = LOGO_MIN_H
    w = Math.min(Math.round(client.w * minScale), 136)
  }

  return (
    <li className="client-logo-item group flex shrink-0 items-center justify-center px-7 py-3 sm:px-9">
      <div
        className="relative opacity-55 grayscale transition-[opacity,filter,transform] duration-300 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
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

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof clients
  direction: 'left' | 'right'
}) {
  const track = [...items, ...items, ...items]
  const anim =
    direction === 'left' ? 'animate-scroll-left-triple' : 'animate-scroll-right-triple'

  return (
    <div className="client-logos-track overflow-hidden" aria-hidden="true">
      <ul className={`flex w-max items-center ${anim}`}>
        {track.map((client, i) => (
          <LogoMark key={`${client.name}-${i}`} client={client} />
        ))}
      </ul>
    </div>
  )
}

export default function ClientLogos({
  title = 'They already stopped the leak.',
  titleHighlight,
  subtitle = 'Operators who quit watching paid work walk away.',
  badge = 'Who already acted',
}: ClientLogosProps) {
  const proofLine = `${formatPartnerCountLabel()} partners · 12 industries · 3 continents`

  return (
    <section
      id="client-logos"
      className="client-logos-section relative overflow-hidden border-y border-border/60 bg-background"
      aria-labelledby="client-logos-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-3xl px-6 pb-12 pt-16 text-center md:pb-14 md:pt-20">
        <span className="section-label mb-4 block">{badge}</span>
        <h2 id="client-logos-heading" className="client-logos-headline type-h2 font-bold text-text">
          {titleHighlight ? (
            <>
              <span className="text-text">{title} </span>
              <span className="gradient-text client-logos-highlight">{titleHighlight}</span>
            </>
          ) : (
            <span className="gradient-text client-logos-highlight">{title}</span>
          )}
        </h2>
        {subtitle ? (
          <p className="type-body mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>
        ) : null}
      </div>

      <div className="client-logos-marquee relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24 md:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24 md:w-32"
          aria-hidden
        />

        <div className="flex flex-col gap-7 py-3 md:gap-9 md:py-4">
          <MarqueeRow items={rowA} direction="left" />
          <MarqueeRow items={rowB} direction="right" />
        </div>
      </div>

      <p className="sr-only">
        Partner logos: {clients.map((c) => c.name).join(', ')}.
      </p>

      <p className="type-caption mx-auto max-w-7xl px-6 pb-14 pt-10 text-center text-muted md:pb-16">
        {proofLine}
      </p>
    </section>
  )
}
