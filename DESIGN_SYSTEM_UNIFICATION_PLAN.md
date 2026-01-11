# Design System Unification Plan
## Complete Audit & Implementation Strategy

---

## Summary of Approach

This document outlines a systematic approach to unify the entire application's visual design, using the Home/Landing page (`app/page.tsx`) as the single source of truth. The goal is to eliminate all hard-coded visual values and ensure every component uses centralized design tokens.

### Core Principles
1. **Landing page is the source of truth** - All design decisions extracted from `app/page.tsx`
2. **Zero hard-coded values** - Remove all hex/rgb/hsl, arbitrary Tailwind values, inline color styles
3. **Token-first approach** - All styling via CSS variables and Tailwind theme mappings
4. **No UX changes** - Only normalize styling, preserve all functionality and layouts

---

## Phase 1: Audit Results

### Current Token System Analysis

**✅ Existing Infrastructure:**
- `app/globals.css` contains comprehensive CSS variable tokens
- `tailwind.config.ts` maps theme values to CSS variables
- Dark/Light theme support via `[data-theme]` selector

**❌ Issues Found:**
1. Hard-coded gradient colors in `ThemeToggle.tsx` (lines 26, 35)
2. Tailwind color utilities (e.g., `text-slate-700`, `text-amber-500`) instead of semantic tokens
3. Inline opacity styles (acceptable per rules, but should be reviewed)
4. Some components may not fully use token system

### Token Extraction from Landing Page

From `app/page.tsx`, the following design patterns are established as the source of truth:

#### Color Usage Patterns:
- **Primary Actions**: `bg-accent`, `text-background` (buttons)
- **Secondary Actions**: `bg-transparent`, `border-border-medium`, `text-text`
- **Text Hierarchy**: `text-text` (primary), `text-muted` (secondary), `text-muted-dark` (tertiary)
- **Accent Colors**: `text-accent`, `bg-accent/10`, `border-accent/30`
- **Semantic Colors**: `text-success`, `text-destructive`, `text-info`
- **Surfaces**: `bg-surface`, `bg-surface-light`, `bg-background`
- **Borders**: `border-border`, `border-border-light`, `border-border-medium`

#### Typography Patterns:
- **Display Font**: `font-display` (Outfit) for headings
- **Body Font**: Default (DM Sans) for body text
- **Heading Sizes**: `text-4xl md:text-5xl lg:text-6xl` (h1), `text-3xl md:text-4xl` (h2), `text-xl md:text-2xl` (h3)
- **Weights**: `font-bold` (headings), `font-semibold` (subheadings), `font-medium` (labels)

#### Spacing Patterns:
- **Section Padding**: `py-24` (standard), `py-32` (CTA sections)
- **Container**: `max-w-7xl mx-auto px-6`
- **Card Padding**: `p-8` (standard), `p-6` (compact), `p-12 md:p-16` (hero cards)
- **Gaps**: `gap-4` (buttons), `gap-8` (grid items), `gap-12` (sections)

#### Border Radius:
- **Cards**: `rounded-lg` (var(--radius-lg) = 16px)
- **Buttons**: `rounded-xl` (var(--radius-xl) = 20px) or `rounded` (var(--radius) = 8px)
- **Badges/Pills**: `rounded-full`
- **Icons**: `rounded-xl` or `rounded-2xl`

#### Shadows:
- **Cards**: `shadow-card` (default), `hover:shadow-2xl`
- **Buttons**: `hover:shadow-lg`
- **Glow Effects**: `glow-accent`, `shadow-accent-hover`

---

## Phase 2: Token System

### Complete Token Table

#### Base Colors
| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--background` | `#0A0A0B` | `#F5F7FA` | Page background |
| `--surface` | `#141416` | `#FFFFFF` | Card/surface backgrounds |
| `--surface-light` | `#1C1C1F` | `#F9FAFB` | Elevated surfaces |
| `--text` | `#FAFAFA` | `#1E293B` | Primary text |
| `--muted` | `#E4E4EA` | `#64748B` | Secondary text |
| `--muted-dark` | `#D1D1DB` | `#475569` | Tertiary text |

#### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#2563EB` | Primary brand color (blue) |
| `--accent-light` | `#3B82F6` | Hover states |
| `--accent-rgb` | `37, 99, 235` | RGBA usage |

#### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--success` | `#10B981` | Success states, positive metrics |
| `--success-light` | `#34D399` | Success hover |
| `--destructive` | `#EF4444` | Errors, warnings, critical states |
| `--destructive-light` | `#F87171` | Destructive hover |
| `--warning` | `#F59E0B` | Warning states |
| `--warning-light` | `#FBBF24` | Warning hover |
| `--info` | `#3B82F6` | Informational states |
| `--info-light` | `#60A5FA` | Info hover |

#### Border Colors
| Token | Dark | Light | Usage |
|-------|------|-------|-------|
| `--border` | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.05)` | Default borders |
| `--border-light` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` | Subtle borders |
| `--border-medium` | `rgba(255,255,255,0.2)` | `rgba(0,0,0,0.15)` | Medium borders |
| `--border-accent` | `rgba(var(--accent-rgb),0.3)` | `rgba(var(--accent-rgb),0.2)` | Accent borders |
| `--border-accent-light` | `rgba(var(--accent-rgb),0.5)` | `rgba(var(--accent-rgb),0.3)` | Accent hover |

#### Shadows
| Token | Dark | Light | Usage |
|-------|------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | `0 1px 2px rgba(0,0,0,0.05)` | Small elevation |
| `--shadow` | `0 4px 6px rgba(0,0,0,0.1)` | `0 4px 6px rgba(0,0,0,0.07)` | Default elevation |
| `--shadow-md` | `0 10px 15px rgba(0,0,0,0.1)` | `0 10px 15px rgba(0,0,0,0.08)` | Medium elevation |
| `--shadow-lg` | `0 10px 30px rgba(var(--accent-rgb),0.3)` | `0 10px 30px rgba(var(--accent-rgb),0.15)` | Large elevation |
| `--shadow-xl` | `0 20px 40px rgba(0,0,0,0.3)` | `0 20px 40px rgba(0,0,0,0.12)` | Extra large |
| `--shadow-2xl` | `0 20px 50px rgba(var(--accent-rgb),0.4)` | `0 20px 50px rgba(var(--accent-rgb),0.2)` | Maximum elevation |
| `--shadow-accent` | `0 0 40px rgba(var(--accent-rgb),0.2)` | `0 0 40px rgba(var(--accent-rgb),0.15)` | Accent glow |
| `--shadow-accent-hover` | `0 0 60px rgba(var(--accent-rgb),0.3)` | `0 0 60px rgba(var(--accent-rgb),0.2)` | Accent hover glow |
| `--shadow-card` | Complex multi-shadow | Complex multi-shadow | Card elevation |

#### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Small elements |
| `--radius` | `8px` | Default (buttons) |
| `--radius-md` | `12px` | Medium elements |
| `--radius-lg` | `16px` | Cards |
| `--radius-xl` | `20px` | Large cards |
| `--radius-2xl` | `24px` | Extra large |
| `--radius-3xl` | `32px` | Hero sections |
| `--radius-full` | `9999px` | Pills/badges |

#### Typography
| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Outfit', sans-serif` | Headings, titles |
| `--font-body` | `'DM Sans', sans-serif` | Body text |

---

## Phase 3: File-by-File Change List

### Core System Files (Already Complete ✅)
1. **app/globals.css** - ✅ Token system exists and is comprehensive
2. **tailwind.config.ts** - ✅ Maps to CSS variables correctly

### Components Requiring Updates

#### High Priority (Hard-coded Values Found)

1. **app/components/ThemeToggle.tsx**
   - **Issue**: Hard-coded gradient colors `#E0E7FF`, `#C7D2FE`, `#1E3A8A`, `#3B82F6`
   - **Fix**: Create CSS variables for theme toggle gradients or use semantic tokens
   - **Change**: Replace inline gradient styles with CSS variable references
   - **Lines**: 26, 35
   - **Also**: Replace `text-slate-700`, `text-amber-500` with semantic tokens

2. **app/components/Navigation.tsx**
   - **Issue**: Inline opacity styles (acceptable, but should review)
   - **Change**: Opacity values are dynamic, acceptable per rules
   - **Lines**: 77, 78

