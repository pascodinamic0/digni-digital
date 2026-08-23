'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
import { translations } from '@/app/config/translations'
import type { CalendarBookingChannel, CalendarBookingEventT } from '@/app/i18n/aiEmployeeProductDemos'

const COLS = 5

const CHANNEL_STYLE: Record<CalendarBookingChannel, string> = {
  whatsapp: 'bg-emerald-500/12 text-emerald-700 border-emerald-500/25',
  website: 'bg-accent/12 text-accent border-accent/25',
  sms: 'bg-info/12 text-info border-info/25',
  phone: 'bg-warning/12 text-warning border-warning/30',
  instagram: 'bg-gradient-to-r from-pink-500/12 to-amber-400/12 text-rose-600 border-rose-400/30',
  facebook: 'bg-info/12 text-info border-info/25',
  email: 'bg-muted/12 text-muted-foreground border-border/30',
  google: 'bg-warning/12 text-warning border-warning/25',
  tiktok: 'bg-accent/12 text-accent border-accent/25',
  linkedin: 'bg-info/12 text-info border-info/25',
  ads: 'bg-accent/12 text-accent border-accent/25',
}

function slotKey(dayIndex: number, slotIndex: number) {
  return `${dayIndex}-${slotIndex}`
}

function findNextSlot(
  occupied: Set<string>,
  queue: CalendarBookingEventT[],
  cursor: number,
): { event: CalendarBookingEventT; index: number } | null {
  for (let i = cursor; i < queue.length; i++) {
    const ev = queue[i]
    const key = slotKey(ev.dayIndex, ev.slotIndex)
    if (!occupied.has(key)) return { event: ev, index: i + 1 }
  }
  return null
}

function getSeedBookings(seed: CalendarBookingEventT[]) {
  const initial: Record<string, CalendarBookingEventT> = {}
  for (const ev of seed) {
    initial[slotKey(ev.dayIndex, ev.slotIndex)] = ev
  }
  return initial
}

function AppointmentCard({
  event,
  channelLabel,
  confirmedLabel,
  pulsing,
}: {
  event: CalendarBookingEventT
  channelLabel: string
  confirmedLabel: string
  pulsing?: boolean
}) {
  return (
    <motion.div
      layout
      initial={pulsing ? { opacity: 0, scale: 0.92, y: 6 } : false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`flex h-full min-h-[68px] flex-col rounded-lg border px-1.5 py-1.5 text-left shadow-sm ${
        pulsing
          ? 'border-success/40 bg-success/[0.08] ring-1 ring-success/20'
          : 'border-success/30 bg-success/[0.05]'
      }`}
    >
      <p className="line-clamp-2 text-[11px] font-semibold leading-tight text-text">{event.title}</p>
      <p className="mt-0.5 truncate text-[10px] text-muted">{event.contact}</p>
      <div className="mt-auto flex items-center justify-between gap-1 pt-1">
        <span
          className={`inline-flex max-w-[70%] truncate rounded border px-1 py-0.5 text-[9px] font-semibold ${CHANNEL_STYLE[event.channel]}`}
        >
          {channelLabel}
        </span>
        <span className="shrink-0 text-[9px] font-semibold text-success">{confirmedLabel}</span>
      </div>
    </motion.div>
  )
}

