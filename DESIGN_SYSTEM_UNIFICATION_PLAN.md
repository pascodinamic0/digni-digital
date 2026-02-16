# Design System Unification Plan

**Objective:** Unify entire app visual design so every screen and component matches the Home/Landing page styling. The landing page is the single source of truth.

**Rules:** No feature additions, layout changes, or UX redesign. Only normalize styling. Remove all hard-coded visual values. Use tokens and Tailwind theme mappings exclusively.

---

## 1. Audit Summary

### Styling Sources

| Source | Location | Purpose |
|--------|----------|---------|
| Global CSS | `app/globals.css` | Tokens, base styles, utilities, hero/card/button classes |
| Tailwind Config | `tailwind.config.ts` | Theme extensions (colors, radii, shadows, borders) |
| Components | `app/components/*.tsx` | Component-level classNames |
| Pages | `app/**/page.tsx` | Page-level classNames |
| Blog Content | `content/blog/*.ts` | Inline styles in HTML (tables) |
| No toast system | — | Not present in codebase |
| No shadcn/ui | — | Custom components, no Radix/shadcn |

### Conflicts & Issues Found

1. **Hard-coded hex in Hero:** `bg-[#0A0A0B]` in `app/page.tsx` (should use `bg-background`)
2. **Hard-coded text colors:** `text-white`, `text-gray-300` (should use `text-text` / `text-muted`)
3. **Hard-coded border opacity:** `border-white/5`, `border-white/10`, `border-white/20`, `border-white/30` (should use token-backed `border-border`, `border-border-light`, `border-border-medium`)
4. **Theme-dependent borders:** `border-white` vs `border-black` for corner accents (need semantic token)
5. **Invalid CSS in .card-glass:** `rgba(var(--surface), 0.5)` — `--surface` is hex, not RGB (needs `--surface-rgb`)
6. **Hard-coded rgba in components:** `ClientJourneyDemo.tsx`, `GlobalPresenceMap.tsx` use `rgba(239,68,68,...)`, `rgba(34,197,94,...)`, `rgba(37,99,235,...)` etc.
7. **Missing `foreground`:** `ClientJourneyDemo` uses `text-foreground/90`, `muted-foreground` — not in theme
8. **section-badge:** Uses `rgba(37, 99, 235, 0.1)` instead of `accent/10` token
9. **Blog content tables:** Inline `style="border: 1px solid #ddd"` etc. in `content/blog/en.ts`
10. **.card-glass:** Uses `rgba(255, 255, 255, 0.1)` — should use `var(--border-light)`

### Duplicates

- Multiple components repeat `border-white/10`, `border-white/5` — consolidate to `border-border-light`, `border-border`
- `text-white` used for hero overlay text where `text-text` is appropriate for theme consistency

---

## 2. Token Table (Landing Page = Source of Truth)

### Semantic Colors (Dark Default)

| Token | Dark Value | Light Value | Usage |
|-------|------------|-------------|-------|
| `--background` | `#0A0A0B` | `#F5F7FA` | Page background |
| `--foreground` | `#FAFAFA` | `#1E293B` | Primary text (alias for --text) |
| `--surface` | `#141416` | `#FFFFFF` | Card/surface backgrounds |
| `--surface-light` | `#1C1C1F` | `#F9FAFB` | Elevated surfaces |
| `--text` | `#FAFAFA` | `#1E293B` | Primary text |
| `--text-muted` | `#E4E4EA` | `#64748B` | Secondary text (alias --muted) |
| `--muted` | `#E4E4EA` | `#64748B` | Secondary text |
| `--muted-foreground` | `#D1D1DB` | `#475569` | Tertiary (alias --muted-dark) |
| `--muted-dark` | `#D1D1DB` | `#475569` | Tertiary text |
| `--accent` | `#2563EB` | (same) | Primary brand |
| `--accent-light` | `#3B82F6` | (same) | Hover states |
| `--success` | `#10B981` | (same) | Success states |
| `--destructive` | `#EF4444` | (same) | Errors/critical |
| `--warning` | `#F59E0B` | (same) | Warning states |
| `--info` | `#3B82F6` | (same) | Info states |
| `--ring` | `rgba(var(--accent-rgb), 0.5)` | (same) | Focus ring |

### RGB Tokens (for rgba() usage)

