'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { locales, localeMeta, LINKS, type Locale } from '@/content/v2/locales'
import Brand from './Brand'

export type HeaderLabels = {
  home: string; work: string; services: string; products: string; about: string; blog: string; contact: string
  book: string; menu: string; close: string; language: string; whatsapp: string
}

/** Routes whose first section is a dark full-bleed image: header starts transparent there. */
function isOverlayRoute(rest: string) {
  return rest === '/' || rest === '' || rest === '/about' || rest.startsWith('/services')
}

export default function Header({ locale, t }: { locale: Locale; t: HeaderLabels }) {
  const path = usePathname() || `/${locale}`
  const rest = (path.replace(/^\/[^/]+/, '') || '/').replace(/\/$/, '') || '/'
  const overlay = isOverlayRoute(rest)
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { setOpen(false); setLang(false) }, [path])
  useEffect(() => { document.documentElement.classList.toggle('lock', open) }, [open])
  useEffect(() => {
    const close = (e: MouseEvent) => { if (langRef.current && !langRef.current.contains(e.target as Node)) setLang(false) }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setLang(false); setOpen(false) } }
    document.addEventListener('click', close)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('click', close); document.removeEventListener('keydown', esc) }
  }, [])

  const nav = [
    { href: `/${locale}/work`, label: t.work },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/products`, label: t.products },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/blog`, label: t.blog },
    { href: `/${locale}/contact`, label: t.contact },
  ]
  const isActive = (h: string) => path === h || path.startsWith(`${h}/`)
  const swap = (l: Locale) => `/${l}${rest === '/' ? '' : rest}`
  const solid = scrolled || !overlay

  return (
    <>
      <header className={`hdr ${solid ? 'hdr--solid' : ''} ${open ? 'hdr--open' : ''}`}>
        <div className="wrap hdr__in">
          <Link href={`/${locale}`} aria-label="Digni Digital — home"><Brand /></Link>
          <nav className="hdr__nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={isActive(n.href) ? 'on' : ''} aria-current={isActive(n.href) ? 'page' : undefined}>{n.label}</Link>
            ))}
          </nav>
          <div className="hdr__end">
            <div className="lang" ref={langRef}>
              <button type="button" className="lang__btn" aria-haspopup="true" aria-expanded={lang} aria-label={t.language} onClick={() => setLang((v) => !v)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
                {localeMeta[locale].short}
              </button>
              {lang && (
                <ul className="lang__menu">
                  {locales.map((l) => (
                    <li key={l}>
                      <Link prefetch={false} href={swap(l)} hrefLang={localeMeta[l].hreflang} lang={localeMeta[l].hreflang} className={l === locale ? 'on' : ''} aria-current={l === locale ? 'true' : undefined}>
                        <span>{localeMeta[l].label}</span>
                        <em>{localeMeta[l].short}</em>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a className="btn btn--sm btn--dark hide-m" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{t.book}</a>
            <button type="button" className="burger" aria-label={open ? t.close : t.menu} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen((v) => !v)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>
      <div id="mnav" className={`mnav ${open ? 'mnav--open' : ''}`} aria-hidden={!open} inert={!open || undefined}>
        <nav className="mnav__links" aria-label="Mobile">
          <Link href={`/${locale}`}>{t.home}</Link>
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}>{n.label}</Link>
          ))}
        </nav>
        <div className="mnav__foot">
          <a className="btn btn--accent btn--block" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{t.book}</a>
          <a className="btn btn--ghost-light btn--block" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"><span>{t.whatsapp}</span> <span dir="ltr">{LINKS.whatsappLabel}</span></a>
          <div className="mnav__langs">
            {locales.map((l) => (
              <Link key={l} prefetch={false} href={swap(l)} hrefLang={localeMeta[l].hreflang} className={l === locale ? 'on' : ''}>{localeMeta[l].short}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
