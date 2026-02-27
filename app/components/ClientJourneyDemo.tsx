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
const FUNNEL_SECTION_LABELS: Record<number, string> = {
  0: 'Intake',
  2: 'Conversion',
  5: 'Outcome & loop',
}

// Band heights: enlarged so all text has room; last two tiers taller for Outcome & loop.
const BAND_HEIGHT_PX = 76
const BAND_HEIGHT_LAST_TIERS_PX = 100

type FunnelStage = { step: number; title: string; icon: string; description?: string; leak?: string; win?: string }

function VisualFunnel({
  stages,
  counts,
  channels,
  channelIcons,
  variant,
  activeStep = 0,
}: {
  stages: FunnelStage[]
  counts: number[]
  channels: ChannelItem[]
  channelIcons: Record<string, string>
  variant: 'broken' | 'ai'
  activeStep?: number
}) {
  const isBroken = variant === 'broken'
  const totalLayers = stages.length
  const elaboration = (s: FunnelStage) => (isBroken ? s.leak : s.win)
  const lineColor = isBroken ? 'rgba(var(--destructive-rgb), 0.5)' : 'rgba(var(--success-rgb), 0.5)'

  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Channel icons above funnel */}
      <div className={`w-full grid grid-cols-[repeat(5,minmax(0,1fr))] sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-1 relative ${!isBroken ? 'mb-3' : ''}`}>
        {channels.map((ch, idx) => (
          <motion.div
            key={ch.id}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center p-2 rounded-xl w-full min-w-0 sm:min-w-[52px] sm:w-auto relative z-10 transition-all ${
              isBroken
                ? 'bg-destructive/5 border border-destructive/25 shadow-sm'
                : 'bg-success/5 border border-success/20 shadow-md shadow-success/5 backdrop-blur-sm'
            }`}
          >
            <span className="text-xl sm:text-2xl leading-none">{channelIcons[ch.id] ?? ch.icon}</span>
            <span className={`text-[10px] font-medium text-center leading-tight mt-0.5 ${isBroken ? 'text-foreground/90' : 'text-success/90'}`}>{ch.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Animated lines: channels flow into Intake */}
      <div className="w-full h-8 relative flex justify-center pointer-events-none" aria-hidden>
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

      {/* Funnel header: aligned with band row (Lost / Referrals over column) */}
      <div className="w-full flex items-center gap-2 mb-1">
        <div className="flex-1 min-w-0" />
        <div className="flex-shrink-0 w-14 flex justify-end">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground/90">
            {isBroken ? 'Lost' : 'Net'}
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
          const sectionLabel = showSectionBreak ? FUNNEL_SECTION_LABELS[i] : null
          const isLastTwoTiers = i >= totalLayers - 2
          const bandHeight = isLastTwoTiers ? BAND_HEIGHT_LAST_TIERS_PX : BAND_HEIGHT_PX
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
                className={`relative flex items-stretch gap-2 ${!isBroken ? 'rounded-xl overflow-hidden' : ''}`}
                style={{ height: bandHeight, minHeight: bandHeight }}
                animate={isActive ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className={`relative flex-1 flex flex-col items-center justify-center text-center px-2 sm:px-3 overflow-hidden ${!isBroken && isActive ? 'shadow-lg shadow-success/20' : ''}`}
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
                    height: bandHeight,
                  }}
                >
                  <div className="flex items-center justify-center gap-1.5 flex-wrap leading-tight">
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 ${!isBroken ? (isActive ? 'bg-success/40 text-success' : 'bg-success/20 text-success/90') : 'bg-foreground/15 text-foreground'}`}
                      aria-hidden
                    >
                      {stage.step}
                    </span>
                    <span className="text-sm" aria-hidden>{stage.icon}</span>
                    <span className={`font-semibold text-sm ${isGreenBand ? 'text-success' : 'text-destructive'}`}>
                      {stage.title}
                    </span>
                    <AnimatedCount
                      value={count}
                      isActive={isActive}
                      suffix=" leads"
                      className={`text-sm font-mono tabular-nums font-medium ${isGreenBand ? 'text-success' : 'text-destructive'}`}
                    />
                  </div>
                  {elaboration(stage) && (
                    <p className={`text-xs leading-snug mt-0.5 max-w-full px-1 font-medium ${isGreenBand ? (isBroken ? 'text-success' : 'text-success/90') : 'text-destructive'}`}>
                      {elaboration(stage)}
                    </p>
                  )}
                </motion.div>
                <div
                  className="flex-shrink-0 w-14 flex flex-col items-end justify-center gap-0"
                  style={{ height: bandHeight }}
                >
                  {displayDrop > 0 && (
                    <>
                      <span className="text-[10px] font-semibold uppercase text-foreground/70">lost</span>
                      <motion.span
                        className={`text-sm font-bold tabular-nums ${isGreenBand ? 'text-muted-foreground' : 'text-destructive'}`}
                        animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        −<AnimatedCount value={displayDrop} isActive={isActive} suffix=" leads" />
                      </motion.span>
                    </>
                  )}
                  {displayDrop < 0 && (
                    <div className={!isBroken ? 'px-1.5 py-1 rounded-lg bg-success/15 border border-success/25' : ''}>
                      <span className={`text-[10px] font-semibold uppercase ${!isBroken ? 'text-success' : 'text-success'}`}>referral</span>
                      <motion.span
                        className={`block text-sm font-bold tabular-nums ${!isBroken ? 'text-success' : 'text-success'}`}
                        animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        +<AnimatedCount value={Math.abs(displayDrop)} isActive={isActive} suffix=" leads" />
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

function BrokenFlowDiagram({ channels, brokenStages, activeStep }: { channels: ChannelItem[]; brokenStages: BrokenStageItem[]; activeStep: number }) {
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
      className="relative rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-5 xl:p-6 overflow-hidden flex flex-col min-h-0"
    >
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-destructive/20 text-destructive text-[10px] font-bold rounded-full border border-destructive/30">
        LEAKS EVERYWHERE
      </div>
      <div className="text-center mb-4 min-h-[1.5rem] flex items-center justify-center">
        <span className="text-destructive text-sm font-bold">❌ Broken Journey</span>
      </div>
      <VisualFunnel
        stages={funnelStages}
        counts={BROKEN_FUNNEL}
        channels={channels}
        channelIcons={CHANNEL_ICONS}
        variant="broken"
        activeStep={activeStep}
      />
      <div className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-destructive/5 border border-dashed border-destructive/40">
        <span className="text-destructive text-2xl">↻</span>
        <span className="text-destructive/80 text-xs font-medium">Cycle breaks. No referrals. Start over with more ad spend.</span>
      </div>
    </motion.div>
  )
}

function AIPoweredFlowDiagram({ channels, aiStages, activeStep }: { channels: ChannelItem[]; aiStages: AIStageItem[]; activeStep: number }) {
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
      className="relative rounded-3xl border-2 border-success/30 bg-success/5 p-5 xl:p-6 overflow-hidden flex flex-col min-h-0"
    >
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-success/20 text-success text-[10px] font-bold rounded-full border border-success/30 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        AI HANDLES ALL
      </div>
      <div className="text-center mb-4 min-h-[1.5rem] flex items-center justify-center">
        <span className="text-success text-sm font-bold">✅ AI-Powered Journey</span>
      </div>
      <VisualFunnel
        stages={funnelStages}
        counts={AI_FUNNEL}
        channels={channels}
        channelIcons={CHANNEL_ICONS}
        variant="ai"
        activeStep={activeStep}
      />
      <div className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-success/5 border-2 border-success/30">
        <span className="text-success text-2xl animate-pulse">↻</span>
        <span className="text-success/90 text-xs font-semibold">Referrals → New leads → Cycle repeats. Growth compounds.</span>
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
            The Client Journey
          </motion.span>
          <motion.h2
            id="journey-demo-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            100 Leads. Same Channels.<br />
            <span className="gradient-text">Where They Bounce vs. Where They Thrive.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Example: 100 leads arrive. One path leaks at every stage until the cycle breaks. The other: fully automated, zero drop, higher conversion.
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
                ❌ Broken
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
                ✅ AI Flow
              </button>
            </div>
          </motion.div>
        </div>

        {/* Desktop: Side-by-side, scaled down so the block is smaller without affecting inner sections */}
        <div className="hidden lg:block origin-top -mt-6">
          <motion.div
            className="grid grid-cols-2 gap-6 xl:gap-8 scale-[0.72]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <BrokenFlowDiagram channels={channels} brokenStages={brokenStages} activeStep={activeFunnelStep} />
            <AIPoweredFlowDiagram channels={channels} aiStages={aiStages} activeStep={activeFunnelStep} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-muted text-sm max-w-xl mx-auto">
              Example: 100 leads. Left: bounces at every stage until the cycle breaks. Right: fully automated, zero drop, higher conversion, referrals feed the loop.
            </p>
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
                <div className="relative rounded-2xl sm:rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-4 sm:p-6 overflow-visible">
                  <div className="flex flex-col sm:flex-row sm:relative items-center sm:block mb-4">
                    <div className="text-center sm:text-center mb-2 sm:mb-0">
                      <span className="text-destructive text-sm font-bold">❌ Broken Journey</span>
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
                        <h3 className="font-display text-lg font-bold text-foreground">AI-Powered Journey</h3>
                        <p className="text-[11px] text-success font-medium tracking-wide">Zero drop · Full automation</p>
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
                  />
                  {/* Footer - Referral loop */}
                  <div className="mt-6 flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-gradient-to-r from-success/15 via-success/10 to-success/15 border border-success/20 shadow-inner">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <span className="text-success text-xl animate-pulse">↻</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">Referrals → New leads → Cycle repeats.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-muted text-sm max-w-xl mx-auto">
              Example: 100 leads. Left: bounces at every stage until the cycle breaks. Right: fully automated, zero drop, higher conversion, referrals feed the loop.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientJourneyDemo
