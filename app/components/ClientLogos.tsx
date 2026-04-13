'use client'

import Image from 'next/image'
import { clients } from '@/app/config/clients.config'

interface ClientLogosProps {
  title?: string
  titleHighlight?: string
  subtitle?: string
  badge?: string
}

const LOGO_ROW_HEIGHT = 180
const MAX_LOGO_SIZE = 150

export default function ClientLogos({
  title = 'Trusted by businesses across the globe',
  titleHighlight,
  subtitle,
  badge = 'Trusted by',
}: ClientLogosProps) {
  const mid = Math.ceil(clients.length / 2)
  const topRow = [...clients.slice(0, mid), ...clients.slice(0, mid), ...clients.slice(0, mid)]
  const bottomRow = [...clients.slice(mid), ...clients.slice(mid), ...clients.slice(mid)]

  const LogoItem = ({ client, i }: { client: (typeof clients)[0]; i: number }) => {
    const scale = Math.min(1, MAX_LOGO_SIZE / Math.max(client.w, client.h))
    const w = Math.round(client.w * scale)
    const h = Math.round(client.h * scale)
    return (
      <div
        key={`${client.name}-${i}`}
        className="flex-shrink-0 px-6 md:px-8 flex items-center justify-center"
      >
        <div
          className="relative opacity-90 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0"
          style={{ width: w, height: h, minWidth: w, minHeight: h }}
        >
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
            sizes={`${w}px`}
            loading="eager"
          />
        </div>
      </div>
    )
  }

  return (
    <section className="client-logos-section pt-40 md:pt-52 lg:pt-64 pb-20 overflow-hidden bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label block mb-6">{badge}</span>
          <h2 className="client-logos-headline font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text leading-tight tracking-tight">
            {titleHighlight ? (
              <>
                <span className="block text-text/90">{title}</span>
                <span className="gradient-text client-logos-highlight block mt-1">{titleHighlight}</span>
              </>
            ) : (
              <span className="gradient-text client-logos-highlight">{title}</span>
            )}
          </h2>
          {subtitle && (
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto font-medium">{subtitle}</p>
          )}
        </div>

        <div className="client-logos-marquee-frame relative rounded-2xl border border-border overflow-hidden bg-background/50 backdrop-blur-sm shadow-xl">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5"
            aria-hidden
          />

          <div className="relative z-10 py-8 md:py-10">
            <div
              className="flex flex-nowrap animate-scroll-left-triple items-center will-change-transform mb-6 md:mb-8"
              style={{ height: LOGO_ROW_HEIGHT }}
            >
              {topRow.map((client, i) => (
                <LogoItem key={`a-${i}`} client={client} i={i} />
              ))}
            </div>
            <div
              className="flex flex-nowrap animate-scroll-right-triple items-center will-change-transform"
              style={{ height: LOGO_ROW_HEIGHT }}
            >
              {bottomRow.map((client, i) => (
                <LogoItem key={`b-${i}`} client={client} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
