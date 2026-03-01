import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions — Industry-Specific Digital Transformation',
  description: 'Industry-specific solutions that drive measurable results. From healthcare to real estate, see how Digni Digital transforms businesses with AI-powered technology.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
