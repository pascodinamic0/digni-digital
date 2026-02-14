import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import BlogPostContent from '../BlogPostContent'
import { allArticles } from '../page'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await props.params
  const article = allArticles.find(article => article.slug === slug)
  
  if (!article) {
    return {
      title: 'Article Not Found | Digni Digital Blog'
    }
  }

  return {
    title: `${article.title} | Digni Digital Blog`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params
  const article = allArticles.find(article => article.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <BlogPostContent article={article} />
        </div>
      </article>

      <Footer />
    </main>
  )
}