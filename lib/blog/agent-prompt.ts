import type { FileBlogCatalogEntry } from '@/lib/blog/file-catalog'

export function buildBlogAgentPrompt(
  instruction: string,
  selected: FileBlogCatalogEntry[],
  all: FileBlogCatalogEntry[]
): string {
  const inventory = all
    .map(
      (p) =>
        `- **${p.title}** · slug \`${p.slug}\` · ${p.category} · ${p.publishDate}\n  Excerpt: ${p.excerpt.slice(0, 280)}${p.excerpt.length > 280 ? '…' : ''}`
    )
    .join('\n')

  const focus =
    selected.length > 0
      ? `\n## Posts to use as context (user-selected)\n${selected
          .map((p) => `- ${p.title} (\`${p.slug}\`): ${p.excerpt.slice(0, 400)}`)
          .join('\n')}\n`
      : ''

  return `You are the editorial assistant for Digni Digital (digital transformation, AI employees, employability programs).

## Full live blog inventory (marketing site, English)
${inventory}
${focus}
## Task
${instruction.trim()}

## Blog body conventions (match live flagship posts)
- Left-aligned readable paragraphs; use design-token typography (no arbitrary font sizes).
- Section images: photorealistic when used; figcaptions left-aligned without inline center styles.
- FAQs: use structured \`faqs\` array plus \`<!--BLOG_FAQ-->\` marker in HTML where the accordion should appear (not paragraph-style FAQ blocks).
- Place \`<!--BLOG_FAQ-->\` after the main teaching content and before the closing CTA paragraph.

## Output format
Respond with valid JSON only, no markdown fences:
{"title":"...","slug":"kebab-case-slug","excerpt":"one paragraph","bodyMd":"full markdown body for the post","faqs":[{"question":"...","answer":"..."}]}
`
}

export function buildCursorHandoffMarkdown(
  instruction: string,
  selected: FileBlogCatalogEntry[],
  all: FileBlogCatalogEntry[]
): string {
  const prompt = buildBlogAgentPrompt(instruction, selected, all)
  return `# Blog — handoff for Cursor / AI agent

${prompt}

---
_Coding agent: add posts per \`content/blog/\` locale parity, or save a DB draft from Admin → Blog → Database. Automation may use \`POST /api/content/agent\` with \`ADMIN_CONTENT_API_SECRET\`._
`
}
