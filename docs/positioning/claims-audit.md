# Claims audit — public freeze

Conservative proof policy (2026-08-18). Public pages keep named, attributable evidence only. Unverified or contradictory numbers were removed from heroes and scoreboards. Restore a line only after Pascal confirms source, date, and wording.

## May remain (used honestly)

| Claim | Source | Notes |
|---|---|---|
| Partner logo count | `app/config/clients.config.ts` | Count logos. Do not say 150+ businesses. |
| Fremo Medical & Birth Center | Case studies page | Named client. Keep only metrics you can attribute. |
| Shep Engineering | Case studies page | Named client. |
| GS Laricharde | Future Ready / case studies | **In progress.** Do not present 85% employment or 150% salary as proven results. |
| Africa Vibe Coders and other logos | clients config | Logo presence ≠ case study. |
| Live products | AMS, SwiftDrop, Kabinda Lodge, DispatchFlow, Proposal Agent, DigniGuide | Only if the URL still works. |
| Operational promises | 2-minute fit check, calendar booking | Process, not ROI. |

## Frozen until verified (removed from public heroes/scoreboards)

| Claim | Where it lived | What we need to restore |
|---|---|---|
| 300% lead conversion | Home stats, coverage cards, AI Employee proof, blog | Named client, period, definition of conversion |
| 98% client satisfaction | Home, Future Ready hero chips, products, contact, about | Survey method, n, date |
| 10,000+ leads/month | Home AI Employee card | Named volume + period |
| $62B missed-leads | Home exposure section (`MISSED_LEADS_USD`) | Do not use industry TAM as Digni proof |
| 85% graduate employment as **proven** | Home, Future Ready, about, blog | Cohort, school, date. GS Laricharde is still in progress |
| 150% salary increase | Home case chips, Future Ready | Same as above |
| Unnamed Regional Medical Center / Operations Director | Home, AI Employee case study | Real name + permission, or keep anonymous without fake title |
| HealthTrack Pro $200k / 95% / HIPAA | Agentic page | Named client + permission |
| Funnel model 95 close + 23 referrals as scoreboard | AI Employee | Keep as illustration only, labeled as a model |
| Demo dashboard 47 / 23 / 12 / 98% | AI Employee product demos | Label as demonstration, not client results |
| 150+ businesses | Home hero stat | Logo count is ~20 |
| 15 qualified appointments in 30 days or work free | AI Employee guarantee | Legal approval + how it is measured |
| 18 hours vs 48 hours live | AI Employee case vs time-to-value | One operational promise, consistently |
| Generic App Store / Play URLs | AI Employee mobile banner | Real listing URLs or remove badges |
| TaskFlow Pro / ContentCraft AI as destinations | Agentic portfolio | Confirm live client systems or mark as internal/demo |

## Chatbot / SEO leftovers

`lib/agent-readiness.ts` facts and marketing metadata were rewritten in this pass. Blog article bodies remain out of scope. Assessment chrome is localized in all five languages; question prompts and choice labels are fully translated in **French**. Spanish, German, and Arabic assessments use localized intro/result chrome with the same English question set (same claims and scoring).

## GoHighLevel

Site-wide LeadConnector widget copy is not in this repo. Update it in the GHL dashboard so it does not say “AI chatbot,” or hide the widget if it contradicts positioning.
