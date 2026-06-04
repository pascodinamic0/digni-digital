---
name: blog-resource-audit
description: >-
  Audits and improves Digni Digital blog posts until they score 90+/100 for
  search intent, education, AI citation, topical authority, reader value, and
  commercial alignment. Use when writing or editing blog content, Future Ready
  career guides, AI career articles, or when the user mentions SEO audit, AI
  retrieval, E-E-A-T, or article quality gates.
---

# Blog Resource Audit (90+ Gate)

**Role:** Senior SEO strategist, AI retrieval optimization, technical content architect, curriculum designer.

**Job:** Do not ship thin articles. Audit and improve until the page is the most useful resource on the topic for humans, search engines, AI systems, learners, and qualified buyers.

**Approval threshold:** Do not approve any article below **90/100**.

**Code references:** `lib/blog/article-intent.ts` (required sections, title/excerpt helpers), `lib/positioning/clarity-framework.ts` (grunt test, Grow → Learn → Scale), `lib/ai-career-jobs/display-title.ts` (plain title only in H1).

## Primary objective

Every article must satisfy:

1. Human reader intent  
2. Search engine intent  
3. AI retrieval intent  
4. Educational intent  
5. Commercial intent (without sales-pitch tone)

Target: pages ChatGPT, Gemini, Claude, Perplexity, Copilot, and future systems would confidently cite.

## Audit checklist (9 steps)

### Step 1 — Search demand validation

Document (visible in article or editor notes):

| Field | Requirement |
|-------|-------------|
| Primary keyword | Real query volume pattern; use **plain job titles** people search |
| Secondary keywords | 3–6 related terms |
| Related questions | PAA-style questions |
| Long-tail | 2–4 specific phrases |
| Intent | Informational / commercial / mixed |

**Reject** titles with invented job titles nobody searches. **Replace** with searchable plain titles (e.g. "AI Thumbnail Designer" not only "Visual Narrative Architect") while keeping fancy title as secondary label if useful.

### Step 2 — Intent coverage

Article must answer:

- What is it?  
- Why does it matter?  
- How does it work?  
- Who should learn it?  
- How much can someone earn?  
- What tools are required?  
- What mistakes to avoid?  
- Real-world examples  
- Career opportunities  
- Implementation steps  

If missing → expand using `lib/ai-career-jobs/custom-articles/shared-sections.ts` helpers.

### Step 3 — Educational depth

Teach a complete beginner: definitions, examples, analogies, frameworks, templates, exercises, checklists. No fluff.

### Step 4 — AI citation optimization

Include: clear definitions, structured answers, **tables**, bullet summaries, **FAQ** (6+ items), step-by-step frameworks. Prefer extractable HTML (`<table>`, `<h2>`/`h3`, `<strong>` Q/A).

### Step 5 — Topical authority

Cover beginner, intermediate, and advanced questions **before** readers ask.

### Step 6 — E-E-A-T

Experience, expertise, authority, trust: case study, metrics, lessons learned, named frameworks (not anonymous hype).

### Step 7 — Future-ready block

Must answer:

- How does AI change this field?  
- How can a student prepare?  
- How can a professional stay relevant?  
- How can a business benefit?  

Use `aiFutureSection()` in shared-sections.

### Step 8 — Reader action

Include: practical checklist, recommended tools, next learning step. Optional: downloadable resource mention (template, rubric, PDF).

### Step 9 — Digni Digital alignment (natural)

Connect lightly to:

- **AI Employee Systems** — automation that handles volume so humans handle judgment  
- **Future-Ready Graduate Program** — proof cycles, employability  
- **Agentic Software** — scoped agents with guardrails  

No hard sell. One bridge paragraph max unless the post is program-specific.

## Scoring rubric (100 points)

| Dimension | Max | Pass indicator |
|-----------|-----|----------------|
| Search intent coverage | 20 | Plain-title keywords, FAQ matches PAA, title/excerpt aligned |
| Educational quality | 20 | Beginner can execute; exercise + path + mistakes |
| AI citation potential | 20 | Definition block, key takeaways, tables, 6+ FAQs |
| Topical authority | 15 | Beginner + intermediate + advanced coverage |
| Reader value | 15 | Checklist, tools, next step, real scenario |
| Commercial relevance | 10 | Earn/pricing table, Digni bridge, single CTA |

**90+ = ship.** **&lt;90 = revise** before publish or refresh.

## Workflow by content type

### Future Ready / AI career guides (`lib/ai-career-jobs/`)

1. Open `content/blog/ARTICLE-AUDIT-QUEUE.md` — take the **next** `pending` row only.  
2. Edit `custom-articles/bodies-part1.ts` or `bodies-part2.ts` + `meta.ts` if title/excerpt need search-demand fix.  
3. Import and append shared sections from `shared-sections.ts` (see below).  
4. Score in queue file; set status `done` with score.  
5. Bump `PUBLISH_DATE` in `build-career-guide-article.ts` to current date when shipping that article refresh.  
6. Run locale fill script when non-English parity is required for that slug.

### Flagship posts (`content/blog/en.ts` + fr/de/ar/es)

Same checklist; update **all locale files** per `.cursor/rules/blog-publishing.mdc` when editing.

## Required shared sections (career guides)

Import from `lib/ai-career-jobs/custom-articles/shared-sections.ts`:

```typescript
searchDemandBlock(job, { primary, secondary, questions, longTail, intent })
whatIsDefinition(job)
keyTakeawaysSection(bullets[])
whoShouldLearn(job, audiences[])
careerOpportunitiesTable(rows[])
aiFutureSection(job, { student, professional, business })
implementationChecklist(title, items[])
digniAlignmentBridge(job)
```

Place **after** `roleIntro` / **before** role-specific lesson content:

1. `searchDemandBlock`  
2. `whatIsDefinition`  
3. `keyTakeawaysSection`  

Place **before** `faqSection`:

4. `whoShouldLearn`  
5. `careerOpportunitiesTable`  
6. `aiFutureSection`  
7. `implementationChecklist`  
8. `digniAlignmentBridge`  

Expand FAQs to **6+** including beginner, intermediate, advanced.

## Output template (editor handoff)

When reporting to the user:

```markdown
## Audit: [title]
**Slug:** `...` | **Score:** XX/100 | **Verdict:** Ship / Revise

### Gaps fixed
- ...

### Keywords
- Primary: ...
- Secondary: ...

### Next in queue
- [next slug from ARTICLE-AUDIT-QUEUE.md]
```

## Anti-patterns

- Invented job titles as **only** H1 with no plain-language synonym  
- Generic "How to Become a…" titles with no searchable skill  
- FAQ with fewer than 6 questions  
- No earnings or pricing signal  
- No AI/future block  
- Walls of text without tables or takeaways  
- Heavy Digni pitch before proof/mechanism (violates growth-operator rules)

## Related rules

- `.cursor/rules/blog-resource-audit.mdc` — auto-attached for blog paths  
- `.cursor/rules/growth-operator.mdc` — CTA order and proof ladder  
- `.cursor/rules/blog-publishing.mdc` — dates and locale parity  
