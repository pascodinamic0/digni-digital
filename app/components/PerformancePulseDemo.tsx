'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
import { translations } from '@/app/config/translations'
import SocialPlatformIcon from './SocialPlatformIcon'

type PlatformKey = 'google' | 'facebook' | 'instagram' | 'yelp' | 'whatsapp' | 'bing'

const PLATFORM_ORDER: PlatformKey[] = ['google', 'facebook', 'instagram', 'yelp', 'whatsapp', 'bing']

const PLATFORM_STYLES: Record<
  PlatformKey,
  { bar: string; label: string }
> = {
  google: { bar: 'from-blue-500 to-blue-600', label: 'bg-white text-[#4285F4]' },
  facebook: { bar: 'from-blue-700 to-blue-800', label: 'bg-[#1877F2] text-white' },
  instagram: { bar: 'from-pink-500 via-rose-500 to-amber-400', label: 'bg-gradient-to-br from-pink-500 to-amber-400 text-white' },
  yelp: { bar: 'from-red-500 to-red-600', label: 'bg-[#FF1A1A] text-white' },
  whatsapp: { bar: 'from-emerald-500 to-emerald-600', label: 'bg-[#25D366] text-white' },
  bing: { bar: 'from-cyan-500 to-blue-500', label: 'bg-[#008373] text-white' },
}

const RING_SIZE = 132
const RING_STROKE = 9
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2
const RING_CIRC = 2 * Math.PI * RING_RADIUS

