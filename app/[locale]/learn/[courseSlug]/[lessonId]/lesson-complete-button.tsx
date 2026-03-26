'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function LessonCompleteButton({ lessonId, initialDone }: { lessonId: string; initialDone: boolean }) {
  const router = useRouter()
  const [done, setDone] = useState(initialDone)
  const [loading, setLoading] = useState(false)

  const toggle = async () => {
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
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={loading}
      className={`rounded-xl px-6 py-3 font-semibold ${
        done ? 'bg-success/20 text-success border border-success/40' : 'bg-accent text-background'
      } disabled:opacity-50`}
    >
      {loading ? 'Saving…' : done ? 'Completed (click to undo)' : 'Mark lesson complete'}
    </button>
  )
}
