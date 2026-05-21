'use client'

import Image from 'next/image'
import type { InboundSourceId } from '@/app/i18n/aiEmployeeInboundFlow'
import { getInboundTacticImage, getInboundTacticObjectPosition } from '@/lib/inbound-visual-assets'

export type InboundTacticImageSize = 'compact' | 'full' | 'hero'

const SIZE_CLASS: Record<InboundTacticImageSize, string> = {
  compact: 'max-w-[240px]',
  full: 'max-w-[min(100%,400px)]',
  hero: 'max-w-[min(100%,420px)]',
}

type Props = {
  sourceId: InboundSourceId
  index: number
  alt: string
  overlayLine: string
  chip?: string
  channel?: string
  size?: InboundTacticImageSize
  priority?: boolean
  isHero?: boolean
  themeGlowClass?: string
  className?: string
}

export default function InboundTacticImage({
  sourceId,
  index,
  alt,
  overlayLine,
  chip,
  channel,
  size = 'full',
  priority = false,
  isHero = false,
  themeGlowClass = 'from-accent/25',
  className = '',
}: Props) {
  const src = getInboundTacticImage(sourceId, index)
  const objectPosition = getInboundTacticObjectPosition(sourceId, index)
  const aspect = isHero || size === 'hero' ? 'aspect-[5/6]' : 'aspect-[4/5]'

  return (
    <div className={`relative mx-auto w-full ${SIZE_CLASS[size]} ${className}`}>
      <div
        className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-b ${themeGlowClass} via-transparent to-transparent opacity-70 blur-2xl pointer-events-none inbound-tactic-glow`}
        aria-hidden
      />

      <div
        className={`relative w-full ${aspect} inbound-tactic-image-frame ${isHero ? 'inbound-tactic-image-frame--hero' : ''}`}
      >
        <div className="absolute inset-0 rounded-[1.25rem] overflow-hidden border border-white/15 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.9)] ring-1 ring-white/12 bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              size === 'hero' ? '420px' : size === 'full' ? '(max-width: 768px) 90vw, 400px' : '240px'
            }
            priority={priority}
            className="object-cover inbound-tactic-photo"
            style={{ objectPosition }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent pointer-events-none" aria-hidden />

          {chip ? (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95">
              {chip}
            </span>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 z-10 p-4 pt-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            {channel ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 mb-1">{channel}</p>
            ) : null}
            <p className="font-display text-lg md:text-xl font-bold text-white leading-snug tracking-tight inbound-overlay-line">
              {overlayLine}
            </p>
          </div>
        </div>

        <div
          className="absolute -bottom-1 left-[8%] right-[8%] h-3 rounded-full bg-black/40 blur-md opacity-60"
          aria-hidden
        />
      </div>
    </div>
  )
}
