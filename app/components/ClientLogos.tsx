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
          className="relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
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
    <section className="pt-40 md:pt-52 lg:pt-64 pb-20 overflow-hidden bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            {badge}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text leading-tight">
            {titleHighlight ? (
              <>
                {title}
                <br />
                <span className="gradient-text">{titleHighlight}</span>
              </>
            ) : (
              <span className="gradient-text">{title}</span>
            )}
          </h3>
          {subtitle && (
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="relative rounded-2xl border border-border overflow-hidden bg-background/50 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none z-10" />
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none" />

          <div className="relative py-8 md:py-10">
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
