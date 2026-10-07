import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { ThemeProvider } from '@/app/components/ThemeProvider'
import { fontVars } from '../fonts'
import '../globals.css'

/** Admin is always per-request (auth + Supabase); never prerender. */
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

/** Admin renders its own <html> (root layout is a passthrough). Keeps the legacy dark/light theme toggle. */
export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" className={`${fontVars} admin-root`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="admin-theme" strategy="beforeInteractive">{`try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){}`}</Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
