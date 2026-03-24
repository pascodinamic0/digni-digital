'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

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

const CHANNEL_ICONS: Record<string, string> = {
  ads: '📢',
  website: '🌐',
  instagram: '📸',
  whatsapp: '💬',
  phone: '📞',
}
const BROKEN_STAGE_ICONS = ['📢', '📵', '❓', '📅', '📬', '❌', '🔄']
const AI_STAGE_ICONS = ['📥', '⚡', '✓', '📅', '🔄', '✅', '🔄']

// Funnel: lead counts (example of 100 leads). Broken: realistic bounces at every stage until cycle breaks.
const BROKEN_FUNNEL = [100, 38, 12, 5, 2, 1, 0] // 62 lost first contact, 26 qualification, 7 booking, 3 follow-up, 1 outcome, 0 referrals
// AI: bulletproof automation, zero drop, higher conversion, referrals add to loop
const AI_FUNNEL = [100, 100, 100, 100, 100, 95, 118] // no drop → 95 close → +23 referrals

type ChannelItem = { id: string; label: string; icon: string }
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
}

function VisualFunnel({
  stages,
  counts,
  channels,
  channelIcons,
  variant,
  activeStep = 0,
  funnelCopy,
}: {
  stages: FunnelStage[]
  counts: number[]
  channels: ChannelItem[]
  channelIcons: Record<string, string>
  variant: 'broken' | 'ai'
  activeStep?: number
  funnelCopy: FunnelCopy
}) {
  const isBroken = variant === 'broken'
  const totalLayers = stages.length
  const elaboration = (s: FunnelStage) => (isBroken ? s.leak : s.win)
  const lineColor = isBroken ? 'rgba(var(--destructive-rgb), 0.5)' : 'rgba(var(--success-rgb), 0.5)'

  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Channel sources: horizontal scroll on narrow screens so icons never compress */}
      <div
        className={`w-full flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 overflow-x-auto overflow-y-visible pb-0.5 pt-1 -mx-1 px-1 scroll-smooth [scrollbar-width:thin] relative ${!isBroken ? 'mb-1' : ''}`}
        role="list"
        aria-label="Lead sources"
      >
        {channels.map((ch) => (
          <motion.div
            key={ch.id}
            role="listitem"
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl px-3 py-3 min-w-[5.75rem] max-w-[6.5rem] shrink-0 snap-start relative z-10 transition-all ${
              isBroken
                ? 'bg-destructive/[0.07] border border-destructive/20 shadow-sm shadow-destructive/5'
                : 'bg-success/[0.08] border border-success/25 shadow-md shadow-success/5 backdrop-blur-sm'
            }`}
          >
            <span className="text-[1.6rem] sm:text-[1.75rem] leading-none select-none" aria-hidden>
              {channelIcons[ch.id] ?? ch.icon}
            </span>
            <span
              className={`text-[10px] sm:text-[11px] font-semibold text-center leading-tight line-clamp-2 ${isBroken ? 'text-foreground/90' : 'text-success'}`}
            >
              {ch.label}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-[11px] sm:text-xs text-center text-muted-foreground leading-snug max-w-md mx-auto mt-3 mb-px px-1">
        {funnelCopy.legend}
      </p>

      {/* Animated lines: channels flow into Intake */}
      <div className="w-full h-8 relative flex justify-center pointer-events-none mt-1" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[10, 30, 50, 70, 90].map((x, i) => (
            <motion.path
              key={i}
              d={`M ${x} 0 Q 50 60 50 100`}
              fill="none"
              stroke={lineColor}
              strokeWidth="0.8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.2, delay: i * 0.08 }}
            />
          ))}
        </svg>
      </div>

      {/* Column headers: pipeline + delta (stacked on mobile; delta hides here — shown per row on small screens) */}
      <div className="w-full flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2 mb-1.5 mt-1">
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
      <div className="relative w-full flex flex-col" style={{ gap: 0 }}>
        {stages.map((stage, i) => {
          const count = counts[i] ?? 0
          const nextCount = counts[i + 1] ?? count
          const drop = count - nextCount
          // Broken: no drop at step 1 — leads just arrived. AI: no drop anywhere (automation captures all).
          const displayDrop = variant === 'broken' && i === 0 ? 0 : drop
          const layerClip = funnelPolygon(i, totalLayers)
          const showSectionBreak = (FUNNEL_SECTION_AT as readonly number[]).includes(i)
          const sectionLabel = showSectionBreak ? funnelSectionLabel(i, funnelCopy) : null
          const isLastTwoTiers = i >= totalLayers - 2
          const bandHeightClass = isLastTwoTiers ? BAND_HEIGHT_LAST_CLASS : BAND_HEIGHT_CLASS
          const isActive = i === activeStep
          // Broken journey: only step 1 (Lead Arrives) is green — no drop yet. Red from First Contact onward (manual response delays, etc.)
          const isGreenBand = !isBroken || i === 0

          return (
            <div key={stage.step} className="flex flex-col" style={{ gap: 0 }}>
              {showSectionBreak && sectionLabel && (
                <div
                  className={`grid grid-cols-[1fr_auto_1fr] items-center gap-3 w-full py-1.5 ${!isBroken ? 'py-2' : ''}`}
                  style={{ minHeight: 28 }}
                >
                  <div
                    className={`h-px w-full ${!isBroken ? 'bg-success/30' : ''}`}
                    style={isBroken ? { background: 'rgba(var(--destructive-rgb), 0.4)' } : {}}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap px-3 py-1 rounded-lg ${isBroken ? 'text-destructive' : 'text-success bg-success/10 border border-success/20'}`}
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
                className={`relative flex flex-col sm:flex-row items-stretch gap-1.5 sm:gap-2 ${!isBroken ? 'sm:rounded-xl sm:overflow-hidden' : ''}`}
                animate={isActive ? { scale: [1, 1.01, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className={`relative flex-1 min-w-0 flex flex-col items-center justify-center text-center px-2 sm:px-3 py-2 sm:py-0 overflow-hidden ${bandHeightClass} ${displayDrop !== 0 ? 'order-2 sm:order-1' : ''} ${!isBroken && isActive ? 'shadow-lg shadow-success/20' : ''}`}
                  style={{
                    clipPath: layerClip,
                    WebkitClipPath: layerClip,
                    background: isBroken
                      ? (isGreenBand
                        ? (isActive ? 'linear-gradient(180deg, rgba(var(--success-rgb), 0.35) 0%, rgba(var(--success-rgb), 0.2) 100%)' : 'linear-gradient(180deg, rgba(var(--success-rgb), 0.22) 0%, rgba(var(--success-rgb), 0.12) 100%)')
                        : (isActive ? 'linear-gradient(180deg, rgba(var(--destructive-rgb), 0.35) 0%, rgba(var(--destructive-rgb), 0.2) 100%)' : 'linear-gradient(180deg, rgba(var(--destructive-rgb), 0.22) 0%, rgba(var(--destructive-rgb), 0.12) 100%)'))
                      : (isActive
                        ? 'linear-gradient(135deg, rgba(var(--success-rgb), 0.25) 0%, rgba(var(--success-rgb), 0.12) 50%, rgba(var(--success-rgb), 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(var(--success-rgb), 0.12) 0%, rgba(var(--success-rgb), 0.06) 100%)'),
                    border: `2px solid ${isBroken ? (isGreenBand ? (isActive ? 'rgba(var(--success-rgb), 0.7)' : 'rgba(var(--success-rgb), 0.45)') : (isActive ? 'rgba(var(--destructive-rgb), 0.7)' : 'rgba(var(--destructive-rgb), 0.45)')) : (isActive ? 'rgba(var(--success-rgb), 0.5)' : 'rgba(var(--success-rgb), 0.25)')}`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-center gap-1 sm:gap-1.5 w-full leading-tight">
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${!isBroken ? (isActive ? 'bg-success/40 text-success' : 'bg-success/20 text-success/90') : 'bg-foreground/15 text-foreground'}`}
                        aria-hidden
                      >
                        {stage.step}
                      </span>
                      <span className="text-lg sm:text-base leading-none select-none" aria-hidden>
                        {stage.icon}
                      </span>
                      <span className={`font-semibold text-sm sm:text-sm text-left sm:text-center ${isGreenBand ? 'text-success' : 'text-destructive'}`}>
                        {stage.title}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1 flex-wrap">
                      <AnimatedCount
                        value={count}
                        isActive={isActive}
                        suffix=""
                        className={`text-base sm:text-sm font-mono tabular-nums font-bold ${isGreenBand ? 'text-success' : 'text-destructive'}`}
                      />
                      <span className={`text-[10px] sm:text-xs font-medium uppercase tracking-wide ${isGreenBand ? 'text-success/80' : 'text-destructive/80'}`}>
                        {funnelCopy.leadsUnit}
                      </span>
                    </div>
                  </div>
                  {elaboration(stage) && (
                    <p className={`text-[11px] sm:text-xs leading-snug mt-1 max-w-full px-1 font-medium ${isGreenBand ? (isBroken ? 'text-success' : 'text-success/90') : 'text-destructive'}`}>
                      {elaboration(stage)}
                    </p>
                  )}
                </motion.div>
                {displayDrop !== 0 && (
                  <div
                    className={`
                      order-1 sm:order-2 flex-shrink-0 w-full sm:w-14 min-h-0 sm:self-stretch
                      flex flex-row sm:flex-col items-center justify-between sm:items-end sm:justify-center gap-2 sm:gap-0.5
                      px-2.5 py-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0
                      ${displayDrop > 0
                        ? isBroken
                          ? 'border-destructive/25 bg-destructive/10 sm:bg-transparent sm:border-0'
                          : 'border-border/30 bg-muted/30 sm:bg-transparent sm:border-0'
                        : ''}
                      ${displayDrop < 0 && !isBroken ? 'border-success/25 bg-success/10 sm:bg-transparent sm:border-0' : ''}
                    `}
                  >
                    {displayDrop > 0 && (
                      <>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-foreground/80 sm:text-foreground/70 sm:font-semibold sm:text-right leading-tight">
                          {funnelCopy.lostBadge}
                        </span>
                        <motion.span
                          className={`inline-flex items-baseline gap-1 text-sm font-bold tabular-nums sm:flex sm:flex-col sm:items-end ${isGreenBand ? 'text-muted-foreground' : 'text-destructive'}`}
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
                )}
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
}: {
  channels: ChannelItem[]
  brokenStages: BrokenStageItem[]
  activeStep: number
  label: string
  funnelCopy: FunnelCopy
}) {
  const funnelStages: FunnelStage[] = brokenStages.map((s, i) => ({
    step: s.step,
    title: s.title,
    icon: BROKEN_STAGE_ICONS[i],
    leak: s.leak,
  }))
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl border-2 border-destructive/35 bg-gradient-to-b from-destructive/10 via-surface/90 to-destructive/5 p-5 xl:p-6 overflow-hidden flex flex-col min-h-0 shadow-xl shadow-destructive/5 ring-1 ring-destructive/10"
    >
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-destructive/20 text-destructive text-[10px] font-bold rounded-full border border-destructive/30">
        LEAKS EVERYWHERE
      </div>
      <div className="text-center mb-4 min-h-[1.5rem] flex items-center justify-center">
        <span className="text-destructive text-sm font-bold">❌ {label}</span>
      </div>
      <VisualFunnel
        stages={funnelStages}
        counts={BROKEN_FUNNEL}
        channels={channels}
        channelIcons={CHANNEL_ICONS}
        variant="broken"
        activeStep={activeStep}
        funnelCopy={funnelCopy}
      />
      <div className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-destructive/5 border border-dashed border-destructive/40">
        <span className="text-destructive text-2xl">↻</span>
        <span className="text-destructive/80 text-xs font-medium">Cycle breaks. No referrals.</span>
      </div>
    </motion.div>
  )
}

function AIPoweredFlowDiagram({
  channels,
  aiStages,
  activeStep,
  label,
  funnelCopy,
}: {
  channels: ChannelItem[]
  aiStages: AIStageItem[]
  activeStep: number
  label: string
  funnelCopy: FunnelCopy
}) {
  const funnelStages: FunnelStage[] = aiStages.map((s, i) => ({
    step: s.step,
    title: s.title,
    icon: AI_STAGE_ICONS[i],
    win: s.win,
  }))
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="relative rounded-3xl border-2 border-success/35 bg-gradient-to-b from-success/10 via-surface/90 to-success/5 p-5 xl:p-6 overflow-hidden flex flex-col min-h-0 shadow-xl shadow-success/10 ring-1 ring-success/15"
    >
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-success/20 text-success text-[10px] font-bold rounded-full border border-success/30 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        AI HANDLES ALL
      </div>
      <div className="text-center mb-4 min-h-[1.5rem] flex items-center justify-center">
        <span className="text-success text-sm font-bold">✅ {label}</span>
      </div>
      <VisualFunnel
        stages={funnelStages}
        counts={AI_FUNNEL}
        channels={channels}
        channelIcons={CHANNEL_ICONS}
        variant="ai"
        activeStep={activeStep}
        funnelCopy={funnelCopy}
      />
      <div className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-success/5 border-2 border-success/30">
        <span className="text-success text-2xl animate-pulse">↻</span>
        <span className="text-success/90 text-xs font-semibold">Referrals → New leads → Loop repeats.</span>
        <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </motion.div>
  )
}

const FUNNEL_STEP_INTERVAL_MS = 2800

const ClientJourneyDemo = () => {
  const [activeView, setActiveView] = useState<'before' | 'after'>('before')
  const [activeFunnelStep, setActiveFunnelStep] = useState(0)
  const language = useLanguage()
  const t = translations[language].clientJourney
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
  }
  const channels: ChannelItem[] = t.channels.map((c) => ({ ...c, icon: CHANNEL_ICONS[c.id] ?? '📩' }))
  const brokenStages: BrokenStageItem[] = t.brokenStages.map((s, i) => ({ ...s, icon: BROKEN_STAGE_ICONS[i] }))
  const aiStages: AIStageItem[] = t.aiStages.map((s, i) => ({ ...s, icon: AI_STAGE_ICONS[i] }))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFunnelStep((prev) => (prev + 1) % 7)
    }, FUNNEL_STEP_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-surface to-background" aria-labelledby="journey-demo-title">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            id="journey-demo-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t.title}<br />
            <span className="gradient-text">{t.subtitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            {t.subtext}
          </motion.p>

          {/* Toggle - Mobile/Tablet (switch between Broken / AI Flow) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center my-8 lg:my-10 lg:hidden"
          >
            <div
              role="group"
              aria-label="Toggle journey view"
              className="inline-flex p-2 rounded-2xl bg-surface border-2 border-border shadow-lg shadow-foreground/5 lg:shadow-xl"
            >
              <button
                onClick={() => setActiveView('before')}
                className={`px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 touch-manipulation ${
                  activeView === 'before'
                    ? 'bg-destructive/25 text-destructive border-2 border-destructive shadow-md'
                    : 'text-muted hover:text-text hover:bg-foreground/5'
                }`}
                aria-pressed={activeView === 'before'}
              >
                ❌ {t.brokenLabel}
              </button>
              <button
                onClick={() => setActiveView('after')}
                className={`px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 touch-manipulation ${
                  activeView === 'after'
                    ? 'bg-success/25 text-success border-2 border-success shadow-md'
                    : 'text-muted hover:text-text hover:bg-foreground/5'
                }`}
                aria-pressed={activeView === 'after'}
              >
                ✅ {t.aiFlowLabel}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Desktop: Side-by-side, scaled down so the block is smaller without affecting inner sections.
            scale-[0.72] only affects paint; layout still reserves full height. Compensate with negative margin (~28% of content height). */}
        <div className="hidden lg:block origin-top -mt-6 -mb-[200px]">
          <motion.div
            className="grid grid-cols-2 gap-6 xl:gap-8 scale-[0.72]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <BrokenFlowDiagram
              channels={channels}
              brokenStages={brokenStages}
              activeStep={activeFunnelStep}
              label={t.brokenLabel}
              funnelCopy={funnelCopy}
            />
            <AIPoweredFlowDiagram
              channels={channels}
              aiStages={aiStages}
              activeStep={activeFunnelStep}
              label={t.aiFlowLabel}
              funnelCopy={funnelCopy}
            />
          </motion.div>
        </div>

        <div className="lg:hidden px-0 sm:px-2">
          <AnimatePresence mode="wait">
            {activeView === 'before' ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl sm:rounded-3xl border-2 border-destructive/35 bg-gradient-to-b from-destructive/10 via-surface/95 to-destructive/5 p-4 sm:p-6 overflow-visible shadow-lg shadow-destructive/10 ring-1 ring-destructive/10">
                  <div className="flex flex-col sm:flex-row sm:relative items-center sm:block mb-4">
                    <div className="text-center sm:text-center mb-2 sm:mb-0">
                      <span className="text-destructive text-sm font-bold">❌ {t.brokenLabel}</span>
                    </div>
                    <div className="sm:absolute sm:top-4 sm:right-4 px-2.5 py-1 bg-destructive/20 text-destructive text-[10px] font-bold rounded-full border border-destructive/30">
                      99 OF 100 LOST
                    </div>
                  </div>
                  <VisualFunnel
                    stages={brokenStages.map((s, i) => ({ step: s.step, title: s.title, icon: BROKEN_STAGE_ICONS[i], leak: s.leak }))}
                    counts={BROKEN_FUNNEL}
                    channels={channels}
                    channelIcons={CHANNEL_ICONS}
                    variant="broken"
                    activeStep={activeFunnelStep}
                    funnelCopy={funnelCopy}
                  />
                  <div className="mt-4 flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl bg-destructive/5 border border-dashed border-destructive/40">
                    <span className="text-destructive text-xl sm:text-2xl">↻</span>
                    <span className="text-destructive/80 text-[11px] sm:text-xs font-medium text-center">Cycle breaks. No referrals.</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl shadow-success/5 border border-success/25 bg-gradient-to-b from-success/[0.09] via-surface to-success/[0.03] ring-1 ring-success/10">
                  {/* Header */}
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success/30 to-success/10 flex items-center justify-center text-lg shadow-lg shadow-success/20">
                        ✅
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground">{t.aiFlowLabel}</h3>
                        <p className="text-[11px] text-success font-medium tracking-wide">Zero drop</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-success/15 border border-success/25 shadow-inner">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-lg shadow-success/50" />
                      <span className="text-xs font-bold text-success tracking-tight">0 DROP · 95 CLOSED</span>
                    </div>
                  </div>
                  <VisualFunnel
                    stages={aiStages.map((s, i) => ({ step: s.step, title: s.title, icon: AI_STAGE_ICONS[i], win: s.win }))}
                    counts={AI_FUNNEL}
                    channels={channels}
                    channelIcons={CHANNEL_ICONS}
                    variant="ai"
                    activeStep={activeFunnelStep}
                    funnelCopy={funnelCopy}
                  />
                  {/* Footer - Referral loop */}
                  <div className="mt-6 flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-gradient-to-r from-success/15 via-success/10 to-success/15 border border-success/20 shadow-inner">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <span className="text-success text-xl animate-pulse">↻</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">Referrals → Leads → Loop.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ClientJourneyDemo
