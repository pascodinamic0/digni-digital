/**
 * Site wide clarity framework, grunt test, outcome copy, banned patterns.
 * Used by blog agent prompt, audits, and editorial review.
 */

export const CLARITY_GRUNT_TEST = {
 what: 'What we offer (category + outcome)',
 how: 'How it improves their life (measurable result)',
 next: 'What to do next (one primary action)',
} as const

/** Phrases to avoid in headlines and hero copy. */
export const BANNED_HEADLINE_PATTERNS = [
 'we fix the gaps',
 'fight back',
 'transform your',
 'revolutionary',
 'cutting-edge',
 'next-generation',
 'unlock the power of ai',
 'ai-powered solutions tailored',
 'seamless digital transformation',
 'leverage ai to transform',
 'synergy',
 'leverage',
 'disrupt',
 'architect',
 'synthesis specialist',
 'velocity producer',
 'multimodal',
] as const

export const CLARITY_COPY_RULES = `
## Digni Digital clarity framework (all pages)

**Grunt test (5 seconds):** Visitor must know (1) what we offer, (2) how it helps them, (3) what to do next.

**Positioning:** Digni identifies exposures and installs systems. Not an AI agency, chatbot company, or training catalog.

**Architecture, Grow → Learn → Scale:**
- **Grow**, AI Employee: capture more of the demand you already generate—respond, qualify, follow up, book 24/7.
- **Learn**, Future Ready: practical AI capability with portfolio evidence, not another certificate.
- **Scale**, Agentic Systems: software that perceives, reasons, and acts so people stop moving information by hand.

**Process:** Identify → Design → Build → Connect → Deploy → Optimize.

**Headlines:** Plain language a 16 year old understands. Outcome before technology.

**Structure per section:** WHO is this for → WHAT problem → HOW we solve it → WHAT outcome → proof before CTA.

**CTAs:** Diagnostic verbs ("See What's Exposed", "Find Your Revenue Leaks"), not "Learn More" alone.
`.trim()
