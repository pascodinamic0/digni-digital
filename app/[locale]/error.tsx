'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="w-14 h-14 relative flex items-center justify-center">
            <div className="absolute w-7 h-10 bg-accent transform -skew-x-12 -translate-x-0.5 rounded-sm" style={{ opacity: 0.9 }} />
            <div className="absolute w-7 h-10 bg-accent transform skew-x-12 translate-x-0.5 rounded-sm" style={{ opacity: 0.4 }} />
          </div>
        </div>
        <h1 className="font-display text-4xl font-bold text-text mb-4">Something Went Wrong</h1>
        <p className="text-muted mb-8 leading-relaxed">
          An unexpected error occurred. Our team has been notified.
          You can try refreshing the page or head back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary px-6 py-3">
            Try Again
          </button>
          <a href="/" className="btn-secondary px-6 py-3 text-center">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
