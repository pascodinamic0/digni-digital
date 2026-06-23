"use client";

import dynamic from "next/dynamic";
import { use } from "react";
import { useLanguage } from "@/app/context/LocaleContext";
import { translations } from "@/app/config/translations";
import {
  AiEmployeeHeroSection,
  ProblemStatsSection,
  TimeToValueSection,
  ProofSection,
  QualificationSection,
  BonusStackSection,
  MobileAppBannerSection,
  PricingSection,
} from "@/app/components/ai-employee";

const AIReceptionistPainDreamDemos = dynamic(
  () =>
    import("./ai-receptionist-product-demos").then(
      (m) => m.AIReceptionistPainDreamDemos,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[520px] bg-surface/40 animate-pulse"
        aria-hidden
      />
    ),
  },
);

const AIReceptionistHowItWorksDemos = dynamic(
  () =>
    import("./ai-receptionist-product-demos").then(
      (m) => m.AIReceptionistHowItWorksDemos,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[480px] bg-surface/40 animate-pulse"
        aria-hidden
      />
    ),
  },
);
import { getServicePageJsonLd, jsonLdScriptProps } from "@/lib/agent-readiness";

type AIReceptionistClientProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  showTaskQueueDemo: boolean;
};

import AiCommandCenterTabs from "@/app/components/ai-employee/AiCommandCenterTabs";
import WhyDigniSection from "@/app/components/ai-employee/WhyDigniSection";
import AiEmployeeFAQ from "@/app/components/ai-employee/AiEmployeeFAQ";

import ClientLogos from "@/app/components/ClientLogos";

import GuaranteeBanner from "@/app/components/ai-employee/GuaranteeBanner";

export function AIReceptionistClient({
  params,
  searchParams,
  showTaskQueueDemo,
}: AIReceptionistClientProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}));
  const language = useLanguage();
  const ctaT = translations[language].cta;
  const pageJsonLd = getServicePageJsonLd("ai-employee-systems", locale);

  return (
    <main className="marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      <AiEmployeeHeroSection />

      {/* Guarantee Banner immediately after Hero */}
      <GuaranteeBanner />

      {/* Trust & Proof */}
      <div className="border-b border-[var(--software-border)]">
        <ClientLogos
          title="Trusted by Growing Businesses Across Multiple Industries"
          subtitle="From healthcare and legal to home services and premium local businesses, Digni helps organizations capture more leads, convert faster, and scale with confidence."
        />
      </div>

      {/* Problem */}
      <ProblemStatsSection />

      {/* Proof */}
      <ProofSection />

      {/* Process — product demos */}
      <AiCommandCenterTabs />
      <AIReceptionistHowItWorksDemos showTaskQueueDemo={showTaskQueueDemo} />

      {/* Contrast — leaky bucket vs loop */}
      <AIReceptionistPainDreamDemos />

      {/* Fit + offer */}
      <QualificationSection />
      <BonusStackSection />
      <MobileAppBannerSection />
      <TimeToValueSection />
      <WhyDigniSection />
      <AiEmployeeFAQ />
      <PricingSection
        checkoutRedirectingLabel={ctaT.checkoutRedirecting}
        continueToSecureCheckoutLabel={ctaT.continueToSecureCheckout}
      />
    </main>
  );
}
