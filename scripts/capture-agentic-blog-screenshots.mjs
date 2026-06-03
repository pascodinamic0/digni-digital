/**
 * One-off: capture hero/screens for agentic product blog posts.
 * Run: node scripts/capture-agentic-blog-screenshots.mjs
 */
import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicBlog = path.join(root, 'public', 'blog')

const VIEWPORT = { width: 1280, height: 800 }

async function shot(page, outPath, url, waitMs = 4000) {
  await page.setViewportSize(VIEWPORT)
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(waitMs)
  await mkdir(path.dirname(outPath), { recursive: true })
  await page.screenshot({ path: outPath, fullPage: false })
  console.log('saved', outPath)
}

async function main() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()

  // Kabinda Lodge — public marketing + rooms
  const kabindaDir = path.join(publicBlog, 'kabinda-lodge')
  await shot(page, path.join(kabindaDir, 'hero-dashboard.png'), 'https://kabinda-lodge.com/', 6000)
  await shot(page, path.join(kabindaDir, 'bookings-rooms.png'), 'https://kabinda-lodge.com/rooms', 8000)
  await shot(page, path.join(kabindaDir, 'operations-overview.png'), 'https://kabinda-lodge.com/restaurant', 5000)

  // SwiftDrop — FR routes from live nav
  const swiftDir = path.join(publicBlog, 'swiftdrop')
  await shot(page, path.join(swiftDir, 'hero-home.png'), 'https://swift-drop-chi.vercel.app/', 4000)
  // Click through nav — route slug varies by deploy
  await page.goto('https://swift-drop-chi.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(3000)
  const boutiqueLink = page.locator('a').filter({ hasText: /boutiques/i }).first()
  if (await boutiqueLink.count()) {
    await boutiqueLink.click()
    await page.waitForTimeout(5000)
  }
  await mkdir(swiftDir, { recursive: true })
  await page.screenshot({ path: path.join(swiftDir, 'browse-stores.png'), fullPage: false })
  console.log('saved', path.join(swiftDir, 'browse-stores.png'))
  await shot(page, path.join(swiftDir, 'order-tracking.png'), 'https://swift-drop-chi.vercel.app/pourquoi-nous', 4000)

  // DigniGuide — local dev (production path may 404 until deploy)
  const digniDir = path.join(publicBlog, 'digniguide')
  const digniBase = process.env.DIGNI_SCREENSHOT_BASE || 'http://127.0.0.1:3000'
  await shot(page, path.join(digniDir, 'hero-chat.png'), `${digniBase}/us-en/digni`, 6000)

  await browser.close()
  console.log('done')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
