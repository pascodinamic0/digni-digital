import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Digni Digital terms of service. Read the terms and conditions governing use of our services and website.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
