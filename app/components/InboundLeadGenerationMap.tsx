'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { InboundSourceId, InboundSourceT, InboundExampleT } from '@/app/i18n/aiEmployeeInboundFlow'
import { getInboundTacticImage, INBOUND_HUB_ILLUSTRATION } from '@/lib/inbound-visual-assets'

type StrategyTheme = {
  accent: string
  border: string
  chip: string
  tabActive: string
  glow: string
  panelBg: string
}

const SOURCE_ORDER: InboundSourceId[] = ['ads', 'organic', 'walkIns', 'referrals']
const ROTATE_MS = 8_500
const PAUSE_MS = 14_000

const THEMES: Record<InboundSourceId, StrategyTheme> = {
  ads: {
    accent: 'text-warning',
    border: 'border-warning/30',
    chip: 'bg-warning/15 text-warning border-warning/30',
    tabActive: 'border-warning/50 bg-warning/10 text-warning shadow-[0_0_20px_rgba(var(--warning-rgb),0.12)]',
    glow: 'from-warning/25',
    panelBg: 'from-warning/8',
  },
  organic: {
    accent: 'text-success',
    border: 'border-success/30',
    chip: 'bg-success/15 text-success border-success/30',
    tabActive: 'border-success/50 bg-success/10 text-success shadow-[0_0_20px_rgba(var(--success-rgb),0.12)]',
    glow: 'from-success/25',
    panelBg: 'from-success/8',
  },
  walkIns: {
    accent: 'text-info',
    border: 'border-info/30',
    chip: 'bg-info/15 text-info border-info/30',
    tabActive: 'border-info/50 bg-info/10 text-info shadow-[0_0_20px_rgba(var(--info-rgb),0.12)]',
    glow: 'from-info/25',
    panelBg: 'from-info/8',
  },
  referrals: {
    accent: 'text-accent',
    border: 'border-accent/35',
    chip: 'bg-accent/15 text-accent border-accent/30',
    tabActive: 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)]',
    glow: 'from-accent/30',
    panelBg: 'from-accent/10',
  },
}

