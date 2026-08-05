import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { noIndexRobots } from '@/lib/seo/locale-metadata'

export const metadata: Metadata = {
  robots: noIndexRobots(),
}

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return children
}
