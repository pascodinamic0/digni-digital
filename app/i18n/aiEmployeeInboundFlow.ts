import type { Language } from '@/app/context/LocaleContext'

export type InboundSourceId = 'ads' | 'organic' | 'walkIns' | 'referrals'

export type InboundExampleT = {
  channel: string
  moment: string
  /** Short emotional line on the photo overlay */
  overlayLine: string
  chip?: string
}

export type InboundSourceT = {
  id: InboundSourceId
  label: string
  /** One-line strategy definition shown on the card */
  strategyLine: string
  examples: [InboundExampleT, InboundExampleT, InboundExampleT]
}

export type AiEmployeeInboundFlowSectionCopy = {
  eyebrow: string
  inboundHeading: string
  /** Italic emotional beat under the headline */
  inboundEmotionalLead: string
  inboundSubtext: string
  /** Stakes line — what happens if leads go cold */
  inboundStakesLine: string
  convergeLabel: string
  hubTitle: string
  hubSubtitle: string
  selectStrategyLabel: string
  capturedLabel: string
  entryPointsLabel: string
  bentoOverviewLabel: string
  hubChannels: [string, string, string, string, string, string]
  /** Radial hub — live counter */
  leadsCapturedPrefix: string
  leadsCapturedSuffix: string
  leadsPulseLabel: string
  swipeStrategyHint: string
  tacticFilmstripLabel: string
  sources: [InboundSourceT, InboundSourceT, InboundSourceT, InboundSourceT]
}

const sourcesEn: AiEmployeeInboundFlowSectionCopy['sources'] = [
  {
    id: 'ads',
    label: 'Paid ads',
    strategyLine: 'Interrupt intent with offers — capture the click before it bounces.',
    examples: [
      {
        channel: 'Meta Lead Ad',
        moment: 'Clinic promo — form submitted in-feed, quote routed in 8s',
        overlayLine: 'Quote routed in 8 seconds',
        chip: 'Sponsored',
      },
      {
        channel: 'Google Search',
        moment: 'Restaurant “réserver table” — high-intent click from local pack ad',
        overlayLine: 'High intent. Zero wait.',
        chip: 'Search',
      },
      {
        channel: 'Retargeting',
        moment: 'Salon pricing revisit — 15% off consult claimed same session',
        overlayLine: 'They came back. You were ready.',
        chip: 'Remarketing',
      },
    ],
  },
  {
    id: 'organic',
    label: 'Organic',
    strategyLine: 'Earn attention over time — social, search, and local discovery.',
    examples: [
      {
        channel: 'Instagram DM',
        moment: 'Coiffure story reply → DM thread opened in under 2 seconds',
        overlayLine: 'Story reply → booked',
        chip: 'Social',
      },
      {
        channel: 'Website + SEO',
        moment: 'Cabinet dentaire — live chat on “urgence” page at 22:14',
        overlayLine: '22:14. Someone answered.',
        chip: 'Inbound',
      },
      {
        channel: 'Google Business',
        moment: 'Maps 4.8★ tap-to-call — routed to WhatsApp inbox',
        overlayLine: '4.8★ tap → one inbox',
        chip: 'Local',
      },
    ],
  },
  {
    id: 'walkIns',
    label: 'Walk-ins & events',
    strategyLine: 'Turn physical traffic into digital threads you can follow up.',
    examples: [
      {
        channel: 'Front desk',
        moment: 'Clinic reception — visit logged, WhatsApp thread opened',
        overlayLine: 'Walked in. Still followed up.',
        chip: 'On-site',
      },
      {
        channel: 'In-store QR',
        moment: 'Bistro counter scan → menu + réservation chat, no app',
        overlayLine: 'Scan. Chat. Reserved.',
        chip: 'QR',
      },
      {
        channel: 'Trade show',
        moment: 'Salon badge scan — nurture sequence, zero spreadsheet',
        overlayLine: 'Badge scan → nurture on',
        chip: 'Event',
      },
    ],
  },
  {
    id: 'referrals',
    label: 'Referrals',
    strategyLine: 'Trust transfers — friends, clients, and partners send warm leads.',
    examples: [
      {
        channel: 'Happy client',
        moment: 'Marie forwards your line — friend messages same afternoon',
        overlayLine: 'Warm intro. Same day.',
        chip: 'Warm',
      },
      {
        channel: 'Partner',
        moment: 'Dental group intro — budget + sites already in CRM',
        overlayLine: 'Partner send. CRM ready.',
        chip: 'Partner',
      },
      {
        channel: 'Past client',
        moment: '“They answer in seconds” — referral lands pre-sold',
        overlayLine: 'Pre-sold before hello',
        chip: 'Trusted',
      },
    ],
  },
]

