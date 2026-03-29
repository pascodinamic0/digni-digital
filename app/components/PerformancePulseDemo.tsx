'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

type PlatformKey = 'google' | 'facebook' | 'instagram' | 'yelp' | 'whatsapp' | 'bing'

const PLATFORM_ORDER: PlatformKey[] = ['google', 'facebook', 'instagram', 'yelp', 'whatsapp', 'bing']

const PLATFORM_STYLES: Record<
  PlatformKey,
  { bar: string; icon: string; label: string }
> = {
  google: { bar: 'from-blue-500 to-blue-600', icon: 'G', label: 'bg-white text-blue-600' },
  facebook: { bar: 'from-blue-700 to-blue-800', icon: 'f', label: 'bg-[#1877F2] text-white' },
  instagram: { bar: 'from-pink-500 via-purple-500 to-amber-400', icon: '◎', label: 'bg-gradient-to-br from-pink-500 to-amber-400 text-white' },
  yelp: { bar: 'from-red-500 to-red-600', icon: 'Y', label: 'bg-[#FF1A1A] text-white' },
  whatsapp: { bar: 'from-emerald-500 to-emerald-600', icon: 'W', label: 'bg-[#25D366] text-white' },
  bing: { bar: 'from-cyan-500 to-blue-500', icon: 'b', label: 'bg-cyan-600 text-white' },
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

  const tick = useCallback(() => {
    const idx = Math.floor(Math.random() * PLATFORM_ORDER.length)
    const key = PLATFORM_ORDER[idx]
    setLive((prev) =>
      prev.map((p) => {
        if (p.id !== key) return p
        const addReviews = 1 + (Math.random() > 0.85 ? 1 : 0)
        const nextR = Math.min(5, p.rating + 0.02 + Math.random() * 0.03)
        return {
          ...p,
          rating: nextR,
          reviews: p.reviews + addReviews,
        }
      })
    )
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

  return (
    <section
      className="py-20 md:py-24 bg-gradient-to-b from-surface to-background"
      aria-labelledby="performance-pulse-title"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-xs font-semibold uppercase tracking-wide mb-4"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            id="performance-pulse-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4"
          >
            {t.title} <span className="gradient-text-brand">{t.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-base sm:text-lg max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          onViewportEnter={() => setStarted(true)}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border-light backdrop-blur-xl bg-gradient-to-br from-surface-light/85 via-surface/92 to-surface-light/85 shadow-demo-card max-w-5xl mx-auto ring-1 ring-border/40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-success/[0.06] via-transparent to-transparent pointer-events-none" />

          <div className="relative border-b border-border bg-surface-light/40 backdrop-blur-sm px-4 py-4 md:px-6 md:py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 md:w-11 md:h-11 shrink-0 rounded-xl bg-gradient-to-br from-success to-success-light flex items-center justify-center shadow-lg shadow-demo-icon">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-background"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14l4-4 3 3 5-6" />
                    <path strokeLinecap="round" strokeWidth={2} d="M18 8h-4V4" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base md:text-lg font-bold text-text">{t.dashboardTitle}</h3>
                  <p className="text-muted text-xs">{t.dashboardSubtitle}</p>
                </div>
              </div>
              <div
                className="flex items-center gap-2 sm:shrink-0"
                title={t.dashboardSubtitle}
                aria-label={t.dashboardSubtitle}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]" />
                </span>
              </div>
            </div>
          </div>

          <div className="relative grid md:grid-cols-[minmax(0,220px)_1fr] md:divide-x md:divide-border/80">
            <div className="flex flex-col items-center justify-center gap-5 px-5 py-8 md:py-10 bg-gradient-to-b from-surface-light/35 to-transparent">
              <BlendedRing value={blended} />
              <div className="text-center space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {t.aggregateLabel}
                </p>
                <motion.p
                  key={totalReviews}
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
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
                return (
                  <motion.div
                    key={p.id}
                    layout
                    className="group rounded-xl border border-border/70 bg-surface/55 px-3 py-2.5 md:px-4 md:py-3 transition-colors hover:bg-surface/75 hover:border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-bold shrink-0 shadow-sm ring-1 ring-black/5 ${st.label}`}
                      >
                        {st.icon}
                      </div>
                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="font-semibold text-sm text-text truncate">{nameByKey[p.id]}</p>
                          <span className="text-sm font-semibold text-text tabular-nums shrink-0">
                            {p.rating.toFixed(2)}
                          </span>
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
      </div>
    </section>
  )
}
