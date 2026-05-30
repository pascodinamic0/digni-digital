'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { AdminPanel } from '@/app/admin/components/AdminPanel'
import { ExternalLink, RefreshCw, Sparkles, Check, X, Rocket } from 'lucide-react'

type Topic = {
  id: string
  fancy_title: string
  plain_title: string | null
  proposed_slug: string
  research_summary: string | null
  target_audience: string | null
  status: string
  source: string
  discovered_at: string
  reference_urls: string[] | null
}

const STATUS_FILTERS = ['all', 'pending', 'approved', 'published', 'rejected', 'failed'] as const

export function BlogTopicsClient() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [filter, setFilter] = useState<(typeof STATUS_FILTERS)[number]>('pending')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [publishBusyId, setPublishBusyId] = useState<string | null>(null)

  const load = useCallback(async () => {
    const q = filter === 'all' ? '' : `?status=${filter}`
    const res = await fetch(`/api/admin/blog/topics${q}`)
    const j = await res.json()
    if (res.ok) setTopics(j.topics ?? [])
    else setMsg(j.error ?? 'Failed to load')
  }, [filter])

  useEffect(() => {
    void load()
  }, [load])

  const runDiscover = async () => {
    setBusy(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/blog/topics/discover', { method: 'POST' })
      const j = await res.json()
      setMsg(j.message ?? j.error ?? 'Done')
      await load()
    } finally {
      setBusy(false)
    }
  }

  const setStatus = async (id: string, status: 'approved' | 'rejected' | 'pending') => {
    const res = await fetch('/api/admin/blog/topics', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    if (res.ok) await load()
    else {
      const j = await res.json()
      setMsg(j.error ?? 'Update failed')
    }
  }

  const publish = async (id: string) => {
    setPublishBusyId(id)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/blog/topics/${id}/publish`, { method: 'POST' })
      const j = await res.json()
      if (res.ok) {
        setMsg(`Published: ${j.liveUrl ?? 'success'}`)
        await load()
      } else setMsg(j.error ?? 'Publish failed')
    } finally {
      setPublishBusyId(null)
    }
  }

  return (
    <div className="space-y-6">
      <AdminPanel>
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setFilter(s)}
                className={`rounded-lg px-3 py-1.5 text-sm capitalize border transition-colors ${
                  filter === s
                    ? 'border-success bg-success/10 text-success'
                    : 'border-border text-muted hover:border-border-medium'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={busy}
              onClick={() => void runDiscover()}
              className="inline-flex items-center gap-2 rounded-lg bg-success px-4 py-2 text-sm font-medium text-background hover:bg-success/90 disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              {busy ? 'Discovering…' : 'Run discovery agent'}
            </button>
            <button
              type="button"
              onClick={() => void load()}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted hover:text-text"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <Link
              href="/admin/blog"
              className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm text-muted hover:text-text"
            >
              Blog hub
            </Link>
          </div>
        </div>
        {msg && <p className="mt-4 text-sm text-muted">{msg}</p>}
        <p className="mt-3 text-xs text-muted-dark max-w-3xl">
          Cron: <code className="text-muted">GET /api/admin/blog/topics/discover</code> with{' '}
          <code className="text-muted">Authorization: Bearer CRON_SECRET</code> on a schedule (e.g. daily).
          Approve topics, then Publish — catalog careers use the full Future Ready guide template.
        </p>
      </AdminPanel>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {topics.map((t) => (
          <AdminPanel key={t.id} className="flex flex-col h-full">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-success mb-1">{t.status}</p>
              <h3 className="font-display font-bold text-text text-lg leading-snug mb-1">
                {t.fancy_title}
              </h3>
              {t.plain_title && (
                <p className="text-sm text-muted mb-2">{t.plain_title}</p>
              )}
              <p className="text-xs text-muted-dark font-mono mb-3 break-all">{t.proposed_slug}</p>
              {t.research_summary && (
                <p className="text-sm text-muted line-clamp-4 mb-3">{t.research_summary}</p>
              )}
              {t.reference_urls?.length ? (
                <ul className="text-xs space-y-1 mb-3">
                  {t.reference_urls.slice(0, 2).map((url) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success hover:underline inline-flex items-center gap-1"
                      >
                        Source <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-light mt-auto">
              {t.status === 'pending' && (
                <>
                  <button
                    type="button"
                    onClick={() => void setStatus(t.id, 'approved')}
                    className="inline-flex items-center gap-1 rounded-lg bg-success/15 px-3 py-1.5 text-sm text-success hover:bg-success/25"
                  >
                    <Check className="h-4 w-4" /> Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => void setStatus(t.id, 'rejected')}
                    className="inline-flex items-center gap-1 rounded-lg bg-red-500/10 px-3 py-1.5 text-sm text-red-400 hover:bg-red-500/20"
                  >
                    <X className="h-4 w-4" /> Reject
                  </button>
                </>
              )}
              {t.status === 'approved' && (
                <button
                  type="button"
                  disabled={publishBusyId === t.id}
                  onClick={() => void publish(t.id)}
                  className="inline-flex items-center gap-1 rounded-lg border border-success/40 px-3 py-1.5 text-sm text-success hover:bg-success/10 disabled:opacity-50"
                >
                  <Rocket className="h-4 w-4" />
                  {publishBusyId === t.id ? 'Publishing…' : 'Publish'}
                </button>
              )}
              {t.status === 'published' && (
                <Link
                  href={`/us-en/blog/${t.proposed_slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-success hover:underline"
                >
                  View live <ExternalLink className="h-3 w-3" />
                </Link>
              )}
            </div>
          </AdminPanel>
        ))}
      </div>

      {topics.length === 0 && (
        <p className="text-center text-muted py-12">
          No topics in this filter. Run the discovery agent to populate the queue.
        </p>
      )}
    </div>
  )
}
