import type { AiCareerJob } from '../types'
import { coverFigure, ctaFooter, ext, joinHtml, refs } from './shared'
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

export const BODIES_PART1: Record<string, BodyBuilder> = {
  'visual-narrative-architect': (job) => `
      ${roleIntro(job, 'how to run a <strong>7-day thumbnail CTR lab</strong> with a scoring rubric clients can understand—not a vague “I do AI design” pitch.')}
      ${coverFigure(job, 'Thumbnail specialists win on contrast and mobile legibility—not prettier gradients.')}
      <h3>Why clicks stall (and what creators actually buy)</h3>
      <p>Most creators do not need “more design.” They need <strong>evidence</strong> that a new frame will beat the old one. ${job.hireReason} Your job is to turn ${ext('YouTube Creator Academy', 'https://creatoracademy.youtube.com/page/lesson/thumbnails')} principles into a repeatable lab: audit → variants → score → ship.</p>
      <h3>Day 1–2: Baseline audit</h3>
      <p>Pick one channel in a niche you understand (finance, fitness, dev tools, education). In ${ext('YouTube Studio', 'https://studio.youtube.com/')}, export the last 10 videos with CTR, impressions, and average view duration. Flag the bottom three thumbnails.</p>
      <p>For each loser thumbnail, diagnose:</p>
      <ul>
        <li><strong>Mobile legibility</strong> — squint test at phone width; is the focal face or object obvious?</li>
        <li><strong>Text load</strong> — more than four words usually fails on mobile</li>
        <li><strong>Emotion match</strong> — does the face match the promise of the title?</li>
        <li><strong>Feed contrast</strong> — does it pop against a gray home feed, or blend in?</li>
      </ul>
      <h3>Day 3–4: Controlled variants</h3>
      <p>Generate <strong>three variants</strong> per video with ${job.tools[0]} or ${job.tools[1]}—same title, different single variable:</p>
      <ul>
        <li>Variant A: curiosity (wide eyes, question overlay)</li>
        <li>Variant B: proof (result, number, before/after)</li>
        <li>Variant C: urgency (deadline, warning—but avoid clickbait that hurts retention)</li>
      </ul>
      <p>Add overlays in ${job.tools[2]} with <strong>one font pair</strong> only. Rule: never change color, face, and text in the same test—otherwise you learn nothing.</p>
      <h3>Day 5–7: Score, document, deliver</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1.5em 0;">
        <tr style="border-bottom: 1px solid #334155;"><th style="text-align:left; padding:8px;">Criterion</th><th style="text-align:left; padding:8px;">0</th><th style="text-align:left; padding:8px;">1</th><th style="text-align:left; padding:8px;">2</th></tr>
        <tr><td style="padding:8px;">Mobile legibility</td><td style="padding:8px;">Blurry / cluttered</td><td style="padding:8px;">Readable</td><td style="padding:8px;">Instant read</td></tr>
        <tr><td style="padding:8px;">Emotion vs title</td><td style="padding:8px;">Off</td><td style="padding:8px;">Close</td><td style="padding:8px;">Exact match</td></tr>
        <tr><td style="padding:8px;">Contrast vs feed</td><td style="padding:8px;">Flat</td><td style="padding:8px;">OK</td><td style="padding:8px;">Pops</td></tr>
        <tr><td style="padding:8px;">Brand fit</td><td style="padding:8px;">Off-brand</td><td style="padding:8px;">Acceptable</td><td style="padding:8px;">On-brand</td></tr>
      </table>
      <p>Deliver: scorecard PDF + PNG/JPG files + 2-minute Loom explaining why the winner scored highest. That package is your portfolio centerpiece.</p>
      ${practiceExercise('Free sample for a micro-creator', [
        'Offer one video, three variants, no charge.',
        'Run the rubric publicly (with permission).',
        'Ask: “If this beat your last CTR, would a 5-pack be worth $X?”',
        'Convert to paid batch or monthly refresh.',
      ])}
      ${toolsSection(job, "Learn one image model deeply (" +  job.tools[0] + " or " +  job.tools[1] + "), then " +  job.tools[2] + " for text. " +  job.tools[3] + " for generative fill cleanup. Use " +  job.tools[4] + " for briefs and overlay copy variants.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Before/after CTR screenshot (blur private data if needed)', 'Scorecard for 3 variants on one video', 'Niche-specific sample pack (5 thumbs one topic)'])}
      ${pricingSection(job, [
        { name: 'CTR Lab Mini', scope: '3 variants + scorecard, 48h', priceHint: '$75–150' },
        { name: 'Channel Refresh', scope: '10 thumbnails + style guide', priceHint: '$400–900' },
        { name: 'Monthly Growth', scope: '8–12 thumbs + monthly audit', priceHint: '$800–2k/mo' },
      ])}
      ${mistakesSection([
        'Testing ten variables at once',
        'Tiny text that dies on mobile',
        'Stock-looking AI faces with no emotion',
        'Delivering PNGs without explaining the score',
        'Copying MrBeast style in B2B niches where trust beats shock',
      ])}
      ${faqSection([
        { q: 'Do I need a design degree?', a: 'No. Creators hire for CTR thinking and speed. Proof beats credentials.' },
        { q: 'Midjourney vs Ideogram?', a: 'Pick one for 30 days. Ideogram often wins on text-in-image; Midjourney on cinematic faces.' },
        { q: 'How do I get first clients?', a: 'DM 20 creators with 5k–50k subs, offer one free lab, show the scorecard.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'cinematic-synthesis-specialist': (job) => `
      ${roleIntro(job, 'the <strong>45-second edit map</strong>—timestamps, hooks, captions, and B-roll logic—that performance marketers pay for on Reels, TikTok, and LinkedIn.')}
      ${coverFigure(job, 'Short-form editors sell structure—not “I use CapCut.”')}
      <h3>The 45-second map (memorize this)</h3>
      <ol>
        <li><strong>0:00–0:02 — Pattern interrupt</strong> — bold claim, question, or visual jolt. No logos, no “hey guys.”</li>
        <li><strong>0:02–0:15 — Problem</strong> — one sentence pain; b-roll proves it (not wallpaper).</li>
        <li><strong>0:15–0:35 — Proof</strong> — demo, stat, testimonial, or screen recording.</li>
        <li><strong>0:35–0:45 — CTA</strong> — one action; on-screen text mirrors the spoken line.</li>
      </ol>
      <h3>Platform-specific caption rules</h3>
      <ul>
        <li><strong>TikTok / Reels:</strong> max ~32 characters per line; highlight keywords in brand color; safe zones for UI overlays</li>
        <li><strong>LinkedIn:</strong> minimal emoji; subtitles mandatory (many watch muted)</li>
        <li><strong>YouTube Shorts:</strong> hook in first frame; loop-friendly endings optional</li>
      </ul>
      <h3>Workflow: raw → map → polish</h3>
      <p>Start with a 2–5 minute talking-head or screen recording. Use ${ext('Opus Clip', 'https://www.opus.pro/')} to find hook candidates, then <strong>override</strong> with your map in ${job.tools[0]}. Pull B-roll from ${job.tools[1]} or stock; remove filler words in ${job.tools[2]}; color and audio in ${job.tools[4]} if client brand requires it.</p>
      <h3>Client scenario</h3>
      <p>A local restaurant wants lunch-hour Reels. You deliver four maps per week: hook (“Why our line is out the door at noon”), proof (15-sec kitchen clip), CTA (“Reserve before 11am”). Document ${job.timeSaved} vs their intern cutting randomly. Propose retainer when average watch time rises.</p>
      ${practiceExercise('One raw clip → three platform exports', [
        'Import one clip; write the map on paper first.',
        'Cut to 45s; add captions per platform rules.',
        'Export 9:16 with burned-in subs.',
        'Post on a demo account or unlisted link for portfolio.',
      ])}
      ${toolsSection(job, job.tools[0] + " for speed; " +  job.tools[2] + " for transcript-based cuts; " +  job.tools[3] + " for repurposing long to short. Master one chain before adding tools.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Before/after: raw vs final 45s', 'Edit map PDF for one client niche', 'Reel with retention comment screenshot if available'])}
      ${pricingSection(job, [
        { name: 'Short Rescue', scope: '1 clip → 45s + captions, 24h', priceHint: '$80–200' },
        { name: 'Weekly Sprint', scope: '4 shorts + maps', priceHint: '$600–1.2k/mo' },
        { name: 'Content OS', scope: '12 shorts + template + caption style', priceHint: '$1.5k–3k/mo' },
      ])}
      ${mistakesSection([
        'Starting in the timeline before writing the map',
        'B-roll that does not illustrate the spoken line',
        'Two CTAs (book + follow + link)',
        'Over-captions that cover the face',
        'Ignoring safe zones on Reels',
      ])}
      ${faqSection([
        { q: 'Do I need After Effects?', a: 'Not to start. CapCut + Opus + Descript covers most SMB clients.' },
        { q: 'How fast should turnaround be?', a: '24–48h for shorts wins retainers. Batch filming helps.' },
        { q: 'What proof matters most?', a: 'Watch time / retention screenshots beat fancy transitions.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'conversational-persona-architect': (job) => `
      ${roleIntro(job, 'how to build a <strong>voice matrix</strong> (tone, taboo, escalation) before you wire a single bot flow in Voiceflow or Botpress.')}
      ${coverFigure(job, 'Persona architects sell trust—not generic ChatGPT skins.')}
      <h3>Why bots fail</h3>
      <p>${job.hireReason} Failure mode: team pastes brand adjectives into a system prompt with no escalation rules, no taboo list, and no test pack. You fix that <em>before</em> engineering.</p>
      <h3>Voice matrix (rate 1–5 on each axis)</h3>
      <ul>
        <li><strong>Warmth</strong> — cold expert ↔ friendly coach</li>
        <li><strong>Directness</strong> — hedged ↔ blunt</li>
        <li><strong>Formality</strong> — casual ↔ corporate</li>
        <li><strong>Humor</strong> — none ↔ light (often 1–2 in fintech/health)</li>
      </ul>
      <p>Example: fintech support → warmth 3, directness 4, formality 4, humor 1. Document <strong>Never say</strong> (10 phrases: “as an AI,” “guaranteed,” etc.) and <strong>Always escalate when</strong> (chargebacks, legal threats, minors, medical advice).</p>
      <h3>Flows to prototype (minimum three)</h3>
      <ol>
        <li><strong>Greet + intent</strong> — identify issue in one question</li>
        <li><strong>Qualify</strong> — account type, urgency, product</li>
        <li><strong>Resolve or escalate</strong> — handoff message with ticket ID pattern</li>
      </ol>
      <h3>Test pack (20 messages)</h3>
      <p>Include: angry user, confused elder, jokester, prompt injector (“ignore instructions”), refund demand, competitor comparison, off-topic. Score each bot reply: on-brand? &lt;80 words? escalated when required?</p>
      ${practiceExercise('Clone voice from public site', [
        'Scrape FAQs + About (public copy only).',
        'Draft system prompt with matrix scores.',
        'Run test pack in ' + job.tools[3] + ' Custom GPT before Voiceflow.',
        'Ship demo link + PDF matrix to prospect.',
      ])}
      ${toolsSection(job, job.tools[0] + " or " +  job.tools[1] + " for flows; " +  job.tools[2] + " for API deployments; " +  job.tools[3] + "/" +  job.tools[4] + " for prompt iteration.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Voice matrix PDF', 'Demo bot URL with 3 flows', 'Test pack results table (pass rate)'])}
      ${pricingSection(job, [
        { name: 'Voice Kit', scope: 'Matrix + system prompt + 20 tests', priceHint: '$500–1.2k' },
        { name: 'Bot MVP', scope: '3 flows + escalate + analytics', priceHint: '$1.5k–4k' },
        { name: 'Tune & Measure', scope: 'Monthly deflection + CSAT review', priceHint: '$800–2k/mo' },
      ])}
      ${mistakesSection([
        'Letting the bot promise refunds',
        'No logging of failed conversations',
        'Same tone for sales and support',
        'Skipping jailbreak tests',
      ])}
      ${faqSection([
        { q: 'Do I need to code?', a: 'Light API helps but many jobs are no-code + strong prompts.' },
        { q: 'How do I measure success?', a: 'Deflection rate, CSAT on 20+ tests, escalation appropriateness.' },
        { q: 'Enterprise vs SMB?', a: 'SMB buys speed; enterprise buys compliance documentation.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'lexical-refinement-curator': (job) => `
      ${roleIntro(job, 'the <strong>12 edit types</strong> checklist that turns raw AI drafts into publishable, on-brand, cite-safe copy.')}
      ${coverFigure(job, 'Humanizers sell judgment—accuracy, rhythm, and voice.')}
      <h3>When clients pay you</h3>
      <p>${job.hireReason} Brands fear publishing raw ${job.tools[0]} output. You are the insurance layer: fact discipline + voice + structure. Typical save: ${job.timeSaved} per long piece.</p>
      <h3>The 12 edit types (use on every job)</h3>
      <ol>
        <li><strong>Hedge purge</strong> — cut “might,” “could,” “it’s important to note”</li>
        <li><strong>Claim → source</strong> — tag [CITE] or delete</li>
        <li><strong>Rhythm</strong> — vary sentence length; no three identical openers</li>
        <li><strong>Jargon → plain</strong> — one idea per sentence</li>
        <li><strong>CTA singularity</strong> — one action per page</li>
        <li><strong>Brand taboo</strong> — client banned words list</li>
        <li><strong>Structure</strong> — H2s match scan patterns</li>
        <li><strong>Examples</strong> — swap abstract nouns for micro-stories</li>
        <li><strong>Numbers</strong> — specific &gt; “significant”</li>
        <li><strong>AI tells</strong> — delve, landscape, em-dash spam</li>
        <li><strong>Legal tone</strong> — soften promises in regulated niches</li>
        <li><strong>Read aloud</strong> — stumble = rewrite</li>
      </ol>
      <h3>Service tiers</h3>
      <ul>
        <li><strong>Light polish</strong> — grammar + AI tells (fastest)</li>
        <li><strong>Voice pass</strong> — brand guide alignment</li>
        <li><strong>Full rewrite + citations</strong> — research with ${job.tools[4]} and ${ext('Google helpful content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content')} standards</li>
      </ul>
      ${practiceExercise('AI draft → client-ready in 90 minutes', [
        'Take a 800-word AI blog on any topic.',
        'Run all 12 edits; track time per edit type.',
        'Publish as portfolio “edit log” showing before/after excerpts.',
      ])}
      ${toolsSection(job, job.tools[0] + " and " +  job.tools[1] + " for drafts; " +  job.tools[2] + " for grammar; " +  job.tools[3] + " for duplication/AI detection flags (advisory only).")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Side-by-side paragraph with edit categories labeled', 'Checklist PDF clients can reuse', 'One regulated-industry sample if possible'])}
      ${pricingSection(job, [
        { name: 'Polish', scope: 'Up to 1,500 words', priceHint: '$50–120' },
        { name: 'Voice + structure', scope: 'Up to 2,500 words + cite pass', priceHint: '$150–350' },
        { name: 'Retainer', scope: '4 articles/mo', priceHint: '$800–2k/mo' },
      ])}
      ${mistakesSection([
        'Rewriting so much you lose the client’s voice',
        'Leaving uncited statistics',
        'Adding hype the brand hates',
        'No edit log (client cannot see value)',
      ])}
      ${faqSection([
        { q: 'Will AI replace editors?', a: 'It replaces sloppy drafts, not accountability. Publishers pay for names on the line.' },
        { q: 'Do I need journalism training?', a: 'Helpful, not required. Checklists + samples win.' },
        { q: 'How do I price?', a: 'Per word for polish; per piece for rewrite; retainer for teams.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'generative-search-strategist': (job) => `
      ${roleIntro(job, 'a <strong>90-minute GEO audit</strong> (Generative Engine Optimization)—whether ChatGPT, Perplexity, and Google AI Overviews cite your client’s brand.')}
      ${coverFigure(job, 'GEO is entity clarity + quotable facts—not keyword stuffing.')}
      <h3>SEO vs GEO (quick contrast)</h3>
      <p>SEO fought for blue-link clicks. GEO fights for <strong>mentions inside answers</strong>. Buyers ask models before they Google. If the model does not know who you are, you are invisible in a new funnel.</p>
      <h3>Step 1 — Ask engines (20 minutes)</h3>
      <p>Run 15 queries in ${ext('ChatGPT', 'https://chat.openai.com/')} and ${ext('Perplexity', 'https://www.perplexity.ai/')}, e.g.:</p>
      <ul>
        <li>“Best [category] in [city]”</li>
        <li>“How to [job-to-be-done] without [pain]”</li>
        <li>“[Brand] vs [competitor]”</li>
        <li>“Is [Brand] legit?”</li>
      </ul>
      <p>Screenshot citations. Note: who gets named, which URLs are sourced, what facts repeat.</p>
      <h3>Step 2 — On-site signals (40 minutes)</h3>
      <ul>
        <li><strong>Entity page</strong> — legal name, founders, location, founded date</li>
        <li><strong>Proof stats</strong> — numbers with sources (studies, audits, customer counts)</li>
        <li><strong>Author bios</strong> — real people, credentials, sameAs links</li>
        <li><strong>FAQ blocks</strong> — 40–60 word answers models can quote</li>
        <li><strong>Schema</strong> — Organization, FAQ, Article where valid (${job.tools[3]})</li>
        <li><strong>Comparison pages</strong> — ethical “us vs alternative” with facts</li>
      </ul>
      <h3>Step 3 — Client report (30 minutes)</h3>
      <p>Deliver one PDF: citation gap table, five pages to create, eight FAQ pairs to publish, priority order. Sell follow-up implementation separately.</p>
      ${practiceExercise('Audit a local business for free', [
        'Pick a business with weak About page.',
        'Run 15 queries; document who wins.',
        'Deliver 1-page gap analysis publicly (with permission) on LinkedIn.',
        'Offer paid implementation sprint.',
      ])}
      ${toolsSection(job, job.tools[0] + ' and ' + job.tools[1] + ' for research; ' + ext('Google Search Console', 'https://search.google.com/search-console') + ' for traditional signals; ' + job.tools[3] + ' for structured data.')}
      ${learningPath(job)}
      ${portfolioProof(job, ['Redacted GEO audit PDF', 'Before/after FAQ page', 'Screenshot set of query results'])}
      ${pricingSection(job, [
        { name: 'GEO Snapshot', scope: '90-min audit + 1-page gaps', priceHint: '$300–700' },
        { name: 'Citation Sprint', scope: '8 FAQs + 2 proof pages', priceHint: '$1.2k–3k' },
        { name: 'Monthly monitor', scope: '15 queries + delta report', priceHint: '$500–1.5k/mo' },
      ])}
      ${mistakesSection([
        'Keyword stuffing FAQ pages',
        'Fake statistics',
        joinHtml(
          'Ignoring ',
          ext('Google AI Overviews', 'https://developers.google.com/search/docs/appearance/ai-overviews'),
          ' while only testing ChatGPT',
        ),
        'No source URLs in your report',
      ])}
      ${faqSection([
        { q: 'Is GEO proven?', a: 'Citation patterns are observable now; treat as high-upside experiment with measurement.' },
        { q: 'Who buys this?', a: 'B2B SaaS, clinics, agencies, schools—anyone with reputation risk online.' },
        { q: 'Do I need dev skills?', a: 'Basic schema help; partner with dev for complex sites.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'prompt-systems-engineer': (job) => `
      ${roleIntro(job, '<strong>prompt version control</strong>—Git tags, eval sets, regression fixes—for production LLM features, not party tricks.')}
      ${coverFigure(job, 'Production prompt engineers ship reliability, not clever one-liners.')}
      <h3>Why teams hire you</h3>
      <p>${job.hireReason} A “better” prompt that drops JSON validity from 98% to 91% costs real money at scale. You treat prompts like code: version, test, log, rollback.</p>
      <h3>Minimum viable prompt system</h3>
      <ol>
        <li><strong>Repo</strong> — prompts in Git; semver tags (v1.2.0)</li>
        <li><strong>Eval CSV</strong> — 25+ rows: input, expected_format, difficulty, tags</li>
        <li><strong>Runner</strong> — batch call ${job.tools[0]} or ${job.tools[1]} on each change</li>
        <li><strong>Gate</strong> — block deploy if pass rate drops &gt;5%</li>
        <li><strong>Observability</strong> — ${job.tools[2]} or ${job.tools[3]} with PII redacted</li>
      </ol>
      <h3>Structured outputs</h3>
      <p>Pick one use case first: classification, extraction, or summarization. Use JSON schema / tool mode so downstream code does not parse prose. Document failure buckets: truncation, ambiguity, policy refusal.</p>
      <h3>Regression protocol</h3>
      <p>When output drifts: capture failing inputs, diff old vs new prompt, change <strong>one clause</strong>, re-run eval, add guardrail (“If input &gt;4k tokens, summarize first”).</p>
      ${practiceExercise('Micro feature with evals', [
        'Build email intent classifier (4 labels).',
        'Create 30-row eval including edge cases.',
        'Ship v1.0.0; break it on purpose; fix with minimal diff.',
        'Publish case study with pass-rate chart.',
      ])}
      ${toolsSection(job, "Stack: " +  job.tools.join(', ') + ". " +  job.tools[4] + " for collaboration.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Public Git repo with prompts + eval CSV', 'Pass-rate before/after chart', 'Short doc on guardrails'])}
      ${pricingSection(job, [
        { name: 'Eval audit', scope: 'Review prompts + 25 tests', priceHint: '$800–2k' },
        { name: 'Feature hardening', scope: 'One workflow + logging', priceHint: '$2k–6k' },
        { name: 'Advisory', scope: 'Monthly regression review', priceHint: '$1k–3k/mo' },
      ])}
      ${mistakesSection([
        'No eval set before “improving” prompts',
        'Storing prompts only in a UI with no history',
        'Letting the model freestyle JSON',
        'Ignoring cost/latency per call',
      ])}
      ${faqSection([
        { q: 'Do I need ML degree?', a: 'No. Reliability engineering mindset + API fluency wins.' },
        { q: 'LangChain required?', a: 'Useful for agents; many jobs are API + eval discipline only.' },
        { q: 'How to get hired?', a: 'Publish one open-source micro-tool with eval README.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'workflow-orchestration-specialist': (job) => `
      ${roleIntro(job, 'a complete <strong>lead → AI enrich → CRM → Slack</strong> automation blueprint with failure handling and ROI math.')}
      ${coverFigure(job, 'Automation architects sell reclaimed hours—with alerts when AI fails.')}
      <h3>Blueprint (reference architecture)</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1.5em 0;">
        <tr style="border-bottom: 1px solid #334155;"><th style="text-align:left; padding:8px;">Step</th><th style="text-align:left; padding:8px;">Tool</th><th style="text-align:left; padding:8px;">Output</th></tr>
        <tr><td style="padding:8px;">1 Trigger</td><td style="padding:8px;">Typeform / Webflow form</td><td style="padding:8px;">JSON payload</td></tr>
        <tr><td style="padding:8px;">2 Validate</td><td style="padding:8px;">${job.tools[0]}</td><td style="padding:8px;">Reject spam/incomplete</td></tr>
        <tr><td style="padding:8px;">3 Enrich</td><td style="padding:8px;">${job.tools[4]} + Claude</td><td style="padding:8px;">Summary + intent 1–10</td></tr>
        <tr><td style="padding:8px;">4 Store</td><td style="padding:8px;">Airtable</td><td style="padding:8px;">CRM row + tags</td></tr>
        <tr><td style="padding:8px;">5 Route</td><td style="padding:8px;">Slack</td><td style="padding:8px;">@owner if score ≥7</td></tr>
        <tr><td style="padding:8px;">6 Fail</td><td style="padding:8px;">Email queue</td><td style="padding:8px;">Human review</td></tr>
      </table>
      <h3>ROI slide (client-facing)</h3>
      <p>Hours saved per week × blended hourly rate × 4.3 weeks. Example: 6 hours × $45 = $1,170/mo value → $400/mo automation fee is easy yes.</p>
      <h3>Productized kits</h3>
      <ul>
        <li>Lead Intelligence Kit (above)</li>
        <li>Invoice follow-up Kit</li>
        <li>Support ticket tagger Kit</li>
      </ul>
      ${practiceExercise('Rebuild a process you hate', [
        'Map steps you do manually today.',
        'Rebuild in ' + job.tools[0] + ' with one AI step.',
        'Log failures for 7 days; add retry + human notify.',
        'Record Loom demo for prospects.',
      ])}
      ${toolsSection(job, job.tools[0] + ", " +  job.tools[1] + ", or " +  job.tools[2] + "—pick one orchestrator first. " +  job.tools[3] + " for internal docs.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Loom of live scenario', 'ROI one-pager', 'Error handling doc'])}
      ${pricingSection(job, [
        { name: 'Single Kit', scope: 'One automation + docs', priceHint: '$600–1.5k' },
        { name: 'Stack audit', scope: 'Map 5 processes, prioritize 2', priceHint: '$400–900' },
        { name: 'Care plan', scope: 'Monitor + tweak monthly', priceHint: '$300–800/mo' },
      ])}
      ${mistakesSection([
        'No failure notifications',
        'AI step with no human-readable log',
        'Over-automating before process is stable',
        'Quoting hourly instead of outcome kits',
      ])}
      ${faqSection([
        { q: 'Make vs Zapier vs n8n?', a: 'Make friendly; Zapier ubiquitous; n8n powerful self-host. Pick one for 60 days.' },
        { q: 'Do SMBs pay?', a: 'Yes when ROI slide is clear and setup is done-for-them.' },
        { q: 'Security?', a: 'Minimize PII in prompts; use env vars; document data flow.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'synthetic-voice-director': (job) => `
      ${roleIntro(job, 'how to <strong>direct AI voice</strong> like post-production—pacing, pauses, emphasis—so ElevenLabs output sounds human (see References).')}
      ${coverFigure(job, 'Voice directors sell listenable minutes—not robotic reads.')}
      <h3>Script preparation</h3>
      <ul>
        <li><strong>WPM targets:</strong> 140 explainers, 160 ads, 120 dense technical</li>
        <li><strong>[PAUSE 0.4s]</strong> after claims and before CTAs</li>
        <li><strong>*emphasis*</strong> on one word per sentence max</li>
        <li>Short sentences; oral contractions OK</li>
        <li>Chapter splits every 90–120 seconds for long course audio</li>
      </ul>
      <h3>Three preset profiles (sell as a pack)</h3>
      <p><strong>Corporate</strong> — neutral, steady. <strong>Coach</strong> — warm, smile in voice. <strong>Ad</strong> — energetic, faster. Same script, three exports; client picks winner.</p>
      <h3>Post chain</h3>
      <p>Generate in ${job.tools[0]} → light mastering in ${job.tools[2]} → noise cleanup in ${job.tools[3]}. Deliver WAV + MP3 + changelog of settings.</p>
      ${practiceExercise('60-second explainer', [
        'Rewrite a blog intro for spoken delivery.',
        'Generate 3 profiles; pick best.',
        'Compare to raw TTS without marks—show client why directing matters.',
      ])}
      ${toolsSection(job, "Primary: " +  job.tools.join(', ') + ". Lock voice IDs per client brand.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['A/B raw vs directed audio', 'Settings sheet (stability, similarity)', 'One long-form chapter sample'])}
      ${pricingSection(job, [
        { name: 'Spot', scope: 'Up to 60s, one voice', priceHint: '$40–120' },
        { name: 'Episode', scope: '10 min narrated + mastering', priceHint: '$200–500' },
        { name: 'Brand voice', scope: '3 profiles + style guide', priceHint: '$600–1.2k' },
      ])}
      ${mistakesSection([
        'Uploading wall-of-text without breaks',
        'Changing voice settings every export',
        'No breath pauses (fatigue listening)',
        'Over-selling “100% human” ethically',
      ])}
      ${faqSection([
        { q: 'Will AI replace voice actors?', a: 'It replaces low-budget speed needs; directors remain for brand and emotion.' },
        { q: 'Commercial rights?', a: 'Use platform license tier client pays for; document in SOW.' },
        { q: 'Best niches?', a: 'Courses, explainers, internal training, ad variants.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'multimodal-brand-curator': (job) => `
      ${roleIntro(job, 'how to build a <strong>brand-lock prompt library</strong> (10+ briefs) so AI image batches stay on-brand at scale.')}
      ${coverFigure(job, 'Curators enforce one visual system across hundreds of variants.')}
      <h3>Brand lock document (create once per client)</h3>
      <ul>
        <li>Hex palette (primary, accent, background)</li>
        <li>Photography style (lens, lighting, grain)</li>
        <li>Banned elements (competitor colors, off-brand mascots, clutter)</li>
        <li>Aspect ratios per channel (1:1, 4:5, 16:9, 9:16)</li>
        <li>Negative prompts library (extra fingers, warped logos)</li>
      </ul>
      <h3>Deliverable types in library</h3>
      <p>Hero banner, social post, ad creative, email header, blog OG—each gets a brief template under 120 words for image models (${job.tools[0]}, ${job.tools[1]}).</p>
      <h3>QC gate (reject if)</h3>
      <p>Wrong logo geometry, illegible product, off-palette skies, inconsistent character face, text gibberish in-image.</p>
      ${practiceExercise('10-prompt library for one fake brand', [
        'Create mood board + banned list.',
        'Write 10 briefs; generate 30 images.',
        'Cull to best 12; document rejection reasons.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". " +  job.tools[2] + " Brand Kit for non-AI layouts.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Brand lock PDF', 'Grid of 12 on-brand images', 'Rejected vs approved examples'])}
      ${pricingSection(job, [
        { name: 'Brand lock setup', scope: 'Doc + 10 prompts', priceHint: '$500–1k' },
        { name: 'Campaign pack', scope: '20 assets + QC', priceHint: '$800–2k' },
        { name: 'Monthly refresh', scope: 'Ongoing packs', priceHint: '$1k–3k/mo' },
      ])}
      ${mistakesSection([
        'Re-briefing from scratch each shoot',
        'No negative prompts',
        'Approving hands/faces without zoom QC',
        'Mixing illustration and photo styles randomly',
      ])}
      ${faqSection([
        { q: 'Firefly vs Midjourney?', a: 'Firefly safer for enterprise IP claims; Midjourney for bold social.' },
        { q: 'Copyright?', a: 'Clarify client license; avoid trademarked characters.' },
        { q: 'Who hires?', a: 'Marketing teams drowning in variant requests.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'autonomous-agent-architect': (job) => `
      ${roleIntro(job, 'how to complete an <strong>agent spec sheet</strong> with guardrails and human approval gates before building agents with Claude Code or OpenAI Assistants.')}
      ${coverFigure(job, 'Agent builders deploy digital workers with scope limits—not demos that email strangers.')}
      <h3>Spec sheet sections</h3>
      <ol>
        <li><strong>Job-to-be-done</strong> — one measurable outcome</li>
        <li><strong>Inputs allowed</strong> — URLs, files, CRM IDs</li>
        <li><strong>Tools</strong> — search, spreadsheet read, draft email (send = gated)</li>
        <li><strong>Memory</strong> — session vs persistent; retention days</li>
        <li><strong>Guardrails</strong> — PII rules, spend caps, blocked domains</li>
        <li><strong>Human gates</strong> — external actions need approve button</li>
        <li><strong>Metrics</strong> — tasks completed, override rate, cost/run</li>
        <li><strong>Tests</strong> — 5 scenarios incl. jailbreak attempt</li>
      </ol>
      <h3>First agent to ship</h3>
      <p>Research agent: given topic → structured brief with citations → saves to Notion. No autonomous email. Log every run.</p>
      ${practiceExercise('Spec + prototype', [
        'Fill spec for research agent.',
        'Implement with 3 tools max.',
        'Run 20 tests; document overrides.',
        'Write security one-pager for client.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". Start no-code (" +  job.tools[4] + ") before " +  job.tools[3] + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Spec PDF', 'Demo video with gates visible', 'Test results table'])}
      ${pricingSection(job, [
        { name: 'Discovery + spec', scope: 'Workshop + doc', priceHint: '$1k–2.5k' },
        { name: 'Agent MVP', scope: 'One JTBD + logging', priceHint: '$3k–8k' },
        { name: 'Care plan', scope: 'Tune + monitor', priceHint: '$1k–4k/mo' },
      ])}
      ${mistakesSection([
        'Autonomous send on day one',
        'No cost cap',
        'Tool sprawl without evals',
        'Selling “AI employee” without SLA',
      ])}
      ${faqSection([
        { q: 'Code required?', a: 'Light Python/TS helps; many MVPs are no-code + API.' },
        { q: 'Liability?', a: 'Contractual gates + logging; never promise zero errors.' },
        { q: 'Hottest use cases?', a: 'Research, ops summaries, internal Q&A on docs.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'training-data-quality-analyst': (job) => `
      ${roleIntro(job, 'how to apply <strong>rubrics</strong> to model outputs—the entry path into AI training work on Scale AI and similar platforms.')}
      ${coverFigure(job, 'Analysts sell consistent human judgment at scale.')}
      <h3>What the work is</h3>
      <p>${job.description} You are the human layer models need. ${job.timeSaved} is N/A—you <em>are</em> the product. Pay starts modest; specialists in law, code, medicine, or African languages climb tiers toward ${job.earning}.</p>
      <h3>Rubric dimensions (example: helpfulness)</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1.5em 0;">
        <tr><td style="padding:8px;"><strong>5</strong></td><td style="padding:8px;">Accurate, complete, safe, follows instructions</td></tr>
        <tr><td style="padding:8px;"><strong>4</strong></td><td style="padding:8px;">Minor omission</td></tr>
        <tr><td style="padding:8px;"><strong>3</strong></td><td style="padding:8px;">Partially helpful</td></tr>
        <tr><td style="padding:8px;"><strong>2</strong></td><td style="padding:8px;">Major issues</td></tr>
        <tr><td style="padding:8px;"><strong>1</strong></td><td style="padding:8px;">Wrong, unsafe, or off-task</td></tr>
      </table>
      <p>Always write one-sentence justification per dimension. Speed matters but <strong>consistency</strong> gets you promoted.</p>
      <h3>Career ladder</h3>
      <ol>
        <li>Pass onboarding (${job.tools[0]}, ${job.tools[1]})</li>
        <li>Specialize one domain</li>
        <li>Reviewer tier — audit others</li>
        <li>Expert projects — higher $/hour</li>
      </ol>
      ${practiceExercise('Rubric drill', [
        'Take 10 public model answers on a hard topic.',
        'Score with 3 dimensions; write justifications.',
        'Compare with a friend—calibrate disagreement.',
      ])}
      ${toolsSection(job, "Platforms: " +  job.tools.join(', ') + ". " +  job.tools[2] + " for custom rubric practice.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Accuracy stats screenshot (platform)', 'Domain specialization statement', 'Sample rubric annotations'])}
      ${pricingSection(job, [
        { name: 'Platform tier', scope: 'Hourly tasks', priceHint: job.earning },
        { name: 'Expert reviewer', scope: 'Domain QA', priceHint: '$35–55/h' },
        { name: 'Consulting', scope: 'Rubric design for startups', priceHint: '$60–100/h' },
      ])}
      ${mistakesSection([
        'Rushing without reading instructions',
        'Inconsistent scores (gets you removed)',
        'Ignoring safety policies',
        'Staying generalist too long',
      ])}
      ${faqSection([
        { q: 'Is this real remote work?', a: 'Yes—platform-dependent availability by region and domain.' },
        { q: 'Stable income?', a: 'Treat as ramp + specialize; not passive.' },
        { q: 'Upside path?', a: 'QA lead, rubric consultant, domain expert.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'meeting-intelligence-specialist': (job) => `
      ${roleIntro(job, 'the <strong>one-page meeting synthesis template</strong> executives forward without rewriting—decisions, owners, deadlines.')}
      ${coverFigure(job, 'Synthesis beats transcript dumps.')}
      <h3>Why leaders pay</h3>
      <p>${job.hireReason} Remote teams drown in recordings nobody re-watches. You deliver ${job.timeSaved} per executive per week with same-day SLA.</p>
      <h3>Template (fixed order)</h3>
      <ol>
        <li><strong>Executive summary</strong> — 5 bullets, no adjectives</li>
        <li><strong>Decisions</strong> — table: decision | owner | effective date</li>
        <li><strong>Actions</strong> — task | owner | due | status</li>
        <li><strong>Open questions</strong> — max 5</li>
        <li><strong>Next meeting inputs</strong> — what to prepare</li>
      </ol>
      <h3>Processing pipeline</h3>
      <p>Upload to ${job.tools[0]} or ${job.tools[1]} → export transcript → ${job.tools[2]} with strict template → human pass for names/numbers → push to ${job.tools[3]} / Slack.</p>
      ${practiceExercise('5 meetings challenge', [
        'Process 5 public or mock recordings.',
        'Standardize template; track time per minute of audio.',
        'Offer two executives a free week trial.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ". Template is the product.")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Redacted sample memo', 'Turnaround SLA statement', 'Integration screenshot (Notion/Slack)'])}
      ${pricingSection(job, [
        { name: 'Per meeting', scope: '&lt;60 min audio', priceHint: '$25–60' },
        { name: 'Exec subscription', scope: 'Unlimited* fair use', priceHint: '$300–800/mo' },
        { name: 'Team roll-out', scope: 'Template + training', priceHint: '$1k–2k' },
      ])}
      ${mistakesSection([
        'Pasting transcript walls',
        'Missing owners on actions',
        'Wrong names (always verify)',
        'Late delivery (kills subscription)',
      ])}
      ${faqSection([
        { q: 'Confidentiality?', a: 'NDA, secure drive, delete audio after delivery if required.' },
        { q: 'AI enough alone?', a: 'No—human verification for names, numbers, decisions.' },
        { q: 'Best buyers?', a: 'CEOs, PMs, agency principals, nonprofit boards.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,

  'social-velocity-producer': (job) => `
      ${roleIntro(job, 'how to build a <strong>30-day content calendar in 90 minutes</strong> using three pillars—hooks, formats, and asset briefs.')}
      ${coverFigure(job, 'Consistency systems beat viral lottery.')}
      <h3>Why solopreneurs hire you</h3>
      <p>${job.hireReason} You sell ${job.timeSaved} and remove daily “what do I post?” anxiety.</p>
      <h3>Three pillars (pick before calendar)</h3>
      <ul>
        <li><strong>Proof</strong> — results, testimonials, case snippets</li>
        <li><strong>Teach</strong> — myths, how-tos, frameworks</li>
        <li><strong>Human</strong> — behind-scenes, values, story</li>
      </ul>
      <h3>90-minute batch</h3>
      <ol>
        <li>Define audience + one CTA for the month (15 min)</li>
        <li>Generate 30 hooks in ${job.tools[0]} (20 min)</li>
        <li>Assign format: reel / carousel / story per day (15 min)</li>
        <li>Write asset brief per post for ${job.tools[1]} + ${job.tools[2]} (30 min)</li>
        <li>Film batch afternoon (10 min planning shot list)</li>
      </ol>
      <h3>Posting ops</h3>
      <p>Schedule in ${job.tools[3]}; review comments once daily; repurpose top 20% into ads.</p>
      ${practiceExercise('Demo account 30-day run', [
        'Pick niche you can research.',
        'Publish 30 days; track saves and follows.',
        'Screenshot analytics for portfolio.',
      ])}
      ${toolsSection(job, job.tools.join(', ') + ".")}
      ${learningPath(job)}
      ${portfolioProof(job, ['Calendar spreadsheet PDF', '3 best performing posts', 'Pillar definitions doc'])}
      ${pricingSection(job, [
        { name: 'Calendar only', scope: '30 days planned', priceHint: '$200–500' },
        { name: 'Calendar + assets', scope: 'Briefs + templates', priceHint: '$600–1.2k' },
        { name: 'Full velocity', scope: 'Plan + edit + schedule', priceHint: '$1.5k–4k/mo' },
      ])}
      ${mistakesSection([
        'Random posting without CTA',
        'Same hook formula every day',
        'Ignoring platform analytics',
        'Over-producing polish before testing hooks',
      ])}
      ${faqSection([
        { q: 'Need huge following first?', a: 'No—sell systems to businesses with offers, not influencer fame.' },
        { q: 'AI content policy?', a: 'Disclose where required; focus on strategy + human on-camera.' },
        { q: 'Niches that pay?', a: 'Coaches, local services, B2B tools, schools.' },
      ])}
      ${promptsSection(job)}
      <h3>References</h3>${refs(job)}${ctaFooter(job)}
    `,
}
