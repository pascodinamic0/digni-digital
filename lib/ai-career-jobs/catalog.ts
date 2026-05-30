import type { AiCareerJob } from './types'

/** Untold & emerging AI-assisted careers accessible with ChatGPT, Claude, Gemini, and no-code tools. */
export const AI_CAREER_JOBS: AiCareerJob[] = [
  {
    id: 'visual-narrative-architect',
    fancyTitle: 'Visual Narrative Architect',
    plainTitle: 'AI Thumbnail & Cover Designer',
    slug: 'visual-narrative-architect-ai-thumbnail-designer-career',
    icon: '🖼️',
    earning: '$25–75/hour',
    demand: 'Very High',
    description:
      'Design scroll-stopping thumbnails and covers using AI image tools plus human taste—what creators hire when views depend on the first frame.',
    tools: ['Midjourney', 'Ideogram', 'Canva AI', 'Photoshop Generative Fill', 'ChatGPT'],
    timeSaved: '4–8 hours per batch of 10 thumbnails',
    hireReason:
      'Creators and brands lose clicks when thumbnails look generic; a specialist turns briefs into tested visual hooks fast.',
    references: [
      { label: 'YouTube Creator Academy — Thumbnails', href: 'https://creatoracademy.youtube.com/page/lesson/thumbnails' },
      { label: 'Midjourney documentation', href: 'https://docs.midjourney.com/' },
      { label: 'Upwork — AI design demand (2026)', href: 'https://www.upwork.com/resources/freelance-skills' },
    ],
    learningSteps: [
      'Study 50 top-performing thumbnails in one niche; note color, face, text, and contrast patterns.',
      'Learn one image model deeply (Midjourney or Ideogram) plus Canva for text overlays.',
      'Publish a free “3 thumbnail variants” sample for a small creator to build proof.',
      'Package a fixed offer: 5 thumbnails + 2 revision rounds in 48 hours.',
    ],
    prompts: [
      {
        label: 'Thumbnail concept brief',
        prompt:
          'Act as a YouTube growth designer. Niche: [NICHE]. Video title: "[TITLE]". Audience: [AUDIENCE]. Generate 5 thumbnail concepts with: focal subject, emotion, 3-word overlay text, color palette (hex), and composition notes for 16:9. Optimize for mobile legibility.',
      },
      {
        label: 'Midjourney prompt polish',
        prompt:
          'Rewrite this image prompt for Midjourney v6: "[RAW PROMPT]". Add lighting, lens, aspect ratio --ar 16:9, and negative space for text. Keep face expressive and avoid clutter.',
      },
    ],
    hook: 'Views do not start in the edit bay—they start in the frame people refuse to scroll past.',
  },
  {
    id: 'cinematic-synthesis-specialist',
    fancyTitle: 'Cinematic Synthesis Specialist',
    plainTitle: 'AI Video Editor',
    slug: 'cinematic-synthesis-specialist-ai-video-editor-career',
    icon: '🎬',
    earning: '$35–90/hour',
    demand: 'Exploding',
    description:
      'Turn raw footage and scripts into polished shorts, ads, and explainers using AI editing, b-roll, captions, and pacing—without a full studio team.',
    tools: ['CapCut AI', 'Runway', 'Descript', 'Opus Clip', 'DaVinci Resolve'],
    timeSaved: '6–12 hours per 60-second polished short',
    hireReason:
      'Brands need daily video; AI handles cuts, captions, and B-roll while you control story and brand tone.',
    references: [
      { label: 'Runway — AI video tools', href: 'https://runwayml.com/' },
      { label: 'Descript — text-based editing', href: 'https://www.descript.com/' },
      { label: 'WEF Future of Jobs 2025', href: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
    ],
    learningSteps: [
      'Edit 10 short-form videos start-to-finish with one toolchain (CapCut + Opus Clip is enough).',
      'Build a reel showing before/after: raw → captioned → hook-first cut.',
      'Offer a “7-day content sprint” retainer for one local business.',
      'Document your template: hook → proof → CTA in under 45 seconds.',
    ],
    prompts: [
      {
        label: 'Short-form edit map',
        prompt:
          'You are a short-form editor. Transcript: """[PASTE]""". Output: (1) hook line in first 2 seconds, (2) cut list with timestamps, (3) on-screen text per segment, (4) B-roll suggestions, (5) CTA in last 3 seconds. Style: [BRAND TONE].',
      },
      {
        label: 'Caption style guide',
        prompt:
          'Create a caption style guide for [PLATFORM]: max chars per line, emoji policy, keyword highlights, and 3 example lines from this script: """[SCRIPT]""".',
      },
    ],
    hook: 'The new video editor is not faster scissors—it is a storyteller who commands AI assembly lines.',
  },
  {
    id: 'conversational-persona-architect',
    fancyTitle: 'Conversational Persona Architect',
    plainTitle: 'AI Chatbot Voice & Personality Designer',
    slug: 'conversational-persona-architect-ai-chatbot-designer-career',
    icon: '🎭',
    earning: '$40–100/hour',
    demand: 'Growing Fast',
    description:
      'Shape how AI assistants sound—tone, boundaries, escalation, and brand voice—for support, sales, and onboarding bots.',
    tools: ['Voiceflow', 'Botpress', 'OpenAI API', 'Claude', 'Custom GPTs'],
    timeSaved: '2–4 weeks of trial-and-error bot tuning',
    hireReason:
      'Generic bots erode trust; businesses pay for voices that feel on-brand and know when to hand off to humans.',
    references: [
      { label: 'Voiceflow documentation', href: 'https://docs.voiceflow.com/' },
      { label: 'OpenAI — prompt engineering guide', href: 'https://platform.openai.com/docs/guides/prompt-engineering' },
      { label: 'Anthropic — Claude prompting', href: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
    ],
    learningSteps: [
      'Clone one brand voice from their website FAQs into a Custom GPT; document tone rules.',
      'Build a demo bot with 3 flows: greet → qualify → escalate.',
      'Measure: deflection rate, CSAT on 20 test conversations.',
      'Sell “voice kit + bot template” as a productized service.',
    ],
    prompts: [
      {
        label: 'Brand voice system prompt',
        prompt:
          'Write a system prompt for a [INDUSTRY] support bot. Brand adjectives: [LIST]. Never say: [LIST]. Escalate when: [TRIGGERS]. Include 5 example user messages and ideal replies under 80 words.',
      },
      {
        label: 'Escalation playbook',
        prompt:
          'Given this bot scope: """[SCOPE]""", list 15 edge cases that must escalate to a human, with the exact handoff message the bot should use.',
      },
    ],
    hook: 'Customers do not hate AI—they hate AI that sounds like it was born in a spreadsheet.',
  },
  {
    id: 'lexical-refinement-curator',
    fancyTitle: 'Lexical Refinement Curator',
    plainTitle: 'AI Content Humanizer & Editor',
    slug: 'lexical-refinement-curator-ai-content-humanizer-career',
    icon: '✨',
    earning: '$30–70/hour',
    demand: 'Very High',
    description:
      'Take AI drafts and make them sound human, accurate, and on-brand—fixing tone, structure, and factual gaps clients are afraid to publish raw.',
    tools: ['Claude', 'ChatGPT', 'Grammarly', 'Originality.ai', 'Google Search'],
    timeSaved: '3–5 hours per long-form article',
    hireReason:
      'Publishing raw AI copy risks reputation; editors who combine fact-checking + voice win retainers.',
    references: [
      { label: 'Google Search Quality Rater Guidelines (E-E-A-T)', href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Plain English — AI in Plain English', href: 'https://ai.plainenglish.io/' },
    ],
    learningSteps: [
      'Practice “AI draft → human final” on 5 pieces; track edit categories (tone, fact, structure).',
      'Create a checklist: claim → source, voice → brand guide, CTA → single action.',
      'Offer tiered editing: light polish vs full rewrite with citations.',
    ],
    prompts: [
      {
        label: 'Humanize without losing facts',
        prompt:
          'Edit this draft for a [AUDIENCE]. Keep all factual claims but mark any that need a source with [CITE]. Tone: conversational, confident, no hype words. Draft: """[TEXT]"""',
      },
      {
        label: 'Fact-check pass',
        prompt:
          'List every factual claim in this article as bullet points. For each, say: verified / needs source / likely wrong. Article: """[TEXT]"""',
      },
    ],
    hook: 'The bottleneck is not generating words—it is publishing words someone would stake their name on.',
  },
  {
    id: 'generative-search-strategist',
    fancyTitle: 'Generative Search Visibility Strategist',
    plainTitle: 'GEO / AI Search Optimization Specialist',
    slug: 'generative-search-visibility-strategist-geo-career',
    icon: '🔍',
    earning: '$45–120/hour',
    demand: 'Exploding',
    description:
      'Help brands show up in ChatGPT, Perplexity, and Google AI Overviews through entity clarity, citations, and structured content—not old-school keyword stuffing.',
    tools: ['ChatGPT', 'Perplexity', 'Google Search Console', 'Schema markup', 'Claude'],
    timeSaved: '10–20 hours of guesswork per audit',
    hireReason:
      'Buyers now ask AI before Google; brands need discoverability in answer engines, not only blue links.',
    references: [
      { label: 'Google — AI Overviews', href: 'https://developers.google.com/search/docs/appearance/ai-overviews' },
      { label: 'Perplexity for publishers', href: 'https://www.perplexity.ai/hub' },
      { label: 'Search Qualify — AI jobs 2026', href: 'https://searchqualify.com/blog/new-types-of-jobs-created-by-ai-2026' },
    ],
    learningSteps: [
      'Run 20 brand queries in ChatGPT + Perplexity; screenshot who gets cited.',
      'Audit one site: About page, schema, author bios, statistics with sources.',
      'Deliver a 1-page “AI citation gap” report as your lead magnet.',
    ],
    prompts: [
      {
        label: 'Entity clarity audit',
        prompt:
          'Act as a GEO consultant. Brand: [NAME]. Website: [URL]. List: (1) unclear entity signals, (2) missing statistics with sources, (3) pages to add for AI citation, (4) five question queries the brand should answer on-site.',
      },
      {
        label: 'FAQ block for AI citations',
        prompt:
          'Write 8 FAQ pairs (40–60 words each answer) that cite [BRAND] as the expert on [TOPIC]. Use specific numbers and neutral tone. Include suggested schema type.',
      },
    ],
    hook: 'SEO bought attention on a page; GEO earns mention in the answer.',
  },
  {
    id: 'prompt-systems-engineer',
    fancyTitle: 'Prompt Systems Engineer',
    plainTitle: 'Production Prompt Engineer',
    slug: 'prompt-systems-engineer-production-prompt-career',
    icon: '⚙️',
    earning: '$50–130/hour',
    demand: 'Very High',
    description:
      'Design, version, and test prompts and tool chains that power real workflows—not one-off tricks, but reliable production systems.',
    tools: ['OpenAI API', 'Claude', 'LangSmith', 'PromptLayer', 'GitHub'],
    timeSaved: '15–30% error rate drop on LLM workflows',
    hireReason:
      'Teams waste API spend on flaky prompts; engineers who treat prompts like code ship dependable AI features.',
    references: [
      { label: 'OpenAI API docs', href: 'https://platform.openai.com/docs' },
      { label: 'Anthropic — prompt engineering', href: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
      { label: 'Mercor — AI jobs 2026', href: 'https://www.mercor.com/resources/experts/new-artificial-intelligence-job-opportunities/' },
    ],
    learningSteps: [
      'Version prompts in Git; run 20 test cases per change.',
      'Learn JSON-mode / structured outputs for one use case (classification, extraction).',
      'Ship a micro-SaaS or internal tool with logged evals.',
    ],
    prompts: [
      {
        label: 'Eval set generator',
        prompt:
          'For this task: """[TASK]""", generate 25 test inputs including edge cases. Output JSON: [{input, expected_format, difficulty}].',
      },
      {
        label: 'Prompt regression fix',
        prompt:
          'Old prompt worked; new prompt fails on: """[FAILURES]""". Old: """[OLD]""". New: """[NEW]""". Suggest minimal diff and 3 guardrail rules.',
      },
    ],
    hook: 'Prompt engineering grew up—it is now reliability engineering for language models.',
  },
  {
    id: 'workflow-orchestration-specialist',
    fancyTitle: 'AI Workflow Orchestration Specialist',
    plainTitle: 'AI Automation & Zapier Architect',
    slug: 'ai-workflow-orchestration-specialist-automation-career',
    icon: '🔗',
    earning: '$40–110/hour',
    demand: 'Exploding',
    description:
      'Connect ChatGPT, Claude, CRMs, and no-code tools into automations that replace repetitive ops work for small businesses.',
    tools: ['Make.com', 'Zapier', 'n8n', 'Notion AI', 'Airtable'],
    timeSaved: '5–15 hours/week per client process',
    hireReason:
      'Owners know AI exists but not how to wire it; they pay for outcomes like “lead → summary → Slack → calendar.”',
    references: [
      { label: 'Make.com Academy', href: 'https://academy.make.com/' },
      { label: 'Zapier — AI actions', href: 'https://zapier.com/ai' },
      { label: 'n8n documentation', href: 'https://docs.n8n.io/' },
    ],
    learningSteps: [
      'Rebuild one manual process you know (invoice follow-up, lead routing).',
      'Document ROI: time saved × hourly rate.',
      'Productize 3 “automation kits” with fixed pricing.',
    ],
    prompts: [
      {
        label: 'Automation blueprint',
        prompt:
          'Map an automation for: """[PROCESS]""". Tools available: [TOOLS]. Output: trigger, steps, AI step prompts, failure alerts, and estimated hours saved per week.',
      },
      {
        label: 'Error handling spec',
        prompt:
          'For this Zap/Make scenario: """[FLOW]""", list failure modes and the fallback action (retry, human notify, dead-letter log).',
      },
    ],
    hook: 'The highest-paid AI skill is not chatting with a bot—it is making bots do the boring work reliably.',
  },
  {
    id: 'synthetic-voice-director',
    fancyTitle: 'Synthetic Voice Narration Director',
    plainTitle: 'AI Voiceover & Audio Producer',
    slug: 'synthetic-voice-narration-director-ai-voiceover-career',
    icon: '🎙️',
    earning: '$30–80/hour',
    demand: 'Growing Fast',
    description:
      'Produce natural voiceovers for courses, ads, and podcasts using AI voices plus human direction on pacing, emphasis, and emotion.',
    tools: ['ElevenLabs', 'Play.ht', 'Descript Overdub', 'Adobe Podcast AI'],
    timeSaved: '3–6 hours per 10-minute narrated video',
    hireReason:
      'Studios are expensive; AI voice with a director gives 80% quality at 20% cost for explainer and ad markets.',
    references: [
      { label: 'ElevenLabs', href: 'https://elevenlabs.io/' },
      { label: 'Descript', href: 'https://www.descript.com/' },
    ],
    learningSteps: [
      'Create 3 voice profiles (corporate, warm, energetic) with consistent settings.',
      'Learn breath pauses, emphasis marks, and chapter splits for long scripts.',
      'Bundle voice + light mastering as one deliverable.',
    ],
    prompts: [
      {
        label: 'Script for spoken delivery',
        prompt:
          'Rewrite this text for voiceover: short sentences, oral contractions, pause markers [PAUSE], emphasis *words*. Target length: [MINUTES] at 140 wpm. Text: """[TEXT]"""',
      },
    ],
    hook: 'The voice economy no longer requires a booth—it requires a director.',
  },
  {
    id: 'multimodal-brand-curator',
    fancyTitle: 'Multimodal Brand Asset Curator',
    plainTitle: 'AI Brand Visual Specialist',
    slug: 'multimodal-brand-asset-curator-ai-brand-visuals-career',
    icon: '🎨',
    earning: '$35–85/hour',
    demand: 'Very High',
    description:
      'Create consistent on-brand imagery across campaigns using AI generators, style guides, and human QC.',
    tools: ['Adobe Firefly', 'Midjourney', 'Canva Brand Kit', 'Figma AI'],
    timeSaved: '8–16 hours per campaign asset pack',
    hireReason:
      'Marketing teams need volume without brand drift; curators enforce style across hundreds of variants.',
    references: [
      { label: 'Adobe Firefly', href: 'https://www.adobe.com/products/firefly.html' },
      { label: 'Brand consistency — Canva', href: 'https://www.canva.com/learn/brand-consistency/' },
    ],
    learningSteps: [
      'Build a brand mood board + banned elements list.',
      'Train a reusable style prompt library (10 prompts).',
      'Sell monthly “asset packs” (social, ads, email headers).',
    ],
    prompts: [
      {
        label: 'Brand-locked image brief',
        prompt:
          'Generate image briefs for [BRAND]. Colors: [HEX]. Style: [STYLE]. Never include: [BANNED]. Deliverable: 6 social posts + 2 ad sizes. Each brief under 120 words for image AI.',
      },
    ],
    hook: 'Brands do not need more pictures—they need pictures that look like the same company.',
  },
  {
    id: 'autonomous-agent-architect',
    fancyTitle: 'Autonomous Agent Integration Architect',
    plainTitle: 'AI Agent Developer (No-Code & Light Code)',
    slug: 'autonomous-agent-integration-architect-ai-agent-career',
    icon: '🤖',
    earning: '$60–150/hour',
    demand: 'Exploding',
    description:
      'Build agents that research, draft, and execute multi-step tasks using Claude Code, OpenAI assistants, and orchestration frameworks.',
    tools: ['Claude Code', 'OpenAI Assistants', 'CrewAI', 'LangGraph', 'Relevance AI'],
    timeSaved: '20–40 hours/month on research & ops tasks',
    hireReason:
      'Fiverr reported explosive demand for AI agent builders; businesses want custom agents, not generic chat.',
    references: [
      { label: 'Anthropic — Claude', href: 'https://www.anthropic.com/claude' },
      { label: 'OpenAI — Assistants API', href: 'https://platform.openai.com/docs/assistants/overview' },
      { label: 'LangChain — LangGraph', href: 'https://langchain-ai.github.io/langgraph/' },
    ],
    learningSteps: [
      'Ship one agent with 3 tools (search, spreadsheet, email draft).',
      'Log every run; add human approval gates for external actions.',
      'Price on outcome: “research agent” vs hourly.',
    ],
    prompts: [
      {
        label: 'Agent spec sheet',
        prompt:
          'Design an AI agent for: """[JOB TO BE DONE]""". Output: goal, tools, memory, guardrails, success metrics, and 5 test scenarios with expected outputs.',
      },
    ],
    hook: 'Freelance platforms are not hiring prompt writers—they are hiring people who can deploy digital workers.',
  },
  {
    id: 'training-data-quality-analyst',
    fancyTitle: 'Training Data Quality Analyst',
    plainTitle: 'AI Data Annotation & RLHF Specialist',
    slug: 'training-data-quality-analyst-ai-annotation-career',
    icon: '🏷️',
    earning: '$18–55/hour',
    demand: 'Exploding',
    description:
      'Label, rank, and evaluate AI outputs for model training—remote-friendly entry path with upside into QA lead roles.',
    tools: ['Scale AI', 'Remotasks', 'Label Studio', 'Surge AI'],
    timeSaved: 'N/A — you are the human layer models need',
    hireReason:
      'Model companies pay for expert judgment in law, medicine, coding, and languages to improve alignment.',
    references: [
      { label: 'Scale AI', href: 'https://scale.com/' },
      { label: 'Label Studio', href: 'https://labelstud.io/' },
      { label: 'Mercor — AI training jobs', href: 'https://www.mercor.com/resources/experts/new-artificial-intelligence-job-opportunities/' },
    ],
    learningSteps: [
      'Pass platform onboarding on Scale or Remotasks; specialize in one domain.',
      'Learn rubric-based scoring; aim for reviewer tier.',
      'Document accuracy metrics to pitch higher-paying expert projects.',
    ],
    prompts: [
      {
        label: 'Rubric application practice',
        prompt:
          'Given rubric: """[RUBRIC]""" and model response: """[RESPONSE]""", score 1–5 on each dimension with one-sentence justification per dimension.',
      },
    ],
    hook: 'Every smart model stands on thousands of quiet human judgments—and those humans get paid.',
  },
  {
    id: 'meeting-intelligence-specialist',
    fancyTitle: 'Meeting Intelligence Synthesis Specialist',
    plainTitle: 'AI Meeting Notes & Action Item Producer',
    slug: 'meeting-intelligence-synthesis-specialist-career',
    icon: '📝',
    earning: '$22–55/hour',
    demand: 'Growing Fast',
    description:
      'Turn recordings into executive summaries, decisions, and task lists—async collaboration fuel for remote teams.',
    tools: ['Otter.ai', 'Fireflies.ai', 'Claude', 'Notion AI'],
    timeSaved: '2–4 hours per week per executive',
    hireReason:
      'Leaders skip meetings if notes are unreliable; clean synthesis is a subscription-worthy utility.',
    references: [
      { label: 'Otter.ai', href: 'https://otter.ai/' },
      { label: 'Fireflies.ai', href: 'https://fireflies.ai/' },
    ],
    learningSteps: [
      'Process 5 sample recordings; standardize output template (decisions, owners, deadlines).',
      'Integrate with client Notion/Slack; same-day turnaround SLA.',
    ],
    prompts: [
      {
        label: 'Executive meeting summary',
        prompt:
          'From this transcript: """[TRANSCRIPT]""", produce: (1) 5-bullet executive summary, (2) decisions table, (3) action items with owner & due date, (4) open questions. Neutral tone, no fluff.',
      },
    ],
    hook: 'Meetings end; without synthesis, they never happened.',
  },
  {
    id: 'social-velocity-producer',
    fancyTitle: 'Social Velocity Content Producer',
    plainTitle: 'AI Short-Form Social Media Specialist',
    slug: 'social-velocity-content-producer-ai-social-career',
    icon: '📱',
    earning: '$28–75/hour',
    demand: 'Very High',
    description:
      'Batch-create reels, carousels, and posts with AI copy + design systems—what solopreneurs hire instead of a full agency.',
    tools: ['ChatGPT', 'Canva', 'Opus Clip', 'Buffer AI', 'CapCut'],
    timeSaved: '10–20 hours/week of content production',
    hireReason:
      'Consistency beats virality; clients pay for calendars that ship daily without burning out.',
    references: [
      { label: 'Meta Business — Reels', href: 'https://www.facebook.com/business/reels' },
      { label: 'Canva — Content planner', href: 'https://www.canva.com/content-planner/' },
    ],
    learningSteps: [
      'Pick one niche; publish 30 days of content for a demo account.',
      'Create content pillars + AI prompt library per pillar.',
      'Sell 30-day content systems, not single posts.',
    ],
    prompts: [
      {
        label: '30-day content calendar',
        prompt:
          'Brand: [BRAND]. Pillars: [PILLARS]. Generate a 30-day calendar: date, format (reel/carousel/story), hook, CTA, and asset brief. Audience: [AUDIENCE].',
      },
    ],
    hook: 'The creator who wins is not the most talented—it is the most consistent, and AI makes consistency affordable.',
  },
  {
    id: 'podcast-production-director',
    fancyTitle: 'Podcast Production Director (AI-Assisted)',
    plainTitle: 'AI Podcast Editor & Show Notes Writer',
    slug: 'podcast-production-director-ai-assisted-career',
    icon: '🎧',
    earning: '$30–70/hour',
    demand: 'Growing Fast',
    description:
      'Edit episodes, write show notes, pull clips, and draft newsletters from one recording using AI audio and text tools.',
    tools: ['Descript', 'Riverside', 'Claude', 'Headliner'],
    timeSaved: '4–8 hours per episode',
    hireReason:
      'Hosts want to record once and publish everywhere; directors multiply one session into six assets.',
    references: [
      { label: 'Riverside.fm', href: 'https://riverside.fm/' },
      { label: 'Headliner', href: 'https://www.headliner.app/' },
    ],
    learningSteps: [
      'Edit one episode end-to-end; deliver show notes + 3 audiograms.',
      'Template: intro/outro, filler removal, chapter markers.',
    ],
    prompts: [
      {
        label: 'Show notes + chapters',
        prompt:
          'Transcript: """[TRANSCRIPT]""". Output: SEO title, 160-char description, timestamped chapters, 5 pull quotes for social, and newsletter intro (150 words).',
      },
    ],
    hook: 'A podcast is not a file—it is a content factory, and AI is the assembly line.',
  },
  {
    id: 'ecommerce-visual-merchandiser',
    fancyTitle: 'E-Commerce Visual Merchandising AI Specialist',
    plainTitle: 'AI Product Photo & Listing Optimizer',
    slug: 'ecommerce-visual-merchandising-ai-specialist-career',
    icon: '🛍️',
    earning: '$28–65/hour',
    demand: 'Growing Fast',
    description:
      'Generate and refine product imagery, lifestyle shots, and listing copy for Shopify and Amazon sellers at scale.',
    tools: ['Photoroom AI', 'Shopify Magic', 'Claid.ai', 'ChatGPT'],
    timeSaved: '12–24 hours per catalog refresh',
    hireReason:
      'Sellers with 200+ SKUs cannot shoot everything; AI plus QC lifts conversion on listings.',
    references: [
      { label: 'Shopify — Magic', href: 'https://www.shopify.com/magic' },
      { label: 'Amazon — product image requirements', href: 'https://sellercentral.amazon.com/help/hub/reference/G1881' },
    ],
    learningSteps: [
      'Master background removal + lifestyle compositing for 20 SKUs.',
      'A/B test main image variants; report CTR if client shares data.',
    ],
    prompts: [
      {
        label: 'Listing copy pack',
        prompt:
          'Product: [NAME]. Features: [BULLETS]. Write: title (150 chars), 5 bullet benefits, description with objection handling, and 3 FAQ. Tone: [MARKETPLACE] compliant.',
      },
    ],
    hook: 'Clicks buy from photos; AI lets small shops look like enterprise catalogs.',
  },
  {
    id: 'presentation-automation-specialist',
    fancyTitle: 'Presentation Design Automation Specialist',
    plainTitle: 'AI Slide Deck & Pitch Designer',
    slug: 'presentation-design-automation-specialist-career',
    icon: '📊',
    earning: '$35–90/hour',
    demand: 'Very High',
    description:
      'Turn briefs and docs into investor-ready decks using Gamma, Beautiful.ai, and AI—fast, on-brand, and structured for storytelling.',
    tools: ['Gamma', 'Beautiful.ai', 'PowerPoint Copilot', 'Claude'],
    timeSaved: '6–10 hours per deck',
    hireReason:
      'Founders will pay to avoid ugly slides before a raise or sales call; speed + story wins.',
    references: [
      { label: 'Gamma App', href: 'https://gamma.app/' },
      { label: 'Beautiful.ai', href: 'https://www.beautiful.ai/' },
    ],
    learningSteps: [
      'Rebuild a famous pitch deck structure; compare to original.',
      'Offer 48-hour “deck rescue” with fixed slides count.',
    ],
    prompts: [
      {
        label: 'Deck narrative arc',
        prompt:
          'Audience: [INVESTORS/CUSTOMERS]. Goal: [GOAL]. Input notes: """[NOTES]""". Output slide-by-slide: headline, 3 bullets, visual suggestion, speaker notes (30 sec each). Max 12 slides.',
      },
    ],
    hook: 'Deals are lost in the meeting, but they are often lost the night before on slide 7.',
  },
  {
    id: 'copy-qa-verification-specialist',
    fancyTitle: 'AI Copy QA & Verification Specialist',
    plainTitle: 'AI Fact-Checker & Compliance Editor',
    slug: 'ai-copy-qa-verification-specialist-career',
    icon: '✅',
    earning: '$35–80/hour',
    demand: 'Growing Fast',
    description:
      'Verify claims, legal disclaimers, and brand compliance before AI-assisted copy goes live—especially in finance, health, and education.',
    tools: ['Claude', 'Perplexity', 'Grammarly', 'Compliance checklists'],
    timeSaved: 'Risk reduction worth far more than hours saved',
    hireReason:
      'One wrong claim can cost more than a year of editor fees; verification is insurance.',
    references: [
      { label: 'FTC — advertising disclosures', href: 'https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers' },
      { label: 'Google — helpful content', href: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
    learningSteps: [
      'Study industry ad rules for one vertical (finance or health).',
      'Build a red-flag checklist for AI hallucinations in marketing.',
    ],
    prompts: [
      {
        label: 'Compliance preflight',
        prompt:
          'Review this marketing copy for [INDUSTRY]. Flag: unsubstantiated claims, missing disclaimers, comparative claims, and PII risks. Copy: """[TEXT]"""',
      },
    ],
    hook: 'Speed without verification is how brands become cautionary tales.',
  },
  {
    id: 'newsletter-growth-strategist',
    fancyTitle: 'Newsletter Growth Automation Strategist',
    plainTitle: 'AI Email Newsletter Specialist',
    slug: 'newsletter-growth-automation-strategist-career',
    icon: '📬',
    earning: '$30–75/hour',
    demand: 'Very High',
    description:
      'Write, segment, and automate newsletters that nurture leads—combining AI drafting with human strategy and subject-line testing.',
    tools: ['Beehiiv', 'ConvertKit', 'ChatGPT', 'HubSpot AI'],
    timeSaved: '5–8 hours per weekly issue',
    hireReason:
      'Email still prints ROI; founders want someone who ships weekly without writer’s block.',
    references: [
      { label: 'Beehiiv', href: 'https://www.beehiiv.com/' },
      { label: 'HubSpot — email marketing', href: 'https://www.hubspot.com/products/marketing/email' },
    ],
    learningSteps: [
      'Grow or ghost-write one newsletter to 500+ subs as proof.',
      'Document open rate lifts from subject line experiments.',
    ],
    prompts: [
      {
        label: 'Newsletter issue draft',
        prompt:
          'Write issue #[N] for [AUDIENCE]. Theme: [THEME]. Structure: hook story (120 words), 3 insights with examples, one actionable exercise, P.S. CTA to [OFFER]. Tone: [VOICE].',
      },
    ],
    hook: 'Newsletters are not dying—they are the last owned audience, and AI makes weekly shipping realistic.',
  },
  {
    id: 'curriculum-architect',
    fancyTitle: 'AI Course & Curriculum Architect',
    plainTitle: 'AI Instructional Designer',
    slug: 'ai-course-curriculum-architect-career',
    icon: '📚',
    earning: '$40–100/hour',
    demand: 'Very High',
    description:
      'Design modules, quizzes, and facilitator guides with AI—used by coaches, schools, and corporate L&D teams shipping fast.',
    tools: ['ChatGPT', 'Notion AI', 'Articulate AI', 'Gamma'],
    timeSaved: '3–6 weeks of curriculum design',
    hireReason:
      'Experts have knowledge but not course structure; architects turn IP into sellable programs.',
    references: [
      { label: 'Articulate — AI', href: 'https://www.articulate.com/' },
      { label: 'Digni Digital — Future Ready Graduate', href: 'https://www.dignidigital.com/us-en/future-ready-graduate' },
    ],
    learningSteps: [
      'Outline a 4-week cohort course with outcomes, lessons, and assessments.',
      'Pilot with 5 beta students; iterate from completion data.',
    ],
    prompts: [
      {
        label: 'Module outline',
        prompt:
          'Course: [TITLE]. Learner: [PERSONA]. Outcome: [MEASURABLE]. Create 6 modules: objective, lesson flow (45 min), practice assignment, and rubric.',
      },
    ],
    hook: 'Courses are products; AI lets experts ship curricula at software speed.',
  },
  {
    id: 'localization-ai-specialist',
    fancyTitle: 'Multilingual Localization AI Specialist',
    plainTitle: 'AI Translation & Cultural Adaptation Editor',
    slug: 'multilingual-localization-ai-specialist-career',
    icon: '🌍',
    earning: '$30–70/hour',
    demand: 'Growing Fast',
    description:
      'Adapt content across languages with AI first pass and human nuance—critical for African, European, and global markets.',
    tools: ['DeepL', 'Claude', 'Phrase', 'Smartling'],
    timeSaved: '50–70% vs manual translation alone',
    hireReason:
      'Raw machine translation embarrasses brands; editors who fix tone win agency retainers.',
    references: [
      { label: 'DeepL', href: 'https://www.deepl.com/pro' },
      { label: 'UNESCO — digital skills', href: 'https://www.unesco.org/en/digital-education' },
    ],
    learningSteps: [
      'Pick language pair you know natively + professionally.',
      'Build glossary and tone rules for one client vertical.',
    ],
    prompts: [
      {
        label: 'Transcreation brief',
        prompt:
          'Translate and adapt for [LOCALE]. Keep brand terms: [TERMS]. Avoid literal idioms. Source: """[TEXT]""". Output: translation + 3 cultural notes where you changed meaning intentionally.',
      },
    ],
    hook: 'Global reach is not translation—it is transcreation, and AI is the first draft machine.',
  },
  {
    id: 'career-document-strategist',
    fancyTitle: 'Career Document Strategist (AI-Assisted)',
    plainTitle: 'AI Resume & LinkedIn Profile Writer',
    slug: 'career-document-strategist-ai-resume-career',
    icon: '📄',
    earning: '$25–60/hour',
    demand: 'Very High',
    description:
      'Craft ATS-friendly resumes and LinkedIn profiles using AI research plus human positioning—high demand in career transitions.',
    tools: ['ChatGPT', 'Teal', 'Jobscan', 'LinkedIn'],
    timeSaved: '4–6 hours per client package',
    hireReason:
      'Job seekers panic-apply; strategists turn messy careers into clear market stories.',
    references: [
      { label: 'LinkedIn — job seeking', href: 'https://www.linkedin.com/help/linkedin/answer/a133935' },
      { label: 'Jobscan', href: 'https://www.jobscan.co/' },
    ],
    learningSteps: [
      'Rewrite 5 resumes with measurable bullets (metrics, scope, tools).',
      'Offer package: resume + LinkedIn About + 3 outreach templates.',
    ],
    prompts: [
      {
        label: 'Achievement bullet upgrade',
        prompt:
          'Role: [TITLE] at [COMPANY]. Raw duties: """[DUTIES]""". Rewrite 6 bullets in CAR format with metrics placeholders [METRIC] where data missing. Industry: [INDUSTRY].',
      },
    ],
    hook: 'Hiring managers skim for 7 seconds—your job is to win those seconds with evidence, not adjectives.',
  },
  {
    id: 'real-estate-visual-stager',
    fancyTitle: 'Real Estate Visual Staging AI Specialist',
    plainTitle: 'AI Property Photo & Listing Enhancer',
    slug: 'real-estate-visual-staging-ai-specialist-career',
    icon: '🏠',
    earning: '$30–75/hour',
    demand: 'Growing Fast',
    description:
      'Virtual staging, sky replacement, and listing descriptions for agents who need MLS-ready assets in 24 hours.',
    tools: ['BoxBrownie AI', 'Virtual Staging AI', 'ChatGPT', 'Canva'],
    timeSaved: '5–10 hours per listing',
    hireReason:
      'Empty rooms do not sell; agents pay per listing for fast turnarounds before open houses.',
    references: [
      { label: 'National Association of Realtors — photography', href: 'https://www.nar.realtor/' },
    ],
    learningSteps: [
      'Stage 10 rooms with consistent furniture style library.',
      'Partner with 2 local agents; before/after in portfolio.',
    ],
    prompts: [
      {
        label: 'Listing description',
        prompt:
          'Property: [DETAILS]. Write MLS description (max 250 words), 5 feature bullets, and Instagram caption. Compliance: fair housing, no discriminatory language.',
      },
    ],
    hook: 'In real estate, the listing photo is the storefront—and AI renovates the storefront overnight.',
  },
  {
    id: 'onboarding-experience-designer',
    fancyTitle: 'AI Customer Onboarding Experience Designer',
    plainTitle: 'AI Onboarding Flow & Help Center Builder',
    slug: 'ai-customer-onboarding-experience-designer-career',
    icon: '🚀',
    earning: '$45–110/hour',
    demand: 'Growing Fast',
    description:
      'Design onboarding emails, in-app guides, and AI help bots that reduce churn in the first 14 days of SaaS and course products.',
    tools: ['Intercom Fin', 'ChatGPT', 'Userpilot', 'Notion'],
    timeSaved: '2–4 weeks of CX design',
    hireReason:
      'Churn is expensive; founders pay for onboarding that activates users faster.',
    references: [
      { label: 'Intercom — AI support', href: 'https://www.intercom.com/fin' },
      { label: 'Userpilot', href: 'https://userpilot.com/' },
    ],
    learningSteps: [
      'Map one product’s activation metric; design 5-touch onboarding sequence.',
      'Write help center articles from support ticket themes.',
    ],
    prompts: [
      {
        label: 'Onboarding email sequence',
        prompt:
          'Product: [PRODUCT]. Activation goal: [GOAL]. Write 5 emails (day 0,1,3,7,14): subject, preview, body, CTA. Tone: helpful coach, not salesy.',
      },
    ],
    hook: 'Revenue is not lost at cancel—it is lost on day two when nobody knows what to do next.',
  },
  {
    id: 'competitive-intelligence-analyst',
    fancyTitle: 'Competitive Intelligence Briefing Analyst',
    plainTitle: 'AI Market Research & Briefing Specialist',
    slug: 'competitive-intelligence-briefing-analyst-ai-career',
    icon: '📈',
    earning: '$40–95/hour',
    demand: 'Very High',
    description:
      'Deliver weekly competitor briefs, SWOT snapshots, and trend reports using AI research plus human verification.',
    tools: ['Perplexity', 'Claude', 'Google Trends', 'Similarweb'],
    timeSaved: '8–12 hours per research report',
    hireReason:
      'Leaders need decisions, not 100 tabs; analysts package signal into one-page briefs.',
    references: [
      { label: 'Perplexity', href: 'https://www.perplexity.ai/' },
      { label: 'Similarweb', href: 'https://www.similarweb.com/' },
    ],
    learningSteps: [
      'Pick 3 competitors; ship a 2-page brief with sources cited.',
      'Productize “Monday market memo” subscription.',
    ],
    prompts: [
      {
        label: 'Competitor weekly brief',
        prompt:
          'Competitors: [LIST]. Industry: [INDUSTRY]. Produce: moves this week, pricing changes, messaging shifts, risks for [CLIENT], and 3 recommended actions. Cite sources as [SOURCE: url].',
      },
    ],
    hook: 'Strategy without intelligence is improvisation—and AI makes intelligence weekly, not quarterly.',
  },
  {
    id: 'notion-ops-architect',
    fancyTitle: 'Digital Operations Systems Architect',
    plainTitle: 'AI Notion / Airtable Workspace Builder',
    slug: 'digital-operations-systems-architect-notion-ai-career',
    icon: '🗂️',
    earning: '$35–90/hour',
    demand: 'Growing Fast',
    description:
      'Build second brains, CRMs, and project hubs in Notion/Airtable with AI formulas and automations for creators and SMBs.',
    tools: ['Notion AI', 'Airtable AI', 'Make.com', 'ChatGPT'],
    timeSaved: '10–20 hours of setup per workspace',
    hireReason:
      'Teams drown in tools; architects ship one system everyone actually uses.',
    references: [
      { label: 'Notion — AI', href: 'https://www.notion.so/product/ai' },
      { label: 'Airtable', href: 'https://www.airtable.com/' },
    ],
    learningSteps: [
      'Clone a popular template; customize for one niche (agency, coach, school).',
      'Record Loom walkthrough as delivery asset.',
    ],
    prompts: [
      {
        label: 'Workspace schema',
        prompt:
          'Business type: [TYPE]. Team size: [N]. Goals: [GOALS]. Design Notion schema: databases, relations, views, and 5 automations. Output as table: name | fields | purpose.',
      },
    ],
    hook: 'Productivity is not more apps—it is one operating system your team trusts.',
  },
  {
    id: 'ugc-creative-director',
    fancyTitle: 'UGC Creative Direction Specialist',
    plainTitle: 'AI User-Generated Style Ad Creator',
    slug: 'ugc-creative-direction-specialist-ai-ads-career',
    icon: '📣',
    earning: '$35–85/hour',
    demand: 'Very High',
    description:
      'Script and produce UGC-style ads with AI avatars, b-roll, and hooks that performance marketers test at scale.',
    tools: ['Arcads', 'HeyGen', 'CapCut', 'ChatGPT'],
    timeSaved: '6–10 hours per ad variant set',
    hireReason:
      'Media buyers need 10 hooks weekly; AI UGC lowers cost per creative test.',
    references: [
      { label: 'HeyGen', href: 'https://www.heygen.com/' },
      { label: 'Meta — ad policies', href: 'https://www.facebook.com/policies/ads/' },
    ],
    learningSteps: [
      'Study 20 winning UGC ads; extract hook formulas.',
      'Ship 5 variants per product with clear testing labels.',
    ],
    prompts: [
      {
        label: 'UGC script pack',
        prompt:
          'Product: [PRODUCT]. Avatar: [PERSONA]. Write 5 UGC scripts (30 sec each): hook, problem, demo, proof, CTA. Speak in first person, casual, filmed on phone style.',
      },
    ],
    hook: 'Ads are won in the hook, and AI lets you test more hooks than any studio day allows.',
  },
]

export function getAiCareerJobBySlug(slug: string): AiCareerJob | undefined {
  return AI_CAREER_JOBS.find((j) => j.slug === slug)
}
