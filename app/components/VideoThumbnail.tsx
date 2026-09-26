'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoThumbnailProps {
  src?: string
  poster?: string | null
  alt?: string
  onPlay: () => void
}

/** Static play tile with a real poster image when one exists. */
export default function VideoThumbnail({ poster, alt = 'Play video', onPlay }: VideoThumbnailProps) {
  return (
    <div
      className="group relative aspect-video overflow-hidden bg-surface-light/20 cursor-pointer"
      onClick={onPlay}
      role="button"
      tabIndex={0}
      aria-label={alt}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onPlay()
        }
      }}
    >
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-surface-light/30 to-black/50" aria-hidden />
      )}
      <div
        className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/20"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 shadow-lg transition-colors group-hover:bg-success/30">
          <Play className="ml-0.5 h-8 w-8 fill-current text-text" aria-hidden />
        </div>
      </div>
    </div>
  )
}
