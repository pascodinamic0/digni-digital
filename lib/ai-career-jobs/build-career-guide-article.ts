import type { BlogArticle } from '@/content/blog/types'
import { AI_CAREER_JOBS } from './catalog'
import type { AiCareerJob } from './types'

const PUBLISH_DATE = 'May 30, 2026'
const AUTHOR = 'Pascal Digny'
const CALENDAR =
  'https://calendar.app.google/xP2APV1Zqbke8JKu6'
const FUTURE_READY_PATH = '/future-ready-graduate'

function externalLink(label: string, href: string): string {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
}

function internalLink(label: string, href: string): string {
  return `<a href="${href}">${label}</a>`
}

function buildReferencesList(job: AiCareerJob): string {
  const refs = [
    ...job.references.map((r) => `<li>${externalLink(r.label, r.href)}</li>`),
    `<li>${internalLink('Digni Digital Future Ready Graduate program', FUTURE_READY_PATH)} — train for AI-era income paths with proof, tools, and mentorship.</li>`,
    `<li>${externalLink('World Economic Forum — Future of Jobs Report 2025', 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/')} — context on fastest-growing digital roles through 2030.</li>`,
  ]
  return `<ul>\n${refs.join('\n')}\n</ul>`
}

function buildPromptsBlock(job: AiCareerJob): string {
  return job.prompts
    .map(
      (p) => `
      <h4>${p.label}</h4>
      <pre style="background: #0f172a; color: #e2e8f0; padding: 1.25rem; border-radius: 12px; overflow-x: auto; font-size: 0.9rem; line-height: 1.5; white-space: pre-wrap;">${p.prompt.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
    `
    )
    .join('\n')
}

function buildLearningSteps(job: AiCareerJob): string {
  return `<ol>\n${job.learningSteps.map((s) => `<li>${s}</li>`).join('\n')}\n</ol>`
}

