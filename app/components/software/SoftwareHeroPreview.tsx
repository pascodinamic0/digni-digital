'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import ProductWorkspaceFrame from './ProductWorkspaceFrame'

const PREVIEW_THREADS = [
  { name: 'Sarah M.', channel: 'WhatsApp', preview: 'Can I book Thursday at 2pm?', time: '2m', unread: 1, status: 'new' as const },
  { name: 'James K.', channel: 'Website', preview: 'What packages do you offer?', time: '8m', unread: 0, status: 'active' as const },
  { name: 'Elena R.', channel: 'Instagram', preview: 'Appointment confirmed ✓', time: '14m', unread: 0, status: 'booked' as const },
]

export default function SoftwareHeroPreview({ compact = false }: { compact?: boolean }) {
  const language = useLanguage()
  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware
  const hp = sw.heroPreview
  const heightClass = compact
    ? 'h-[min(340px,72vw)] min-h-[260px] sm:h-[360px] lg:h-[400px]'
    : 'h-[min(420px,58vw)] min-h-[280px] sm:h-[380px] md:h-[420px]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15 }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/8 blur-3xl"
        aria-hidden
      />
      <ProductWorkspaceFrame
        activeNav="conversations"
        moduleTitle={hp.moduleTitle}
        showWindowChrome
        className="relative"
      >
        <div className={`flex flex-col ${heightClass}`}>
          <div className="flex border-b border-[var(--software-border)] px-2 pt-1">
            {[hp.inboxTab, hp.pipelineTab].map((tab, i) => (
              <span
                key={tab}
                className={`px-3 py-2 text-[11px] font-semibold md:text-xs ${
                  i === 0
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-[var(--software-text-muted)]'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="flex flex-1 min-h-0">
            <div className="w-[38%] border-r border-[var(--software-border)] overflow-hidden">
              {PREVIEW_THREADS.map((thread, i) => (
                <div
                  key={thread.name}
                  className={`border-b border-[var(--software-border)] px-2.5 py-2.5 md:px-3 md:py-3 ${
                    i === 0 ? 'bg-accent/8' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="truncate text-[11px] font-semibold text-[var(--software-text)] md:text-xs">
                      {thread.name}
                    </span>
                    <span className="shrink-0 text-[10px] text-[var(--software-text-muted)]">{thread.time}</span>
                  </div>
                  <p className="mt-0.5 truncate text-[10px] text-[var(--software-text-muted)] md:text-[11px]">
                    {thread.preview}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="rounded bg-[var(--software-sidebar)] px-1.5 py-0.5 text-[9px] font-medium text-[var(--software-text-muted)]">
                      {thread.channel}
                    </span>
                    {thread.unread > 0 ? (
                      <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-on-accent">
                        {thread.unread}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-1 flex-col p-3 md:p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-xs font-bold text-accent">
                  SM
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--software-text)]">Sarah M.</p>
                  <p className="text-[10px] text-success">Qualified · Booking</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-end gap-2">
                <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-[var(--software-sidebar)] px-3 py-2 text-[11px] text-[var(--software-text)] md:text-xs">
                  Hi! I saw your ad — can I book Thursday at 2pm?
                </div>
                <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-accent px-3 py-2 text-[11px] text-on-accent md:text-xs">
                  Thursday 2:00 PM works. I&apos;ve sent a calendar invite — see you then!
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductWorkspaceFrame>
    </motion.div>
  )
}
