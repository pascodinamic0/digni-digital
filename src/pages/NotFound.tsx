import { Link } from 'react-router-dom';
import { Home, Search, Rocket, Package, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';

const NotFound = () => {
  const suggestions = [
    {
      icon: Home,
      title: 'Go Home',
      description: 'Return to our homepage and explore everything we offer',
      link: '/',
      cta: 'Back to Home'
    },
    {
      icon: Package,
      title: 'Explore Products',
      description: 'Check out ProposalAgent and our other business tools',
      link: '/products',
      cta: 'View Products'
    },
    {
      icon: Rocket,
      title: 'View Solutions',
      description: 'Discover how we can transform your business',
      link: '/solutions',
      cta: 'See Solutions'
    },
    {
      icon: Calendar,
      title: 'Book a Consultation',
      description: 'Schedule a free strategy session with our team',
      link: '/book',
      cta: 'Book Now'
    }
  ];

  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Explore our solutions, products, or get in touch with Digni Digital LLC."
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
        <div className="container-max px-6">
          <div className="text-center mb-16">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold bg-gradient-to-br from-primary via-accent to-emerald bg-clip-text text-transparent leading-none">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-heading-2 mb-6">
                This Page Doesn't Exist
              </h2>
              <p className="text-body-large mb-8">
                The page you're looking for might have been moved, deleted, or never existed. 
                But don't worry — we have plenty of other valuable resources for you.
              </p>
              
              {/* Search Suggestion */}
              <div className="flex items-center gap-4 max-w-md mx-auto mb-12">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search our site..."
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const query = (e.target as HTMLInputElement).value;
                        window.location.href = `/?search=${encodeURIComponent(query)}`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Suggestions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {suggestions.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="card-hover-lift text-left group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <span className="text-accent font-medium text-sm group-hover:underline">
                    {item.cta} →
                  </span>
                </Link>
              ))}
            </div>

            {/* Additional Help */}
            <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Still Need Help?</h3>
              <p className="text-muted-foreground mb-6">
                If you believe this is an error or you need assistance finding something specific, 
                our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Contact Support
                </Link>
                <a 
                  href="mailto:hello@dignidigital.com"
                  className="btn-secondary"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
