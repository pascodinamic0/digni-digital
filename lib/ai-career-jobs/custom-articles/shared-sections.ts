import type { AiCareerJob } from '../types'
import { ext, int, promptBlock, FUTURE_READY_PATH } from './shared'

export function roleIntro(job: AiCareerJob, lessonFocus: string): string {
  return `
      <p><strong>What this guide teaches:</strong> ${lessonFocus}</p>
      <p><strong>Who hires a ${job.fancyTitle}:</strong> ${job.hireReason}</p>
      <p><strong>Plain-English role:</strong> ${job.description}</p>
      <blockquote>
        <p>${job.hook}</p>
      </blockquote>
      <p><strong>Typical freelance range:</strong> ${job.earning}. <strong>Demand signal (2026):</strong> ${job.demand}. Clients on ${ext('Upwork', 'https://www.upwork.com/')} and ${ext('Fiverr', 'https://www.fiverr.com/')} increasingly buy <em>deliverables</em> (audits, templates, packs)—not “I know AI.”</p>
      <p><strong>Time you can save a client:</strong> ${job.timeSaved} when you run a tight process with ${job.tools.slice(0, 3).join(', ')}.</p>
    `
}

export function learningPath(job: AiCareerJob): string {
  const weeks = [
    { label: 'Week 1 — Learn the stack', steps: job.learningSteps.slice(0, 2) },
    { label: 'Week 2 — Build proof', steps: job.learningSteps.slice(2, 4) },
    { label: 'Week 3–4 — Sell a pilot', steps: job.learningSteps.length > 4 ? job.learningSteps.slice(4) : ['Package a fixed-scope offer with price, turnaround, and revision policy.', 'Deliver for one real or realistic client; capture testimonial and before/after.'] },
  ]
  return `
      <h3>30-day learning path (practical)</h3>
      ${weeks
        .map(
          (w) => `
        <h4>${w.label}</h4>
        <ol>${w.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
      `
        )
        .join('')}
      <p><strong>Niche hack:</strong> Pick one industry (clinics, coaches, SaaS, real estate, schools) so your samples look senior even while you are still learning tools.</p>
    `
}

export function toolsSection(job: AiCareerJob, usageNotes: string): string {
  const toolList = job.tools
    .map(
      (t, i) =>
        `<li><strong>${t}</strong> — ${i === 0 ? 'primary production tool' : i === 1 ? 'secondary / QC or delivery' : 'supporting in workflow'}</li>`
    )
    .join('\n')
  return (
    '<h3>Tool stack — what each tool does for this role</h3>' +
    '<ul>' +
    toolList +
    '</ul>' +
    '<p>' +
    usageNotes +
    '</p>'
  )
}

export function portfolioProof(job: AiCareerJob, proofItems: string[]): string {
  return `
      <h3>Portfolio proof clients trust in under 5 seconds</h3>
      <p>Learners in ${int('Future Ready Graduate', FUTURE_READY_PATH)} ship <strong>14-day proof cycles</strong>—not endless courses. For a ${job.plainTitle}, strong proof includes:</p>
      <ul>
        ${proofItems.map((p) => `<li>${p}</li>`).join('\n')}
        <li>A one-page offer: scope, turnaround, revisions, price</li>
        <li>A 3–5 minute Loom explaining your decisions (builds trust faster than a PDF alone)</li>
        <li>Metrics when possible: hours saved, CTR lift, open rate, error reduction, or tasks automated</li>
      </ul>
      <p><strong>Proof ladder:</strong> testimonial → sample deliverable → short walkthrough → clear revision policy (risk reversal).</p>
    `
}

export function pricingSection(job: AiCareerJob, packages: { name: string; scope: string; priceHint: string }[]): string {
  return `
      <h3>Productized offers (copy and adjust for your market)</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1.5em 0;">
        <tr style="border-bottom: 1px solid #334155;"><th style="text-align:left; padding:8px;">Package</th><th style="text-align:left; padding:8px;">Scope</th><th style="text-align:left; padding:8px;">Price band</th></tr>
        ${packages.map((p) => `<tr><td style="padding:8px;"><strong>${p.name}</strong></td><td style="padding:8px;">${p.scope}</td><td style="padding:8px;">${p.priceHint}</td></tr>`).join('')}
      </table>
      <p>Start with a discounted pilot; raise rates after three documented wins. Align with ${job.earning} market ranges.</p>
    `
}

/** Items may use joinHtml() + ext() from ./shared — not `${ext(...)}` inside 'single quotes'. */
export function mistakesSection(items: string[]): string {
  return `
      <h3>Common mistakes (avoid these)</h3>
      <ul>${items.map((m) => `<li>${m}</li>`).join('')}</ul>
    `
}

export function faqSection(faqs: { q: string; a: string }[]): string {
  return `
      <h3>FAQ</h3>
      ${faqs.map((f) => `<p><strong>${f.q}</strong><br>${f.a}</p>`).join('\n')}
    `
}

export function promptsSection(job: AiCareerJob): string {
  return `
      <h3>Copy-paste prompts (edit before client delivery)</h3>
      <p>Replace bracketed placeholders. Treat outputs as drafts—apply human QC before anything ships.</p>
      ${job.prompts.map((p) => promptBlock(p.label, p.prompt)).join('')}
    `
}

export function practiceExercise(title: string, steps: string[]): string {
  return `
      <h3>Practice exercise: ${title}</h3>
      <ol>${steps.map((s) => `<li>${s}</li>`).join('')}</ol>
    `
}
