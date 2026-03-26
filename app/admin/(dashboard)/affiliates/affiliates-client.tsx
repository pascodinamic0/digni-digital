'use client'

import { useState } from 'react'
import type { AffiliateApplicationRow } from '@/lib/types/database'

type Props = {
  initialRows: AffiliateApplicationRow[]
}

export function AffiliatesClient({ initialRows }: Props) {
  const [rows, setRows] = useState(initialRows)

  const refresh = async () => {
    const res = await fetch('/api/admin/affiliates')
    const j = await res.json()
    if (j.rows) setRows(j.rows)
  }

  const downloadCsv = () => {
    window.location.href = '/api/admin/affiliates?format=csv'
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => void refresh()}
          className="rounded-lg border border-border-accent/40 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-border-accent hover:text-text"
        >
          Refresh
        </button>
        <button
          type="button"
          onClick={downloadCsv}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Download Excel (CSV)
        </button>
      </div>

      <div className="card-glass overflow-hidden rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border-accent/25 bg-surface/90">
              <tr>
                <th className="p-4 font-semibold text-text">Submitted</th>
                <th className="p-4 font-semibold text-text">Name</th>
                <th className="p-4 font-semibold text-text">Email</th>
                <th className="p-4 font-semibold text-text">Phone</th>
                <th className="p-4 font-semibold text-text">Audience</th>
                <th className="p-4 font-semibold text-text">Social</th>
                <th className="p-4 font-semibold text-text">Message</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-border/50 transition-colors hover:bg-surface-light/40">
                  <td className="whitespace-nowrap p-4 text-muted">
                    {new Date(r.created_at).toLocaleString()}
                  </td>
                  <td className="p-4">{r.name}</td>
                  <td className="p-4">{r.email}</td>
                  <td className="max-w-[140px] truncate p-4" title={r.phone ?? undefined}>
                    {r.phone ?? '—'}
                  </td>
                  <td className="p-4">{r.audience_size ?? '—'}</td>
                  <td className="max-w-[200px] p-4 text-xs text-muted">
                    {[r.instagram, r.tiktok, r.youtube].filter(Boolean).join(' · ') || '—'}
                  </td>
                  <td className="max-w-[min(320px,40vw)] truncate p-4 text-muted" title={r.message ?? undefined}>
                    {r.message ?? '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && <p className="p-8 text-center text-muted">No affiliate applications yet.</p>}
      </div>
    </div>
  )
}
