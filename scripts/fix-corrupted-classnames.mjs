#!/usr/bin/env node
/**
 * Restores Tailwind className strings corrupted by hyphen → space replacement.
 * Uses git HEAD as source of truth for className / template class strings.
 */
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const CORRUPTION_RE =
  /\b(w full|min h-|max w-|flex items center|flex flex col|text center|bg surface|font display|rounded full|btn primary|home hero|gradient text)\b/

const CLASS_ATTR_RE =
  /className\s*=\s*(?:"([^"]*)"|'([^']*)'|{\s*`([^`]*)`\s*})/g

function extractClassNames(source) {
  const out = []
  let m
  while ((m = CLASS_ATTR_RE.exec(source)) !== null) {
    out.push(m[1] ?? m[2] ?? m[3] ?? '')
  }
  return out
}

function replaceClassNames(source, headClasses) {
  let i = 0
  return source.replace(CLASS_ATTR_RE, (full, dq, sq, tpl) => {
    const current = dq ?? sq ?? tpl ?? ''
    const headVal = headClasses[i]
    i += 1
    if (headVal == null) return full
    if (!CORRUPTION_RE.test(current)) return full
    if (dq !== undefined) return `className="${headVal}"`
    if (sq !== undefined) return `className='${headVal}'`
    return `className={\`${headVal}\`}`
  })
}

/** Fix href="#anchor-id" and similar when hash id lost hyphens */
function fixHashHrefs(source, headSource) {
  const headHashes = [...headSource.matchAll(/href="(#([^"]+))"/g)].map((m) => m[2])
  let i = 0
  return source.replace(/href="(#([^"]+))"/g, (full, _hash, id) => {
    if (!id.includes(' ')) return full
    const headId = headHashes[i]
    i += 1
    if (headId && headId.includes('-')) return `href="#${headId}"`
    return full
  })
}

/** Restore SVG path d when spaces appear inside path commands incorrectly */
function fixSvgPaths(source, headSource) {
  const headPaths = [...headSource.matchAll(/\bd="([^"]+)"/g)].map((m) => m[1])
  let i = 0
  return source.replace(/\bd="([^"]+)"/g, (full, d) => {
    if (!/\d\s+[lmhvcsqta]/i.test(d) && !/l\s+\d/.test(d)) return full
    const headD = headPaths[i]
    i += 1
    if (headD && headD.includes('-')) return `d="${headD}"`
    return full
  })
}

function gitShow(file) {
  try {
    return execSync(`git show HEAD:${JSON.stringify(file).slice(1, -1)}`, {
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
    })
  } catch {
    return null
  }
}

const files = execSync('git diff --name-only', { encoding: 'utf8' })
  .split('\n')
  .filter((f) => /\.(tsx|jsx)$/.test(f))

let fixed = 0
for (const file of files) {
  const head = gitShow(file)
  if (!head) continue
  const abs = path.join(process.cwd(), file)
  if (!fs.existsSync(abs)) continue
  const work = fs.readFileSync(abs, 'utf8')
  if (!CORRUPTION_RE.test(work)) continue

  const headClasses = extractClassNames(head)
  let next = replaceClassNames(work, headClasses)
  next = fixHashHrefs(next, head)
  next = fixSvgPaths(next, head)

  if (next !== work) {
    fs.writeFileSync(abs, next)
    fixed += 1
    console.log('fixed', file)
  }
}

console.log(`Done. Updated ${fixed} files.`)
