import type { BlogFaqItem } from '@/content/blog/types'

export const BLOG_FAQ_MARKER = '<!--BLOG_FAQ-->'

/** h3 headings that start a legacy inline FAQ block */
const FAQ_SECTION_HEADING =
  /<h3[^>]*>\s*(?:FAQ|Frequently Asked Questions|Questions fréquentes|Häufig gestellte Fragen|Preguntas frecuentes|الأسئلة الشائعة)\s*<\/h3>/i

const FAQ_PARAGRAPH =
  /<p[^>]*>\s*<strong[^>]*>([\s\S]*?)<\/strong>(?:\s*<br\s*\/?>)?\s*([\s\S]*?)<\/p>/gi

function stripInlineHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseFaqParagraphs(html: string): BlogFaqItem[] {
  const faqs: BlogFaqItem[] = []
  let match: RegExpExecArray | null
  const re = new RegExp(FAQ_PARAGRAPH.source, FAQ_PARAGRAPH.flags)

  while ((match = re.exec(html)) !== null) {
    const question = stripInlineHtml(match[1])
    const answer = stripInlineHtml(match[2])
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }

  return faqs
}

function extractLegacyFaqSection(html: string): {
  contentBeforeFaq: string
  contentAfterFaq: string
  faqs: BlogFaqItem[]
} | null {
  const headingMatch = html.match(FAQ_SECTION_HEADING)
  if (!headingMatch || headingMatch.index === undefined) return null

  const sectionStart = headingMatch.index
  const afterHeading = html.slice(sectionStart + headingMatch[0].length)
  const nextHeading = afterHeading.search(/<h3[^>]*>/i)
  const faqBlock = nextHeading === -1 ? afterHeading : afterHeading.slice(0, nextHeading)
  const contentAfterFaq = nextHeading === -1 ? '' : afterHeading.slice(nextHeading)
  const faqs = parseFaqParagraphs(faqBlock)

  if (!faqs.length) return null

  return {
    contentBeforeFaq: html.slice(0, sectionStart),
    contentAfterFaq,
    faqs,
  }
}

export interface ResolvedBlogFaq {
  contentBeforeFaq: string
  contentAfterFaq: string
  faqs: BlogFaqItem[]
}

/** Split article HTML and resolve FAQ items for accordion + JSON-LD. */
export function resolveBlogFaqContent(
  content: string,
  explicitFaqs?: BlogFaqItem[]
): ResolvedBlogFaq {
  const hasMarker = content.includes(BLOG_FAQ_MARKER)
  const structuredFaqs = explicitFaqs?.length ? explicitFaqs : []

  if (structuredFaqs.length && hasMarker) {
    const [contentBeforeFaq, contentAfterFaq = ''] = content.split(BLOG_FAQ_MARKER)
    return { contentBeforeFaq, contentAfterFaq, faqs: structuredFaqs }
  }

  const legacy = extractLegacyFaqSection(content)
  if (legacy) {
    return {
      contentBeforeFaq: legacy.contentBeforeFaq,
      contentAfterFaq: legacy.contentAfterFaq,
      faqs: structuredFaqs.length ? structuredFaqs : legacy.faqs,
    }
  }

  return {
    contentBeforeFaq: content,
    contentAfterFaq: '',
    faqs: structuredFaqs,
  }
}