function StrategyIcon({ id, className = 'w-4 h-4' }: { id: InboundSourceId; className?: string }) {
  const cls = `${className} shrink-0`
  switch (id) {
    case 'ads':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M11 4.5 6.5 19M17.5 4.5 13 19M14.5 12h-5" strokeLinecap="round" />
        </svg>
      )
    case 'organic':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10M12 2c-2.5 2.5-4 6-4 10s1.5 7.5 4 10" />
        </svg>
      )
    case 'walkIns':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M4 20V10l8-5 8 5v10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 20v-6h6v6" />
        </svg>
      )
    case 'referrals':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="9" cy="8" r="3.5" />
          <path
            d="M2 20c0-3.5 3.1-6 7-6M15 11c3.2 0 5.8 2.1 6.7 5M19 8l2 2-2 2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function InboundFlowDiagram({
  sources,
  activeId,
  onSelect,
}: {
  sources: Record<InboundSourceId, InboundSourceT>
  activeId: InboundSourceId
  onSelect: (id: InboundSourceId) => void
}) {
  const nodes: { id: InboundSourceId; cx: number; cy: number }[] = [
    { id: 'ads', cx: 56, cy: 44 },
    { id: 'organic', cx: 344, cy: 44 },
    { id: 'walkIns', cx: 56, cy: 156 },
    { id: 'referrals', cx: 344, cy: 156 },
  ]

  const lineClass = (id: InboundSourceId) => {
    const on = activeId === id
    const map: Record<InboundSourceId, string> = {
      ads: on ? 'stroke-warning' : 'stroke-white/22',
      organic: on ? 'stroke-success' : 'stroke-white/22',
      walkIns: on ? 'stroke-info' : 'stroke-white/22',
      referrals: on ? 'stroke-accent' : 'stroke-white/22',
    }
    return map[id]
  }

  const nodeRing = (id: InboundSourceId) => {
    const on = activeId === id
    const map: Record<InboundSourceId, string> = {
      ads: on
        ? 'stroke-warning border-warning/50 bg-warning/20 shadow-[0_0_20px_rgba(var(--warning-rgb),0.35)]'
        : 'stroke-white/25 border-white/15 bg-surface/95',
      organic: on
        ? 'stroke-success border-success/50 bg-success/20 shadow-[0_0_20px_rgba(var(--success-rgb),0.35)]'
        : 'stroke-white/25 border-white/15 bg-surface/95',
      walkIns: on
        ? 'stroke-info border-info/50 bg-info/20 shadow-[0_0_20px_rgba(var(--info-rgb),0.35)]'
        : 'stroke-white/25 border-white/15 bg-surface/95',
      referrals: on
        ? 'stroke-accent border-accent/50 bg-accent/20 shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]'
        : 'stroke-white/25 border-white/15 bg-surface/95',
    }
    return map[id]
  }

  return (
    <div className="inbound-flow-diagram relative w-full max-w-[400px] mx-auto aspect-[5/3] min-h-[200px] sm:min-h-[220px] rounded-2xl border border-accent/25 bg-accent/[0.07] shadow-[0_0_56px_rgba(var(--accent-rgb),0.14)] px-2 py-3 sm:px-3 sm:py-4">
      <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <radialGradient id="inbound-hub-glow-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(var(--accent-rgb), 0.28)" />
            <stop offset="100%" stopColor="rgba(var(--accent-rgb), 0)" />
          </radialGradient>
        </defs>
        {nodes.map(({ id, cx, cy }) => (
          <line
            key={`l-${id}`}
            x1={cx}
            y1={cy}
            x2={200}
            y2={100}
            className={`${lineClass(id)} transition-all duration-700`}
            strokeWidth={activeId === id ? 3 : 1.25}
            strokeOpacity={activeId === id ? 0.85 : 1}
          />
        ))}
        <circle cx={200} cy={100} r={52} fill="url(#inbound-hub-glow-fill)" />
        <circle cx={200} cy={100} r={44} className="fill-accent/12 stroke-accent/45" strokeWidth={2} />
        <circle cx={200} cy={100} r={8} className="fill-accent inbound-hub-pulse" />
      </svg>
      {nodes.map(({ id, cx, cy }) => {
        const pctX = (cx / 400) * 100
        const pctY = (cy / 200) * 100
        const isActive = activeId === id
        const theme = THEMES[id]
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            aria-pressed={isActive}
            aria-label={sources[id]!.label}
            className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 transition-all duration-500 ${
              isActive ? 'scale-110 opacity-100 z-10' : 'scale-100 opacity-75 hover:opacity-95 hover:scale-105'
            }`}
            style={{ left: `${pctX}%`, top: `${pctY}%` }}
          >
            <span
              className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 ${nodeRing(id)} ${theme.accent}`}
            >
              <StrategyIcon id={id} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wide max-w-[80px] text-center leading-tight ${
                isActive ? theme.accent : 'text-text/70'
              }`}
            >
              {sources[id]!.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function EntryPointCard({
  sourceId,
  example,
  index,
  theme,
  capturedLabel,
  elevated = false,
}: {
  sourceId: InboundSourceId
  example: InboundExampleT
  index: number
  theme: StrategyTheme
  capturedLabel: string
  elevated?: boolean
}) {
  const src = getInboundTacticImage(sourceId, index)

  return (
    <motion.li
      initial={{ opacity: 0, y: elevated ? 32 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: elevated ? 0.08 : 0.14 + index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-xl border bg-surface/95 overflow-hidden transition-all duration-500 ${
        elevated
          ? `border-white/20 shadow-2xl shadow-black/30 -translate-y-2 sm:-translate-y-3 z-10 ring-1 ring-white/10 ${theme.border}`
          : 'border-border/80 shadow-md shadow-black/15 opacity-90 hover:opacity-100 hover:-translate-y-1'
      }`}
    >
      <div className={`relative w-full overflow-hidden ${elevated ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
        <Image
          src={src}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes={elevated ? '280px' : '200px'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
        <div className={`absolute inset-x-0 bottom-0 ${elevated ? 'p-4' : 'p-3'}`}>
          {example.chip ? (
            <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-1.5 ${theme.chip}`}>
              {example.chip}
            </span>
          ) : null}
          <p className={`font-display font-bold text-white leading-snug ${elevated ? 'text-base' : 'text-sm'}`}>
            {example.overlayLine}
          </p>
        </div>
      </div>
      <div className={`px-3.5 ${elevated ? 'py-4' : 'py-3'}`}>
        <p className={`font-display font-semibold text-text ${elevated ? 'text-base' : 'text-sm'}`}>{example.channel}</p>
        <p className={`text-muted leading-relaxed mt-1 ${elevated ? 'text-sm' : 'text-xs line-clamp-2'}`}>{example.moment}</p>
        <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-success">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success/12">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {capturedLabel}
        </p>
      </div>
    </motion.li>
  )
}

type MapProps = {
  sources: [InboundSourceT, InboundSourceT, InboundSourceT, InboundSourceT]
  hubTitle: string
  hubSubtitle: string
  convergeLabel: string
  capturedLabel: string
  entryPointsLabel: string
  hubChannels: string[]
}

