'use client'

import Link from 'next/link'
import { defaultLocale } from '@/i18n/routing'
import type { EnrollmentStatus } from '@/lib/types/database'

type Row = {
  id: string
  user_id: string
  status: EnrollmentStatus
  enrolled_at: string
  invited_at: string | null
  last_activity_at: string | null
  courses: { id: string; title: string; slug: string } | null
  profile: { email: string | null; full_name: string | null } | null
}

export function StudentsClient({ initialRows }: { initialRows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border-light/80">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="border-b border-border-light/80 bg-surface/60 text-muted">
          <tr>
            <th className="px-4 py-3 font-medium">Learner</th>
            <th className="px-4 py-3 font-medium">Course</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Last activity</th>
            <th className="px-4 py-3 font-medium">Enrolled</th>
          </tr>
        </thead>
        <tbody>
          {initialRows.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-muted">
                No enrollments yet.
              </td>
            </tr>
          ) : (
            initialRows.map((r) => (
              <tr key={r.id} className="border-b border-border-light/40 last:border-0">
                <td className="px-4 py-3 text-text">
                  <span className="font-medium">{r.profile?.full_name ?? '—'}</span>
                  <span className="mt-0.5 block text-xs text-muted">{r.profile?.email ?? r.user_id}</span>
                </td>
                <td className="px-4 py-3">
                  {r.courses ? (
                    <Link
                      href={`/admin/courses/${r.courses.id}/enrollments`}
                      className="text-accent hover:underline"
                    >
                      {r.courses.title}
                    </Link>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="px-4 py-3 capitalize text-muted">{r.status}</td>
                <td className="px-4 py-3 text-muted">
                  {r.last_activity_at ? new Date(r.last_activity_at).toLocaleString() : '—'}
                </td>
                <td className="px-4 py-3 text-muted">{new Date(r.enrolled_at).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <p className="border-t border-border-light/60 px-4 py-3 text-xs text-muted">
        Learner view:{' '}
        <a href={`/${defaultLocale}/learn`} className="text-accent hover:underline" target="_blank" rel="noreferrer">
          /{defaultLocale}/learn
        </a>
      </p>
    </div>
  )
}
