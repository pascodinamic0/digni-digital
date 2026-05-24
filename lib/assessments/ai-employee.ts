import type { ServiceAssessmentConfig } from './types'

const bands = [
  {
    minPercent: 85,
    label: 'Excellent fit',
    description:
      'Your answers show real revenue at risk from slow follow-up, leaked leads, and systems that stop when you step away. An AI Employee System is built to close those gaps fast.',
  },
  {
    minPercent: 70,
    label: 'Strong fit',
    description:
      'You are losing measurable value in response time, follow-up, or owner-dependent growth. A short strategy call can map where 24/7 intake and automation recover it first.',
  },
  {
    minPercent: 50,
    label: 'Moderate fit',
    description:
      'Some gaps are clear; others may need a tighter baseline (tracking, channels, or volume) before full deployment. A focused audit can prioritize the highest-leak fixes.',
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
    id: 'lifetime-value',
    prompt: 'What is your average client or patient lifetime value?',
    choices: [
      { id: 'under-1k', label: 'Under $1,000', points: 5 },
      {
        id: '1k-3k',
        label: '$1,000 - $3,000',
        points: 7,
        insight: {
          title: 'Every slipped lead has a real dollar tag',
          why: 'At this lifetime value, one forgotten follow-up or after-hours miss can cost more than a month of automation—especially when referrals and rebooks stack over time.',
        },
      },
      {
        id: '3k-5k',
        label: '$3,000 - $5,000',
        points: 9,
        insight: {
          title: 'High enough that leakage hurts immediately',
          why: 'Teams at this LTV rarely afford “we’ll call them tomorrow.” Speed, referral asks, and consistent follow-up directly protect margin you already paid to acquire.',
        },
      },
      {
        id: '5k-plus',
        label: '$5,000+',
        points: 10,
        insight: {
          title: 'One lost client pays for the system many times over',
          why: 'When a single patient or client is worth five figures over their lifetime, a missed Instagram DM or slow callback isn’t a small mistake—it’s an expensive one.',
        },
      },
    ],
  },
  {
    id: 'after-hours-response',
    prompt:
      'When a hot prospect messages your Instagram or calls after 5:00 PM, what is the exact average response time?',
    choices: [
      { id: 'instant', label: 'Instantly (under 2 mins)', points: 3 },
      { id: 'within-hour', label: 'Within 1 hour', points: 6 },
      {
        id: 'next-morning',
        label: 'Next morning',
        points: 8,
        insight: {
          title: 'Hot intent cools overnight',
          why: 'Prospects who reach out after hours often book with whoever answers first. Waiting until morning routinely hands ready buyers to a faster competitor.',
        },
      },
      {
        id: 'missed',
        label: 'Sometimes they get missed entirely',
        points: 10,
        insight: {
          title: 'Invisible leads are invisible losses',
          why: 'If hot DMs and calls slip through, you are not just slow—you are funding ads and content for people who never get a real conversation.',
        },
      },
    ],
  },
  {
    id: 'leaked-leads',
    prompt:
      'Honestly evaluate your front desk or team. How many leads slipped through the cracks last month because someone forgot to follow up, text back, or ask for a referral?',
    choices: [
      { id: 'zero', label: 'Zero (Unlikely)', points: 2 },
      {
        id: '1-5',
        label: '1 to 5 leads',
        points: 7,
        insight: {
          title: 'Small leaks add up at scale',
          why: 'Even a handful of forgotten follow-ups per month compounds into thousands in lost LTV—especially when each lead was already warm.',
        },
      },
      {
        id: '5-15',
        label: '5 to 15 leads',
        points: 9,
        insight: {
          title: 'Your pipeline has a silent tax',
          why: 'Double-digit leaks mean revenue you already paid to generate is walking out because process lives in people’s memory, not a system.',
        },
      },
      {
        id: 'no-tracking',
        label: 'Honestly, we have no tracking system to know',
        points: 10,
        insight: {
          title: 'You cannot fix what you cannot see',
          why: 'Without tracking, leaks feel random—but they are constant. Automation creates a paper trail for every inquiry, follow-up, and referral ask.',
        },
      },
    ],
  },
  {
    id: 'content-distraction',
    prompt:
      'How much content creation and ad management is currently eating up your personal time or your team’s focus, distracting you from actually serving clients?',
    choices: [
      { id: 'automated', label: "None, it's automated", points: 2 },
      { id: 'few-hours', label: 'A few hours a week', points: 6 },
      {
        id: 'second-job',
        label: 'It is a constant, stressful second job',
        points: 10,
        insight: {
          title: 'You are paying twice for growth',
          why: 'When posting and ads pull owners away from delivery, you trade high-value client time for low-leverage busywork—while leads still need instant capture and follow-up.',
        },
      },
    ],
  },
  {
    id: 'fourteen-day-test',
    prompt:
      'If you stepped away from your business completely for 14 days with your phone turned off, would your lead generation, booking, and review collection keep growing, or would the revenue completely freeze?',
    choices: [
      { id: 'keep-growing', label: 'It would keep growing seamlessly', points: 2 },
      {
        id: 'freeze',
        label: 'It would completely freeze and decline',
        points: 10,
        insight: {
          title: 'Your business is you—and that is the risk',
          why: 'When revenue stops the moment you unplug, growth is not a system—it is heroics. AI intake, booking, and follow-up are how teams decouple income from owner availability.',
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
      'Five honest questions on client lifetime value, after-hours response, leaked leads, and what happens if you step away for two weeks—see your AI Employee fit score.',
    eyebrow: '2-minute fit check',
    introTitle: 'How exposed is your revenue when you are not in the room?',
    introSubtitle:
      'No signup required. Five direct questions—honest answers show where leads, bookings, and referrals leak when the team is busy or you are offline.',
    introBullets: [
      'Lifetime value, after-hours response, and leads that slipped last month',
      'Instant match score for AI Employee Systems',
      'Clear next step only when the gaps are real',
    ],
    startCta: 'Start assessment',
    progressLabel: 'Question',
    back: 'Back',
    next: 'Next',
    finish: 'See my results',
    answerAll: 'Select an answer to continue.',
    resultEyebrow: 'Assessment Complete',
    resultTitle: 'match for AI Employee Systems',
    matchLabel: 'Service match',
    bands: [...bands],
    nextStepsTitle: 'Recommended next step',
    primaryCta: 'Book 15-minute System Blueprint session',
    secondaryCta: 'View AI Employee Systems',
    backToService: 'Back to service page',
    retake: 'Retake assessment',
  },
  questions,
  customResult: {
    headline: 'Your inputs indicate your business has a High-Risk Leak Profile.',
    body: 'You are likely losing between $3,000 and $12,000 per month in uncaptured inbound interest and unautomated referrals.',
    ctaIntro:
      'Book a live 15-minute System Blueprint session below. We will visually map out your automated infrastructure.',
    primaryCta: 'Book 15-minute System Blueprint session',
    warning:
      'Do not book if you are comfortable losing leads to faster competitors.',
  },
}
