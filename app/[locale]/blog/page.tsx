import { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import BlogContent from '@/app/blog/BlogContent'
import { getArticlesForLocale } from '@/lib/blog'
import { allArticlesEn } from '@/lib/blog'

const blogMetaByLang: Record<string, { title: string; description: string }> = {
  en: {
    title: 'AI Employee Systems, Digni Digital Literacy & Custom SaaS | Digni Digital Blog',
    description: 'Expert insights on AI employee systems for growing businesses, Digni Digital Literacy program for private high schools, and custom SaaS development solutions.',
  },
  fr: {
    title: 'Transformation Digitale - Insights | Blog Digni Digital',
    description: 'Expertises sur les systèmes employés IA, le programme Digni Digital Literacy et le développement SaaS sur mesure.',
  },
  de: {
    title: 'KI-Mitarbeiter, Digni Digital Literacy & SaaS | Digni Digital Blog',
    description: 'Expertenwissen zu KI-Mitarbeiter-Systemen, dem Digni Digital Literacy Programm und individueller SaaS-Entwicklung.',
  },
  es: {
    title: 'Empleado IA, Digni Digital Literacy & SaaS | Blog Digni Digital',
    description: 'Información experta sobre empleados IA, el programa Digni Digital Literacy y desarrollo SaaS a medida.',
  },
  ar: {
    title: 'التحول الرقمي - رؤى | مدونة Digni Digital',
    description: 'رؤى خبراء حول أنظمة الموظفين بالذكاء الاصطناعي وبرنامج Digni Digital Literacy وحلول تطوير SaaS.',
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale.includes('fr') ? 'fr' : locale.includes('de') ? 'de' : locale.includes('es') ? 'es' : locale.includes('ar') ? 'ar' : 'en'
  const meta = blogMetaByLang[lang] ?? blogMetaByLang.en
  return {
    title: meta.title,
    description: meta.description,
    keywords: ['AI employee system', 'AI receptionist', 'business automation', 'Digni Digital Literacy program', 'private high school education', 'custom SaaS development', 'SaaS solutions', 'business growth', 'student career readiness'],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const articles = getArticlesForLocale(locale)
  const articlesByLang = {
    en: getArticlesForLocale('us-en'),
    fr: getArticlesForLocale('fr-fr'),
    ar: getArticlesForLocale('sa-ar'),
    de: getArticlesForLocale('de-de'),
    es: getArticlesForLocale('es-es'),
  }

  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Digni Digital Blog',
    description: 'Expert insights on AI employee systems, Digni Digital Literacy programs, and custom SaaS development.',
    url: `${baseUrl}/${locale}/blog`,
    numberOfPosts: articles.length,
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      datePublished: article.publishDate,
      author: { '@type': 'Person', name: article.author },
      description: article.excerpt,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <BlogContent articlesByLang={articlesByLang} />
      <nav
        aria-label="All blog articles"
        className="sr-only"
        data-crawler-links="all-posts"
      >
        <h2>All blog posts</h2>
        <ul>
          {allArticlesEn.map((article) => (
            <li key={article.slug}>
              <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
