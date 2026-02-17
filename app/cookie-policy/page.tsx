'use client'

import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-2">
            Cookie Policy
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
          <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6">
            <p>
              This cookie policy explains how Digni Digital LLC uses cookies and similar technologies on our website.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">What are cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, keep you signed in, and understand how the site is used.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Cookies we use</h2>
            <p>
              We use essential cookies (e.g. for language preference and session management) so the site works correctly. We may use analytics cookies to understand traffic and improve the site. We do not use advertising cookies.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Managing cookies</h2>
            <p>
              You can control or delete cookies via your browser settings. Disabling essential cookies may affect how the site works (e.g. language selection may not persist).
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">More information</h2>
            <p>
              For more on how we handle your data, see our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>. Questions: <a href="mailto:hq@digni-digital-llc.com" className="text-accent hover:underline">hq@digni-digital-llc.com</a> or <Link href="/contact" className="text-accent hover:underline">Contact</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
