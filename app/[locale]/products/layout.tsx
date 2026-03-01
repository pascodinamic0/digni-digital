import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — AI-Powered Business Tools',
  description: 'Discover Digni Digital products: AI-powered tools that automate lead capture, streamline operations, and scale your business without extra headcount.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
