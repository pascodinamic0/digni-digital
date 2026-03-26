'use client'

import { useState } from 'react'
import type { ProgramApplicationRow } from '@/lib/types/database'

type Props = {
  initialRows: ProgramApplicationRow[]
}

export function ApplicationsClient({ initialRows }: Props) {
  const [rows, setRows] = useState(initialRows)
  const [busy, setBusy] = useState<string | null>(null)
  const [msg, setMsg] = useState<string | null>(null)

  const refresh = async () => {
    const res = await fetch('/api/admin/applications')
    const j = await res.json()
    if (j.rows) setRows(j.rows)
  }

  const verify = async (id: string) => {
    setBusy(id)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/applications/${id}/verify`, { method: 'POST' })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed')
      setMsg('Marked payment verified.')
      await refresh()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
    } finally {
      setBusy(null)
    }
  }

  const invite = async (id: string) => {
    setBusy(id)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: id }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed')
      setMsg('Invite sent. Check the user email.')
      await refresh()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="space-y-4">
      {msg && (
        <p className="rounded-lg border border-border-accent/30 bg-accent/5 px-4 py-3 text-sm text-muted">{msg}</p>
      )}
      <div className="card-glass overflow-hidden rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border-accent/25 bg-surface/90">
              <tr>
                <th className="p-4 font-semibold text-text">Name</th>
                <th className="p-4 font-semibold text-text">Email</th>
                <th className="p-4 font-semibold text-text">WhatsApp</th>
                <th className="p-4 font-semibold text-text">Status</th>
                <th className="p-4 font-semibold text-text">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-border/50 transition-colors hover:bg-surface-light/40">
                <td className="p-4">
                  {r.first_name} {r.last_name}
                </td>
                <td className="p-4">{r.email}</td>
                <td className="p-4">{r.whatsapp}</td>
                <td className="p-4 capitalize text-muted">{r.status.replace(/_/g, ' ')}</td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    {r.status === 'submitted' || r.status === 'payment_pending' ? (
                      <button
                        type="button"
                        disabled={busy === r.id}
                        onClick={() => verify(r.id)}
                        className="rounded-lg bg-success/20 px-3 py-1 text-xs font-medium text-success hover:bg-success/30 disabled:opacity-50"
                      >
                        Mark paid (WhatsApp OK)
                      </button>
                    ) : null}
                    {r.status === 'payment_verified' ? (
                      <button
                        type="button"
                        disabled={busy === r.id}
                        onClick={() => invite(r.id)}
                        className="rounded-lg bg-accent px-3 py-1 text-xs font-medium text-on-accent hover:opacity-90 disabled:opacity-50"
                      >
                        Send LMS invite
                      </button>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && <p className="p-8 text-center text-muted">No applications yet.</p>}
      </div>
    </div>
  )
}
