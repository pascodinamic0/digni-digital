import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Business in Africa: Digital-First or Die',
    excerpt: "Why African businesses can't afford to wait for digital transformation, and how to build systems that scale across emerging markets.",
    category: 'Digital Transformation',
    readTime: '8 min read',
    date: '2024-01-15',
    slug: 'future-of-business-in-africa'
  };

  const blogPosts = [
    {
      title: 'Why Your CRM is Failing (And How to Fix It)',
      excerpt: "Most businesses treat CRM as a contact database. Here's how to turn it into your growth engine.",
      category: 'Automation',
      readTime: '6 min read',
      date: '2024-01-10',
      slug: 'why-crm-failing-how-to-fix'
    },
    {
      title: 'ProposalAgent Case Study: 80% Faster Proposals',
      excerpt: 'Real estate agency cuts proposal time from 3 days to 30 minutes using voice-to-proposal automation.',
      category: 'Case Studies',
      readTime: '5 min read',
      date: '2024-01-08',
      slug: 'proposalagent-case-study-faster-proposals'
    },
    {
      title: 'Building SaaS for Emerging Markets: Lessons Learned',
      excerpt: 'What we discovered building affordable, powerful tools for businesses across Africa and beyond.',
      category: 'SaaS',
      readTime: '7 min read',
      date: '2024-01-05',
      slug: 'building-saas-emerging-markets-lessons'
    },
    {
      title: 'The $10K Lead Generation System That Works',
      excerpt: 'Step-by-step breakdown of the lead generation infrastructure that consistently generates qualified prospects.',
      category: 'Digital Transformation',
      readTime: '12 min read',
      date: '2024-01-03',
      slug: 'lead-generation-system-that-works'
    },
    {
      title: 'Why African Startups Fail (And How to Avoid It)',
      excerpt: 'Common pitfalls that kill African startups, and the systems thinking approach that prevents them.',
      category: 'Digital Transformation',
      readTime: '9 min read',
      date: '2023-12-28',
      slug: 'why-african-startups-fail-how-to-avoid'
    },
    {
      title: 'Automation for Non-Technical Founders',
      excerpt: "You don't need to code to automate your business. Here's how to build systems that work while you sleep.",
      category: 'Automation',
      readTime: '8 min read',
      date: '2023-12-25',
      slug: 'automation-for-non-technical-founders'
    }
  ];

  const categories = ['All', 'Digital Transformation', 'Automation', 'SaaS', 'Case Studies'];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            The Future of Business in Africa & Beyond.
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-12">
            Insights on digital transformation, automation, and building systems that scale in emerging markets. 
            Real strategies from real implementations.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-16">
            <h2 className="text-heading-2 mb-8">Featured Article</h2>
            <div className="card-premium bg-gradient-subtle border-accent/20 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-heading-2 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-body-large text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="btn-primary"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-2xl shadow-premium-lg p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-foreground font-heading font-bold text-2xl">D</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Featured Insight</h4>
                  <p className="text-muted-foreground text-sm">
                    Digital transformation isn't optional anymore—it's survival
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border transition-all ${
                  category === 'All' 
                    ? 'bg-accent text-accent-foreground border-accent' 
                    : 'border-border hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="card-hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3 bg-muted">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading-2 mb-8">
              Stay Ahead of the Curve
            </h2>
            <p className="text-subheading mb-12 opacity-90">
              Get weekly insights on digital transformation, automation strategies, and growth systems 
              delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 text-foreground"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sm opacity-80 mt-4">
              No spam. Unsubscribe anytime. Join 2,000+ business leaders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;