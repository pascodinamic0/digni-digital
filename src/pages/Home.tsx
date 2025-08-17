import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import ThreeStepValue from '@/components/sections/ThreeStepValue';
import StrategicServices from '@/components/sections/StrategicServices';
import PartnershipApproach from '@/components/sections/PartnershipApproach';
import SocialProof from '@/components/sections/SocialProof';
import MiniCaseStories from '@/components/sections/MiniCaseStories';
import InnovationLab from '@/components/sections/InnovationLab';
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
        <h1>Digni Digital LLC - Strategic Business Transformation & Growth Infrastructure</h1>
        <meta name="description" content="Strategic partnership that transforms businesses through comprehensive growth systems, digital transformation, and ongoing optimization. High-end consulting meets hands-on implementation." />
      </div>

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