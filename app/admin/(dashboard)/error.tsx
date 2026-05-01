'use client'

export default function AdminDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="card-glass rounded-3xl p-6 md:p-8">
      <span className="section-label">Admin dashboard</span>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        The dashboard could not finish loading.
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Your admin shell loaded, but one of the server-side dashboard requests failed. Try again, and if it keeps happening,
        check the server logs for the error digest below.
      </p>
      {error.digest && (
        <p className="mt-4 rounded-xl border border-border bg-surface/70 px-4 py-3 text-xs text-muted">
          Digest: <span className="font-mono text-text">{error.digest}</span>
        </p>
      )}
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  )
}
