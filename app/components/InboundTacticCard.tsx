'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { InboundSourceId, InboundExampleT } from '@/app/i18n/aiEmployeeInboundFlow'
import InboundTacticImage, { type InboundTacticImageSize } from '@/app/components/InboundTacticImage'

type StrategyTheme = {
  accent: string
  glow: string
  border: string
}

type Props = {
  sourceId: InboundSourceId
  example: InboundExampleT
  index: number
  theme: StrategyTheme
  capturedLabel: string
  isHero?: boolean
  imageSize?: InboundTacticImageSize
  priority?: boolean
  layout?: 'filmstrip' | 'stack'
}

export default function InboundTacticCard({
  sourceId,
  example,
  index,
  theme,
  capturedLabel,
  isHero = false,
  imageSize = 'full',
  priority = false,
  layout = 'filmstrip',
}: Props) {
  const reduceMotion = useReducedMotion()
  const isFilmstrip = layout === 'filmstrip'

  const shell = (
    <div
      className={`relative flex flex-col h-full overflow-hidden transition-all duration-500 ${
        isFilmstrip ? 'rounded-2xl border' : 'rounded-[1.35rem] border'
      } ${theme.border} ${
        isHero
          ? 'bg-black/40 shadow-2xl shadow-black/60 ring-2 ring-white/12'
          : 'bg-black/30 shadow-xl shadow-black/40 ring-1 ring-white/8 hover:ring-white/15'
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${theme.glow} to-transparent opacity-50 pointer-events-none`} />

      {!isFilmstrip ? (
        <div className={`relative px-4 py-3 border-b border-white/10 bg-gradient-to-r ${theme.glow} to-transparent`}>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${theme.accent}`}>{example.chip}</p>
          <p className="font-display font-bold text-lg text-text">{example.channel}</p>
        </div>
      ) : null}

      <div
        className={`relative flex items-center justify-center ${
          isFilmstrip ? 'py-5 px-2 min-h-[340px] md:min-h-[400px]' : 'py-6 px-3 min-h-[360px]'
        } inbound-filmstrip-visual`}
      >
        <InboundTacticImage
          sourceId={sourceId}
          index={index}
          size={isHero ? 'hero' : imageSize}
          priority={priority}
          isHero={isHero}
          themeGlowClass={theme.glow}
          overlayLine={example.overlayLine}
          chip={isFilmstrip ? example.chip : undefined}
          channel={isFilmstrip ? undefined : example.channel}
          alt={`${example.channel} — ${example.moment}`}
        />
      </div>

      <div
        className={`relative px-4 py-4 border-t border-white/10 ${
          isFilmstrip ? 'bg-black/50 backdrop-blur-md' : 'bg-surface/40 backdrop-blur-sm'
        }`}
      >
        <p className="text-sm text-text/95 leading-relaxed font-medium">{example.moment}</p>
        <p className="mt-2.5 flex items-center gap-2 text-xs font-bold text-success">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 border border-success/30">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {capturedLabel}
        </p>
      </div>
    </div>
  )

  if (!isFilmstrip) {
    return (
      <motion.article
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-24px' }}
        transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {shell}
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: 0.06 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -8, rotateY: 3, scale: 1.015 }}
      className={`inbound-filmstrip-card shrink-0 snap-center ${isHero ? 'inbound-filmstrip-card--hero' : ''}`}
      style={{ perspective: '1400px' }}
    >
      {shell}
    </motion.article>
  )
}
