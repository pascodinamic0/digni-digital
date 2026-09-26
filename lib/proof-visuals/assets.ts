/** Static paths for proof editorial assets under public/images/proof/ */
const BASE = '/images/proof'

export const PROOF_ASSETS = {
  home: {
    exposure: `${BASE}/home/exposure-three-leaks.png`,
    coverageGrowth: `${BASE}/home/coverage-growth.png`,
    coverageTalent: `${BASE}/home/coverage-talent.png`,
    coverageOperations: `${BASE}/home/coverage-operations.png`,
    proof: `${BASE}/home/proof-implementations.png`,
    process: `${BASE}/home/process-installer.png`,
  },
  aiReceptionist: {
    problem: `${BASE}/ai-receptionist/problem-unanswered.png`,
    proof: `${BASE}/ai-receptionist/proof-case-study.png`,
    mobileApp: `${BASE}/ai-receptionist/mobile-app.png`,
    inboundFlow: `${BASE}/ai-receptionist/inbound-flow.png`,
  },
  futureReady: {
    problem: `${BASE}/future-ready/skills-gap.png`,
    outcomes: `${BASE}/future-ready/outcomes-portfolio.png`,
    caseStudy: `${BASE}/future-ready/case-study-school.png`,
    skills: `${BASE}/future-ready/career-paths.png`,
  },
  agentic: {
    problem: `${BASE}/agentic/copy-paste-workflow.png`,
    apps: `${BASE}/agentic/product-suite.png`,
    caseStudy: `${BASE}/agentic/case-study-systems.png`,
    process: `${BASE}/agentic/agentic-flow.png`,
  },
  about: {
    story: `${BASE}/about/our-story.png`,
    approach: `${BASE}/about/our-approach.png`,
    differentiator: `${BASE}/about/install-systems.png`,
  },
  solutions: {
    leadGen: `${BASE}/solutions/lead-generation.png`,
    opsEfficiency: `${BASE}/solutions/ops-efficiency.png`,
    customerExperience: `${BASE}/solutions/customer-experience.png`,
    results: `${BASE}/solutions/client-results.png`,
    beforeAfter: `${BASE}/solutions/before-after.png`,
  },
  products: {
    proposalAgent: `${BASE}/products/proposal-agent.png`,
    socialProof: `${BASE}/products/social-proof.png`,
    comingSoon: `${BASE}/products/coming-soon.png`,
  },
  digni: {
    diagnostic: `${BASE}/digni/diagnostic-chat.png`,
    assessment: `${BASE}/digni/assessment-result.png`,
    booking: `${BASE}/digni/booking-calendar.png`,
  },
} as const
