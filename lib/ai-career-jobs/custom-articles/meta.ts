/** Unique titles & excerpts, no shared "How to Become a…" pattern */
export const CUSTOM_ARTICLE_META: Record<
 string,
 { title: string; excerpt: string; readTime: string }
> = {
 'visual-narrative-architect': {
 title: 'Run a 7 Day Thumbnail CTR Lab (Template + Scoring Rubric)',
 excerpt:
 'Learn to A/B test YouTube thumbnails with a simple scorecard, mobile legibility, emotion, and contrast, using AI drafts plus human picks. Not a generic career overview.',
 readTime: '14 min read',
 },
 'cinematic-synthesis-specialist': {
 title: 'The 45 Second Short: A Shot by Shot Edit Map Clients Actually Pay For',
 excerpt:
 'Master the hook → proof → CTA structure for Reels and TikTok. Includes a timestamped cut list template and caption rules, not “how to become a video editor.”',
 readTime: '15 min read',
 },
 'conversational-persona-architect': {
 title: 'Build a Bot Voice Matrix in One Afternoon (Tone, Taboo, Escalation)',
 excerpt:
 'Teaches persona design for support bots: 4 tone axes, escalation triggers, and test scripts, before you touch Voiceflow or Botpress.',
 readTime: '13 min read',
 },
 'lexical-refinement-curator': {
 title: 'The 12 Edit Types That Separate Publishable Copy from Raw AI Slop',
 excerpt:
 'A humanizer’s checklist: structure, hedging, claims, rhythm, and brand taboo words, with before/after examples you can practice tonight.',
 readTime: '14 min read',
 },
 'generative-search-strategist': {
 title: 'GEO Audit in 90 Minutes: Will ChatGPT Cite Your Brand?',
 excerpt:
 'Run a generative engine visibility audit: entity signals, FAQ blocks, and citation gaps, with a copy paste report outline for your first client.',
 readTime: '16 min read',
 },
 'prompt-systems-engineer': {
 title: 'Treat Prompts Like Git: Versioning, Eval Sets, and Regression Fixes',
 excerpt:
 'Production prompt engineering for non-coders: 25 case eval sets, JSON outputs, and minimal diff fixes when a “better” prompt breaks production.',
 readTime: '16 min read',
 },
 'workflow-orchestration-specialist': {
 title: 'Blueprint: Lead → AI Summary → CRM → Slack (One Make Scenario)',
 excerpt:
 'Wire a real small business automation with failure alerts and ROI math, step by step, not a list of “top AI jobs.”',
 readTime: '15 min read',
 },
 'synthetic-voice-director': {
 title: 'Direct AI Voice Like a Podcast Producer (Pacing, Pauses, Emphasis)',
 excerpt:
 'Scripts for spoken delivery: WPM targets, [PAUSE] markers, and three voice profiles, so ElevenLabs output sounds human, not robotic.',
 readTime: '13 min read',
 },
 'multimodal-brand-curator': {
 title: 'The Brand Lock Prompt Library: 10 Reusable Image Briefs',
 excerpt:
 'Stop brand drift across AI image batches, build hex, banned elements, and style locks once, then scale campaigns without re explaining taste.',
 readTime: '14 min read',
 },
 'autonomous-agent-architect': {
 title: 'Agent Spec Sheet: Scope, Tools, Guardrails, Human Approval Gates',
 excerpt:
 'Design a safe first agent: what it may do, what requires human OK, and five test scenarios, before you sell “custom AI workers.”',
 readTime: '16 min read',
 },
 'training-data-quality-analyst': {
 title: 'Score Model Outputs With a Rubric (Entry Path Into AI Training Work)',
 excerpt:
 'Practice rubric based ranking, the skill Scale and Remotasks pay for, with a sample dimension table and justification format.',
 readTime: '12 min read',
 },
 'meeting-intelligence-specialist': {
 title: 'One Page Meeting Synthesis Template (Decisions, Owners, Deadlines)',
 excerpt:
 'Turn Otter/Fireflies transcripts into executive summaries clients subscribe to, standardized sections, zero fluff.',
 readTime: '13 min read',
 },
 'social-velocity-producer': {
 title: 'Ship 30 Days of Short Form in 90 Minutes (Pillar → Calendar Method)',
 excerpt:
 'Batch content pillars, hooks, and asset briefs for a full month, consistency system for solopreneurs, not generic “social media tips.”',
 readTime: '14 min read',
 },
 'podcast-production-director': {
 title: 'One Recording → Six Assets: Episode Assembly Checklist',
 excerpt:
 'From transcript to show notes, chapters, audiograms, and newsletter intro, what podcast hosts hire when they record once.',
 readTime: '14 min read',
 },
 'ecommerce-visual-merchandiser': {
 title: '20 SKU Catalog Sprint: Background, Lifestyle, Listing Copy Pack',
 excerpt:
 'A marketplace workflow for Shopify/Amazon sellers: image rules, compliance, and listing bullets that convert, not abstract “AI product photos.”',
 readTime: '15 min read',
 },
 'presentation-automation-specialist': {
 title: '12 Slide Investor Arc From Messy Notes (Gamma Ready Outline)',
 excerpt:
 'Narrative structure for pitch decks: problem, insight, traction, ask, slide by slide headlines and speaker notes in 30 seconds each.',
 readTime: '14 min read',
 },
 'copy-qa-verification-specialist': {
 title: 'Marketing Compliance Preflight for AI Drafts (Finance & Health Ready)',
 excerpt:
 'Red flag checklist: unsubstantiated claims, missing disclaimers, comparison traps, before AI copy goes live in regulated niches.',
 readTime: '15 min read',
 },
 'newsletter-growth-strategist': {
 title: 'Subject Line Science: 10 Tests That Move Open Rates',
 excerpt:
 'Email growth mechanics, curiosity vs clarity, preview text, segmentation hooks, with a weekly issue skeleton you can reuse.',
 readTime: '13 min read',
 },
 'curriculum-architect': {
 title: 'Map Measurable Outcomes to 6 Modules (45 Min Lesson Flow)',
 excerpt:
 'Instructional design for coaches and schools: objectives, practice assignments, rubrics, turn expertise into a sellable cohort outline.',
 readTime: '15 min read',
 },
 'localization-ai-specialist': {
 title: 'Transcreation Notes: When Literal AI Translation Fails',
 excerpt:
 'Adapt copy for locale with glossaries, taboo idioms, and intentional meaning shifts, bilingual editors win agency retainers here.',
 readTime: '14 min read',
 },
 'career-document-strategist': {
 title: 'CAR Bullets in 20 Minutes: Resume Lines Hiring Managers Skim',
 excerpt:
 'Rewrite duty lists into Context to Action to Result bullets with metric placeholders, ATS safe and human readable in one pass.',
 readTime: '13 min read',
 },
 'real-estate-visual-stager': {
 title: 'MLS Ready Staging Ethics: What You May Enhance vs Fabricate',
 excerpt:
 'Virtual staging rules, fair housing safe descriptions, and before/after delivery for agents who need 24 hour turnarounds.',
 readTime: '14 min read',
 },
 'onboarding-experience-designer': {
 title: 'Day 0 to Day 14 Activation: Five Emails That Cut SaaS Churn',
 excerpt:
 'Onboarding sequence design tied to one activation metric, help center articles from real support themes, not generic UX theory.',
 readTime: '15 min read',
 },
 'competitive-intelligence-analyst': {
 title: 'The Monday Market Memo: 2 Page Competitor Brief Template',
 excerpt:
 'Weekly intelligence format: moves, pricing, messaging shifts, three actions, cited sources, executive readable in five minutes.',
 readTime: '14 min read',
 },
 'notion-ops-architect': {
 title: 'Design a Notion OS: Databases, Relations, and Five Automations',
 excerpt:
 'Schema first workspace build for agencies and coaches, one system people actually use, documented with a Loom walkthrough.',
 readTime: '15 min read',
 },
 'ugc-creative-director': {
 title: 'Five UGC Hooks Media Buyers Test Before Scaling Spend',
 excerpt:
 'Phone style ad scripts: problem, demo, proof, CTA, labeled variants for creative testing, not “become a UGC creator” fluff.',
 readTime: '13 min read',
 },
}
