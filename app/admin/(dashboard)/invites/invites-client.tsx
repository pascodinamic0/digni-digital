'use client'

import Link from 'next/link'

type Row = {
  id: string
  email: string
  course_id: string
  expires_at: string
  used_at: string | null
  revoked_at: string | null
  created_at: string
  course: { id: string; title: string; slug: string } | null
}

function statusOf(r: Row): string {
  if (r.revoked_at) return 'revoked'
  if (r.used_at) return 'used'
  if (new Date(r.expires_at) < new Date()) return 'expired'
  return 'pending'
}

export function InvitesClient({ initialRows }: { initialRows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border-light/80">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="border-b border-border-light/80 bg-surface/60 text-muted">
          <tr>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Course</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Expires</th>
            <th className="px-4 py-3 font-medium">Created</th>
          </tr>
        </thead>
        <tbody>
          {initialRows.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-muted">
                No invites yet. Open a course → Enrollments → send an invite.
              </td>
            </tr>
          ) : (
            initialRows.map((r) => (
              <tr key={r.id} className="border-b border-border-light/40 last:border-0">
                <td className="px-4 py-3 font-mono text-xs text-text">{r.email}</td>
                <td className="px-4 py-3">
                  {r.course ? (
                    <Link href={`/admin/courses/${r.course.id}/enrollments`} className="text-accent hover:underline">
                      {r.course.title}
                    </Link>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="px-4 py-3 capitalize text-muted">{statusOf(r)}</td>
                <td className="px-4 py-3 text-muted">{new Date(r.expires_at).toLocaleString()}</td>
                <td className="px-4 py-3 text-muted">{new Date(r.created_at).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
