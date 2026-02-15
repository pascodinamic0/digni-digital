'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/config/translations'

const CHANNEL_ICONS: Record<string, string> = {
  ads: '📢',
  website: '🌐',
  instagram: '📸',
  whatsapp: '💬',
  phone: '📞',
}
const BROKEN_STAGE_ICONS = ['📢', '📵', '❓', '📅', '📬', '❌', '🔄']
const AI_STAGE_ICONS = ['📥', '⚡', '✓', '📅', '🔄', '✅', '🔄']

function StageCard({
  step,
  title,
  icon,
  description,
  callout,
  isBroken,
}: {
  step: number
  title: string
  icon: string
  description: string
  callout?: string
  isBroken: boolean
}) {
  return (
    <div className={`p-4 sm:p-4 rounded-xl border ${
      isBroken ? 'bg-surface border-destructive/30' : 'bg-surface border-success/30'
    }`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
          isBroken ? 'bg-destructive/20 text-destructive' : 'bg-success/20 text-success'
        }`}>
          {step}
        </span>
        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg" aria-hidden>{icon}</span>
            <span className={`font-semibold text-sm sm:text-sm ${isBroken ? 'text-destructive' : 'text-success'}`}>
              {title}
            </span>
          </div>
          <p className="text-muted text-xs sm:text-xs mt-1.5 leading-relaxed break-words">{description}</p>
          {callout && (
            <p className={`text-xs sm:text-[10px] mt-2 italic break-words ${isBroken ? 'text-destructive/80' : 'text-success/80'}`}>
              → {callout}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

type ChannelItem = { id: string; label: string; icon: string }
type BrokenStageItem = { step: number; title: string; icon: string; description: string; leak: string }
type AIStageItem = { step: number; title: string; icon: string; description: string; win: string }

function BrokenFlowDiagram({ channels, brokenStages }: { channels: ChannelItem[]; brokenStages: BrokenStageItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-5 xl:p-6 overflow-hidden"
    >
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-destructive/20 text-destructive text-[10px] font-bold rounded-full border border-destructive/30">
        LEAKS EVERYWHERE
      </div>
      <div className="text-center mb-4">
        <span className="text-destructive text-sm font-bold">❌ Broken Journey</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {channels.map((ch) => (
          <div key={ch.id} className="flex flex-col items-center p-2 rounded-lg bg-surface border border-destructive/20 min-w-[52px] sm:min-w-[60px]">
            <span className="text-base sm:text-lg">{ch.icon}</span>
            <span className="text-[10px] sm:text-[9px] text-muted text-center leading-tight">{ch.label}</span>
          </div>
        ))}
      </div>
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {brokenStages.map((stage) => (
          <StageCard key={stage.step} {...stage} isBroken={true} callout={stage.leak} />
        ))}
      </div>
      {/* Loop broken - no continuity */}
      <div className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-destructive/5 border border-dashed border-destructive/40">
        <span className="text-destructive text-2xl">↻</span>
        <span className="text-destructive/80 text-xs font-medium">Cycle breaks. No referrals. Start over with more ad spend.</span>
      </div>
    </motion.div>
  )
}

function AIPoweredFlowDiagram({ channels, aiStages }: { channels: ChannelItem[]; aiStages: AIStageItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="relative rounded-3xl border-2 border-success/30 bg-success/5 p-5 xl:p-6 overflow-hidden"
    >
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-success/20 text-success text-[10px] font-bold rounded-full border border-success/30 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        AI HANDLES ALL
      </div>
      <div className="text-center mb-4">
        <span className="text-success text-sm font-bold">✅ AI-Powered Journey</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {channels.map((ch) => (
          <div key={ch.id} className="flex flex-col items-center p-2 rounded-lg bg-surface border border-success/20 min-w-[52px] sm:min-w-[55px]">
            <span className="text-base sm:text-base">{ch.icon}</span>
            <span className="text-[10px] sm:text-[9px] text-muted text-center leading-tight">{ch.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-success text-xs sm:text-sm font-medium mb-4 text-center px-2">
        ↓ All channels flow into one system ↓
      </div>
      <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-accent/20 to-purple/10 border-2 border-accent/40 mb-4">
        <span className="text-accent text-xs font-bold">AI RECEPTIONIST</span>
        <p className="text-text text-xs font-semibold mt-0.5">Single brain. One inbox.</p>
      </div>
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {aiStages.map((stage) => (
          <StageCard key={stage.step} {...stage} isBroken={false} callout={stage.win} />
        ))}
      </div>
      {/* Loop continues - referrals feed new leads */}
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

const ClientJourneyDemo = () => {
  const [activeView, setActiveView] = useState<'before' | 'after'>('before')
  const { language } = useLanguage()
  const t = translations[language].clientJourney
  const channels: ChannelItem[] = t.channels.map((c) => ({ ...c, icon: CHANNEL_ICONS[c.id] }))
  const brokenStages: BrokenStageItem[] = t.brokenStages.map((s, i) => ({ ...s, icon: BROKEN_STAGE_ICONS[i] }))
  const aiStages: AIStageItem[] = t.aiStages.map((s, i) => ({ ...s, icon: AI_STAGE_ICONS[i] }))

  return (
    <section className="py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-surface to-background" aria-labelledby="journey-demo-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
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
            See the Difference.<br />
            <span className="gradient-text">Broken vs. Complete.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-2xl mx-auto mb-8"
          >
            The same lead. The same channels. One journey falls apart. The other closes the deal.
          </motion.p>

          {/* Toggle - Mobile/Tablet only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex p-1.5 rounded-2xl bg-surface border border-white/10 lg:hidden min-h-[44px]"
          >
            <button
              onClick={() => setActiveView('before')}
              className={`px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm transition-all duration-300 touch-manipulation ${
                activeView === 'before'
                  ? 'bg-destructive/20 text-destructive border border-destructive/30'
                  : 'text-muted hover:text-text'
              }`}
              aria-pressed={activeView === 'before'}
            >
              ❌ Broken
            </button>
            <button
              onClick={() => setActiveView('after')}
              className={`px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm transition-all duration-300 touch-manipulation ${
                activeView === 'after'
                  ? 'bg-success/20 text-success border border-success/30'
                  : 'text-muted hover:text-text'
              }`}
              aria-pressed={activeView === 'after'}
            >
              ✅ AI Flow
            </button>
          </motion.div>
        </div>

        {/* Desktop: Side-by-side | Mobile: Toggle */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 xl:gap-8">
          <BrokenFlowDiagram channels={channels} brokenStages={brokenStages} />
          <AIPoweredFlowDiagram channels={channels} aiStages={aiStages} />
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
                      LEAKS EVERYWHERE
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {channels.map((ch) => (
                      <div
                        key={ch.id}
                        className="flex flex-col items-center p-1.5 sm:p-2 rounded-lg bg-surface border border-destructive/20 min-w-[48px] sm:min-w-[60px]"
                      >
                        <span className="text-base sm:text-lg">{ch.icon}</span>
                        <span className="text-[10px] sm:text-[9px] text-muted text-center leading-tight mt-0.5">{ch.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {brokenStages.map((stage) => (
                      <StageCard key={stage.step} {...stage} isBroken={true} callout={stage.leak} />
                    ))}
                  </div>
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
                <div className="relative rounded-2xl sm:rounded-3xl border-2 border-success/30 bg-success/5 p-4 sm:p-6 overflow-visible">
                  <div className="flex flex-col sm:flex-row sm:relative items-center sm:block mb-4">
                    <div className="text-center sm:text-center mb-2 sm:mb-0">
                      <span className="text-success text-sm font-bold">✅ AI-Powered Journey</span>
                    </div>
                    <div className="sm:absolute sm:top-4 sm:right-4 px-2.5 py-1 bg-success/20 text-success text-[10px] font-bold rounded-full border border-success/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      AI HANDLES ALL
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3">
                    {channels.map((ch) => (
                      <div
                        key={ch.id}
                        className="flex flex-col items-center p-1.5 sm:p-2 rounded-lg bg-surface border border-success/20 min-w-[48px] sm:min-w-[55px]"
                      >
                        <span className="text-base sm:text-base">{ch.icon}</span>
                        <span className="text-[10px] sm:text-[9px] text-muted text-center leading-tight mt-0.5">{ch.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center text-success text-xs sm:text-sm font-medium mb-3 text-center px-1">
                    ↓ All channels → One system ↓
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-accent/20 to-purple/10 border-2 border-accent/40 mb-4">
                    <span className="text-accent text-xs font-bold">AI RECEPTIONIST</span>
                    <p className="text-text text-xs font-semibold mt-0.5">Single brain. One inbox.</p>
                  </div>
                  <div className="space-y-3">
                    {aiStages.map((stage) => (
                      <StageCard key={stage.step} {...stage} isBroken={false} callout={stage.win} />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl bg-success/5 border-2 border-success/30">
                    <span className="text-success text-xl sm:text-2xl animate-pulse">↻</span>
                    <span className="text-success/90 text-[11px] sm:text-xs font-semibold text-center">Referrals → New leads → Cycle repeats.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm max-w-xl mx-auto">
            Same leads. Same channels. The difference is infrastructure. 
            One path leaks at every step. The other is a closed loop—fully automated and AI-powered.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientJourneyDemo
