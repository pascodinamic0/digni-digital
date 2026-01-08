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
        // Try to seek to a frame for thumbnail
        if (video.readyState >= 2) {
          video.currentTime = 1
          setIsLoaded(true)
        }
      } catch (err) {
        console.warn('Could not set video time for thumbnail:', err)
      }
    }

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const handleError = (e: Event) => {
      console.error('Video error:', src, e)
      const target = e.target as HTMLVideoElement
      if (target.error) {
        console.error('Video error code:', target.error.code, 'Message:', target.error.message)
        switch (target.error.code) {
          case 1: // MEDIA_ERR_ABORTED
            console.error('Video loading aborted')
            break
          case 2: // MEDIA_ERR_NETWORK
            console.error('Network error while loading video')
            break
          case 3: // MEDIA_ERR_DECODE
            console.error('Error decoding video')
            break
          case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
            console.error('Video format not supported or source not found')
            break
        }
      }
      setHasError(true)
    }

    const handleLoadStart = () => {
      console.log('Video load started:', src)
    }

    const handleCanPlayThrough = () => {
      console.log('Video can play through:', src)
      setIsLoaded(true)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)

    // Force load with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        video.load()
      } catch (err) {
        console.error('Error loading video:', err)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
    }
  }, [src])

  // Use the src as-is - Next.js handles public folder paths
  const videoSrc = src

  return (
    <div className="relative aspect-video bg-gradient-to-br from-surface-light/20 to-black/40 group-hover:from-surface-light/30 group-hover:to-black/50 transition-colors overflow-hidden">
      {!hasError ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className={`w-full h-full object-cover transition-opacity ${isLoaded ? 'opacity-70 group-hover:opacity-90' : 'opacity-0'}`}
          preload="metadata"
          muted
          playsInline
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-surface-light/10">
          <p className="text-muted text-sm">Video unavailable</p>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-success/30 transition-colors shadow-lg pointer-events-none">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
