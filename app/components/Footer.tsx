'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { downloadsConfig } from '@/app/config/downloads.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { officeLocations, getPrimaryLocation } from '@/app/data/locations'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/digni-digital-llc', icon: 'linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/254702593518', icon: 'whatsapp' },
] as const

export default function Footer() {
  const language = useLanguage()
  const t = translations[language]
  const primary = getPrimaryLocation()
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const links = {
    services: [
      { name: t.nav.aiEmployee, href: '/ai-receptionist' },
      { name: t.nav.futureReadyGraduate, href: '/future-ready-graduate' },
      { name: t.nav.customSaaS, href: '/custom-saas' },
    ],
    resources: [
      { name: t.nav.caseStudies, href: '/case-studies' },
      { name: t.nav.articles, href: '/blog' },
      { name: t.footer.futureReadyDemo, href: downloadsConfig.futureReadyGraduate[language] ?? downloadsConfig.futureReadyGraduate.en },
      { name: t.footer.aiEmployeeDemo, href: downloadsConfig.aiEmployee[language] ?? downloadsConfig.aiEmployee.en },
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
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter strip — single row, clear hierarchy */}
        <section className="py-10 md:py-12 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display font-semibold text-xl md:text-2xl text-text mb-2">
                {t.footer.newsletterTitle}
              </h3>
              <p className="text-muted text-sm md:text-base">
                {t.footer.newsletterSubtitle}
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[320px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                required
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-background border border-border text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent disabled:opacity-60"
                aria-label={t.footer.newsletterPlaceholder}
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="btn-primary shrink-0 inline-flex items-center justify-center gap-2"
              >
                {newsletterStatus === 'loading' && (
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden />
                )}
                {newsletterStatus === 'success' ? t.footer.newsletterThanks : t.footer.subscribe}
              </button>
            </form>
          </div>
          {newsletterStatus === 'error' && (
            <p className="text-red-500 text-sm mt-2">{t.footer.newsletterError}</p>
          )}
        </section>

        {/* Main footer: brand + contact + columns */}
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand + contact + social */}
            <div className="md:col-span-2 lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group cursor-pointer">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <div className="absolute w-5 h-7 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
                  <div className="absolute w-5 h-7 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
                </div>
                <span className="font-display font-semibold text-xl text-text">Digni Digital LLC</span>
              </Link>
              <p className="text-muted text-sm max-w-sm mb-6">
                {t.footer.tagline}
              </p>
              {(primary?.email || primary?.phone) && (
                <ul className="space-y-2 text-sm text-muted mb-6">
                  {primary.email && (
                    <li>
                      <a href={`mailto:${primary.email}`} className="hover:text-accent transition-colors">
                        {primary.email}
                      </a>
                    </li>
                  )}
                  {primary.phone && (
                    <li>
                      <a href={`tel:${primary.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                        {primary.phone}
                      </a>
                    </li>
                  )}
                  <li className="text-muted/90">
                    {officeLocations.map((loc) => loc.city).join(', ')}
                  </li>
                </ul>
              )}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors"
                    aria-label={label}
                  >
                    {label === 'LinkedIn' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )}
                    {label === 'WhatsApp' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    )}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a {...getBookingLinkProps()} className="btn-primary inline-block">
                  {t.cta.getStarted}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold text-text mb-4">{t.footer.services}</h4>
              <ul className="space-y-2.5">
                {links.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-text mb-4">{t.footer.resources}</h4>
              <ul className="space-y-2.5">
                {links.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-accent transition-colors text-sm" {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-text mb-4">{t.footer.company}</h4>
              <ul className="space-y-2.5">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar: copyright + legal */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Digni Digital LLC. {t.footer.copyright}
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm order-1 sm:order-2" aria-label="Legal">
            <Link href="/privacy" className="text-muted hover:text-accent transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-muted hover:text-accent transition-colors">
              {t.footer.termsOfService}
            </Link>
            <Link href="/cookie-policy" className="text-muted hover:text-accent transition-colors">
              {t.footer.cookiePolicy}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
