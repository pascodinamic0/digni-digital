'use client'

import { motion, AnimatePresence, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SocialPlatformIcon from './SocialPlatformIcon'

// Animate number from 0 to value when step is active (for drop/count display)
function AnimatedCount({ value, isActive, suffix = '', className = '' }: { value: number; isActive: boolean; suffix?: string; className?: string }) {
  const [display, setDisplay] = useState(value)
  useEffect(() => {
    if (!isActive) {
      setDisplay(value)
      return
    }
    setDisplay(0)
    const duration = 500
    const steps = 10
    const stepMs = duration / steps
    const increment = value / steps
    let current = 0
    const t = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplay(value)
        clearInterval(t)
        return
      }
      setDisplay(Math.round(current))
    }, stepMs)
    return () => clearInterval(t)
  }, [value, isActive])
  return <span className={className}>{display.toLocaleString()}{suffix}</span>
}

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  ads: '📢',
  website: '🌐',
  instagram: <SocialPlatformIcon platform="instagram" className="w-6 h-6 text-current" />,
  whatsapp: <SocialPlatformIcon platform="whatsapp" className="w-6 h-6 text-current" />,
  phone: '📞',
}
const BROKEN_STAGE_ICONS = ['📢', '📵', '❓', '📅', '📬', '❌', '🔄']
const AI_STAGE_ICONS = ['📥', '⚡', '✓', '📅', '🔄', '✅', '🔄']

// Funnel: lead counts (example of 100 leads). Broken: realistic bounces at every stage until cycle breaks.
const BROKEN_FUNNEL = [100, 38, 12, 5, 2, 1, 0] // 62 lost first contact, 26 qualification, 7 booking, 3 follow-up, 1 outcome, 0 referrals
// AI: bulletproof automation, zero drop, higher conversion, referrals add to loop
const AI_FUNNEL = [100, 100, 100, 100, 100, 95, 118] // no drop → 95 close → +23 referrals

type ChannelItem = { id: string; label: string; icon: React.ReactNode }
type BrokenStageItem = { step: number; title: string; icon: string; description: string; leak: string }
type AIStageItem = { step: number; title: string; icon: string; description: string; win: string }

// Trapezoid clip-path: funnel narrows toward bottom. Smaller inset = wider funnel.
// 18% inset each side = bottom stays ~64% width so the whole funnel is wide.
const FUNNEL_MAX_INSET = 18

function funnelPolygon(i: number, n: number): string {
  const insetTop = Math.min((i / n) * 50, FUNNEL_MAX_INSET)
  const insetBottom = Math.min(((i + 1) / n) * 50, FUNNEL_MAX_INSET)
  const leftTop = insetTop
  const rightTop = 100 - insetTop
  const leftBottom = insetBottom
  const rightBottom = 100 - insetBottom
  return `polygon(${leftTop}% 0%, ${rightTop}% 0%, ${rightBottom}% 100%, ${leftBottom}% 100%)`
}

// Section breaks: thin divider before these stage indices (0-based). No extra vertical space.
const FUNNEL_SECTION_AT = [0, 2, 5] as const

function funnelSectionLabel(
  index: number,
  c: {
    sectionIntake: string
    sectionConversion: string
    sectionOutcome: string
  }
): string | null {
  if (index === 0) return c.sectionIntake
  if (index === 2) return c.sectionConversion
  if (index === 5) return c.sectionOutcome
  return null
}

// Band heights: extra room on small screens so stacked copy fits
const BAND_HEIGHT_CLASS = 'min-h-[5.5rem] sm:min-h-[4.75rem]'
const BAND_HEIGHT_LAST_CLASS = 'min-h-[6.75rem] sm:min-h-[6.25rem]'
const BAND_HEIGHT_COMPACT = 'min-h-[4.25rem] sm:min-h-[4rem]'
const BAND_HEIGHT_LAST_COMPACT = 'min-h-[5.25rem] sm:min-h-[5rem]'

type FunnelStage = { step: number; title: string; icon: string; description?: string; leak?: string; win?: string }

type FunnelCopy = {
  legend: string
  sectionIntake: string
  sectionConversion: string
  sectionOutcome: string
  pipelineLabel: string
  columnLost: string
  columnNet: string
  lostBadge: string
  referralBadge: string
  leadsUnit: string
  atStage: string
  closed: string
  noDropThisStep: string
}

type FunnelLiveMetricKind = 'drop' | 'gain' | 'closed' | 'remaining'

type FunnelLiveMetric = {
  kind: FunnelLiveMetricKind
  value: number
  stageTitle: string
  inPipeline: number
}

/** Aligned with --brand-blue-dark (#065a7a) and deeper blue-navy for depth */
const FUNNEL_ACTIVE_DEEP_RGB = '6, 90, 122'
/** Near-black with blue-teal cast (edges / glow falloff) */
const FUNNEL_ACTIVE_INK_RGB = '2, 20, 40'
/** Intake band idle wash, brand blue tint */
const FUNNEL_INTAKE_SURFACE_RGB = '8, 68, 92'
const FUNNEL_INTAKE_SURFACE_MID_RGB = '4, 48, 66'

/** Rotating styles for channel source chips (accent / deep-blue “website” / warning / info / success). */
const CHANNEL_CHIP_STYLES = [
  {
    shell:
      'bg-accent/10 border border-accent/35 shadow-sm shadow-accent/20',
    label: 'text-accent',
  },
  {
    shell:
      'bg-[rgba(var(--accent-rgb),0.14)] border border-[rgba(var(--accent-rgb),0.38)] shadow-sm shadow-[rgba(var(--accent-rgb),0.18)]',
    label: 'text-accent',
  },
  {
    shell:
      'bg-warning/10 border border-warning/35 shadow-sm shadow-warning/15',
    label: 'text-warning',
  },
  {
    shell:
      'bg-info/10 border border-info/35 shadow-sm shadow-info/15',
    label: 'text-info',
  },
  {
    shell:
      'bg-success/10 border border-success/30 shadow-sm shadow-success/10',
    label: 'text-success',
  },
] as const

