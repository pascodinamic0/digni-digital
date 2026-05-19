import type { ServiceAssessmentConfig } from './types'

const bands = [
  {
    minPercent: 85,
    label: 'Excellent fit',
    description:
      'Your lead flow, channels, and growth goals align strongly with an AI Employee System. You are likely to see fast ROI from 24/7 intake and automated booking.',
  },
  {
    minPercent: 70,
    label: 'Strong fit',
    description:
      'Most of your answers point to high leverage from AI reception and follow-up. A short strategy call can confirm scope and integrations.',
  },
  {
    minPercent: 50,
    label: 'Moderate fit',
    description:
      'You may benefit, but some gaps (volume, channels, or process) suggest starting with a focused pilot or audit before full deployment.',
  },
  {
    minPercent: 0,
    label: 'Explore alternatives',
    description:
      'Based on your answers, another Digni offer—or a lighter automation step—may fit better right now. Book a call and we will point you the right way.',
  },
] as const

const questions = [
  {
    id: 'lead-volume',
    prompt: 'How many new inbound leads or inquiries do you get per week?',
    choices: [
      { id: 'low', label: 'Fewer than 10', points: 4 },
      { id: 'mid', label: '10–50', points: 7 },
      { id: 'high', label: '50–200', points: 9 },
      { id: 'very-high', label: '200+', points: 10 },
    ],
  },
  {
    id: 'response-time',
    prompt: 'What is your typical first response time to a new lead?',
    choices: [
      { id: 'instant', label: 'Under 5 minutes', points: 6 },
      { id: 'same-day', label: 'Same business day', points: 7 },
      { id: 'next-day', label: 'Next business day or later', points: 9 },
      { id: 'inconsistent', label: 'Often missed or inconsistent', points: 10 },
    ],
  },
  {
    id: 'booking',
    prompt: 'How do you book sales calls or appointments today?',
    choices: [
      { id: 'manual', label: 'Mostly manual back-and-forth', points: 10 },
      { id: 'mixed', label: 'Mix of manual and online booking', points: 8 },
      { id: 'online', label: 'Online scheduler, little follow-up', points: 7 },
      { id: 'none', label: 'We rarely book structured calls', points: 3 },
    ],
  },
  {
    id: 'channels',
    prompt: 'Which channels matter most for your business?',
    choices: [
      { id: 'phone-wa', label: 'Phone + WhatsApp / SMS', points: 10 },
      { id: 'web-chat', label: 'Website chat + email', points: 8 },
      { id: 'social', label: 'Social DMs (Instagram, Facebook, etc.)', points: 9 },
      { id: 'email-only', label: 'Email only', points: 5 },
    ],
  },
  {
    id: 'team-load',
    prompt: 'Who handles inbound leads today?',
    choices: [
      { id: 'owner', label: 'Owner or a small team wearing many hats', points: 10 },
      { id: 'reception', label: 'Dedicated reception / front desk', points: 8 },
      { id: 'sales', label: 'Sales team with some gaps after hours', points: 9 },
      { id: 'outsourced', label: 'Fully outsourced call center', points: 5 },
    ],
  },
  {
    id: 'pain',
    prompt: 'What is your biggest growth bottleneck right now?',
    choices: [
      { id: 'missed', label: 'Missed calls and slow replies', points: 10 },
      { id: 'qualify', label: 'Too many unqualified conversations', points: 9 },
      { id: 'follow-up', label: 'Leads go cold after first contact', points: 10 },
      { id: 'other', label: 'Something else is the main blocker', points: 4 },
    ],
  },
  {
    id: 'lead-value',
    prompt: 'What is a typical lead worth when they become a paying customer?',
    choices: [
      {
        id: 'unknown',
        label: 'Not sure yet',
        points: 5,
        insight: {
          title: 'Clarify lead value to size ROI',
          why: 'Once you know what a converted lead is worth, you can compare the cost of missed inquiries against an AI Employee System—most teams find the math obvious above $1,000 per customer.',
        },
      },
      {
        id: 'low',
        label: 'Under $500',
        points: 4,
        insight: {
          title: 'Volume matters more at lower ticket sizes',
          why: 'With smaller deal sizes, AI Employee Systems pay off when you have enough inbound volume to convert consistently—not from a single whale lead.',
        },
      },
      {
        id: 'mid',
        label: '$500 – $2,500',
        points: 7,
        insight: {
          title: 'Solid unit economics for automation',
          why: 'Leads in this range often justify 24/7 intake: one extra booked call per week can cover the system when follow-up is automatic.',
        },
      },
      {
        id: 'high',
        label: '$2,500 – $10,000',
        points: 9,
        insight: {
          title: 'Every qualified lead is worth protecting',
          why: 'At this value, slow replies and after-hours gaps routinely cost thousands. AI qualification and booking recover revenue you are already paying to acquire.',
        },
      },
      {
        id: 'very-high',
        label: '$10,000+',
        points: 10,
        insight: {
          title: 'High-value leads need instant capture',
          why: 'When one closed deal is worth five figures, a single missed call or slow reply can cost more than months of AI Employee coverage. Speed and follow-up directly protect revenue.',
        },
      },
    ],
  },
]

export const aiEmployeeAssessmentEn: ServiceAssessmentConfig = {
  serviceId: 'ai-employee',
  serviceName: 'AI Employee Systems',
  servicePath: '/ai-receptionist',
  accent: 'accent',
  copy: {
    metaTitle: 'AI Employee Fit Assessment | Digni Digital',
    metaDescription:
      'Answer 7 quick questions to see how well AI Employee Systems match your lead flow, value per lead, and growth goals.',
    eyebrow: '2-minute fit check',
    introTitle: 'Is an AI Employee System right for you?',
    introSubtitle:
      'No signup required. Honest answers help us estimate fit—not to sell you something that will not work.',
    introBullets: [
      '7 questions about leads, lead value, response time, and channels',
      'Instant match score for AI Employee Systems',
      'Clear next step only if the fit is strong',
    ],
    startCta: 'Start assessment',
    progressLabel: 'Question',
    back: 'Back',
    next: 'Next',
    finish: 'See my match score',
    answerAll: 'Select an answer to continue.',
    resultEyebrow: 'Your result',
    resultTitle: 'match for AI Employee Systems',
    matchLabel: 'Service match',
    bands: [...bands],
    nextStepsTitle: 'Recommended next step',
    primaryCta: 'Book AI Employee strategy call',
    secondaryCta: 'View AI Employee Systems',
    backToService: 'Back to service page',
    retake: 'Retake assessment',
  },
  questions,
}
