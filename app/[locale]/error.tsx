'use client'
import { useEffect } from 'react'
import { useLocale, useLanguage } from '@/app/context/LocaleContext'

const copy = {
  en: { t: 'Something went wrong on this page.', s: 'Please try again. If it keeps happening, message us on WhatsApp.', r: 'Try again', h: 'Back to home' },
  fr: { t: 'Un problème est survenu sur cette page.', s: 'Veuillez réessayer. Si cela persiste, écrivez-nous sur WhatsApp.', r: 'Réessayer', h: 'Retour à l’accueil' },
  es: { t: 'Algo salió mal en esta página.', s: 'Inténtalo de nuevo. Si sigue ocurriendo, escríbenos por WhatsApp.', r: 'Reintentar', h: 'Volver al inicio' },
  de: { t: 'Auf dieser Seite ist etwas schiefgelaufen.', s: 'Bitte versuchen Sie es erneut. Wenn es weiter auftritt, schreiben Sie uns per WhatsApp.', r: 'Erneut versuchen', h: 'Zur Startseite' },
  ar: { t: 'حدث خطأ في هذه الصفحة.', s: 'يُرجى المحاولة مرة أخرى. وإن تكرر الأمر فراسلنا على واتساب.', r: 'حاول مرة أخرى', h: 'العودة إلى الرئيسية' },
}

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const locale = useLocale()
  const c = copy[useLanguage()]
  useEffect(() => { console.error('Page error:', error) }, [error])
  return (
    <section className="phead nf">
      <div className="wrap phead__in">
        <h1 className="h1">{c.t}</h1>
        <p className="lead">{c.s}</p>
        <div className="hero__ctas">
          <button type="button" className="btn btn--dark" onClick={reset}>{c.r}</button>
          <a className="btn btn--line" href={`/${locale}`}>{c.h}</a>
        </div>
      </div>
    </section>
  )
}
