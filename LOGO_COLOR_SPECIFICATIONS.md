# Logo & website color specifications

Source of truth for brand tokens: [`app/globals.css`](app/globals.css) (`:root`). Colors below match **sampling from** `public/Icon Logo DD.png` (opaque pixels, excluding white background). **Purple is not part of the Digni brand**; legacy `--purple` exists only for non-brand UI compatibility.

## Primary (cyan / teal) — `--brand-blue` / `--accent` / `--info`

- **Hex:** `#2F9AC0`
- **RGB:** `47, 154, 192`
- **Usage:** Primary brand, CTAs, links, info emphasis, gradients with green

## Light / highlight — `--brand-blue-light` / `--accent-light` / `--info-light`

- **Hex:** `#6DD4E8`
- **Usage:** Lighter accents, hover states, toggle gradients (with primary)

## Deep teal — `--brand-blue-dark`

- **Hex:** `#03598E`
- **Usage:** Dark end of blue gradients, depth (e.g. chat widget, funnel active states)

## Primary green — `--success`

- **Hex:** `#3AAE30`
- **RGB:** `58, 174, 48`
- **Usage:** Success states, growth, positive metrics, green end of brand gradients

## Light green — `--success-light`

- **Hex:** `#7DD45B`
- **Usage:** Highlights, lighter success accents

## Brand pairing (design intent)

- **Logo:** Bluish + greenish (no purple).
- **UI:** Pair **accent** (cyan-teal) with **success** (green) for hero sections, mesh backgrounds, and CTAs.
- **Tailwind:** Use semantic classes (`bg-accent`, `text-success`, `border-success/30`, etc.) mapped in [`tailwind.config.ts`](tailwind.config.ts) — avoid hardcoded Tailwind palette colors (`blue-500`, `emerald-500`, …) for Digni-owned chrome.

## Exceptions (intentional non-brand colors)

- **UN SDG goals** on the about page: official SDG palette.
- **Third-party channel demos** (e.g. review platforms): may use recognizable platform colors for bars; Digni chrome still uses tokens.
- **Blog HTML tables** in content files: neutral grays for table chrome unless refactored to shared styles.
