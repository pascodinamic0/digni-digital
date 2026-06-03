'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
import { FLOW_STEP_SOCIAL_PLANNER, getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import { calendarDemoCovers } from '@/content/blog/calendar-demo-covers'

type Phase = 'idle' | 'compose' | 'scheduled' | 'publishing' | 'published'

const ROWS = 3
const COLS = 7

/** Two lines per slot so every day column looks scheduled, not empty */
const FILLER: string[][] = [
  [
    'Reel · 9:00',
    'Story · 9:30',
    'Carousel · 10:00',
    'Poll · 10:30',
    'UGC · 11:00',
    'Tips · 11:30',
    'Offer · 12:00',
  ],
  [
    'Repost · 2:00',
    'Live · 2:30',
    'Blog · 3:00',
    'Video · 3:30',
    'Q&A · 4:00',
    'Sale · 4:30',
    'News · 5:00',
  ],
  [
    'Photo · 6:00',
    'Quote · 6:30',
    'Thread · 7:00',
    'Story · 7:30',
    'AMA · 8:00',
    'Drop · 8:30',
    'Recap · 9:00',
  ],
]

const FILLER_SECOND: string[][] = [
  ['IG + FB', 'Auto', 'LinkedIn', 'X', 'TikTok', 'Pinterest', 'Threads'],
  ['Queued', 'Review', 'Boost', 'A/B', 'Reminder', 'Tag', 'UTM'],
  ['SMS push', 'Email', 'Republish', 'Pin', 'Cross-post', 'Ad set', 'OK'],
]

const ROW_TIME = ['9:00', '14:00', '18:00']

type PlacedPost = { coverImageUrl: string; title: string }

function slotKey(row: number, col: number) {
  return `${row}-${col}`
}

function findNextEmpty(placed: Record<string, PlacedPost>): { row: number; col: number } | null {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const key = slotKey(row, col)
      if (!placed[key]) return { row, col }
    }
  }
  return null
}

function StaticSlot({ row, col }: { row: number; col: number }) {
  const a = FILLER[row]?.[col] ?? 'Post'
  const b = FILLER_SECOND[row]?.[col] ?? '—'
  return (
    <div className="flex flex-col gap-1 w-full min-w-0">
      <div className="text-[8px] sm:text-[9px] leading-tight rounded-md border border-border/80 bg-surface/90 px-1.5 py-1 text-text font-medium line-clamp-2 shadow-sm">
        {a}
      </div>
      <div className="text-[7px] sm:text-[8px] rounded border border-dashed border-border/60 bg-surface/40 px-1.5 py-0.5 text-muted line-clamp-1">
        {b}
      </div>
    </div>
  )
}

