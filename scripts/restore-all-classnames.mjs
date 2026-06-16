#!/usr/bin/env node
/**
 * Restore Tailwind class strings from git HEAD where possible, then repair known corruption patterns.
 */
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const CLASS_ATTR_RE =
  /className\s*=\s*(?:"([^"]*)"|'([^']*)'|{\s*`([^`]*)`\s*})/g

const CORRUPTION_RE =
  /font display|text-text-|border-border-accent|border-border-info|border-border-success|border-border-warning|border-border-destructive|\bw \d|\bh \d| rotate \d| translate | shrink \d| ring \d| order \d| gap \d| p \d| py \d| px \d| pt \d| pb \d| pl \d| pr \d| mt \d| mb \d| ml \d| mr \d| mx \d| my \d| opacity \d| from transparent|via success|via accent|text amber|tabular nums|leading none|line-clamp \d|min h-|max w-|flex col|flex row|flex wrap|items center|items start|items end|justify center|justify between|btn primary|btn secondary|gradient text|bg gradient|to br|to bl|pointer events|select none|whitespace pre|break all|cursor pointer|outline none|focus:outline none|focus:ring \d|hover:opacity \d|disabled:opacity \d|duration \d|transition all|shadow text|font-semibold text"|font-semibold text'|font-semibold text`|font-semibold text\s|font-semibold text>/

