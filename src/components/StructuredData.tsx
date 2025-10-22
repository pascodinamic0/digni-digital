import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  type?: 'Organization' | 'Product' | 'Article' | 'FAQPage';
  data?: any;
}

const StructuredData = ({ type = 'Organization', data }: OrganizationSchemaProps) => {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Digni Digital LLC',
          description: 'Premium digital transformation and business automation solutions',
          url: 'https://digni-digital.com',
          logo: 'https://digni-digital.com/og-image.jpg',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@dignidigital.com',
            contactType: 'Customer Service',
            availableLanguage: ['English']
          },
          sameAs: [
            'https://www.linkedin.com/company/digni-digital',
            'https://twitter.com/dignidigital'
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US'
          }
        };
      
      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data?.name || 'ProposalAgent',
          description: data?.description || 'Transform voice into professional proposals',
          brand: {
            '@type': 'Brand',
            name: 'Digni Digital LLC'
          },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD'
          }
        };
      
      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title,
          description: data?.description,
          author: {
            '@type': 'Organization',
            name: 'Digni Digital LLC'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Digni Digital LLC',
            logo: {
              '@type': 'ImageObject',
              url: 'https://digni-digital.com/og-image.jpg'
            }
          },
          datePublished: data?.date || new Date().toISOString()
        };
      
      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.faqs?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || []
        };
      
      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;