function BlendedRing({ value }: { value: number }) {
  const pct = Math.min(100, Math.max(0, (value / 5) * 100))
  const offset = RING_CIRC - (pct / 100) * RING_CIRC
  return (
    <div className="relative shrink-0" style={{ width: RING_SIZE, height: RING_SIZE }}>
      <svg
        width={RING_SIZE}
        height={RING_SIZE}
        className="rotate-[-90deg]"
        aria-hidden
      >
        <circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={RING_STROKE}
          className="text-border/50"
        />
        <motion.circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={RING_STROKE}
          strokeLinecap="round"
          className="text-success"
          strokeDasharray={RING_CIRC}
          initial={{ strokeDashoffset: RING_CIRC }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-display text-3xl font-bold text-text tabular-nums leading-none">
          {value.toFixed(2)}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted mt-1">/ 5</span>
      </div>
    </div>
  )
}

export default function PerformancePulseDemo() {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.performance
  const isRtl = language === 'ar'

  const nameByKey = useMemo(
    () => ({
      google: t.platformGoogle,
      facebook: t.platformFacebook,
      instagram: t.platformInstagram,
      yelp: t.platformYelp,
      whatsapp: t.platformWhatsapp,
      bing: t.platformBing,
    }),
    [t]
  )

  const [live, setLive] = useState(() =>
    PLATFORM_ORDER.map((id, i) => ({
      id,
      rating: 4.1 + (i % 4) * 0.15,
      reviews: 40 + i * 22,
    }))
  )
  const [toast, setToast] = useState<string | null>(null)
  const [started, setStarted] = useState(false)
  const [lastUpdatedPlatform, setLastUpdatedPlatform] = useState<PlatformKey | null>(null)
  const [lastReviewDelta, setLastReviewDelta] = useState(0)

  const tick = useCallback(() => {
    const idx = Math.floor(Math.random() * PLATFORM_ORDER.length)
    const key = PLATFORM_ORDER[idx]
    const addReviews = 1 + (Math.random() > 0.85 ? 1 : 0)
    setLive((prev) =>
      prev.map((p) => {
        if (p.id !== key) return p
        const nextR = Math.min(5, p.rating + 0.02 + Math.random() * 0.03)
        return {
          ...p,
          rating: nextR,
          reviews: p.reviews + addReviews,
        }
      })
    )
    setLastUpdatedPlatform(key)
    setLastReviewDelta(addReviews)
    setToast(t.newReviewToast)
    window.setTimeout(() => setToast(null), 2200)
  }, [t.newReviewToast])

  useEffect(() => {
    if (!started) return
    const id = window.setInterval(tick, 3200)
    return () => window.clearInterval(id)
  }, [started, tick])

  const blended =
    live.reduce((s, p) => s + p.rating, 0) / live.length
  const totalReviews = live.reduce((s, p) => s + p.reviews, 0)
  const latestPlatformLabel = lastUpdatedPlatform ? nameByKey[lastUpdatedPlatform] : null

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  return (
    <SoftwareDemoSection
      step={6}
      journeyPhase={getJourneyPhaseTitle(language, 6)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="performance-pulse-title"
      titleLayout="inline"
      activeNav="reputationManager"
      moduleTitle={sw.nav.reputationManager}
      className={isRtl ? '[direction:rtl]' : ''}
    >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          onViewportEnter={() => setStarted(true)}
          className="relative"
        >
          <div className="relative border-b border-[var(--software-border)] px-4 py-4 md:px-5 md:py-4">
            <div className="flex items-center justify-end gap-2" title={t.dashboardSubtitle} aria-label={t.dashboardSubtitle}>
                <span className="text-xs text-[var(--software-text-muted)]">{t.dashboardSubtitle}</span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
            </div>
            <AnimatePresence mode="wait">
              {latestPlatformLabel && (
                <motion.div
                  key={`${lastUpdatedPlatform}-${totalReviews}`}
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className="mt-4 w-full rounded-xl border border-success/35 bg-gradient-to-r from-success/20 to-success/10 px-3 py-2.5 text-success shadow-md shadow-success/10"
                >
                  <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-2 font-semibold">
                      <span className="inline-flex h-2 w-2 rounded-full bg-success animate-pulse" aria-hidden />
                      New review detected
                    </span>
                    <span className="font-bold tabular-nums">+{lastReviewDelta}</span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-success/90 truncate">{latestPlatformLabel}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative grid md:grid-cols-[minmax(0,220px)_1fr] md:divide-x md:divide-border/80">
            <div className="flex flex-col items-center justify-center gap-5 px-5 py-8 md:py-10 bg-gradient-to-b from-surface-light/35 to-transparent">
              <motion.div
                animate={lastUpdatedPlatform ? { scale: [1, 1.045, 1] } : { scale: 1 }}
                transition={{ duration: 0.45 }}
                className="rounded-full"
              >
                <BlendedRing value={blended} />
              </motion.div>
              <div className="text-center space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {t.aggregateLabel}
                </p>
                <motion.p
                  key={totalReviews}
                  initial={{ scale: 1.12, y: -3 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-sm text-text"
                >
                  <span className="font-display text-xl font-bold tabular-nums text-text">{totalReviews}</span>
                  <span className="text-muted"> {t.reviewsLabel}</span>
                </motion.p>
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-2">
              {live.map((p) => {
                const st = PLATFORM_STYLES[p.id]
                const fillPct = Math.min(100, (p.rating / 5) * 100)
                const isRecentlyUpdated = p.id === lastUpdatedPlatform
                return (
                  <motion.div
                    key={p.id}
                    layout
                    animate={
                      isRecentlyUpdated
                        ? {
                            scale: [1, 1.02, 1],
                            x: [0, 10, 0],
                            boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 0 2px rgba(16,185,129,0.42)', '0 0 0 rgba(0,0,0,0)'],
                          }
                        : { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' }
                    }
                    transition={{ duration: 0.55 }}
                    className="group rounded-xl border border-border/70 bg-surface/55 px-3 py-2.5 md:px-4 md:py-3 transition-colors hover:bg-surface/75 hover:border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ring-1 ring-black/5 ${st.label}`}
                      >
                        <SocialPlatformIcon platform={p.id} className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="font-semibold text-sm text-text truncate">{nameByKey[p.id]}</p>
                          <div className="flex items-center gap-2 shrink-0">
                            {isRecentlyUpdated && (
                              <motion.span
                                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success"
                              >
                                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success animate-pulse" aria-hidden />
                                +{lastReviewDelta}
                              </motion.span>
                            )}
                            <span className="text-sm font-semibold text-text tabular-nums">
                              {p.rating.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="h-2 rounded-full bg-border/60 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${st.bar}`}
                            initial={false}
                            animate={{ width: `${fillPct}%` }}
                            transition={{ type: 'spring', stiffness: 260, damping: 32 }}
                          />
                        </div>
                        <p className="text-[11px] text-muted">
                          {p.reviews} {t.reviewsLabel}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-success text-background text-xs font-semibold shadow-lg shadow-demo-icon whitespace-nowrap max-w-[90vw] truncate"
              >
                {t.newReviewToast}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
    </SoftwareDemoSection>
  )
}
