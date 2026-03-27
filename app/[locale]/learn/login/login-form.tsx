'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/app/context/LocaleContext'
import { createClient } from '@/lib/supabase/client'

export function LoginForm() {
  const locale = useLocale()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [msg, setMsg] = useState<string | null>(null)

  const sendLink = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('sending')
    setMsg(null)
    const supabase = createClient()
    const site = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${site}/auth/callback?next=/${encodeURIComponent(locale)}/learn`,
      },
    })
    if (error) {
      setStatus('error')
      setMsg(error.message)
      return
    }
    setStatus('sent')
    setMsg('Check your inbox (and spam) for the login link. It expires after a short time.')
  }

  return (
    <div className="card-glass rounded-2xl border border-border-accent/30 p-6 shadow-lg md:p-8">
      <span className="section-label">Sign in</span>
      <h1 className="font-display mt-2 text-2xl font-bold tracking-tight text-text md:text-3xl">
        Learning <span className="gradient-text">portal</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Use the <strong className="font-medium text-text">exact email</strong> we used to enroll you. We’ll email you a one-time link—no password required for this option.
      </p>

      <form onSubmit={sendLink} className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-text">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-text shadow-inner transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-background shadow-md transition hover:opacity-95 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending link…' : 'Email me a secure login link'}
        </button>
      </form>

      {status === 'sent' && msg && (
        <p className="mt-6 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-success" role="status">
          {msg}
        </p>
      )}
      {status === 'error' && msg && (
        <p className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
          {msg}
        </p>
      )}

      <p className="mt-8 border-t border-border-light/70 pt-6 text-center text-xs text-muted">
        Wrong email or not enrolled yet?{' '}
        <Link href={`/${locale}/learn/pending`} className="font-medium text-accent underline-offset-2 hover:underline">
          See “access pending”
        </Link>{' '}
        or{' '}
        <Link href={`/${locale}/contact`} className="font-medium text-accent underline-offset-2 hover:underline">
          contact us
        </Link>
        .
      </p>
    </div>
  )
}
