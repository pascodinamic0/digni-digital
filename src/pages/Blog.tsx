import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const categories = ['All', 'Digital Transformation', 'Automation', 'SaaS', 'Case Studies'];
  
  const blogPosts = [
    {
      title: 'The Future of Business Automation in Africa: Why Voice-to-Proposal is Just the Beginning',
      excerpt: 'Exploring how AI-powered tools are transforming business processes across emerging markets, and what this means for competitive advantage.',
      category: 'SaaS',
      author: 'Digni Digital Team',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      slug: 'voice-to-proposal-africa-automation-future'
    },
    {
      title: 'From Chaos to Clients: The 90-Day Transformation Framework',
      excerpt: 'A deep dive into our proven methodology for helping businesses build growth infrastructure that scales.',
      category: 'Digital Transformation',
      author: 'Digni Digital Team',
      publishDate: '2024-01-10',
      readTime: '12 min read',
      featured: false,
      slug: 'chaos-to-clients-90-day-framework'
    },
    {
      title: 'Case Study: How a Medical Practice Doubled Revenue with Smart Automation',
      excerpt: 'Real numbers, real results: See exactly how Dr. Mitchell\'s clinic transformed their patient acquisition system.',
      category: 'Case Studies',
      author: 'Digni Digital Team',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      featured: false,
      slug: 'medical-practice-doubled-revenue-automation'
    },
    {
      title: 'The Hidden Cost of Manual Processes: Why Small Inefficiencies Kill Growth',
      excerpt: 'Breaking down the true cost of manual workflows and how to identify the processes that need automation first.',
      category: 'Automation',
      author: 'Digni Digital Team',
      publishDate: '2023-12-28',
      readTime: '10 min read',
      featured: false,
      slug: 'hidden-cost-manual-processes-growth'
    },
    {
      title: 'Building SaaS in Emerging Markets: Lessons from Voice-to-Proposal Development',
      excerpt: 'The unique challenges and opportunities of developing software solutions for emerging market needs.',
      category: 'SaaS',
      author: 'Digni Digital Team',
      publishDate: '2023-12-20',
      readTime: '14 min read',
      featured: false,
      slug: 'building-saas-emerging-markets-lessons'
    },
    {
      title: 'Digital Transformation vs. Digital Optimization: Why Most Businesses Get It Wrong',
      excerpt: 'Understanding the difference between true transformation and surface-level improvements.',
      category: 'Digital Transformation',
      author: 'Digni Digital Team',
      publishDate: '2023-12-15',
      readTime: '9 min read',
      featured: false,
      slug: 'digital-transformation-vs-optimization'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            The Future of Business in Africa & Beyond
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-12">
            Insights, strategies, and real stories from the frontlines of digital transformation. 
            Learn how businesses are building the infrastructure that scales.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white hover:bg-muted text-muted-foreground hover:text-foreground 
                          border border-border rounded-full font-medium transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.slug} className="section-padding">
          <div className="container-max">
            <div className="card-premium bg-gradient-to-br from-white to-muted/30 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <div className="badge-new">Featured</div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-heading-3 mb-6">{post.title}</h2>
                  <p className="text-body-large mb-8">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{post.author}</div>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="btn-primary"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-premium-md p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Latest Insight</h4>
                    <p className="text-sm text-muted-foreground">
                      Discover how AI is reshaping business processes across emerging markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* All Posts Grid */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-heading-2 mb-4">Latest Articles</h2>
            <p className="text-body-large text-muted-foreground">
              Stay updated with the latest insights, case studies, and strategic thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div key={post.slug} className="card-hover-lift bg-white group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                    {post.category}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-accent hover:text-accent-dark font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-max">
          <div className="card-premium bg-primary text-primary-foreground text-center max-w-2xl mx-auto">
            <h3 className="text-heading-3 mb-6">Stay Ahead of the Curve</h3>
            <p className="text-xl mb-8 opacity-90">
              Get our latest insights delivered directly to your inbox. No spam, just valuable content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-accent">
                Subscribe
              </button>
            </div>

            <p className="text-sm opacity-75 mt-4">
              Join 1,000+ business leaders already subscribed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;