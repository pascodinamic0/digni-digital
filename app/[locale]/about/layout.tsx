import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Our Story and Mission',
  description: 'Digni Digital believes technology should serve humanity. Learn about our mission, team, and how we help businesses and students achieve measurable outcomes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
