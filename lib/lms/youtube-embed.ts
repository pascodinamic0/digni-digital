/** Turn a YouTube watch or youtu.be URL into an embed path for iframe src. */
export function youtubeEmbedSrc(url: string): string | null {
  const u = url.trim()
  if (!u) return null
  try {
    const parsed = new URL(u.startsWith('http') ? u : `https://${u}`)
    const host = parsed.hostname.replace(/^www\./, '')
    let id: string | null = null
    if (host === 'youtu.be') {
      id = parsed.pathname.replace(/^\//, '').split('/')[0] ?? null
    } else if (host.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/embed/')) {
        return `https://www.youtube.com${parsed.pathname}${parsed.search}`
      }
      id = parsed.searchParams.get('v')
      if (!id && parsed.pathname.startsWith('/shorts/')) {
        id = parsed.pathname.split('/')[2] ?? null
      }
    }
    if (!id || !/^[a-zA-Z0-9_-]{6,}$/.test(id)) return null
    return `https://www.youtube.com/embed/${id}?rel=0`
  } catch {
    return null
  }
}
