#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const DEFAULT_BASE_URL = 'http://localhost:3000'
const DEFAULT_TIMEOUT_MS = 10000
const DEFAULT_CONCURRENCY = 6

const publicRouteSegments = [
  '',
  'about',
  'services',
  'solutions',
  'products',
  'ai-receptionist',
  'ai-receptionist/assessment',
  'agentic-softwares',
  'agentic-softwares/assessment',
  'future-ready-graduate',
  'future-ready-graduate/assessment',
  'blog',
  'case-studies',
  'careers',
  'affiliate',
  'contact',
  'digni',
  'privacy',
  'terms',
  'cookie-policy',
  'checkout/success',
  'checkout/canceled',
]

function getArg(name) {
  const prefix = `--${name}=`
  const value = process.argv.find((arg) => arg.startsWith(prefix))
  return value ? value.slice(prefix.length) : undefined
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`)
}

function printHelp() {
  console.log(`Route smoke tester for Digni Digital\n\nUsage:\n  npm run smoke:routes\n  npm run smoke:routes -- --base-url=http://localhost:3000\n  npm run smoke:routes -- --locales=us-en,fr-fr\n  npm run smoke:routes -- --list\n\nOptions:\n  --base-url=<url>       Live preview URL. Defaults to ${DEFAULT_BASE_URL}.\n  --locales=<list>       Comma-separated locale routes to test. Defaults to i18n/routing.ts locales.\n  --timeout=<ms>         Per-route timeout. Defaults to ${DEFAULT_TIMEOUT_MS}.\n  --concurrency=<count>  Parallel request limit. Defaults to ${DEFAULT_CONCURRENCY}.\n  --list                 Print generated routes without fetching them.\n  --help                 Show this help message.\n`)
}

function normalizeBaseUrl(value) {
  return value.replace(/\/$/, '')
}

function parsePositiveInt(value, fallback) {
  if (!value) return fallback
  const parsed = Number.parseInt(value, 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

async function readConfiguredLocales() {
  const routingPath = path.join(process.cwd(), 'i18n', 'routing.ts')
  const source = await fs.readFile(routingPath, 'utf8')
  const match = source.match(/export\s+const\s+locales\s*=\s*\[([\s\S]*?)\]\s+as\s+const/)

  if (!match) {
    throw new Error('Could not find `export const locales = [...] as const` in i18n/routing.ts')
  }

  const locales = [...match[1].matchAll(/['"]([^'"]+)['"]/g)].map(([, locale]) => locale)

  if (locales.length === 0) {
    throw new Error('No locales were found in i18n/routing.ts')
  }

  return locales
}

function buildRoutes(locales) {
  return locales.flatMap((locale) =>
    publicRouteSegments.map((segment) => `/${locale}${segment ? `/${segment}` : ''}`)
  )
}

async function fetchRoute(baseUrl, route, timeoutMs) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  const url = `${baseUrl}${route}`

  try {
    const response = await fetch(url, {
      redirect: 'manual',
      signal: controller.signal,
    })

    const location = response.headers.get('location')
    const ok = response.status >= 200 && response.status < 400

    return {
      route,
      ok,
      status: response.status,
      detail: location ? `→ ${location}` : response.statusText,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return {
      route,
      ok: false,
      status: 'ERR',
      detail: message,
    }
  } finally {
    clearTimeout(timeout)
  }
}

async function runWithConcurrency(items, concurrency, worker) {
  const results = []
  let nextIndex = 0

  async function runNext() {
    const index = nextIndex
    nextIndex += 1

    if (index >= items.length) return

    results[index] = await worker(items[index])
    await runNext()
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => runNext())
  )

  return results
}

if (hasFlag('help')) {
  printHelp()
  process.exit(0)
}

const baseUrl = normalizeBaseUrl(getArg('base-url') || process.env.SMOKE_BASE_URL || DEFAULT_BASE_URL)
const timeoutMs = parsePositiveInt(getArg('timeout'), DEFAULT_TIMEOUT_MS)
const concurrency = parsePositiveInt(getArg('concurrency'), DEFAULT_CONCURRENCY)
const configuredLocales = await readConfiguredLocales()
const requestedLocales = getArg('locales')
  ?.split(',')
  .map((locale) => locale.trim())
  .filter(Boolean)
const locales = requestedLocales?.length ? requestedLocales : configuredLocales
const unknownLocales = locales.filter((locale) => !configuredLocales.includes(locale))

if (unknownLocales.length > 0) {
  console.error(`Unknown locale(s): ${unknownLocales.join(', ')}`)
  console.error(`Configured locales: ${configuredLocales.join(', ')}`)
  process.exit(1)
}

const routes = buildRoutes(locales)

if (hasFlag('list')) {
  console.log(routes.join('\n'))
  process.exit(0)
}

console.log(`Checking ${routes.length} public routes at ${baseUrl}...`)
console.log(`Locales: ${locales.join(', ')}\n`)

const results = await runWithConcurrency(routes, concurrency, (route) => fetchRoute(baseUrl, route, timeoutMs))
const failures = results.filter((result) => !result.ok)

for (const result of results) {
  const marker = result.ok ? '✓' : '✗'
  console.log(`${marker} ${result.status} ${result.route}${result.detail ? ` ${result.detail}` : ''}`)
}

if (failures.length > 0) {
  console.error(`\n${failures.length} route check(s) failed.`)
  console.error('Make sure the live preview is running, then rerun `npm run smoke:routes`.')
  process.exit(1)
}

console.log(`\nAll ${results.length} route checks passed.`)
