import Link from 'next/link'
import { LINKS, type Locale } from '@/content/v2/locales'
import type { Dict } from '@/content/v2/dict/en'
import { services } from '@/content/v2/services'
import { langOf } from '@/content/v2/locales'
import Brand from './Brand'

export default function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  const lang = langOf(locale)
  const p = (s: string) => `/${locale}${s}`
  const year = new Date().getFullYear()
  return (
    <footer className="ftr">
      <div className="wrap ftr__grid">
        <div>
          <Link href={p('')} aria-label="Digni Digital — home"><Brand light /></Link>
          <p className="ftr__tag">{t.footer.tagline}</p>
          <div className="ftr__social">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.84-2.05 3.79-2.05C20.7 8.65 21 11.3 21 14.7V21h-4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9z" /></svg>
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" /></svg>
            </a>
          </div>
        </div>
        <nav className="ftr__col" aria-label={t.footer.company}>
          <p className="ftr__h">{t.footer.company}</p>
          <Link href={p('/work')}>{t.nav.work}</Link>
          <Link href={p('/products')}>{t.nav.products}</Link>
          <Link href={p('/about')}>{t.nav.about}</Link>
          <Link href={p('/blog')}>{t.nav.blog}</Link>
          <Link href={p('/careers')}>{t.footer.careers}</Link>
        </nav>
        <nav className="ftr__col" aria-label={t.footer.servicesCol}>
          <p className="ftr__h">{t.footer.servicesCol}</p>
          {services.map((s) => <Link key={s.slug} href={p(`/services/${s.slug}`)}>{s.copy[lang].name}</Link>)}
          <Link href={p('/digni')}>{t.footer.digni}</Link>
          <Link href={p('/learn')}>{t.footer.learn}</Link>
          <Link href={p('/affiliate')}>{t.footer.affiliate}</Link>
        </nav>
        <div className="ftr__col">
          <p className="ftr__h">{t.footer.contactCol}</p>
          <a href={LINKS.booking} target="_blank" rel="noopener noreferrer">{t.nav.book}</a>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <span dir="ltr">{LINKS.whatsappLabel}</span></a>
          <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          <Link href={p('/contact')}>{t.nav.contact}</Link>
        </div>
      </div>
      <div className="wrap ftr__base">
        <span>© {year} {t.footer.rights}</span>
        <span>{t.footer.reg}</span>
        <span className="ftr__legal">
          <Link href={p('/privacy')}>{t.footer.privacy}</Link>
          <Link href={p('/terms')}>{t.footer.terms}</Link>
          <Link href={p('/cookie-policy')}>{t.footer.cookies}</Link>
        </span>
      </div>
      <div className="wrap ftr__credits"><span>{t.footer.credits}</span></div>
    </footer>
  )
}
