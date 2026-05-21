import type { ServiceAssessmentConfig } from './types'

const bands = [
  {
    minPercent: 85,
    label: 'Excellent fit',
    description:
      'Your institution profile, outcomes focus, and timeline align with the Future-Ready Graduate Program. You are positioned for strong employability impact.',
  },
  {
    minPercent: 70,
    label: 'Strong fit',
    description:
      'Most criteria match our program model. A school consultation can map cohort size, curriculum integration, and placement goals.',
  },
  {
    minPercent: 50,
    label: 'Moderate fit',
    description:
      'There is potential, but you may need a phased rollout or partnership design. Let us discuss readiness and stakeholder buy-in.',
  },
  {
    minPercent: 0,
    label: 'Explore alternatives',
    description:
      'Your answers suggest a different path—workshops, shorter modules, or another service—may be better first. We will recommend honestly on a call.',
  },
] as const

const questions = [
  {
    id: 'institution',
    prompt: 'What type of institution are you?',
    choices: [
      { id: 'university', label: 'University or higher education', points: 10 },
      { id: 'high-school', label: 'Private high school or secondary', points: 9 },
      { id: 'vocational', label: 'Vocational / technical institute', points: 9 },
      { id: 'other', label: 'Corporate training or other', points: 5 },
    ],
  },
  {
    id: 'outcomes',
    prompt: 'How do you measure student success today?',
    choices: [
      { id: 'employment', label: 'Job placement and employability', points: 10 },
      { id: 'grades', label: 'Mostly grades and exams', points: 6 },
      { id: 'mixed', label: 'Mix of academics and soft skills', points: 8 },
      { id: 'unclear', label: 'Outcomes are not clearly tracked', points: 9 },
    ],
  },
  {
    id: 'cohort',
    prompt: 'Roughly how many students would enter the program per year?',
    choices: [
      { id: 'small', label: 'Under 50', points: 6 },
      { id: 'medium', label: '50–200', points: 9 },
      { id: 'large', label: '200–1,000', points: 10 },
      { id: 'very-large', label: '1,000+', points: 9 },
    ],
  },
  {
    id: 'existing',
    prompt: 'Do you already run career or digital skills programs?',
    choices: [
      { id: 'none', label: 'No structured program yet', points: 10 },
      { id: 'basic', label: 'Basic workshops only', points: 9 },
      { id: 'partial', label: 'Partial curriculum, inconsistent results', points: 8 },
      { id: 'strong', label: 'Strong program, want to upgrade', points: 7 },
    ],
  },
  {
    id: 'timeline',
    prompt: 'When do you want to launch or expand?',
    choices: [
      { id: 'asap', label: 'This academic year', points: 10 },
      { id: 'next', label: 'Next academic year', points: 9 },
      { id: 'explore', label: 'Exploring for 12+ months', points: 5 },
      { id: 'unknown', label: 'No timeline yet', points: 4 },
    ],
  },
  {
    id: 'goal',
    prompt: 'What is your top priority for students?',
    choices: [
      { id: 'jobs', label: 'Paid employment and internships', points: 10 },
      { id: 'entrepreneur', label: 'Entrepreneurship and freelancing income', points: 9 },
      { id: 'digital', label: 'Digital literacy and portfolios', points: 8 },
      { id: 'cert', label: 'Certificates only, low placement focus', points: 4 },
    ],
  },
  {
    id: 'student-value',
    prompt: 'What is the annual revenue or lifetime value of an enrolled student?',
    choices: [
      { id: 'unknown', label: 'Not tracked', points: 5 },
      { id: 'low', label: 'Under $1,000 per year', points: 5 },
      { id: 'mid', label: '$1,000 – $5,000 per year', points: 8 },
      { id: 'high', label: '$5,000 – $15,000 per year', points: 9 },
      {
        id: 'very-high',
        label: '$15,000+ per year',
        points: 10,
        insight: {
          title: 'Placement outcomes protect high student value',
          why: 'When each seat represents significant revenue, employability programs are not optional—they defend retention, reputation, and referrals.',
        },
      },
    ],
  },
  {
    id: 'stakeholders',
    prompt: 'Who needs to approve launching a new employability program?',
    choices: [
      { id: 'aligned', label: 'Leadership already aligned—ready to scope', points: 10 },
      { id: 'one', label: 'One decision-maker, minor internal buy-in left', points: 9 },
      { id: 'multiple', label: 'Several departments—still building consensus', points: 6 },
      { id: 'early', label: 'Early exploration—no sponsor yet', points: 4 },
    ],
  },
  {
    id: 'employers',
    prompt: 'How connected are you to employers or industry partners for placements?',
    choices: [
      { id: 'strong', label: 'Active partnerships—we can place interns and jobs', points: 10 },
      { id: 'building', label: 'Building relationships—want more placements', points: 9 },
      { id: 'weak', label: 'Weak ties—employability is a gap', points: 8 },
      { id: 'none', label: 'No employer network yet', points: 7 },
    ],
  },
  {
    id: 'funding',
    prompt: 'Is budget allocated (or likely) for a full-year student outcomes program?',
    choices: [
      { id: 'yes', label: 'Yes—budget confirmed or in this year\'s plan', points: 10 },
      { id: 'likely', label: 'Likely—pending final approval', points: 9 },
      { id: 'grant', label: 'Depends on grants or donor funding', points: 7 },
      { id: 'none', label: 'No budget identified yet', points: 4 },
    ],
  },
]

export const futureReadyAssessmentEn: ServiceAssessmentConfig = {
  serviceId: 'future-ready',
  serviceName: 'Future-Ready Graduate Program',
  servicePath: '/future-ready-graduate',
  accent: 'success',
  copy: {
    metaTitle: 'Future-Ready Graduate Fit Assessment | Digni Digital',
    metaDescription:
      'Ten questions for schools and universities to see how well the Future-Ready Graduate Program matches your outcomes, stakeholders, funding, and timeline.',
    eyebrow: '2-minute fit check',
    introTitle: 'Is the Future-Ready Graduate Program right for your school?',
    introSubtitle:
      'Built for institutions that care about employability—not just certificates. Get a clear match score before booking a consultation.',
    introBullets: [
      '10 questions on institution fit, stakeholders, employer ties, and budget',
      'Match score for the full 9-month program model',
      'Honest guidance if another path fits better',
    ],
    startCta: 'Start assessment',
    progressLabel: 'Question',
    back: 'Back',
    next: 'Next',
    finish: 'See my match score',
    answerAll: 'Select an answer to continue.',
    resultEyebrow: 'Your result',
    resultTitle: 'match for Future-Ready Graduate',
    matchLabel: 'Program match',
    bands: [...bands],
    nextStepsTitle: 'Recommended next step',
    primaryCta: 'Book school consultation',
    secondaryCta: 'View program details',
    backToService: 'Back to program page',
    retake: 'Retake assessment',
  },
  questions,
}
