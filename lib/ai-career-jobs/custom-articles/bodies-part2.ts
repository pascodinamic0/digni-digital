import type { AiCareerJob } from '../types'
import { coverFigure, ctaFooter, ext, refs } from './shared'
import {
  faqSection,
  learningPath,
  mistakesSection,
  portfolioProof,
  practiceExercise,
  pricingSection,
  promptsSection,
  roleIntro,
  toolsSection,
} from './shared-sections'

type BodyBuilder = (job: AiCareerJob) => string

export const BODIES_PART2: Record<string, BodyBuilder> = {
  'podcast-production-director': (job) => `
      ${roleIntro(job, 'how to turn <strong>one recording into six publishable assets</strong>—the assembly checklist working hosts outsource.')}
      ${coverFigure(job, 'Podcast directors run a content factory, not a single MP3 drop.')}
      <h3>Why hosts pay</h3>
      <p>${job.hireReason} You save ${job.timeSaved} per episode and multiply reach without extra recording sessions.</p>
      <h3>Six-asset assembly checklist</h3>
      <ol>
        <li><strong>Master audio</strong> — edited MP3, chapters, ID3 tags (${job.tools[0]})</li>
        <li><strong>Discovery copy</strong> — SEO title, 160-char description, keywords</li>
        <li><strong>Show notes</strong> — timestamped chapters, links, guests</li>
        <li><strong>Audiograms</strong> — 3 clips (${job.tools[3]}) for LinkedIn/IG</li>
        <li><strong>Newsletter intro</strong> — 150 words driving to full episode</li>
        <li><strong>Social quotes</strong> — 5 pull lines sized per platform</li>
      </ol>
      <h3>Edit standards</h3>
      <ul>
        <li>Remove filler words and long pauses (keep breath natural)</li>
        <li>Consistent intro/outro (2–5 sec music legal for client)</li>
        <li>Chapter markers every major topic shift</li>
        <li>LUFS target agreed with client (−16 podcast common)</li>
      </ul>
      <h3>Workflow timing</h3>
      <p>Record in ${job.tools[1]} → sync → ${job.tools[0]} edit → ${job.tools[2]} for notes/quotes → export pack within 48h SLA.</p>
      ${practiceExercise('One public podcast episode remix', [
        'Use a Creative Commons episode or your own interview.',
        'Deliver all six assets in a Drive folder.',
        'Write a 1-page “production spec” you reuse for clients.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". Master one DAW/editor before adding clip tools.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Folder link with six assets', 'Before/after audio clip (30s)', 'Turnaround time on spec'])}
      ${pricingSection(job, [
        { name: 'Episode lite', scope: 'Edit + notes', priceHint: '$150–300' },
        { name: 'Full assembly', scope: '6 assets', priceHint: '$350–700' },
        { name: 'Show partner', scope: 'Weekly episodes', priceHint: '$1.2k–3k/mo' },
      ])}
      ${mistakesSection([
        'Delivering only audio with no show notes',
        'Audiograms without subtitles',
        'Inconsistent loudness episode to episode',
        'Copyrighted music without license',
      ])}
      ${faqSection([
        { q: 'Need broadcast engineering?', a: 'Start with clean speech edits; level up on demand.' },
        { q: 'Video podcasts?', a: 'Add vertical clips using same transcript map.' },
        { q: 'Best clients?', a: 'B2B founders, coaches, niche experts launching seasons.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'ecommerce-visual-merchandiser': (job) => `
      ${roleIntro(job, 'how to run a <strong>20-SKU catalog sprint</strong>—images, lifestyle composites, and listing copy that follow marketplace rules.')}
      ${coverFigure(job, 'Merchandisers lift conversion when catalogs look enterprise-grade.')}
      <h3>Why sellers hire you</h3>
      <p>${job.hireReason} Shooting 200 SKUs is impossible; AI + QC delivers ${job.timeSaved} on refresh cycles.</p>
      <h3>Sprint phases</h3>
      <ol>
        <li><strong>Intake</strong> — dimensions, materials, prohibited claims, brand colors</li>
        <li><strong>Main image</strong> — white background per ${ext('Amazon image requirements', 'https://sellercentral.amazon.com/help/hub/reference/G1881')}</li>
        <li><strong>Lifestyle</strong> — one scene template; swap product via ${job.tools[0]} / ${job.tools[2]}</li>
        <li><strong>Copy pack</strong> — title, 5 bullets, description, FAQ (${job.tools[3]})</li>
        <li><strong>QC</strong> — no misleading scale, no banned superlatives, color accuracy</li>
      </ol>
      <h3>Conversion tips</h3>
      <ul>
        <li>Main image: product fills 85% frame</li>
        <li>Bullets lead with outcomes, not features only</li>
        <li>A+ content story for Amazon Brand Registry clients</li>
      </ul>
      ${practiceExercise('20-SKU demo store', [
        'Use public domain or client-provided samples.',
        'Deliver before/after for 5 hero SKUs.',
        'Document QC reject reasons.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". " +  job.tools[1] + " Magic for Shopify-native flows.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Grid of 20 mains + 5 lifestyles', 'Listing copy doc', 'QC checklist signed'])}
      ${pricingSection(job, [
        { name: 'SKU batch', scope: '20 SKUs image+copy', priceHint: '$400–900' },
        { name: 'Hero refresh', scope: 'Top 10 performers', priceHint: '$250–600' },
        { name: 'Store partner', scope: 'Monthly new SKUs', priceHint: '$800–2k/mo' },
      ])}
      ${mistakesSection([
        'Fake reflections that look CGI',
        'Wrong size context (tiny product)',
        'Keyword-stuffed titles violating policy',
        'Skipping mobile thumbnail test',
      ])}
      ${faqSection([
        { q: 'Shopify vs Amazon?', a: 'Learn one marketplace deeply first; rules differ.' },
        { q: 'Legal risk?', a: 'Never alter product color/material; disclose AI enhancement if required.' },
        { q: 'Proof?', a: 'CTR/conversion if client shares; else professional grid.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'presentation-automation-specialist': (job) => `
      ${roleIntro(job, 'the <strong>12-slide investor narrative arc</strong> from messy notes—ready for Gamma or Beautiful.ai.')}
      ${coverFigure(job, 'Decks are won on story structure before they are won on design.')}
      <h3>Slide-by-slide arc</h3>
      <ol>
        <li>Hook stat — why listen now</li>
        <li>Problem — urgent pain</li>
        <li>Why now — market shift</li>
        <li>Solution — one sentence + visual</li>
        <li>Demo — show don’t tell</li>
        <li>Business model — how money moves</li>
        <li>Traction — metrics</li>
        <li>Market — size method stated</li>
        <li>Moat — defensibility</li>
        <li>Team — why you</li>
        <li>Roadmap — next 18 months</li>
        <li>Ask — specific use of funds</li>
      </ol>
      <p>Each slide: headline ≤7 words, 3 bullets max, visual suggestion, 30-second speaker notes. Founders lose deals on slide 7 when story jumps—your arc prevents that.</p>
      <h3>48-hour deck rescue process</h3>
      <p>Hour 0–4: intake notes + audience. Hour 4–12: arc in doc. Hour 12–24: AI draft in ${job.tools[0]}. Hour 24–40: human tighten. Hour 40–48: client rehearsal Loom.</p>
      ${practiceExercise('Rebuild a famous deck structure', [
        'Take a public pitch (video) and reverse-outline slides.',
        'Rebuild in your arc without copying design.',
        'Compare narrative flow to original.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". " +  job.tools[3] + " for rewriting messy founder notes.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['PDF arc + sample slides', 'Founder testimonial on clarity', 'Before/after outline'])}
      ${pricingSection(job, [
        { name: 'Deck rescue', scope: '≤12 slides, 48h', priceHint: '$400–900' },
        { name: 'Sales deck', scope: 'Customer-facing story', priceHint: '$600–1.5k' },
        { name: 'Fundraise pack', scope: 'Deck + appendix + script', priceHint: '$1.5k–4k' },
      ])}
      ${mistakesSection([
        'Wall of text slides',
        'No clear ask on final slide',
        'Vanity metrics without context',
        'Design before narrative',
      ])}
      ${faqSection([
        { q: 'Replace designers?', a: 'You front-load story; designers polish brand later.' },
        { q: 'Confidential data?', a: 'NDA + redacted samples in portfolio.' },
        { q: 'Busy season?', a: 'Fundraise cycles Q1/Q3—market early.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'copy-qa-verification-specialist': (job) => `
      ${roleIntro(job, 'a <strong>compliance preflight workflow</strong> for AI-generated marketing in finance, health, education, and influencer campaigns.')}
      ${coverFigure(job, 'Verification is insurance—one bad claim costs more than a year of fees.')}
      <h3>Why brands hire</h3>
      <p>${job.hireReason} Speed without verification creates regulatory and reputation risk. ${job.timeSaved} is really risk reduction at scale.</p>
      <h3>Preflight categories</h3>
      <ul>
        <li><strong>Substantiation</strong> — every claim traceable</li>
        <li><strong>Disclosures</strong> — ${ext('FTC endorsement rules', 'https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers')}</li>
        <li><strong>Comparatives</strong> — “better than” needs evidence</li>
        <li><strong>Health/finance</strong> — no implied cures or guaranteed returns</li>
        <li><strong>Privacy</strong> — no PII in examples</li>
        <li><strong>AI hallucinations</strong> — stats, citations, fake testimonials</li>
      </ul>
      <h3>Workflow</h3>
      <p>Draft scan with ${job.tools[0]} → research flags with ${job.tools[1]} → human sign-off checklist → versioned PDF log for legal.</p>
      ${practiceExercise('Red-team a landing page', [
        'Take an AI-generated health or finance page (fictional).',
        'Produce marked-up PDF with severity levels.',
        'Write corrected version.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". Checklists beat tools alone.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Redacted preflight report', 'Checklist template', 'Industry vertical you specialize in'])}
      ${pricingSection(job, [
        { name: 'Page preflight', scope: 'One URL/copy doc', priceHint: '$150–400' },
        { name: 'Campaign pack', scope: 'Email + ads + landing', priceHint: '$500–1.2k' },
        { name: 'Retainer', scope: 'All AI copy before publish', priceHint: '$1k–3k/mo' },
      ])}
      ${mistakesSection([
        'Approving without primary sources',
        'One-size checklist for all industries',
        'Missing influencer disclosure on social',
        'Letting AI add fake customer quotes',
      ])}
      ${faqSection([
        { q: 'Lawyer replacement?', a: 'No—operational first pass; legal reviews final high-risk.' },
        { q: 'Vertical to pick?', a: 'One: fintech, clinic, edtech, supplements.' },
        { q: 'Liability?', a: 'Clear SOW: advisory QA, not legal counsel.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'newsletter-growth-strategist': (job) => `
      ${roleIntro(job, '<strong>subject-line science and weekly issue structure</strong> for newsletters that grow owned audience—not generic “email tips.”')}
      ${coverFigure(job, 'Email still prints ROI when strategy and testing discipline exist.')}
      <h3>Why founders hire</h3>
      <p>${job.hireReason} You remove writer’s block and ship weekly with ${job.timeSaved} saved using ${job.tools[0]} / ${job.tools[1]}.</p>
      <h3>Ten tests to run (document deltas)</h3>
      <ul>
        <li>Curiosity question vs clear statement subject</li>
        <li>Number lead vs story lead</li>
        <li>Preview text: CTA vs teaser</li>
        <li>Personalization token on/off</li>
        <li>4-word vs 9-word subject length</li>
        <li>Emoji vs no emoji (B2B often no)</li>
        <li>Sender name person vs brand</li>
        <li>Send time Tue 8am vs Thu 1pm (split list)</li>
        <li>Single CTA vs PS secondary</li>
        <li>Plain-text vs designed template</li>
      </ul>
      <h3>Issue skeleton (reuse)</h3>
      <p>Hook story (120w) → 3 insights with examples → one exercise → P.S. CTA. Segment by behavior: clicked last week vs cold.</p>
      ${practiceExercise('Grow or ghost 500 subs', [
        'Pick niche newsletter topic.',
        'Publish 8 weeks; log open rate per test.',
        'Screenshot Beehiiv analytics for portfolio (link in References).',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Open rate trend chart', 'Issue archive link', 'Test log spreadsheet'])}
      ${pricingSection(job, [
        { name: 'Issue ghost', scope: '1 weekly write+send', priceHint: '$150–350' },
        { name: 'Growth ops', scope: 'Write + tests + segments', priceHint: '$600–1.5k/mo' },
        { name: 'Launch', scope: 'Setup + first 4 issues', priceHint: '$800–2k' },
      ])}
      ${mistakesSection([
        'No segmentation',
        'Buying lists (spam risk)',
        'Every subject clickbait',
        'No clear single CTA',
      ])}
      ${faqSection([
        { q: 'Newsletters dead?', a: 'Owned audience is more valuable as ads get expensive.' },
        { q: 'AI write whole issue?', a: 'AI draft; human stories and fact-check win.' },
        { q: 'Metric to sell?', a: 'Open rate trend + subscriber growth + click to offer.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'curriculum-architect': (job) => `
      ${roleIntro(job, 'how to map <strong>measurable outcomes to six modules</strong> with 45-minute lesson flows, assignments, and rubrics.')}
      ${coverFigure(job, 'Courses are products—architects make expert IP sellable.')}
      <h3>Outcome-first design</h3>
      <p>Start with: “After 6 weeks, learner can __ with __ metric.” Everything else serves that sentence. ${job.hireReason}</p>
      <h3>Per-module packet</h3>
      <ul>
        <li>Objective (verb + measurable)</li>
        <li>Lesson flow: teach (10m) → demo (15m) → practice (20m)</li>
        <li>Assignment + rubric (4 levels)</li>
        <li>Facilitator notes: misconceptions, timing, materials</li>
        <li>Optional async video script outline</li>
      </ul>
      <h3>Beta pilot</h3>
      <p>Run 5 learners; track completion %, assignment scores, NPS. Iterate module 3 if drop-off spikes—usually difficulty cliff.</p>
      ${practiceExercise('4-week cohort outline', [
        'Pick audience (e.g., teen job seekers, SMB marketers).',
        'Write 6 modules with rubrics.',
        'Pilot one live session; record feedback.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". Pair with school and cohort programs like Future Ready Graduate.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Syllabus PDF', 'Sample rubric', 'Beta feedback quotes'])}
      ${pricingSection(job, [
        { name: 'Outline', scope: '6-module map', priceHint: '$800–2k' },
        { name: 'Full curriculum', scope: 'Lessons + assessments', priceHint: '$2k–6k' },
        { name: 'Cohort support', scope: 'Facilitator guides', priceHint: '$1k–3k' },
      ])}
      ${mistakesSection([
        'Content dump without practice',
        'No assessments',
        'Fuzzy outcomes (“understand AI”)',
        'Ignoring facilitator time constraints',
      ])}
      ${faqSection([
        { q: 'Replace teachers?', a: 'You equip teachers/coaches with structure—they deliver humanity.' },
        { q: 'K-12 vs corporate?', a: 'Pick one; standards differ.' },
        { q: 'AI role?', a: 'Draft outlines; human validates pedagogy.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'localization-ai-specialist': (job) => `
      ${roleIntro(job, '<strong>transcreation workflow</strong>—when literal AI translation fails and how to document intentional meaning shifts.')}
      ${coverFigure(job, 'Global reach requires culture, not word swap.')}
      <h3>Workflow</h3>
      <ol>
        <li>Machine first pass (${job.tools[0]} / ${job.tools[1]})</li>
        <li>Glossary lock (brand, product, legal terms)</li>
        <li>Transcreation notes column: “changed idiom because…”</li>
        <li>Back-translation spot check on high-stakes pages</li>
        <li>Client sign-off on tone matrix per locale</li>
      </ol>
      <h3>Examples needing transcreation</h3>
      <ul>
        <li>Idioms (“home run,” “break the ice”)</li>
        <li>Humor and sarcasm</li>
        <li>CTAs that sound rude in target culture</li>
        <li>Units, currency, date formats</li>
      </ul>
      <p>African, European, and Gulf markets pay premium for bilingual editors who fix tone—${job.earning} on agency retainers.</p>
      ${practiceExercise('Side-by-side landing page', [
        'Translate EN → FR or EN → AR with notes.',
        'Mark 5 intentional non-literal choices.',
        'Peer review with native speaker.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". TMS (" +  job.tools[2] + ") for scale.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Glossary sample', 'Transcreation memo', 'Before/after tone paragraph'])}
      ${pricingSection(job, [
        { name: 'Page pair', scope: 'Up to 800 words + notes', priceHint: '$80–200' },
        { name: 'Glossary build', scope: '500 terms', priceHint: '$400–900' },
        { name: 'Retainer', scope: 'Ongoing locales', priceHint: '$1k–4k/mo' },
      ])}
      ${mistakesSection([
        'Literal marketing slogans',
        'No glossary on brand terms',
        'Ignoring RTL layout issues',
        'Claiming fluency you do not have',
      ])}
      ${faqSection([
        { q: 'Enough work?', a: 'Agencies and SaaS expanding to Africa/EU need this layer constantly.' },
        { q: 'One pair or many?', a: 'Depth in one pair beats shallow many.' },
        { q: 'AI replace?', a: 'AI first draft; human owns tone and liability.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'career-document-strategist': (job) => `
      ${roleIntro(job, 'how to rewrite experience into <strong>CAR bullets</strong> that survive ATS and the 7-second human skim.')}
      ${coverFigure(job, 'Strategists sell evidence—metrics, scope, tools—not adjectives.')}
      <h3>CAR format</h3>
      <p><strong>Context</strong> — company situation, team size, geography. <strong>Action</strong> — what you did with named tools. <strong>Result</strong> — number or outcome; use [METRIC] if client must supply data later.</p>
      <h3>Package to sell</h3>
      <ul>
        <li>ATS-friendly resume (1–2 pages)</li>
        <li>LinkedIn About + headline</li>
        <li>3 outreach templates (referral, cold, follow-up)</li>
        <li>Optional: ${ext('Jobscan', 'https://www.jobscan.co/')} match report for target role</li>
      </ul>
      <h3>Process (90 min/client)</h3>
      <p>Intake call → duty dump → ${job.tools[0]} draft bullets → human tighten → ${job.tools[1]} format → client verifies metrics.</p>
      ${practiceExercise('Five resume transformations', [
        'Volunteer for five career switchers.',
        'Document before/after bullets.',
        'Track interview callbacks if they report back.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Redacted before/after', 'LinkedIn About sample', 'Testimonial on clarity'])}
      ${pricingSection(job, [
        { name: 'Resume refresh', scope: '1 role focus', priceHint: '$120–250' },
        { name: 'Full package', scope: 'Resume + LinkedIn + templates', priceHint: '$250–500' },
        { name: 'Executive', scope: 'Leadership narrative', priceHint: '$500–1k' },
      ])}
      ${mistakesSection([
        'Duty lists without outcomes',
        'Keyword stuffing invisible to humans',
        'Lying about metrics',
        'Generic “hard worker” bullets',
      ])}
      ${faqSection([
        { q: 'Oversaturated market?', a: 'Position on niche (tech, healthcare, Africa diaspora roles).' },
        { q: 'AI write resume?', a: 'AI drafts; you interview for real metrics.' },
        { q: 'Ethics?', a: 'Never fabricate roles or degrees.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'real-estate-visual-stager': (job) => `
      ${roleIntro(job, '<strong>MLS ethics for virtual staging</strong>—what you may enhance vs what deceives buyers.')}
      ${coverFigure(job, 'Listing photos are the storefront—honest upgrades sell faster.')}
      <h3>Allowed enhancements</h3>
      <ul>
        <li>Virtual furniture in empty rooms (disclosed)</li>
        <li>Sky replacement, brightness, crop straightening</li>
        <li>Minor clutter removal (non-structural)</li>
      </ul>
      <h3>Not allowed / high risk</h3>
      <ul>
        <li>Hiding cracks, water damage, mold</li>
        <li>Changing window views or room dimensions</li>
        <li>Discriminatory marketing copy (fair housing)</li>
      </ul>
      <h3>Delivery bundle</h3>
      <p>Before/after gallery, MLS description, IG caption, disclosure line for virtually staged photos. Turnaround 24h for ${job.earning} per listing.</p>
      ${practiceExercise('10 room staging set', [
        'Use empty room stock; apply consistent furniture library.',
        'Write fair-housing-safe description.',
        'Partner pitch to two local agents.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Before/after gallery', 'Agent testimonial', 'Disclosure copy sample'])}
      ${pricingSection(job, [
        { name: 'Per listing', scope: '5–8 photos', priceHint: '$150–400' },
        { name: 'Rush 24h', scope: '+30% fee', priceHint: 'premium' },
        { name: 'Agent bundle', scope: '10 listings/mo', priceHint: '$1k–2.5k/mo' },
      ])}
      ${mistakesSection([
        'Undisclosed virtual staging',
        'Inconsistent furniture style across listing',
        'Over-greening lawns in drought markets',
      ])}
      ${faqSection([
        { q: 'Replace physical staging?', a: 'Often complements—faster and cheaper for empty homes.' },
        { q: 'Markets?', a: 'Suburban listings with empty rooms convert best.' },
        { q: 'Tools?', a: 'Pick one staging platform; master lighting match.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'onboarding-experience-designer': (job) => `
      ${roleIntro(job, 'how to design <strong>day-0 to day-14 onboarding</strong> tied to one activation metric—not feature tours nobody finishes.')}
      ${coverFigure(job, 'Churn starts on day two when users do not know the next step.')}
      <h3>Define activation first</h3>
      <p>Examples: “first project created,” “first report exported,” “lesson 1 completed.” ${job.hireReason} Every email and tooltip serves that event.</p>
      <h3>Five-email sequence</h3>
      <ul>
        <li><strong>Day 0</strong> — welcome + single next step (button)</li>
        <li><strong>Day 1</strong> — quick win tutorial</li>
        <li><strong>Day 3</strong> — feature depth tied to activation</li>
        <li><strong>Day 7</strong> — social proof / case study</li>
        <li><strong>Day 14</strong> — survey or success check-in</li>
      </ul>
      <p>Rules: one CTA per email; no feature dump; mobile-readable.</p>
      <h3>Help center from tickets</h3>
      <p>Cluster top 10 support themes → 10 articles → feed ${job.tools[0]} bot for deflection. Saves ${job.timeSaved} of CX design time.</p>
      ${practiceExercise('Map one SaaS trial', [
        'Sign up for any SaaS; document confusion points.',
        'Write 5 emails + 3 help articles.',
        'Propose activation metric to founder.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". " +  job.tools[2] + " for in-app guides.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Email sequence doc', 'Activation metric definition', 'Help article samples'])}
      ${pricingSection(job, [
        { name: 'Onboarding audit', scope: 'Journey + gaps', priceHint: '$600–1.5k' },
        { name: 'Sequence build', scope: 'Emails + help center starter', priceHint: '$1.5k–4k' },
        { name: 'CX retainer', scope: 'Iterate from ticket data', priceHint: '$1k–3k/mo' },
      ])}
      ${mistakesSection([
        'Email every feature',
        'No in-app counterpart to emails',
        'Ignoring mobile onboarding',
        'Vanity metrics (logins vs activation)',
      ])}
      ${faqSection([
        { q: 'UX designer overlap?', a: 'You focus on first 14 days and measurable activation.' },
        { q: 'Courses vs SaaS?', a: 'Both need clear next step; metrics differ.' },
        { q: 'Proof?', a: 'Activation rate delta if client shares; else narrative + samples.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'competitive-intelligence-analyst': (job) => `
      ${roleIntro(job, 'the <strong>Monday market memo</strong>—two pages executives read in five minutes, with cited sources.')}
      ${coverFigure(job, 'Leaders need decisions, not 100 open browser tabs.')}
      <h3>Memo structure</h3>
      <ol>
        <li>Executive headline (one sentence)</li>
        <li>Competitor moves table (who, what, so what)</li>
        <li>Pricing & packaging shifts</li>
        <li>Messaging / positioning changes</li>
        <li>Risks for [CLIENT]</li>
        <li>Three recommended actions with owners</li>
        <li>Sources appendix (URLs, dates)</li>
      </ol>
      <h3>Research loop (weekly)</h3>
      <p>Monday: ${ext('Perplexity', 'https://www.perplexity.ai/')} + ${job.tools[0]} for scans → ${ext('Similarweb', 'https://www.similarweb.com/')} traffic trends → ${ext('Google Trends', 'https://trends.google.com/')} → human verify every claim → PDF by noon.</p>
      <p>${job.timeSaved} vs ad-hoc research. Productize subscription “Monday memo” at ${job.earning}.</p>
      ${practiceExercise('Three-competitor brief', [
        'Pick industry you know.',
        'Ship 2-page brief with 10+ citations.',
        'Present 5-minute video summary.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Redacted memo PDF', 'Citation appendix', 'Video summary link'])}
      ${pricingSection(job, [
        { name: 'One-off brief', scope: '3 competitors', priceHint: '$400–900' },
        { name: 'Weekly memo', scope: 'Ongoing', priceHint: '$800–2k/mo' },
        { name: 'Strategy offsite', scope: 'Deep dive + workshop', priceHint: '$2k–5k' },
      ])}
      ${mistakesSection([
        'Unverified rumors',
        'No “so what” for client',
        '50-page dumps',
        'Missing dates on fast-moving news',
      ])}
      ${faqSection([
        { q: 'AI enough?', a: 'AI gathers; you verify and judge relevance.' },
        { q: 'Industries?', a: 'SaaS, retail, NGOs, agencies—all need signal.' },
        { q: 'Confidentiality?', a: 'NDA; anonymize samples in portfolio.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'notion-ops-architect': (job) => `
      ${roleIntro(job, 'how to design a <strong>Notion OS schema</strong> (databases, relations, views, automations) before buying another template.')}
      ${coverFigure(job, 'One operating system beats ten abandoned dashboards.')}
      <h3>Schema-first (agency example)</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1.5em 0;">
        <tr style="border-bottom: 1px solid #334155;"><th style="text-align:left; padding:8px;">Database</th><th style="text-align:left; padding:8px;">Fields</th><th style="text-align:left; padding:8px;">Views</th></tr>
        <tr><td style="padding:8px;">Clients</td><td style="padding:8px;">Status, MRR, owner, niche</td><td style="padding:8px;">Pipeline board</td></tr>
        <tr><td style="padding:8px;">Projects</td><td style="padding:8px;">Client relation, due, health</td><td style="padding:8px;">Timeline</td></tr>
        <tr><td style="padding:8px;">Tasks</td><td style="padding:8px;">Assignee, sprint, priority</td><td style="padding:8px;">My work today</td></tr>
        <tr><td style="padding:8px;">Content</td><td style="padding:8px;">Channel, status, asset link</td><td style="padding:8px;">Calendar</td></tr>
      </table>
      <h3>Five automations (via ${job.tools[3]})</h3>
      <ol>
        <li>New client → spawn project template</li>
        <li>Project status Won → task seed list</li>
        <li>Task overdue → Slack alert</li>
        <li>Weekly snapshot to email</li>
        <li>Form intake → client row</li>
      </ol>
      <p>Deliver Loom walkthrough (10 min) as handoff. ${job.hireReason}</p>
      ${practiceExercise('Clone for one niche', [
        'Pick coaches or micro-agencies.',
        'Customize fields; delete unused DBs.',
        'Run fake data for demo.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Loom walkthrough', 'Schema diagram PDF', 'Client quote on adoption'])}
      ${pricingSection(job, [
        { name: 'OS build', scope: 'Schema + 5 automations', priceHint: '$800–2.5k' },
        { name: 'Template kit', scope: 'Niche clone + doc', priceHint: '$300–700' },
        { name: 'Admin retainer', scope: 'Tune monthly', priceHint: '$400–1k/mo' },
      ])}
      ${mistakesSection([
        'Pretty UI, no relations',
        'Too many databases',
        'No training Loom',
        'Automations without failure notify',
      ])}
      ${faqSection([
        { q: 'Notion vs Airtable?', a: 'Notion wins docs+wiki; Airtable wins heavy relational reporting—ask client workflow.' },
        { q: 'Adoption?', a: 'Train one champion; measure weekly active users.' },
        { q: 'AI in Notion?', a: 'Use Notion AI for summaries inside pages—not replacement for schema.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'ugc-creative-director': (job) => `
      ${roleIntro(job, 'how to write and label <strong>five UGC ad hooks</strong> for creative testing—the unit media buyers buy weekly.')}
      ${coverFigure(job, 'Ads are won in second one; volume of hooks beats one perfect spot.')}
      <h3>Why performance marketers hire</h3>
      <p>${job.hireReason} AI UGC via ${job.tools[0]} / ${job.tools[1]} lowers cost per variant. You supply scripts, labels, and compliance awareness.</p>
      <h3>Five hook formulas</h3>
      <ul>
        <li>“I didn’t believe X until…”</li>
        <li>“Stop doing Y if you want Z”</li>
        <li>POV: problem → demo → reaction</li>
        <li>Social proof snap (review, DM screenshot—real only)</li>
        <li>Myth bust / controversial opener (policy-safe)</li>
      </ul>
      <h3>30-second script structure</h3>
      <p>Hook (3s) → problem (7s) → demo (12s) → proof (5s) → CTA (3s). First person, phone aesthetic, jump cuts OK.</p>
      <h3>Testing labels</h3>
      <p>Name files: PRODUCT_HOOK_v3_9-by-16.mp4. Log hypothesis per variant. Kill losers at 48h spend cap.</p>
      ${practiceExercise('Five variants one product', [
        'Pick DTC product you understand.',
        'Write 5 scripts; film or avatar in ' + job.tools[0] + '.',
        'Present testing plan spreadsheet.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + '. Read Meta ad policies before running paid UGC (see References).')}
      ${learningPath(job)}
      ${portfolioProof(job, ['Script pack PDF', 'Sample videos or storyboard', 'Testing grid template'])}
      ${pricingSection(job, [
        { name: 'Hook pack', scope: '5 scripts', priceHint: '$200–500' },
        { name: 'Produced set', scope: '5 edited variants', priceHint: '$600–1.5k' },
        { name: 'Weekly creative', scope: '10 hooks/wk', priceHint: '$1.5k–4k/mo' },
      ])}
      ${mistakesSection([
        'Fake testimonials',
        'Before/after claims in regulated products',
        'One hook style only',
        'No clear CTA',
      ])}
      ${faqSection([
        { q: 'Actors required?', a: 'AI avatars work for tests; disclose per platform rules.' },
        { q: 'Best verticals?', a: 'Beauty, apps, coaching, consumer gadgets.' },
        { q: 'Measure success?', a: 'Hook rate, thumb-stop, CPA—client media buyer shares.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,
}
