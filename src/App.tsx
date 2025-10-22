import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ExitIntentModal from './components/ExitIntentModal';
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./components/ThemeProvider";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Products = lazy(() => import("./pages/Products"));
const VoiceToProposal = lazy(() => import("./pages/VoiceToProposal"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Book = lazy(() => import("./pages/Book"));
const Blog = lazy(() => import("./pages/Blog"));
const FutureOfBusinessInAfrica = lazy(() => import("./pages/blog/future-of-business-in-africa"));
const WhyCRMFailing = lazy(() => import("./pages/blog/why-crm-failing-how-to-fix"));
const ProposalAgentCaseStudy = lazy(() => import("./pages/blog/proposalagent-case-study-faster-proposals"));
const BuildingSaaSForEmergingMarkets = lazy(() => import("./pages/blog/building-saas-emerging-markets-lessons"));
const LeadGenerationSystem = lazy(() => import("./pages/blog/lead-generation-system-that-works"));
const WhyAfricanStartupsFail = lazy(() => import("./pages/blog/why-african-startups-fail-how-to-avoid"));
const AutomationForNonTechnicalFounders = lazy(() => import("./pages/blog/automation-for-non-technical-founders"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="digni-ui-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter 
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
              }}
            >
          <Layout>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading..." />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/voice-to-proposal" element={<VoiceToProposal />} />
                <Route path="/products/proposalagent" element={<VoiceToProposal />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/book" element={<Book />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/future-of-business-in-africa" element={<FutureOfBusinessInAfrica />} />
                <Route path="/blog/why-crm-failing-how-to-fix" element={<WhyCRMFailing />} />
                <Route path="/blog/proposalagent-case-study-faster-proposals" element={<ProposalAgentCaseStudy />} />
                <Route path="/blog/building-saas-emerging-markets-lessons" element={<BuildingSaaSForEmergingMarkets />} />
                <Route path="/blog/lead-generation-system-that-works" element={<LeadGenerationSystem />} />
                <Route path="/blog/why-african-startups-fail-how-to-avoid" element={<WhyAfricanStartupsFail />} />
                <Route path="/blog/automation-for-non-technical-founders" element={<AutomationForNonTechnicalFounders />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
