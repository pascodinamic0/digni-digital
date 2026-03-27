'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { youtubeEmbedSrc } from '@/lib/lms/youtube-embed'

export function WelcomeVideoClient({
  locale,
  embedUrl,
  fallbackMessage,
}: {
  locale: string
  embedUrl: string | null
  fallbackMessage: string
}) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  const continueToCourse = async () => {
    setBusy(true)
    setErr(null)
    try {
      const res = await fetch('/api/learn/welcome-seen', { method: 'POST' })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed')
      router.replace(`/${locale}/learn`)
      router.refresh()
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Error')
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <span className="section-label">Welcome</span>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-text md:text-4xl">
          Congratulations — you&apos;re in
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          {fallbackMessage}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border-light/80 bg-background/80 shadow-lg">
        {embedUrl ? (
          <div className="aspect-video w-full bg-black">
            <iframe
              title="Welcome to the program"
              src={embedUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-surface/80 px-6 text-center">
            <p className="text-lg font-medium text-text">You&apos;re ready to start learning</p>
            <p className="max-w-md text-sm text-muted">
              Add <code className="rounded bg-border/50 px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_LMS_WELCOME_VIDEO_URL</code> to your
              environment for a welcome video (YouTube link).
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {err && <p className="text-sm text-red-400">{err}</p>}
        <button
          type="button"
          onClick={() => void continueToCourse()}
          disabled={busy}
          className="rounded-xl bg-accent px-8 py-3 text-base font-semibold text-background disabled:opacity-50"
        >
          {busy ? 'Opening…' : 'Continue to my course'}
        </button>
        <button
          type="button"
          onClick={() => void continueToCourse()}
          disabled={busy}
          className="text-sm text-muted underline-offset-2 hover:text-text hover:underline"
        >
          Skip intro
        </button>
      </div>
    </div>
  )
}
