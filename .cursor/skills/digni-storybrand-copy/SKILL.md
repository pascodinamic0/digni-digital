---
name: digni-storybrand-copy
description: Applies the StoryBrand SB7 framework to Digni Digital site copy in alignment with growth-operator rules. Use when writing or editing marketing copy, hero sections, CTAs, service pages, emails, one-liners, BrandScript-style messaging, or when the user mentions StoryBrand, customer-as-hero, guide positioning, grunt test, or message clarity.
---

# Digni Digital × StoryBrand Copy

## What this is

Operational guidance for **clear, story-shaped messaging**: the customer is the **hero**, the brand is the **guide**. This repo already enforces **growth operator** principles (belief before monetization, proof, contrast positioning). StoryBrand is the **narrative layer** that keeps language simple enough to convert.

**Source material:** Donald Miller, *Building a StoryBrand* (2.0)—PDF in `docs/Building a StoryBrand 2_0_ Clarify Your Message So Customers -- Donald Miller.pdf`. Do not paste copyrighted passages into the codebase; paraphrase and apply.

## Core ideas (SB7)

Every customer-facing story answers the same arc:

1. **Character** — The hero is the **customer**, not Digni. Name what they **want** in relation to the offer (survive/thrive: revenue, status, safety, belonging, meaning).
2. **Problem** — External (practical obstacle), internal (how it makes them feel), philosophical (“wrong” that should be made right). Agitate clearly; **villain** = broken system or force, not a petty dig at people.
3. **Guide** — Digni shows **empathy** (we understand) + **authority** (we’ve done this—proof). Avoid “hero company” bragging; the guide equips the hero.
4. **Plan** — **Process plan** (3–4 simple steps: what happens when they engage) and/or **agreement plan** (how you remove risk: expectations, guarantees, no-surprise rules).
5. **Call to action** — **Direct** (buy, book, apply) + **transitional** (lead magnet, audit, call) so browsers can deepen trust before the main ask.
6. **Failure** — Stakes if they don’t act (real, not manipulative). Makes the gap urgent.
7. **Success** — Specific vision of life after the win (measurable where possible).

**Mantras:** “If you confuse, you’ll lose.” Messaging should help them **survive and thrive** in language so simple they don’t burn mental calories.

## Grunt test (about five seconds)

From any hero or above-the-fold block, a visitor should instantly get:

1. **What** you offer (category + outcome).
2. **How** it makes their life better (transformation).
3. **What to do next** (one obvious primary step).

If copy is cute but fails these, replace with plain language.

## One-liner (internal + spoken)

Use a repeatable formula (adjust words for Digni):

- **Character + want** → **Problem** → **Plan** → **Success**

Keep it sayable in one breath; use it to align headlines, intros, and CTAs.

## Map SB7 → growth operator (this repo)

| StoryBrand | Growth operator |
|------------|-----------------|
| Success / transformation | Outcome before CTA |
| Plan + guide authority | Mechanism + why it works |
| Guide + case language | Proof (metrics, cases, logos) |
| Agreement plan + transitional CTA | Risk removal before hard ask |
| Problem + philosophical wrong | “Why traditional X fails” / enemy |
| Single story arc | One primary CTA per page |

**Section order:** transformation promise → why it works → proof → pricing/booking (see `.cursor/rules/growth-operator.mdc`).

## Where copy lives

- Primary strings: `app/i18n/translations.ts` (source of truth; `app/config/translations.ts` re-exports). Keep locales consistent.
- Content: `content/**` for blog and structured content.

When editing: change **all** active locales for user-facing strings unless the task is single-locale.

## Writing rules for Digni

- **Hero:** Prefer **you/your** for the outcome; Digni as **guide** (“we” for method + proof only). Headline + subhead must pass the grunt test.
- **CTAs:** Specific verbs (“Book a strategy call”, “Get the audit”)—not “Learn more” as the only primary.
- **Proof:** Every page needs proof; tie claims to evidence the hero can verify.
- **Clarity test:** One sentence a 14-year-old can repeat: “We help [who] get [measurable outcome] without [pain] using [mechanism].”

## Anti-patterns

- Company as hero (“we’re the best”; long origin story above the fold).
- Jargon that saves calories for insiders but confuses buyers.
- Multiple competing primary CTAs.
- Missing stakes (failure) or vague success (“grow your business” with no picture of life after).

## When stuck

1. Fill the **BrandScript-style** prompts in [reference.md](reference.md) (internal worksheet; not customer-facing).
2. Re-run the **grunt test** on the draft.
3. Cross-check **growth-operator** prerequisites before placing a CTA.

## Optional: extract text from the PDF

For analysis only (do not commit full book text). Requires `pypdf`:

```bash
python3 -m pip install pypdf
python3 scripts/extract-storybrand-pdf.py
```

See `scripts/extract-storybrand-pdf.py`.
