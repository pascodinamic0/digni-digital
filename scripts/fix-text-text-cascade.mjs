#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const FIX = [
  // Collapse runaway text-text cascades
  [/text-text(?:-text){2,}/g, 'text-text'],
  [/text-text-text/g, 'text-text'],
  // border-border-[ → border-[
  [/border-border-\[/g, 'border-['],
  [/border-border-white/g, 'border-white'],
  [/border-border-black/g, 'border-black'],
  // Misc broken tokens from bad passes
  [/text-text-white/g, 'text-white'],
  [/text-text-black/g, 'text-black'],
  [/text-text-accent/g, 'text-accent'],
  [/text-text-muted/g, 'text-muted'],
  [/text-text-success/g, 'text-success'],
  [/text-text-warning/g, 'text-warning'],
  [/text-text-destructive/g, 'text-destructive'],
  [/text-text-on-accent/g, 'text-on-accent'],
  [/text warning\b/g, 'text-warning'],
  [/text success\b/g, 'text-success'],
  [/text white\b/g, 'text-white'],
  [/text center\b/g, 'text-center'],
  [/border l-(\d)/g, 'border-l-$1'],
  [/border t-(\d)/g, 'border-t-$1'],
  [/border b-(\d)/g, 'border-b-$1'],
  [/bg warning\b/g, 'bg-warning'],
  [/white leading/g, 'text-white leading'],
  [/font-bold text-text-center/g, 'font-bold text-center'],
  [/text-text-center/g, 'text-center'],
  [/focus-visible:outline focus-visible:outline/g, 'focus-visible:outline'],
  [/py 1\b/g, 'py-1'],
  [/px 1\b/g, 'px-1'],
  [/bg-accent\/10 border-accent\//g, 'bg-accent/10 border border-accent/'],
  [/border-accent\/20 text-accent/g, 'border border-accent/20 text-accent'],
  [/border-accent\/25 text-accent/g, 'border border-accent/25 text-accent'],
  [/border-accent\/30/g, 'border-accent/30'], // keep; add border separately above
  [/chip: 'bg-accent\/15 text-accent border-accent/g, "chip: 'bg-accent/15 text-accent border border-accent"],
]

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory() && !['node_modules', '.next'].includes(ent.name)) walk(p)
    else if (/\.(tsx|jsx)$/.test(ent.name)) {
      let s = fs.readFileSync(p, 'utf8')
      if (!/text-text-text|border-border-\[/.test(s)) continue
      let n = s
      for (let pass = 0; pass < 8; pass++) {
        for (const [a, b] of FIX) n = n.replace(a, b)
        n = n.replace(/text-text(?:-text)+/g, 'text-text')
      }
      if (n !== s) {
        fs.writeFileSync(p, n)
        console.log('fixed', path.relative(process.cwd(), p))
      }
    }
  }
}

walk(path.join(process.cwd(), 'app'))
console.log('done')
