/**
 * Shared Open Graph image renderer (next/og). Fonts: IBM Plex Sans + IBM Plex
 * Sans Arabic (SIL OFL 1.1), vendored in assets/og so builds stay offline.
 */
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getDict } from '@/content/v2/get'
import { isLocale, localeMeta } from '@/content/v2/locales'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const root = process.cwd()
let assets: Promise<{ fonts: { name: string; data: Buffer; weight: 400 | 600; style: 'normal' }[]; shield: string; bg: string | null }> | null = null

function loadAssets() {
  if (!assets) {
    assets = (async () => {
      const f = (n: string) => readFile(path.join(root, 'assets/og', n))
      const [s4, s6, a4, a6, shield] = await Promise.all([
        f('ibm-plex-sans-latin-400-normal.woff'),
        f('ibm-plex-sans-latin-600-normal.woff'),
        f('ibm-plex-sans-arabic-arabic-400-normal.woff'),
        f('ibm-plex-sans-arabic-arabic-600-normal.woff'),
        readFile(path.join(root, 'public/brand/v2/shield-192.png')),
      ])
      const bg: string | null = null
      return {
        fonts: [
          { name: 'Plex', data: s4, weight: 400 as const, style: 'normal' as const },
          { name: 'Plex', data: s6, weight: 600 as const, style: 'normal' as const },
          { name: 'PlexAr', data: a4, weight: 400 as const, style: 'normal' as const },
          { name: 'PlexAr', data: a6, weight: 600 as const, style: 'normal' as const },
        ],
        shield: `data:image/png;base64,${shield.toString('base64')}`,
        bg,
      }
    })()
  }
  return assets
}

const clip = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s)

/** Split "Work — systems in production" into eyebrow/title pieces. */
export function splitTitle(title: string): { eyebrow?: string; title: string } {
  const i = title.indexOf(' — ')
  if (i < 0) return { title }
  const rest = title.slice(i + 3)
  return { eyebrow: title.slice(0, i), title: rest.charAt(0).toUpperCase() + rest.slice(1) }
}

export async function renderOg(locale: string, { eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  const { fonts, shield, bg } = await loadAssets()
  const loc = isLocale(locale) ? locale : 'us-en'
  const rtl = localeMeta[loc].dir === 'rtl'
  const t = getDict(loc)
  const family = rtl ? 'PlexAr, Plex' : 'Plex, PlexAr'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '64px 72px', background: '#0b181d', color: '#fff', fontFamily: family, position: 'relative',
          direction: rtl ? 'rtl' : 'ltr',
        }}
      >
        {bg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={bg} width={1200} height={630} alt="" style={{ position: 'absolute', inset: 0, width: 1200, height: 630, objectFit: 'cover', opacity: 0.28 }} />
        ) : null}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'radial-gradient(circle at 85% 20%, rgba(13,120,152,.45) 0%, rgba(11,24,29,0) 55%), radial-gradient(circle at 10% 110%, rgba(134,217,95,.18) 0%, rgba(11,24,29,0) 45%)' }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shield} width={420} height={394} alt="" style={{ position: 'absolute', top: 120, [rtl ? 'left' : 'right']: -60, opacity: 0.07 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, display: 'flex', background: 'linear-gradient(90deg, #0d7898, #86d95f)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexDirection: rtl ? 'row-reverse' : 'row', alignSelf: rtl ? 'flex-end' : 'flex-start' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shield} width={64} height={60} alt="" />
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>Digni Digital</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 980, alignItems: rtl ? 'flex-end' : 'flex-start', textAlign: rtl ? 'right' : 'left', alignSelf: rtl ? 'flex-end' : 'flex-start' }}>
          {eyebrow ? (
            <div style={{ display: 'flex', fontSize: 24, fontWeight: 600, color: '#86d95f', letterSpacing: rtl ? 0 : 3, textTransform: rtl ? 'none' : 'uppercase' }}>
              {clip(eyebrow, 60)}
            </div>
          ) : null}
          <div style={{ display: 'flex', fontSize: title.length > 60 ? 54 : 66, fontWeight: 600, lineHeight: 1.1, letterSpacing: rtl ? 0 : -1.5 }}>{clip(title, 110)}</div>
          {sub ? <div style={{ display: 'flex', fontSize: 26, lineHeight: 1.4, color: '#a9b8bd' }}>{clip(sub, 150)}</div> : null}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, color: '#a9b8bd', flexDirection: rtl ? 'row-reverse' : 'row' }}>
          <div style={{ display: 'flex' }}>digni-digital-llc.com</div>
          <div style={{ display: 'flex', color: '#fff' }}>{t.footer.reg.split('·')[1]?.trim() ?? 'Kinshasa · Nairobi'}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  )
}
