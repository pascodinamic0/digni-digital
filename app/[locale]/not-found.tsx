'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/context/LocaleContext'

export default function NotFound() {
  const isFrench = useLanguage() === 'fr'

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="w-14 h-14 relative flex items-center justify-center">
            <div className="absolute w-7 h-10 bg-accent transform -skew-x-12 -translate-x-0.5 rounded-sm" style={{ opacity: 0.9 }} />
            <div className="absolute w-7 h-10 bg-accent transform skew-x-12 translate-x-0.5 rounded-sm" style={{ opacity: 0.4 }} />
          </div>
        </div>
        <h1 className="font-display text-6xl font-bold text-text mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-text mb-4">
          {isFrench ? 'Page introuvable' : 'Page Not Found'}
        </h2>
        <p className="text-muted mb-8 leading-relaxed">
          {isFrench
            ? 'La page que vous cherchez n’existe pas ou a été déplacée. Revenons au bon endroit.'
            : 'The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-6 py-3 text-center">
            {isFrench ? 'Retour à l’accueil' : 'Back to Home'}
          </Link>
          <Link href="/contact" className="btn-secondary px-6 py-3 text-center">
            {isFrench ? 'Nous contacter' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </main>
  )
}
