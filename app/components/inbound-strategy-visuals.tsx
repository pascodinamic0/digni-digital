'use client'

import type { Language } from '@/app/context/LocaleContext'
import type { InboundSourceId } from '@/app/i18n/aiEmployeeInboundFlow'
import SocialPlatformIcon from '@/app/components/SocialPlatformIcon'

export type InboundVisualSize = 'compact' | 'full'

const SIZE = {
  compact: { phone: 'max-w-[200px]', browser: 'max-w-[210px]', card: 'max-w-[200px]' },
  full: { phone: 'max-w-[300px]', browser: 'max-w-[340px]', card: 'max-w-[300px]' },
} as const

type MockLocale = 'en' | 'fr'

function toMockLocale(locale: Language): MockLocale {
  return locale === 'fr' ? 'fr' : 'en'
}

function StatusBar({ label, dark }: { label?: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2.5 border-b ${
        dark ? 'bg-[#075e54] border-[#0a4a42] text-white/90' : 'bg-[#f8f9fa] dark:bg-surface-light/95 border-border/50'
      }`}
    >
      <span className={`text-[11px] font-semibold tabular-nums ${dark ? 'text-white/80' : 'text-muted'}`}>
        9:41
      </span>
      {label ? (
        <span className={`text-[10px] font-semibold truncate max-w-[140px] ${dark ? 'text-white' : 'text-text'}`}>
          {label}
        </span>
      ) : (
        <span className="w-16" />
      )}
      <span className="flex items-center gap-1" aria-hidden>
        <span className={`w-4 h-2 rounded-sm border ${dark ? 'border-white/50' : 'border-muted/50'}`} />
        <span className={`w-1 h-2 rounded-sm ${dark ? 'bg-white/70' : 'bg-muted/60'}`} />
      </span>
    </div>
  )
}

function DevicePhone({
  children,
  label,
  darkHeader,
  size = 'full',
}: {
  children: React.ReactNode
  label?: string
  darkHeader?: boolean
  size?: InboundVisualSize
}) {
  const maxW = SIZE[size].phone
  return (
    <div className={`mx-auto w-full ${maxW}`}>
      <div className="rounded-[1.75rem] border border-white/10 bg-[#050508] p-[3px] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.75)]">
        <div className="rounded-[1.55rem] overflow-hidden bg-background ring-1 ring-white/8">
          <div className="relative flex justify-center pt-2.5 pb-1 bg-background">
            <span className="w-[78px] h-[24px] rounded-full bg-black border border-white/12" aria-hidden />
          </div>
          <StatusBar label={label} dark={darkHeader} />
          {children}
        </div>
      </div>
    </div>
  )
}

function DeviceBrowser({
  children,
  title,
  size = 'full',
}: {
  children: React.ReactNode
  title: string
  size?: InboundVisualSize
}) {
  const maxW = SIZE[size].browser
  return (
    <div className={`mx-auto w-full ${maxW}`}>
      <div className="rounded-xl border border-white/10 bg-background shadow-[0_32px_80px_-20px_rgba(0,0,0,0.75)] overflow-hidden ring-1 ring-white/8">
        <div className="flex items-center gap-2 px-3 py-2.5 bg-[#18181c] border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-1 flex-1 flex items-center gap-2 rounded-md bg-black/40 border border-white/8 px-2.5 py-1 min-w-0">
            <svg className="w-3 h-3 text-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <span className="text-[10px] text-muted/90 truncate">{title}</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

function GoogleMark({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export function InboundStrategyVisual({
  sourceId,
  index,
  size = 'full',
  locale = 'en',
}: {
  sourceId: InboundSourceId
  index: number
  size?: InboundVisualSize
  locale?: Language
}) {
  const lang = toMockLocale(locale ?? 'en')
  switch (sourceId) {
    case 'ads':
      if (index === 0) return <AdsMetaVisual size={size} lang={lang} />
      if (index === 1) return <AdsGoogleVisual size={size} lang={lang} />
      return <AdsRetargetVisual size={size} lang={lang} />
    case 'organic':
      if (index === 0) return <OrganicInstagramVisual size={size} lang={lang} />
      if (index === 1) return <OrganicWebsiteVisual size={size} lang={lang} />
      return <OrganicMapsVisual size={size} lang={lang} />
    case 'walkIns':
      if (index === 0) return <WalkInDeskVisual size={size} lang={lang} />
      if (index === 1) return <WalkInQrVisual size={size} lang={lang} />
      return <WalkInEventVisual size={size} lang={lang} />
    case 'referrals':
      if (index === 0) return <ReferralForwardVisual size={size} lang={lang} />
      if (index === 1) return <ReferralPartnerVisual size={size} lang={lang} />
      return <ReferralTrustVisual size={size} lang={lang} />
    default:
      return null
  }
}

function AdsMetaVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-2.5 space-y-2' : 'p-3.5 space-y-3'
  const copy =
    lang === 'fr'
      ? {
          brand: 'Cabinet Rivoli',
          headline: 'Blanchiment · 1ère consult offerte',
          cta: 'Demander un devis',
          lead: 'Lead reçu · 8 s',
          metrics: ['Portée 12,4k', 'CTR 2,1%', 'Coût/lead €4,20'],
        }
      : {
          brand: 'Rivoli Clinic',
          headline: 'Whitening · Free first consult',
          cta: 'Get a quote',
          lead: 'Lead received · 8s',
          metrics: ['Reach 12.4k', 'CTR 2.1%', 'Cost/lead €4.20'],
        }

  return (
    <DevicePhone label="Meta Ads Manager" size={size}>
      <div className={`${pad} bg-[#f0f2f5] dark:bg-[#18191a]`}>
        <div className="flex items-center justify-between gap-2 pb-1 border-b border-black/5">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-9 h-9 rounded-lg bg-[#1877f2] flex items-center justify-center text-white text-[10px] font-black shrink-0">
              f
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#1c1e21] dark:text-text truncate">{copy.brand}</p>
              <p className="text-[9px] font-bold text-[#65676b] uppercase tracking-wide">Sponsored · Lead Ad</p>
            </div>
          </div>
          <span className="text-[9px] font-bold text-warning bg-warning/15 px-1.5 py-0.5 rounded">Active</span>
        </div>

        <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#e4e6eb] to-[#d8dadf] dark:from-surface-light dark:to-surface border border-black/5 overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(24,119,242,0.2),transparent)]" />
          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-[11px] font-bold text-white leading-snug">{copy.headline}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {copy.metrics.map((m) => (
            <div key={m} className="rounded-md bg-white/90 dark:bg-surface-light px-1.5 py-1 text-center border border-black/5">
              <p className="text-[8px] font-semibold text-[#65676b] leading-tight">{m}</p>
            </div>
          ))}
        </div>

        <div className="h-10 rounded-lg bg-[#1877f2] flex items-center justify-center text-[11px] font-bold text-white shadow-md">
          {copy.cta}
        </div>
        <p className="text-[10px] text-success font-bold text-center flex items-center justify-center gap-1">
          <span className="w-4 h-4 rounded-full bg-success/20 flex items-center justify-center text-[9px]">✓</span>
          {copy.lead}
        </p>
      </div>
    </DevicePhone>
  )
}

function AdsGoogleVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-3 space-y-2' : 'p-4 space-y-3'
  const copy =
    lang === 'fr'
      ? {
          query: 'réserver table restaurant lyon',
          adTitle: 'Bistro du Parc — Réservation',
          adDesc: 'Tables ce soir · Réponse IA en 12 s',
          local: ['4,8 ★ · 214 avis', 'Ouvert jusqu’à 23h'],
        }
      : {
          query: 'book table restaurant lyon',
          adTitle: 'Bistro du Parc — Reservations',
          adDesc: 'Tables tonight · AI reply in 12s',
          local: ['4.8 ★ · 214 reviews', 'Open until 11pm'],
        }

  return (
    <DeviceBrowser title="google.com/search" size={size}>
      <div className={`${pad} bg-white dark:bg-background`}>
        <div className="flex items-center gap-2">
          <GoogleMark />
          <div className="h-9 flex-1 rounded-full bg-[#f1f3f4] dark:bg-surface-light border border-border/40 px-3 flex items-center shadow-inner">
            <span className="text-[11px] text-[#202124] dark:text-muted truncate">{copy.query}</span>
          </div>
        </div>

        <p className="text-[10px] text-[#70757a] font-medium">Résultats · Lyon</p>

        <div className="rounded-xl border-2 border-[#1a73e8]/30 bg-[#e8f0fe]/50 dark:bg-warning/5 p-3 space-y-2 shadow-sm">
          <p className="text-[10px] font-bold text-[#1a0dab] dark:text-warning">Annonce · bistroduparc.fr</p>
          <p className="text-sm font-semibold text-[#202124] dark:text-text leading-snug">{copy.adTitle}</p>
          <p className="text-[11px] text-[#4d5156] dark:text-muted">{copy.adDesc}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {copy.local.map((l) => (
              <span key={l} className="text-[10px] font-medium text-[#188038] dark:text-success">
                {l}
              </span>
            ))}
          </div>
          <div className="flex gap-2 pt-1">
            <span className="px-3 py-1 rounded-full bg-[#1a73e8] text-[10px] font-bold text-white">Appeler</span>
            <span className="px-3 py-1 rounded-full border border-[#dadce0] text-[10px] font-semibold text-[#1a73e8]">
              Réserver
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-border/40 p-2 opacity-40">
          <p className="text-[10px] font-semibold text-muted">Pack local · 3 résultats</p>
          <div className="flex gap-2 mt-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex-1 h-12 rounded bg-border/30" />
            ))}
          </div>
        </div>
      </div>
    </DeviceBrowser>
  )
}

function AdsRetargetVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-3' : 'p-4'
  const copy =
    lang === 'fr'
      ? { title: 'Salon Éclat — Tarifs', promo: '-15 % sur votre première coupe', cta: 'Réserver maintenant' }
      : { title: 'Éclat Salon — Pricing', promo: '15% off your first cut', cta: 'Book now' }

  return (
    <DeviceBrowser title={copy.title} size={size}>
      <div className={`${pad} bg-white dark:bg-background`}>
        <div className="flex gap-2 mb-3 opacity-40 text-[10px] text-muted">
          <span>Services</span>
          <span className="font-bold text-text">Tarifs</span>
          <span>Contact</span>
        </div>
        <div
          className={`rounded-xl border-2 border-warning/50 bg-gradient-to-br from-warning/25 via-warning/8 to-transparent text-center ${size === 'compact' ? 'p-3' : 'p-6'}`}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-warning font-bold mb-2">Remarketing</p>
          <p className="text-lg font-display font-bold text-text">{copy.promo}</p>
          <p className="text-[11px] text-muted mt-2">Panier abandonné · il y a 2 h</p>
          <span className="inline-block mt-4 px-6 py-2.5 rounded-full bg-warning text-[12px] font-bold text-background shadow-lg shadow-warning/30">
            {copy.cta}
          </span>
        </div>
      </div>
    </DeviceBrowser>
  )
}

function OrganicInstagramVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-2.5 min-h-[160px]' : 'p-3.5 min-h-[240px]'
  const copy =
    lang === 'fr'
      ? {
          user: 'coiffure_marie',
          incoming: 'Vu votre story — encore des places samedi ?',
          reply: 'Oui ! 10h30 ou 14h — laquelle vous va ?',
          confirm: '14h parfait ✓',
        }
      : {
          user: 'marie_hair',
          incoming: 'Saw your story — any slots Saturday?',
          reply: 'Yes! 10:30am or 2pm — which works?',
          confirm: '2pm works ✓',
        }

  return (
    <DevicePhone label="Instagram" size={size}>
      <div className={`bg-gradient-to-b from-[#833ab4]/20 via-background to-background ${pad} space-y-2.5`}>
        <div className="flex items-center gap-2 pb-2 border-b border-border/40">
          <span className="p-0.5 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
            <SocialPlatformIcon platform="instagram" className="w-5 h-5 text-white" />
          </span>
          <span className="text-xs font-bold">@{copy.user}</span>
          <span className="ml-auto text-[10px] text-success font-bold">● En ligne</span>
        </div>
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#3797f0]/20 border border-[#3797f0]/30 px-3 py-2.5 text-[11px] text-text leading-snug">
          {copy.incoming}
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-[#25d366]/15 border border-success/40 px-3 py-2.5 shadow-md">
          <p className="text-[10px] text-success font-bold mb-1">Employé IA · maintenant</p>
          <p className="text-[11px] text-text leading-snug">{copy.reply}</p>
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-surface-light border border-border/50 px-3 py-2 text-[11px] text-muted">
          {copy.confirm}
        </div>
      </div>
    </DevicePhone>
  )
}

function OrganicWebsiteVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const h = size === 'compact' ? 'min-h-[160px]' : 'min-h-[240px]'
  const copy =
    lang === 'fr'
      ? { url: 'cabinet-rivoli.fr/urgence', chat: 'Bonjour — douleur ou contrôle ?', badge: 'Chat live · 0 file' }
      : { url: 'rivoli-clinic.com/emergency', chat: 'Hi — pain or check-up?', badge: 'Live chat · no queue' }

  return (
    <DeviceBrowser title={copy.url} size={size}>
      <div className={`relative ${h} p-4 bg-white dark:bg-background`}>
        <div className="space-y-2 opacity-30">
          <div className="h-4 w-2/3 rounded bg-border" />
          <div className="h-2 w-full rounded bg-border/70" />
          <div className="h-2 w-5/6 rounded bg-border/70" />
          <div className="h-16 rounded-lg bg-[#e8f0fe]/40 mt-3" />
        </div>
        <div className="absolute bottom-3 right-3 left-3 rounded-2xl border-2 border-success/45 bg-white dark:bg-background shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2.5 bg-success/15 border-b border-success/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <span className="text-xs font-bold text-success">{copy.badge}</span>
          </div>
          <p className="px-3 py-3 text-[12px] text-text font-medium">{copy.chat}</p>
        </div>
      </div>
    </DeviceBrowser>
  )
}

function OrganicMapsVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-2.5 space-y-2' : 'p-3.5 space-y-3'
  const copy =
    lang === 'fr'
      ? { name: 'Bistro du Parc', rating: '4,8 ★ · 214 avis', status: 'Ouvert · ferme à 23h' }
      : { name: 'Bistro du Parc', rating: '4.8 ★ · 214 reviews', status: 'Open · closes 11pm' }

  return (
    <DevicePhone label="Google Maps" size={size}>
      <div className={pad}>
        <div className="aspect-[5/3] rounded-xl bg-[#d4e8d4] dark:bg-info/10 border border-info/20 relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-50" aria-hidden>
            <defs>
              <pattern id="inbound-map-grid" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M 14 0 L 0 0 0 14" fill="none" stroke="rgba(var(--info-rgb),0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#inbound-map-grid)" />
          </svg>
          <div className="absolute top-[36%] left-[48%] -translate-x-1/2 -translate-y-full">
            <span className="block w-10 h-10 rounded-full bg-[#ea4335] shadow-lg border-[3px] border-white flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
            </span>
          </div>
          <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white dark:bg-background border border-border/50 p-2.5 flex gap-2.5 shadow-lg">
            <div className="w-11 h-11 rounded-lg bg-[#fbbc04]/20 flex items-center justify-center shrink-0">
              <GoogleMark className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-[#202124] dark:text-text truncate">{copy.name}</p>
              <p className="text-[11px] text-[#188038] dark:text-success font-semibold">{copy.rating}</p>
              <p className="text-[10px] text-[#70757a] dark:text-muted">{copy.status}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="py-2.5 rounded-xl bg-[#1a73e8] text-[11px] font-bold text-white shadow-md">
            Appeler
          </button>
          <button type="button" className="py-2.5 rounded-xl border border-border/60 text-[11px] font-semibold bg-white dark:bg-surface-light">
            WhatsApp
          </button>
        </div>
      </div>
    </DevicePhone>
  )
}

function WalkInDeskVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const maxW = SIZE[size].card
  const pad = size === 'compact' ? 'p-3' : 'p-5'
  const copy =
    lang === 'fr'
      ? { desk: 'Accueil · Cabinet Rivoli', time: 'Passage · 14:22', status: 'Nouveau patient', route: 'WhatsApp + file unifiée' }
      : { desk: 'Reception · Rivoli Clinic', time: 'Walk-in · 2:22 PM', status: 'New patient', route: 'WhatsApp + unified queue' }

  return (
    <div className={`mx-auto w-full ${maxW} rounded-2xl border border-info/35 bg-gradient-to-br from-info/8 via-background to-background ${pad} shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-info/20`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-info/20 border border-info/40 flex items-center justify-center text-info">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M3 21h18M6 21V9l6-4 6 4v12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-text">{copy.desk}</p>
          <p className="text-[11px] text-muted">{copy.time}</p>
        </div>
        <span className="ml-auto px-2.5 py-1 rounded-lg bg-info/15 text-[10px] font-bold text-info border border-info/35 animate-pulse">
          {copy.status}
        </span>
      </div>
      <div className="rounded-xl bg-surface-light/80 border border-border/50 p-3.5 space-y-3">
        <div className="flex justify-between text-[11px]">
          <span className="text-muted">Capture visiteur</span>
          <span className="text-info font-bold">Routage…</span>
        </div>
        <div className="h-3 rounded-full bg-border/40 overflow-hidden">
          <div className="h-full w-[78%] bg-gradient-to-r from-info via-accent to-success rounded-full inbound-progress-shine" />
        </div>
        <p className="text-xs text-text font-semibold flex items-center gap-2">
          <SocialPlatformIcon platform="whatsapp" className="w-4 h-4 text-[#25d366] shrink-0" />
          {copy.route}
        </p>
      </div>
    </div>
  )
}

function WalkInQrVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const maxW = SIZE[size].card
  const qrSize = size === 'compact' ? 'w-20 h-20' : 'w-32 h-32'
  const copy =
    lang === 'fr'
      ? { title: 'Scan comptoir', sub: 'Menu + réservation · sans appli', live: 'File WhatsApp active' }
      : { title: 'Counter scan', sub: 'Menu + booking · no app', live: 'WhatsApp queue live' }

  return (
    <div className={`mx-auto w-full ${maxW} flex flex-col items-center gap-4 ${size === 'compact' ? 'p-3' : 'p-5'}`}>
      <div className="w-full rounded-2xl border-2 border-dashed border-info/50 bg-gradient-to-b from-info/10 to-transparent p-6 flex flex-col items-center shadow-inner">
        <div className={`${qrSize} rounded-xl bg-white p-2.5 grid grid-cols-7 grid-rows-7 gap-[2px] shadow-lg ring-2 ring-info/30`}>
          {Array.from({ length: 49 }).map((_, i) => (
            <span
              key={i}
              className={`rounded-[1px] ${
                [
                  0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48,
                  8, 9, 10, 16, 17, 18, 22, 24, 30, 31, 32, 36, 38,
                ].includes(i)
                  ? 'bg-[#0f172a]'
                  : 'bg-transparent'
              }`}
            />
          ))}
        </div>
        <p className="text-sm font-display font-bold text-text mt-5">{copy.title}</p>
        <p className="text-[11px] text-muted mt-1">{copy.sub}</p>
      </div>
      <div className="w-full flex items-center gap-2 rounded-xl bg-[#25d366]/12 border border-[#25d366]/40 px-4 py-3">
        <SocialPlatformIcon platform="whatsapp" className="w-5 h-5 text-[#25d366] shrink-0" />
        <p className="text-xs font-bold text-[#25d366]">{copy.live}</p>
      </div>
    </div>
  )
}

function WalkInEventVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-3' : 'p-4'
  const copy =
    lang === 'fr'
      ? { event: 'Salon Beauté Paris', badge: 'BADGE', title: 'Scan → CRM', sub: 'Nurture J+1 auto' }
      : { event: 'Beauty Expo Paris', badge: 'BADGE', title: 'Scan → CRM', sub: 'Day-1 nurture auto' }

  return (
    <DevicePhone label={copy.event} size={size}>
      <div className="min-h-[200px] flex flex-col">
        <div className="h-16 bg-gradient-to-r from-info/60 via-accent/50 to-success/40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,rgba(255,255,255,0.1)_6px,rgba(255,255,255,0.1)_12px)]" />
          <p className="absolute bottom-2 left-3 text-[10px] font-bold text-white/90 uppercase tracking-widest">
            {copy.event}
          </p>
        </div>
        <div className={`${pad} flex-1 flex gap-3 items-center`}>
          <div className="w-16 h-[5rem] rounded-lg border-2 border-accent/50 bg-surface flex flex-col items-center justify-center shrink-0 shadow-lg">
            <span className="text-[9px] font-black text-accent tracking-widest">{copy.badge}</span>
            <span className="mt-2 w-10 h-10 rounded-md bg-gradient-to-br from-accent/40 to-info/30" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-text">{copy.title}</p>
            <p className="text-[11px] text-muted">{copy.sub}</p>
            <span className="inline-flex px-2.5 py-1 rounded-md bg-success/15 border border-success/35 text-[10px] font-bold text-success">
              Lead capturé
            </span>
          </div>
        </div>
      </div>
    </DevicePhone>
  )
}

function ReferralForwardVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-2.5 space-y-2 min-h-[160px]' : 'p-3.5 space-y-3 min-h-[220px]'
  const copy =
    lang === 'fr'
      ? {
          forward: 'Transféré par Marie L.',
          msg: 'Bonjour — Marie m’a donné votre numéro pour un devis coiffure',
          time: '14:02 ✓✓',
        }
      : {
          forward: 'Forwarded by Marie L.',
          msg: 'Hi — Marie gave me your number for a salon quote',
          time: '2:02 PM ✓✓',
        }

  return (
    <DevicePhone label="WhatsApp" darkHeader size={size}>
      <div className={`${pad} bg-[#0b141a]`}>
        <div className="rounded-lg bg-[#1f2c34] border border-white/5 p-2.5">
          <p className="text-[10px] text-[#8696a0] mb-1">{copy.forward}</p>
          <p className="text-[11px] text-[#e9edef] font-medium">+33 6 12 34 56 78</p>
        </div>
        <div className="flex items-center justify-center gap-2 py-2" aria-hidden>
          {['M', '→', 'Vous'].map((l, i) => (
            <span
              key={l}
              className={`flex items-center justify-center text-[10px] font-bold rounded-full border-2 border-[#0b141a] ${
                i === 1 ? 'bg-[#25d366] text-white w-8 h-8' : 'bg-[#2a3942] text-[#8696a0] w-9 h-9'
              }`}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="max-w-[92%] rounded-lg rounded-tl-none bg-[#005c4b] px-3 py-2.5 shadow-lg border border-[#0d8f6f]/50">
          <p className="text-[11px] text-[#e9edef] leading-snug">{copy.msg}</p>
          <p className="text-[9px] text-[#8696a0] text-right mt-1">{copy.time}</p>
        </div>
      </div>
    </DevicePhone>
  )
}

function ReferralPartnerVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const pad = size === 'compact' ? 'p-3 space-y-2' : 'p-4 space-y-3'
  const copy =
    lang === 'fr'
      ? {
          subject: 'Intro chaude — Groupe dentaire Est',
          body: 'Budget validé · 2 sites · lancement mars',
          tags: ['Budget OK', '2 sites', 'Décideur'],
          synced: 'Contexte synchronisé CRM',
        }
      : {
          subject: 'Warm intro — East Dental Group',
          body: 'Budget approved · 2 sites · March kickoff',
          tags: ['Budget OK', '2 sites', 'Decision maker'],
          synced: 'Context synced to CRM',
        }

  return (
    <DeviceBrowser title="mail@partenaire-dentaire.fr" size={size}>
      <div className={`${pad} bg-white dark:bg-background`}>
        <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Partner intro</p>
        <div className="rounded-xl border border-border/50 bg-[#f8f9fa] dark:bg-surface-light p-3.5 space-y-2 shadow-sm">
          <p className="text-xs font-bold text-text">{copy.subject}</p>
          <p className="text-[11px] text-muted">{copy.body}</p>
          <div className="flex flex-wrap gap-1 pt-1">
            {copy.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-accent/10 text-[9px] font-semibold text-accent border border-accent/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[11px] font-bold text-success flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center text-[10px]">✓</span>
          {copy.synced}
        </p>
      </div>
    </DeviceBrowser>
  )
}

function ReferralTrustVisual({ size, lang }: { size: InboundVisualSize; lang: MockLocale }) {
  const maxW = SIZE[size].card
  const pad = size === 'compact' ? 'p-4' : 'p-6'
  const copy =
    lang === 'fr'
      ? {
          quote: '« Ils répondent en quelques secondes — foncez. »',
          author: '— Ancienne cliente',
          badge: '+1 lead parrainage',
        }
      : {
          quote: '"They reply in seconds — go for it."',
          author: '— Past client',
          badge: '+1 referral lead',
        }

  return (
    <div
      className={`mx-auto w-full ${maxW} rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 via-background to-surface ${pad} shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)] text-center ring-1 ring-accent/25`}
    >
      <div className="flex justify-center gap-0.5 mb-4" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-warning" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1.5l2.35 4.76 5.26.77-3.8 3.71.9 5.24L10 13.77l-4.71 2.47.9-5.24-3.8-3.71 5.26-.77L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className={`text-text leading-relaxed italic font-medium ${size === 'compact' ? 'text-xs' : 'text-sm'}`}>
        {copy.quote}
      </p>
      <p className="text-[11px] text-muted mt-3">{copy.author}</p>
      <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/12 border border-success/35">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-50" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
        </span>
        <span className="text-xs font-bold text-success">{copy.badge}</span>
      </div>
    </div>
  )
}
