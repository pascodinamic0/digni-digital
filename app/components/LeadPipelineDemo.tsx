'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import type { PipelineCardT } from '@/app/i18n/aiEmployeeProductDemos'

/** p1 animates through stages; others stay in the “thick” middle of the funnel. */
const FLOW_CARD_ID = 'p1'

const INITIAL_COLS: Record<string, number> = {
  p1: 0,
  p2: 1,
  p3: 1,
  p4: 1,
  p5: 2,
  p6: 2,
  p7: 2,
  p8: 3,
}

export default function LeadPipelineDemo() {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.pipeline
  const isRtl = language === 'ar'

  const [cardColumn, setCardColumn] = useState<Record<string, number>>({ ...INITIAL_COLS })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [dragId, setDragId] = useState<string | null>(null)
  const [demoPlaying, setDemoPlaying] = useState(true)

  useEffect(() => {
    if (!demoPlaying) return
    const id = window.setInterval(() => {
      setCardColumn((prev) => {
        const cur = prev[FLOW_CARD_ID] ?? 0
        const next = (cur + 1) % t.columns.length
        return { ...prev, [FLOW_CARD_ID]: next }
      })
    }, 2800)
    return () => window.clearInterval(id)
  }, [demoPlaying, t.columns.length])

  const onDragStart = useCallback((e: React.DragEvent, id: string) => {
    setDragId(id)
    e.dataTransfer.setData('text/plain', id)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  const onDragEnd = useCallback(() => setDragId(null), [])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback((e: React.DragEvent, columnIndex: number) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (!id) return
    setCardColumn((prev) => ({ ...prev, [id]: columnIndex }))
    setDragId(null)
  }, [])

  const cardById = (id: string): PipelineCardT | undefined => t.cards.find((c) => c.id === id)
  const selected = selectedId ? cardById(selectedId) : null

  return (
    <section
      className="py-24 bg-gradient-to-b from-surface to-background"
      aria-labelledby="lead-pipeline-title"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            id="lead-pipeline-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4"
          >
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-base sm:text-lg max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border-light backdrop-blur-xl bg-gradient-to-br from-surface-light/80 via-surface/90 to-surface-light/80 shadow-2xl shadow-accent/5 max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple/5 pointer-events-none" />

          <div className="relative bg-surface-light/50 backdrop-blur-sm border-b border-border p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 5h16M4 9h16M4 13h10M4 17h10" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-bold">{t.dashboardTitle}</h3>
                  <p className="text-muted text-xs">{t.dashboardSubtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                  {t.pipelineName}
                </span>
                <span className="text-[11px] text-muted hidden sm:inline">{t.activeDeals}</span>
                <button
                  type="button"
                  onClick={() => setDemoPlaying((p) => !p)}
                  className={`text-[11px] px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                    demoPlaying
                      ? 'border-accent bg-accent/15 text-accent'
                      : 'border-border bg-surface/50 hover:bg-surface-light/80'
                  }`}
                >
                  {demoPlaying ? t.stopDemoLabel : t.playDemoLabel}
                </button>
                <button
                  type="button"
                  className="text-[11px] px-3 py-1.5 rounded-lg border border-border bg-surface/50 hover:bg-surface-light/80"
                >
                  {t.importBtn}
                </button>
                <button
                  type="button"
                  className="text-[11px] px-3 py-2 rounded-lg bg-accent text-background font-semibold hover:bg-accent-light"
                >
                  {t.addDeal}
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-muted">
              <span className="px-2 py-0.5 rounded-md bg-surface/60 border border-border">{t.allTab}</span>
              <span className="px-2 py-0.5 rounded-md border border-border border-dashed">{t.newViewTab}</span>
              <span className="hidden sm:inline px-1">{t.advancedFilters}</span>
              <div className="flex-1 min-w-[120px] max-w-[200px] ml-auto flex items-center gap-1.5 rounded-lg border border-border bg-surface/40 px-2 py-1">
                <svg className="w-3 h-3 opacity-60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="truncate opacity-70">{t.searchPlaceholder}</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col min-h-[500px] md:h-[500px] p-3 md:p-4 bg-surface-light/20">
            <p className="text-[10px] text-muted text-center mb-2 shrink-0">{t.dragHint}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 flex-1 min-h-0 auto-rows-[minmax(0,1fr)]">
              {t.columns.map((col, columnIndex) => (
                <div
                  key={col.id}
                  className="min-w-0 min-h-0 flex flex-col h-full"
                  onDragOver={onDragOver}
                  onDrop={(e) => onDrop(e, columnIndex)}
                >
                  <div className={`rounded-t-lg border border-b-0 border-border bg-surface/40 ${col.borderClass} border-t-2 shrink-0`}>
                    <div className="px-2 py-1.5 border-b border-border/80">
                      <h4 className="font-display text-xs font-bold text-text leading-tight line-clamp-2">{col.title}</h4>
                      <p className="text-[10px] text-muted mt-0.5 truncate">{col.stat}</p>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 overflow-y-auto rounded-b-lg border border-t-0 border-border bg-surface/30 p-1.5 space-y-1.5">
                    {t.cards
                      .filter((c) => cardColumn[c.id] === columnIndex)
                      .map((card) => (
                        <motion.div layout key={card.id} className="w-full">
                          <div
                            role="button"
                            tabIndex={0}
                            draggable
                            onDragStart={(e) => onDragStart(e, card.id)}
                            onDragEnd={onDragEnd}
                            onClick={() => setSelectedId(card.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                setSelectedId(card.id)
                              }
                            }}
                            className={`w-full text-left rounded-lg border bg-surface px-2 py-2 shadow-sm transition-all hover:shadow-md hover:border-accent/30 cursor-grab active:cursor-grabbing ${
                              dragId === card.id ? 'opacity-60 ring-2 ring-accent/40' : 'border-border-light'
                            } ${card.id === FLOW_CARD_ID && demoPlaying ? 'ring-2 ring-success/40' : ''}`}
                          >
                            <p className="font-semibold text-[11px] text-text leading-snug line-clamp-1">{card.name}</p>
                            <div className="mt-1 flex justify-between gap-1.5 text-[10px] text-muted">
                              <span className="shrink-0">{t.sourceLabel}</span>
                              <span className="text-text/90 truncate text-right">{card.source}</span>
                            </div>
                            <p className="text-[10px] text-muted line-clamp-2 leading-snug mt-0.5">{card.context}</p>
                            <div className="mt-1.5 flex justify-between gap-1 text-[10px]">
                              <span className="text-muted">{card.valueLabel}</span>
                              <span className="font-medium text-accent tabular-nums">{card.valueDisplay}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-background/70 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pipeline-detail-title"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-border bg-surface shadow-2xl p-6"
            >
              <h4 id="pipeline-detail-title" className="font-display text-lg font-bold mb-1">
                {selected.name}
              </h4>
              <p className="text-sm text-muted mb-1">
                <span className="font-medium text-text/80">{t.sourceLabel}:</span> {selected.source}
              </p>
              <p className="text-sm text-text mb-3">{selected.context}</p>
              <p className="text-sm text-muted mb-4">
                {selected.valueLabel}:{' '}
                <span className="font-semibold text-accent tabular-nums">{selected.valueDisplay}</span>
              </p>
              <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 mb-4">
                <p className="text-xs font-semibold text-accent mb-2">{t.detailHint}</p>
                <p className="text-sm text-text leading-relaxed">{t.detailModalBody}</p>
              </div>
              <p className="text-xs font-semibold text-muted mb-2">{t.detailNext}</p>
              <p className="text-sm text-text mb-6">{t.detailModalNextExample}</p>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="w-full py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent-light transition-colors"
              >
                {t.closeLabel}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
