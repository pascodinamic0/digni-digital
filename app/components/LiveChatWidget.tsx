'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Briefcase,
  Building2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  X,
} from 'lucide-react'

type Lead = {
  name: string
  email: string
  phone: string
  company: string
  role: string
}

type ChatLine = { id: string; from: 'bot' | 'user'; text: string }

const STORAGE_KEY = 'chat_lead_v1'

const inputBase =
  'w-full rounded-lg border border-border/90 bg-background/70 px-3.5 py-2.5 text-sm text-text shadow-sm transition placeholder:text-muted/55 focus:border-accent/55 focus:outline-none focus:ring-2 focus:ring-accent/20 dark:bg-surface/80'

function welcomeMessage(name: string) {
  const first = name.trim().split(/\s+/)[0] || 'there'
  return `Thanks, ${first}. Tell us what you need—we reply by email, usually within one business day.`
}

function BotAvatar({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 via-accent/15 to-accent/5 shadow-md ring-1 ring-accent/25 ring-inset ${className ?? ''}`}
      aria-hidden
    >
      <Sparkles className="h-6 w-6 text-accent" strokeWidth={1.5} />
    </div>
  )
}

function FieldLabel({
  children,
  icon: Icon,
}: {
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}) {
  return (
    <span className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
      <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden strokeWidth={2} />
      {children}
    </span>
  )
}

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [lead, setLead] = useState<Lead | null>(null)
  const [leadDraft, setLeadDraft] = useState<Lead>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
  })
  const [leadError, setLeadError] = useState<string | null>(null)
  const [lines, setLines] = useState<ChatLine[]>([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [visitorToken, setVisitorToken] = useState<string | null>(null)
  const [errorDetail, setErrorDetail] = useState<string | null>(null)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Lead
        if (parsed?.name && parsed?.email && parsed?.phone && parsed?.company && parsed?.role) {
          setLead(parsed)
          setLines([{ id: 'welcome', from: 'bot', text: welcomeMessage(parsed.name) }])
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  const firstName = useMemo(() => {
    if (!lead) return ''
    return lead.name.trim().split(/\s+/)[0] || 'there'
  }, [lead])

  const persistLead = (next: Lead) => {
    setLead(next)
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault()
    setLeadError(null)
    const name = leadDraft.name.trim()
    const email = leadDraft.email.trim()
    const phone = leadDraft.phone.trim()
    const company = leadDraft.company.trim()
    const role = leadDraft.role.trim()
    if (!name || !email || !phone || !company || !role) {
      setLeadError('Please fill in every field.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLeadError('Enter a valid email address.')
      return
    }
    persistLead({ name, email, phone, company, role })
    setLines([{ id: 'welcome', from: 'bot', text: welcomeMessage(name) }])
  }

  const send = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!lead || !message.trim() || status === 'sending') return
    setStatus('sending')
    setErrorDetail(null)
    const text = message.trim()
    const userLine: ChatLine = { id: crypto.randomUUID(), from: 'user', text }
    setLines((prev) => [...prev, userLine])
    setMessage('')
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationId: conversationId ?? undefined,
          visitorToken: visitorToken ?? undefined,
          visitorName: lead.name,
          visitorEmail: lead.email,
          visitorPhone: lead.phone,
          visitorCompany: lead.company,
          visitorRole: lead.role,
          pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      })

      const raw = await res.text()
      let j: {
        ok?: boolean
        error?: string
        conversationId?: string
        visitorToken?: string
        message?: string
        warning?: string
        storage?: string
      }
      try {
        j = raw ? JSON.parse(raw) : {}
      } catch {
        throw new Error(res.ok ? 'Invalid response' : `Server error (${res.status})`)
      }

      if (!res.ok) {
        throw new Error(j.error || `Request failed (${res.status})`)
      }

      if (j.conversationId) setConversationId(j.conversationId)
      if (j.visitorToken) setVisitorToken(j.visitorToken)
      setStatus('idle')
      setLines((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          from: 'bot',
          text:
            j.warning ||
            j.message ||
            (j.storage === 'email_only'
              ? 'Your message was sent. We’ll follow up by email.'
              : 'Message received. We’ll get back to you soon.'),
        },
      ])
    } catch (err) {
      setStatus('error')
      setErrorDetail(err instanceof Error ? err.message : 'Something went wrong')
      setLines((prev) => prev.filter((l) => l.id !== userLine.id))
      setMessage(text)
    }
  }

  const showLeadForm = hydrated && !lead

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3 pointer-events-auto font-body">
      {open && (
        <div
          className="flex w-[min(100vw-1.5rem,420px)] max-h-[min(580px,78vh)] flex-col overflow-hidden rounded-[1.35rem] border border-border/70 bg-surface/75 shadow-card backdrop-blur-2xl ring-1 ring-black/[0.04] dark:bg-surface/65 dark:ring-white/[0.08]"
          role="dialog"
          aria-label="Chat with Digni assistant"
        >
          {/* Top accent */}
          <div
            className="h-1 shrink-0 bg-gradient-to-r from-accent/5 via-accent to-accent/80"
            aria-hidden
          />

          {/* Header */}
          <div className="relative shrink-0 border-b border-border/60 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent px-4 pb-3.5 pt-4">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.45]"
              style={{
                backgroundImage: `radial-gradient(ellipse 90% 80% at 0% 0%, rgba(var(--accent-rgb), 0.14) 0%, transparent 55%),
                  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(var(--accent-rgb), 0.08) 0%, transparent 50%)`,
              }}
            />
            <div className="relative flex items-start gap-3">
              <BotAvatar />
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[15px] font-semibold leading-tight tracking-tight text-text">Digni Assistant</p>
                    <p className="mt-1 text-xs leading-snug text-muted">
                      Guided intake · we follow up by email with next steps
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/60 text-muted transition hover:bg-surface hover:text-text focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/40"
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    Human review
                  </span>
                  <span className="text-[11px] text-muted/90">Typical reply: 1 business day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-b from-background/40 to-background/80 dark:from-background/20 dark:to-background/50">
            {showLeadForm ? (
              <form onSubmit={submitLead} className="flex flex-1 flex-col gap-0 overflow-y-auto">
                <div className="border-b border-border/50 px-4 py-4">
                  <div className="flex gap-3 rounded-xl border border-border/50 bg-surface/40 p-3 dark:bg-surface/30">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">Start as a lead</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        Share a few details so our team can respond with context—not a generic autoresponder.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 px-4 py-4">
                  <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-muted/80">Contact</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block sm:col-span-1">
                        <FieldLabel icon={User}>Full name</FieldLabel>
                        <input
                          type="text"
                          autoComplete="name"
                          value={leadDraft.name}
                          onChange={(e) => setLeadDraft((d) => ({ ...d, name: e.target.value }))}
                          className={inputBase}
                          placeholder="Jane Doe"
                          required
                        />
                      </label>
                      <label className="block sm:col-span-1">
                        <FieldLabel icon={Mail}>Work email</FieldLabel>
                        <input
                          type="email"
                          autoComplete="email"
                          value={leadDraft.email}
                          onChange={(e) => setLeadDraft((d) => ({ ...d, email: e.target.value }))}
                          className={inputBase}
                          placeholder="you@company.com"
                          required
                        />
                      </label>
                      <label className="block sm:col-span-2">
                        <FieldLabel icon={Phone}>Phone</FieldLabel>
                        <input
                          type="tel"
                          autoComplete="tel"
                          value={leadDraft.phone}
                          onChange={(e) => setLeadDraft((d) => ({ ...d, phone: e.target.value }))}
                          className={inputBase}
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-muted/80">Organization</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block sm:col-span-1">
                        <FieldLabel icon={Building2}>Company</FieldLabel>
                        <input
                          type="text"
                          autoComplete="organization"
                          value={leadDraft.company}
                          onChange={(e) => setLeadDraft((d) => ({ ...d, company: e.target.value }))}
                          className={inputBase}
                          placeholder="Company or brand"
                          required
                        />
                      </label>
                      <label className="block sm:col-span-1">
                        <FieldLabel icon={Briefcase}>Role</FieldLabel>
                        <input
                          type="text"
                          autoComplete="organization-title"
                          value={leadDraft.role}
                          onChange={(e) => setLeadDraft((d) => ({ ...d, role: e.target.value }))}
                          className={inputBase}
                          placeholder="Founder, Marketing lead…"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-3 border-t border-border/60 bg-background/50 px-4 py-4 dark:bg-background/30">
                  {leadError && (
                    <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                      {leadError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-on-accent shadow-md shadow-accent/25 transition hover:brightness-[1.03] active:scale-[0.99] focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Continue to message
                    <Send className="h-4 w-4 opacity-90" strokeWidth={2} />
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4">
                  {lines.map((line) =>
                    line.from === 'user' ? (
                      <div key={line.id} className="flex justify-end">
                        <div className="max-w-[92%] rounded-2xl rounded-tr-md bg-gradient-to-br from-accent to-[var(--brand-blue-dark)] px-3.5 py-2.5 text-sm leading-relaxed text-on-accent shadow-md shadow-accent/30">
                          {line.text}
                        </div>
                      </div>
                    ) : (
                      <div key={line.id} className="flex gap-2.5">
                        <div
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent ring-1 ring-accent/20"
                          aria-hidden
                        >
                          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                        </div>
                        <div className="max-w-[min(100%,18rem)] rounded-2xl rounded-tl-sm border border-border/70 bg-surface/90 px-3.5 py-2.5 text-sm leading-relaxed text-text shadow-sm dark:bg-surface/70">
                          {line.text}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="shrink-0 border-t border-border/60 bg-background/60 px-4 pb-4 pt-3 dark:bg-background/40">
                  <form onSubmit={send} className="space-y-3">
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted">
                        Your message
                      </span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`${inputBase} min-h-[96px] resize-none leading-relaxed`}
                        placeholder={lead ? `Hi ${firstName}, what can we help with?` : '…'}
                        required
                        disabled={!lead}
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={status === 'sending' || !lead}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-on-accent shadow-md shadow-accent/25 transition enabled:hover:brightness-[1.03] enabled:active:scale-[0.99] disabled:opacity-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {status === 'sending' ? (
                        'Sending…'
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4 opacity-90" strokeWidth={2} />
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                        Could not send: {errorDetail || 'Try again later.'}
                      </p>
                    )}
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="group relative flex min-h-[52px] min-w-[52px] items-center gap-2.5 rounded-full border border-white/25 bg-gradient-to-br from-accent via-accent to-[var(--brand-blue-dark)] px-5 py-3 text-[15px] font-semibold text-on-accent shadow-[0_8px_32px_rgba(0,0,0,0.22),0_0_0_1px_rgba(255,255,255,0.2),0_0_48px_rgba(var(--accent-rgb),0.35)] transition hover:brightness-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.28)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background dark:border-white/20 dark:shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_64px_rgba(var(--accent-rgb),0.3)]"
        aria-expanded={open}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-on-accent ring-1 ring-white/25 transition group-hover:bg-white/20">
          <MessageCircle className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />
        </span>
        {open ? 'Close' : 'Chat'}
      </button>
    </div>
  )
}
