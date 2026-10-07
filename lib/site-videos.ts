import type { Language } from '@/app/i18n/translations'
import { absoluteUrl, localizedUrl } from '@/lib/agent-readiness'

// 'ai-employee-explainer' and 'entreprises-operations-defaillantes' were removed: their MP4 files were
// never in the repo (the pages 404'd on the video). Their URLs 301 to /services/ai-employee (next.config.js).
export type SiteVideoSlug = 'digital-opportunity'

type LocalizedCopy = Record<
  Language,
  {
    title: string
    description: string
    speaker?: string
  }
>

export type SiteVideo = {
  slug: SiteVideoSlug
  contentUrl: string
  thumbnailUrl: string
  uploadDate: string
  relatedPath: string
  copy: LocalizedCopy
}

export const siteVideos: SiteVideo[] = [
  {
    slug: 'digital-opportunity',
    contentUrl: '/get.mp4',
    thumbnailUrl: '/blog/future-ready-graduate-program-transforming-education-career-success.png',
    uploadDate: '2026-02-01',
    relatedPath: '/services/future-ready',
    copy: {
      en: {
        title: 'Digital Opportunity',
        description:
          'Insights on seizing digital opportunities and building success in the modern economy.',
        speaker: 'Thought Leader',
      },
      fr: {
        title: 'Opportunité numérique',
        description:
          'Des idées pour saisir les opportunités numériques et bâtir sa réussite dans l’économie moderne.',
        speaker: 'Leader d’opinion',
      },
      es: {
        title: 'Oportunidad digital',
        description:
          'Ideas para aprovechar oportunidades digitales y construir éxito en la economía moderna.',
        speaker: 'Líder de opinión',
      },
      de: {
        title: 'Digitale Chance',
        description:
          'Impulse, um digitale Chancen zu nutzen und in der modernen Wirtschaft Erfolg aufzubauen.',
        speaker: 'Vordenker',
      },
      ar: {
        title: 'الفرصة الرقمية',
        description:
          'رؤى لاقتناص الفرص الرقمية وبناء النجاح في الاقتصاد الحديث.',
        speaker: 'قائد فكر',
      },
    },
  },
]

const siteVideoBySlug = new Map(siteVideos.map((video) => [video.slug, video]))

export function getSiteVideo(slug: string): SiteVideo | undefined {
  return siteVideoBySlug.get(slug as SiteVideoSlug)
}

export function getAllSiteVideoSlugs(): SiteVideoSlug[] {
  return siteVideos.map((video) => video.slug)
}

export function languageFromLocale(locale: string): Language {
  if (locale.includes('fr')) return 'fr'
  if (locale.includes('es')) return 'es'
  if (locale.includes('de')) return 'de'
  if (locale.includes('ar')) return 'ar'
  return 'en'
}

export function getSiteVideoCopy(video: SiteVideo, locale: string) {
  const lang = languageFromLocale(locale)
  return video.copy[lang] ?? video.copy.en
}

export function getSiteVideoWatchPath(slug: SiteVideoSlug): string {
  return `/videos/${slug}`
}

export function getSiteVideoWatchUrl(locale: string, slug: SiteVideoSlug): string {
  return localizedUrl(locale, getSiteVideoWatchPath(slug))
}

export function getSiteVideoJsonLd(video: SiteVideo, locale: string) {
  const copy = getSiteVideoCopy(video, locale)
  const watchUrl = getSiteVideoWatchUrl(locale, video.slug)

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: copy.title,
    description: copy.description,
    thumbnailUrl: absoluteUrl(video.thumbnailUrl),
    uploadDate: video.uploadDate,
    contentUrl: absoluteUrl(video.contentUrl),
    embedUrl: watchUrl,
    url: watchUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Digni Digital LLC',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/brand/digni-shield-logo.png'),
      },
    },
  }
}
