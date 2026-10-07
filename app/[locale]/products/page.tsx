import type { Metadata } from 'next'
import Link from 'next/link'
import PageHead from '@/app/components/v2/PageHead'
import Img from '@/app/components/v2/Img'
import CtaBand from '@/app/components/v2/CtaBand'
import JsonLd from '@/app/components/v2/JsonLd'
import { products, productView, type ProductGroup } from '@/content/v2/products'
import { LINKS, SITE_URL } from '@/content/v2/locales'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/products', title: t.meta.products.title, description: t.meta.products.desc })
}

const groups: ProductGroup[] = ['platforms', 'apps', 'demos', 'tools']

export default async function ProductsPage({ params }: Props) {
  const { locale, lang, t } = await resolvePage(params)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => {
      const v = productView(p)
      return {
        '@type': 'ListItem', position: i + 1,
        item: {
          '@type': 'SoftwareApplication', name: p.name, applicationCategory: p.category, operatingSystem: 'Web',
          description: v.summary?.[lang], url: v.url ?? `${SITE_URL}/${locale}${p.path ?? '/products'}`,
          publisher: { '@id': `${SITE_URL}/#organization` },
          ...(p.alsoKnownAs ? { alternateName: p.alsoKnownAs } : {}),
        },
      }
    }),
  }
  return (
    <>
      <JsonLd data={ld} />
      <PageHead eyebrow={t.products.eyebrow} title={t.products.title} sub={t.products.sub} />
      {groups.map((g, gi) => {
        const list = products.filter((p) => p.group === g)
        return (
          <section key={g} className={`sec sec--tight ${gi % 2 ? 'sec--tint' : ''}`} id={g}>
            <div className="wrap">
              <h2 className="h2 grouph" data-reveal>{t.products.groups[g]}</h2>
              <div className="prods">
                {list.map((p, i) => {
                  const v = productView(p)
                  const caseHref = v.project ? `/${locale}/work/${v.project.slug}` : undefined
                  return (
                    <article key={p.id} className="prod" id={p.id} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
                      <div className={`prod__img ${v.phone ? '' : 'prod__img--brand'}`}>
                        {v.phone
                          ? <Img name={v.phone} kind="phone" alt={`${p.name} — phone screen`} sizes="(max-width: 640px) 70vw, 200px" />
                          : <div className="prod__mark">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src="/brand/v2/shield-128.webp" alt="" width={68} height={64} loading="lazy" />
                              <span>{p.name}</span>
                            </div>}
                      </div>
                      <div className="prod__body">
                        <div className="pcard__meta">
                          <span className={`chip chip--${p.status}`}><i aria-hidden />{t.status[p.status]}</span>
                          {p.alsoKnownAs && <span className="formerly">{t.products.formerly}</span>}
                        </div>
                        <h3>{p.name}</h3>
                        {v.summary && <p>{v.summary[lang]}</p>}
                        {v.tags && <ul className="tags">{v.tags[lang].slice(0, 4).map((x) => <li key={x}>{x}</li>)}</ul>}
                        <div className="prod__ctas">
                          {v.url && <a className="btn btn--dark btn--sm" href={v.url} target="_blank" rel="noopener noreferrer">{p.status === 'demo' ? t.common.openDemo : t.common.openApp}<span aria-hidden> ↗</span></a>}
                          {p.path && <Link className="btn btn--dark btn--sm" href={`/${locale}${p.path}`}>{t.products.guideTitle}<span className="arr" aria-hidden>→</span></Link>}
                          {caseHref && <Link className="btn btn--line btn--sm" href={caseHref}>{t.common.readCase}</Link>}
                          {!v.url && !p.path && <a className="btn btn--line btn--sm" href={`mailto:${LINKS.email}?subject=${encodeURIComponent(`${p.name} — ${t.products.requestAccess}`)}`}>{t.products.requestAccess}</a>}
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}
      <CtaBand title={t.work.ctaTitle} sub={t.work.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} />
    </>
  )
}