3. **app/components/Footer.tsx**
   - **Issue**: Inline opacity styles (acceptable)
   - **Change**: No changes needed (dynamic values)

#### Medium Priority (Review Token Usage)

4. **All page components** (app/**/page.tsx)
   - **Action**: Verify all use tokens (spot check completed - most are good)
   - **Focus**: Ensure no arbitrary Tailwind values remain

5. **All component files** (app/components/*.tsx)
   - **Action**: Verify token usage throughout
   - **Focus**: Check for any missed hard-coded values

---

## Phase 4: Implementation Steps

### Step 1: Enhance Token System
- [ ] Add theme toggle gradient tokens to `globals.css`
- [ ] Verify all semantic colors are mapped in Tailwind
- [ ] Ensure border color utilities are comprehensive

### Step 2: Fix ThemeToggle Component
- [ ] Replace hard-coded gradient colors with tokens
- [ ] Replace `text-slate-700` with semantic token
- [ ] Replace `text-amber-500` with semantic token

### Step 3: Comprehensive Audit
- [ ] Search for all arbitrary Tailwind values (`bg-[`, `text-[`, etc.)
- [ ] Search for hard-coded hex colors in className attributes
- [ ] Verify all components use token-based classes

### Step 4: Verification
- [ ] Run grep patterns to verify no hard-coded values remain
- [ ] Visual regression check
- [ ] Test both light and dark themes

---

## Phase 5: Verification Checklist

### ✅ Verification Patterns

Run these commands to verify completion:

```bash
# Find arbitrary Tailwind values (should be minimal - only in ThemeToggle currently)
grep -r "bg-\[" app/ --exclude-dir=node_modules
grep -r "text-\[" app/ --exclude-dir=node_modules
grep -r "border-\[" app/ --exclude-dir=node_modules
grep -r "shadow-\[" app/ --exclude-dir=node_modules
grep -r "rounded-\[" app/ --exclude-dir=node_modules

# Find hard-coded hex colors in JSX/TSX (should only show CSS variable definitions)
grep -r "#[0-9A-Fa-f]\{6\}" app/ --exclude-dir=node_modules | grep -v "globals.css"

# Find Tailwind color utilities (should only show semantic tokens)
grep -r "text-slate-\|text-amber-\|text-blue-\|text-red-\|text-green-\|text-yellow-\|bg-slate-\|bg-amber-\|bg-blue-\|bg-red-\|bg-green-\|bg-yellow-" app/ --exclude-dir=node_modules

# Find hard-coded rgba/hsl values in className (should be empty)
grep -r "rgba(" app/ --exclude-dir=node_modules | grep -v "globals.css" | grep -v "style="
```

### Acceptable Exceptions
1. **CSS Variable Definitions**: Hex values in `globals.css` are the source of truth
2. **Dynamic Inline Styles**: Opacity values, transform values, animation values
3. **SVG Attributes**: Stop colors using CSS variables (modern browser support)

---

## Phase 6: Regression Testing

### Visual Regression Checklist
- [ ] Landing page renders correctly (all sections)
- [ ] Navigation works in both themes
- [ ] Theme toggle functions correctly
- [ ] All buttons styled consistently
- [ ] Cards have consistent styling
- [ ] Typography scales correctly
- [ ] Colors match in both light/dark themes
- [ ] Shadows and elevations are consistent
- [ ] Border radius is consistent
- [ ] Spacing is consistent

### Functional Testing
- [ ] All interactive elements work
- [ ] Theme switching works
- [ ] No console errors
- [ ] All pages load correctly

---

## Notes

- This is a **styling-only refactor** - no features or layouts are changed
- All changes maintain backward compatibility
- The token system is already well-established, so this is primarily verification and cleanup
- Focus on eliminating remaining hard-coded values, not redesigning

---

## Estimated Impact

- **Files to Review**: ~29 component/page files
- **Files Requiring Changes**: ~2-5 files (ThemeToggle + any missed issues)
- **Risk Level**: Low (token system already exists)
- **Effort**: Medium (systematic audit and cleanup)
