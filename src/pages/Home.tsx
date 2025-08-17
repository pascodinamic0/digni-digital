import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import ThreeStepValue from '@/components/sections/ThreeStepValue';
import ProductSpotlight from '@/components/sections/ProductSpotlight';
import SocialProof from '@/components/sections/SocialProof';
import MiniCaseStories from '@/components/sections/MiniCaseStories';
import FullWidthCTA from '@/components/sections/FullWidthCTA';

const Home = () => {
  useEffect(() => {
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
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Digni Digital LLC - Growth Infrastructure That Turns Chaos Into Clients</h1>
        <meta name="description" content="Transform how you generate, engage, and convert clients with Digni Digital LLC's premium growth infrastructure and innovative SaaS solutions." />
      </div>

      <Hero />
      <ThreeStepValue />
      <ProductSpotlight />
      <SocialProof />
      <MiniCaseStories />
      <FullWidthCTA />
    </>
  );
};

export default Home;