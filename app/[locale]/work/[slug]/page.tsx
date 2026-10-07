import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaBand from '@/app/components/v2/CtaBand'
import JsonLd from '@/app/components/v2/JsonLd'
import { ProjectCard, Shot, StatusChip } from '@/app/components/v2/Project'
import { projects, getProject } from '@/content/v2/work'
import { getDict, langOf, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'
import { SITE_URL } from '@/content/v2/locales'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  const lang = langOf(locale)
  const t = getDict(locale)
  return pageMetadata({ locale, path: `/work/${slug}`, title: `${p.name} — ${t.sector[p.sector]}`, description: p.summary[lang], type: 'article' })
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const { locale, lang, t } = await resolvePage(params)
  const p = getProject(slug)
  if (!p) notFound()
  const related = [
    ...projects.filter((x) => x.slug !== p.slug && x.sector === p.sector),
    ...projects.filter((x) => x.slug !== p.slug && x.sector !== p.sector && x.featured),
    ...projects.filter((x) => x.slug !== p.slug && x.sector !== p.sector && !x.featured),
  ].slice(0, 3)
  const facts: [string, React.ReactNode][] = [
    [t.common.client, p.client[lang]],
    [t.common.sector, t.sector[p.sector]],
    ...(p.location ? [[t.common.location, p.location[lang]] as [string, string]] : []),
    ...(p.year ? [[t.common.year, p.year] as [string, string]] : []),
    [t.common.status, <StatusChip key="s" status={p.status} t={t} />],
    ...(p.url ? [[t.common.link, <a key="l" href={p.url} target="_blank" rel="noopener noreferrer" dir="ltr">{p.urlLabel ?? p.url.replace(/^https?:\/\//, '')} ↗</a>] as [string, React.ReactNode]] : []),
  ]
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.name,
    description: p.summary[lang],
    url: `${SITE_URL}/${locale}/work/${p.slug}`,
    inLanguage: locale,
    creator: { '@id': `${SITE_URL}/#organization` },
    about: p.client[lang],
    ...(p.url ? { sameAs: p.url } : {}),
  }

  return (
    <>
      <JsonLd data={ld} />
      <section className="phead wd">
        <div className="wrap phead__in">
          <Link href={`/${locale}/work`} className="back hero__a1"><span className="arr" aria-hidden>←</span> {t.common.backToWork}</Link>
          <div className="pcard__meta hero__a1"><span className="pcard__sector">{t.sector[p.sector]}</span><StatusChip status={p.status} t={t} /></div>
          <h1 className="h1 hero__a2">{p.name}</h1>
          <p className="lead hero__a3">{p.summary[lang]}</p>
          {p.url && (
            <div className="phead__ctas hero__a4">
              <a className="btn btn--dark" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.status === 'demo' ? t.common.openDemo : `${t.common.visit} ${p.urlLabel ?? ''}`}<span className="arr" aria-hidden>↗</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="wd__media">
        <div className="wrap"><div className="wd__shot hero__a4"><Shot p={p} t={t} priority sizes="(max-width: 1240px) 92vw, 1100px" /></div></div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <dl className="facts" data-reveal>
            {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <div className="wd__grid">
            <div className="wd__main">
              <h2 className="h3" data-reveal>{t.common.context}</h2>
              <p className="wd__p" data-reveal>{p.context[lang]}</p>
              <h2 className="h3" data-reveal>{t.common.whatWeBuilt}</h2>
              <ul className="ticks ticks--lg" data-reveal>{p.built[lang].map((b) => <li key={b}>{b}</li>)}</ul>
              <h2 className="h3" data-reveal>{t.common.role}</h2>
              <p className="wd__p" data-reveal>{p.role[lang]}</p>
            </div>
            <aside className="wd__aside">
              {p.claims && p.claims[lang].length > 0 && (
                <div className="wd__card" data-reveal>
                  <h2 className="case__h">{t.common.results}</h2>
                  <ul className="claims">{p.claims[lang].map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              )}
              {p.stack && p.stack.length > 0 && (
                <div className="wd__card" data-reveal>
                  <h2 className="case__h">{t.common.stack}</h2>
                  <ul className="tags">{p.stack.map((s) => <li key={s} dir="ltr">{s}</li>)}</ul>
                </div>
              )}
            </aside>
          </div>
          {p.quote && (
            <figure className="quote" data-reveal>
              <blockquote>“{p.quote.text[lang]}”</blockquote>
              <figcaption>{p.quote.author}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sechead"><h2 className="h2" data-reveal>{t.common.related}</h2>
            <div className="sechead__end"><Link className="btn btn--line" href={`/${locale}/work`}>{t.common.allWork}<span className="arr" aria-hidden>→</span></Link></div>
          </div>
          <div className="related">
            {related.map((r, i) => <ProjectCard key={r.slug} p={r} t={t} lang={lang} href={`/${locale}/work/${r.slug}`} idx={i} />)}
          </div>
        </div>
      </section>
      <CtaBand title={t.work.ctaTitle} sub={t.work.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} img="kinshasa-dusk" />
    </>
  )
}
