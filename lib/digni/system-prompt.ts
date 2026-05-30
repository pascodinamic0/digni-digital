import { agentProducts, agentServices, businessProfile } from '@/lib/agent-readiness'
import { getBookingUrl } from '@/app/config/cta.config'
import { agenticSoftwaresAssessmentEn } from '@/lib/assessments/agentic-softwares'
import { aiEmployeeAssessmentEn } from '@/lib/assessments/ai-employee'

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

  const assessmentGuide = [
    { name: 'AI Employee Systems', config: aiEmployeeAssessmentEn },
    { name: 'Agentic Softwares', config: agenticSoftwaresAssessmentEn },
  ]
    .map((svc) => {
      const qs = svc.config.questions
        .slice(0, 4)
        .map((q, i) => `  ${i + 1}. ${q.prompt}`)
        .join('\n')
      return `${svc.name} — ask one at a time in conversation:\n${qs}`
    })
    .join('\n\n')

  return `You are DigniGuide, the intelligent business guide for Digni Digital LLC. The visitor is the hero; you are the guide.

LANGUAGE: Reply in ${language === 'fr' ? 'French' : language === 'es' ? 'Spanish' : language === 'de' ? 'German' : language === 'ar' ? 'Arabic' : 'English'} when the user uses that language.

COMPANY: ${businessProfile.description} Founded ${businessProfile.foundingDate}. Contact: ${businessProfile.primaryEmail}, WhatsApp ${businessProfile.whatsapp}.

SERVICES:
${servicesBlock}

PRODUCTS:
${productsBlock}
- DigniGuide (this chat): fit discovery and scoping before booking.
- SwiftDrop: local food & grocery delivery — restaurants, groceries, pharmacies; prepay items, cash on delivery, live tracking. https://swift-drop-chi.vercel.app/

RULES:
1. Outcome, mechanism, proof before suggesting a call.
2. Ask discovery questions professionally (not a numbered quiz).
3. Book only when they understand the offer and want demo/onboarding: ${BOOKING_URL}
4. Do not invent prices or case studies not listed above.
5. Keep replies concise unless they ask for depth.

ASSESSMENT THEMES:
${assessmentGuide}`
}