export default function InboundLeadGenerationMap({
  sources,
  hubTitle,
  hubSubtitle,
  convergeLabel,
  capturedLabel,
  entryPointsLabel,
  hubChannels,
}: MapProps) {
  const reduceMotion = useReducedMotion() ?? false
  const [activeId, setActiveId] = useState<InboundSourceId>('ads')
  const [progress, setProgress] = useState(0)
  const pauseUntilRef = useRef(0)
  const rotateStartRef = useRef(Date.now())

  const sourceById = Object.fromEntries(sources.map((s) => [s.id, s])) as Record<InboundSourceId, InboundSourceT>
  const active = sourceById[activeId]!
  const theme = THEMES[activeId]
  const activeIndex = SOURCE_ORDER.indexOf(activeId)

  const selectStrategy = useCallback((id: InboundSourceId) => {
    setActiveId(id)
    setProgress(0)
    rotateStartRef.current = Date.now()
    pauseUntilRef.current = Date.now() + PAUSE_MS
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    let frame = 0
    const tick = () => {
      frame = requestAnimationFrame(tick)
      if (Date.now() < pauseUntilRef.current) {
        const elapsed = Date.now() - rotateStartRef.current
        setProgress(Math.min(1, elapsed / ROTATE_MS))
        return
      }
      const elapsed = Date.now() - rotateStartRef.current
      const p = Math.min(1, elapsed / ROTATE_MS)
      setProgress(p)
      if (p >= 1) {
        rotateStartRef.current = Date.now()
        setProgress(0)
        setActiveId((prev) => {
          const idx = SOURCE_ORDER.indexOf(prev)
          return SOURCE_ORDER[(idx + 1) % SOURCE_ORDER.length]!
        })
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduceMotion, activeId])

  return (
    <div className="rounded-2xl border border-border bg-gradient-to-b from-surface-light/60 to-surface/30 overflow-hidden shadow-xl shadow-black/10">
      <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-0">
        {/* Hub — primary focus */}
        <div className="p-5 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden inbound-hub-panel">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,rgba(var(--accent-rgb),0.14),transparent_60%)] pointer-events-none"
            aria-hidden
          />
          <div className="relative flex flex-col h-full min-h-[280px] lg:min-h-[460px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{convergeLabel}</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text leading-tight mt-1.5">{hubTitle}</h3>
            <p className="text-xs sm:text-sm text-muted mt-1.5 leading-relaxed line-clamp-2">{hubSubtitle}</p>

            <div className="flex-1 flex items-center justify-center py-3 sm:py-5 my-1 relative min-h-[200px] sm:min-h-[240px] w-full">
              <InboundFlowDiagram sources={sourceById} activeId={activeId} onSelect={selectStrategy} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]">
                <Image
                  src={INBOUND_HUB_ILLUSTRATION}
                  alt=""
                  width={72}
                  height={72}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain opacity-95 drop-shadow-[0_8px_24px_rgba(var(--accent-rgb),0.45)]"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-1 mt-auto">
              {hubChannels.map((ch) => (
                <span
                  key={ch}
                  className="px-2 py-0.5 rounded-md bg-accent/6 border border-accent/15 text-[9px] font-medium text-accent/90"
                >
                  {ch}
                </span>
              ))}
            </div>
            <p className="text-center text-[10px] text-muted/80 mt-3">{entryPointsLabel}</p>
          </div>
        </div>

        {/* Tactics — auto-rotating, uplifted */}
        <div className={`flex flex-col min-h-[380px] lg:min-h-[460px] bg-gradient-to-br ${theme.panelBg} via-surface/20 to-transparent transition-[background] duration-700`}>
          <div className="px-4 sm:px-5 pt-4 pb-2 border-b border-border/60">
            <div
              className="flex flex-wrap justify-center items-center gap-1.5 w-full pb-1"
              role="tablist"
              aria-label={hubTitle}
            >
              {SOURCE_ORDER.map((id) => {
                const t = THEMES[id]
                const isActive = id === activeId
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectStrategy(id)}
                    className={`shrink-0 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold border transition-all duration-500 ${
                      isActive ? t.tabActive : 'border-transparent bg-transparent text-muted hover:text-text'
                    }`}
                  >
                    <StrategyIcon id={id} className="w-3 h-3" />
                    <span className="hidden sm:inline">{sourceById[id]!.label}</span>
                  </button>
                )
              })}
            </div>
            <div className="mt-2.5 h-0.5 rounded-full bg-white/6 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(activeIndex + progress) / SOURCE_ORDER.length * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className={`mb-4 rounded-xl border px-4 py-3 bg-gradient-to-r ${theme.glow} to-transparent/0 ${theme.border} backdrop-blur-sm`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg border bg-surface/80 ${theme.border} ${theme.accent}`}>
                      <StrategyIcon id={activeId} className="w-4 h-4" />
                    </span>
                    <div>
                      <p className={`font-display text-base sm:text-lg font-bold ${theme.accent}`}>{active.label}</p>
                      <p className="text-xs text-muted leading-snug">{active.strategyLine}</p>
                    </div>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-end">
                  {active.examples.map((ex, i) => (
                    <EntryPointCard
                      key={ex.channel}
                      sourceId={activeId}
                      example={ex}
                      index={i}
                      theme={theme}
                      capturedLabel={capturedLabel}
                      elevated={i === 1}
                    />
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
