import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { getArticleBySlugForLocale } from '@/lib/blog'

function routeLocaleToLang(locale: string): 'en' | 'fr' | 'ar' | 'de' | 'es' {
  if (locale.includes('fr')) return 'fr'
  if (locale.includes('es')) return 'es'
  if (locale.includes('ar')) return 'ar'
  return 'en'
}

/** Loads file-based article HTML/metadata for a slug + site locale (prefill DB editor). */
export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')?.trim()
  const locale = searchParams.get('locale')?.trim() ?? 'us-en'
  if (!slug) {
    return NextResponse.json({ error: 'slug required' }, { status: 400 })
  }

  const bundle = getArticleBySlugForLocale(locale, slug)
  if (!bundle) {
    return NextResponse.json({ error: 'No file-based article for this slug' }, { status: 404 })
  }
  const lang = routeLocaleToLang(locale)
  const article = bundle[lang]
  return NextResponse.json({
    article: {
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      readTime: article.readTime,
      publishDate: article.publishDate,
      author: article.author,
      tags: article.tags,
      content: article.content,
    },
  })
}
