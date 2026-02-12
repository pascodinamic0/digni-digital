'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../config/translations'

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}

interface BlogContentProps {
  articles: Article[]
}

const ALL_KEY = '__ALL__'

export default function BlogContent({ articles }: BlogContentProps) {
  const { language } = useLanguage()
  const t = translations[language].blog
  const [selectedCategory, setSelectedCategory] = useState(ALL_KEY)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9

  // Get unique categories
  const categoryKeys = [ALL_KEY, ...Array.from(new Set(articles.map(article => article.category)))]

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === ALL_KEY || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Paginate articles
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

  // Featured articles (first 4)
  const featuredArticles = articles.filter(article => article.featured).slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Simple Hero Section */}
      <section className="pt-24 pb-12 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.heroTitle} <span className="text-accent">{t.heroSubtitle}</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              {t.heroDesc}
            </p>
            
            {/* Combined Search and Category Filter */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/20">
                <div className="flex flex-col gap-6">
                  {/* Search Box */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      aria-label="Search articles"
                      className="w-full px-5 py-4 pl-14 bg-surface border border-white/20 rounded-xl text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                    />
                    <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      <span className="text-xs font-semibold text-muted uppercase tracking-wider">{t.filterByCategory}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {categoryKeys.map(category => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category)
                            setCurrentPage(1)
                          }}
                          aria-pressed={selectedCategory === category}
                          aria-label={`Filter articles by ${category === ALL_KEY ? t.all : category}`}
                          role="button"
                          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                            selectedCategory === category
                              ? 'bg-accent text-background shadow-lg shadow-accent/30 scale-105 transform'
                              : 'bg-surface text-muted hover:text-accent hover:bg-surface-light border border-white/10 hover:border-accent/30 hover:shadow-md hover:scale-[1.02]'
                          }`}
                        >
                          {category === ALL_KEY ? t.all : category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Articles - 4 in a row */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-bold">{t.featuredArticles}</h2>
              <span className="text-muted text-sm">{featuredArticles.length} {t.featured}</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <article className="bg-background border border-white/10 rounded-lg p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all cursor-pointer h-full group">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-muted text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{article.publishDate}</span>
                      <span>{t.by} {article.author}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-8">{t.allArticles}</h2>
          
          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.slug}`}>
                    <article className="bg-surface border border-white/10 rounded-lg p-6 hover:border-accent/50 transition-colors cursor-pointer h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-muted text-sm">{article.readTime}</span>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold mb-3 hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted mb-4">
                        <span>{article.publishDate}</span>
                        <span>{t.by} {article.author}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/5 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Simple Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      aria-label="Go to previous page"
                      className="px-4 py-2 bg-surface text-text rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-light transition-colors"
                    >
                      {t.previous}
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-accent text-background'
                            : 'bg-surface text-text hover:bg-surface-light'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      aria-label="Go to next page"
                      className="px-4 py-2 bg-surface text-text rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-light transition-colors"
                    >
                      {t.next}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-display text-2xl font-bold mb-2">{t.noArticles}</h3>
              <p className="text-muted mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory(ALL_KEY)
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Simple Newsletter */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted text-lg mb-8">
            Get weekly insights on African digital transformation and AI innovations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter subscription"
              className="flex-1 px-4 py-3 bg-background border border-white/20 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
            />
            <button 
              className="btn-primary whitespace-nowrap"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
          
          <p className="text-muted text-sm mt-4">
            Join 10,000+ business leaders. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-surface border border-white/10 rounded-lg p-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss how AI can revolutionize your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                {...getBookingLinkProps()}
                className="btn-primary"
              >
                {translations[language].cta.bookConsultation}
              </a>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}