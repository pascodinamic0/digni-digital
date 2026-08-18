interface VideoThumbnailProps {
  src: string
  onPlay: () => void
}

/** Static play tile — do not mount a <video> just to grab a frame. */
export default function VideoThumbnail({ onPlay }: VideoThumbnailProps) {
  return (
    <div
      className="group relative aspect-video overflow-hidden bg-surface-light/20 cursor-pointer"
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
      <div className="absolute inset-0 bg-gradient-to-br from-surface-light/30 to-black/50" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 shadow-lg transition-colors group-hover:bg-success/30">
          <svg className="ml-1 h-8 w-8 text-text" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
