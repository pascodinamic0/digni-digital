#!/usr/bin/env node
/**
 * Removes em dashes, en dashes, and word hyphens from user-facing copy in
 * translation/content files. Does NOT process .tsx (would break JSX/Tailwind).
 */
import fs from 'fs'
import path from 'path'

const ROOT = path.resolve(import.meta.dirname, '..')

const WALK_DIRS = [
  'app/i18n',
  'app/config',
  'messages',
  'lib/positioning',
  'lib/assessments',
  'lib/digni',
  'lib/ai-employee-page.ts',
  'lib/agent-readiness.ts',
  'lib/ai-receptionist-flow.ts',
  'lib/ai-career-jobs',
  'content/blog',
]

const EXT = new Set(['.ts', '.json', '.md'])

const PLACEHOLDER_PREFIX = '__DEHYPH_'

function walk(entry, files = []) {
  const full = path.join(ROOT, entry)
  if (!fs.existsSync(full)) return files
  const stat = fs.statSync(full)
  if (stat.isFile()) {
    if (EXT.has(path.extname(full))) files.push(full)
    return files
  }
  for (const name of fs.readdirSync(full)) {
    if (name === 'node_modules' || name === '.next' || name === 'generated') continue
    walk(path.join(entry, name), files)
  }
  return files
}

function protect(text, pattern, store) {
  return text.replace(pattern, (match) => {
    const id = store.length
    store.push(match)
    return `${PLACEHOLDER_PREFIX}${id}__`
  })
}

function restore(text, store) {
  let out = text
  store.forEach((original, id) => {
    out = out.split(`${PLACEHOLDER_PREFIX}${id}__`).join(original)
  })
  return out
}

function dehyphenateContent(raw) {
  const store = []
  let text = raw

  text = protect(text, /https?:\/\/[^\s"'`)]+/g, store)
  text = protect(text, /\/[a-z0-9][a-z0-9/_-]*/gi, store)
  text = protect(text, /'[a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)+'/g, store)
  text = protect(text, /"[a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)+"/g, store)
  text = protect(text, /`[a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)+`/g, store)
  text = protect(text, /[a-z]{2}-[A-Z]{2}/g, store)
  text = protect(text, /--[a-zA-Z][\w-]*/g, store)
  text = protect(text, /\b[a-z]+(?:-[a-z]+)+\s*:/g, store)
  text = protect(text, /\b[a-z]+(?:-[a-z]+)+=/g, store)

  text = text.replace(/\u2014\s*/g, ', ').replace(/\s*\u2014/g, ', ')
  text = text.replace(/\u2013/g, ' to ')
  text = text.replace(/([A-Za-z0-9À-ÿ™'®])-([A-Za-z0-9À-ÿ™'®])/g, '$1 $2')

  text = text
    .replace(/, ,/g, ', ')
    .replace(/,\s*,/g, ',')
    .replace(/  +/g, ' ')
    .replace(/ ,/g, ',')

  return restore(text, store)
}

let changed = 0
for (const entry of WALK_DIRS) {
  for (const file of walk(entry)) {
    const before = fs.readFileSync(file, 'utf8')
    const after = dehyphenateContent(before)
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8')
      changed++
    }
  }
}

console.log(`dehyphenate-copy: updated ${changed} files`)
