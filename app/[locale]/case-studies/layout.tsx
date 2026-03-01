import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results from Real Businesses',
  description: 'See how Digni Digital helped businesses achieve 85% reduction in no-shows, 40% higher close rates, and $200k+ monthly revenue increases.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
