const Terms = () => {
  return (
    <div className="pt-12">
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <h1 className="text-heading-1 mb-8">Terms of Service</h1>
          <div className="text-muted-foreground mb-8">
            Last updated: January 1, 2024
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-heading-3 mb-4">Acceptance of Terms</h2>
              <p className="text-body-large">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-heading-3 mb-4">Use of Services</h2>
              <p className="text-body-large">
                You may use our services for lawful purposes only. You agree not to use the services 
                in any way that could damage, disable, or impair the services.
              </p>
            </div>

            <div>
              <h2 className="text-heading-3 mb-4">Limitation of Liability</h2>
              <p className="text-body-large">
                In no event shall Digni Digital LLC be liable for any indirect, incidental, special, 
                or consequential damages arising out of or in connection with your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-heading-3 mb-4">Contact Information</h2>
              <p className="text-body-large">
                If you have any questions about these Terms of Service, please contact us at legal@dignidigital.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;