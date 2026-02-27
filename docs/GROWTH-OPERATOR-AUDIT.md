# Growth Operator Audit

Map of the 7 principles to the Digni Digital codebase. Use this for implementation planning.

---

## 1. Belief Before Monetization

**Rule:** Before any CTA → Outcome + Mechanism + Proof + Risk removal.

### Current State

| Page | Issue | Fix |
|------|-------|-----|
| **Home** | Hero CTAs ("Our Story", "What We Do") appear before mechanism or proof | Move CTAs below Stats + Case Studies; add "Why it works" block before CTA section |
| **Home WhatWeDo** | "See How It Works" / "Book a Demo" on cards before proof | Cards show outcomes but not case proof above fold; add mini-proof (e.g. "300% for healthcare") before CTA |
| **Products** | Pricing + "Get Started" visible before mechanism clarity | Add "How it works" section before pricing; add risk reversal ("30-min call, no obligation") |
| **Services** | CTA "Book Consultation" at bottom without proof stack | Add case study snippet + mechanism before CTA |
| **AI Receptionist** | Pricing tiers appear before full proof | Reorder: Hero → Mechanism (capabilities) → Proof (case studies) → Pricing → CTA |
| **Future Ready Graduate** | Same pattern | Same reorder |
| **Agentic Softwares** | Same pattern | Same reorder |

### Implementation Blocks (per page)

```
Above-the-fold: Transformation promise
Immediately below: "Why it works" (mechanism)
Immediately below: Case proof
Only then: Pricing or booking
```

**Files:** `app/[locale]/page.tsx`, `app/[locale]/services/page.tsx`, `app/[locale]/products/page.tsx`, `app/[locale]/ai-receptionist/page.tsx`, `app/[locale]/future-ready-graduate/page.tsx`, `app/[locale]/agentic-softwares/page.tsx`

---

## 2. Contrast Positioning

**Rule:** Enemy → Problem → Mechanism → Outcome. Add "Why Traditional X Fails" sections.

### Current State

| Page | Has Contrast? | Missing |
|------|---------------|---------|
| **Home** | "What We're Fighting For" exists (problem-focused) | "Why traditional agencies/consultants fail" section |
| **AI Receptionist** | Implicit (missed calls) | "Why Traditional Receptionists Don't Scale" |
| **Future Ready** | Implicit (skills gap) | "Why Standard Curricula Leave Grads Unemployed" |
| **Agentic Softwares** | Minimal | "Why Off-the-Shelf Software Can't Adapt" |
| **Services** | Feature-based | Enemy + contrast per service |

### Add Global Sections

- "Why Traditional [X] Fails"
- "Why Agencies/Consultants Usually Don't Scale You"
- "Why This Model Is Different"

**Files:** Create shared component `WhyTraditionalXFails.tsx` or add to each service page. `app/i18n/translations.ts` for copy.

---

## 3. Attention Architecture

**Rule:** Interrupt pattern → Maintain tension → Release clarity. No text walls.

### Current State

- Hero has video, badge, strong headline ✓
- "What We're Fighting For" has stats, icons ✓
- Mission section: longer paragraphs — consider shortening
- Products: feature grids OK
- Add: Micro open loops (e.g. "The one thing agencies miss..."), scroll curiosity

### Technical Integration

- [ ] Add retargeting pixels (Meta, Google, LinkedIn) — `app/layout.tsx` or `_document`
- [ ] Lead magnet capture (newsletter exists in footer)
- [ ] Short paragraphs, bold for scanning — audit `translations.ts`

**Files:** `app/layout.tsx`, `app/components/Footer.tsx`, `app/i18n/translations.ts`

---

## 4. Proof Every Page

**Rule:** Every page must have proof. Proof ladder: Social → Logical → Demonstration → Risk reversal.

### Current State

| Page | Proof Present? | Gaps |
|------|----------------|------|
| **Home** | Stats, case studies ✓ | Testimonials, before/after |
| **Services** | Stats (150+, 85%, 24/7) | No case study snippet |
| **AI Receptionist** | Case studies in page | Ensure above CTA |
| **Products** | Stats on cards | Link to case studies before CTA |
| **About** | Timeline, team | Client logos, metrics |
| **Contact** | Minimal | Add proof block |

**Files:** All page components, `app/config/translations.ts`

---

## 5. Clarity Test

**Rule:** 14-year-old one-sentence summary. Measurable outcome, no jargon.

### Current Hero (EN)

- **Title:** "We Close the Gaps. You Get the Results."
- **Subtitle:** "Lost leads. Untapped talent. Ideas on the shelf. We help you turn them into what matters."

**Clarity score:** Good direction; "close the gaps" is abstract. Add measurable outcome.

**Framework:** "We help [specific audience] achieve [measurable outcome] without [primary pain] using [unique mechanism]."

**Draft (AI Employee):** "We help small businesses capture every lead and book appointments 24/7—without hiring a receptionist—using AI that talks like you."

**Draft (Future Ready):** "We help schools turn graduates into employed professionals—without outdated curricula—using real skills employers hire for."

**Files:** `app/i18n/translations.ts` → `home.hero`, service page heroes

---

## 6. Simplicity

**Rule:** One primary CTA, no competing offers, clear button copy.

### Current State

| Page | Primary CTA | Competing? | Button Copy |
|------|-------------|------------|-------------|
| **Home** | Book consultation | "Our Story" vs "What We Do" vs CTA | "Book Your Free Consultation" ✓ |
| **WhatWeDo cards** | "See How It Works" | vs "Book a Demo" | "Learn More" on services page — change to action |
| **Products** | "Get Started" | vs "Learn More" | Clear ✓ |
| **Services** | "Book Consultation" | Per-service "Learn More" | Change "Learn More" → "See [Service] in Action" |

**Files:** `app/config/cta.config.ts`, `app/[locale]/page.tsx`, `app/[locale]/services/page.tsx`

---

## 7. Human Psychology

**Checklist:** Upward mobility? Risk removal? Urgency? Authority? Exclusivity? Transformation identity?

| Trigger | Current | Action |
|---------|---------|--------|
| Status | "150+ Businesses Transformed" | Add "Join leaders who..." |
| Safety | "No obligation" in CTA bullets | Ensure prominent |
| Certainty | "85% employed", "300% increase" | Keep; add more |
| Belonging | "One client per market" (AI page) | Expand |
| Advantage | "Your spot or competitor's" | Keep |
| Loss avoidance | "Never miss a lead" | Strong ✓ |
| Urgency | "Limited Availability" (AI page) | Consistent across products |
| Authority | Case studies, stats | Add logos, quotes |
| Transformation identity | "Students who get jobs" | Emphasize identity shift |

**Files:** `app/i18n/translations.ts`, CTA sections, service pages

---

## Priority Implementation Order

1. **Principle 1 (Belief):** Reorder homepage sections — Stats + Case Studies before primary CTA; add mechanism block.
2. **Principle 2 (Contrast):** Add "Why Traditional X Fails" to AI Receptionist and Future Ready pages.
3. **Principle 5 (Clarity):** Rewrite hero to measurable-outcome formula.
4. **Principle 6 (Simplicity):** Single primary CTA per page; change "Learn More" to action copy.
5. **Principle 4 (Proof):** Ensure every page has proof block before CTA.
6. **Principle 3 (Attention):** Pixels, lead magnet optimization.
7. **Principle 7 (Psychology):** Audit checklist pass on key pages.
