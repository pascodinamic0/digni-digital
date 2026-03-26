import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  id?: string
}

/** Consistent elevated panel for admin sections */
export function AdminPanel({ children, className = '', id }: Props) {
  return (
    <section
      id={id}
      className={`rounded-2xl border border-border-light/90 bg-surface/70 p-5 shadow-sm backdrop-blur-sm md:p-7 ${className}`}
    >
      {children}
    </section>
  )
}