| Token | Dark Value | Usage |
|-------|------------|-------|
| `--background-rgb` | `10, 10, 11` | rgba backgrounds |
| `--surface-rgb` | `20, 20, 22` | rgba surfaces |
| `--accent-rgb` | `37, 99, 235` | accent opacity |
| `--success-rgb` | `16, 185, 129` | success opacity |
| `--destructive-rgb` | `239, 68, 68` | destructive opacity |
| `--text-rgb` | `250, 250, 250` | text opacity |

### Borders

| Token | Dark | Light | Tailwind Class |
|-------|------|-------|----------------|
| `--border` | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.05)` | `border-border` |
| `--border-light` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` | `border-border-light` |
| `--border-medium` | `rgba(255,255,255,0.2)` | `rgba(0,0,0,0.15)` | `border-border-medium` |
| `--border-accent` | `rgba(var(--accent-rgb),0.3)` | `rgba(var(--accent-rgb),0.2)` | `border-border-accent` |
| `--border-foreground` | `rgba(255,255,255,1)` | `rgba(0,0,0,1)` | Corner accents (theme-aware) |

### Typography

| Token | Value |
|-------|-------|
| `--font-display` | `'Space Grotesk', sans-serif` |
| `--font-body` | `'Inter', sans-serif` |

### Shape & Elevation

| Token | Value | Tailwind |
|-------|-------|----------|
| `--radius-sm` | `4px` | `rounded-sm` |
| `--radius` | `8px` | `rounded` |
| `--radius-md` | `12px` | `rounded-md` |
| `--radius-lg` | `16px` | `rounded-lg` |
| `--radius-xl` | `20px` | `rounded-xl` |
| `--radius-2xl` | `24px` | `rounded-2xl` |
| `--radius-3xl` | `32px` | `rounded-3xl` |
| `--shadow-sm` … `--shadow-card` | (existing) | (existing) |

---

## 3. File-by-File Change List

### globals.css
- Add `--foreground`, `--muted-foreground`, `--surface-rgb`, `--background-rgb`, `--text-rgb`, `--border-foreground`, `--ring`
- Fix `.card-glass`: `background: rgba(var(--surface-rgb), 0.5)`, `border: 1px solid var(--border-light)`
- Fix `.animated-border`: `border-radius: var(--radius-lg)` (replace `16px`)
- Replace `rgba(37, 99, 235, 0.1)` in `.section-badge` with `rgba(var(--accent-rgb), 0.1)`
- Light theme: add `--foreground`, `--border-foreground`, `--surface-rgb`, etc.
- Light header overrides: use `var(--surface)` instead of `#ffffff`

### tailwind.config.ts
- Add `foreground`, `muted-foreground` to colors
- Add `ring: 'var(--ring)'` for ring color
- Add `border-foreground` to borderColor

### app/page.tsx
- `bg-[#0A0A0B]` → `bg-background`
- `text-white` → `text-text`
- `text-gray-300` → `text-muted`
- `!text-white !border-white/30` → `!text-text !border-border-medium`
- `border-white/10` → `border-border-light`
- `hover:border-white` → `hover:border-border-foreground` (or keep for gradient card)
- `theme === 'dark' ? 'border-white' : 'border-black'` → `border-border-foreground`

### app/components/*
- Replace all `border-white/5` → `border-border`
- Replace all `border-white/10` → `border-border-light`
- Replace all `border-white/20` → `border-border-medium`
- Replace all `text-white` (on dark surfaces) → `text-text` where thematic
- Replace `text-white` (on accent buttons) → keep (accent buttons use `text-background` per btn-primary)
- `hover:bg-white/5` → `hover:bg-foreground/5` (add token) or `hover:bg-surface-light/50`
- `rounded-[2.5rem]` → `rounded-3xl` (closest token)
- `text-[10px]` → `text-xs` where acceptable, or add `--text-2xs` token
- Navigation dropdown: `border-white/10` → `border-border-light`
- Footer/SimpleFooter/AIReceptionistFooter: `border-white/5` → `border-border`

### app/components/ClientJourneyDemo.tsx
- Replace inline `rgba(239,68,68,...)` with CSS variable refs or add `--destructive-rgb` usage
- Replace `rgba(34,197,94,...)` — success is `#10B981` = rgb(16,185,129). Add `--success-rgb` if not present.
- Use `var(--destructive)` / `var(--success)` with opacity utilities where possible

