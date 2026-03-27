import type { ReactNode } from 'react'

/**
 * Learning portal shell: consistent spacing and backdrop with the rest of the marketing site.
 */
export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-[calc(100vh-10rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh opacity-[0.4]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-6 md:pt-14">{children}</div>
    </div>
  )
}
