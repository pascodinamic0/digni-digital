import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHead from '@/app/components/v2/PageHead'
import CtaBand from '@/app/components/v2/CtaBand'
import JsonLd from '@/app/components/v2/JsonLd'
import { getArticlesForLocaleWithDb } from '@/lib/blog'
import { getDict, resolvePage } from '@/content/v2/get'
import { localeMeta, SITE_URL, type Lang } from '@/content/v2/locales'
import { pageMetadata } from '@/content/v2/seo'

/** ISR: file articles are static; agent-published DB posts appear within the hour. */
export const revalidate = 3600

type Props = { params: Promise<{ locale: string }> }

type Summary = { slug: string; title: string; excerpt: string; category: string; readTime: string; date: string; iso?: string; cover?: string | null }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/blog', title: t.meta.blog.title, description: t.meta.blog.desc })
}

function toSummary(a: { slug: string; title: string; excerpt: string; category: string; readTime: string; publishDate: string; coverImageUrl?: string | null }, lang: Lang, locale: string): Summary {
  const d = new Date(a.publishDate)
  const ok = !Number.isNaN(d.getTime())
  return {
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    readTime: a.readTime,
    date: ok ? new Intl.DateTimeFormat(localeMeta[locale as keyof typeof localeMeta]?.lang ?? lang, { day: 'numeric', month: 'short', year: 'numeric' }).format(d) : a.publishDate,
    iso: ok ? d.toISOString().slice(0, 10) : undefined,
    cover: a.coverImageUrl && (a.coverImageUrl.startsWith('/') || a.coverImageUrl.startsWith('http')) ? a.coverImageUrl : null,
  }
}

function Cover({ a, sizes, priority }: { a: Summary; sizes: string; priority?: boolean }) {
  if (a.cover) {
    return <Image src={a.cover} alt="" fill sizes={sizes} priority={priority} className="post__img" />
  }
  return (
    <span className="post__ph" aria-hidden>
      <span>{a.category}</span>
    </span>
  )
}

export default async function BlogPage({ params }: Props) {
  const { locale, lang, t } = await resolvePage(params)
  // Only the current locale, and only the fields a card needs (the old index shipped every body in every language).
  const all = (await getArticlesForLocaleWithDb(locale)).map((a) => toSummary(a, lang, locale))
  const [first, ...rest] = all
  const base = `/${locale}/blog`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Digni Digital — ' + t.blog.eyebrow,
          url: `${SITE_URL}${base}`,
          inLanguage: localeMeta[locale as keyof typeof localeMeta]?.hreflang,
          blogPost: all.slice(0, 30).map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE_URL}${base}/${a.slug}`, datePublished: a.iso, description: a.excerpt })),
        }}
      />
      <PageHead eyebrow={t.blog.eyebrow} title={t.blog.title} sub={t.blog.sub} />
      <section className="sec sec--tight">
        <div className="wrap">
          {!first ? (
            <p className="lead">{t.blog.empty}</p>
          ) : (
            <>
              <article className="post post--lead" data-reveal>
                <Link href={`${base}/${first.slug}`} className="post__media" tabIndex={-1} aria-hidden>
                  <Cover a={first} sizes="(max-width: 900px) 92vw, 680px" priority />
                </Link>
                <div className="post__body">
                  <p className="post__meta"><span className="post__cat">{t.blog.featured}</span><span>{first.category}</span></p>
                  <h2 className="h2"><Link href={`${base}/${first.slug}`}>{first.title}</Link></h2>
                  <p className="post__ex">{first.excerpt}</p>
                  <p className="post__meta post__meta--foot"><time dateTime={first.iso}>{first.date}</time><span>{first.readTime}</span></p>
                  <Link href={`${base}/${first.slug}`} className="pillar__more">{t.blog.read}<span className="arr" aria-hidden>→</span></Link>
                </div>
              </article>

              <h2 className="h3 posts__h">{t.blog.all} <span>{all.length}</span></h2>
              <div className="posts">
                {rest.map((a, i) => (
                  <article key={a.slug} className="post" data-reveal style={{ ['--d' as string]: `${(i % 3) * 60}ms` }}>
                    <Link href={`${base}/${a.slug}`} className="post__media" tabIndex={-1} aria-hidden>
                      <Cover a={a} sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 380px" />
                    </Link>
                    <div className="post__body">
                      <p className="post__meta"><span className="post__cat">{a.category}</span><span>{a.readTime}</span></p>
                      <h3><Link href={`${base}/${a.slug}`}>{a.title}</Link></h3>
                      <p className="post__ex">{a.excerpt}</p>
                      <p className="post__meta post__meta--foot"><time dateTime={a.iso}>{a.date}</time></p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CtaBand title={t.home.ctaTitle} sub={t.home.ctaSub} book={t.home.cta1} whatsapp={t.home.ctaWhatsApp} img="kinshasa-dusk" />
    </>
  )
}
