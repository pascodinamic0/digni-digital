'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import Logo from './Logo'
import SocialPlatformIcon from './SocialPlatformIcon'
const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/digni-digital-llc', icon: 'linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/254702593518', icon: 'whatsapp' },
  {
    label: 'Eventbrite',
    href: 'https://www.eventbrite.com/o/digni-digital-llc-77843264043',
    icon: 'eventbrite',
  },
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
      { name: t.footer.products, href: '/products' },
      { name: t.footer.ourMission, href: '/#our-mission' },
      { name: t.footer.whatWeFightFor, href: '/#what-were-fighting-for' },
      { name: t.footer.our2026Commitment, href: '/#our-2026-commitment' },
    ],
    company: [
      { name: t.footer.aboutUs, href: '/about' },
      { name: t.nav.solutions, href: '/services' },
      { name: t.footer.careers, href: '/careers' },
      { name: t.footer.contact, href: '/contact' },
      { name: t.footer.affiliateProgram, href: '/affiliate' },
    ],
  }

  const footerNavLinkClass =
    'block rounded-lg px-2 -mx-2 py-2.5 sm:py-2 text-sm leading-snug text-muted hover:text-accent hover:bg-surface-light/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]'

  const footerLinkColumns = [
    { title: t.footer.services, items: links.services },
    { title: t.footer.resources, items: links.resources },
    { title: t.footer.company, items: links.company },
  ] as const

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
        {/* Newsletter signup */}
        <section className="py-10 md:py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-xl shrink-0">
              <h3 id="footer-newsletter-heading" className="font-display font-semibold text-lg text-text mb-1.5">
                {t.footer.newsletterTitle}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {t.footer.newsletterSubtitle}
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full min-w-0 lg:max-w-md xl:max-w-lg lg:pt-0.5"
              aria-labelledby="footer-newsletter-heading"
            >
              <label
                htmlFor="footer-newsletter-email"
                className="block text-xs font-medium uppercase tracking-wide text-muted mb-2.5"
              >
                {t.footer.newsletterEmailLabel}
              </label>
              <div
                className="flex flex-col sm:flex-row sm:items-stretch rounded-xl border border-border bg-surface-light/90 overflow-hidden shadow-sm transition-[box-shadow] focus-within:ring-2 focus-within:ring-accent/25 focus-within:border-accent/40 focus-within:shadow-md"
              >
                <input
                  id="footer-newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  required
                  disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  className="flex-1 min-w-0 border-0 bg-transparent px-4 py-3.5 sm:py-3 text-[15px] sm:text-sm text-text placeholder:text-muted-foreground placeholder:opacity-90 caret-foreground focus:outline-none focus:ring-0 disabled:opacity-60 min-h-[48px] sm:min-h-0"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  className="shrink-0 border-t sm:border-t-0 sm:border-l border-border bg-accent text-background px-5 py-3.5 sm:py-3 text-sm font-semibold hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[44px] w-full sm:w-auto sm:min-w-[7.5rem]"
                >
                  {newsletterStatus === 'loading' && (
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden />
                  )}
                  {newsletterStatus === 'success' ? t.footer.newsletterThanks : t.footer.subscribe}
                </button>
              </div>
              {newsletterStatus === 'error' && (
                <p className="text-red-500 text-sm mt-2.5" role="alert">
                  {t.footer.newsletterError}
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Main footer: bento-style grid */}
        <div className="py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Brand: spans full width on mobile */}
            <div className="md:col-span-5 lg:col-span-4">
              <Logo href="/" label="Digni Digital LLC" className="mb-4" />
              <p className="text-muted text-sm max-w-xs mb-5">
                {t.footer.tagline}
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors"
                    aria-label={label}
                  >
                    <SocialPlatformIcon platform={icon} className="w-4 h-4" />
                  </a>
                ))}
                <a {...getBookingLinkProps()} className="ml-2 btn-primary inline-flex items-center px-4 py-2 rounded-full text-sm font-medium">
                  {t.cta.getStarted}
                </a>
              </div>
            </div>

            {/* Link columns: single column on mobile; 3-up from sm */}
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-x-8 sm:gap-y-10">
              {footerLinkColumns.map(({ title, items }) => (
                <div
                  key={title}
                  className="border-b border-border pb-9 last:border-b-0 last:pb-0 sm:border-0 sm:pb-0"
                >
                  <h4 className="font-display font-semibold text-text text-xs uppercase tracking-[0.12em] mb-4 sm:mb-5">
                    {title}
                  </h4>
                  <ul className="space-y-0.5 sm:space-y-1">
                    {items.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={footerNavLinkClass}
                          {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
