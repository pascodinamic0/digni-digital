import { useEffect } from 'react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import Hero from '@/components/sections/Hero';
import ThreeStepValue from '@/components/sections/ThreeStepValue';
import StrategicServices from '@/components/sections/StrategicServices';
import PartnershipApproach from '@/components/sections/PartnershipApproach';
import SocialProof from '@/components/sections/SocialProof';
import MiniCaseStories from '@/components/sections/MiniCaseStories';
import InnovationLab from '@/components/sections/InnovationLab';
import FullWidthCTA from '@/components/sections/FullWidthCTA';

const Home = () => {
  const { trackPageView } = useAnalytics();
  useEffect(() => {
    // Track page view
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

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal, .fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [trackPageView]);

  return (
    <>
      <SEO 
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digni Digital LLC",
          "url": "https://dignidigital.com",
          "description": "Strategic partnership that transforms businesses through comprehensive growth systems, digital transformation, and ongoing optimization.",
          "foundingDate": "2017",
          "specialty": ["Digital Transformation", "Business Development", "Growth Infrastructure", "Strategic Consulting"],
          "areaServed": "Worldwide",
          "knowsAbout": ["Digital Transformation", "Growth Infrastructure", "Business Automation", "Strategic Consulting", "Client Acquisition"]
        }}
      />

      <Hero />
      <ThreeStepValue />
      <StrategicServices />
      <PartnershipApproach />
      <SocialProof />
      <MiniCaseStories />
      <InnovationLab />
      <FullWidthCTA />
    </>
  );
};

export default Home;