### app/components/GlobalPresenceMap.tsx
- Replace `fill="rgba(37, 99, 235, 0.25)"` with token or pass via CSS variable
- Replace `#2563EB`, `#10B981`, `#FAFAFA`, `#fff` with token-backed values
- Use `stroke="var(--border-light)"`-style if SVG supports, or define map colors in globals

### app/ai-receptionist/page.tsx, app/custom-saas/page.tsx, app/solutions/page.tsx, app/case-studies/page.tsx
- `border-white` / `border-black` → `border-border-foreground`
- `text-white` on overlay sections → `text-text` (hero overlays)

### app/contact/page.tsx
- `border-white/10` → `border-border-light`

### app/blog/BlogContent.tsx, BlogPostContent.tsx
- `border-white/10`, `border-white/20` → `border-border-light`, `border-border-medium`
- `shadow-black/20` → `shadow-xl` or token

### content/blog/en.ts
- Inline table styles: replace `#f5f5f5`, `#ddd`, `#f9f9f9` with CSS classes in blog-content scope or use `var(--surface)`, `var(--border-light)` via class-based styling. **Note:** Content is in TS, not components; may need a wrapper class for tables.

---

## 4. Regression Test Checklist

- [ ] Home page renders correctly (dark + light theme)
- [ ] Hero section: background, text contrast, buttons
- [ ] Navigation: dropdown, mobile menu, borders
- [ ] Footer: borders, links
- [ ] Cards: hover states, borders, shadows
- [ ] Forms (contact): inputs, borders, focus states
- [ ] Blog: search, cards, post content, tables
- [ ] AI Receptionist page: hero, CTA, cards
- [ ] Case studies: hover, borders
- [ ] ClientJourneyDemo: green/red bands, labels
- [ ] GlobalPresenceMap: map colors, tooltips
- [ ] Theme toggle: light/dark switch works
- [ ] All pages: no visual regressions

---

## 5. Grep Patterns to Delete (Verification)

After refactor, these patterns should NOT appear (except in globals.css :root token definitions):

```bash
# Arbitrary hex/rgb in classNames
grep -r "bg-\[#" app/ components/ --include="*.tsx"
grep -r "text-\[#" app/ components/ --include="*.tsx"
grep -r "border-\[#" app/ components/ --include="*.tsx"
grep -r "shadow-\[" app/ components/ --include="*.tsx"

# Hard-coded Tailwind color names (gray, white, black for semantic use)
grep -r "text-gray-" app/ components/ --include="*.tsx"
grep -r "text-white" app/ components/ --include="*.tsx"  # except btn-primary children
grep -r "border-white/" app/ components/ --include="*.tsx"
grep -r "border-black" app/ components/ --include="*.tsx"
grep -r "bg-white/" app/ components/ --include="*.tsx"   # may allow for overlays
grep -r "hover:bg-black/" app/ components/ --include="*.tsx"

# Inline hex in style={}
grep -r "style=.*#[0-9A-Fa-f]" app/ components/ --include="*.tsx"
grep -r "rgba([0-9]" app/ components/ --include="*.tsx"
```

**Allowlist:** `globals.css` may contain hex in `:root` and `[data-theme="light"]`. SVG `fill`/`stroke` in static attributes may need to stay if no CSS variable injection.

---

## 6. Implementation Order

1. **globals.css** — Add tokens, fix invalid CSS
2. **tailwind.config.ts** — Map new tokens
3. **app/page.tsx** — Landing fixes
4. **app/components/** — All shared components
5. **app/** pages — Remaining pages
6. **content/blog** — Table styling (if feasible)
7. **ClientJourneyDemo, GlobalPresenceMap** — Dynamic style tokens
8. **Verify** — Run grep, manual check

---

## 7. Implementation Complete (Status)

**Completed:** All app components and pages have been refactored to use token-backed Tailwind classes. Build passes.

**Remaining (optional):** `content/blog/en.ts` contains inline table styles (`#f5f5f5`, `#ddd`, etc.). These are in content/HTML; to tokenize, either (a) replace inline styles with `class="blog-content"` table classes (requires content edits), or (b) add `!important` overrides in `.blog-content table` rules. The current `.blog-content table` rules already use `var(--border-light)`, `var(--surface)` — inline styles in content will override. Consider a follow-up content migration.
