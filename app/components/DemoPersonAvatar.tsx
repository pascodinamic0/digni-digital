'use client'

import Image from 'next/image'

const SIZE_PX = {
  xs: 28,
  sm: 36,
  md: 40,
} as const

type Size = keyof typeof SIZE_PX

function initials(name: string) {
  const p = name.split(/\s+/).filter(Boolean)
  if (p.length >= 2) return (p[0][0] + p[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

const AVATAR_PALETTES = [
  'bg-accent/20 text-accent',
  'bg-success/20 text-success',
  'bg-info/20 text-info',
  'bg-warning/20 text-warning',
  'bg-muted/25 text-muted-dark',
]

function avatarClass(name: string) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h)
  return AVATAR_PALETTES[Math.abs(h) % AVATAR_PALETTES.length]
}

type Props = {
  name: string
  src?: string
  size?: Size
  /** `full` for contact table; `lg` matches inbox list tiles */
  shape?: 'full' | 'lg'
  /** Green online indicator for live demo UI */
  active?: boolean
  className?: string
}

export default function DemoPersonAvatar({
  name,
  src,
  size = 'sm',
  shape = 'full',
  active = false,
  className = '',
}: Props) {
  const px = SIZE_PX[size]
  const rounded = shape === 'full' ? 'rounded-full' : 'rounded-lg'

  if (src) {
    return (
      <span className={`relative inline-flex shrink-0 ${className}`} style={{ width: px, height: px }}>
        <Image
          src={src}
          alt={name}
          width={px}
          height={px}
          sizes={`${px}px`}
          unoptimized
          className={`object-cover ring-1 ring-black/[0.06] ${rounded}`}
          style={{ width: px, height: px }}
        />
        {active ? (
          <span
            className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-surface bg-success"
            aria-hidden
          />
        ) : null}
      </span>
    )
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center text-xs font-bold ${rounded} ${avatarClass(name)} ${className}`}
      style={{ width: px, height: px }}
      aria-hidden
    >
      {initials(name)}
    </div>
  )
}
