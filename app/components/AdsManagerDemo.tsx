'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { FLOW_STEP_ADS_ANCHOR, getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
import type { AdsCampaignRowT } from '@/app/i18n/aiEmployeeProductDemos'

const PLATFORM_STYLE: Record<
  AdsCampaignRowT['platform'],
  { chip: string; dot: string }
> = {
  meta: { chip: 'bg-[#1877F2]/15 text-[#1877F2] border-[#1877F2]/25', dot: 'bg-[#1877F2]' },
  google: { chip: 'bg-blue-500/15 text-blue-600 border-blue-500/25', dot: 'bg-blue-500' },
  instagram: {
    chip: 'bg-gradient-to-r from-pink-500/15 to-amber-400/15 text-rose-600 border-rose-400/30',
    dot: 'bg-gradient-to-br from-pink-500 to-amber-400',
  },
  linkedin: { chip: 'bg-[#0A66C2]/15 text-[#0A66C2] border-[#0A66C2]/25', dot: 'bg-[#0A66C2]' },
  tiktok: { chip: 'bg-slate-800/10 text-slate-800 border-slate-500/25', dot: 'bg-slate-900' },
}

const STATUS_STYLE: Record<AdsCampaignRowT['status'], string> = {
  active: 'bg-success/12 text-success border-success/30',
  paused: 'bg-muted/15 text-muted border-border',
  learning: 'bg-warning/12 text-warning border-warning/30',
}

type TabFilter = 'all' | 'active' | 'paused'

export default function AdsManagerDemo() {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.adsManager
  const isRtl = language === 'ar'

  const [tab, setTab] = useState<TabFilter>('all')
  const [query, setQuery] = useState('')
  const [highlightId, setHighlightId] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [started, setStarted] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return t.campaigns.filter((c) => {
      if (tab === 'active' && c.status !== 'active' && c.status !== 'learning') return false
      if (tab === 'paused' && c.status !== 'paused') return false
      if (!q) return true
      return (
        c.name.toLowerCase().includes(q) ||
        c.audience.toLowerCase().includes(q) ||
        t.platforms[c.platform].toLowerCase().includes(q)
      )
    })
  }, [t.campaigns, t.platforms, tab, query])

  const pulseOptimize = useCallback(() => {
    const top = t.campaigns.find((c) => c.status === 'active')
    if (!top) return
    setHighlightId(top.id)
    setToast(t.optimizeToast)
    window.setTimeout(() => setToast(null), 2400)
    window.setTimeout(() => setHighlightId(null), 3200)
  }, [t.campaigns, t.optimizeToast])

  useEffect(() => {
    if (!started) return
    const id = window.setInterval(pulseOptimize, 5200)
    return () => window.clearInterval(id)
  }, [started, pulseOptimize])

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  return (
    <SoftwareDemoSection
      step={6}
      anchorId={FLOW_STEP_ADS_ANCHOR}
      journeyPhase={getJourneyPhaseTitle(language, 6)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="ads-manager-title"
      titleLayout="inline"
      activeNav="adsManager"
      moduleTitle={sw.nav.adsManager}
      className={isRtl ? '[direction:rtl]' : ''}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        onViewportEnter={() => setStarted(true)}
        className="relative"
      >
        <div className="flex flex-col gap-3 border-b border-[var(--software-border)] p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <div className="flex items-center gap-2 text-xs text-[var(--software-text-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.dashboardSubtitle}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="text-[11px] px-3 py-2 rounded-lg border border-border bg-surface/50 hover:bg-surface-light/80"
            >
              {t.syncLabel}
            </button>
            <button
              type="button"
              className="text-[11px] px-4 py-2 rounded-lg bg-accent text-background font-semibold hover:opacity-90 shadow-md shadow-accent/20"
            >
              {t.createBtn}
            </button>
          </div>
        </div>

        <div className="border-b border-[var(--software-border)] px-4 py-3 md:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  ['all', t.allTab],
                  ['active', t.activeTab],
                  ['paused', t.pausedTab],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={`text-[11px] px-2.5 py-1.5 rounded-lg border font-medium transition-colors ${
                    tab === id
                      ? 'border-accent/40 bg-accent/10 text-accent'
                      : 'border-border bg-surface/40 text-muted hover:text-text'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-border bg-surface/40 px-2.5 py-1.5 sm:max-w-xs">
              <svg className="h-3.5 w-3.5 shrink-0 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-[11px] text-text outline-none placeholder:text-muted"
              />
            </label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[11px] sm:text-xs">
            <thead>
              <tr className="border-b border-[var(--software-border)] bg-surface/30 text-[10px] font-semibold uppercase tracking-wider text-muted">
                <th className="px-4 py-2.5 md:px-5">{t.headers.campaign}</th>
                <th className="px-3 py-2.5">{t.headers.platform}</th>
                <th className="px-3 py-2.5">{t.headers.status}</th>
                <th className="px-3 py-2.5 text-right">{t.headers.spend}</th>
                <th className="px-3 py-2.5 text-right">{t.headers.roas}</th>
                <th className="px-3 py-2.5 text-right">{t.headers.leads}</th>
                <th className="hidden px-4 py-2.5 md:table-cell lg:px-5">{t.headers.audience}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => {
                const plat = PLATFORM_STYLE[row.platform]
                const isHot = row.id === highlightId
                return (
                  <motion.tr
                    key={row.id}
                    layout
                    animate={
                      isHot
                        ? {
                            backgroundColor: [
                              'rgba(var(--accent-rgb), 0.06)',
                              'rgba(var(--accent-rgb), 0.12)',
                              'rgba(var(--accent-rgb), 0.06)',
                            ],
                          }
                        : { backgroundColor: 'transparent' }
                    }
                    transition={{ duration: 0.5 }}
                    className="border-b border-[var(--software-border)]/80 hover:bg-surface/40"
                  >
                    <td className="px-4 py-3 font-semibold text-text md:px-5">
                      <span className="line-clamp-2">{row.name}</span>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-semibold ${plat.chip}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${plat.dot}`} aria-hidden />
                        {t.platforms[row.platform]}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${STATUS_STYLE[row.status]}`}
                      >
                        {t.statuses[row.status]}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-text">{row.spend}</td>
                    <td className="px-3 py-3 text-right tabular-nums font-semibold text-success">{row.roas}</td>
                    <td className="px-3 py-3 text-right tabular-nums font-semibold text-text">{row.leads}</td>
                    <td className="hidden px-4 py-3 text-muted md:table-cell lg:px-5">
                      <span className="line-clamp-1">{row.audience}</span>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute bottom-4 left-1/2 z-10 max-w-[90vw] -translate-x-1/2 truncate whitespace-nowrap rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background shadow-lg shadow-accent/25"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SoftwareDemoSection>
  )
}
