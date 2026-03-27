'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function LessonCompleteButton({
  lessonId,
  initialDone,
  canMarkComplete,
  blockReason,
}: {
  lessonId: string
  initialDone: boolean
  canMarkComplete: boolean
  blockReason?: string
}) {
  const router = useRouter()
  const [done, setDone] = useState(initialDone)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggle = async () => {
    setError(null)
    if (!done && !canMarkComplete) {
      setError(blockReason ?? 'Complete all requirements first.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/learn/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, complete: !done }),
      })
      if (!res.ok) {
        const j = await res.json()
        throw new Error(j.error || 'Failed')
      }
      setDone(!done)
      router.refresh()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-10 space-y-3">
      <button
        type="button"
        onClick={toggle}
        disabled={loading || (!done && !canMarkComplete)}
        className={`rounded-xl px-6 py-3 font-semibold ${
          done ? 'border border-success/40 bg-success/20 text-success' : 'bg-accent text-background'
        } disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {loading ? 'Saving…' : done ? 'Completed (click to undo)' : 'Mark lesson complete'}
      </button>
      {!done && !canMarkComplete && blockReason && (
        <p className="max-w-xl text-sm text-muted">{blockReason}</p>
      )}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
