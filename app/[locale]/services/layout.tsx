import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services — AI Employee, Education & Custom Software',
  description: 'Explore Digni Digital services: AI Employee for 24/7 lead capture, Future-Ready Graduate employability program, and Agentic Softwares for custom solutions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
