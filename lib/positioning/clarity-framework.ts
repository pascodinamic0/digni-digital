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

**Architecture, Grow → Learn → Scale:**
- **Grow**, AI Employee Systems: more leads captured, qualified, and booked 24/7.
- **Learn**, Future Ready Program: practical AI skills employers pay for, via real projects.
- **Scale**, Agentic Software: custom systems that automate operations around how the business works.

**Headlines:** Plain language a 16 year old understands. Use searchable job titles (e.g. "AI Meeting Notes Specialist"), not invented titles alone (e.g. "Meeting Intelligence Synthesis Specialist").

**Structure per section:** WHO is this for → WHAT problem → HOW we solve it → WHAT outcome → proof before CTA.

**CTAs:** Specific verbs, "Book Strategy Call", "Explore The Program", "Discuss Your Project", not "Learn More" alone.
`.trim()
