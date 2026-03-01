import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Digni Digital cookie policy. Understand what cookies we use and how to manage your preferences.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
