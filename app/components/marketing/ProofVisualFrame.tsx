'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'

export type ProofVisualVariant = 'editorial' | 'dashboard' | 'stat' | 'diagram'
export type ProofVisualTone = 'product' | 'editorial'

export type ProofVisualFrameProps = {
  variant?: ProofVisualVariant
  /** Product = site card chrome. Editorial = cinematic (only when unique art exists). */
  tone?: ProofVisualTone
  src?: string
  alt: string
  overlayLine?: string
  chip?: string
  channel?: string
  objectPosition?: string
  priority?: boolean
  aspect?: 'portrait' | 'landscape' | 'square' | 'auto'
  themeGlowClass?: string
  className?: string
  children?: ReactNode
}

const ASPECT_CLASS = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
  auto: 'min-h-[280px]',
} as const

const VARIANT_ASPECT: Record<ProofVisualVariant, keyof typeof ASPECT_CLASS> = {
  editorial: 'portrait',
  dashboard: 'landscape',
  stat: 'auto',
  diagram: 'auto',
}

export default function ProofVisualFrame({
  variant = 'editorial',
  tone = 'product',
  src,
  alt,
  overlayLine,
  chip,
  channel,
  objectPosition = 'center center',
  priority = false,
  aspect,
  themeGlowClass = 'from-accent/25',
  className = '',
  children,
}: ProofVisualFrameProps) {
  const isProduct = tone === 'product'
  const aspectClass = aspect ?? VARIANT_ASPECT[variant]
  const aspectUtility = ASPECT_CLASS[aspectClass]
  const hasImage = Boolean(src) && !children

  if (isProduct) {
    return (
      <div className={`relative mx-auto w-full max-w-[min(100%,560px)] ${className}`}>
        <div
          className={`proof-visual-product overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] ${aspectUtility}`}
        >
          {hasImage ? (
            <div className="relative h-full min-h-[280px] w-full">
              <Image
                src={src!}
                alt={alt}
                fill
                sizes="(max-width: 768px) 90vw, 560px"
                priority={priority}
                className="object-cover"
                style={{ objectPosition }}
              />
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative mx-auto w-full max-w-[min(100%,520px)] ${className}`}>
      <div
        className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-b ${themeGlowClass} via-transparent to-transparent opacity-70 blur-2xl pointer-events-none proof-visual-glow`}
        aria-hidden
      />
      <div className={`relative w-full ${aspectUtility} proof-visual-frame`}>
        <div className="absolute inset-0 rounded-[1.25rem] overflow-hidden border border-white/15 shadow-[var(--shadow-proof-frame)] ring-1 ring-white/12 bg-black proof-visual-inner">
          {hasImage ? (
            <Image
              src={src!}
              alt={alt}
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              priority={priority}
              className="object-cover proof-visual-photo"
              style={{ objectPosition }}
            />
          ) : (
            <div className="absolute inset-0 bg-surface">{children}</div>
          )}
          <div className="absolute inset-0 proof-visual-scrim pointer-events-none" aria-hidden />
          <div className="absolute inset-0 proof-visual-noise pointer-events-none" aria-hidden />
          {chip ? (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95">
              {chip}
            </span>
          ) : null}
          {overlayLine ? (
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 pt-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              {channel ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 mb-1">
                  {channel}
                </p>
              ) : null}
              <p className="font-display text-lg md:text-xl font-bold text-white leading-snug tracking-tight proof-visual-overlay-line">
                {overlayLine}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