const REPLACEMENTS = [
  [/font display/g, 'font-display'],
  [/text-text-lg/g, 'text-lg'],
  [/text-text-sm/g, 'text-sm'],
  [/text-text-base/g, 'text-base'],
  [/text-text-xl/g, 'text-xl'],
  [/text-text-2xl/g, 'text-2xl'],
  [/text-text-3xl/g, 'text-3xl'],
  [/text-text-4xl/g, 'text-4xl'],
  [/text-text-5xl/g, 'text-5xl'],
  [/text-text-6xl/g, 'text-6xl'],
  [/text-text-7xl/g, 'text-7xl'],
  [/border-border-accent/g, 'border-accent'],
  [/border-border-info/g, 'border-info'],
  [/border-border-success/g, 'border-success'],
  [/border-border-warning/g, 'border-warning'],
  [/border-border-destructive/g, 'border-destructive'],
  [/border border-accent/g, 'border border-accent'],
  [/bg-accent\/10 border-accent/g, 'bg-accent/10 border border-accent'],
  [/bg-accent\/10 border border-accent/g, 'bg-accent/10 border border-accent'],
  [/font-semibold text\b/g, 'font-semibold text-text'],
  [/font-bold text\b/g, 'font-bold text-text'],
  [/font-medium text\b/g, 'font-medium text-text'],
  [/gradient text\b/g, 'gradient-text'],
  [/gradient text-brand/g, 'gradient-text-brand'],
  [/btn primary/g, 'btn-primary'],
  [/btn secondary/g, 'btn-secondary'],
  [/btn outline/g, 'btn-outline'],
  [/tabular nums/g, 'tabular-nums'],
  [/leading none/g, 'leading-none'],
  [/line-clamp (\d+)/g, 'line-clamp-$1'],
  [/rotate (\d+)/g, 'rotate-$1'],
  [/translate y-(\d+)/g, 'translate-y-$1'],
  [/translate x-(\d+)/g, 'translate-x-$1'],
  [/-translate y-/g, '-translate-y-'],
  [/-translate x-/g, '-translate-x-'],
  [/shrink (\d+)/g, 'shrink-$1'],
  [/ring (\d+)/g, 'ring-$1'],
  [/order (\d+)/g, 'order-$1'],
  [/opacity (\d+)/g, 'opacity-$1'],
  [/from transparent/g, 'from-transparent'],
  [/via success/g, 'via-success'],
  [/via accent/g, 'via-accent'],
  [/to transparent/g, 'to-transparent'],
  [/text amber (\d+)/g, 'text-amber-$1'],
  [/pointer events-none/g, 'pointer-events-none'],
  [/cursor pointer/g, 'cursor-pointer'],
  [/select none/g, 'select-none'],
  [/whitespace pre/g, 'whitespace-pre'],
  [/break all/g, 'break-all'],
  [/outline none/g, 'outline-none'],
  [/focus:outline none/g, 'focus:outline-none'],
  [/focus:ring (\d+)/g, 'focus:ring-$1'],
  [/hover:opacity (\d+)/g, 'hover:opacity-$1'],
  [/disabled:opacity (\d+)/g, 'disabled:opacity-$1'],
  [/duration (\d+)/g, 'duration-$1'],
  [/transition all/g, 'transition-all'],
  [/bg gradient/g, 'bg-gradient'],
  [/to br/g, 'to-br'],
  [/to bl/g, 'to-bl'],
  [/to tr/g, 'to-tr'],
  [/to tl/g, 'to-tl'],
  [/flex col/g, 'flex-col'],
  [/flex row/g, 'flex-row'],
  [/flex wrap/g, 'flex-wrap'],
  [/items center/g, 'items-center'],
  [/items start/g, 'items-start'],
  [/items end/g, 'items-end'],
  [/justify center/g, 'justify-center'],
  [/justify between/g, 'justify-between'],
  [/min h-/g, 'min-h-'],
  [/max w-/g, 'max-w-'],
  [/sm:min h-/g, 'sm:min-h-'],
  [/md:min h-/g, 'md:min-h-'],
  [/w (\d+(?:\.\d+)?) h (\d+(?:\.\d+)?)/g, 'w-$1 h-$2'],
  [/gap (\d+(?:\.\d+)?)/g, 'gap-$1'],
  [/p (\d+(?:\.\d+)?)/g, 'p-$1'],
  [/py (\d+(?:\.\d+)?)/g, 'py-$1'],
  [/px (\d+(?:\.\d+)?)/g, 'px-$1'],
  [/pt (\d+(?:\.\d+)?)/g, 'pt-$1'],
  [/pb (\d+(?:\.\d+)?)/g, 'pb-$1'],
  [/pl (\d+(?:\.\d+)?)/g, 'pl-$1'],
  [/pr (\d+(?:\.\d+)?)/g, 'pr-$1'],
  [/mt (\d+(?:\.\d+)?)/g, 'mt-$1'],
  [/mb (\d+(?:\.\d+)?)/g, 'mb-$1'],
  [/ml (\d+(?:\.\d+)?)/g, 'ml-$1'],
  [/mr (\d+(?:\.\d+)?)/g, 'mr-$1'],
  [/mx (\d+(?:\.\d+)?)/g, 'mx-$1'],
  [/my (\d+(?:\.\d+)?)/g, 'my-$1'],
  [/left (\d+(?:\.\d+)?)/g, 'left-$1'],
  [/right (\d+(?:\.\d+)?)/g, 'right-$1'],
  [/top (\d+(?:\.\d+)?)/g, 'top-$1'],
  [/bottom (\d+(?:\.\d+)?)/g, 'bottom-$1'],
  [/h (\d+(?:\.\d+)?)/g, 'h-$1'],
  [/z (\d+)/g, 'z-$1'],
  [/sm:gap (\d+)/g, 'sm:gap-$1'],
  [/md:gap (\d+)/g, 'md:gap-$1'],
  [/sm:px (\d+)/g, 'sm:px-$1'],
  [/md:px (\d+)/g, 'md:px-$1'],
  [/sm:py (\d+)/g, 'sm:py-$1'],
  [/md:py (\d+)/g, 'md:py-$1'],
  [/sm:pt (\d+)/g, 'sm:pt-$1'],
  [/sm:pb (\d+)/g, 'sm:pb-$1'],
  [/sm:mb (\d+)/g, 'sm:mb-$1'],
  [/sm:mt (\d+)/g, 'sm:mt-$1'],
  [/md:mb (\d+)/g, 'md:mb-$1'],
  [/md:mt (\d+)/g, 'md:mt-$1'],
  [/lg:top (\d+)/g, 'lg:top-$1'],
  [/lg:sticky lg:top (\d+)/g, 'lg:sticky lg:top-$1'],
  [/sm:col span/g, 'sm:col-span'],
  [/md:col span/g, 'md:col-span'],
  [/col span/g, 'col-span'],
  [/grid cols/g, 'grid-cols'],
  [/shadow text/g, 'shadow-text'],
  [/shadow sm/g, 'shadow-sm'],
  [/shadow lg/g, 'shadow-lg'],
  [/shadow md/g, 'shadow-md'],
  [/md shadow/g, 'md:shadow'],
  [/demo icon/g, 'demo-icon'],
  [/origin left/g, 'origin-left'],
  [/origin right/g, 'origin-right'],
  [/text left/g, 'text-left'],
  [/text right/g, 'text-right'],
  [/text center/g, 'text-center'],
  [/mx auto/g, 'mx-auto'],
  [/my auto/g, 'my-auto'],
  [/inset-x-0/g, 'inset-x-0'],
  [/inset 0/g, 'inset-0'],
  [/inset-x-5/g, 'inset-x-5'],
  [/\[&_svg\]:h (\d+(?:\.\d+)?)/g, '[&_svg]:h-$1'],
  [/\[&_svg\]:w (\d+(?:\.\d+)?)/g, '[&_svg]:w-$1'],
  [/inline flex/g, 'inline-flex'],
  [/object cover/g, 'object-cover'],
  [/ring black/g, 'ring-black'],
  [/bg-accent\/10 border accent/g, 'bg-accent/10 border border-accent'],
]

