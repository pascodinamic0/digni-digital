'use client'

import { useState } from 'react'
import type { AssignmentRow } from '@/lib/types/database'

type Sub = { assignment_id: string; body: string; submitted_at: string }

export function LessonAssignments({
  assignments,
  initialSubs,
}: {
  assignments: AssignmentRow[]
  initialSubs: Sub[]
}) {
  const [subs, setSubs] = useState<Record<string, string>>(() => {
    const m: Record<string, string> = {}
    for (const s of initialSubs) m[s.assignment_id] = s.body
    return m
  })
  const [msg, setMsg] = useState<Record<string, string | null>>({})
  const [saving, setSaving] = useState<Record<string, boolean>>({})

  if (assignments.length === 0) return null

  const save = async (assignmentId: string) => {
    const body = (subs[assignmentId] ?? '').trim()
    if (!body) {
      setMsg((m) => ({ ...m, [assignmentId]: 'Write something before submitting.' }))
      return
    }
    setSaving((s) => ({ ...s, [assignmentId]: true }))
    setMsg((m) => ({ ...m, [assignmentId]: null }))
    try {
      const res = await fetch('/api/learn/assignment-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignmentId, body }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Save failed')
      setMsg((m) => ({ ...m, [assignmentId]: 'Saved.' }))
    } catch (e) {
      setMsg((m) => ({ ...m, [assignmentId]: e instanceof Error ? e.message : 'Error' }))
    } finally {
      setSaving((s) => ({ ...s, [assignmentId]: false }))
    }
  }

  return (
    <section className="border-border mt-10 border-t pt-8">
      <h2 className="font-display mb-4 text-xl font-semibold">Assignments</h2>
      <ul className="space-y-8">
        {assignments.map((a) => (
          <li key={a.id} className="rounded-xl border border-border bg-surface/40 p-4">
            <h3 className="font-medium text-text">{a.title}</h3>
            {a.instructions && <p className="mt-2 whitespace-pre-wrap text-sm text-muted">{a.instructions}</p>}
            <textarea
              className="border-border bg-background text-text mt-4 min-h-[120px] w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Your response…"
              value={subs[a.id] ?? ''}
              onChange={(e) => setSubs((s) => ({ ...s, [a.id]: e.target.value }))}
            />
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background disabled:opacity-50"
                disabled={saving[a.id]}
                onClick={() => void save(a.id)}
              >
                {saving[a.id] ? 'Saving…' : 'Submit'}
              </button>
              {msg[a.id] && <span className="text-sm text-muted">{msg[a.id]}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