/** Strong focus ring + glow (stacked dark blues so the step pops). */
const ACTIVE_STEP_SHADOW = [
  `0 0 0 4px rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 1)`,
  `0 0 0 2px rgba(${FUNNEL_ACTIVE_INK_RGB}, 1)`,
  `0 0 40px rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 0.95)`,
  `0 0 72px rgba(${FUNNEL_ACTIVE_INK_RGB}, 0.65)`,
  `inset 0 0 40px rgba(${FUNNEL_ACTIVE_INK_RGB}, 0.5)`,
].join(', ')

function LeadSourceRow({
  channels,
  channelIcons,
  compact,
}: {
  channels: ChannelItem[]
  channelIcons: Record<string, React.ReactNode>
  compact: boolean
}) {
  return (
    <div
      className={`w-full flex flex-nowrap justify-center ${compact ? 'gap-1.5' : 'gap-3'} overflow-x-auto pb-0.5 -mx-1 px-1 scroll-smooth [scrollbar-width:thin]`}
      role="list"
      aria-label="Lead sources"
    >
      {channels.map((ch, chipIdx) => {
        const chip = CHANNEL_CHIP_STYLES[chipIdx % CHANNEL_CHIP_STYLES.length]
        return (
          <div
            key={ch.id}
            role="listitem"
            className={`flex flex-col items-center justify-center ${compact ? 'gap-0.5 rounded-lg px-2 py-1.5 min-w-[3.5rem]' : 'gap-1 rounded-xl px-2.5 py-2 min-w-[5rem]'} shrink-0 snap-start backdrop-blur-sm ${chip.shell}`}
          >
            <span className={`${compact ? 'text-base min-h-5' : 'text-[1.35rem] min-h-6'} leading-none inline-flex items-center justify-center`} aria-hidden>
              {channelIcons[ch.id] ?? ch.icon}
            </span>
            <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight line-clamp-1 ${chip.label}`}>{ch.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function VisualFunnel({
  stages,
  counts,
  channels,
  channelIcons,
  variant,
  activeStep = 0,
  funnelCopy,
  compact = false,
  hideChannels = false,
  hideElaboration = false,
  hideLegend = false,
  hideSectionBreaks = false,
}: {
  stages: FunnelStage[]
  counts: number[]
  channels: ChannelItem[]
  channelIcons: Record<string, React.ReactNode>
  variant: 'broken' | 'ai'
  activeStep?: number
  funnelCopy: FunnelCopy
  compact?: boolean
  hideChannels?: boolean
  hideElaboration?: boolean
  hideLegend?: boolean
  hideSectionBreaks?: boolean
}) {
  const isBroken = variant === 'broken'
  const totalLayers = stages.length
  const elaboration = (s: FunnelStage) => (isBroken ? s.leak : s.win)
  const bandBase = compact ? BAND_HEIGHT_COMPACT : BAND_HEIGHT_CLASS
  const bandLast = compact ? BAND_HEIGHT_LAST_COMPACT : BAND_HEIGHT_LAST_CLASS
  const lineColor = isBroken
    ? `rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 0.9)`
    : 'rgba(var(--success-rgb), 0.5)'

  return (
    <div className="w-full flex flex-col items-center relative">
      {!hideChannels ? (
        <>
          <LeadSourceRow channels={channels} channelIcons={channelIcons} compact={compact} />
          {!hideLegend ? (
            <p
              className={`${compact ? 'text-[10px] mt-1' : 'text-[11px] sm:text-xs mt-3'} text-center text-muted-foreground leading-snug max-w-md mx-auto mb-px px-1`}
            >
              {funnelCopy.legend}
            </p>
          ) : null}
          <div className={`w-full ${compact ? 'h-4' : 'h-8'} relative flex justify-center pointer-events-none mt-0.5`} aria-hidden>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[10, 30, 50, 70, 90].map((x, i) => (
                <motion.path
                  key={i}
                  d={`M ${x} 0 Q 50 60 50 100`}
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 1.2, delay: i * 0.08 }}
                />
              ))}
            </svg>
          </div>
        </>
      ) : null}

      {/* Column headers: pipeline + delta (stacked on mobile; delta hides here, shown per row on small screens) */}
      <div className={`w-full flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2 mb-1 ${compact ? 'mt-0.5' : 'mt-1'}`}>
        <div className="flex-1 min-w-0 pl-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{funnelCopy.pipelineLabel}</span>
        </div>
        <div className="hidden sm:flex flex-shrink-0 w-14 flex-col items-end justify-end text-right">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider ${isBroken ? 'text-destructive/90' : 'text-success'}`}
            title={isBroken ? funnelCopy.columnLost : funnelCopy.columnNet}
          >
            {isBroken ? funnelCopy.columnLost : funnelCopy.columnNet}
          </span>
        </div>
      </div>

      {/* Funnel: all bands same height, no gap, section breaks are thin lines only */}
      <div className="relative w-full flex flex-col overflow-visible" style={{ gap: 0 }}>
        {stages.map((stage, i) => {
          const count = counts[i] ?? 0
          const nextCount = counts[i + 1] ?? count
          const drop = count - nextCount
          // Broken: no drop at step 1, leads just arrived. AI: no drop anywhere (automation captures all).
          const displayDrop = variant === 'broken' && i === 0 ? 0 : drop
          const layerClip = funnelPolygon(i, totalLayers)
          const showSectionBreak =
            !hideSectionBreaks && (FUNNEL_SECTION_AT as readonly number[]).includes(i)
          const sectionLabel = showSectionBreak ? funnelSectionLabel(i, funnelCopy) : null
          const isLastTwoTiers = i >= totalLayers - 2
          const bandHeightClass = isLastTwoTiers ? bandLast : bandBase
          const isActive = i === activeStep
          const isIntakeBand = isBroken && i === 0
          const isLossBand = isBroken && i > 0

          return (
            <div key={stage.step} className="flex flex-col" style={{ gap: 0 }}>
              {showSectionBreak && sectionLabel && (
                <div
                  className={`grid grid-cols-[1fr_auto_1fr] items-center w-full ${compact ? 'gap-2 py-1' : 'gap-3 py-1.5'}`}
                  style={{ minHeight: compact ? 22 : 28 }}
                >
                  <div
                    className={`h-px w-full ${!isBroken ? 'bg-success/30' : ''}`}
                    style={isBroken ? { background: 'rgba(var(--destructive-rgb), 0.4)' } : {}}
                  />
                  <span
                    className={`${compact ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'} font-bold uppercase tracking-wider whitespace-nowrap rounded-lg border ${
                      isBroken
                        ? 'text-destructive bg-destructive/10 border-destructive/20'
                        : 'text-success bg-success/10 border-success/20'
                    }`}
                  >
                    {sectionLabel}
                  </span>
                  <div
                    className={`h-px w-full ${!isBroken ? 'bg-success/30' : ''}`}
                    style={isBroken ? { background: 'rgba(var(--destructive-rgb), 0.4)' } : {}}
                  />
                </div>
              )}

              <motion.div
                className={`relative flex flex-col sm:flex-row items-stretch ${compact ? 'gap-1 sm:gap-1.5' : 'gap-1.5 sm:gap-2'} overflow-visible ${!isBroken ? 'sm:rounded-xl' : ''}`}
              >
                <motion.div
                  className={`relative flex-1 min-w-0 flex flex-col items-center justify-center text-center ${compact ? 'px-1.5 sm:px-2 py-1.5 sm:py-0' : 'px-2 sm:px-3 py-2 sm:py-0'} overflow-hidden ${bandHeightClass} ${displayDrop !== 0 ? 'order-2 sm:order-1' : ''}`}
                  style={(() => {
                    let background: string
                    if (isIntakeBand) {
                      const base = `linear-gradient(180deg, rgba(${FUNNEL_INTAKE_SURFACE_RGB}, 0.26) 0%, rgba(${FUNNEL_INTAKE_SURFACE_MID_RGB}, 0.14) 100%)`
                      const activeWash = `linear-gradient(180deg, rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 0.92) 0%, rgba(${FUNNEL_ACTIVE_INK_RGB}, 0.62) 100%), `
                      background = isActive ? `${activeWash}${base}` : base
                    } else if (isLossBand) {
                      const base = isActive
                        ? 'linear-gradient(180deg, rgba(var(--destructive-rgb), 0.26) 0%, rgba(var(--destructive-rgb), 0.14) 100%)'
                        : 'linear-gradient(180deg, rgba(var(--destructive-rgb), 0.22) 0%, rgba(var(--destructive-rgb), 0.12) 100%)'
                      const activeWash = `linear-gradient(180deg, rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 0.62) 0%, rgba(${FUNNEL_ACTIVE_INK_RGB}, 0.28) 100%), `
                      background = isActive ? `${activeWash}${base}` : base
                    } else {
                      const base = isActive
                        ? 'linear-gradient(135deg, rgba(var(--success-rgb), 0.14) 0%, rgba(var(--success-rgb), 0.08) 55%, rgba(var(--success-rgb), 0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(var(--success-rgb), 0.12) 0%, rgba(var(--success-rgb), 0.06) 100%)'
                      const activeWash = `linear-gradient(135deg, rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 0.68) 0%, rgba(${FUNNEL_ACTIVE_INK_RGB}, 0.3) 100%), `
                      background = isActive ? `${activeWash}${base}` : base
                    }

                    let border: string
                    if (isActive) {
                      border = `3px solid rgba(${FUNNEL_ACTIVE_DEEP_RGB}, 1)`
                    } else if (isIntakeBand) {
                      border = `2px solid rgba(${FUNNEL_INTAKE_SURFACE_RGB}, 0.5)`
                    } else if (isLossBand) {
                      border = '2px solid rgba(var(--destructive-rgb), 0.45)'
                    } else {
                      border = '2px solid rgba(var(--success-rgb), 0.25)'
                    }

                    return {
                      clipPath: layerClip,
                      WebkitClipPath: layerClip,
                      background,
                      border,
                      boxShadow: isActive ? ACTIVE_STEP_SHADOW : 'none',
                      zIndex: isActive ? 3 : 1,
                    }
                  })()}
                >
                  <div
                    className={`flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-center w-full leading-tight ${compact ? 'gap-0.5 sm:gap-1' : 'gap-1 sm:gap-1.5'}`}
                  >
                    <div className={`flex items-center justify-center flex-wrap ${compact ? 'gap-1' : 'gap-1.5'}`}>
                      <span
                        className={`${compact ? 'w-5 h-5 rounded-md text-[10px]' : 'w-6 h-6 rounded-lg text-xs'} flex items-center justify-center font-bold flex-shrink-0 border ${
                          isIntakeBand
                            ? isActive
                              ? 'bg-accent/20 text-accent border-accent/40'
                              : 'bg-accent/12 text-accent border-accent/25'
                            : !isBroken
                              ? isActive
                                ? 'bg-success/22 text-success border-success/30'
                                : 'bg-success/20 text-success/90 border-success/25'
                              : 'bg-foreground/15 text-foreground border-border/40'
                        }`}
                        aria-hidden
                      >
                        {stage.step}
                      </span>
                      <span className={`${compact ? 'text-base sm:text-sm' : 'text-lg sm:text-base'} leading-none select-none`} aria-hidden>
                        {stage.icon}
                      </span>
                      <span
                        className={`font-semibold ${compact ? 'text-xs sm:text-xs' : 'text-sm sm:text-sm'} text-left sm:text-center ${
                          isIntakeBand ? 'text-foreground' : isLossBand ? 'text-destructive' : 'text-success'
                        }`}
                      >
                        {stage.title}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1 flex-wrap">
                      <AnimatedCount
                        value={count}
                        isActive={isActive}
                        suffix=""
                        className={`${compact ? 'text-sm sm:text-xs' : 'text-base sm:text-sm'} font-mono tabular-nums font-bold ${
                          isIntakeBand
                            ? 'text-accent'
                            : isLossBand
                              ? 'text-destructive'
                              : 'text-success'
                        }`}
                      />
                      <span
                        className={`text-[10px] sm:text-xs font-medium uppercase tracking-wide ${
                          isIntakeBand
                            ? 'text-accent/80'
                            : isLossBand
                              ? 'text-destructive/80'
                              : 'text-success/80'
                        }`}
                      >
                        {funnelCopy.leadsUnit}
                      </span>
                    </div>
                  </div>
                  {!hideElaboration && elaboration(stage) && (
                    <p
                      className={`${compact ? 'text-[10px] sm:text-[11px] mt-0.5' : 'text-[11px] sm:text-xs mt-1'} leading-snug max-w-full px-1 font-medium ${
                        isIntakeBand
                          ? 'text-muted-foreground'
                          : isLossBand
                            ? 'text-destructive'
                            : 'text-success/90'
                      }`}
                    >
                      {elaboration(stage)}
                    </p>
                  )}
                </motion.div>
                {/* Reserve sm:w-14 always so clip-path trapezoids use the same band width as rows with NET/LEAK deltas */}
                <div
                  className={`
                    flex-shrink-0 w-full sm:w-14 min-h-0 sm:self-stretch
                    flex flex-row sm:flex-col items-center justify-between sm:items-end sm:justify-center gap-2 sm:gap-0.5
                    px-2.5 py-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0
                    ${displayDrop !== 0 ? 'order-1 sm:order-2' : 'hidden sm:flex'}
                    ${displayDrop > 0
                      ? isBroken
                        ? 'border-destructive/25 bg-destructive/10 sm:bg-transparent sm:border-0'
                        : 'border-border/30 bg-muted/30 sm:bg-transparent sm:border-0'
                      : ''}
                    ${displayDrop < 0 && !isBroken ? 'border-success/25 bg-success/10 sm:bg-transparent sm:border-0' : ''}
                  `}
                  aria-hidden={displayDrop === 0}
                >
                  {displayDrop > 0 && (
                    <>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-foreground/80 sm:text-foreground/70 sm:font-semibold sm:text-right leading-tight">
                        {funnelCopy.lostBadge}
                      </span>
                      <motion.span
                        className={`inline-flex items-baseline gap-1 text-sm font-bold tabular-nums sm:flex sm:flex-col sm:items-end ${!isLossBand ? 'text-muted-foreground' : 'text-destructive'}`}
                        animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-flex items-baseline gap-1">
                          −<AnimatedCount value={displayDrop} isActive={isActive} suffix="" />
                          <span className="text-[11px] font-medium">{funnelCopy.leadsUnit}</span>
                        </span>
                      </motion.span>
                    </>
                  )}
                  {displayDrop < 0 && (
                    <div
                      className={`flex w-full flex-row items-center justify-between gap-2 sm:flex-col sm:items-end sm:gap-0.5 sm:p-0 ${!isBroken ? 'sm:rounded-lg sm:bg-success/15 sm:border sm:border-success/25 sm:px-1.5 sm:py-1' : ''}`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wide text-success sm:font-semibold">
                        {funnelCopy.referralBadge}
                      </span>
                      <motion.span
                        className="inline-flex items-baseline gap-1 text-sm font-bold tabular-nums text-success"
                        animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        +<AnimatedCount value={Math.abs(displayDrop)} isActive={isActive} suffix="" />
                        <span className="text-[11px] font-medium">{funnelCopy.leadsUnit}</span>
                      </motion.span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function BrokenFlowDiagram({
  channels,
  brokenStages,
  activeStep,
  label,
  funnelCopy,
  compact = false,
  hideChannels = false,
}: {
  channels: ChannelItem[]
  brokenStages: BrokenStageItem[]
  activeStep: number
  label: string
  funnelCopy: FunnelCopy
  compact?: boolean
  hideChannels?: boolean
}) {
  const funnelStages: FunnelStage[] = brokenStages.map((s, i) => ({
    step: s.step,
    title: s.title,
    icon: BROKEN_STAGE_ICONS[i],
    leak: s.leak,
  }))
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden flex flex-col min-h-0 ${
        compact
          ? 'rounded-xl border border-destructive/30 bg-destructive/[0.06] p-3'
          : 'rounded-3xl border-2 border-destructive/35 bg-gradient-to-b from-destructive/10 via-surface/90 to-destructive/5 p-5 xl:p-6 shadow-xl shadow-destructive/5 ring-1 ring-destructive/10'
      }`}
      id="the-leak"
      aria-labelledby="the-leak-title"
    >
      <h3 id="the-leak-title" className={`text-center font-bold text-destructive ${compact ? 'text-xs mb-2' : 'text-sm mb-4 min-h-[1.5rem]'}`}>
        <span aria-hidden>❌ </span>
        {label}
      </h3>
      <VisualFunnel
        stages={funnelStages}
        counts={BROKEN_FUNNEL}
        channels={channels}
        channelIcons={CHANNEL_ICONS}
        variant="broken"
        activeStep={activeStep}
        funnelCopy={funnelCopy}
        compact={compact}
        hideChannels={hideChannels}
        hideElaboration={compact}
        hideLegend={compact}
        hideSectionBreaks={compact}
      />
    </motion.div>
  )
}

function AIPoweredFlowDiagram({
  channels,
  aiStages,
  activeStep,
  label,
  funnelCopy,
  compact = false,
  hideChannels = false,
}: {
  channels: ChannelItem[]
  aiStages: AIStageItem[]
  activeStep: number
  label: string
  funnelCopy: FunnelCopy
  compact?: boolean
  hideChannels?: boolean
}) {
  const funnelStages: FunnelStage[] = aiStages.map((s, i) => ({
    step: s.step,
    title: s.title,
    icon: AI_STAGE_ICONS[i],
    win: s.win,
  }))
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 }}
      className={`relative overflow-hidden flex flex-col min-h-0 ${
        compact
          ? 'rounded-xl border border-success/30 bg-success/[0.06] p-3'
          : 'rounded-3xl border-2 border-success/35 bg-gradient-to-b from-success/10 via-surface/90 to-success/5 p-5 xl:p-6 shadow-xl shadow-success/10 ring-1 ring-success/15'
      }`}
      id="the-loop"
      aria-labelledby="the-loop-title"
    >
      <h3 id="the-loop-title" className={`text-center font-bold text-success ${compact ? 'text-xs mb-2' : 'text-sm mb-4 min-h-[1.5rem]'}`}>
        <span aria-hidden>✅ </span>
        {label}
      </h3>
      <VisualFunnel
        stages={funnelStages}
        counts={AI_FUNNEL}
        channels={channels}
        channelIcons={CHANNEL_ICONS}
        variant="ai"
        activeStep={activeStep}
        funnelCopy={funnelCopy}
        compact={compact}
        hideChannels={hideChannels}
        hideElaboration={compact}
        hideLegend={compact}
        hideSectionBreaks={compact}
      />
    </motion.div>
  )
}

const FUNNEL_STEP_INTERVAL_MS = 2800
const FUNNEL_REFERRAL_HOLD_MS = FUNNEL_STEP_INTERVAL_MS * 2
const CAROUSEL_CARD_WIDTH = 420
const CARD_SCROLL_VH_DESKTOP = 50
const CARD_SCROLL_VH_DEFAULT = 58
/** Scroll progress: hold Before → slide → hold After */
const CARD_HOLD_BEFORE_UNTIL = 0.16
const CARD_SLIDE_UNTIL = 0.58
const FUNNEL_STAGE_COUNT = 7
const FUNNEL_LAST_STEP = FUNNEL_STAGE_COUNT - 1
const PIPELINE_BAR_MIN_PX = 14
const PIPELINE_BAR_MAX_PX = 48

function pipelineBarHeight(value: number, max: number, revealed = true): number {
  if (!revealed) return 0
  if (max <= 0) return value > 0 ? PIPELINE_BAR_MIN_PX : 0
  const ratio = Math.max(0, value) / max
  if (value === 0) return PIPELINE_BAR_MIN_PX
  return Math.max(PIPELINE_BAR_MIN_PX, Math.round(ratio * PIPELINE_BAR_MAX_PX))
}

function pipelineDropAtStep(counts: number[], index: number): number {
  if (index >= counts.length - 1) return 0
  return Math.max(0, (counts[index] ?? 0) - (counts[index + 1] ?? 0))
}

function getFunnelLiveMetric(
  variant: 'broken' | 'ai',
  counts: number[],
  activeStep: number,
  stageTitle: string
): FunnelLiveMetric {
  const inPipeline = counts[activeStep] ?? 0
  const dropLeaving = pipelineDropAtStep(counts, activeStep)
  const isLast = activeStep === counts.length - 1
  const referralGain =
    variant === 'ai' && isLast && activeStep > 0
      ? Math.max(0, inPipeline - (counts[activeStep - 1] ?? 0))
      : 0

  if (variant === 'ai' && activeStep === 5) {
    return { kind: 'closed', value: inPipeline, stageTitle, inPipeline }
  }
  if (variant === 'ai' && isLast && referralGain > 0) {
    return { kind: 'gain', value: referralGain, stageTitle, inPipeline }
  }
  if (dropLeaving > 0) {
    return { kind: 'drop', value: dropLeaving, stageTitle, inPipeline }
  }
  return { kind: 'remaining', value: inPipeline, stageTitle, inPipeline }
}

function FunnelLiveMetricBlock({
  metric,
  variant,
  funnelCopy,
  animate,
}: {
  metric: FunnelLiveMetric
  variant: 'broken' | 'ai'
  funnelCopy: FunnelCopy
  animate: boolean
}) {
  const isBroken = variant === 'broken'
  const tone =
    metric.kind === 'drop'
      ? 'text-destructive'
      : metric.kind === 'gain' || metric.kind === 'closed'
        ? 'text-success'
        : isBroken
          ? 'text-destructive'
          : 'text-success'

  const suffix =
    metric.kind === 'drop'
      ? funnelCopy.lostBadge
      : metric.kind === 'gain'
        ? funnelCopy.referralBadge
        : metric.kind === 'closed'
          ? funnelCopy.closed
          : funnelCopy.pipelineLabel

  const prefix = metric.kind === 'drop' ? '−' : metric.kind === 'gain' ? '+' : ''

  const subline =
    metric.kind === 'drop' || metric.kind === 'gain'
      ? `${funnelCopy.atStage} ${metric.stageTitle} · ${metric.inPipeline.toLocaleString()} ${funnelCopy.pipelineLabel}`
      : metric.kind === 'closed'
        ? `${funnelCopy.atStage} ${metric.stageTitle}`
        : `${funnelCopy.atStage} ${metric.stageTitle} · ${funnelCopy.noDropThisStep}`

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${metric.kind}-${metric.value}-${metric.stageTitle}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28 }}
        className="mt-4"
      >
        <p className={`font-display text-3xl font-bold tabular-nums ${tone}`}>
          {prefix}
          <AnimatedCount value={metric.value} isActive={animate} />
          <span className="ml-2 text-lg font-semibold">{suffix}</span>
        </p>
        <p className="mt-1.5 text-sm text-[var(--software-text-muted)] leading-snug">{subline}</p>
      </motion.div>
    </AnimatePresence>
  )
}

function PipelineMiniChart({
  counts,
  variant,
  activeStep,
  revealedThroughStep,
  stageTitles,
  funnelCopy,
}: {
  counts: number[]
  variant: 'broken' | 'ai'
  activeStep: number
  revealedThroughStep: number
  stageTitles: string[]
  funnelCopy: FunnelCopy
}) {
  const max = Math.max(...counts, 1)
  const isBroken = variant === 'broken'
  const live = getFunnelLiveMetric(variant, counts, activeStep, stageTitles[activeStep] ?? '')
  const stageName = stageTitles[activeStep] ?? ''

  return (
    <div className="mt-5 min-w-0 overflow-hidden">
      <div className="mb-2 grid grid-cols-7 gap-1">
        {stageTitles.map((title, i) => (
          <div
            key={`${title}-${i}`}
            className="flex min-h-[2.25rem] min-w-0 items-center justify-center rounded border border-[var(--software-border)]/80 bg-[var(--software-content)]/50 px-0.5 py-1"
            title={title}
          >
            <span className="line-clamp-2 w-full text-center text-[7px] font-semibold leading-[1.15] text-[var(--software-text)] sm:text-[8px]">
              {title}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 items-end h-[4.5rem] border-b border-[var(--software-border)]/60 pb-1">
        {counts.map((n, i) => {
          const revealed = i <= revealedThroughStep
          const active = revealed && i === activeStep
          const h = pipelineBarHeight(n, max, revealed)
          const barTone = !revealed
            ? 'bg-transparent'
            : isBroken
              ? active
                ? 'bg-destructive shadow-sm shadow-destructive/35 ring-1 ring-destructive/50'
                : 'bg-destructive'
              : active
                ? 'bg-success shadow-sm shadow-success/35 ring-1 ring-success/50'
                : 'bg-success'
          const valueTone = !revealed
            ? 'text-transparent select-none'
            : isBroken
              ? active
                ? 'text-destructive font-bold'
                : 'text-destructive font-semibold'
              : active
                ? 'text-success font-bold'
                : 'text-success font-semibold'
          const stepTone = !revealed
            ? 'text-[var(--software-text-muted)]/40'
            : isBroken
              ? active
                ? 'text-destructive font-bold'
                : 'text-destructive/80'
              : active
                ? 'text-success font-bold'
                : 'text-success/80'

          return (
            <div
              key={i}
              className="flex min-w-0 flex-col items-center justify-end gap-0.5"
              title={revealed ? `${stageTitles[i]}: ${n}` : stageTitles[i]}
            >
              <motion.div
                className={`w-[88%] max-w-[1.35rem] rounded-t-sm ${barTone}`}
                initial={false}
                animate={{ height: h, opacity: revealed ? 1 : 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className={`text-[9px] font-mono tabular-nums leading-none ${valueTone}`} aria-hidden={!revealed}>
                {revealed ? n : '\u00A0'}
              </span>
              <span className={`text-[8px] font-semibold leading-none tabular-nums ${stepTone}`}>{i + 1}</span>
            </div>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={`${live.kind}-${activeStep}-${live.value}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`mt-2 text-center text-[10px] font-semibold tabular-nums leading-snug ${
            live.kind === 'drop' ? 'text-destructive' : live.kind === 'gain' || live.kind === 'closed' ? 'text-success' : 'text-[var(--software-text-muted)]'
          }`}
        >
          {live.kind === 'drop' ? (
            <>
              −{live.value} {funnelCopy.lostBadge} · {stageName}
            </>
          ) : live.kind === 'gain' ? (
            <>
              +{live.value} {funnelCopy.referralBadge} · {stageName}
            </>
          ) : live.kind === 'closed' ? (
            <>
              {live.value} {funnelCopy.closed} · {stageName}
            </>
          ) : (
            <>
              {live.inPipeline.toLocaleString()} {funnelCopy.pipelineLabel} · {stageName}
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

type JourneyCarouselCardProps = {
  variant: 'broken' | 'ai'
  sectionBadge: string
  label: string
  tagline: string
  counts: number[]
  activeStep: number
  revealedThroughStep: number
  stages: { title: string }[]
  stageLine: string
  stageSection: string
  funnelCopy: FunnelCopy
  isActive: boolean
  onSelect: () => void
}

function JourneyCarouselCard({
  variant,
  sectionBadge,
  label,
  tagline,
  counts,
  activeStep,
  revealedThroughStep,
  stages,
  stageLine,
  stageSection,
  funnelCopy,
  isActive,
  onSelect,
}: JourneyCarouselCardProps) {
  const isBroken = variant === 'broken'
  const stageTitles = stages.map((s) => s.title)
  const liveMetric = getFunnelLiveMetric(variant, counts, activeStep, stageTitles[activeStep] ?? '')

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`snap-center shrink-0 min-w-0 overflow-hidden text-left rounded-2xl border p-6 sm:p-7 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isActive
          ? isBroken
            ? 'border-destructive/40 bg-[var(--software-panel)] shadow-lg shadow-destructive/10 ring-1 ring-destructive/20'
            : 'border-success/40 bg-[var(--software-panel)] shadow-lg shadow-success/10 ring-1 ring-success/20'
          : 'border-[var(--software-border)] bg-[var(--software-panel)]/80 hover:border-[var(--software-border)]'
      }`}
      style={{ width: `min(92vw, ${CAROUSEL_CARD_WIDTH}px)` }}
      aria-pressed={isActive}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
            isBroken ? 'text-destructive' : 'text-success'
          }`}
        >
          {sectionBadge}
        </span>
        <span className="text-lg leading-none" aria-hidden>
          {isBroken ? '❌' : '✅'}
        </span>
      </div>
      <h3 className={`font-display text-xl sm:text-2xl font-bold ${isBroken ? 'text-destructive' : 'text-success'}`}>
        {label}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-[var(--software-text-muted)] leading-snug">{tagline}</p>
      <FunnelLiveMetricBlock metric={liveMetric} variant={variant} funnelCopy={funnelCopy} animate />
      <PipelineMiniChart
        counts={counts}
        variant={variant}
        activeStep={activeStep}
        revealedThroughStep={revealedThroughStep}
        stageTitles={stageTitles}
        funnelCopy={funnelCopy}
      />
      <p className="mt-4 min-h-[3.25rem] border-t border-[var(--software-border)] pt-4 leading-snug">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider ${
            isBroken ? 'text-destructive' : 'text-success'
          }`}
        >
          {stageSection}
        </span>
        <span className="mt-1 block line-clamp-2 text-sm text-[var(--software-text)]">{stageLine}</span>
      </p>
    </button>
  )
}

type ClientJourneyDemoProps = {
  /** Larger section + funnel for primary offer comparison (Leak vs Loop). */
  prominent?: boolean
}

const ClientJourneyDemo = ({ prominent = false }: ClientJourneyDemoProps) => {
  const [activeFunnelStep, setActiveFunnelStep] = useState(0)
  const [revealedThroughStep, setRevealedThroughStep] = useState(0)
  const [funnelInView, setFunnelInView] = useState(false)
  const funnelSectionRef = useRef<HTMLElement>(null)
  const scrollRunwayRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [cardScrollVh, setCardScrollVh] = useState(CARD_SCROLL_VH_DEFAULT)
  const language = useLanguage()
  const t = translations[language].clientJourney
  const dream = translations[language].aiEmployeePage.dreamOutcome
  const compact = prominent
  const [pipelineExpanded, setPipelineExpanded] = useState(false)
  const [activeCard, setActiveCard] = useState<'broken' | 'ai'>('broken')
  const carouselRef = useRef<HTMLDivElement>(null)
  const funnelCopy: FunnelCopy = {
    legend: t.funnelLegend,
    sectionIntake: t.funnelSectionIntake,
    sectionConversion: t.funnelSectionConversion,
    sectionOutcome: t.funnelSectionOutcome,
    pipelineLabel: t.funnelPipelineLabel,
    columnLost: t.funnelColumnLost,
    columnNet: t.funnelColumnNet,
    lostBadge: t.funnelLostBadge,
    referralBadge: t.funnelReferralBadge,
    leadsUnit: t.funnelLeadsUnit,
    atStage: t.funnelAtStage,
    closed: t.funnelClosed,
    noDropThisStep: t.funnelNoDropThisStep,
  }
  const channels: ChannelItem[] = t.channels.map((c) => ({ ...c, icon: CHANNEL_ICONS[c.id] ?? '📩' }))
  const brokenStages: BrokenStageItem[] = t.brokenStages.map((s, i) => ({ ...s, icon: BROKEN_STAGE_ICONS[i] }))
  const aiStages: AIStageItem[] = t.aiStages.map((s, i) => ({ ...s, icon: AI_STAGE_ICONS[i] }))

  const { scrollYProgress } = useScroll({
    target: scrollRunwayRef,
    offset: ['start 78%', 'end 18%'],
  })

  const slideProgress = useTransform(
    scrollYProgress,
    [0, CARD_HOLD_BEFORE_UNTIL, CARD_SLIDE_UNTIL, 1],
    [0, 0, 1, 1],
    { clamp: true },
  )

  const carouselX = useTransform(slideProgress, (progress) => {
    const gap = 24
    const cardWidth =
      typeof window !== 'undefined'
        ? Math.min(window.innerWidth * 0.92, CAROUSEL_CARD_WIDTH)
        : CAROUSEL_CARD_WIDTH
    return -progress * (cardWidth + gap)
  })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const syncScrollVh = () => {
      setCardScrollVh(mq.matches ? CARD_SCROLL_VH_DESKTOP : CARD_SCROLL_VH_DEFAULT)
    }
    syncScrollVh()
    mq.addEventListener('change', syncScrollVh)
    return () => mq.removeEventListener('change', syncScrollVh)
  }, [])

  useMotionValueEvent(slideProgress, 'change', (slideAmount) => {
    if (shouldReduceMotion || !compact) return

    setActiveCard(slideAmount >= 0.5 ? 'ai' : 'broken')
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (shouldReduceMotion || !compact || pipelineExpanded) return

    const step = Math.min(
      FUNNEL_LAST_STEP,
      Math.max(0, Math.floor(progress * FUNNEL_STAGE_COUNT)),
    )
    setActiveFunnelStep(step)
    setRevealedThroughStep((peak) => (progress < 0.05 ? 0 : Math.max(peak, step)))
  })

  useEffect(() => {
    if (!compact) return
    const el = funnelSectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFunnelInView(entry.isIntersecting)
        if (entry.isIntersecting) {
          setActiveFunnelStep(0)
          setRevealedThroughStep(0)
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [compact])

  useEffect(() => {
    const useAutoPlay =
      !compact || shouldReduceMotion || pipelineExpanded
    if (!useAutoPlay) return
    if (compact && !funnelInView && !pipelineExpanded) return

    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout>
    let step = 0

    const scheduleNext = () => {
      const delay = step === FUNNEL_LAST_STEP ? FUNNEL_REFERRAL_HOLD_MS : FUNNEL_STEP_INTERVAL_MS
      timeoutId = setTimeout(() => {
        if (cancelled) return
        step = (step + 1) % FUNNEL_STAGE_COUNT
        setActiveFunnelStep(step)
        scheduleNext()
      }, delay)
    }

    setActiveFunnelStep(0)
    setRevealedThroughStep(0)
    scheduleNext()

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [compact, funnelInView, shouldReduceMotion, pipelineExpanded])

  useEffect(() => {
    const useScrollSteps = compact && !shouldReduceMotion && !pipelineExpanded
    if (useScrollSteps) return

    setRevealedThroughStep((peak) => {
      if (activeFunnelStep === 0 && peak === FUNNEL_LAST_STEP) {
        return 0
      }
      return Math.max(peak, activeFunnelStep)
    })
  }, [activeFunnelStep, shouldReduceMotion, compact, pipelineExpanded])

  const scrollToCard = useCallback((variant: 'broken' | 'ai') => {
    setActiveCard(variant)

    if (shouldReduceMotion) {
      const el = carouselRef.current
      if (!el) return
      const index = variant === 'broken' ? 0 : 1
      const track = el.firstElementChild
      const card = track?.children[index] as HTMLElement | undefined
      card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      return
    }

    const runway = scrollRunwayRef.current
    if (!runway) return
    const rect = runway.getBoundingClientRect()
    const sectionTop = window.scrollY + rect.top
    const runwayScrollSpan = Math.max(runway.offsetHeight, window.innerHeight * 0.35)
    const progress =
      variant === 'ai'
        ? CARD_SLIDE_UNTIL + (1 - CARD_SLIDE_UNTIL) * 0.5
        : CARD_HOLD_BEFORE_UNTIL * 0.5
    const target = sectionTop + runwayScrollSpan * progress - window.innerHeight * 0.38
    window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' })
  }, [shouldReduceMotion])

  if (!compact) {
    return (
      <>
        <section
          id="leak-vs-loop"
          className="overflow-hidden bg-gradient-to-b from-surface via-background to-surface border-b border-border-light py-14 sm:py-20"
          aria-labelledby="journey-demo-title"
        >
          <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4">
                {t.badge}
              </span>
              <h2 id="journey-demo-title" className="font-display text-3xl sm:text-4xl font-bold mb-3 leading-[1.1]">
                {t.title} <span className="gradient-text">{t.subtitle}</span>
              </h2>
              <p className="text-muted text-base sm:text-lg">{t.subtext}</p>
            </div>
          </div>
        </section>
        <section className="overflow-hidden border-b border-border-light py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <BrokenFlowDiagram channels={channels} brokenStages={brokenStages} activeStep={activeFunnelStep} label={t.brokenLabel} funnelCopy={funnelCopy} />
          </div>
        </section>
        <section className="overflow-hidden border-b border-border-light py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AIPoweredFlowDiagram channels={channels} aiStages={aiStages} activeStep={activeFunnelStep} label={t.aiFlowLabel} funnelCopy={funnelCopy} />
          </div>
        </section>
      </>
    )
  }

  return (
    <section
      ref={funnelSectionRef}
      id="leak-vs-loop"
      className="overflow-hidden border-b border-[var(--software-border)] py-16 md:py-20"
      aria-labelledby="journey-demo-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3"
        >
          {t.badge}
        </motion.p>
        <motion.h2
          id="journey-demo-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--software-text)] leading-[1.12]"
        >
          {t.title}{' '}
          <span className="block sm:inline mt-1 sm:mt-0 bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
            {t.subtitle}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          id="dream-outcome"
          className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[var(--software-border)] bg-[var(--software-panel)] px-4 py-2.5 shadow-sm"
        >
          <span className="font-display text-sm font-bold text-destructive tabular-nums">{dream.beforeMetric}</span>
          <span className="text-[var(--software-text-muted)] text-xs" aria-hidden>
            →
          </span>
          <span className="font-display text-sm font-bold text-success tabular-nums">{dream.afterMetric}</span>
          <span className="w-full sm:w-auto text-[10px] text-[var(--software-text-muted)]">{dream.referralLine}</span>
        </motion.div>
      </div>

      <div
        ref={scrollRunwayRef}
        className="relative mx-auto mt-10 max-w-6xl"
        style={shouldReduceMotion ? undefined : { height: `${cardScrollVh}vh` }}
      >
        <div className={shouldReduceMotion ? undefined : 'sticky top-20 sm:top-24'}>
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--software-canvas)] to-transparent sm:w-16"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--software-canvas)] to-transparent sm:w-16"
              aria-hidden
            />

            <div
              ref={carouselRef}
              className={`px-4 sm:px-6 pb-3 ${
                shouldReduceMotion
                  ? 'overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
                  : 'overflow-hidden'
              }`}
              style={{
                paddingLeft: `max(1rem, calc(50% - ${CAROUSEL_CARD_WIDTH / 2}px))`,
                paddingRight: `max(1rem, calc(50% - ${CAROUSEL_CARD_WIDTH / 2}px))`,
              }}
            >
              <motion.div
                className="flex w-max gap-5 sm:gap-6"
                style={shouldReduceMotion ? undefined : { x: carouselX }}
              >
                <JourneyCarouselCard
                  variant="broken"
                  sectionBadge={t.beforeSectionBadge}
                  label={t.brokenLabel}
                  tagline={t.beforeSectionSubtext}
                  counts={BROKEN_FUNNEL}
                  activeStep={activeFunnelStep}
                  revealedThroughStep={revealedThroughStep}
                  stages={brokenStages}
                  stageLine={brokenStages[activeFunnelStep]?.leak ?? ''}
                  stageSection={brokenStages[activeFunnelStep]?.title ?? ''}
                  funnelCopy={funnelCopy}
                  isActive={activeCard === 'broken'}
                  onSelect={() => scrollToCard('broken')}
                />
                <JourneyCarouselCard
                  variant="ai"
                  sectionBadge={t.afterSectionBadge}
                  label={t.aiFlowLabel}
                  tagline={t.afterSectionSubtext}
                  counts={AI_FUNNEL}
                  activeStep={activeFunnelStep}
                  revealedThroughStep={revealedThroughStep}
                  stages={aiStages}
                  stageLine={aiStages[activeFunnelStep]?.win ?? ''}
                  stageSection={aiStages[activeFunnelStep]?.title ?? ''}
                  funnelCopy={funnelCopy}
                  isActive={activeCard === 'ai'}
                  onSelect={() => scrollToCard('ai')}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {(['broken', 'ai'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => scrollToCard(v)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCard === v ? `w-7 ${v === 'broken' ? 'bg-destructive' : 'bg-success'}` : 'w-2 bg-[var(--software-border)]'
                }`}
                aria-label={v === 'broken' ? t.brokenLabel : t.aiFlowLabel}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6 text-center">
        <button
          type="button"
          onClick={() => setPipelineExpanded((open) => !open)}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--software-border)] bg-[var(--software-panel)] px-5 py-2.5 text-sm font-medium text-[var(--software-text)] transition-colors hover:border-accent/40 hover:text-accent"
          aria-expanded={pipelineExpanded}
        >
          {pipelineExpanded ? t.hidePipeline : t.viewPipeline}
          <motion.span animate={{ rotate: pipelineExpanded ? 180 : 0 }} className="text-accent" aria-hidden>
            ▾
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {pipelineExpanded ? (
          <motion.div
            key="pipeline-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 pb-4">
              <LeadSourceRow channels={channels} channelIcons={CHANNEL_ICONS} compact />
              <p className="mt-2 mb-6 text-center text-[10px] text-[var(--software-text-muted)]">{t.funnelLegend}</p>
              <div className="grid gap-5 lg:grid-cols-2">
                <BrokenFlowDiagram
                  channels={channels}
                  brokenStages={brokenStages}
                  activeStep={activeFunnelStep}
                  label={t.brokenLabel}
                  funnelCopy={funnelCopy}
                  compact
                  hideChannels
                />
                <AIPoweredFlowDiagram
                  channels={channels}
                  aiStages={aiStages}
                  activeStep={activeFunnelStep}
                  label={t.aiFlowLabel}
                  funnelCopy={funnelCopy}
                  compact
                  hideChannels
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default ClientJourneyDemo
