import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "Digni Digital LLC - Strategic Business Transformation & Growth Infrastructure",
  description = "Strategic partnership that transforms businesses through comprehensive growth systems, digital transformation, and ongoing optimization. High-end consulting meets hands-on implementation.",
  keywords = "digital transformation, business automation, strategic consulting, growth infrastructure, client acquisition, business development",
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes('Digni Digital') ? title : `${title} | Digni Digital LLC`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://dignidigital.com');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`https://dignidigital.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Digni Digital LLC" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://dignidigital.com${ogImage}`} />
      
      {/* Additional Performance & Security */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;