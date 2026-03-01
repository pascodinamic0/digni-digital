import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Future-Ready Graduate — Employability Program for Students',
  description: 'Transform students into job-ready professionals with real income-generating skills. AI, freelancing, digital marketing, and more — built for universities and schools.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