const sourcesFr: AiEmployeeInboundFlowSectionCopy['sources'] = [
  {
    id: 'ads',
    label: 'Publicités payantes',
    strategyLine: 'Captez l’intention au clic — avant que le prospect ne parte.',
    examples: [
      {
        channel: 'Lead Ad Meta',
        moment: 'Promo cabinet — formulaire in-feed, devis routé en 8 s',
        overlayLine: 'Devis routé en 8 secondes',
        chip: 'Sponsorisé',
      },
      {
        channel: 'Google Ads',
        moment: 'Restaurant « réserver table » — clic fort intent depuis le pack local',
        overlayLine: 'Forte intention. Zéro attente.',
        chip: 'Recherche',
      },
      {
        channel: 'Retargeting',
        moment: 'Retour page tarifs salon — -15 % consulte, même session',
        overlayLine: 'Ils reviennent. Vous êtes prêt.',
        chip: 'Remarketing',
      },
    ],
  },
  {
    id: 'organic',
    label: 'Organique',
    strategyLine: 'Visibilité gagnée — réseaux, SEO et fiche locale.',
    examples: [
      {
        channel: 'DM Instagram',
        moment: 'Réponse story coiffure → fil DM ouvert en moins de 2 s',
        overlayLine: 'Story → réservation',
        chip: 'Social',
      },
      {
        channel: 'Site + SEO',
        moment: 'Cabinet dentaire — chat live page « urgence » à 22h14',
        overlayLine: '22h14. Quelqu’un répond.',
        chip: 'Entrant',
      },
      {
        channel: 'Google Business',
        moment: 'Maps 4,8★ — appel routé vers la boîte WhatsApp',
        overlayLine: '4,8★ → une seule boîte',
        chip: 'Local',
      },
    ],
  },
  {
    id: 'walkIns',
    label: 'Passage & événements',
    strategyLine: 'Le trafic physique devient un fil digital à relancer.',
    examples: [
      {
        channel: 'Accueil',
        moment: 'Accueil clinique — visite enregistrée, fil WhatsApp ouvert',
        overlayLine: 'Entré. Relancé quand même.',
        chip: 'Sur place',
      },
      {
        channel: 'QR magasin',
        moment: 'Scan comptoir bistro → menu + résa, sans appli',
        overlayLine: 'Scan. Chat. Réservé.',
        chip: 'QR',
      },
      {
        channel: 'Salon',
        moment: 'Badge salon — nurture auto, zéro Excel',
        overlayLine: 'Badge → nurture activé',
        chip: 'Événement',
      },
    ],
  },
  {
    id: 'referrals',
    label: 'Parrainages',
    strategyLine: 'La confiance se transfère — clients et partenaires envoient du chaud.',
    examples: [
      {
        channel: 'Client satisfait',
        moment: 'Marie transmet votre ligne — l’ami écrit le jour même',
        overlayLine: 'Intro chaude. Même jour.',
        chip: 'Chaud',
      },
      {
        channel: 'Partenaire',
        moment: 'Intro groupe dentaire — budget + sites déjà en CRM',
        overlayLine: 'Partenaire → CRM prêt',
        chip: 'Partenaire',
      },
      {
        channel: 'Ancien client',
        moment: '« Ils répondent en quelques secondes » — lead déjà convaincu',
        overlayLine: 'Convaincu avant le bonjour',
        chip: 'Confiance',
      },
    ],
  },
]

