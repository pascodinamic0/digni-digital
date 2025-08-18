import { useCallback } from 'react';

interface AnalyticsEvent {
  event: string;
  page?: string;
  section?: string;
  element?: string;
  value?: number;
  metadata?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((eventData: AnalyticsEvent) => {
    // Console logging for development (remove in production with real analytics)
    console.log('Analytics Event:', eventData);
    
    // Future: Integrate with Google Analytics, Mixpanel, etc.
    // Example:
    // gtag('event', eventData.event, {
    //   page_title: eventData.page,
    //   event_category: eventData.section,
    //   event_label: eventData.element,
    //   value: eventData.value,
    //   custom_parameters: eventData.metadata
    // });
  }, []);

  const trackPageView = useCallback((page: string, title?: string) => {
    trackEvent({
      event: 'page_view',
      page,
      metadata: { title }
    });
  }, [trackEvent]);

  const trackClick = useCallback((element: string, section?: string, metadata?: Record<string, any>) => {
    trackEvent({
      event: 'click',
      element,
      section,
      metadata
    });
  }, [trackEvent]);

  const trackFormSubmission = useCallback((form: string, success: boolean = true) => {
    trackEvent({
      event: success ? 'form_submit_success' : 'form_submit_error',
      element: form,
      metadata: { success }
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((cta: string, location: string) => {
    trackEvent({
      event: 'cta_click',
      element: cta,
      section: location,
      metadata: { conversion_potential: 'high' }
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackClick,
    trackFormSubmission,
    trackCTAClick
  };
};

export default useAnalytics;