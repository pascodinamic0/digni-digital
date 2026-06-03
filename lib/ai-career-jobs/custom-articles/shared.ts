import type { AiCareerJob } from '../types'

export const CALENDAR = 'https://calendar.app.google/xP2APV1Zqbke8JKu6'
export const FUTURE_READY_PATH = '/future-ready-graduate'

export function ext(label: string, href: string): string {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
}

/**
 * Join HTML fragments inside `${mistakesSection([...])}` (or similar) in body template literals.
 * Do not embed `${ext(...)}` inside single-quoted strings — inner `'` breaks parsing.
 */
export function joinHtml(...parts: string[]): string {
  return parts.join('')
}

export function int(label: string, href: string): string {
  return `<a href="${href}">${label}</a>`
}

export function coverPath(job: AiCareerJob): string {
  return `/blog/ai-careers/${job.id}.png`
}

export function coverFigure(job: AiCareerJob, caption: string): string {
  const src = coverPath(job)
  return `
      <figure class="blog-content-figure" style="margin: 2em 0;">
        <img src="${src}" alt="${job.fancyTitle} — ${job.plainTitle}" width="1200" height="630" style="max-width: 100%; height: auto; border-radius: 12px;" loading="lazy" />
        <figcaption style="text-align: center; font-size: 0.875rem; color: #94a3b8; margin-top: 0.75rem;">${caption}</figcaption>
      </figure>
    `
}

export function promptBlock(label: string, prompt: string): string {
  const safe = prompt.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `
      <h4>${label}</h4>
      <pre style="background: #0f172a; color: #e2e8f0; padding: 1.25rem; border-radius: 12px; overflow-x: auto; font-size: 0.9rem; line-height: 1.5; white-space: pre-wrap;">${safe}</pre>
    `
}

export function ctaFooter(job: AiCareerJob): string {
  return `
      <hr>
      <p><strong>Want a coach for your first paid pilot in this lane?</strong></p>
      <p><a href="${CALENDAR}" target="_blank" rel="noopener noreferrer">Book a free strategy call</a> with Digni Digital — we help you pick one experiment, one niche, and one portfolio piece in 14 days.</p>
      <p><em>Training note: ${job.fancyTitle}. Part of the Future Ready career library.</em></p>
    `
}

export function refs(job: AiCareerJob): string {
  const items = [
    ...job.references.map((r) => `<li>${ext(r.label, r.href)}</li>`),
    `<li>${int('Future Ready Graduate', FUTURE_READY_PATH)}</li>`,
  ]
  return `<ul>\n${items.join('\n')}\n</ul>`
}
