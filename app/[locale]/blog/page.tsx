import { Suspense } from 'react'
import { Metadata } from 'next'
import BlogContent from '@/app/blog/BlogContent'
import { getArticlesForLocale } from '@/lib/blog'
import { AGENT_DATA_LAST_UPDATED, jsonLdScriptProps } from '@/lib/agent-readiness'

const blogMetaByLang: Record<string, { title: string; description: string; keywords: string[]; jsonLdName: string; jsonLdDescription: string }> = {
  en: {
    title: 'AI Employee Systems, Future-Ready Graduate Program & Agentic Softwares | Digni Digital Blog',
    description: 'Expert insights on AI employee systems for growing businesses, Future-Ready Graduate Program for private high schools, and custom SaaS development solutions.',
    keywords: ['AI employee system', 'AI receptionist', 'business automation', 'Future-Ready Graduate Program', 'private high school education', 'custom SaaS development', 'SaaS solutions', 'business growth', 'student career readiness'],
    jsonLdName: 'Digni Digital Blog',
    jsonLdDescription: 'Expert insights on AI employee systems, Future-Ready Graduate Program, and custom SaaS development.',
  },
  fr: {
    title: 'Transformation Digitale - Insights | Blog Digni Digital',
    description: 'Analyses d’experts sur les systèmes d’employés IA, le Programme Diplômé Prêt pour l\'Avenir et le développement SaaS sur mesure.',
    keywords: ['système d’employé IA', 'réceptionniste IA', 'automatisation d’entreprise', 'Programme Diplômé Prêt pour l’Avenir', 'enseignement secondaire privé', 'développement SaaS sur mesure', 'solutions SaaS', 'croissance d’entreprise', 'préparation des étudiants à la carrière'],
    jsonLdName: 'Blog Digni Digital',
    jsonLdDescription: 'Analyses d’experts sur les systèmes d’employés IA, le Programme Diplômé Prêt pour l’Avenir et le développement SaaS sur mesure.',
  },
  de: {
    title: 'KI-Mitarbeiter, Future-Ready Graduate Program & SaaS | Digni Digital Blog',
    description: 'Expertenwissen zu KI-Mitarbeiter-Systemen, dem Future-Ready Graduate Programm und individueller SaaS-Entwicklung.',
    keywords: ['KI-Mitarbeiter-System', 'KI-Rezeptionist', 'Geschäftsautomatisierung', 'Future-Ready Graduate Program', 'private weiterführende Schulen', 'individuelle SaaS-Entwicklung', 'SaaS-Lösungen', 'Unternehmenswachstum', 'Karrierebereitschaft von Schülern'],
    jsonLdName: 'Digni Digital Blog',
    jsonLdDescription: 'Expertenwissen zu KI-Mitarbeiter-Systemen, dem Future-Ready Graduate Program und individueller SaaS-Entwicklung.',
  },
  es: {
    title: 'Empleado IA, Future-Ready Graduate Program & SaaS | Blog Digni Digital',
    description: 'Información experta sobre empleados IA, el programa Future-Ready Graduate y desarrollo SaaS a medida.',
    keywords: ['sistema de empleado IA', 'recepcionista IA', 'automatización empresarial', 'Future-Ready Graduate Program', 'educación secundaria privada', 'desarrollo SaaS a medida', 'soluciones SaaS', 'crecimiento empresarial', 'preparación profesional estudiantil'],
    jsonLdName: 'Blog de Digni Digital',
    jsonLdDescription: 'Información experta sobre sistemas de empleados IA, el programa Future-Ready Graduate y desarrollo SaaS a medida.',
  },
  ar: {
    title: 'التحول الرقمي - رؤى | مدونة Digni Digital',
    description: 'رؤى خبراء حول أنظمة الموظفين بالذكاء الاصطناعي وبرنامج Future-Ready Graduate وحلول تطوير SaaS.',
    keywords: ['نظام موظف بالذكاء الاصطناعي', 'موظف استقبال بالذكاء الاصطناعي', 'أتمتة الأعمال', 'برنامج Future-Ready Graduate', 'تعليم المدارس الثانوية الخاصة', 'تطوير SaaS مخصص', 'حلول SaaS', 'نمو الأعمال', 'جاهزية الطلاب للمسار المهني'],
    jsonLdName: 'مدونة Digni Digital',
    jsonLdDescription: 'رؤى خبراء حول أنظمة الموظفين بالذكاء الاصطناعي وبرنامج Future-Ready Graduate وتطوير SaaS المخصص.',
  },
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const lang = locale.includes('fr') ? 'fr' : locale.includes('es') ? 'es' : locale.includes('ar') ? 'ar' : locale.includes('de') ? 'de' : 'en'
  const meta = blogMetaByLang[lang] ?? blogMetaByLang.en
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const lang = locale.includes('fr') ? 'fr' : locale.includes('es') ? 'es' : locale.includes('ar') ? 'ar' : locale.includes('de') ? 'de' : 'en'
  const meta = blogMetaByLang[lang] ?? blogMetaByLang.en
  const articles = getArticlesForLocale(locale)
  const articlesByLang = {
    en: getArticlesForLocale('us-en'),
    fr: getArticlesForLocale('fr-fr'),
    ar: getArticlesForLocale('sa-ar'),
    es: getArticlesForLocale('es-es'),
    de: getArticlesForLocale('de-de'),
  }

  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: meta.jsonLdName,
    description: meta.jsonLdDescription,
    url: `${baseUrl}/${locale}/blog`,
    numberOfPosts: articles.length,
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      datePublished: article.publishDate,
      author: { '@type': 'Person', name: article.author },
      description: article.excerpt,
      dateModified: AGENT_DATA_LAST_UPDATED,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(blogListJsonLd)}
      />
      <Suspense
        fallback={
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="h-10 w-48 bg-muted/30 rounded animate-pulse mb-8" />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-muted/20 rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <BlogContent articlesByLang={articlesByLang} />
      </Suspense>
    </>
  )
}
