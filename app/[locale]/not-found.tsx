'use client'
import Link from 'next/link'
import { useLocale, useLanguage } from '@/app/context/LocaleContext'

const copy = {
  en: { t: 'This page moved or never existed.', s: 'The site was rebuilt recently. Try one of these instead.', h: 'Back to home', w: 'Work', sv: 'Services', c: 'Contact' },
  fr: { t: 'Cette page a été déplacée ou n’a jamais existé.', s: 'Le site a été entièrement refait. Essayez plutôt l’une de ces pages.', h: 'Retour à l’accueil', w: 'Réalisations', sv: 'Services', c: 'Contact' },
  es: { t: 'Esta página se movió o nunca existió.', s: 'Hemos renovado el sitio. Prueba con una de estas páginas.', h: 'Volver al inicio', w: 'Proyectos', sv: 'Servicios', c: 'Contacto' },
  de: { t: 'Diese Seite wurde verschoben oder existiert nicht.', s: 'Die Website wurde neu aufgebaut. Versuchen Sie eine dieser Seiten.', h: 'Zur Startseite', w: 'Projekte', sv: 'Leistungen', c: 'Kontakt' },
  ar: { t: 'نُقلت هذه الصفحة أو لم تكن موجودة أصلاً.', s: 'أعدنا بناء الموقع مؤخراً. جرّب إحدى هذه الصفحات.', h: 'العودة إلى الرئيسية', w: 'أعمالنا', sv: 'الخدمات', c: 'تواصل' },
}

export default function NotFound() {
  const locale = useLocale()
  const c = copy[useLanguage()]
  return (
    <section className="phead nf">
      <div className="wrap phead__in">
        <p className="eyebrow">404</p>
        <h1 className="h1">{c.t}</h1>
        <p className="lead">{c.s}</p>
        <div className="hero__ctas">
          <Link className="btn btn--dark" href={`/${locale}`}>{c.h}</Link>
          <Link className="btn btn--line" href={`/${locale}/work`}>{c.w}</Link>
          <Link className="btn btn--line" href={`/${locale}/services`}>{c.sv}</Link>
          <Link className="btn btn--line" href={`/${locale}/contact`}>{c.c}</Link>
        </div>
      </div>
    </section>
  )
}
