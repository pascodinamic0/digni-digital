import type { Language } from '@/app/i18n/translations'
import { absoluteUrl, localizedUrl } from '@/lib/agent-readiness'

export type SiteVideoSlug =
  | 'ai-employee-explainer'
  | 'entreprises-operations-defaillantes'
  | 'digital-opportunity'

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
    slug: 'ai-employee-explainer',
    contentUrl: '/ai-employee-explainer.mp4',
    thumbnailUrl: '/videos/posters/ai-employee-explainer.jpg',
    uploadDate: '2026-01-15',
    relatedPath: '/ai-receptionist',
    copy: {
      en: {
        title: 'Broken businesses and operations',
        description:
          'A quick walkthrough: what drives leads away, overloads your team, and blocks growth, and why the right infrastructure matters more than working harder.',
      },
      fr: {
        title: 'Entreprises et opérations défaillantes',
        description:
          'Vue d’ensemble : ce qui fait fuir les leads, alourdit l’équipe et empêche la croissance, et pourquoi l’infrastructure compte plus que l’effort.',
      },
      es: {
        title: 'Empresas y operaciones rotas',
        description:
          'Recorrido rápido: qué aleja leads, sobrecarga al equipo y frena el crecimiento, y por qué la infraestructura correcta importa más que esforzarse más.',
      },
      de: {
        title: 'Defekte Unternehmen und Abläufe',
        description:
          'Ein kurzer Überblick: was Leads vertreibt, Teams überlastet und Wachstum blockiert — und warum die richtige Infrastruktur wichtiger ist als härter arbeiten.',
      },
      ar: {
        title: 'أعمال وعمليات معطّلة',
        description:
          'جولة سريعة: ما الذي يبعد العملاء المحتملين، ويُرهق الفريق، ويعيق النمو — ولماذا البنية التحتية الصحيحة أهم من العمل بجهد أكبر.',
      },
    },
  },
  {
    slug: 'entreprises-operations-defaillantes',
    contentUrl: '/Entreprises___Opérations_Défaillantes.mp4',
    thumbnailUrl: '/videos/posters/entreprises-operations-defaillantes.jpg',
    uploadDate: '2026-01-15',
    relatedPath: '/ai-receptionist',
    copy: {
      en: {
        title: 'Entreprises et opérations défaillantes',
        description:
          'French explainer: what drives leads away, overloads your team, and blocks growth.',
        speaker: 'Digni Digital',
      },
      fr: {
        title: 'Entreprises et opérations défaillantes',
        description:
          'Vue d’ensemble : ce qui fait fuir les leads, alourdit l’équipe et empêche la croissance, et pourquoi l’infrastructure compte plus que l’effort.',
      },
      es: {
        title: 'Entreprises et opérations défaillantes',
        description:
          'Explicación en francés: qué aleja leads, sobrecarga equipos y frena el crecimiento.',
      },
      de: {
        title: 'Entreprises et opérations défaillantes',
        description:
          'Französischer Erklärfilm: was Leads vertreibt, Teams überlastet und Wachstum blockiert.',
      },
      ar: {
        title: 'Entreprises et opérations défaillantes',
        description:
          'فيديو توضيحي بالفرنسية: ما الذي يبعد العملاء المحتملين ويُرهق الفريق ويعيق النمو.',
      },
    },
  },
  {
    slug: 'digital-opportunity',
    contentUrl: '/get.mp4',
    thumbnailUrl: '/blog/future-ready-graduate-program-transforming-education-career-success.png',
    uploadDate: '2026-02-01',
    relatedPath: '/future-ready-graduate',
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

/** Slug for the locale-specific AI receptionist explainer watch page. */
export function getAiReceptionistExplainerWatchSlug(locale: string): SiteVideoSlug {
  return languageFromLocale(locale) === 'fr'
    ? 'entreprises-operations-defaillantes'
    : 'ai-employee-explainer'
}
