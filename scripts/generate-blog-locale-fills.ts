/**
 * Generates FR / ES / DE blog partials from English via MyMemory (free tier).
 * Resumable: progress stored under content/blog/generated/cache/{fr,es,de}/*.json
 *
 * bun scripts/generate-blog-locale-fills.ts
 * ONLY_SLUG=my-slug bun scripts/generate-blog-locale-fills.ts  # one article only
 */
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  readFileSync,
} from 'fs'
import { join } from 'path'
import { articlesEn } from '../content/blog/en'
import type { BlogArticle } from '../content/blog/types'

const ROOT = process.cwd()
const OUT_DIR = join(ROOT, 'content/blog/generated')

const DELAY_MS = 400
const MAX_Q = 450

const FR_SLUGS = new Set([
  'ai-employee-systems-transform-customer-service-growing-businesses',
  'roi-ai-employees-growing-businesses-save-operational-costs',
  'implementing-ai-receptionists-complete-guide-growing-businesses',
  'how-to-create-business-website-free-ai-lovable-dev',
  'claude-code-ai-agents-africa-future-of-work-future-ready',
  'preparing-students-future-private-high-schools-digital-skills-programs',
  'future-ready-graduate-program-transforming-education-career-success',
  'implementing-future-ready-programs-guide-private-school-administrators',
  'why-business-needs-custom-saas-beyond-off-shelf-solutions',
  'building-scalable-saas-products-architecture-best-practices',
  'complete-guide-custom-saas-development-idea-to-launch',
  'saas-success-stories-custom-solutions-drive-business-growth',
  'ai-employee-systems-vs-traditional-staff-when-to-automate',
  'scaling-business-operations-ai-powered-automation',
  'choosing-custom-saas-vs-ready-made-solutions-decision-framework',
])

const ES_SLUGS = new Set([
  'preparing-students-future-private-high-schools-digital-skills-programs',
  'future-ready-graduate-program-transforming-education-career-success',
  'implementing-future-ready-programs-guide-private-school-administrators',
  'why-business-needs-custom-saas-beyond-off-shelf-solutions',
  'building-scalable-saas-products-architecture-best-practices',
  'complete-guide-custom-saas-development-idea-to-launch',
  'saas-success-stories-custom-solutions-drive-business-growth',
  'ai-employee-systems-vs-traditional-staff-when-to-automate',
  'scaling-business-operations-ai-powered-automation',
  'choosing-custom-saas-vs-ready-made-solutions-decision-framework',
  'employes-ia-2026-service-client-triple-leads',
  'agents-ia-vs-automatisation-traditionnelle-pme',
  'automatisation-processus-rdc-kinshasa-productivite-2026',
  'croissance-entreprise-ia-france-rdc',
  'business-development-ia-leads-24-7',
  'creation-site-web-ia-guide-2026',
  'developpement-application-web-saas-sur-mesure-2026',
  'saas-personnalise-vs-pret-a-l-emploi-pme',
  'transformation-digitale-rdc-2026-ia',
  'ia-pme-francaises-agents-sans-budget',
  'claude-grok-agents-ia-afrique-francophone',
  'guide-2026-tendances-ia-entreprises-francophones',
  'digital-border-coding-drc-act-resistance',
  'ai-automation-scaling-business-growth',
  'vibecoding-african-youth-make-money-online-build-products',
])

const DE_BODY_SLUGS = new Set([
  'ai-automation-scaling-business-growth',
  'vibecoding-african-youth-make-money-online-build-products',
])

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

class MyMemoryQuotaError extends Error {
  override name = 'MyMemoryQuotaError'
}

async function translateChunk(q: string, from: string, to: string): Promise<string> {
  const email = process.env.MYMEMORY_EMAIL?.trim()
  let url =
    'https://api.mymemory.translated.net/get?q=' +
    encodeURIComponent(q) +
    '&langpair=' +
    encodeURIComponent(from + '|' + to)
  if (email) url += '&de=' + encodeURIComponent(email)

  const res = await fetch(url)
  const j = (await res.json()) as {
    responseData?: { translatedText?: string }
    responseStatus?: number
    quotaFinished?: boolean | null
  }
  if (j.quotaFinished) throw new MyMemoryQuotaError('MyMemory quota finished — re-run later.')

  const text = j.responseData?.translatedText?.trim() ?? ''
  if (
    text.includes('MYMEMORY WARNING') ||
    text.includes('YOU USED ALL AVAILABLE FREE TRANSLATIONS')
  ) {
    throw new MyMemoryQuotaError(text.slice(0, 240))
  }

  if (j.responseStatus !== 200 || !text) {
    throw new Error('Translate failed: ' + JSON.stringify(j).slice(0, 280))
  }
  return j.responseData!.translatedText!
}

async function translateText(s: string, from: string, to: string): Promise<string> {
  const lead = s.match(/^\s*/)![0]
  const trail = s.match(/\s*$/)![0]
  let body = s.trim()
  if (!body) return s
  const out: string[] = []
  while (body.length > 0) {
    let chunk = body.slice(0, MAX_Q)
    if (body.length > MAX_Q) {
      const cut = chunk.lastIndexOf(' ')
      if (cut > 120) chunk = body.slice(0, cut)
    }
    out.push(await translateChunk(chunk, from, to))
    await sleep(DELAY_MS)
    body = body.slice(chunk.length).trimStart()
  }
  return lead + out.join(' ') + trail
}