function extractClassNames(source) {
  const out = []
  let m
  const re = new RegExp(CLASS_ATTR_RE.source, 'g')
  while ((m = re.exec(source)) !== null) {
    out.push(m[1] ?? m[2] ?? m[3] ?? '')
  }
  return out
}

function formatClassAttr(headVal, dq, sq, tpl) {
  if (dq !== undefined) return `className="${headVal}"`
  if (sq !== undefined) return `className='${headVal}'`
  return `className={\`${headVal}\`}`
}

function repairClassString(s) {
  let out = s
  for (let pass = 0; pass < 5; pass++) {
    for (const [re, rep] of REPLACEMENTS) {
      out = out.replace(re, rep)
    }
  }
  return out
}

function isCorrupted(s) {
  return CORRUPTION_RE.test(s)
}

function gitShow(rel) {
  try {
    return execSync(`git show HEAD:${JSON.stringify(rel).slice(1, -1)}`, {
      encoding: 'utf8',
      maxBuffer: 25 * 1024 * 1024,
    })
  } catch {
    return null
  }
}

function processFile(rel) {
  const abs = path.join(process.cwd(), rel)
  if (!fs.existsSync(abs)) return false
  const work = fs.readFileSync(abs, 'utf8')
  const head = gitShow(rel)

  let next = work
  if (head) {
    const headClasses = extractClassNames(head)
    let i = 0
    next = work.replace(CLASS_ATTR_RE, (full, dq, sq, tpl) => {
      const cur = dq ?? sq ?? tpl ?? ''
      const headVal = headClasses[i]
      i += 1
      if (headVal != null && isCorrupted(cur)) {
        return formatClassAttr(headVal, dq, sq, tpl)
      }
      return full
    })
  }

  next = next.replace(CLASS_ATTR_RE, (full, dq, sq, tpl) => {
    const cur = dq ?? sq ?? tpl ?? ''
    const fixed = repairClassString(cur)
    if (fixed === cur) return full
    return formatClassAttr(fixed, dq, sq, tpl)
  })

  if (next !== work) {
    fs.writeFileSync(abs, next)
    return true
  }
  return false
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory() && !['node_modules', '.next'].includes(ent.name)) {
      walk(p, out)
    } else if (/\.(tsx|jsx)$/.test(ent.name)) {
      out.push(path.relative(process.cwd(), p))
    }
  }
  return out
}

const files = walk(path.join(process.cwd(), 'app'))
let n = 0
for (const rel of files) {
  if (processFile(rel)) {
    n += 1
    console.log('fixed', rel)
  }
}
console.log(`Restored/repaired ${n} files.`)
