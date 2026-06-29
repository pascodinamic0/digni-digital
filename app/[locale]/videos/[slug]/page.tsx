import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { routing } from '@/i18n/routing'
import {
  getAllSiteVideoSlugs,
  getSiteVideo,
  getSiteVideoCopy,
  getSiteVideoJsonLd,
  getSiteVideoWatchPath,
  type SiteVideoSlug,
} from '@/lib/site-videos'
import { jsonLdScriptProps, absoluteUrl } from '@/lib/agent-readiness'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSiteVideoSlugs().map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const video = getSiteVideo(slug)
  if (!video) return { title: 'Video | Digni Digital' }

  const copy = getSiteVideoCopy(video, locale)
  const watchPath = `/${locale}${getSiteVideoWatchPath(slug as SiteVideoSlug)}`

  return {
    title: `${copy.title} | Digni Digital`,
    description: copy.description,
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: 'video.other',
      url: absoluteUrl(watchPath),
      videos: [
        {
          url: absoluteUrl(video.contentUrl),
          type: 'video/mp4',
        },
      ],
      images: [{ url: absoluteUrl(video.thumbnailUrl) }],
    },
  }
}

export default async function VideoWatchPage({ params }: Props) {
  const { locale, slug } = await params
  const video = getSiteVideo(slug)
  if (!video) notFound()

  const copy = getSiteVideoCopy(video, locale)
  const jsonLd = getSiteVideoJsonLd(video, locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScriptProps(jsonLd)} />
      <Navigation />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Watch</p>
          <h1 className="type-h2 font-display font-bold text-text mb-3">{copy.title}</h1>
          {copy.speaker && (
            <p className="type-caption uppercase tracking-wider text-muted mb-4">{copy.speaker}</p>
          )}
          <p className="type-body-lg text-muted mb-8 max-w-2xl">{copy.description}</p>

          <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
            <video
              controls
              playsInline
              preload="metadata"
              poster={video.thumbnailUrl}
              className="aspect-video w-full bg-black"
              title={copy.title}
            >
              <source src={video.contentUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={video.relatedPath} className="btn-primary">
              Learn more
            </Link>
            <a href={video.contentUrl} className="btn-secondary" download>
              Download video
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
