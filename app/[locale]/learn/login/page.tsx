'use client'

import { useState } from 'react'
import { useLocale } from '@/app/context/LocaleContext'
import { createClient } from '@/lib/supabase/client'

export default function StudentLoginPage() {
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
    setMsg('Check your email for the login link.')
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-lg">
        <h1 className="font-display text-2xl font-bold text-text mb-2">Learning portal</h1>
        <p className="text-muted text-sm mb-6">Enter the email you used when you received your invite.</p>
        <form onSubmit={sendLink} className="space-y-4">
          <label className="block">
            <span className="text-sm text-muted">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-text"
              required
              autoComplete="email"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-lg bg-accent py-2.5 font-semibold text-background hover:opacity-90 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send magic link'}
          </button>
        </form>
        {msg && <p className="mt-4 text-sm text-muted">{msg}</p>}
      </div>
    </div>
  )
}