function PostCardFrame({
  coverImageUrl,
  title,
  children,
}: {
  coverImageUrl: string
  title: string
  children: React.ReactNode
}) {
  const alt = title.length > 100 ? `${title.slice(0, 97)}…` : title
  return (
    <div className="flex flex-col flex-1 rounded-md border border-border bg-surface shadow-sm overflow-hidden text-left z-[1] min-h-0">
      <div className="relative w-full aspect-[16/10] max-h-[48px] sm:max-h-[52px] shrink-0 overflow-hidden bg-surface/80">
        <Image
          src={coverImageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100px, 130px"
        />
      </div>
      <div className="p-1.5 sm:p-2 flex flex-col flex-1 min-h-0">{children}</div>
    </div>
  )
}

export default function TaskQueueDemo() {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.tasks
  const isRtl = language === 'ar'

  const [phase, setPhase] = useState<Phase>('idle')
  const [placedPosts, setPlacedPosts] = useState<Record<string, PlacedPost>>({})
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>({ row: 1, col: 2 })
  const [postIndex, setPostIndex] = useState(0)

  const placedRef = useRef<Record<string, PlacedPost>>({})
  const activeCellRef = useRef<{ row: number; col: number } | null>({ row: 1, col: 2 })
  const postIndexRef = useRef(0)

  const days = t.daysShort

  const activeDayIndex = activeCell?.col ?? -1

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const schedule = (fn: () => void, ms: number) => {
      timers.push(
        setTimeout(() => {
          if (!cancelled) fn()
        }, ms)
      )
    }

    const loop = () => {
      if (cancelled) return
      const cell = activeCellRef.current
      if (!cell) return

      setPhase('compose')
      schedule(() => setPhase('scheduled'), 900)
      schedule(() => setPhase('publishing'), 2200)
      schedule(() => setPhase('published'), 3600)
      schedule(() => {
        if (cancelled) return
        setPhase('idle')

        const { row, col } = cell
        const idx = postIndexRef.current
        const cover = calendarDemoCovers[idx % calendarDemoCovers.length]
        const key = slotKey(row, col)
        const nextPlaced = {
          ...placedRef.current,
          [key]: { coverImageUrl: cover.coverImageUrl, title: cover.title },
        }
        placedRef.current = nextPlaced
        setPlacedPosts(nextPlaced)

        postIndexRef.current = idx + 1
        setPostIndex(idx + 1)

        const next = findNextEmpty(nextPlaced)
        if (!next) {
          activeCellRef.current = null
          setActiveCell(null)
          return
        }

        activeCellRef.current = next
        setActiveCell(next)
        schedule(loop, 900)
      }, 5200)
    }

    schedule(loop, 400)
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  const showCard = phase !== 'idle'

  const coverAt = (i: number) => calendarDemoCovers[i % calendarDemoCovers.length]

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  return (
    <SoftwareDemoSection
      step={5}
      anchorId={FLOW_STEP_SOCIAL_PLANNER}
      journeyPhase={getJourneyPhaseTitle(language, 5)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="social-planner-title"
      titleLayout="stacked"
      activeNav="calendar"
      moduleTitle={sw.nav.calendar}
      className={isRtl ? '[direction:rtl]' : ''}
    >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          <div className="flex flex-col gap-3 border-b border-[var(--software-border)] p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
            <p className="text-xs text-[var(--software-text-muted)]">{t.moduleSubtitle}</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="text-[11px] px-3 py-2 rounded-lg border border-border bg-surface/50 hover:bg-surface-light/80"
              >
                {t.scheduleBtn}
              </button>
              <button
                type="button"
                className="text-[11px] px-4 py-2 rounded-lg bg-success text-background font-semibold hover:bg-success-light shadow-md shadow-demo-icon"
              >
                {t.newPostBtn}
              </button>
            </div>
          </div>

          <div className="relative p-4 md:p-6 overflow-x-auto">
            {/* Header row: corner + weekday names */}
            <div
              className="grid gap-1 sm:gap-2 mb-2 min-w-[520px] sm:min-w-0"
              style={{ gridTemplateColumns: `3rem repeat(${COLS}, minmax(0, 1fr))` }}
            >
              <div aria-hidden className="hidden sm:block" />
              {days.map((d, i) => (
                <div
                  key={d}
                  className={`text-center text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide py-2 rounded-lg ${
                    i === activeDayIndex ? 'bg-success/15 text-success border border-success/25' : 'text-muted border border-transparent'
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* 3 content rows × 7 days */}
            <div className="relative rounded-xl border border-border/70 bg-surface/30 p-2 md:p-3 min-w-[520px] sm:min-w-0">
              <div className="flex flex-col gap-2">
                {Array.from({ length: ROWS }, (_, row) => (
                  <div
                    key={row}
                    className="grid gap-1 sm:gap-2 items-stretch"
                    style={{ gridTemplateColumns: `3rem repeat(${COLS}, minmax(0, 1fr))` }}
                  >
                    <div className="flex items-center justify-center text-[9px] font-semibold text-muted border border-border/40 rounded-lg bg-surface/40 py-1 px-0.5">
                      {ROW_TIME[row]}
                    </div>
                    {Array.from({ length: COLS }, (_, col) => {
                      const key = slotKey(row, col)
                      const placed = placedPosts[key]
                      const isLive = activeCell !== null && row === activeCell.row && col === activeCell.col

                      if (placed) {
                        return (
                          <div
                            key={`${row}-${col}`}
                            className="rounded-lg border border-success/35 min-h-[120px] sm:min-h-[128px] relative overflow-hidden p-1.5 flex flex-col bg-success/[0.04] ring-1 ring-success/10"
                          >
                            <PostCardFrame coverImageUrl={placed.coverImageUrl} title={placed.title}>
                              <p className="text-[9px] sm:text-[10px] font-semibold text-text leading-snug line-clamp-3">{placed.title}</p>
                              <p className="text-[9px] mt-1 text-success font-semibold flex items-center gap-1">
                                <span aria-hidden>✓</span> {t.hintPublished}
                              </p>
                            </PostCardFrame>
                          </div>
                        )
                      }

                      return (
                        <div
                          key={`${row}-${col}`}
                          className={`rounded-lg border border-dashed min-h-[120px] sm:min-h-[128px] relative overflow-hidden p-1.5 flex flex-col ${
                            isLive
                              ? 'border-success/45 bg-success/[0.06] ring-1 ring-success/15'
                              : 'border-border/50 bg-surface/25'
                          }`}
                        >
                          {isLive && showCard ? (
                            <PostCardFrame coverImageUrl={coverAt(postIndex).coverImageUrl} title={coverAt(postIndex).title}>
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={phase}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  className="flex flex-col flex-1 min-h-0"
                                >
                                  {phase === 'compose' && (
                                    <p className="text-[9px] sm:text-[10px] text-success font-medium animate-pulse">{t.hintComposer}</p>
                                  )}
                                  {(phase === 'scheduled' || phase === 'publishing') && (
                                    <>
                                      <p className="text-[9px] sm:text-[10px] font-semibold text-text leading-snug line-clamp-3">
                                        {coverAt(postIndex).title}
                                      </p>
                                      <p
                                        className={`text-[8px] sm:text-[9px] mt-1 ${
                                          phase === 'publishing' ? 'text-success font-semibold' : 'text-muted'
                                        }`}
                                      >
                                        {phase === 'publishing' ? t.autoPostBanner : t.hintScheduled}
                                      </p>
                                    </>
                                  )}
                                  {phase === 'published' && (
                                    <>
                                      <p className="text-[9px] sm:text-[10px] font-semibold text-text line-clamp-3">
                                        {coverAt(postIndex).title}
                                      </p>
                                      <p className="text-[8px] sm:text-[9px] mt-1 text-success font-semibold flex items-center gap-1">
                                        <span aria-hidden>✓</span> {t.hintPublished}
                                      </p>
                                    </>
                                  )}
                                </motion.div>
                              </AnimatePresence>
                            </PostCardFrame>
                          ) : (
                            <StaticSlot row={row} col={col} />
                          )}

                          {phase === 'publishing' && isLive && (
                            <motion.div
                              className="pointer-events-none absolute inset-0 rounded-lg bg-success/10 z-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1.1, repeat: Infinity }}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
    </SoftwareDemoSection>
  )
}
