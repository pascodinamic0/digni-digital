'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import StoreBadgeLinks from '@/app/components/StoreBadgeLinks'

const ASSETS = {
  mockup: '/images/Download/Mobile%20App.png',
} as const

/** Light scrim section for store badges — intentional contrast with dark product demos. */
export default function MobileAppBannerSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.mobileApp

  return (
    <section
      id="mobile-app"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className="relative isolate overflow-hidden border-y border-border-light bg-surface-light text-text [color-scheme:light]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-20 bottom-4 h-[28rem] w-[28rem] rounded-full bg-info/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="type-h2 font-display font-bold leading-tight text-text">{t.title}</h2>
            <ul className="type-body mt-8 space-y-4 leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span>{t.bullet1}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span>{t.bullet2}</span>
              </li>
            </ul>
            <p className="type-h4 mt-8 font-display font-bold text-text">{t.tagline}</p>
            <StoreBadgeLinks
              className="mt-8"
              appStoreHref={t.appStoreHref}
              playStoreHref={t.playStoreHref}
              appStoreAriaLabel={t.appStoreAriaLabel}
              playStoreAriaLabel={t.playStoreAriaLabel}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src={ASSETS.mockup}
              alt={t.imageAlt}
              width={520}
              height={640}
              className="h-auto w-full max-w-[min(100%,320px)] drop-shadow-2xl sm:max-w-sm lg:max-w-md"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
