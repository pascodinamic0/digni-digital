import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agentic Softwares — Custom AI-Native Software Solutions',
  description: 'AI-native software that perceives, reasons, and acts autonomously. Custom-built solutions for businesses with unique challenges, from MVP to enterprise scale.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
