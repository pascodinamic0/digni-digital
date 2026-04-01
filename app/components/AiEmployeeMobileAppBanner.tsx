'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

const ASSETS = {
  mockup: '/images/Download/Mobile%20App.png',
  apple: '/images/Download/Apple%20store.png',
  play: '/images/Download/Google%20playstore.png',
} as const

export default function AiEmployeeMobileAppBanner() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.mobileApp

  return (
    <section
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className="relative isolate overflow-hidden border-y border-slate-200/70 bg-[#eef4f9] text-slate-900 [color-scheme:light]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl" />
        <div className="absolute -left-20 bottom-4 h-[28rem] w-[28rem] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute left-[20%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-slate-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-slate-800"
          >
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl md:text-[2.65rem]">
              {t.title}
            </h2>
            <ul className="mt-8 space-y-4 text-base leading-relaxed text-slate-800 md:text-lg">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span>{t.bullet1}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span>{t.bullet2}</span>
              </li>
            </ul>
            <p className="mt-8 font-display text-xl font-bold text-slate-950 sm:text-2xl">{t.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={t.appStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                aria-label={t.appStoreAriaLabel}
              >
                <Image
                  src={ASSETS.apple}
                  alt=""
                  width={180}
                  height={54}
                  className="h-11 w-auto md:h-[52px]"
                />
              </a>
              <a
                href={t.playStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                aria-label={t.playStoreAriaLabel}
              >
                <Image
                  src={ASSETS.play}
                  alt=""
                  width={200}
                  height={54}
                  className="h-11 w-auto md:h-[52px]"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <Image
              src={ASSETS.mockup}
              alt={t.imageAlt}
              width={1200}
              height={900}
              className="relative z-10 w-full drop-shadow-[0_28px_64px_rgba(15,23,42,0.2)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
