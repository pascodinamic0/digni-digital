import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/app/components/v2/PageHead'
import WorkFilter from '@/app/components/v2/WorkFilter'
import CtaBand from '@/app/components/v2/CtaBand'
import { Shot, StatusChip } from '@/app/components/v2/Project'
import { projects, sectorOrder } from '@/content/v2/work'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/work', title: t.meta.work.title, description: t.meta.work.desc })
}

export default async function WorkPage({ params }: Props) {
  const { locale, lang, t } = await resolvePage(params)
  const options = sectorOrder
    .map((s) => ({ key: s, label: t.sector[s], count: s === 'all' ? projects.length : projects.filter((p) => p.sector === s).length }))
    .filter((o) => o.count > 0)
  return (
    <>
      <PageHead eyebrow={t.work.eyebrow} title={t.work.title} sub={t.work.sub} />
      <section className="sec sec--tight">
        <div className="wrap">
          <WorkFilter label={t.work.filter} options={options}>
            {projects.map((p, i) => {
              const href = `/${locale}/work/${p.slug}`
              return (
                <article id={p.slug} key={p.slug} className="case" data-s={p.sector} style={{ ['--d' as string]: `${Math.min(i, 4) * 60}ms` }}>
                  <Link href={href} className="case__media" tabIndex={-1} aria-hidden><Shot p={p} t={t} sizes="(max-width: 900px) 92vw, 640px" priority={i === 0} /></Link>
                  <div className="case__body">
                    <div className="pcard__meta"><span className="pcard__sector">{t.sector[p.sector]}</span><StatusChip status={p.status} t={t} /></div>
                    <h2><Link href={href}>{p.name}</Link></h2>
                    <p className="case__client"><span>{t.common.client}</span>{p.client[lang]}</p>
                    <p className="case__sum">{p.summary[lang]}</p>
                    {p.built[lang].length > 0 && (
                      <>
                        <h3 className="case__h">{t.common.whatWeBuilt}</h3>
                        <ul className="ticks">{p.built[lang].map((b) => <li key={b}>{b}</li>)}</ul>
                      </>
                    )}
                    <div className="case__ctas">
                      <Link className="btn btn--dark" href={href}>{t.common.readCase}<span className="arr" aria-hidden>→</span></Link>
                      {p.url && (
                        <a className="btn btn--line" href={p.url} target="_blank" rel="noopener noreferrer">
                          {p.status === 'demo' ? t.common.openDemo : p.urlLabel ?? t.common.visit}<span aria-hidden> ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </WorkFilter>
        </div>
      </section>
      <CtaBand title={t.work.ctaTitle} sub={t.work.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} img="kinshasa-dusk" />
    </>
  )
}
