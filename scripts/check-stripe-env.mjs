#!/usr/bin/env node
/**
 * Verifies Stripe env vars needed for Checkout (no secrets printed).
 * Usage: node scripts/check-stripe-env.mjs
 * Loads .env.local if present (simple parse — same keys as Next).
 */

import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(process.cwd())
const envFilePaths = [
  resolve(root, '.env.local'),
  resolve(root, '.env'),
  resolve(root, 'config/stripe-price-ids-live.env'),
]
const env = { ...process.env }
const envSources = Object.fromEntries(Object.keys(process.env).map((key) => [key, 'process.env']))

for (const p of envFilePaths) {
  if (!existsSync(p)) continue
  const text = readFileSync(p, 'utf8')
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (env[key] === undefined || env[key] === '') {
      env[key] = val
      envSources[key] = p.endsWith('config/stripe-price-ids-live.env')
        ? 'config/stripe-price-ids-live.env'
        : p.replace(`${root}/`, '')
    }
  }
}

const secret = env.STRIPE_SECRET_KEY?.trim() || env.STRIPE_API_KEY?.trim()
const secretMode = secret?.startsWith('sk_test_') ? 'test' : secret?.startsWith('sk_live_') ? 'live' : null
const prices = [
  'STRIPE_PRICE_AI_EMPLOYEE_MONTHLY',
  'STRIPE_PRICE_AI_EMPLOYEE_SETUP',
  'STRIPE_PRICE_FRG_SCHOOL_SEMESTER',
  'STRIPE_PRICE_FRG_SCHOOL_YEARLY',
  'STRIPE_PRICE_FRG_GUIDED',
  'STRIPE_PRICE_FRG_PROFESSIONAL_MONTHLY',
  'STRIPE_PRICE_AGENTIC_DEPOSIT',
]

let ok = true
if (!secret || !secret.startsWith('sk_')) {
  console.error('Missing STRIPE_SECRET_KEY (or STRIPE_API_KEY) starting with sk_')
  ok = false
} else {
  console.log(`[ok] Stripe ${secretMode ?? 'unknown'} secret key is set`)
}

const webhookSecret = env.STRIPE_WEBHOOK_SECRET?.trim()
if (!webhookSecret || !webhookSecret.startsWith('whsec_')) {
  console.error('Missing STRIPE_WEBHOOK_SECRET starting with whsec_')
  ok = false
} else {
  console.log('[ok] Stripe webhook signing secret is set')
}

for (const k of prices) {
  const v = env[k]?.trim()
  if (!v || !v.startsWith('price_')) {
    console.error(`[missing] ${k} must be a price_ ID`)
    ok = false
  } else if (secretMode === 'test' && envSources[k] === 'config/stripe-price-ids-live.env') {
    console.error(`[mode mismatch] ${k} is falling back to committed live catalog defaults; set a test price_ ID in .env.local`)
    ok = false
  } else {
    console.log(`[ok] ${k}`)
  }
}

if (!ok) {
  console.error('\nCopy .env.example to .env.local and add your Dashboard price IDs.')
  process.exit(1)
}
console.log('\nAll required Stripe env vars look present.')
