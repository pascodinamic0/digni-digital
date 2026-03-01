import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Employee — Never Miss a Lead Again',
  description: 'AI-powered system that answers calls, qualifies leads, and books appointments 24/7 across every channel. Capture 3x more leads without hiring.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
