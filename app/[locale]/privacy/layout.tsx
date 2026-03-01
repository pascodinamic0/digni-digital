import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Digni Digital privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
