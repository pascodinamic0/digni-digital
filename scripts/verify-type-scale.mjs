import { webkit } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://localhost:3000'
const PAGES = ['/us-en', '/us-en/services', '/us-en/ai-receptionist', '/us-en/about']

/** Authority min/max (px) — fluid clamp must stay within these bounds */
const BOUNDS = {
  html: { min: 16, max: 16 },
  body: { min: 16, max: 18 },
  h1: { min: 32, max: 64 },
  h2: { min: 24, max: 48 },
}

const VIEWPORTS = [375, 600, 820, 1280]

let failed = 0
const browser = await webkit.launch({ headless: true })
const page = await browser.newPage()

for (const width of VIEWPORTS) {
  await page.setViewportSize({ width, height: 900 })
  for (const path of PAGES) {
    const url = `${BASE}${path}`
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
      await page.waitForSelector('h1', { timeout: 15000 })
      await page.waitForTimeout(400)
    } catch (e) {
      console.error(`FAIL load ${url}:`, e.message)
      failed++
      continue
    }
    const sample = await page.evaluate(() => {
      const h1 = document.querySelector('main h1, [class*="hero"] h1, section h1')
      const h2 = document.querySelector('main h2, main section h2')
      const body = document.body
      const get = (el) => (el ? Math.round(parseFloat(getComputedStyle(el).fontSize)) : null)
      return {
        h1: get(h1),
        h2: get(h2),
        body: get(body),
        html: Math.round(parseFloat(getComputedStyle(document.documentElement).fontSize)),
        overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      }
    })
    for (const key of Object.keys(BOUNDS)) {
      const { min, max } = BOUNDS[key]
      const v = sample[key]
      if (v == null || v < min - 2 || v > max + 2) {
        console.error(`FAIL ${path} @${width}px ${key}: ${v}px outside ${min}–${max}px`)
        failed++
      }
    }
    if (sample.overflowX) {
      console.error(`FAIL ${path} @${width}px: horizontal overflow`)
      failed++
    }
    console.log(`OK ${path} @${width}px → h1 ${sample.h1} h2 ${sample.h2} body ${sample.body}`)
  }
}

/** Mid viewport should be strictly between min and max (proves fluid, not stepped) */
await page.setViewportSize({ width: 720, height: 900 })
await page.goto(`${BASE}/us-en`, { waitUntil: 'domcontentloaded', timeout: 45000 })
await page.waitForSelector('h1', { timeout: 15000 })
const mid = await page.evaluate(() => {
  const h1 = document.querySelector('main h1, section h1')
  return h1 ? Math.round(parseFloat(getComputedStyle(h1).fontSize)) : null
})
if (mid == null || mid <= 32 || mid >= 64) {
  console.error(`FAIL fluid h1 @720px: ${mid}px (expected between 32 and 64)`)
  failed++
} else {
  console.log(`OK fluid h1 @720px → ${mid}px (between 32 and 64)`)
}

await browser.close()
if (failed) {
  console.error(`\n${failed} check(s) failed`)
  process.exit(1)
}
console.log('\nAll fluid typography checks passed.')
