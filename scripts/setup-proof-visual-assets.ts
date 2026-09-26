#!/usr/bin/env npx tsx
/**
 * Seeds public/images/proof/ from existing cinematic inbound assets.
 * Run: npx tsx scripts/setup-proof-visual-assets.ts
 *
 * Replace seeded files with AI-generated editorial art per docs/visual-proof/ART_DIRECTION.md
 */
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = join(process.cwd(), 'public/images/proof')
const INBOUND = join(process.cwd(), 'public/images/ai-receptionist/inbound')
const MOBILE = join(process.cwd(), 'public/images/Download/Mobile App.png')

type Mapping = { dest: string; src: string }

const mappings: Mapping[] = [
  { dest: 'home/exposure-three-leaks.png', src: `${INBOUND}/inbound-stage-atmosphere.png` },
  { dest: 'home/coverage-growth.png', src: `${INBOUND}/inbound-tactic-website-chat.png` },
  { dest: 'home/coverage-talent.png', src: `${INBOUND}/inbound-tactic-event-booth.png` },
  { dest: 'home/coverage-operations.png', src: `${INBOUND}/inbound-hub-illustration.png` },
  { dest: 'home/proof-implementations.png', src: `${INBOUND}/inbound-tactic-trust-reviews.png` },
  { dest: 'home/process-installer.png', src: `${INBOUND}/inbound-tactic-partner-b2b.png` },
  { dest: 'ai-receptionist/problem-unanswered.png', src: `${INBOUND}/inbound-tactic-front-desk.png` },
  { dest: 'ai-receptionist/proof-case-study.png', src: `${INBOUND}/inbound-tactic-google-maps.png` },
  { dest: 'ai-receptionist/mobile-app.png', src: MOBILE },
  { dest: 'ai-receptionist/inbound-flow.png', src: `${INBOUND}/inbound-hub-illustration.png` },
  { dest: 'future-ready/skills-gap.png', src: `${INBOUND}/inbound-tactic-reception-qr.png` },
  { dest: 'future-ready/outcomes-portfolio.png', src: `${INBOUND}/inbound-tactic-event-booth.png` },
  { dest: 'future-ready/case-study-school.png', src: `${INBOUND}/inbound-tactic-front-desk.png` },
  { dest: 'future-ready/career-paths.png', src: `${INBOUND}/inbound-tactic-meta-lead.png` },
  { dest: 'agentic/copy-paste-workflow.png', src: `${INBOUND}/inbound-tactic-google-search.png` },
  { dest: 'agentic/product-suite.png', src: `${INBOUND}/inbound-hub-illustration.png` },
  { dest: 'agentic/case-study-systems.png', src: `${INBOUND}/inbound-tactic-partner-b2b.png` },
  { dest: 'agentic/agentic-flow.png', src: `${INBOUND}/inbound-stage-atmosphere.png` },
  { dest: 'about/our-story.png', src: `${INBOUND}/inbound-stage-atmosphere.png` },
  { dest: 'about/our-approach.png', src: `${INBOUND}/inbound-tactic-partner-b2b.png` },
  { dest: 'about/install-systems.png', src: `${INBOUND}/inbound-hub-illustration.png` },
  { dest: 'solutions/lead-generation.png', src: `${INBOUND}/inbound-tactic-meta-lead.png` },
  { dest: 'solutions/ops-efficiency.png', src: `${INBOUND}/inbound-tactic-google-search.png` },
  { dest: 'solutions/customer-experience.png', src: `${INBOUND}/inbound-tactic-instagram-dm.png` },
  { dest: 'solutions/client-results.png', src: `${INBOUND}/inbound-tactic-trust-reviews.png` },
  { dest: 'solutions/before-after.png', src: `${INBOUND}/inbound-tactic-retargeting.png` },
  { dest: 'products/proposal-agent.png', src: `${INBOUND}/inbound-tactic-website-chat.png` },
  { dest: 'products/social-proof.png', src: `${INBOUND}/inbound-tactic-trust-reviews.png` },
  { dest: 'products/coming-soon.png', src: `${INBOUND}/inbound-stage-atmosphere.png` },
  { dest: 'digni/diagnostic-chat.png', src: `${INBOUND}/inbound-tactic-whatsapp-referral.png` },
  { dest: 'digni/assessment-result.png', src: `${INBOUND}/inbound-tactic-google-maps.png` },
  { dest: 'digni/booking-calendar.png', src: `${INBOUND}/inbound-tactic-google-search.png` },
]

let copied = 0
for (const { dest, src } of mappings) {
  const out = join(ROOT, dest)
  mkdirSync(dirname(out), { recursive: true })
  if (!existsSync(src)) {
    console.warn(`Skip (missing source): ${src}`)
    continue
  }
  copyFileSync(src, out)
  copied++
}

console.log(`Seeded ${copied} proof visual assets under public/images/proof/`)
