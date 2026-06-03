import type { ServiceAssessmentConfig } from './types'

const bands = [
  {
    minPercent: 85,
    label: 'Critical AGE fit',
    description:
      'Your answers show serious revenue risk from slow response, poor visibility, manual admin, and inconsistent follow-up. AGE is built to close those gaps before ready buyers drift away.',
  },
  {
    minPercent: 68,
    label: 'High-risk leak profile',
    description:
      'Multiple parts of your pipeline depend on memory, staff timing, or manual effort. A System Blueprint session can map where instant intake, follow-up, and automation recover value first.',
  },
  {
    minPercent: 45,
    label: 'Moderate automation gap',
    description:
      'You have some protection in place, but there are still visible gaps in speed, tracking, accountability, or repetitive admin. A focused audit can prioritize the highest-leak fixes.',
  },
  {
    minPercent: 0,
    label: 'Lower immediate fit',
    description:
      'Your answers suggest your current systems already cover many AGE use cases. If you still want more leverage, we can point you toward a lighter automation step or another Digni offer.',
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
      'When someone shows real interest (call, DM, or form) but doesn’t book right away, what usually happens in the next 7 days?',
    choices: [
      {
        id: 'sequence',
        label: 'Every lead gets a clear follow-up sequence until they book or opt out',
        points: 2,
      },
      {
        id: '1-5',
        label: 'We follow up most of the time, but a few still slip through',
        points: 7,
        insight: {
          title: 'A few gaps still cost real LTV',
          why: 'Even warm leads you already paid to acquire need a defined next step—not “we’ll get to it when things calm down.”',
        },
      },
      {
        id: '5-15',
        label: 'Follow-up is hit-or-miss—it depends who’s working that day',
        points: 9,
        insight: {
          title: 'Revenue shouldn’t depend on who’s on shift',
          why: 'When follow-up lives in memory instead of a system, busy days become silent leak days—and ready buyers go cold.',
        },
      },
      {
        id: 'no-tracking',
        label: 'We don’t have a consistent way to track who still needs follow-up',
        points: 10,
        insight: {
          title: 'You can’t recover leads you can’t see',
          why: 'Without a trail for every inquiry, interested people disappear before anyone asks for the booking or referral. Automation creates that paper trail.',
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
  {
    id: 'pipeline-visibility',
    prompt:
      "If I asked you right now for the exact number of leads who showed interest last month but didn't buy, do you have a system that can show me their names and phone numbers in under 60 seconds?",
    choices: [
      { id: 'fully-mapped', label: 'Yes, our pipeline is fully mapped', points: 2 },
      {
        id: 'scattered',
        label: 'No, they are scattered across spreadsheets, DMs, and paper notes',
        points: 8,
        insight: {
          title: 'Warm leads are living in too many places',
          why: 'When interested prospects are scattered across inboxes, sheets, and notes, follow-up becomes luck. AGE centralizes the trail so every warm lead can be recovered quickly.',
        },
      },
      {
        id: 'not-tracked',
        label: "Honestly, we don't track them at all.",
        points: 10,
        insight: {
          title: 'Unknown pipeline means unknown revenue loss',
          why: 'If you cannot list last month’s non-buyers, you cannot follow up with them. AGE turns invisible interest into a tracked pipeline with names, numbers, and next steps.',
        },
      },
    ],
  },
  {
    id: 'staff-accountability',
    prompt:
      'When your staff or front desk handles an incoming inquiry, how do you verify that they used the exact psychology and follow-up sequence required to close the deal?',
    choices: [
      { id: 'review-regularly', label: 'I review recorded calls and texts regularly', points: 3 },
      {
        id: 'trusting',
        label: 'I just trust they are doing their best',
        points: 8,
        insight: {
          title: 'Good intentions are not a sales system',
          why: 'Trust matters, but it does not prove the right words, timing, and next steps happened. AGE gives every inquiry a consistent follow-up sequence instead of relying on memory.',
        },
      },
      {
        id: 'no-monitoring',
        label: 'I have no physical way to monitor every interaction.',
        points: 10,
        insight: {
          title: 'Unmonitored interactions create silent leakage',
          why: 'When you cannot see every call, DM, and text, you cannot know where bookings are lost. AGE creates visibility and consistency across the front line.',
        },
      },
    ],
  },
  {
    id: 'manual-task-hours',
    prompt:
      'How many hours per week do you or your key staff spend doing manual, repetitive tasks like sending appointment reminders, asking for reviews, or typing out basic business info?',
    choices: [
      { id: 'mostly-automated', label: '0–2 hours (Mostly automated)', points: 2 },
      {
        id: 'three-to-ten',
        label: '3–10 hours',
        points: 7,
        insight: {
          title: 'Admin work is quietly taxing growth',
          why: 'A few hours every week becomes a recurring operational drag. AGE can take over reminders, review asks, FAQs, and other repetitive touches so staff stay focused on revenue work.',
        },
      },
      {
        id: 'ten-plus',
        label: '10+ hours (It feels like a full-time administrative job).',
        points: 10,
        insight: {
          title: 'Manual admin has become its own job',
          why: 'When repetitive tasks consume double-digit hours, your team is paying a hidden salary in attention. AGE is designed to automate the routine work that keeps pulling people away.',
        },
      },
    ],
  },
  {
    id: 'organic-dm-follow-up',
    prompt:
      'When you put effort into creating organic content or running promotions, what percentage of the people who comment or view actually get a direct message offering them an easy way to book?',
    choices: [
      { id: 'all-automatic', label: '100% (We instantly DM everyone automatically)', points: 2 },
      {
        id: 'maybe-half',
        label: 'Maybe half, if we catch the notification in time',
        points: 7,
        insight: {
          title: 'Marketing attention is not being fully converted',
          why: 'If only some commenters get a booking path, organic effort leaks at the exact moment interest appears. AGE can trigger direct follow-up while attention is still warm.',
        },
      },
      {
        id: 'few-addressed',
        label: 'Very few, most comments are left unaddressed.',
        points: 10,
        insight: {
          title: 'Engagement is being left without a next step',
          why: 'Comments, views, and reactions are buying signals. When most receive no direct path to book, your content creates interest that never enters the pipeline.',
        },
      },
    ],
  },
  {
    id: 'competitor-speed',
    prompt:
      'If a hot prospect messages both you and your closest competitor at the exact same time, who is realistically going to deliver a helpful response and secure the booking first?',
    choices: [
      { id: 'we-will', label: 'We will, because we have instant systems', points: 2 },
      {
        id: 'competitor',
        label: 'The competitor will likely beat us to it',
        points: 10,
        insight: {
          title: 'Speed-to-lead is handing bookings away',
          why: 'Ready buyers often choose the first helpful response. If competitors answer faster, AGE can protect the booking window with instant, useful replies.',
        },
      },
      {
        id: 'gamble',
        label: 'It is a total gamble based on how busy we are.',
        points: 8,
        insight: {
          title: 'Response speed should not depend on the day',
          why: 'If winning the lead depends on whether someone is free, revenue is exposed. AGE gives hot prospects a consistent response even when the team is busy.',
        },
      },
    ],
  },
]

export const aiEmployeeAssessmentEn: ServiceAssessmentConfig = {
  serviceId: 'ai-employee',
  serviceName: 'AGE Systems',
  servicePath: '/ai-receptionist',
  accent: 'accent',
  copy: {
    metaTitle: 'AGE Fit Assessment | Digni Digital',
    metaDescription:
      'Ten honest questions on pipeline visibility, response speed, staff accountability, manual tasks, and lead leakage—see your AGE fit score.',
    eyebrow: '2-minute fit check',
    introTitle: 'How exposed is your revenue when you are not in the room?',
    introSubtitle:
      'No signup required. Ten direct questions show where leads, bookings, reviews, and follow-up leak when the team is busy or you are offline.',
    introBullets: [
      'Pipeline visibility, staff accountability, response speed, and manual-task load',
      'Instant match score for AGE Systems',
      'Clear next step only when the gaps are real',
    ],
    startCta: 'Start assessment',
    progressLabel: 'Question',
    back: 'Back',
    next: 'Next',
    finish: 'See my results',
    answerAll: 'Select an answer to continue.',
    resultEyebrow: 'Assessment Complete',
    resultTitle: 'match for AGE Systems',
    matchLabel: 'Service match',
    bands: [...bands],
    nextStepsTitle: 'Recommended next step',
    primaryCta: 'Book 15-minute System Blueprint session',
    secondaryCta: 'View AGE Systems',
    backToService: 'Back to service page',
    retake: 'Retake assessment',
  },
  questions,
  customResult: {
    headline: 'Your AGE leak score is ready.',
    body: 'Your score weighs pipeline visibility, staff accountability, manual task load, speed-to-lead, and the cost of missed follow-up across all 10 answers.',
    ctaIntro:
      'Book a live 15-minute System Blueprint session below. We will visually map out your automated infrastructure.',
    primaryCta: 'Book 15-minute System Blueprint session',
    warning:
      'Do not book if you are comfortable losing leads to faster competitors.',
  },
}
