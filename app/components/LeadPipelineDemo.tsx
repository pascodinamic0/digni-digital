'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
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

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  return (
    <SoftwareDemoSection
      step={4}
      journeyPhase={getJourneyPhaseTitle(language, 4)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="lead-pipeline-title"
      titleLayout="inline"
      activeNav="opportunities"
      moduleTitle={sw.nav.opportunities}
      className={isRtl ? '[direction:rtl]' : ''}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="software-pipeline-demo flex h-full min-h-0 min-w-0 w-full max-w-full flex-col overflow-hidden"
      >
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[var(--software-border)] px-3 py-2.5 md:px-4">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="rounded-full border border-success/20 bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
              {t.pipelineName}
            </span>
            <button
              type="button"
              onClick={() => setDemoPlaying((p) => !p)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                demoPlaying
                  ? 'border-success bg-success/15 text-success'
                  : 'border-border bg-surface/50 hover:bg-surface-light/80'
              }`}
            >
              {demoPlaying ? t.stopDemoLabel : t.playDemoLabel}
            </button>
          </div>
          <span className="truncate text-xs text-muted">{t.activeDeals}</span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3 md:p-4">
          <p className="mb-3 shrink-0 text-center text-xs text-muted">{t.dragHint}</p>
          <div className="grid min-h-0 flex-1 grid-cols-4 gap-2 overflow-hidden">
            {t.columns.map((col, columnIndex) => (
              <div
                key={col.id}
                className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden"
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, columnIndex)}
              >
                <div
                  className={`shrink-0 rounded-t-lg border border-b-0 border-border bg-surface/40 ${col.borderClass} border-t-2`}
                >
                  <div className="border-b border-border/80 px-2 py-1.5">
                    <h4 className="line-clamp-2 font-display text-xs font-bold leading-tight text-text">
                      {col.title}
                    </h4>
                    <p className="mt-0.5 truncate text-[11px] text-muted">{col.stat}</p>
                  </div>
                </div>
                <div className="min-h-0 flex-1 space-y-1.5 overflow-x-hidden overflow-y-auto rounded-b-lg border border-t-0 border-border bg-surface/30 p-1.5">
                  {t.cards
                    .filter((c) => cardColumn[c.id] === columnIndex)
                    .map((card) => (
                      <div key={card.id} className="w-full min-w-0">
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
                          className={`w-full min-w-0 cursor-grab rounded-lg border bg-surface px-2 py-2 text-left shadow-sm transition-all hover:border-success/30 hover:shadow-md active:cursor-grabbing ${
                            dragId === card.id ? 'opacity-60 ring-2 ring-success/40' : 'border-border-light'
                          } ${card.id === FLOW_CARD_ID && demoPlaying ? 'ring-2 ring-success/40' : ''}`}
                        >
                          <p className="line-clamp-1 text-xs font-semibold leading-snug text-text">
                            {card.name}
                          </p>
                          <div className="mt-1 flex justify-between gap-1 text-[11px] text-muted">
                            <span className="shrink-0">{t.sourceLabel}</span>
                            <span className="truncate text-right text-text/90">{card.source}</span>
                          </div>
                          <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted">
                            {card.context}
                          </p>
                          <div className="mt-1.5 flex justify-between gap-1 text-[11px]">
                            <span className="text-muted">{card.valueLabel}</span>
                            <span className="font-medium tabular-nums text-success">{card.valueDisplay}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-[image:var(--overlay-scrim)] bg-cover p-4 backdrop-blur-sm sm:items-center"
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
              className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl"
            >
              <h4 id="pipeline-detail-title" className="mb-1 font-display text-lg font-bold">
                {selected.name}
              </h4>
              <p className="mb-1 text-sm text-muted">
                <span className="font-medium text-text/80">{t.sourceLabel}:</span> {selected.source}
              </p>
              <p className="mb-3 text-sm text-text">{selected.context}</p>
              <p className="mb-4 text-sm text-muted">
                {selected.valueLabel}:{' '}
                <span className="font-semibold tabular-nums text-success">{selected.valueDisplay}</span>
              </p>
              <div className="mb-4 rounded-xl border border-success/20 bg-success/5 p-4">
                <p className="mb-2 text-xs font-semibold text-success">{t.detailHint}</p>
                <p className="text-sm leading-relaxed text-text">{t.detailModalBody}</p>
              </div>
              <p className="mb-2 text-xs font-semibold text-muted">{t.detailNext}</p>
              <p className="mb-6 text-sm text-text">{t.detailModalNextExample}</p>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="w-full rounded-xl bg-success py-3 font-semibold text-background transition-colors hover:bg-success-light"
              >
                {t.closeLabel}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SoftwareDemoSection>
  )
}
