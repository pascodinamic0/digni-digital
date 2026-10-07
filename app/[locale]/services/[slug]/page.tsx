import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHead from '@/app/components/v2/PageHead'
import Img from '@/app/components/v2/Img'
import Faq from '@/app/components/v2/Faq'
import CtaBand from '@/app/components/v2/CtaBand'
import JsonLd from '@/app/components/v2/JsonLd'
import CheckoutButton from '@/app/components/v2/CheckoutButton'
import { ProjectCard } from '@/app/components/v2/Project'
import { services, getService, svcUi } from '@/content/v2/services'
import { getProject } from '@/content/v2/work'
import { LINKS, SITE_URL } from '@/content/v2/locales'
import { langOf, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'
import { loadFutureReadyOfferings } from '@/lib/future-ready-offerings'
import { futureReadyOfferingDisplayCopy } from '@/app/i18n/futureReadyPage'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const revalidate = 3600
export const dynamicParams = false
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const s = getService(slug)
  if (!s) return {}
  const c = s.copy[langOf(locale)]
  return pageMetadata({ locale, path: `/services/${slug}`, title: c.name, description: `${c.body} ${c.gap}` })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const { locale, lang, t } = await resolvePage(params)
  const s = getService(slug)
  if (!s) notFound()
  const c = s.copy[lang]
  const ui = svcUi[lang]
  const related = s.related.map((r) => getProject(r)).filter((p): p is NonNullable<typeof p> => Boolean(p))
  const offerings = s.slug === 'future-ready' ? await loadFutureReadyOfferings() : []
  const display = futureReadyOfferingDisplayCopy[lang] ?? {}
  const assessHref = `/${locale}/services/${s.slug}/assessment`

  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'Service', name: c.name, serviceType: c.k, description: `${c.body} ${c.heroSub}`,
      url: `${SITE_URL}/${locale}/services/${s.slug}`, provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['Democratic Republic of the Congo', 'Kenya', 'Africa'],
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: c.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ]

  return (
    <>
      <JsonLd data={ld} />
      <PageHead eyebrow={c.k} title={c.name} sub={c.heroSub} img={s.heroImg}>
        <a className="btn btn--accent btn--lg" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{t.home.cta1}<span className="arr" aria-hidden>→</span></a>
        <Link className="btn btn--ghost-light btn--lg" href={assessHref}>{ui.fitCheck}</Link>
      </PageHead>

      <section className="sec">
        <div className="wrap split split--center">
          <div>
            <p className="eyebrow" data-reveal>{ui.builtFor}</p>
            <h2 className="h2" data-reveal>{c.problemTitle}</h2>
            <p className="lead mt-s" data-reveal>{c.problemBody}</p>
            <p className="pillar__gap mt-s" data-reveal>{c.gap}</p>
          </div>
          <div className="imgcard" data-reveal><Img name={s.img} alt="" sizes="(max-width: 900px) 92vw, 600px" /></div>
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap">
          <h2 className="h2" data-reveal>{c.buildTitle}</h2>
          <div className="feat">
            {c.build.map(([k, v], i) => (
              <div key={k} className="feat__card" data-reveal style={{ ['--d' as string]: `${(i % 3) * 70}ms` }}><span>{String(i + 1).padStart(2, '0')}</span><b>{k}</b><p>{v}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <h2 className="h2" data-reveal>{c.stepsTitle}</h2>
            <ol className="steps">
              {c.steps.map(([k, v], i) => (
                <li key={k} data-reveal style={{ ['--d' as string]: `${i * 60}ms` }}><span>{String(i + 1).padStart(2, '0')}</span><div><b>{k}</b><p>{v}</p></div></li>
              ))}
            </ol>
          </div>
          <div className={`pricebox ${s.slug === 'future-ready' ? 'pricebox--soft' : ''}`} data-reveal>
            <h2 className="h3">{c.pricingTitle}</h2>
            <p>{c.pricingBody}</p>
            {s.checkoutPlan && (
              <CheckoutButton plan={s.checkoutPlan} locale={locale} label={c.checkout} busy={ui.redirecting} className="btn btn--accent btn--block" />
            )}
            <Link className="btn btn--ghost-light btn--block" href={assessHref}>{ui.fitCheck}</Link>
            <a className="btn btn--ghost-light btn--block" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{ui.book}</a>
            {s.checkoutPlan && <p className="pricebox__note">{c.checkoutNote}</p>}
          </div>
        </div>
      </section>

      {offerings.length > 0 && (
        <section className="sec sec--tint" id="programmes">
          <div className="wrap">
            <h2 className="h2" data-reveal>{c.pricingTitle}</h2>
            <div className="offers">
              {offerings.map((o, i) => {
                const d = display[o.slug] ?? {}
                const name = d.name ?? o.name
                const desc = d.description ?? o.description
                const features = d.features ?? o.features
                const options = o.priceOptions?.map((p, j) => ({ ...p, period: d.priceOptions?.[j]?.period ?? p.period }))
                const audience = o.audience === 'schools' ? ui.schools : o.audience === 'professional' ? ui.institutes : ui.everyone
                return (
                  <article key={o.slug} className={`offer ${o.popular ? 'offer--hl' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }}>
                    <div className="pcard__meta"><span className="pcard__sector">{audience}</span>{o.popular && <span className="chip chip--live"><i aria-hidden />{ui.popular}</span>}</div>
                    <h3>{name}</h3>
                    <div className="offer__price" dir="ltr">
                      {options ? options.map((p) => <div key={p.amount}><b>{p.amount}</b><span>{p.period}</span></div>) : <div><b>{o.price}</b><span>{d.period ?? o.period}</span></div>}
                    </div>
                    <p>{desc}</p>
                    <ul className="ticks">{features.slice(0, 7).map((f) => <li key={f}>{f}</li>)}</ul>
                    <div className="offer__ctas">
                      {o.ctaMode === 'school' && <>
                        <CheckoutButton plan="frg_school_semester" locale={locale} label={ui.paySemester} busy={ui.redirecting} className="btn btn--dark btn--block" />
                        <CheckoutButton plan="frg_school_yearly" locale={locale} label={ui.payYear} busy={ui.redirecting} className="btn btn--line btn--block" />
                      </>}
                      {o.ctaMode === 'professional' && <CheckoutButton plan="frg_professional_monthly" locale={locale} label={ui.payCenter} busy={ui.redirecting} className="btn btn--dark btn--block" />}
                      {o.ctaMode === 'guided' && <CheckoutButton plan="frg_guided" locale={locale} label={ui.payGuided} busy={ui.redirecting} className="btn btn--dark btn--block" />}
                      <a className="btn btn--line btn--block" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{ui.consultFirst}</a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 ? (
        <section className={`sec ${offerings.length ? '' : 'sec--tint'}`}>
          <div className="wrap">
            <div className="sechead"><h2 className="h2" data-reveal>{c.proofTitle}</h2>
              <div className="sechead__end"><Link className="btn btn--line" href={`/${locale}/work`}>{t.common.allWork}<span className="arr" aria-hidden>→</span></Link></div>
            </div>
            <div className="related">
              {related.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} p={p} t={t} lang={lang} href={`/${locale}/work/${p.slug}`} idx={i} />)}
            </div>
          </div>
        </section>
      ) : (
        <section className="sec">
          <div className="wrap split split--center">
            <div className="imgcard" data-reveal><Img name="students-steps" alt="" sizes="(max-width: 900px) 92vw, 600px" /></div>
            <div>
              <h2 className="h2" data-reveal>{c.proofTitle}</h2>
              <ol className="timeline">
                {t.about.story.slice(1, 2).concat(t.about.story.slice(0, 1)).map(([y, v]) => (
                  <li key={y} data-reveal><span>{y}</span><p>{v}</p></li>
                ))}
              </ol>
              <p className="lead" data-reveal>{ui.founderNote}</p>
              <Link className="btn btn--line mt-s" href={`/${locale}/about`}>{t.nav.about}<span className="arr" aria-hidden>→</span></Link>
            </div>
          </div>
        </section>
      )}

      <Faq items={c.faqs} title={t.common.faq} />
      <CtaBand title={c.ctaTitle} sub={c.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} />
    </>
  )
}
