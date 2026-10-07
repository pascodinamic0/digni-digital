import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/app/components/v2/PageHead'
import Img from '@/app/components/v2/Img'
import CtaBand from '@/app/components/v2/CtaBand'
import JsonLd from '@/app/components/v2/JsonLd'
import { LINKS, SITE_URL } from '@/content/v2/locales'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/about', title: t.meta.about.title, description: t.meta.about.desc })
}

export default async function AboutPage({ params }: Props) {
  const { locale, t } = await resolvePage(params)
  const a = t.about
  const ld = {
    '@context': 'https://schema.org', '@type': 'AboutPage', url: `${SITE_URL}/${locale}/about`, name: t.meta.about.title,
    mainEntity: {
      '@type': 'Person', name: 'Pascal Digny', jobTitle: a.founderRole, worksFor: { '@id': `${SITE_URL}/#organization` },
      sameAs: ['https://www.linkedin.com/in/itspascaldigny'], knowsLanguage: ['en', 'fr', 'sw', 'ln'],
    },
  }
  const offices: [string, string][] = [
    [t.contact.offices.kinshasa, t.contact.officeRoles.kinshasa],
    [t.contact.offices.nairobi, t.contact.officeRoles.nairobi],
    [t.contact.offices.sheridan, t.contact.officeRoles.sheridan],
  ]
  return (
    <>
      <JsonLd data={ld} />
      <PageHead eyebrow={a.eyebrow} title={a.title} sub={a.sub} img="tower-bw" imgPos="50% 35%" />
      <section className="sec">
        <div className="wrap split split--story">
          <div>
            <h2 className="h2" data-reveal>{a.storyTitle}</h2>
            <ol className="timeline">
              {a.story.map(([y, s], i) => (
                <li key={y} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }}><span>{y}</span><p>{s}</p></li>
              ))}
            </ol>
          </div>
          <aside className="founder" data-reveal>
            <div className="founder__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/pascal-800.webp" srcSet="/img/pascal-480.webp 480w, /img/pascal-800.webp 800w" sizes="(max-width: 900px) 90vw, 420px" alt="Pascal Digny" width={800} height={622} loading="lazy" />
            </div>
            <p className="founder__k">{a.founderTitle}</p>
            <h3>Pascal Digny</h3>
            <p className="founder__role">{a.founderRole}</p>
            <p>{a.founderBio}</p>
            <a className="btn btn--line btn--sm" href="https://www.linkedin.com/in/itspascaldigny" target="_blank" rel="noopener noreferrer">{a.founderLink} ↗</a>
          </aside>
        </div>
      </section>
      <section className="sec sec--tint">
        <div className="wrap">
          <h2 className="h2" data-reveal>{a.valuesTitle}</h2>
          <div className="values">
            {a.values.map(([k, v], i) => (
              <div key={k} className="value" data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}><span>0{i + 1}</span><b>{k}</b><p>{v}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split split--center">
          <div className="imgcard" data-reveal><Img name="team-couch" alt="" sizes="(max-width: 900px) 92vw, 600px" /></div>
          <div>
            <h2 className="h2" data-reveal>{a.officesTitle}</h2>
            <ul className="offices">
              {offices.map(([c, r]) => <li key={c} data-reveal><b>{c}</b><span>{r}</span></li>)}
            </ul>
            <div className="case__ctas">
              <a className="btn btn--accent" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{t.nav.book}<span className="arr" aria-hidden>→</span></a>
              <Link className="btn btn--line" href={`/${locale}/contact`}>{t.nav.contact}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec--dark" id="procurement">
        <div className="wrap split">
          <div>
            <p className="eyebrow eyebrow--light" data-reveal>Digni Digital LLC</p>
            <h2 className="h2" data-reveal>{a.procTitle}</h2>
            <p className="lead mt-s" data-reveal>{a.procSub}</p>
            <a className="btn btn--accent mt-s" href={`mailto:${LINKS.email}?subject=${encodeURIComponent(a.procCta)}`}>{a.procCta}<span className="arr" aria-hidden>→</span></a>
          </div>
          <dl className="proc" data-reveal>
            {a.proc.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>
      <CtaBand title={t.home.ctaTitle} sub={t.home.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} />
    </>
  )
}
