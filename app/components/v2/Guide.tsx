'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const GuideChat = dynamic(() => import('./GuideChat'), { ssr: false, loading: () => <div className="gchat__loading" /> })

/** DigniGuide launcher: never auto-opens; compact icon on phones so it never covers content. */
export default function Guide({ locale, t }: { locale: string; t: { label: string; title: string; sub: string; open: string; close: string } }) {
  const [open, setOpen] = useState(false)
  const path = usePathname() || ''
  useEffect(() => { setOpen(false) }, [path])
  useEffect(() => {
    if (!open) return
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [open])
  if (path.endsWith('/digni')) return null
  return (
    <>
      {open && (
        <div className="gpanel" role="dialog" aria-modal="false" aria-label={t.title}>
          <div className="gpanel__head">
            <div><b>{t.title}</b><span>{t.sub}</span></div>
            <Link href={`/${locale}/digni`} className="gpanel__btn" aria-label={t.open} title={t.open}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" /></svg>
            </Link>
            <button type="button" className="gpanel__btn" onClick={() => setOpen(false)} aria-label={t.close}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <GuideChat locale={locale} />
        </div>
      )}
      <button type="button" className={`guide ${open ? 'guide--open' : ''}`} onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={t.label}>
        <span className="guide__dot" aria-hidden />
        <span className="guide__txt">{open ? t.close : t.label}</span>
      </button>
    </>
  )
}
