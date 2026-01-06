'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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

export default function BlogContent({ articles }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))]

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
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
      <section className="pt-24 pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Digital Transformation <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Expert insights on African digital transformation, AI, and business success stories for leaders shaping the future.
            </p>
            
            {/* Simple Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-background border border-white/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-accent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - 4 in a row */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <article className="bg-surface border border-white/10 rounded-lg p-6 hover:border-accent/50 transition-colors cursor-pointer h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-muted text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-bold mb-3 hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{article.publishDate}</span>
                      <span>By {article.author}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Simple Category Filter */}
      <section className="py-8 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-background'
                    : 'bg-surface text-muted hover:text-white hover:bg-surface-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-8">All Articles</h2>
          
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
                        <span>By {article.author}</span>
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
                      className="px-4 py-2 bg-surface text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-light transition-colors"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-accent text-background'
                            : 'bg-surface text-white hover:bg-surface-light'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-surface text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-surface-light transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-display text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-muted mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
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
              className="flex-1 px-4 py-3 bg-background border border-white/20 rounded-lg text-white placeholder-muted focus:outline-none focus:border-accent"
            />
            <button className="btn-primary whitespace-nowrap">
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
                href="https://calendly.com/pascal-digny/consultation-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Free Consultation
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