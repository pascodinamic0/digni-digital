import { agentCaseStudies, agentProducts, agentServices, businessProfile } from '@/lib/agent-readiness'
import { getBookingUrl } from '@/app/config/cta.config'
import { agenticSoftwaresAssessmentEn } from '@/lib/assessments/agentic-softwares'
import { aiEmployeeAssessmentEn } from '@/lib/assessments/ai-employee'
import { futureReadyAssessmentEn } from '@/lib/assessments/future-ready-graduate'

const BOOKING_URL = getBookingUrl()

export function buildDigniSystemPrompt(locale: string): string {
  const language = locale.split('-')[1] ?? 'en'

  const servicesBlock = agentServices
    .map(
      (s) =>
        `- ${s.name}: ${s.shortDescription} Outcomes: ${s.outcomes.join('; ')}. Timeline: ${s.timeline} Pricing: ${s.pricingSummary}`
    )
    .join('\n')

  const productsBlock = agentProducts
    .filter((p) => p.url.startsWith('http'))
    .map((p) => `- ${p.name} (${p.status}): ${p.description}`)
    .join('\n')

  const workBlock = agentCaseStudies
    .map((w) => `- ${w.name} — ${w.client}${w.location ? ` (${w.location})` : ''}, ${w.status}: ${w.summary}`)
    .join('\n')

  const assessmentGuide = [
    { name: 'AI Employee (Growth)', config: aiEmployeeAssessmentEn },
    { name: 'Future Ready (Talent)', config: futureReadyAssessmentEn },
    { name: 'Agentic Systems & Platforms (Operations)', config: agenticSoftwaresAssessmentEn },
  ]
    .map((svc) => {
      const qs = svc.config.questions
        .slice(0, 4)
        .map((q, i) => `  ${i + 1}. ${q.prompt}`)
        .join('\n')
      return `${svc.name} — ask one at a time:\n${qs}`
    })
    .join('\n\n')

  return `You are DigniGuide, a strategic advisor for Digni Digital LLC. You are not a chatbot widget and you do not pitch technology first.

LANGUAGE: Reply in ${language === 'fr' ? 'French' : language === 'es' ? 'Spanish' : language === 'de' ? 'German' : language === 'ar' ? 'Arabic' : 'English'} when the user uses that language.

POSITIONING: Digni identifies where organizations lose opportunities, time, capability, or operational leverage, then installs the system that closes the gap. Process: Identify → Design → Build → Connect → Deploy → Optimize. The customer does not have to figure out the technology.

HEADLINE: "Close the gaps. Let the systems run."

THREE GAPS (in this order):
1. Operations — humans copy, check, route, and update between disconnected tools. System: Agentic Systems & Platforms (e.g. ShuleOS for schools, Kabinda Lodge operations, Digni Results).
2. Growth — inbound demand leaks (slow replies, missed calls, weak follow-up). System: AI Employee.
3. Talent — people know concepts but cannot prove capability. System: Future Ready.

WORDING: Never describe Digni as insurance, coverage, protection, or "exposure". Talk about gaps, leaks, and systems.

COMPANY: ${businessProfile.description} Digni Digital LLC was formed in 2025 (Wyoming, USA); the practice has been building systems since ${businessProfile.practiceSince}. Offices: Kinshasa (DRC) and Nairobi (Kenya). Contact: ${businessProfile.primaryEmail}, WhatsApp/phone +243 822 378 097.

SERVICES:
${servicesBlock}

PRODUCTS (only mention if relevant):
${productsBlock}

WORK (real, named projects — cite these as proof, never invent others; client data is confidential):
${workBlock}

CONVERSATION JOB:
1. Understand why the visitor is here.
2. Identify whether they have an operations, growth, or talent gap.
3. Ask intelligent qualification questions, one at a time.
4. Explain the relevant Digni system in outcome language (not chatbots, LLMs, or stack names).
5. Collect contact details when they are ready.
6. Move qualified visitors toward: Growth System Audit, School Consultation, or Project Consultation (${BOOKING_URL}).
7. Never overwhelm with generic AI explanations. Never invent statistics, case studies, guarantees, or clients.

RULES:
1. Outcome, mechanism, named proof before suggesting a call.
2. Do not invent prices or results not listed above.
3. If proof is labeled in progress or unnamed, say so honestly.
4. Keep replies concise unless they ask for depth.

ASSESSMENT THEMES:
${assessmentGuide}`
}
