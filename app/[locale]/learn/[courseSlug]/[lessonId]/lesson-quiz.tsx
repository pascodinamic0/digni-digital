'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export type QuizQuestionPublic = {
  id: string
  prompt: string
  sort_order: number
  choice_a: string
  choice_b: string
  choice_c: string
  choice_d: string
}

export function LessonQuiz({
  quizId,
  initialPassed,
  questions,
}: {
  quizId: string
  initialPassed: boolean
  questions: QuizQuestionPublic[]
}) {
  const router = useRouter()
  const [passed, setPassed] = useState(initialPassed)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ scorePercent: number; passed: boolean } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const choices = (q: QuizQuestionPublic) => [
    q.choice_a,
    q.choice_b,
    q.choice_c,
    q.choice_d,
  ]

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    for (const q of questions) {
      if (answers[q.id] === undefined) {
        setError('Answer every question before submitting.')
        return
      }
    }

    setLoading(true)
    try {
      const res = await fetch('/api/learn/quiz-attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizId, answers }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Submit failed')
      setResult({ scorePercent: j.scorePercent as number, passed: j.passed as boolean })
      if (j.passed) {
        setPassed(true)
        router.refresh()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error')
    } finally {
      setLoading(false)
    }
  }

  if (passed && !result) {
    return (
      <div className="mb-8 rounded-2xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
        Quiz passed. You can mark this lesson complete when you’re ready.
      </div>
    )
  }

  return (
    <div className="mb-8 rounded-2xl border border-border-light/80 bg-surface/40 p-5 md:p-6">
      <span className="section-label">Quiz</span>
      <h2 className="font-display mt-1 text-lg font-semibold text-text">Check your understanding</h2>
      <p className="mt-1 text-sm text-muted">Pass to unlock marking this lesson complete (if a pass score applies).</p>

      <form onSubmit={submit} className="mt-6 space-y-6">
        {questions.map((q, i) => (
          <fieldset key={q.id} className="space-y-2">
            <legend className="text-sm font-medium text-text">
              {i + 1}. {q.prompt}
            </legend>
            <div className="space-y-2 pl-0">
              {choices(q).map((label, idx) => (
                <label
                  key={idx}
                  className="flex cursor-pointer items-start gap-2 rounded-lg border border-border/60 bg-background/50 px-3 py-2 text-sm hover:border-accent/40"
                >
                  <input
                    type="radio"
                    name={q.id}
                    className="mt-1"
                    checked={answers[q.id] === idx}
                    onChange={() => setAnswers((a) => ({ ...a, [q.id]: idx }))}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        {error && <p className="text-sm text-red-400">{error}</p>}

        {result && (
          <p className={`text-sm font-medium ${result.passed ? 'text-success' : 'text-amber-400'}`}>
            Score: {result.scorePercent}%. {result.passed ? 'Passed.' : 'Not passed, review the material and try again.'}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || passed}
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background disabled:opacity-50"
        >
          {loading ? 'Submitting…' : passed ? 'Passed' : 'Submit quiz'}
        </button>
      </form>
    </div>
  )
}
