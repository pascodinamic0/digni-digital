# Proof Visual Art Direction

Luxury editorial art for Digni marketing proof sections. Locked to [Global Design Authority](../.cursor/rules/global-design-authority.mdc) and [LOGO_COLOR_SPECIFICATIONS.md](../LOGO_COLOR_SPECIFICATIONS.md).

## Visual principle

Every image **proves the adjacent copy**—not decorates it. If the headline says "unanswered inquiries walk away," the image shows an empty reception desk or glowing phone at night.

## Palette

| Token | Use |
|-------|-----|
| `#0A0A0B` | Deep background, negative space |
| `--brand-blue` / `#2563EB` | Rim light, UI glow, accent |
| `--success` / logo green | Positive outcome hint only |
| White at 10–15% opacity | Frame borders, chips |

**No decorative purple.** No rainbow gradients.

## Mood

- Cinematic shallow depth-of-field
- Subtle film grain (match `.proof-visual-noise` in CSS)
- Soft rim light from brand blue
- Premium exclusivity—not stock-photo cheerfulness

## Subject matter by claim type

| Claim | Visual subject |
|-------|----------------|
| Growth exposure | Unanswered phone, empty reception, after-hours clinic |
| Talent exposure | Graduate with certificate, empty portfolio, interview room |
| Operations exposure | Copy-paste between spreadsheets, sticky notes, dual monitors |
| Product proof | Real UI screenshots in `ProofVisualFrame`—not AI for dashboards |
| Case study | Operational environment (school office, clinic waiting area) |
| Process | React diagram in frame—not raster |

## Hard rules

1. **No AI-generated Digni or partner logos** — composite official assets in React if needed
2. **No readable text in images** — overlay copy lives in i18n via React
3. **No fabricated stats in images** — numbers only in `StatProofPanel` from verified copy
4. **Locale-neutral raster** — all readable strings in `app/i18n/proofVisuals.ts`

## Aspect ratios

| Variant | Ratio | Use |
|---------|-------|-----|
| Editorial | 4:5 | Loss/outcome scenes |
| Dashboard | 16:10 | Product screenshots |
| Stat | 4:5 | Stat panels inside frame |
| Diagram | 16:10 | Process / flow diagrams |

## Prompt template

```
[Specific operational scene showing the loss described in proofIntent]
Environment: [African clinic / school admin office / service business — match persona]
Lighting: cinematic rim light, dark premium atmosphere, shallow depth of field
Colors: deep black background, subtle brand blue (#2563EB) accent glow, hint of green (#22C55E) for positive elements only
Style: luxury editorial photography, subtle film grain, exclusive feel
Constraints: no logos, no readable text, no watermarks, no people's faces in sharp identifiable focus unless stock-licensed
```

## Generation workflow

1. Read `proofIntent` from `lib/proof-visuals/*.ts` manifest entry
2. Draft prompt from template above
3. Generate (Cursor GenerateImage or external tool)
4. QA against checklist below
5. Optimize to WebP if PNG > 200KB
6. Save to `public/images/proof/{page}/{name}.png`
7. Path already registered in `lib/proof-visuals/assets.ts`

## QA checklist (per asset)

- [ ] Proves the specific `proofIntent` (1:1 test with copy hidden)
- [ ] Palette matches brand (no purple, no off-brand colors)
- [ ] No logos or readable text in raster
- [ ] No invented statistics or client names in image
- [ ] Grain and lighting match inbound reference set
- [ ] `alt` and overlay copy exist in all 5 locales in `proofVisuals.ts`

## Reference assets

Best existing precedent: `public/images/ai-receptionist/inbound/` — cinematic inbound tactic shots.

Seed script copies these to `public/images/proof/` until AI replacements are approved: `npx tsx scripts/setup-proof-visual-assets.ts`

## Overlay copy

Use `ProofVisualFrame` props fed from `getProofVisualCopy(language, i18nKey)`:

- `chip` — category badge (Exposure, Proof, Process)
- `channel` — product line when relevant
- `overlayLine` — one-line proof restatement (cost-of-inaction voice)
