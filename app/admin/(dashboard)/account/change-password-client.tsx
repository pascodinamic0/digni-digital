'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { AdminPanel } from '@/app/admin/components/AdminPanel'

export function ChangePasswordClient() {
  const [email, setEmail] = useState<string | null>(null)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'working' | 'done' | 'error'>('idle')
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()
    void supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null)
    })
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    if (!email) {
      setMsg('Not signed in.')
      setStatus('error')
      return
    }
    if (newPassword.length < 8) {
      setMsg('New password must be at least 8 characters.')
      setStatus('error')
      return
    }
    if (newPassword !== confirmPassword) {
      setMsg('New password and confirmation do not match.')
      setStatus('error')
      return
    }
    if (newPassword === currentPassword) {
      setMsg('New password must be different from the current one.')
      setStatus('error')
      return
    }

    setStatus('working')
    const supabase = createClient()

    const { error: signErr } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password: currentPassword,
    })
    if (signErr) {
      setStatus('error')
      setMsg(signErr.message || 'Current password is incorrect.')
      return
    }

    const { error: upErr } = await supabase.auth.updateUser({ password: newPassword })
    if (upErr) {
      setStatus('error')
      setMsg(upErr.message || 'Could not update password.')
      return
    }

    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setStatus('done')
    setMsg('Password updated. Use the new password next time you sign in.')
  }

  return (
    <AdminPanel>
      <h2 className="font-display text-lg font-semibold text-text">Change password</h2>
      <p className="mt-2 text-sm text-muted">
        We verify your current password, then set the new one. If you use magic link only, run{' '}
        <code className="rounded bg-background px-1 text-xs">bun run bootstrap-admin</code> with{' '}
        <code className="rounded bg-background px-1 text-xs">ADMIN_BOOTSTRAP_PASSWORD</code> once to create a password.
      </p>

      <form onSubmit={(e) => void submit(e)} className="mt-6 max-w-md space-y-4">
        <label className="block text-sm">
          <span className="text-muted">Account email</span>
          <input
            type="email"
            readOnly
            value={email ?? '…'}
            className="mt-1 w-full cursor-not-allowed rounded-lg border border-border bg-surface-light/50 px-3 py-2.5 text-sm text-muted"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Current password</span>
          <input
            type="password"
            autoComplete="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">New password</span>
          <input
            type="password"
            autoComplete="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={8}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Confirm new password</span>
          <input
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
          />
        </label>
        <button
          type="submit"
          disabled={status === 'working'}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === 'working' ? 'Updating…' : 'Update password'}
        </button>
      </form>

      {msg ? (
        <p
          className={`mt-4 text-sm ${status === 'error' ? 'text-destructive' : status === 'done' ? 'text-success' : 'text-muted'}`}
        >
          {msg}
        </p>
      ) : null}
    </AdminPanel>
  )
}
