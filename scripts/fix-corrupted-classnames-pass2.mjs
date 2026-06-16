#!/usr/bin/env node
/**
 * Regex repair for Tailwind classes where hyphens were replaced with spaces.
 * Applied inside className strings (and cn(...) first string arg).
 */
import fs from 'fs'
import path from 'path'

const CLASS_ATTR_RE =
  /className\s*=\s*(?:"([^"]*)"|'([^']*)'|{\s*`([^`]*)`\s*})/g

const REPLACEMENTS = [
  [/ min h-/g, ' min-h-'],
  [/ min w-/g, ' min-w-'],
  [/ max w-/g, ' max-w-'],
  [/ max h-/g, ' max-h-'],
  [/ sm:min h-/g, ' sm:min-h-'],
  [/ md:min h-/g, ' md:min-h-'],
  [/ min-h-\[calc\(100vh (\d)/g, ' min-h-[calc(100vh-$1'],
  [/calc\(100vh-(\d)rem\)/g, 'calc(100vh-$1rem)'],
  [/calc\(100vh (\d)/g, 'calc(100vh-$1'],
  [/ w full\b/g, ' w-full'],
  [/ w auto\b/g, ' w-auto'],
  [/ h full\b/g, ' h-full'],
  [/ h screen\b/g, ' h-screen'],
  [/ items center\b/g, ' items-center'],
  [/ items start\b/g, ' items-start'],
  [/ items end\b/g, ' items-end'],
  [/ justify center\b/g, ' justify-center'],
  [/ justify between\b/g, ' justify-between'],
  [/ flex col\b/g, ' flex-col'],
  [/ flex row\b/g, ' flex-row'],
  [/ flex wrap\b/g, ' flex-wrap'],
  [/ flex 1\b/g, ' flex-1'],
  [/ flex shrink 0\b/g, ' flex-shrink-0'],
  [/ shrink 0\b/g, ' shrink-0'],
  [/ inline flex\b/g, ' inline-flex'],
  [/ inline block\b/g, ' inline-block'],
  [/ block\b/g, ' block'],
  [/ text center\b/g, ' text-center'],
  [/ text left\b/g, ' text-left'],
  [/ text right\b/g, ' text-right'],
  [/ text sm\b/g, ' text-sm'],
  [/ text xs\b/g, ' text-xs'],
  [/ text base\b/g, ' text-base'],
  [/ text lg\b/g, ' text-lg'],
  [/ text xl\b/g, ' text-xl'],
  [/ text 2xl\b/g, ' text-2xl'],
  [/ text 3xl\b/g, ' text-3xl'],
  [/ text 4xl\b/g, ' text-4xl'],
  [/ text muted\b/g, ' text-muted'],
  [/ text text\b/g, ' text-text'],
  [/ text accent\b/g, ' text-accent'],
  [/ text destructive\b/g, ' text-destructive'],
  [/ text on accent\b/g, ' text-on-accent'],
  [/ bg surface light/g, ' bg-surface-light'],
  [/ bg surface\b/g, ' bg-surface'],
  [/ bg background\b/g, ' bg-background'],
  [/bg accent\b/g, 'bg-accent'],
  [/ bg accent\b/g, ' bg-accent'],
  [/ bg destructive/g, ' bg-destructive'],
  [/ bg gradient mesh/g, ' bg-gradient-mesh'],
  [/ bg cover\b/g, ' bg-cover'],
  [/ font display\b/g, ' font-display'],
  [/ font bold\b/g, ' font-bold'],
  [/ font medium\b/g, ' font-medium'],
  [/ font semibold\b/g, ' font-semibold'],
  [/ tracking wide\b/g, ' tracking-wide'],
  [/ tracking tight\b/g, ' tracking-tight'],
  [/ leading tight\b/g, ' leading-tight'],
  [/ leading relaxed\b/g, ' leading-relaxed'],
  [/ leading snug\b/g, ' leading-snug'],
  [/ rounded full\b/g, ' rounded-full'],
  [/ rounded 2xl\b/g, ' rounded-2xl'],
  [/ rounded 3xl\b/g, ' rounded-3xl'],
  [/rounded xl\b/g, 'rounded-xl'],
  [/ rounded xl\b/g, ' rounded-xl'],
  [/ rounded lg\b/g, ' rounded-lg'],
  [/ rounded md\b/g, ' rounded-md'],
  [/ btn primary\b/g, ' btn-primary'],
  [/ btn secondary\b/g, ' btn-secondary'],
  [/ home hero\b/g, ' home-hero'],
  [/ hero highlight\b/g, ' hero-highlight'],
  [/ gradient text\b/g, ' gradient-text'],
  [/ overflow hidden\b/g, ' overflow-hidden'],
  [/ overflow y-auto\b/g, ' overflow-y-auto'],
  [/ overflow x-auto\b/g, ' overflow-x-auto'],
  [/ inset 0\b/g, ' inset-0'],
  [/ mx auto\b/g, ' mx-auto'],
  [/ object cover\b/g, ' object-cover'],
  [/ animate pulse\b/g, ' animate-pulse'],
  [/ transition colors\b/g, ' transition-colors'],
  [/ transition opacity\b/g, ' transition-opacity'],
  [/transition opacity/g, 'transition-opacity'],
  [/ border b\b/g, ' border-b'],
  [/ border t\b/g, ' border-t'],
  [/ border border light\/80/g, ' border-border-light/80'],
  [/ border border light\/60/g, ' border-border-light/60'],
  [/ border border light/g, ' border-border-light'],
  [/ border border medium/g, ' border-border-medium'],
  [/ border border accent/g, ' border-border-accent'],
  [/ border border\/80/g, ' border-border/80'],
  [/ border border\b/g, ' border-border'],
  [/ border destructive/g, ' border-destructive'],
  [/ resize none\b/g, ' resize-none'],
  [/ outline none\b/g, ' outline-none'],
  [/ ring ring\b/g, ' ring-ring'],
  [/ card glass\b/g, ' card-glass'],
  [/ divide y-/g, ' divide-y-'],
  [/ space y-/g, ' space-y-'],
  [/ hover:bg surface light/g, ' hover:bg-surface-light'],
  [/ hover:bg surface\b/g, ' hover:bg-surface'],
  [/ hover:text text\b/g, ' hover:text-text'],
  [/ hover:text accent\b/g, ' hover:text-accent'],
  [/ hover:text destructive\b/g, ' hover:text-destructive'],
  [/ hover:bg destructive/g, ' hover:bg-destructive'],
  [/ hover:border border accent/g, ' hover:border-accent'],
  [/ hover:border border\b/g, ' hover:border-border'],
  [/ hover:opacity 90\b/g, ' hover:opacity-90'],
  [/ disabled:opacity 50\b/g, ' disabled:opacity-50'],
  [/ opacity 70\b/g, ' opacity-70'],
  [/ opacity 30\b/g, ' opacity-30'],
  [/ focus:ring 2\b/g, ' focus:ring-2'],
  [/ focus:border border accent/g, ' focus:border-accent'],
  [/ !text text\b/g, ' !text-text'],
  [/ !border border medium/g, ' !border-border-medium'],
  [/ hover:!text accent/g, ' hover:!text-accent'],
  [/ hover:!border accent/g, ' hover:!border-accent'],
  [/ top (\d+)/g, ' top-$1'],
  [/ right (\d+)/g, ' right-$1'],
  [/ bottom (\d+)/g, ' bottom-$1'],
  [/ left 1\/2\b/g, ' left-1/2'],
  [/ -translate x-1\/2/g, ' -translate-x-1/2'],
  [/ z (\d+)/g, ' z-$1'],
  [/ gap (\d+)/g, ' gap-$1'],
  [/ px (\d+)/g, ' px-$1'],
  [/ py (\d+)/g, ' py-$1'],
  [/ pt (\d+)/g, ' pt-$1'],
  [/ pb (\d+)/g, ' pb-$1'],
  [/ pl (\d+)/g, ' pl-$1'],
  [/ pr (\d+)/g, ' pr-$1'],
  [/ p (\d+)/g, ' p-$1'],
  [/ mb (\d+)/g, ' mb-$1'],
  [/ mt (\d+)/g, ' mt-$1'],
  [/ ml (\d+)/g, ' ml-$1'],
  [/ mr (\d+)/g, ' mr-$1'],
  [/ w (\d+)/g, ' w-$1'],
  [/ h (\d+)/g, ' h-$1'],
  [/ sm:px (\d+)/g, ' sm:px-$1'],
  [/ sm:py (\d+)/g, ' sm:py-$1'],
  [/ sm:pt (\d+)/g, ' sm:pt-$1'],
  [/ sm:pb (\d+)/g, ' sm:pb-$1'],
  [/ sm:gap (\d+)/g, ' sm:gap-$1'],
  [/ sm:p (\d+)/g, ' sm:p-$1'],
  [/ sm:w (\d+)/g, ' sm:w-$1'],
  [/ sm:h (\d+)/g, ' sm:h-$1'],
  [/ sm:mb (\d+)/g, ' sm:mb-$1'],
  [/ sm:mt (\d+)/g, ' sm:mt-$1'],
  [/ md:px (\d+)/g, ' md:px-$1'],
  [/ md:py (\d+)/g, ' md:py-$1'],
  [/ md:pt (\d+)/g, ' md:pt-$1'],
  [/ md:p (\d+)/g, ' md:p-$1'],
  [/ md:h-\[(\d+)/g, ' md:h-[$1'],
  [/ lg:px (\d+)/g, ' lg:px-$1'],
  [/ sm:text (\w+)/g, ' sm:text-$1'],
  [/ md:text (\w+)/g, ' md:text-$1'],
  [/ lg:text (\w+)/g, ' lg:text-$1'],
  [/ xl:text (\w+)/g, ' xl:text-$1'],
  [/ sm:flex row/g, ' sm:flex-row'],
  [/ sm:flex col/g, ' sm:flex-col'],
  [/ md:flex row/g, ' md:flex-row'],
  [/ sm:items center/g, ' sm:items-center'],
  [/ md:items center/g, ' md:items-center'],
  [/ sm:justify center/g, ' sm:justify-center'],
  [/ relative z (\d+)/g, ' relative z-$1'],
  [/ absolute inset 0/g, ' absolute inset-0'],
  [/ fixed inset 0/g, ' fixed inset-0'],
  [/sticky top/g, 'sticky top'],
  [/ grid cols-/g, ' grid-cols-'],
  [/ col-span-/g, ' col-span-'],
  [/ aspect video/g, ' aspect-video'],
  [/ pointer events-none/g, ' pointer-events-none'],
  [/ select none/g, ' select-none'],
  [/ whitespace nowrap/g, ' whitespace-nowrap'],
  [/ break words/g, ' break-words'],
  [/uppercase tracking/g, 'uppercase tracking'],
  [/uppercase\b/g, 'uppercase'],
  [/lowercase\b/g, 'lowercase'],
  [/capitalize\b/g, 'capitalize'],
  [/underline\b/g, 'underline'],
  [/line-through\b/g, 'line-through'],
  [/not-italic\b/g, 'not-italic'],
  [/italic\b/g, 'italic'],
  [/sr-only\b/g, 'sr-only'],
  [/list-disc\b/g, 'list-disc'],
  [/list-none\b/g, 'list-none'],
  [/cursor-pointer\b/g, 'cursor-pointer'],
  [/cursor-not-allowed\b/g, 'cursor-not-allowed'],
  [/appearance-none\b/g, 'appearance-none'],
  [/will-change-transform\b/g, 'will-change-transform'],
  [/backdrop-blur\b/g, 'backdrop-blur'],
  [/mix-blend/g, 'mix-blend'],
]

function fixClassString(s) {
  let out = s
  for (let pass = 0; pass < 3; pass++) {
    for (const [re, rep] of REPLACEMENTS) {
      out = out.replace(re, rep)
    }
  }
  return out
}

function fixSource(source) {
  return source.replace(CLASS_ATTR_RE, (full, dq, sq, tpl) => {
    const current = dq ?? sq ?? tpl ?? ''
    const fixed = fixClassString(current)
    if (fixed === current) return full
    if (dq !== undefined) return `className="${fixed}"`
    if (sq !== undefined) return `className='${fixed}'`
    return `className={\`${fixed}\`}`
  })
}

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory() && ent.name !== 'node_modules' && ent.name !== '.next') {
      walk(p)
    } else if (/\.(tsx|jsx)$/.test(ent.name)) {
      const src = fs.readFileSync(p, 'utf8')
      const next = fixSource(src)
      if (next !== src) {
        fs.writeFileSync(p, next)
        console.log('patched', path.relative(process.cwd(), p))
      }
    }
  }
}

walk(path.join(process.cwd(), 'app'))
console.log('Pass 2 complete.')
