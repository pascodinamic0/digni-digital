'use client'

import { useEffect, useState } from 'react'

type Props = {
  lessonId: string
  hasUploadedVideo: boolean
  videoUrl: string | null
  title: string
}

export function LessonVideoPlayer({ lessonId, hasUploadedVideo, videoUrl, title }: Props) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(hasUploadedVideo)

  useEffect(() => {
    if (!hasUploadedVideo) return
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setErr(null)
      try {
        const res = await fetch(`/api/learn/lesson-video?lessonId=${encodeURIComponent(lessonId)}`)
        const j = await res.json()
        if (!res.ok) throw new Error(j.error || 'Failed to load video')
        if (!cancelled) setSignedUrl(j.url as string)
      } catch (e) {
        if (!cancelled) setErr(e instanceof Error ? e.message : 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [lessonId, hasUploadedVideo])

  if (hasUploadedVideo) {
    if (loading) {
      return (
        <div className="bg-muted mb-6 flex aspect-video items-center justify-center rounded-xl">
          <span className="text-sm text-muted">Loading video…</span>
        </div>
      )
    }
    if (err) {
      return (
        <div className="bg-destructive/10 mb-6 rounded-xl border border-destructive/30 px-4 py-3 text-sm text-destructive">
          {err}
        </div>
      )
    }
    if (signedUrl) {
      return (
        <div className="mb-6 overflow-hidden rounded-xl bg-black">
          <video src={signedUrl} controls className="aspect-video w-full" title={title} playsInline />
        </div>
      )
    }
  }

  if (videoUrl) {
    return (
      <div className="mb-6 aspect-video overflow-hidden rounded-xl bg-muted">
        <iframe
          src={videoUrl}
          className="h-full w-full"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return null
}
