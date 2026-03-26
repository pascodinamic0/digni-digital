'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import ThemeToggle from '@/app/components/ThemeToggle'
import { createClient } from '@/lib/supabase/client'
import { defaultLocale } from '@/i18n/routing'

const DEFAULT_ADMIN_EMAIL = 'pascal@digni-digital-llc.com'

function AdminLoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mode, setMode] = useState<'password' | 'magic'>('password')
  const [email, setEmail] = useState(DEFAULT_ADMIN_EMAIL)
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'working' | 'sent' | 'error'>('idle')
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    const err = searchParams.get('error')
    if (err === 'forbidden') {
      setMsg(
        'Signed in, but profiles.role is not admin yet. Fix A — add to .env.local (restart dev): ADMIN_EMAILS=pascal@digni-digital-llc.com\n\nFix B — Supabase SQL (uses auth id, works if email column is empty):\n\nupdate public.profiles p set role = \'admin\' from auth.users u where p.id = u.id and lower(u.email) = lower(\'pascal@digni-digital-llc.com\');\n\nIf 0 rows updated, run: bun run bootstrap-admin'
      )
      setStatus('error')
    }
    if (err === 'profile') {
      setMsg(
        'No profile row for your user. Run the platform migration SQL, then sign up again or insert a profiles row for your auth user id.'
      )
      setStatus('error')
    }
  }, [searchParams])

  const signInWithPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) return
    setStatus('working')
    setMsg(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    })
    if (error) {
      setStatus('error')
      setMsg(error.message)
      return
    }
    const { data: sessionData } = await supabase.auth.getSession()
    if (!sessionData.session) {
      setStatus('error')
      setMsg('Session was not created. Check Supabase Auth settings and try again.')
      return
    }
    await router.refresh()
    window.location.assign('/admin')
  }

  const sendLink = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('working')
    setMsg(null)
    const supabase = createClient()
    const site = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${site}/auth/callback?next=/admin`,
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
    <div className="relative min-h-screen bg-background font-body">
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-mesh" aria-hidden />
      <div className="grain-overlay z-[1] opacity-[0.02]" aria-hidden />

      <div className="absolute right-4 top-4 z-20 flex items-center gap-2 sm:right-6 sm:top-6">
        <Link
          href={`/${defaultLocale}`}
          className="hidden rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-medium hover:text-text sm:inline-flex"
        >
          View site
        </Link>
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6 pt-16 sm:pt-6">
        <div className="card-glass w-full max-w-md rounded-3xl p-8 shadow-card md:p-10">
          <span className="section-label">Secure access</span>
          <h1 className="font-display mb-2 text-3xl font-bold tracking-tight">
            <span className="gradient-text">Admin sign in</span>
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-muted">Super admin for Digni Digital — same look as the public site.</p>

          <div className="mb-8 flex rounded-xl border border-border-light/80 bg-surface/40 p-1">
            <button
              type="button"
              onClick={() => {
                setMode('password')
                setMsg(null)
                setStatus('idle')
              }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                mode === 'password'
                  ? 'bg-accent/15 text-accent shadow-sm ring-1 ring-border-accent'
                  : 'text-muted hover:text-text'
              }`}
            >
              Password
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('magic')
                setMsg(null)
                setStatus('idle')
              }}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                mode === 'magic'
                  ? 'bg-accent/15 text-accent shadow-sm ring-1 ring-border-accent'
                  : 'text-muted hover:text-text'
              }`}
            >
              Magic link
            </button>
          </div>

        {mode === 'password' ? (
          <form onSubmit={signInWithPassword} className="space-y-4">
            <label className="block">
              <span className="text-sm text-muted">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                required
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="text-sm text-muted">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                required
                autoComplete="current-password"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'working'}
              className="w-full rounded-lg bg-accent py-3 font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === 'working' ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        ) : (
          <form onSubmit={sendLink} className="space-y-4">
            <label className="block">
              <span className="text-sm text-muted">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                required
                autoComplete="email"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'working'}
              className="w-full rounded-lg bg-accent py-3 font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === 'working' ? 'Sending…' : 'Send magic link'}
            </button>
          </form>
        )}

        {msg && (
          <p
            className={`mt-6 rounded-lg border px-4 py-3 text-sm whitespace-pre-wrap ${
              status === 'error'
                ? 'border-destructive/30 bg-destructive/10 text-destructive'
                : 'border-border-accent/20 bg-accent/5 text-muted'
            }`}
          >
            {msg}
          </p>
        )}
        </div>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="relative min-h-screen bg-background">
          <div className="pointer-events-none fixed inset-0 bg-gradient-mesh" aria-hidden />
          <div className="flex min-h-screen items-center justify-center p-6 text-muted">Loading…</div>
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  )
}
