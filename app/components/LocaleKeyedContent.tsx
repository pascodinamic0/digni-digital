'use client'

import { Fragment } from 'react'

/**
 * Wraps page content with a key derived from locale so that when the user
 * switches language (URL/locale changes), the entire page subtree remounts.
 * This ensures all client components re-read LocaleContext and display
 * the correct language instead of keeping stale content.
 */
export default function LocaleKeyedContent({
  locale,
  children,
}: {
  locale: string
  children: React.ReactNode
}) {
  return <Fragment key={locale}>{children}</Fragment>
}