export const aiEmployeeInboundFlowEn: AiEmployeeInboundFlowSectionCopy = {
  eyebrow: '4 strategies · 12 entry points',
  inboundHeading: 'Every way leads find you',
  inboundEmotionalLead: 'They message at 10pm. From an ad. A map pin. A friend’s forward.',
  inboundSubtext:
    'Twelve real-world entry points — one nervous moment each — and one system that answers before doubt sets in.',
  inboundStakesLine: 'Miss one channel and revenue leaks quietly. Capture all twelve and nothing goes cold.',
  convergeLabel: 'All paths converge here',
  hubTitle: 'AI Employee',
  hubSubtitle: 'Capture · Reply · Qualify · Book',
  selectStrategyLabel: 'Select a strategy',
  capturedLabel: 'Captured in one inbox',
  entryPointsLabel: '12 entry points · 1 operating system',
  bentoOverviewLabel: 'All four strategies · three tactics each',
  leadsCapturedPrefix: 'leads captured',
  leadsCapturedSuffix: 'live today',
  leadsPulseLabel: 'Routing now',
  swipeStrategyHint: 'Swipe strategies',
  tacticFilmstripLabel: 'Entry points for this strategy',
  hubChannels: ['Website', 'SMS', 'WhatsApp', 'Instagram', 'Facebook', 'Phone'],
  sources: sourcesEn,
}

export const aiEmployeeInboundFlowFr: AiEmployeeInboundFlowSectionCopy = {
  eyebrow: '4 stratégies · 12 points d’entrée',
  inboundHeading: 'Toutes les façons dont les leads vous trouvent',
  inboundEmotionalLead: 'Un message à 22h. Une pub. Une fiche Maps. Le transfert d’un ami.',
  inboundSubtext:
    'Douze points d’entrée réels — douze moments de doute — et un système qui répond avant que le lead ne parte.',
  inboundStakesLine: 'Ratez un canal, la marge s’échappe en silence. Captez les douze : plus rien ne refroidit.',
  convergeLabel: 'Tous les chemins convergent ici',
  hubTitle: 'Employé IA',
  hubSubtitle: 'Capturer · Répondre · Qualifier · Réserver',
  selectStrategyLabel: 'Choisir une stratégie',
  capturedLabel: 'Capturé dans une seule boîte',
  entryPointsLabel: '12 points d’entrée · 1 système opérationnel',
  bentoOverviewLabel: 'Les 4 stratégies · trois tactiques chacune',
  leadsCapturedPrefix: 'leads capturés',
  leadsCapturedSuffix: 'en direct aujourd’hui',
  leadsPulseLabel: 'Routage en cours',
  swipeStrategyHint: 'Glissez les stratégies',
  tacticFilmstripLabel: 'Points d’entrée pour cette stratégie',
  hubChannels: ['Site web', 'SMS', 'WhatsApp', 'Instagram', 'Facebook', 'Téléphone'],
  sources: sourcesFr,
}

export const aiEmployeeInboundFlowAr: AiEmployeeInboundFlowSectionCopy = {
  ...aiEmployeeInboundFlowEn,
  inboundHeading: 'كل الطرق التي يجدك بها العملاء',
  selectStrategyLabel: 'اختر استراتيجية',
  capturedLabel: 'تم التقاطه في صندوق واحد',
  entryPointsLabel: '12 نقطة دخول · نظام واحد',
  sources: sourcesEn,
}

export const aiEmployeeInboundFlowDe: AiEmployeeInboundFlowSectionCopy = {
  ...aiEmployeeInboundFlowEn,
  inboundHeading: 'Alle Wege, wie Leads Sie finden',
  selectStrategyLabel: 'Strategie wählen',
  capturedLabel: 'In einer Inbox erfasst',
  entryPointsLabel: '12 Einstiege · 1 System',
  sources: sourcesEn,
}

export const aiEmployeeInboundFlowEs: AiEmployeeInboundFlowSectionCopy = {
  ...aiEmployeeInboundFlowEn,
  inboundHeading: 'Cada forma en que te encuentran',
  selectStrategyLabel: 'Elegir estrategia',
  capturedLabel: 'Captado en una sola bandeja',
  entryPointsLabel: '12 entradas · 1 sistema',
  sources: sourcesEn,
}

const inboundFlowByLocale: Record<Language, AiEmployeeInboundFlowSectionCopy> = {
  en: aiEmployeeInboundFlowEn,
  fr: aiEmployeeInboundFlowFr,
  ar: aiEmployeeInboundFlowAr,
  de: aiEmployeeInboundFlowDe,
  es: aiEmployeeInboundFlowEs,
}

export function getAiEmployeeInboundFlow(locale: Language): AiEmployeeInboundFlowSectionCopy {
  return inboundFlowByLocale[locale] ?? aiEmployeeInboundFlowEn
}
