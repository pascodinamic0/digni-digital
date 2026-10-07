import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/app/components/v2/PageHead'
import Img from '@/app/components/v2/Img'
import CtaBand from '@/app/components/v2/CtaBand'
import JsonLd from '@/app/components/v2/JsonLd'
import { services, svcUi } from '@/content/v2/services'
import { LINKS, SITE_URL } from '@/content/v2/locales'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/services', title: t.meta.services.title, description: t.meta.services.desc })
}

export default async function ServicesPage({ params }: Props) {
  const { locale, lang, t } = await resolvePage(params)
  const ui = svcUi[lang]
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'Service', name: s.copy[lang].name, description: s.copy[lang].body, url: `${SITE_URL}/${locale}/services/${s.slug}`, provider: { '@id': `${SITE_URL}/#organization` } },
    })),
  }
  return (
    <>
      <JsonLd data={ld} />
      <PageHead eyebrow={t.services.eyebrow} title={t.services.title} sub={t.services.sub} img="boulevard" />
      <section className="sec">
        <div className="wrap svcrows">
          {services.map((s, i) => {
            const c = s.copy[lang]
            return (
              <article key={s.slug} className="svcrow" data-reveal>
                <div className="svcrow__img"><Img name={s.img} alt="" sizes="(max-width: 900px) 92vw, 560px" /></div>
                <div className="svcrow__body">
                  <p className="pillar__k"><span>0{i + 1}</span>{c.k}</p>
                  <h2 className="h2">{c.name}</h2>
                  <p className="pillar__gap">{c.gap}</p>
                  <p className="lead">{c.body}</p>
                  <ul className="ticks">{c.points.map((x) => <li key={x}>{x}</li>)}</ul>
                  <div className="case__ctas">
                    <Link className="btn btn--dark" href={`/${locale}/services/${s.slug}`}>{ui.seeService}<span className="arr" aria-hidden>→</span></Link>
                    <Link className="btn btn--line" href={`/${locale}/services/${s.slug}/assessment`}>{ui.fitCheck}</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sechead">
            <h2 className="h2" data-reveal>{t.services.pricingTitle}</h2>
            <p className="lead" data-reveal>{t.services.order}</p>
          </div>
          <div className="feat feat--3">
            {t.services.pricing.map(([k, v], i) => (
              <div key={k} className="feat__card" data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}><span>0{i + 1}</span><b>{k}</b><p>{v}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap assess">
          <div>
            <h2 className="h2" data-reveal>{t.services.assessTitle}</h2>
            <p className="lead" data-reveal>{t.services.assessSub}</p>
          </div>
          <ul className="ways">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${locale}/services/${s.slug}/assessment`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></svg>
                  <div><b>{s.copy[lang].name}</b><span>{ui.fitCheck}</span></div>
                  <i aria-hidden>→</i>
                </Link>
              </li>
            ))}
            <li>
              <a href={LINKS.booking} target="_blank" rel="noopener noreferrer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>
                <div><b>{t.nav.book}</b><span>{t.contact.bookSub}</span></div>
                <i aria-hidden>↗</i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <CtaBand title={t.home.ctaTitle} sub={t.home.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} />
    </>
  )
}