export default function CalendarBookingDemo() {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.calendarBooking
  const isRtl = language === 'ar'

  const [booked, setBooked] = useState<Record<string, CalendarBookingEventT>>(() => getSeedBookings(t.seed))
  const bookedRef = useRef(booked)
  bookedRef.current = booked
  const queueIndexRef = useRef(0)
  const bookingTimerRef = useRef<number | null>(null)
  const toastTimerRef = useRef<number | null>(null)
  const [pendingKey, setPendingKey] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [started, setStarted] = useState(false)

  const bookNext = useCallback(() => {
    const occupied = new Set(Object.keys(bookedRef.current))
    const next = findNextSlot(occupied, t.queue, queueIndexRef.current)
    if (!next) {
      setBooked(getSeedBookings(t.seed))
      setPendingKey(null)
      setToast(null)
      queueIndexRef.current = 0
      return
    }

    const key = slotKey(next.event.dayIndex, next.event.slotIndex)
    queueIndexRef.current = next.index
    setPendingKey(key)

    if (bookingTimerRef.current) window.clearTimeout(bookingTimerRef.current)
    bookingTimerRef.current = window.setTimeout(() => {
      setBooked((prev) => ({ ...prev, [key]: next.event }))
      setPendingKey(null)
      setToast(`${t.bookingToast} · ${next.event.contact}`)
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
      toastTimerRef.current = window.setTimeout(() => setToast(null), 2400)
    }, 1100)
  }, [t.bookingToast, t.queue, t.seed])

  useEffect(() => {
    if (!started) return
    bookNext()
    const id = window.setInterval(bookNext, 3200)
    return () => window.clearInterval(id)
  }, [started, bookNext])

  useEffect(() => {
    setBooked(getSeedBookings(t.seed))
    setPendingKey(null)
    setToast(null)
    queueIndexRef.current = 0
  }, [t.seed])

  useEffect(() => {
    return () => {
      if (bookingTimerRef.current) window.clearTimeout(bookingTimerRef.current)
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)
    }
  }, [])

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  const todayHighlight = 1

  return (
    <SoftwareDemoSection
      step={5}
      journeyPhase={getJourneyPhaseTitle(language, 4)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="calendar-booking-title"
      titleLayout="inline"
      activeNav="calendar"
      moduleTitle={sw.nav.calendar}
      className={isRtl ? '[direction:rtl]' : ''}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        onViewportEnter={() => setStarted(true)}
        className="relative min-w-0 w-full max-w-full overflow-x-hidden"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--software-border)] px-3 py-2.5 md:px-4">
          <div className="flex min-w-0 items-center gap-2 text-xs text-[var(--software-text-muted)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="truncate">{t.dashboardSubtitle}</span>
          </div>
          <span className="shrink-0 text-xs font-semibold text-text">{t.weekLabel}</span>
        </div>

        <div className="overflow-x-hidden p-3 md:p-4">
          <div className="grid w-full min-w-0 grid-cols-[2.75rem_repeat(5,minmax(0,1fr))] gap-1 sm:gap-1.5">
            <div aria-hidden />
            {t.daysShort.map((day, i) => (
              <div
                key={day}
                className={`min-w-0 rounded-lg py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide sm:text-xs ${
                  i === todayHighlight
                    ? 'border border-success/25 bg-success/10 text-success'
                    : 'text-muted'
                }`}
              >
                {day}
              </div>
            ))}

            {t.timeSlots.map((time, slotIndex) => (
              <div key={time} className="contents">
                <div className="flex min-w-0 items-start justify-end pr-1 pt-1 text-[9px] font-medium leading-tight text-muted tabular-nums sm:text-[10px]">
                  {time}
                </div>
                {Array.from({ length: COLS }, (_, dayIndex) => {
                  const key = slotKey(dayIndex, slotIndex)
                  const event = booked[key]
                  const isPending = pendingKey === key

                  return (
                    <div
                      key={key}
                      className={`min-h-[72px] min-w-0 rounded-lg border p-1 transition-colors sm:min-h-[80px] ${
                        isPending
                          ? 'border-dashed border-success/45 bg-success/[0.06]'
                          : event
                            ? 'border-success/20 bg-surface/30'
                            : 'border-dashed border-border/60 bg-surface/20'
                      }`}
                    >
                      {isPending && (
                        <div className="flex h-full min-h-[64px] flex-col items-center justify-center gap-1 rounded-lg sm:min-h-[72px]">
                          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden />
                          <p className="text-[10px] font-semibold text-success animate-pulse">{t.bookingPulse}</p>
                        </div>
                      )}
                      {!isPending && event ? (
                        <AppointmentCard
                          event={event}
                          channelLabel={t.channels[event.channel]}
                          confirmedLabel={t.confirmedLabel}
                        />
                      ) : null}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute bottom-4 left-1/2 z-10 max-w-[90%] -translate-x-1/2 truncate rounded-full bg-success px-4 py-2 text-xs font-semibold text-background shadow-lg shadow-success/25"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SoftwareDemoSection>
  )
}
