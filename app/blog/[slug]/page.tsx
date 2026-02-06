import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { allArticles } from '../page'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const article = allArticles.find(article => article.slug === params.slug)
  
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = allArticles.find(article => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Blog */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-8"
            aria-label="Back to blog listing"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {article.category}
              </span>
              <span className="text-muted text-sm">{article.readTime}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center text-sm font-bold text-background">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <span>By {article.author}</span>
              </div>
              <span>•</span>
              <span>{article.publishDate}</span>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="blog-content max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            aria-label="Article content"
          />

          {/* Article Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="font-display text-lg font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface text-sm rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-surface rounded-lg text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted mb-6">
              Let's discuss how these insights can be applied to your specific challenges.
            </p>
            <a
              {...getBookingLinkProps()}
              className="btn-primary"
            >
              {ctaConfig.buttonText.bookConsultation}
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}