'use client'

import { useCallback, useEffect, useState } from 'react'
import { SITE_FEATURE_FLAG_KEYS, SITE_FEATURE_FLAG_META } from '@/lib/site-feature-flags-constants'

type FlagRow = {
  flagKey: string
  enabled: boolean
  label: string
  description: string
}

export function MarketingClient() {
  const [flags, setFlags] = useState<FlagRow[]>([])
  const [busyKey, setBusyKey] = useState<string | null>(null)
  const [msg, setMsg] = useState<string | null>(null)
  const [loadErr, setLoadErr] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoadErr(null)
    try {
      const res = await fetch('/api/admin/site-feature-flags')
      const data = await res.json()
      if (!res.ok) {
        setLoadErr(data.error ?? 'Failed to load flags')
        return
      }
      setFlags(Array.isArray(data.flags) ? data.flags : [])
    } catch {
      setLoadErr('Failed to load flags')
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const toggle = async (flagKey: string, enabled: boolean) => {
    setBusyKey(flagKey)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/site-feature-flags', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flagKey, enabled }),
      })
      const data = await res.json()
      if (!res.ok) {
        setMsg(data.error ?? 'Save failed')
        return
      }
      setFlags((prev) => prev.map((f) => (f.flagKey === flagKey ? { ...f, enabled } : f)))
      setMsg('Saved.')
    } finally {
      setBusyKey(null)
    }
  }

  const taskQueue = flags.find((f) => f.flagKey === SITE_FEATURE_FLAG_KEYS.AI_EMPLOYEE_TASK_QUEUE_DEMO)

  return (
    <div className="space-y-6">
      {loadErr ? (
        <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {loadErr}
        </p>
      ) : null}
      {msg ? (
        <p className={`text-sm ${msg === 'Saved.' ? 'text-success' : 'text-destructive'}`}>{msg}</p>
      ) : null}

      <div className="card-glass rounded-2xl border border-border-light p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-lg font-semibold text-text">
              {taskQueue?.label ?? SITE_FEATURE_FLAG_META[SITE_FEATURE_FLAG_KEYS.AI_EMPLOYEE_TASK_QUEUE_DEMO].label}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {taskQueue?.description ?? SITE_FEATURE_FLAG_META[SITE_FEATURE_FLAG_KEYS.AI_EMPLOYEE_TASK_QUEUE_DEMO].description}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={taskQueue?.enabled ?? true}
            disabled={busyKey !== null || !taskQueue}
            onClick={() => taskQueue && void toggle(taskQueue.flagKey, !taskQueue.enabled)}
            className={`relative h-10 w-[3.25rem] shrink-0 rounded-full transition-colors disabled:opacity-60 ${
              taskQueue?.enabled ? 'bg-success' : 'bg-muted/40 border border-border'
            }`}
          >
            <span
              className={`absolute top-1 h-8 w-8 rounded-full bg-background shadow-sm transition-[left] duration-200 ${
                taskQueue?.enabled ? 'left-6' : 'left-1'
              }`}
            />
            <span className="sr-only">Toggle TaskQueueDemo section</span>
          </button>
        </div>
        {!taskQueue && !loadErr ? (
          <p className="mt-4 text-xs text-muted">Loading…</p>
        ) : null}
      </div>
    </div>
  )
}
