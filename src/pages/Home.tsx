import { useEffect } from 'react';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { useAnalytics } from '@/hooks/useAnalytics';
import Hero from '@/components/sections/Hero';
import ProblemsSection from '@/components/sections/ProblemsSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import ProductsPreview from '@/components/sections/ProductsPreview';
import CaseStudies from '@/components/sections/CaseStudies';
import FullWidthCTA from '@/components/sections/FullWidthCTA';
import MetricsSection from '@/components/sections/MetricsSection';

const Home = () => {
  const { trackPageView } = useAnalytics();
  
  useEffect(() => {
    trackPageView('home', 'Digni Digital LLC - Strategic Business Transformation');
    
    // Set up intersection observer for scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.scroll-reveal, .fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [trackPageView]);

  return (
    <>
      <StructuredData type="Organization" />
      <SEO 
        title="We Build Growth Infrastructures That Turn Chaos Into Clients"
        description="Strategic partnership that transforms chaos into predictable growth. We build, implement, and scale the systems that drive sustainable revenue for high-growth companies."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digni Digital LLC",
          "url": "https://digni-digital.com",
          "description": "Strategic partnership that transforms businesses through comprehensive growth systems, digital transformation, and ongoing optimization.",
          "foundingDate": "2017",
          "specialty": ["Digital Transformation", "Business Development", "Growth Infrastructure", "Strategic Consulting"],
          "areaServed": "Worldwide",
          "knowsAbout": ["Digital Transformation", "Growth Infrastructure", "Business Automation", "Strategic Consulting", "Client Acquisition"],
          "sameAs": [
            "https://www.linkedin.com/company/digni-digital",
            "https://twitter.com/dignidigital"
          ]
        }}
      />

      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <ProductsPreview />
      <MetricsSection />
      <CaseStudies />
      <FullWidthCTA />
    </>
  );
};

export default Home;