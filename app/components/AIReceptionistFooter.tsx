'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/config/translations'
import { downloadsConfig } from '@/app/config/downloads.config'

export default function AIReceptionistFooter() {
  const { language } = useLanguage()
  const t = translations[language]

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
      { name: t.footer.services, href: '/services' },
      { name: t.footer.careers, href: '/careers' },
      { name: t.footer.contact, href: '/contact' },
    ],
  }

  return (
    <footer id="contact" className="border-t border-border">
      {/* Standard Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <div className="absolute w-5 h-7 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
                  <div className="absolute w-5 h-7 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
                </div>
                <span className="font-display font-semibold text-xl">Digni Digital LLC</span>
              </Link>
              <p className="text-muted mb-6 max-w-sm">
                {t.footer.tagline}
              </p>
              <a
                {...getBookingLinkProps()}
                className="btn-primary"
              >
                {t.cta.getStarted}
              </a>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-3">
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
              <h4 className="font-display font-semibold mb-4">{t.footer.resources}</h4>
              <ul className="space-y-3">
                {links.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-3">
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

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              &copy; {new Date().getFullYear()} Digni Digital. {t.footer.copyright}
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
