# Digni Digital App Development Plan

This plan turns the current Next.js app into a repeatable product-development workflow. It prioritizes stability, conversion, multilingual quality, and operational readiness.

## Current baseline

- Framework: Next.js 16 with App Router.
- Rendering: mixed dynamic routes and static JSON endpoints.
- Locales currently configured in `i18n/routing.ts`: `us-en`, `fr-fr`, `es-es`, `sa-ar`.
- Main areas:
  - Public marketing pages under `app/[locale]`.
  - Blog/content under `content/blog`.
  - Admin, CRM, LMS, content, and marketing tooling under `app/admin` and `app/api/admin`.
  - Integrations: Supabase, Stripe, Resend.

## Development principles

1. Keep the public site fast, stable, and conversion-focused.
2. Ship multilingual experiences intentionally; no page should launch in one locale and break in another.
3. Treat payments, admin, CRM, and LMS as production systems with explicit validation.
4. Prefer small, verifiable increments over broad rewrites.
5. Every meaningful change should be checked with typecheck/build and, when relevant, route smoke tests.

## Phase 1 — Stabilize the foundation

**Goal:** make every developer change safe to verify.

- [x] Confirm `npm run lint` / TypeScript check passes.
- [x] Confirm `npm run build` passes.
- [x] Add `npm run typecheck` as an explicit type-check command.
- [x] Add `npm run verify` for typecheck + production build.
- [x] Add `npm run smoke:routes` for live-preview route smoke testing.
- [ ] Decide whether `messages/de-de.json` should become a routed locale or be treated as unused/staged copy.
- [ ] Add a documented `.env.local` setup checklist without committing secrets.

### Validation commands

```bash
npm run typecheck
npm run build
npm run verify
```

For live-preview route QA:

```bash
npm run dev
npm run smoke:routes
```

Optional targeted locale check:

```bash
npm run smoke:routes -- --locales=us-en,fr-fr
```

## Phase 2 — Public site conversion build

**Goal:** improve the paths that turn visitors into leads or customers.

Priority pages:

1. `/[locale]`
2. `/[locale]/ai-receptionist`
3. `/[locale]/agentic-softwares`
4. `/[locale]/future-ready-graduate`
5. `/[locale]/services`
6. `/[locale]/solutions`
7. `/[locale]/products`
8. `/[locale]/contact`

Build tasks:

- [ ] Define one primary conversion goal per page.
- [ ] Standardize hero CTA hierarchy across core pages.
- [ ] Add stronger proof sections: outcomes, testimonials, case-study links, logos, metrics.
- [ ] Ensure every product/service page has a clear next step.
- [ ] Add event tracking for high-intent CTAs.
- [ ] Check mobile layouts for the full conversion path.

## Phase 3 — Multilingual and content quality

**Goal:** make localized content reliable and maintainable.

- [ ] Add translation key coverage checks.
- [ ] Add route smoke checks for all configured locales before deployment.
- [ ] Validate blog slugs and metadata.
- [ ] Check localized blog pages for missing body overrides or fallback copy.
- [ ] Add a content publishing checklist for title, description, OG image, canonical URL, and internal links.
- [ ] Review RTL behavior for `sa-ar` pages.

## Phase 4 — SEO and discoverability

**Goal:** make the site easier to discover and share.

- [ ] Audit per-page metadata for core commercial pages.
- [ ] Verify canonical and hreflang output.
- [ ] Expand structured data:
  - Organization schema.
  - Service/Product schema where appropriate.
  - Article schema for blog pages.
  - FAQ schema for relevant landing pages.
- [ ] Validate `/sitemap.xml` after major route/content changes.
- [ ] Run Lighthouse on homepage and main product pages.

## Phase 5 — Backend and integration readiness

**Goal:** make operational flows trustworthy.

Stripe:

- [ ] Run `npm run check-stripe` in each environment.
- [ ] Verify checkout session creation.
- [ ] Verify success/canceled pages.
- [ ] Verify webhook signing and event handling.

Supabase:

- [ ] Confirm required env vars per environment.
- [ ] Review admin authentication and session handling.
- [ ] Review RLS policies for admin, LMS, CRM, and application data.
- [ ] Test role-based access boundaries.

Resend/email:

- [ ] Verify contact/application email flows.
- [ ] Add graceful failure messages and server-side logging where needed.
- [ ] Add spam/rate-limit protection for public forms.

## Phase 6 — Admin, CRM, LMS, and content operations

**Goal:** turn internal tooling into reliable daily-use systems.

- [ ] Map admin routes by role and data dependency.
- [ ] Add smoke checks for authenticated admin flows in a staging environment.
- [ ] Document the bootstrap admin process.
- [ ] Validate LMS course, module, lesson, quiz, invite, and progress flows.
- [ ] Validate CRM contact/deal CRUD flows.
- [ ] Add audit or activity logging for sensitive admin changes.

## Phase 7 — Analytics and growth loop

**Goal:** measure what matters.

Recommended events:

- `cta_click`
- `contact_submit`
- `checkout_started`
- `checkout_completed`
- `affiliate_submit`
- `newsletter_submit`
- `blog_cta_click`
- `language_switch`
- `admin_login`

Dashboards:

- Acquisition by locale.
- Page-to-lead conversion.
- Product/service CTA performance.
- Blog-to-lead assisted conversions.
- Checkout funnel.

## Definition of done for new work

A change is ready to ship when:

- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] Relevant live routes pass `npm run smoke:routes`.
- [ ] Core desktop and mobile layouts were reviewed.
- [ ] Copy and metadata are complete for all impacted locales.
- [ ] Integration behavior is tested when Stripe, Supabase, Resend, or admin flows are touched.
- [ ] Any new environment variables are documented.

## Immediate next build recommendations

1. Run `npm run smoke:routes` while `npm run dev` is running.
2. Decide what to do with the currently present `de-de` messages file.
3. Add env/setup documentation for Supabase, Stripe, and Resend.
4. Add conversion analytics for the main homepage and product CTAs.
5. Add a simple content validation script for blog slugs and locale coverage.
