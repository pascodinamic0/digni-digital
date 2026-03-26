'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

type Row = Record<string, unknown>

export function PipelineBoard() {
  const [data, setData] = useState<{
    pipelines: Row[]
    stages: Row[]
    deals: Row[]
    contacts: Row[]
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [pipelineId, setPipelineId] = useState<string | null>(null)
  const [newContact, setNewContact] = useState({ fullName: '', email: '', source: 'Website' })
  const [msg, setMsg] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/crm')
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed')
      setData(j)
      setPipelineId((prev) => prev ?? (j.pipelines?.[0]?.id ? String(j.pipelines[0].id) : null))
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const stages = useMemo(() => {
    if (!data || !pipelineId) return []
    return (data.stages as { id: string; pipeline_id: string; name: string; sort_order: number }[])
      .filter((s) => s.pipeline_id === pipelineId)
      .sort((a, b) => a.sort_order - b.sort_order)
  }, [data, pipelineId])

  const dealsInPipeline = useMemo(() => {
    if (!data || !pipelineId) return []
    return (data.deals as Record<string, unknown>[]).filter((d) => d.pipeline_id === pipelineId)
  }, [data, pipelineId])

  const contactById = useMemo(() => {
    const m = new Map<string, string>()
    ;(data?.contacts as { id: string; full_name: string }[] | undefined)?.forEach((c) => {
      m.set(c.id, c.full_name)
    })
    return m
  }, [data])

  const patchDeal = async (
    dealId: string,
    payload: { stageId?: string; title?: string | null; context?: string | null; valueCents?: number | null }
  ) => {
    const res = await fetch(`/api/admin/crm/deals/${dealId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Update failed')
      return
    }
    await load()
  }

  const moveDeal = async (dealId: string, stageId: string) => {
    await patchDeal(dealId, { stageId })
  }

  const addContact = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    const res = await fetch('/api/admin/crm/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: newContact.fullName,
        email: newContact.email || undefined,
        source: newContact.source,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Failed')
      return
    }
    setNewContact({ fullName: '', email: '', source: 'Website' })
    const contactId = j.contact?.id as string
    if (contactId && pipelineId && stages[0]) {
      const dealRes = await fetch('/api/admin/crm/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactId,
          pipelineId,
          stageId: stages[0].id,
          title: 'New deal',
        }),
      })
      const dealJ = await dealRes.json()
      if (!dealRes.ok) {
        setMsg(dealJ.error || 'Could not create deal')
        await load()
        return
      }
    }
    await load()
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-muted">
        <span
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border-accent border-t-accent"
          aria-hidden
        />
        Loading pipeline…
      </div>
    )
  }

  if (!data) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/10 px-5 py-4 text-sm text-destructive">
        {msg ?? 'Could not load pipeline data.'}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {msg && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {msg}
        </p>
      )}
      <section className="card-glass rounded-2xl p-5 md:p-6">
        <span className="section-label">Quick add</span>
        <h2 className="font-display mb-4 text-xl font-semibold text-text">New contact + deal</h2>
        <form onSubmit={addContact} className="flex flex-wrap items-end gap-3">
          <label className="text-sm text-muted">
            Name
            <input
              className="mt-1 block rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newContact.fullName}
              onChange={(e) => setNewContact((p) => ({ ...p, fullName: e.target.value }))}
              required
            />
          </label>
          <label className="text-sm text-muted">
            Email
            <input
              type="email"
              className="mt-1 block rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newContact.email}
              onChange={(e) => setNewContact((p) => ({ ...p, email: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted">
            Source
            <input
              className="mt-1 block rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newContact.source}
              onChange={(e) => setNewContact((p) => ({ ...p, source: e.target.value }))}
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            Create
          </button>
        </form>
      </section>

      <section>
        <span className="section-label">Board</span>
        <h2 className="font-display mb-4 text-xl font-semibold text-text">Stages</h2>
        <select
          className="mb-4 rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
          value={pipelineId ?? ''}
          onChange={(e) => setPipelineId(e.target.value)}
        >
          {data.pipelines.map((p) => (
            <option key={String(p.id)} value={String(p.id)}>
              {String(p.name)}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage.id} className="card-glass flex min-h-[220px] flex-col rounded-2xl p-4">
              <h3 className="mb-3 border-b border-border-accent/20 pb-2 text-sm font-semibold text-text">
                {stage.name}
              </h3>
              <ul className="space-y-2">
                {dealsInPipeline
                  .filter((d) => d.stage_id === stage.id)
                  .map((deal) => (
                    <li
                      key={String(deal.id)}
                      className="rounded-xl border border-border bg-surface-light/30 p-3 text-sm transition-colors hover:border-border-accent/40"
                    >
                      <label className="block text-[10px] font-semibold uppercase tracking-wide text-muted">
                        Deal title
                        <input
                          defaultValue={String(deal.title || 'Deal')}
                          className="mt-0.5 w-full rounded-md border border-border/80 bg-background px-2 py-1.5 text-sm font-medium text-text"
                          onBlur={(e) => {
                            const v = e.target.value.trim()
                            if (v && v !== String(deal.title || '')) {
                              void patchDeal(String(deal.id), { title: v })
                            }
                          }}
                        />
                      </label>
                      <div className="mt-2 text-muted text-xs">{contactById.get(String(deal.contact_id)) || 'Contact'}</div>
                      <label className="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-muted">
                        Notes
                        <textarea
                          defaultValue={deal.context != null ? String(deal.context) : ''}
                          rows={2}
                          className="mt-0.5 w-full resize-none rounded-md border border-border/80 bg-background px-2 py-1.5 text-xs text-text"
                          placeholder="Context…"
                          onBlur={(e) => {
                            const v = e.target.value.trim()
                            const prev = deal.context != null ? String(deal.context) : ''
                            if (v !== prev) {
                              void patchDeal(String(deal.id), { context: v || null })
                            }
                          }}
                        />
                      </label>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {stages
                          .filter((s) => s.id !== stage.id)
                          .map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              className="rounded-md border border-border bg-background px-2 py-0.5 text-[10px] text-muted transition-colors hover:border-border-accent hover:text-accent"
                              onClick={() => moveDeal(String(deal.id), s.id)}
                            >
                              → {s.name}
                            </button>
                          ))}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
