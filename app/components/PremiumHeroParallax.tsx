import { type ReactNode } from 'react'

/** Hero content wrapper. Parallax was dropped — it ran a scroll listener on every marketing hero. */
export default function PremiumHeroParallax({
  children,
  className,
}: {
  children: ReactNode
  className?: string
  parallaxPx?: number
}) {
  return <div className={`relative ${className ?? ''}`}>{children}</div>
}
