import type { ServiceAssessmentConfig } from './types'

const bands = [
  {
    minPercent: 85,
    label: 'Excellent fit',
    description:
      'Your problem, stack needs, and ownership goals align with custom agentic software. You are a strong candidate for an MVP or full build.',
  },
  {
    minPercent: 70,
    label: 'Strong fit',
    description:
      'Agentic Softwares likely beat off-the-shelf for your case. A project consultation can define scope, timeline, and AI workflow design.',
  },
  {
    minPercent: 50,
    label: 'Moderate fit',
    description:
      'Custom build may help, but scope or readiness gaps suggest starting smaller—a workflow audit or phased MVP.',
  },
  {
    minPercent: 0,
    label: 'Explore alternatives',
    description:
      'Your answers point to SaaS, AI Employee Systems, or a lighter integration first. We will not push a full custom build if it is not the right move.',
  },
] as const

const questions = [
  {
    id: 'problem',
    prompt: 'What best describes the problem you need to solve?',
    choices: [
      { id: 'niche', label: 'Niche workflow no standard tool covers', points: 10 },
      { id: 'integrate', label: 'Connect multiple tools with smart automation', points: 9 },
      { id: 'ai-product', label: 'AI-native product or internal copilot', points: 10 },
      { id: 'generic', label: 'Generic CRM or website only', points: 3 },
    ],
  },
  {
    id: 'shelfware',
    prompt: 'Have you tried off-the-shelf software for this?',
    choices: [
      { id: 'failed', label: 'Yes—it did not fit our process', points: 10 },
      { id: 'partial', label: 'Yes—using workarounds everywhere', points: 9 },
      { id: 'not-yet', label: 'Not yet, but doubt generic tools', points: 8 },
      { id: 'happy', label: 'Current tools work fine', points: 2 },
    ],
  },
  {
    id: 'automation',
    prompt: 'How important is AI or autonomous agents in the solution?',
    choices: [
      { id: 'core', label: 'Core to the product—we need agents that act', points: 10 },
      { id: 'important', label: 'Important for efficiency, not cosmetic', points: 9 },
      { id: 'nice', label: 'Nice to have later', points: 5 },
      { id: 'none', label: 'Not needed', points: 2 },
    ],
  },
  {
    id: 'timeline',
    prompt: 'What timeline do you have in mind?',
    choices: [
      { id: 'mvp', label: 'MVP in weeks (7–30 days)', points: 9 },
      { id: 'quarter', label: 'Full platform in 1–3 months', points: 10 },
      { id: 'long', label: '6+ months, enterprise scope', points: 8 },
      { id: 'flex', label: 'No deadline / unclear', points: 4 },
    ],
  },
  {
    id: 'team',
    prompt: 'Do you have technical people in-house?',
    choices: [
      { id: 'none', label: 'No—we need a partner to own build + deploy', points: 10 },
      { id: 'some', label: 'Some dev capacity, need acceleration', points: 9 },
      { id: 'strong', label: 'Strong team, need AI/agent expertise', points: 8 },
      { id: 'full', label: 'We only need advice, not build', points: 4 },
    ],
  },
  {
    id: 'ownership',
    prompt: 'What matters most after launch?',
    choices: [
      { id: 'own', label: 'Own the code and data, no vendor lock-in', points: 10 },
      { id: 'scale', label: 'Scale workflows without per-seat limits', points: 9 },
      { id: 'maintain', label: 'Hands-off maintenance by partner', points: 8 },
      { id: 'rent', label: 'Lowest monthly SaaS fee', points: 3 },
    ],
  },
  {
    id: 'problem-value',
    prompt: 'What is the estimated annual value if this problem were fully solved?',
    choices: [
      { id: 'unknown', label: 'Not estimated yet', points: 5 },
      { id: 'low', label: 'Under $10,000 / year', points: 4 },
      { id: 'mid', label: '$10,000 – $50,000 / year', points: 7 },
      { id: 'high', label: '$50,000 – $250,000 / year', points: 9 },
      {
        id: 'very-high',
        label: '$250,000+ / year',
        points: 10,
        insight: {
          title: 'High-stakes problems justify custom software',
          why: 'When the workflow is worth six figures annually, off-the-shelf tools and manual workarounds become expensive. Agentic software pays back by owning the process end to end.',
        },
      },
    ],
  },
]

export const agenticSoftwaresAssessmentEn: ServiceAssessmentConfig = {
  serviceId: 'agentic-softwares',
  serviceName: 'Agentic Softwares',
  servicePath: '/agentic-softwares',
  accent: 'info',
  copy: {
    metaTitle: 'Agentic Softwares Fit Assessment | Digni Digital',
    metaDescription:
      'Seven questions to see if custom agentic software fits your workflow, problem value, and AI needs.',
    eyebrow: '2-minute fit check',
    introTitle: 'Is Agentic Softwares the right build for you?',
    introSubtitle:
      'For teams that need software that runs their process—not the other way around. Get a match score before scoping a project.',
    introBullets: [
      '7 questions on problem fit, business value, AI needs, and timeline',
      'Match score for custom agentic development',
      'Clear call booking only when the fit is real',
    ],
    startCta: 'Start assessment',
    progressLabel: 'Question',
    back: 'Back',
    next: 'Next',
    finish: 'See my match score',
    answerAll: 'Select an answer to continue.',
    resultEyebrow: 'Your result',
    resultTitle: 'match for Agentic Softwares',
    matchLabel: 'Project match',
    bands: [...bands],
    nextStepsTitle: 'Recommended next step',
    primaryCta: 'Book project consultation',
    secondaryCta: 'View Agentic Softwares',
    backToService: 'Back to service page',
    retake: 'Retake assessment',
  },
  questions,
}