export function buildCareerGuideArticle(job: AiCareerJob, id: number): BlogArticle {
  const coverPath = `/blog/illustrations/ai-careers/${job.id}.svg`
  const extraFigure =
    job.id === 'visual-narrative-architect'
      ? `
      <figure class="blog-content-figure" style="margin: 2em 0;">
        <img src="/blog/illustrations/ai-careers/visual-narrative-architect-hero.png" alt="Workflow diagram: brief, AI draft thumbnails, human QC, client delivery" width="1200" height="630" style="max-width: 100%; height: auto; border-radius: 12px;" loading="lazy" />
        <figcaption style="text-align: center; font-size: 0.875rem; color: #94a3b8; margin-top: 0.75rem;">Visual Narrative Architects combine AI speed with human taste—brief, generate, refine, ship.</figcaption>
      </figure>
    `
      : ''
  const title = `How to Become a ${job.fancyTitle}: ${job.plainTitle} Career Guide (2026)`
  const tags = [
    job.fancyTitle,
    job.plainTitle,
    'AI careers',
    'future of work',
    'Future Ready',
    'freelance income',
    'Digni Digital',
  ]

  const content = `
      <h2>${job.hook}</h2>

      <p>Platforms like ChatGPT, Claude, and Gemini turned "${job.plainTitle.toLowerCase()}" from a side experiment into a <strong>hireable specialty</strong>. Clients on ${externalLink('Upwork', 'https://www.upwork.com/')} and ${externalLink('Fiverr', 'https://www.fiverr.com/')} increasingly search for operators who deliver outcomes—not people who merely "know AI." This guide shows what a <strong>${job.fancyTitle}</strong> does, why businesses pay for it, how much time you can save, and exactly how to start with copy-paste prompts.</p>

      <blockquote>
        <p><strong>Clarity frame:</strong> We help ambitious learners build ${job.plainTitle.toLowerCase()} skills with measurable proof—without guessing which tools matter—using structured practice and AI leverage.</p>
      </blockquote>

      <figure class="blog-content-figure" style="margin: 2em 0;">
        <img src="${coverPath}" alt="${job.fancyTitle} career path: tools, workflow, and client value" width="1200" height="630" style="max-width: 100%; height: auto; border-radius: 12px;" loading="lazy" />
      </figure>

      <h3>Why traditional "${job.plainTitle}" paths fail</h3>

      <p>The broken model says: spend years on generic credentials, compete on price, and hope employers notice. That fails in 2026 because:</p>

      <ul>
        <li><strong>Commodity skills get automated first</strong>—basic drafts, cuts, and layouts are cheap; judgment and taste are not.</li>
        <li><strong>Job titles lag reality</strong>—clients search for outcomes ("fix my thumbnails," "ship weekly video") not degrees.</li>
        <li><strong>No proof, no trust</strong>—portfolios beat résumés when AI makes everyone sound the same on paper.</li>
        <li><strong>Tool chaos</strong>—jumping between 20 apps without a system burns months; a focused stack wins.</li>
      </ul>

      <p>The better model: learn one stack (${job.tools.slice(0, 4).join(', ')}), ship small paid experiments, and document before/after results clients can verify in under five seconds.</p>

      ${extraFigure}

      <h3>What a ${job.fancyTitle} actually does</h3>

      <p><strong>Plain English:</strong> ${job.description}</p>

      <p><strong>Typical earnings:</strong> ${job.earning} (freelance / contract ranges vary by market and proof).</p>

      <p><strong>Demand signal:</strong> ${job.demand} — aligned with shifts described in the ${externalLink('WEF Future of Jobs 2025', 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/')} report on AI-adjacent roles.</p>

      <h3>The mechanism: how AI multiplies your output</h3>

      <ol>
        <li><strong>Intake</strong> — clarify client outcome, audience, and constraints (brand, deadline, platform).</li>
        <li><strong>AI draft layer</strong> — generate variants fast with ${job.tools[0]} and ${job.tools[1] ?? 'your stack'}.</li>
        <li><strong>Human QC layer</strong> — taste, accuracy, and brand fit (this is what clients pay for).</li>
        <li><strong>Delivery + iteration</strong> — package files, document what worked, and propose the next test.</li>
      </ol>

      <p><strong>Time you can save clients:</strong> ${job.timeSaved}. That is why ${job.hireReason}</p>

      <h3>Case proof: what "good" looks like</h3>

      <p>Students in our ${internalLink('Future Ready Graduate', FUTURE_READY_PATH)} program are taught to ship <strong>visible proof</strong> in 14-day cycles—not endless courses. For this role, strong proof includes:</p>

      <ul>
        <li>A before/after sample for a real or realistic client brief</li>
        <li>A one-page offer: scope, turnaround, revisions, and price</li>
        <li>A short Loom walkthrough explaining your decisions (builds trust fast)</li>
        <li>Metrics when possible: hours saved, CTR lift, response time, or error reduction</li>
      </ul>

      <p>One learner pattern we see: start with a discounted pilot for a local business, over-deliver on speed, then raise prices once three testimonials exist. That is the proof ladder: social proof → logical proof → demonstration → risk reversal (clear revision policy).</p>

      <h3>How to start learning (30-day path)</h3>

      ${buildLearningSteps(job)}

      <p><strong>Secret hack:</strong> Pair AI speed with a narrow niche (dentists, coaches, SaaS, real estate) so your portfolio looks expert-level even while you're still learning the tools.</p>

      <h3>Copy-paste prompts to practice today</h3>

      <p>Replace bracketed placeholders before sending. These are training wheels—edit outputs before client delivery.</p>

      ${buildPromptsBlock(job)}

      <h3>Tool stack to learn first</h3>

      <ul>
        ${job.tools.map((t) => `<li><strong>${t}</strong></li>`).join('\n')}
      </ul>

      <h3>Where this fits in the Future Ready income map</h3>

      <p>On our program page, this path sits alongside other AI-enabled careers—web, video, automation, and more—because the meta-skill is the same: <strong>use AI for leverage, then prove it in public.</strong> If you are a school or training partner, see how we embed these paths into a full curriculum via ${internalLink('Future Ready Graduate', FUTURE_READY_PATH)}.</p>

      <h3>Risk removal: your first paid experiment</h3>

      <p>Offer a fixed-scope pilot: one deliverable, one revision round, 48–72 hour turnaround, clear price. If the client wins, propose a monthly retainer. If not, you still have portfolio material—that is how you de-risk the leap.</p>

      <h3>References & further reading</h3>

      ${buildReferencesList(job)}

      <hr>

      <p><strong>Want help turning this career path into paid proof?</strong></p>
      <p><a href="${CALENDAR}" target="_blank" rel="noopener noreferrer">Book a free strategy call</a> with Digni Digital. We will help you pick the right experiment, tools, and portfolio pieces—so you are not learning in circles.</p>

      <p><em>Role guide: ${job.fancyTitle} (${job.plainTitle}). Part of Digni Digital's Future Ready career library for the AI economy.</em></p>
    `

  return {
    id,
    title,
    slug: job.slug,
    excerpt: `Become a ${job.fancyTitle}: learn what clients pay for, tools to use, time saved (${job.timeSaved}), copy-paste prompts, and a 30-day path—without a traditional degree.`,
    category: 'Future of Work',
    readTime: '11 min read',
    publishDate: PUBLISH_DATE,
    author: AUTHOR,
    tags,
    featured: false,
    coverImageUrl: coverPath,
    content,
  }
}

export function buildAllCareerGuideArticles(startId: number): BlogArticle[] {
  return AI_CAREER_JOBS.map((job, i) => buildCareerGuideArticle(job, startId + i))
}
