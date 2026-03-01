'use client'

import { useRef, useEffect, useState } from 'react'

interface VideoThumbnailProps {
  src: string
  onPlay: () => void
}

export default function VideoThumbnail({ src, onPlay }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      try {
        if (video.readyState >= 2) {
          video.currentTime = 1
          setIsLoaded(true)
        }
      } catch {
        // Seek may fail on some browsers; thumbnail will still render
      }
    }

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setHasError(true)
    }

    const handleCanPlayThrough = () => {
      setIsLoaded(true)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)

    const timer = setTimeout(() => {
      try {
        video.load()
      } catch {
        // load() may throw in some edge cases
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
    }
  }, [src])

  // Use the src as-is - Next.js handles public folder paths
  const videoSrc = src

  return (
    <div
      className="relative aspect-video bg-gradient-to-br from-surface-light/20 to-black/40 group-hover:from-surface-light/30 group-hover:to-black/50 transition-colors overflow-hidden cursor-pointer"
      onClick={onPlay}
      role="button"
      tabIndex={0}
      aria-label="Play video"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onPlay()
        }
      }}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`w-full h-full object-cover transition-opacity ${isLoaded ? 'opacity-70 group-hover:opacity-90' : 'opacity-0'}`}
          preload="metadata"
          muted
          playsInline
          aria-label="Video preview"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-surface-light/10">
          <p className="text-muted text-sm">Video unavailable</p>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" aria-hidden>
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-success/30 transition-colors shadow-lg pointer-events-none">
          <svg className="w-8 h-8 text-text ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
