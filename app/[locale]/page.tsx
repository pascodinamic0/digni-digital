import type { Metadata } from 'next'
import Link from 'next/link'
import Img from '@/app/components/v2/Img'
import { ProjectCard, MiniCard, Shot } from '@/app/components/v2/Project'
import LogoWall from '@/app/components/v2/LogoWall'
import CtaBand from '@/app/components/v2/CtaBand'
import { projects } from '@/content/v2/work'
import { services } from '@/content/v2/services'
import { LINKS } from '@/content/v2/locales'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '', title: t.meta.home.title, description: t.meta.home.desc, absoluteTitle: true })
}

export default async function Home({ params }: Props) {
  const { locale, lang, t } = await resolvePage(params)
  const h = t.home
  const featured = projects.filter((p) => p.featured)
  const apps = ['boutik', 'apporte', 'zandocod', 'mtusda'].map((s) => projects.find((p) => p.slug === s)!)
  const demos = projects.filter((p) => p.status === 'demo')
  const work = (slug: string) => `/${locale}/work/${slug}`

  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden>
          <div data-parallax className="hero__img"><Img name="kinshasa-duo" alt="" priority sizes="100vw" /></div>
        </div>
        <div className="wrap hero__in">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light hero__a1">{h.eyebrow}</p>
            <h1 className="hero__h1">
              <span className="hero__a2">{h.h1a}</span>
              <em className="hero__a3">{h.h1b}</em>
            </h1>
            <p className="hero__sub hero__a4">{h.sub}</p>
            <div className="hero__ctas hero__a5">
              <a className="btn btn--accent btn--lg" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{h.cta1}<span className="arr" aria-hidden>→</span></a>
              <Link className="btn btn--ghost-light btn--lg" href={`/${locale}/work`}>{h.cta2}</Link>
            </div>
            <ul className="hero__facts hero__a6">{h.facts.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div className="hero__device hero__a5" aria-hidden>
            <div className="phone"><Img name="shuleos-phone" kind="phone" alt="" sizes="260px" /></div>
            <div className="phone phone--back"><Img name="results-phone" kind="phone" alt="" sizes="220px" /></div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label={h.trustTitle}>
        <div className="wrap trust__in">
          <p>{h.trustTitle}</p>
          <ul>
            <li>Groupe Scolaire La Richarde</li>
            <li>Complexe Scolaire Kiese</li>
            <li>FHI 360 · EPIC DRC</li>
            <li>Kabinda Lodge</li>
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap pos">
          <p className="eyebrow" data-reveal>{h.posEyebrow}</p>
          <h2 className="h2 pos__title" data-reveal>{h.posTitle}</h2>
          <p className="lead pos__body" data-reveal>{h.posBody}</p>
        </div>
      </section>

      <section className="sec sec--tint" id="services">
        <div className="wrap">
          <div className="sechead sechead--center">
            <h2 className="h2" data-reveal>{h.pillarsTitle}</h2>
            <p className="lead" data-reveal>{h.pillarsSub}</p>
          </div>
          <div className="pillars">
            {services.map((s, i) => {
              const c = s.copy[lang]
              return (
                <article key={s.slug} className="pillar" data-reveal style={{ ['--d' as string]: `${i * 90}ms` }}>
                  <Link href={`/${locale}/services/${s.slug}`} className="pcard__link" aria-label={c.name} />
                  <div className="pillar__img"><Img name={s.img} alt="" sizes="(max-width: 900px) 92vw, 420px" /></div>
                  <div className="pillar__body">
                    <p className="pillar__k"><span>0{i + 1}</span>{c.k}</p>
                    <h3>{c.name}</h3>
                    <p className="pillar__gap">{c.gap}</p>
                    <p>{c.body}</p>
                    <ul className="ticks">{c.points.map((x) => <li key={x}>{x}</li>)}</ul>
                    <span className="pillar__more">{t.common.learnMore}<span className="arr" aria-hidden>→</span></span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sechead">
            <div>
              <p className="eyebrow" data-reveal>{h.proofEyebrow}</p>
              <h2 className="h2" data-reveal>{h.proofTitle}</h2>
            </div>
            <p className="lead" data-reveal>{h.proofSub}</p>
          </div>
          <div className="featured">
            {featured.map((p, i) => <ProjectCard key={p.slug} p={p} t={t} lang={lang} href={work(p.slug)} big={i === 0} idx={i} />)}
          </div>
          <h3 className="h3 subhead" data-reveal>{h.appsTitle}</h3>
          <div className="grid4">
            {apps.map((p, i) => <MiniCard key={p.slug} p={p} t={t} href={work(p.slug)} idx={i} />)}
          </div>
          <div className="center mt"><Link className="btn btn--dark" href={`/${locale}/work`}>{t.common.allWork}<span className="arr" aria-hidden>→</span></Link></div>
        </div>
      </section>

      <section className="sec sec--dark">
        <div className="wrap">
          <div className="sechead">
            <div>
              <p className="eyebrow eyebrow--light" data-reveal>{h.demosEyebrow}</p>
              <h2 className="h2" data-reveal>{h.demosTitle}</h2>
            </div>
            <p className="lead" data-reveal>{h.demosSub}</p>
          </div>
          <div className="demos">
            {demos.map((p, i) => (
              <article key={p.slug} className="demo" data-reveal style={{ ['--d' as string]: `${i * 100}ms` }}>
                <Shot p={p} t={t} sizes="(max-width: 900px) 92vw, 640px" />
                <div className="demo__body">
                  <div><h3>{p.name}</h3><p>{p.client[lang]}</p></div>
                  <a className="btn btn--accent" href={p.url} target="_blank" rel="noopener noreferrer">{t.common.openDemo}<span className="arr" aria-hidden>↗</span></a>
                </div>
                <p className="demo__sum">{p.summary[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sechead">
            <div>
              <p className="eyebrow" data-reveal>{h.logosEyebrow}</p>
              <h2 className="h2" data-reveal>{h.logosTitle}</h2>
            </div>
            <p className="lead" data-reveal>{h.logosSub}</p>
          </div>
          <LogoWall />
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap split">
          <div>
            <h2 className="h2" data-reveal>{h.processTitle}</h2>
            <ol className="steps">
              {h.process.map(([k, v], i) => (
                <li key={k} data-reveal style={{ ['--d' as string]: `${i * 60}ms` }}><span>{String(i + 1).padStart(2, '0')}</span><div><b>{k}</b><p>{v}</p></div></li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2" data-reveal>{h.sectorsTitle}</h2>
            <ul className="sectors">
              {h.sectors.map(([k, v], i) => (
                <li key={k} data-reveal style={{ ['--d' as string]: `${i * 60}ms` }}><b>{k}</b><p>{v}</p></li>
              ))}
            </ul>
            <div className="sectors__img" data-reveal><Img name="classroom-laptop" alt="" sizes="(max-width: 900px) 92vw, 560px" /></div>
          </div>
        </div>
      </section>

      <CtaBand title={h.ctaTitle} sub={h.ctaSub} book={h.cta1} whatsapp={h.ctaWhatsApp} />
    </>
  )
}
