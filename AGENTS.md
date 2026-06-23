# Digni Digital - Agent Instructions

## Cursor Cloud specific instructions

### Overview

Single Next.js 16 App Router application (not a monorepo). Marketing/brochure pages run with **zero external services**. Admin, LMS, CRM, and chat features require Supabase. Payments require Stripe. Email requires Resend.

### Key Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (uses webpack; port 3000) |
| Build | `npm run build` |
| Lint / Type check | `npm run lint` (runs `tsc --noEmit`) |

- No test framework is configured (no jest, vitest, playwright).
- The `.npmrc` has `legacy-peer-deps=true`; this is required for `npm install` to succeed.

### Dev Server Notes

- `npm run dev` first runs `scripts/disable-devtools-indicator.js` then starts Next.js with `--webpack` flag.
- The root URL (`/`) redirects (307) to the default locale `/us-en`.
- Supported locales: `us-en`, `fr-fr`, `es-es`, `sa-ar`, `de-de`.

### Environment Variables

The marketing site works without any env vars. For features requiring external services:

- **Supabase** (admin/LMS/CRM/blog): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- **Stripe** (checkout): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, plus `STRIPE_PRICE_*` vars
- **Resend** (email): `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
- **OpenAI** (AI blog gen, optional): `OPENAI_API_KEY`

The app gracefully returns 503 for endpoints whose credentials are missing.

### Architecture Notes

- i18n is handled by `next-intl` with messages in `/messages/{locale}/`.
- The middleware (`proxy.ts`) handles locale detection/routing.
- Admin routes are under `/app/[locale]/admin/`.
- LMS routes are under `/app/[locale]/learn/`.
