'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import type { EnrollmentRow, EnrollmentStatus } from '@/lib/types/database'
import { CourseSubnav } from '../course-subnav'

type Row = EnrollmentRow & {
  profile: { id: string; email: string | null; full_name: string | null } | null
}

const STATUSES: EnrollmentStatus[] = ['pending', 'active', 'completed', 'cancelled']

export function EnrollmentsClient({ courseId, courseTitle }: { courseId: string; courseTitle: string }) {
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [enrolling, setEnrolling] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/lms/enrollments?courseId=${encodeURIComponent(courseId)}`)
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed to load')
      setRows((j.enrollments as Row[]) ?? [])
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
      setRows([])
    } finally {
      setLoading(false)
    }
  }, [courseId])

  useEffect(() => {
    load()
  }, [load])

  const inviteAndEnroll = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setEnrolling(true)
    setMsg(null)
    setSuccess(null)
    try {
      const res = await fetch('/api/admin/lms/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, email: email.trim() }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Invite failed')
      setEmail('')
      setSuccess((j.message as string) || 'Invite sent.')
      await load()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
    } finally {
      setEnrolling(false)
    }
  }

  const setStatus = async (id: string, status: EnrollmentStatus) => {
    setMsg(null)
    const res = await fetch(`/api/admin/lms/enrollments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Update failed')
      return
    }
    await load()
  }

  const remove = async (id: string) => {
    if (!confirm('Remove this enrollment?')) return
    setMsg(null)
    const res = await fetch(`/api/admin/lms/enrollments/${id}`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Remove failed')
      return
    }
    await load()
  }

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin" className="text-sm font-medium text-accent hover:underline">
          ← Overview
        </Link>
        <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-text md:text-4xl">Enrollments</h1>
        <p className="mt-1 text-muted">{courseTitle}</p>
      </div>

      <CourseSubnav courseId={courseId} />

      {msg && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{msg}</p>
      )}
      {success && (
        <p className="rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">{success}</p>
      )}

      <section className="card-glass rounded-2xl p-5 md:p-6">
        <span className="section-label">Invite</span>
        <h2 className="font-display mb-2 text-xl font-semibold text-text">Send invite email</h2>
        <p className="mb-4 text-sm text-muted">
          Sends a secure link by email (Resend). New learners set their password through Supabase after opening the link; existing accounts are enrolled as soon as they open it. Enrollment appears here after they complete that step.
        </p>
        <form onSubmit={inviteAndEnroll} className="flex flex-wrap items-end gap-3">
          <label className="min-w-[240px] flex-1 text-sm text-muted">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="learner@example.com"
              required
            />
          </label>
          <button
            type="submit"
            disabled={enrolling}
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background disabled:opacity-60"
          >
            {enrolling ? 'Working…' : 'Invite & enroll'}
          </button>
        </form>
      </section>

      <section className="card-glass overflow-hidden rounded-2xl">
        <div className="border-b border-border-light/80 px-5 py-4 md:px-6">
          <h2 className="font-display text-lg font-semibold text-text">Roster</h2>
        </div>
        {loading ? (
          <div className="flex items-center gap-3 px-5 py-8 text-muted md:px-6">
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border-accent border-t-accent" />
            Loading…
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border-light/80 bg-surface/50 text-muted">
                  <th className="px-5 py-3 font-medium md:px-6">Name</th>
                  <th className="px-3 py-3 font-medium">Email</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Enrolled</th>
                  <th className="px-5 py-3 font-medium md:px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-8 text-center text-muted md:px-6">
                      No enrollments yet.
                    </td>
                  </tr>
                ) : (
                  rows.map((r) => (
                    <tr key={r.id} className="border-b border-border-light/50 last:border-0">
                      <td className="px-5 py-3 text-text md:px-6">{r.profile?.full_name ?? '—'}</td>
                      <td className="px-3 py-3 text-muted">{r.profile?.email ?? '—'}</td>
                      <td className="px-3 py-3">
                        <select
                          className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-text"
                          value={r.status}
                          onChange={(e) => void setStatus(r.id, e.target.value as EnrollmentStatus)}
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-3 text-xs text-muted tabular-nums">
                        {r.enrolled_at ? new Date(r.enrolled_at).toLocaleString() : '—'}
                      </td>
                      <td className="px-5 py-3 md:px-6">
                        <button
                          type="button"
                          className="rounded-lg border border-destructive/30 px-3 py-1.5 text-xs text-destructive hover:bg-destructive/10"
                          onClick={() => void remove(r.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
