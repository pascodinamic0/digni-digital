'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { CourseSubnav } from '../course-subnav'

type Learner = {
  user_id: string
  completed_lessons: number
  total_lessons: number
  completion_percent: number
  profile: { id: string; email: string | null; full_name: string | null } | null
}

type ProgressPayload = {
  totalLessons: number
  learners: Learner[]
  summary: { enrolled: number; avgCompletionPercent: number }
}

export function ProgressClient({ courseId, courseTitle }: { courseId: string; courseTitle: string }) {
  const [data, setData] = useState<ProgressPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/lms/progress?courseId=${encodeURIComponent(courseId)}`)
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed to load')
      setData({
        totalLessons: j.totalLessons as number,
        learners: (j.learners as Learner[]) ?? [],
        summary: j.summary as ProgressPayload['summary'],
      })
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [courseId])

  useEffect(() => {
    load()
  }, [load])

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin" className="text-sm font-medium text-accent hover:underline">
          ← Overview
        </Link>
        <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-text md:text-4xl">Progress</h1>
        <p className="mt-1 text-muted">{courseTitle}</p>
      </div>

      <CourseSubnav courseId={courseId} />

      {msg && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{msg}</p>
      )}

      {loading || !data ? (
        <div className="flex items-center gap-3 text-muted">
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border-accent border-t-accent" />
          Loading progress…
        </div>
      ) : (
        <>
          <ul className="grid gap-3 sm:grid-cols-3">
            <li className="card-glass rounded-2xl px-5 py-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">Lessons in course</span>
              <p className="mt-1 font-display text-3xl font-bold tabular-nums text-accent">{data.totalLessons}</p>
            </li>
            <li className="card-glass rounded-2xl px-5 py-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">Enrolled learners</span>
              <p className="mt-1 font-display text-3xl font-bold tabular-nums text-accent">{data.summary.enrolled}</p>
            </li>
            <li className="card-glass rounded-2xl px-5 py-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">Avg. completion</span>
              <p className="mt-1 font-display text-3xl font-bold tabular-nums text-accent">{data.summary.avgCompletionPercent}%</p>
            </li>
          </ul>

          <section className="card-glass overflow-hidden rounded-2xl">
            <div className="border-b border-border-light/80 px-5 py-4 md:px-6">
              <h2 className="font-display text-lg font-semibold text-text">Per learner</h2>
              <p className="mt-1 text-sm text-muted">Read-only counts from lesson completion records.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border-light/80 bg-surface/50 text-muted">
                    <th className="px-5 py-3 font-medium md:px-6">Learner</th>
                    <th className="px-3 py-3 font-medium">Email</th>
                    <th className="px-3 py-3 font-medium tabular-nums">Completed</th>
                    <th className="px-5 py-3 font-medium tabular-nums md:px-6">%</th>
                  </tr>
                </thead>
                <tbody>
                  {data.learners.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-5 py-8 text-center text-muted md:px-6">
                        No enrolled learners or no lessons yet.
                      </td>
                    </tr>
                  ) : (
                    data.learners.map((l) => (
                      <tr key={l.user_id} className="border-b border-border-light/50 last:border-0">
                        <td className="px-5 py-3 text-text md:px-6">{l.profile?.full_name ?? '—'}</td>
                        <td className="px-3 py-3 text-muted">{l.profile?.email ?? '—'}</td>
                        <td className="px-3 py-3 tabular-nums text-muted">
                          {l.completed_lessons} / {l.total_lessons}
                        </td>
                        <td className="px-5 py-3 font-medium tabular-nums text-accent md:px-6">{l.completion_percent}%</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