async function translateHtml(html: string, from: string, to: string): Promise<string> {
  const parts = html.split(/(<[^>]+>)/g).filter((x) => x !== undefined && x !== '') as string[]
  const out: string[] = []
  let textBuf = ''
  const flush = async () => {
    if (!textBuf) return
    out.push(await translateText(textBuf, from, to))
    await sleep(DELAY_MS)
    textBuf = ''
  }
  for (const p of parts) {
    if (p.startsWith('<')) {
      await flush()
      out.push(p)
    } else {
      textBuf += p
    }
  }
  await flush()
  return out.join('')
}

function enReadTimeToFr(rt: string): string {
  return rt.replace(/min read/gi, 'min de lecture')
}
function enReadTimeToEs(rt: string): string {
  return rt.replace(/min read/gi, 'min de lectura')
}
function enReadTimeToDe(rt: string): string {
  return rt.replace(/min read/gi, 'Min. Lesezeit')
}

function readCache(kind: 'fr' | 'es' | 'de'): Record<string, Partial<BlogArticle>> {
  const dir = join(OUT_DIR, 'cache', kind)
  const out: Record<string, Partial<BlogArticle>> = {}
  if (!existsSync(dir)) return out
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.json')) continue
    const slug = f.slice(0, -5)
    try {
      out[slug] = JSON.parse(readFileSync(join(dir, f), 'utf8'))
    } catch {
      /* skip */
    }
  }
  return out
}

function writeCache(kind: 'fr' | 'es' | 'de', slug: string, p: Partial<BlogArticle>) {
  const dir = join(OUT_DIR, 'cache', kind)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, `${slug}.json`), JSON.stringify(p, null, 0), 'utf8')
}

function emitTs(constName: string, file: string, data: Record<string, Partial<BlogArticle>>) {
  const hdr =
    '/**\n * Auto-generated — edit cache JSON + re-run `bun scripts/generate-blog-locale-fills.ts`\n * or fix machine translation inline.\n */\nimport type { BlogArticle } from \'../types\'\n\n'
  writeFileSync(
    join(OUT_DIR, file),
    hdr + `export const ${constName} = ${JSON.stringify(data, null, 2)} as Record<string, Partial<BlogArticle>>\n`,
    'utf8'
  )
}

async function buildAllPartial(
  a: BlogArticle,
  to: 'fr' | 'es' | 'de'
): Promise<Partial<BlogArticle>> {
  const from = 'en'
  const title = await translateText(a.title, from, to)
  await sleep(DELAY_MS)
  const excerpt = await translateText(a.excerpt, from, to)
  await sleep(DELAY_MS)
  const category = await translateText(a.category, from, to)
  await sleep(DELAY_MS)
  const tags: string[] = []
  for (const t of a.tags) {
    tags.push(await translateText(t, from, to))
    await sleep(DELAY_MS)
  }
  const content = await translateHtml(a.content, from, to)
  const readTime =
    to === 'fr' ? enReadTimeToFr(a.readTime) : to === 'es' ? enReadTimeToEs(a.readTime) : enReadTimeToDe(a.readTime)
  const publishDate =
    to === 'fr' ? '20 mars 2026' : to === 'es' ? '20 de marzo de 2026' : '20. März 2026'
  return { title, excerpt, category, readTime, publishDate, tags, content }
}

async function buildContentOnly(a: BlogArticle, to: 'de'): Promise<Partial<BlogArticle>> {
  const content = await translateHtml(a.content, 'en', to)
  return { content }
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  const only = process.env.ONLY_SLUG?.trim()

  let fr = readCache('fr')
  let es = readCache('es')
  let deBody = readCache('de')

  try {
    for (const a of articlesEn) {
      if (only && a.slug !== only) continue
      if (FR_SLUGS.has(a.slug) && !fr[a.slug]) {
        console.error('Translating FR →', a.slug)
        const p = await buildAllPartial(a, 'fr')
        fr[a.slug] = p
        writeCache('fr', a.slug, p)
      }
    }

    for (const a of articlesEn) {
      if (only && a.slug !== only) continue
      if (ES_SLUGS.has(a.slug) && !es[a.slug]) {
        console.error('Translating ES →', a.slug)
        const p = await buildAllPartial(a, 'es')
        es[a.slug] = p
        writeCache('es', a.slug, p)
      }
    }

    for (const a of articlesEn) {
      if (only && a.slug !== only) continue
      if (DE_BODY_SLUGS.has(a.slug) && !deBody[a.slug]) {
        console.error('Translating DE body →', a.slug)
        const p = await buildContentOnly(a, 'de')
        deBody[a.slug] = p
        writeCache('de', a.slug, p)
      }
    }
  } catch (e) {
    if (e instanceof MyMemoryQuotaError) {
      console.error('Stopped (API limit):', e.message)
    } else {
      throw e
    }
  } finally {
    const frOut = readCache('fr')
    const esOut = readCache('es')
    const deOut = readCache('de')
    emitTs('blogFrOverrides', 'blog-fr-overrides.ts', frOut)
    emitTs('blogEsOverrides', 'blog-es-overrides.ts', esOut)
    emitTs('blogDeBodyOverrides', 'blog-de-body-overrides.ts', deOut)
    console.error(
      'Emitted TS. FR',
      Object.keys(frOut).length,
      '/',
      FR_SLUGS.size,
      '| ES',
      Object.keys(esOut).length,
      '/',
      ES_SLUGS.size,
      '| DE body',
      Object.keys(deOut).length,
      '/',
      DE_BODY_SLUGS.size
    )
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
