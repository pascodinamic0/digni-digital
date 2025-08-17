const Privacy = () => {
  return (
    <div className="pt-12">
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h1 className="text-heading-1 mb-8">Privacy Policy</h1>
          <div className="text-muted-foreground mb-8">
            Last updated: January 1, 2024
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-heading-3 mb-4">Information We Collect</h2>
              <p className="text-body-large">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
            </div>

            <div>
              <h2 className="text-heading-3 mb-4">How We Use Your Information</h2>
              <p className="text-body-large">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
            </div>

            <div>
              <h2 className="text-heading-3 mb-4">Information Sharing</h2>
              <p className="text-body-large">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-heading-3 mb-4">Contact Us</h2>
              <p className="text-body-large">
                If you have any questions about this Privacy Policy, please contact us at privacy@dignidigital.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;