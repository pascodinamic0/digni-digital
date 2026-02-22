'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { downloadsConfig, getDownloadUrl } from '@/app/config/downloads.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { officeLocations } from '@/app/data/locations'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/digni-digital-llc', icon: 'linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/254702593518', icon: 'whatsapp' },
] as const

export default function Footer() {
  const language = useLanguage()
  const t = translations[language]
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const links = {
    services: [
      { name: t.nav.aiEmployee, href: '/ai-receptionist' },
      { name: t.nav.futureReadyGraduate, href: '/future-ready-graduate' },
      { name: t.nav.agenticSoftwares, href: '/agentic-softwares' },
    ],
    resources: [
      { name: t.nav.caseStudies, href: '/case-studies' },
      { name: t.nav.articles, href: '/blog' },
      { name: t.footer.futureReadyDemo, href: getDownloadUrl(downloadsConfig.futureReadyGraduate, language) },
      { name: t.footer.aiEmployeeDemo, href: getDownloadUrl(downloadsConfig.aiEmployee, language) },
      { name: t.footer.ourMission, href: '/#our-mission' },
      { name: t.footer.whatWeFightFor, href: '/#what-were-fighting-for' },
    ],
    company: [
      { name: t.footer.aboutUs, href: '/about' },
      { name: t.nav.solutions, href: '/services' },
      { name: t.footer.careers, href: '/careers' },
      { name: t.footer.contact, href: '/contact' },
      { name: t.footer.affiliateProgram, href: '/affiliate' },
    ],
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || newsletterStatus === 'loading') return
    setNewsletterStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && !data.error) {
        setNewsletterStatus('success')
        setEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <footer id="contact" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact newsletter — inline pill */}
        <section className="py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div>
              <h3 className="font-display font-semibold text-lg text-text mb-1">
                {t.footer.newsletterTitle}
              </h3>
              <p className="text-muted text-sm">
                {t.footer.newsletterSubtitle}
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2 w-full md:w-auto md:flex-1 md:max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                required
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-background/80 border border-border text-sm text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent disabled:opacity-60"
                aria-label={t.footer.newsletterPlaceholder}
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="btn-primary shrink-0 px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2"
              >
                {newsletterStatus === 'loading' && (
                  <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden />
                )}
                {newsletterStatus === 'success' ? t.footer.newsletterThanks : t.footer.subscribe}
              </button>
            </form>
          </div>
          {newsletterStatus === 'error' && (
            <p className="text-red-500 text-sm mt-2">{t.footer.newsletterError}</p>
          )}
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Main footer — bento-style grid */}
        <div className="py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Brand — spans full width on mobile */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                <div className="w-9 h-9 relative flex items-center justify-center">
                  <div className="absolute w-4 h-6 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
                  <div className="absolute w-4 h-6 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
                </div>
                <span className="font-display font-semibold text-lg text-text">Digni Digital LLC</span>
              </Link>
              <p className="text-muted text-sm max-w-xs mb-5">
                {t.footer.tagline}
              </p>
              {(officeLocations.some((l) => l.email) || officeLocations.some((l) => l.phone)) && (
                <div className="space-y-1 text-sm text-muted mb-5">
                  {[...new Set(officeLocations.map((loc) => loc.email).filter((e): e is string => Boolean(e)))].map((addr) => (
                    <a key={addr} href={`mailto:${addr}`} className="block hover:text-accent transition-colors">
                      {addr}
                    </a>
                  ))}
                  {[...new Set(officeLocations.map((loc) => loc.phone).filter((p): p is string => Boolean(p)))].map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block hover:text-accent transition-colors">
                      {phone}
                    </a>
                  ))}
                  <p className="text-muted/80 text-xs">
                    {officeLocations.map((loc) => loc.city).join(', ')}
                  </p>
                </div>
              )}
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors"
                    aria-label={label}
                  >
                    {label === 'LinkedIn' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )}
                    {label === 'WhatsApp' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    )}
                  </a>
                ))}
                <a {...getBookingLinkProps()} className="ml-2 btn-primary inline-flex items-center px-4 py-2 rounded-full text-sm font-medium">
                  {t.cta.getStarted}
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-display font-semibold text-text text-sm uppercase tracking-wider mb-4">
                  {t.footer.services}
                </h4>
                <ul className="space-y-3">
                  {links.services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-muted hover:text-accent text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-text text-sm uppercase tracking-wider mb-4">
                  {t.footer.resources}
                </h4>
                <ul className="space-y-3">
                  {links.resources.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-muted hover:text-accent text-sm transition-colors" {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-text text-sm uppercase tracking-wider mb-4">
                  {t.footer.company}
                </h4>
                <ul className="space-y-3">
                  {links.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-muted hover:text-accent text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-border">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Digni Digital LLC. {t.footer.copyright}
          </p>
          <nav className="flex gap-6 text-xs text-muted" aria-label="Legal">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              {t.footer.termsOfService}
            </Link>
            <Link href="/cookie-policy" className="hover:text-accent transition-colors">
              {t.footer.cookiePolicy}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
