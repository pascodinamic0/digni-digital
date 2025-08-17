import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, ExternalLink, Building, Filter } from 'lucide-react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Sales', 'Marketing', 'Ops', 'Coming Soon'];
  
  const products = [
    {
      name: 'Voice-to-Proposal',
      tagline: 'Speak. We structure. You send. Proposals in minutes — not days.',
      status: 'NEW',
      category: 'Sales',
      icon: Mic,
      description: 'Transform voice notes into client-ready proposals with structured templates, branding, and CRM integration.',
      features: ['Voice-to-text transcription', 'Industry templates', 'Auto-branding', 'CRM integration'],
      primaryAction: {
        text: 'Open App',
        url: 'https://voice-to-proposal.io',
        external: true
      },
      secondaryAction: {
        text: 'Learn More',
        url: '/products/voice-to-proposal',
        external: false
      }
    },
    {
      name: 'Immo-Connect',
      tagline: 'A modern property discovery experience for emerging markets.',
      status: 'COMING_SOON',
      category: 'Coming Soon',
      icon: Building,
      description: 'Revolutionary property discovery platform designed specifically for emerging market dynamics and user behaviors.',
      features: ['Modern search interface', 'Mobile-first design', 'Local market integration', 'Advanced filtering'],
      primaryAction: {
        text: 'Get Notified',
        url: '/contact',
        external: false
      },
      secondaryAction: null
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            Products by Digni Digital LLC
          </h1>
          <p className="text-subheading max-w-4xl mx-auto">
            We design and ship SaaS that removes operational friction and compounds growth. 
            These are the tools we use in our consulting work — and make available to the world.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding !pt-8">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-premium'
                    : 'bg-white hover:bg-muted text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding !pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.name}
                className={`card-hover-lift relative overflow-hidden ${
                  product.status === 'COMING_SOON' ? 'opacity-75' : ''
                }`}
              >
                <div className="absolute top-4 left-4">
                  <div className={`${
                    product.status === 'NEW' ? 'badge-new' : 'badge-coming-soon'
                  }`}>
                    {product.status === 'NEW' ? 'NEW' : 'COMING SOON'}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      product.status === 'NEW' 
                        ? 'bg-gradient-accent' 
                        : 'bg-muted'
                    }`}>
                      <product.icon className={`w-8 h-8 ${
                        product.status === 'NEW' 
                          ? 'text-accent-foreground' 
                          : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-heading-3 mb-2">{product.name}</h3>
                      <div className="text-sm text-muted-foreground">{product.category}</div>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold mb-4 text-primary">{product.tagline}</p>
                  <p className="text-body-large mb-6">{product.description}</p>
                  
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    {product.primaryAction.external ? (
                      <a 
                        href={product.primaryAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 justify-center ${
                          product.status === 'COMING_SOON' ? 'btn-ghost cursor-not-allowed opacity-50' : 'btn-primary'
                        }`}
                        {...(product.status === 'COMING_SOON' && { 
                          onClick: (e: React.MouseEvent) => e.preventDefault() 
                        })}
                      >
                        {product.primaryAction.text} {product.status === 'NEW' && <ExternalLink className="w-4 h-4" />}
                      </a>
                    ) : (
                      <Link 
                        to={product.primaryAction.url}
                        className={`flex-1 justify-center ${
                          product.status === 'COMING_SOON' ? 'btn-ghost' : 'btn-primary'
                        }`}
                      >
                        {product.primaryAction.text}
                      </Link>
                    )}
                    
                    {product.secondaryAction && (
                      <Link 
                        to={product.secondaryAction.url}
                        className="btn-secondary flex-1 justify-center"
                      >
                        {product.secondaryAction.text}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Animated Elements for Active Products */}
                {product.status === 'NEW' && product.name === 'Voice-to-Proposal' && (
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                    <div className="flex items-end justify-center h-full space-x-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-accent rounded-t"
                          style={{
                            width: '4px',
                            height: `${20 + (i % 3) * 20}px`,
                            animation: `pulse 1.5s infinite ${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filter or check back soon for new releases.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-8">
            Need Custom Solutions?
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Our products solve common business challenges, but every business is unique. 
            Let's discuss how we can build custom infrastructure for your specific needs.
          </p>
          <Link 
            to="/book" 
            className="btn-accent shadow-glow hover:scale-105 transition-all duration-300"
          >
            Discuss Custom Solutions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;