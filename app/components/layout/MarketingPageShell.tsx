import { ReactNode } from 'react'

/** Wraps marketing pages with editorial layout class. */
export default function MarketingPageShell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`marketing-page ${className}`.trim()}>{children}</div>
}
