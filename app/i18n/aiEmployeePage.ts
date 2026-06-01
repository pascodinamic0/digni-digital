/**
 * AI Employee / ai-receptionist page, full StoryBrand + growth-operator copy.
 * Customer = hero; Digni = guide. Keep locales aligned when editing English.
 */

export type AiEmployeePageTranslations = {
  hero: {
    badge: string
    titleLine1: string
    titleHighlight: string
    /** One short supporting line under the headline. */
    hook: string
    primaryCta: string
    footnote: string
  }
  /** Mobile app promo strip, pairs with assets in /public/images/Download */
  mobileApp: {
    title: string
    bullet1: string
    bullet2: string
    tagline: string
    imageAlt: string
    appStoreHref: string
    playStoreHref: string
    appStoreAriaLabel: string
    playStoreAriaLabel: string
  }
  problem: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    stats: [StatTriple, StatTriple, StatTriple]
  }
  capabilities: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: [CapItem, CapItem, CapItem, CapItem, CapItem, CapItem]
  }
  timeToValue: {
    badge: string
    title: string
    subtitle: string
    statBig: string
    statSmall: string
    cta: string
  }
  qualification: {
    badge: string
    title: string
    titleHighlight: string
    forHeading: string
    forItems: [string, string, string, string, string, string]
    notHeading: string
    notItems: [string, string, string, string, string, string]
  }
  caseStudy: {
    label: string
    title: string
    company: string
    industry: string
    contextLabel: string
    challengeLabel: string
    solutionLabel: string
    context: string
    challenge: string
    solution: string
    outcomesHeading: string
    results: [ResultLine, ResultLine, ResultLine, ResultLine]
  }
  pricing: {
    title: string
    subtitle: string
    valueAnchor: {
      heading: string
      lineItems: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }, { label: string; value: string }]
      totalLabel: string
      totalValue: string
      investmentLabel: string
      investmentDetail: string
      investmentNote: string
    }
    planName: string
    limitedLabel: string
    setupFee: string
    /** Shown as the current amount while `setupFee` is struck through (e.g. promo period). */
    setupFeeWaivedDisplay: string
    setupLabel: string
    /** Short promo line (e.g. limited-time fee removal). */
    setupFeePromo: string
    /** Line above the live countdown during the promo. */
    setupPromoCountdownLead: string
    monthlyLabel: string
    price: string
    period: string
    note: string
    cta: string
  }
  valueBadges: {
    ariaLabel: string
    responseTime: string
    setupSpeed: string
    zeroEffort: string
  }
  dreamOutcome: {
    badge: string
    title: string
    subtitle: string
    beforeLabel: string
    beforeMetric: string
    beforeHint: string
    arrowLabel: string
    afterLabel: string
    afterMetric: string
    referralLine: string
    afterHint: string
  }
  denominator: {
    badge: string
    title: string
    subtitle: string
    pillarSpeed: string
    pillarSpeedHint: string
    pillarDeploy: string
    pillarDeployHint: string
    pillarEffort: string
    pillarEffortHint: string
  }
  bonusStack: {
    badge: string
    title: string
    subtitle: string
    includedLabel: string
    totalValue: string
    items: [BonusItem, BonusItem, BonusItem]
  }
  guarantee: {
    badge: string
    title: string
    body: string
  }
  scarcity: {
    prefix: string
    currentlyLabel: string
    spotsSuffix: string
  }
  finalCta: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    primaryCta: string
    bullet1: string
    bullet2: string
    bullet3: string
  }
}

type BonusItem = { name: string; description: string; value: string }

type StatTriple = { value: string; label: string; hint: string }
type CapItem = { title: string; body: string }
type ResultLine = { metric: string; description: string }

export const aiEmployeePageEn: AiEmployeePageTranslations = {
  hero: {
    badge: '48-Hour AI Booking Loop',
    titleLine1:
      'The 48-Hour AI Booking Loop: Capture, Qualify, and Schedule 24/7 for Premium Service Businesses—Automatically',
    titleHighlight: '',
    hook: 'For premium service businesses. We install and run the loop so every paid lead gets answered, qualified, and booked—without manual follow-up.',
    primaryCta: 'Take the 2-Minute Fit Check',
    footnote: '5 partner slots/month · <2s response · 48-hour live deployment',
  },
  valueBadges: {
    ariaLabel: 'Speed, deployment, and effort guarantees',
    responseTime: '<2s Response Time',
    setupSpeed: '48-Hour Live Deployment',
    zeroEffort: 'Zero Manual Entry',
  },
  dreamOutcome: {
    badge: 'The dream outcome',
    title: 'Same 100 leads. A different scoreboard.',
    subtitle:
      'The leaky bucket closes ~1 in 100. The loop closes 95—with referrals compounding the batch.',
    beforeLabel: 'The leaky bucket',
    beforeMetric: '~1 / 100',
    beforeHint: 'Closed after manual chaos, voicemail, and slow follow-up.',
    arrowLabel: 'With the loop',
    afterLabel: 'The loop',
    afterMetric: '95 / 100',
    referralLine: '+23 referrals from the same batch',
    afterHint: 'Captured, qualified, booked, and followed up—24/7.',
  },
  denominator: {
    badge: 'Value equation · denominator',
    title: 'Instant speed. Near-zero effort.',
    subtitle:
      'We shrink time delay and effort sacrifice—so the system runs while you run the business.',
    pillarSpeed: 'Instant response',
    pillarSpeedHint: 'Under 2 seconds on every inbound touch. No voicemail lottery.',
    pillarDeploy: '48-hour live deployment',
    pillarDeployHint: 'We implement, connect channels, and go live—not another tool to babysit.',
    pillarEffort: 'Frictionless control',
    pillarEffortHint: 'Mobile app + automations. You approve; the loop executes.',
  },
  mobileApp: {
    title: 'Run your pipeline on the go with the AI Employee mobile app.',
    bullet1: 'Get real-time notifications straight to your phone',
    bullet2: 'Chat with your clients and leads right from the app',
    tagline: 'Never miss another opportunity again.',
    imageAlt: 'AI Employee mobile app on a phone showing pipeline metrics and recent activity',
    appStoreHref: 'https://apps.apple.com/',
    playStoreHref: 'https://play.google.com/store',
    appStoreAriaLabel: 'Download on the App Store',
    playStoreAriaLabel: 'Get it on Google Play',
  },
  problem: {
    badge: 'The starving crowd',
    title: 'The leaky bucket is bleeding your ad spend.',
    titleHighlight: 'Wait 1 hour and your close chance drops 60%.',
    subtitle:
      'Research shows that responding to an ad lead within 5 minutes makes you 21x more likely to qualify them. Wait just one hour, and your chances of a sale drop by 60%.',
    stats: [
      {
        value: '40%',
        label: 'of inbound touches go unanswered',
        hint: 'Paid attention evaporates when nobody picks up the thread.',
      },
      {
        value: '78%',
        label: 'buy from whoever responds first',
        hint: 'Speed isn’t a nice-to-have, it’s the scoreboard.',
      },
      {
        value: '5 min',
        label: 'is the window that matters',
        hint: 'Wait too long and the “hot lead” is already talking to someone else.',
      },
    ],
  },
  capabilities: {
    badge: 'The operating layer',
    title: 'Six capabilities.',
    titleHighlight: 'One growth system.',
    subtitle:
      'Tailored for service businesses seeking growth without chaos, systematizing the departments that touch revenue: capture, qualify, book, follow up, and retain.',
    items: [
      {
        title: 'Instant response',
        body: 'Every lead gets a fast, on-brand reply, so you stop donating wins to silence.',
      },
      {
        title: 'Smart qualification',
        body: 'The right questions so only serious buyers reach your calendar, fewer tire-kickers, more conversations that close.',
      },
      {
        title: 'Auto booking',
        body: 'They pick a time. Your calendar fills. No “who owns this thread?” handoffs.',
      },
      {
        title: 'Follow-up that runs',
        body: 'Persistent, polite, consistent, until they book or opt out. No more “I forgot.”',
      },
      {
        title: 'Multi-channel, one brain',
        body: 'Calls, WhatsApp, email, one inbox, one truth, one next step.',
      },
      {
        title: 'Revenue recovery',
        body: 'Wake cold interest, tighten no-shows, and nudge toward repeat revenue, not one-off wins.',
      },
    ],
  },
  timeToValue: {
    badge: 'Time to value',
    title: 'Live in 48 hours',
    subtitle:
      'We’re not here to hand you another tool to babysit. We implement the workflow, connect the channels, and run the system with you, so you stop relying on staff memory.',
    statBig: '48h',
    statSmall: 'From decision to operational',
    cta: 'Book Your Growth System Audit',
  },
  qualification: {
    badge: 'Fit matters',
    title: 'Built for',
    titleHighlight: 'high-end service businesses',
    forHeading: 'Who this is for',
    forItems: [
      'You sell a premium service and care about retention, not just leads',
      'You run paid acquisition (or plan to) and need intake to keep pace',
      'You sell through appointments, consults, or high-trust conversations',
      'Growth feels chaotic: tools, people, and follow-up don’t line up',
      'You want scaling that feels calm, not louder, busier, riskier',
      'You’re willing to partner on a system, not buy shelf-ware',
    ],
    notHeading: 'Not the right fit',
    notItems: [
      'You want ad creative strategy without fixing operations',
      'You’re optimizing for the lowest price, not outcomes and retention',
      'There’s no sales conversation or appointment in your buyer journey',
      'Response time isn’t a bottleneck for revenue',
      'You only want a login, not implementation and partnership',
      'You’re not ready to change how work flows between team and client',
    ],
  },
  caseStudy: {
    label: 'Proof',
    title: 'From missed intake to a system that doesn’t sleep, fast.',
    company: 'Regional Medical Center',
    industry: 'Healthcare',
    contextLabel: 'Context',
    challengeLabel: 'Challenge',
    solutionLabel: 'Solution',
    context: '$15k/month in ads, but intake couldn’t keep up with volume or speed.',
    challenge: 'Roughly 40% of leads weren’t getting a timely response. Pipeline cooled. Revenue leaked.',
    solution:
      'A done-with-you intelligent system live in 18 hours, answering, qualifying, booking, and following up with a single operating view.',
    outcomesHeading: 'Outcomes',
    results: [
      { metric: '100%', description: 'Every lead answered, fast, with a consistent next step.' },
      { metric: 'Zero', description: 'No more “we’ll call them back” gaps in the first mile.' },
      { metric: '18h', description: 'From decision to live, so results start immediately.' },
      { metric: '85%', description: 'Stronger conversion when response time matches buyer urgency.' },
    ],
  },
  bonusStack: {
    badge: 'Included free',
    title: 'The Growth Accelerator Bundle (Included for free)',
    subtitle:
      'Solves the next problems you would hit after install—no-show recovery, reputation, and CRM sync—at no extra cost.',
    includedLabel: 'Included',
    totalValue: '$2,997 in bonuses',
    items: [
      {
        name: "The 'No-Show' Recovery System",
        description: 'Automated SMS and email reminder sequences when calls go unanswered or appointments slip.',
        value: '$1,500 Value',
      },
      {
        name: 'The 5-Star Reputation Engine',
        description: 'Automated Google and Facebook review collection after successful appointments.',
        value: '$997 Value',
      },
      {
        name: 'The CRM Integration Vault',
        description: '5,000+ app connectors for zero-manual-entry data sync across your stack.',
        value: '$500 Value',
      },
    ],
  },
  guarantee: {
    badge: 'Conditional service guarantee',
    title: 'We take the risk—not you.',
    body: 'If you do not book at least 15 qualified appointments in your first 30 days of ads, we will work for free until you do. No questions asked.',
  },
  scarcity: {
    prefix:
      'We only accept 5 new premium partners per month to maintain 18-hour deployment speeds.',
    currentlyLabel: 'Currently:',
    spotsSuffix: 'spots remaining for',
  },
  pricing: {
    title: 'Premium partnership investment',
    subtitle:
      'Protect the revenue you already paid to create. One strong client often covers the full first-month investment.',
    valueAnchor: {
      heading: 'Total value before your investment',
      lineItems: [
        { label: 'AI Booking Loop System (done-with-you)', value: '$2,353' },
        { label: "The 'No-Show' Recovery System", value: '$1,500' },
        { label: 'The 5-Star Reputation Engine', value: '$997' },
        { label: 'The CRM Integration Vault', value: '$500' },
      ],
      totalLabel: 'Total value',
      totalValue: '$5,350+',
      investmentLabel: 'Your investment',
      investmentDetail: '$2,000 setup + $500/mo',
      investmentNote: 'First month ≈ $2,500 · protects paid demand you already fund',
    },
    planName: 'AI Booking Loop · Done-with-you',
    limitedLabel: 'Limited partnership slots (one per market when we commit)',
    setupFee: '$2,000',
    setupFeeWaivedDisplay: '$0',
    setupLabel: 'one-time setup',
    setupFeePromo: 'During May, this setup fee is removed.',
    setupPromoCountdownLead: 'Offer ends in',
    monthlyLabel: 'Monthly',
    price: '$500',
    period: '/month',
    note: 'If you invest in demand, the math is simple: protect the revenue you already pay to create.',
    cta: 'Book Your Growth System Audit',
  },
  finalCta: {
    badge: 'The decision',
    title: 'Every day without the loop',
    titleHighlight: 'donates leads to silence.',
    subtitle:
      'Book your Growth System Audit. We map the leak, show the 48-hour install plan, and confirm fit before you commit.',
    primaryCta: 'Claim Your Partner Spot',
    bullet1: 'One audit, one clear yes/no on fit',
    bullet2: 'About 30 minutes, no pitch deck marathon',
    bullet3: 'We only take partners we can get to 15+ qualified bookings',
  },
}

export const aiEmployeePageFr: AiEmployeePageTranslations = {
  hero: {
    badge: 'Boucle de réservation IA · 48 h',
    titleLine1:
      'La boucle de réservation IA en 48 h : capter, qualifier et planifier 24/7 pour les entreprises de services premium—automatiquement',
    titleHighlight: '',
    hook: 'Pour les entreprises de services premium. Nous installons et exploitons la boucle pour que chaque lead payant soit traité, qualifié et réservé—sans relances manuelles.',
    primaryCta: 'Faire le test de compatibilité (2 min)',
    footnote: '5 partenaires/mois · réponse <2 s · déploiement en 48 h',
  },
  valueBadges: {
    ariaLabel: 'Garanties de vitesse et de déploiement',
    responseTime: 'Réponse <2 s',
    setupSpeed: 'Déploiement en 48 h',
    zeroEffort: 'Zéro saisie manuelle',
  },
  dreamOutcome: {
    badge: 'Le résultat rêvé',
    title: 'Les mêmes 100 leads. Un autre tableau.',
    subtitle: 'La fuite conclut ~1 sur 100. La boucle en conclut 95—avec des parrainages qui composent.',
    beforeLabel: 'La fuite',
    beforeMetric: '~1 / 100',
    beforeHint: 'Conclusion après chaos manuel, messagerie vocale et lenteur.',
    arrowLabel: 'Avec la boucle',
    afterLabel: 'La boucle',
    afterMetric: '95 / 100',
    referralLine: '+23 parrainages sur le même lot',
    afterHint: 'Capté, qualifié, réservé et relancé—24/7.',
  },
  denominator: {
    badge: 'Équation de valeur · dénominateur',
    title: 'Vitesse instantanée. Effort quasi nul.',
    subtitle: 'Nous réduisons le délai et l’effort—le système tourne pendant que vous gérez l’entreprise.',
    pillarSpeed: 'Réponse instantanée',
    pillarSpeedHint: 'Moins de 2 secondes sur chaque entrée. Fini la loterie de la messagerie vocale.',
    pillarDeploy: 'Déploiement en 48 h',
    pillarDeployHint: 'Nous implémentons et mettons en ligne—pas un outil de plus à surveiller.',
    pillarEffort: 'Pilotage sans friction',
    pillarEffortHint: 'App mobile + automatisations. Vous validez ; la boucle exécute.',
  },
  mobileApp: {
    title: 'Pilotez votre pipeline en déplacement avec l’app mobile AI Employee.',
    bullet1: 'Recevez des notifications en temps réel sur votre téléphone',
    bullet2: 'Échangez avec vos clients et leads directement depuis l’app',
    tagline: 'Ne laissez plus passer une opportunité.',
    imageAlt: 'Application mobile AI Employee sur téléphone avec indicateurs et activité récente',
    appStoreHref: 'https://apps.apple.com/',
    playStoreHref: 'https://play.google.com/store',
    appStoreAriaLabel: 'Télécharger sur l’App Store',
    playStoreAriaLabel: 'Disponible sur Google Play',
  },
  problem: {
    badge: 'La foule affamée',
    title: 'La fuite fait saigner votre budget pub.',
    titleHighlight: 'Attendez 1 h et vos chances de vente chutent de 60 %.',
    subtitle:
      'Répondre en 5 minutes multiplie par 21 vos chances de qualifier. Attendez une heure, et vos chances de conclure chutent de 60 %.',
    stats: [
      {
        value: '40%',
        label: 'des entrées ne reçoivent pas de réponse',
        hint: 'L’attention payée s’évapore si personne ne prend le fil.',
      },
      {
        value: '78%',
        label: 'achètent chez celui qui répond en premier',
        hint: 'La vitesse n’est pas un bonus, c’est le classement.',
      },
      {
        value: '5 min',
        label: 'c’est la fenêtre qui compte',
        hint: 'Trop tard et le lead brûlant parle déjà à un concurrent.',
      },
    ],
  },
  capabilities: {
    badge: 'La couche opérationnelle',
    title: 'Six capacités.',
    titleHighlight: 'Un système de croissance.',
    subtitle:
      'Pensé pour les services haut de gamme qui veulent croître sans chaos, en systématisant tout ce qui touche au revenu : capter, qualifier, réserver, relancer, fidéliser.',
    items: [
      {
        title: 'Réponse instantanée',
        body: 'Chaque lead reçoit une réponse rapide et à votre ton, vous arrêtez d’offrir la victoire au silence.',
      },
      {
        title: 'Qualification intelligente',
        body: 'Les bonnes questions pour que seuls les acheteurs sérieux arrivent sur votre agenda.',
      },
      {
        title: 'Prise de rendez-vous auto',
        body: 'Ils choisissent un créneau. Votre agenda se remplit. Fini les transferts flous.',
      },
      {
        title: 'Relances qui tournent',
        body: 'Persistantes, polies, cohérentes, jusqu’à réservation ou refus. Plus de « j’ai oublié ».',
      },
      {
        title: 'Multi-canal, un cerveau',
        body: 'Appels, WhatsApp, mail, une boîte, une vérité, une prochaine étape.',
      },
      {
        title: 'Récupération de revenu',
        body: 'Réchauffer l’intérêt froid, réduire les lapins, pousser vers la récurrence, pas le one-shot.',
      },
    ],
  },
  timeToValue: {
    badge: 'Délai jusqu’à la valeur',
    title: 'En ligne en 48 h',
    subtitle:
      'Nous ne vous donnons pas un outil de plus à surveiller. Nous implémentons le flux, connectons les canaux et faisons tourner le système avec vous, pour ne plus dépendre de la mémoire de l’équipe.',
    statBig: '48 h',
    statSmall: 'De la décision à l’opérationnel',
    cta: 'Réserver votre audit Growth System',
  },
  qualification: {
    badge: 'Le fit compte',
    title: 'Conçu pour les',
    titleHighlight: 'entreprises de services premium',
    forHeading: 'Pour qui c’est fait',
    forItems: [
      'Vous vendez un service premium et la rétention compte autant que les leads',
      'Vous faites de l’acquisition payante (ou prévoyez) et l’intake doit suivre',
      'Vous vendez par rendez-vous, consults ou conversations à forte confiance',
      'La croissance est chaotique : outils, gens et relances ne s’alignent pas',
      'Vous voulez grandir calmement, pas plus fort, plus chargé, plus risqué',
      'Vous acceptez un partenariat sur un système, pas un logiciel en rayon',
    ],
    notHeading: 'Moins adapté si',
    notItems: [
      'Vous voulez de la créa pub sans refondre les opérations',
      'Vous cherchez le prix le plus bas, pas les résultats et la rétention',
      'Aucune conversation de vente ou de rendez-vous dans votre parcours',
      'Le délai de réponse n’est pas un frein au revenu',
      'Vous voulez seulement un login, pas l’implémentation et le partenariat',
      'Vous n’êtes pas prêt à changer le flux travail / client',
    ],
  },
  caseStudy: {
    label: 'Preuve',
    title: 'D’une prise en charge ratée à un système qui ne dort pas, vite.',
    company: 'Centre médical régional',
    industry: 'Santé',
    contextLabel: 'Contexte',
    challengeLabel: 'Défi',
    solutionLabel: 'Solution',
    context: '15 k$/mois de pub, mais l’intake ne suivait ni le volume ni la vitesse.',
    challenge: 'Environ 40 % des leads sans réponse rapide. Pipeline tiède. Revenu qui fuit.',
    solution:
      'Système intelligent clé en main en 18 h, réponse, qualification, booking et relances avec une vue unique.',
    outcomesHeading: 'Résultats',
    results: [
      { metric: '100 %', description: 'Chaque lead traité vite, avec une prochaine étape claire.' },
      { metric: 'Zéro', description: 'Plus de trous du type « on les rappellera » au début du tunnel.' },
      { metric: '18 h', description: 'De la décision au live, les résultats commencent tout de suite.' },
      { metric: '85 %', description: 'Meilleure conversion quand le délai suit l’urgence de l’acheteur.' },
    ],
  },
  bonusStack: {
    badge: 'Inclus gratuitement',
    title: 'Pack Accélérateur de Croissance (inclus gratuitement)',
    subtitle:
      'Ce ne sont pas des options. Ils sont livrés avec chaque partenariat premium pour que votre boucle capte, convertisse et se renforce dès le jour 1.',
    includedLabel: 'Inclus',
    totalValue: '2 997 $ de bonus',
    items: [
      {
        name: 'Système anti « no-show »',
        description: 'Séquences SMS et email automatiques quand les appels ou RDV passent à la trappe.',
        value: 'Valeur 1 500 $',
      },
      {
        name: 'Moteur de réputation 5 étoiles',
        description: 'Collecte automatisée d’avis Google et Facebook après vente réussie.',
        value: 'Valeur 997 $',
      },
      {
        name: 'Coffre d’intégrations CRM',
        description: '5 000+ connecteurs pour une synchro sans saisie manuelle.',
        value: 'Valeur 500 $',
      },
    ],
  },
  guarantee: {
    badge: 'Garantie de service conditionnelle',
    title: 'Nous prenons le risque—not vous.',
    body: 'Si vous n’obtenez pas au moins 15 rendez-vous qualifiés dans les 30 premiers jours de publicité, nous travaillons gratuitement jusqu’à ce que ce soit le cas. Sans condition cachée.',
  },
  scarcity: {
    prefix:
      'Nous n’acceptons que 5 nouveaux partenaires premium par mois pour maintenir des déploiements en 18 heures.',
    currentlyLabel: 'Actuellement :',
    spotsSuffix: 'places restantes pour',
  },
  pricing: {
    title: 'Investissement partenariat premium',
    subtitle:
      'Protégez le revenu que vous payez déjà pour créer. Un bon client couvre souvent le premier mois.',
    valueAnchor: {
      heading: 'Valeur totale avant votre investissement',
      lineItems: [
        { label: 'Système boucle de réservation IA (clé en main)', value: '2 353 $' },
        { label: 'Système anti « no-show »', value: '1 500 $' },
        { label: 'Moteur de réputation 5 étoiles', value: '997 $' },
        { label: 'Coffre d’intégrations CRM', value: '500 $' },
      ],
      totalLabel: 'Valeur totale',
      totalValue: '5 350 $+',
      investmentLabel: 'Votre investissement',
      investmentDetail: '2 000 $ mise en place + 500 $/mois',
      investmentNote: 'Premier mois ≈ 2 500 $ · protège la demande payante que vous financez',
    },
    planName: 'Boucle de réservation IA · clé en main',
    limitedLabel: 'Places limitées (un partenariat par marché quand on s’engage)',
    setupFee: '2 000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'mise en place unique',
    setupFeePromo: 'En mai, les frais de mise en place sont offerts.',
    setupPromoCountdownLead: "Fin de l'offre dans",
    monthlyLabel: 'Mensuel',
    price: '500 $',
    period: '/mois',
    note: 'Si vous investissez dans la demande, le calcul est simple : protégez le revenu que vous payez déjà pour créer.',
    cta: 'Réserver votre audit Growth System',
  },
  finalCta: {
    badge: 'La décision',
    title: 'Chaque jour sans la boucle',
    titleHighlight: 'offre des leads au silence.',
    subtitle:
      'Réservez votre audit Growth System. Nous cartographions la fuite, le plan d’installation 48 h, et validons le fit avant engagement.',
    primaryCta: 'Réserver votre place partenaire',
    bullet1: 'Un audit, un oui/non clair sur le fit',
    bullet2: 'Environ 30 minutes, sans marathon de slides',
    bullet3: 'Nous ne prenons que des partenaires capables d’atteindre 15+ RDV qualifiés',
  },
}

export const aiEmployeePageDe: AiEmployeePageTranslations = {
  hero: {
    badge: 'KI-Buchungs-Loop · 48 Std.',
    titleLine1:
      'Der 48-Stunden-KI-Buchungs-Loop: Erfassen, qualifizieren und planen 24/7 für Premium-Dienstleister—automatisch',
    titleHighlight: '',
    hook: 'Für Premium-Dienstleister. Wir installieren und betreiben den Loop, damit jeder bezahlte Lead beantwortet, qualifiziert und gebucht wird—ohne manuelles Nachfassen.',
    primaryCta: '2-Minuten-Passungstest starten',
    footnote: '5 Partner/Monat · <2s Antwort · Live in 48 Stunden',
  },
  valueBadges: {
    ariaLabel: 'Geschwindigkeits- und Setup-Garantien',
    responseTime: '<2s Antwortzeit',
    setupSpeed: 'Live in 48 Stunden',
    zeroEffort: 'Keine manuelle Eingabe',
  },
  dreamOutcome: {
    badge: 'Das Traumergebnis',
    title: 'Dieselben 100 Leads. Andere Anzeigetafel.',
    subtitle: 'Das Leck schließt ~1 von 100. Der Loop schließt 95—mit Empfehlungen obendrauf.',
    beforeLabel: 'Das Leck',
    beforeMetric: '~1 / 100',
    beforeHint: 'Abschluss nach manuellem Chaos, Mailbox und langsamen Nachfassen.',
    arrowLabel: 'Mit dem Loop',
    afterLabel: 'Der Loop',
    afterMetric: '95 / 100',
    referralLine: '+23 Empfehlungen aus derselben Charge',
    afterHint: 'Erfasst, qualifiziert, gebucht und nachverfolgt—24/7.',
  },
  denominator: {
    badge: 'Wertgleichung · Nenner',
    title: 'Sofortige Geschwindigkeit. Fast null Aufwand.',
    subtitle: 'Wir verkürzen Verzögerung und Aufwand—das System läuft, während Sie das Geschäft führen.',
    pillarSpeed: 'Sofortige Antwort',
    pillarSpeedHint: 'Unter 2 Sekunden auf jeden Eingang. Kein Mailbox-Glücksspiel.',
    pillarDeploy: 'Live in 48 Stunden',
    pillarDeployHint: 'Wir implementieren und schalten live—kein weiteres Tool zum Hüten.',
    pillarEffort: 'Reibungslose Steuerung',
    pillarEffortHint: 'Mobile App + Automationen. Sie freigeben; der Loop arbeitet.',
  },
  mobileApp: {
    title: 'Steuern Sie Ihren Pipeline unterwegs mit der AI-Employee-App.',
    bullet1: 'Echtzeit-Benachrichtigungen direkt auf Ihr Smartphone',
    bullet2: 'Chatten Sie mit Kunden und Leads direkt in der App',
    tagline: 'Verpassen Sie keine Chance mehr.',
    imageAlt: 'AI-Employee-App auf dem Smartphone mit Pipeline-Kennzahlen und Aktivität',
    appStoreHref: 'https://apps.apple.com/',
    playStoreHref: 'https://play.google.com/store',
    appStoreAriaLabel: 'Im App Store laden',
    playStoreAriaLabel: 'Bei Google Play laden',
  },
  problem: {
    badge: 'Das Muster, das wir immer wieder sehen',
    title: 'Wachstum scheitert nicht am Werbekonto.',
    titleHighlight: 'Es scheitert nach dem Klick.',
    subtitle:
      'Wenn Pipelines in Postfächern, Zetteln und Kopfwissen leben, gibt es Lecks, auch mit gutem Positioning. Der Feind sind nicht „schlechte Leads“. Es ist ein System, das noch von 24/7-Verfügbarkeit abhängt.',
    stats: [
      {
        value: '40%',
        label: 'der Eingänge unbeantwortet',
        hint: 'Bezahlte Aufmerksamkeit verpufft, wenn niemand den Faden aufnimmt.',
      },
      {
        value: '78%',
        label: 'kaufen beim Schnellsten',
        hint: 'Geschwindigkeit ist kein Nice-to-have, sie ist die Punktzahl.',
      },
      {
        value: '5 Min',
        label: 'ist das relevante Fenster',
        hint: 'Zu spät und der heiße Lead spricht schon woanders.',
      },
    ],
  },
  capabilities: {
    badge: 'Die Betriebsschicht',
    title: 'Sechs Fähigkeiten.',
    titleHighlight: 'Ein Wachstumssystem.',
    subtitle:
      'Für anspruchsvolle Dienstleister, die wachsen wollen ohne Chaos, systematisiert über alle Bereiche, die Umsatz berühren: Erfassen, qualifizieren, buchen, nachfassen, binden.',
    items: [
      {
        title: 'Sofortige Antwort',
        body: 'Jeder Lead bekommt schnell eine markengerechte Antwort, Sie verschenken keine Siege an Stille.',
      },
      {
        title: 'Smarte Qualifikation',
        body: 'Die richtigen Fragen, nur ernsthafte Käufer landen in Ihrem Kalender.',
      },
      {
        title: 'Auto-Booking',
        body: 'Sie wählen einen Slot. Der Kalender füllt sich. Keine unklaren Übergaben.',
      },
      {
        title: 'Nachfassen, das läuft',
        body: 'Beharrlich, höflich, konsistent, bis Buchung oder Opt-out. Schluss mit „hätte ich mal“.',
      },
      {
        title: 'Multi-Kanal, ein Gehirn',
        body: 'Anrufe, WhatsApp, E-Mail, ein Posteingang, eine Wahrheit, ein nächster Schritt.',
      },
      {
        title: 'Umsatz-Rückgewinnung',
        body: 'Kalte Interessen reaktivieren, No-Shows straffen, Wiederholungsumsatz statt Einmalverkauf.',
      },
    ],
  },
  timeToValue: {
    badge: 'Zeit bis zum Nutzen',
    title: 'Live in 48 Stunden',
    subtitle:
      'Wir geben Ihnen kein weiteres Tool zum Hüten. Wir implementieren den Flow, verbinden Kanäle und betreiben das System mit Ihnen, damit Sie nicht von Gedächtnis im Team abhängen.',
    statBig: '48h',
    statSmall: 'Von Entscheidung bis Betrieb',
    cta: 'Growth-System-Audit buchen',
  },
  qualification: {
    badge: 'Fit ist wichtig',
    title: 'Gebaut für',
    titleHighlight: 'Premium-Dienstleister',
    forHeading: 'Für wen das gedacht ist',
    forItems: [
      'Sie verkaufen ein Premium-Angebot und denken an Bindung, nicht nur Leads',
      'Sie fahren bezahlte Akquise (oder planen) und die Annahme muss mithalten',
      'Sie verkaufen über Termine, Beratungen oder vertrauensintensive Gespräche',
      'Wachstum fühlt sich chaotisch an: Tools, Menschen, Nachfassen passen nicht zusammen',
      'Sie wollen ruhig skalieren, nicht lauter, busier, riskanter',
      'Sie wollen ein System-Partnerschaft, kein Regal-Softwarekauf',
    ],
    notHeading: 'Weniger passend',
    notItems: [
      'Sie wollen Ad-Kreativ ohne Operations zu fixen',
      'Sie optimieren auf den niedrigsten Preis, nicht auf Ergebnis und Retention',
      'Kein Vertriebsgespräch oder Termin in Ihrer Buyer Journey',
      'Reaktionszeit ist kein Umsatz-Engpass',
      'Sie wollen nur Login, nicht Implementierung und Partnerschaft',
      'Sie sind nicht bereit, Arbeitsfluss zwischen Team und Kunde zu ändern',
    ],
  },
  caseStudy: {
    label: 'Beweis',
    title: 'Von verpasster Annahme zu einem System, das nicht schläft, schnell.',
    company: 'Regionales medizinisches Zentrum',
    industry: 'Gesundheit',
    contextLabel: 'Kontext',
    challengeLabel: 'Herausforderung',
    solutionLabel: 'Lösung',
    context: '15k$/Monat Werbung, aber die Annahme kam weder mit Volumen noch Tempo nach.',
    challenge: 'Etwa 40 % der Leads ohne zeitnahe Antwort. Pipeline kühlte. Umsatz floss ab.',
    solution:
      'Intelligentes System in 18 Stunden live, antworten, qualifizieren, buchen, nachfassen mit einer Betriebsansicht.',
    outcomesHeading: 'Ergebnisse',
    results: [
      { metric: '100%', description: 'Jeder Lead schnell bedient, mit klarem nächsten Schritt.' },
      { metric: 'Null', description: 'Keine „rufen wir zurück“-Lücken mehr am Anfang.' },
      { metric: '18h', description: 'Von Entscheidung zu live, Ergebnisse starten sofort.' },
      { metric: '85%', description: 'Bessere Conversion, wenn das Tempo zur Dringlichkeit passt.' },
    ],
  },
  bonusStack: {
    badge: 'Kostenlos inklusive',
    title: 'Growth Accelerator Bundle (kostenlos inklusive)',
    subtitle:
      'Keine Add-ons. Sie sind bei jeder Premium-Partnerschaft dabei, damit Ihr Loop ab Tag 1 erfasst, konvertiert und skaliert.',
    includedLabel: 'Inklusive',
    totalValue: '2.997 $ Bonus',
    items: [
      {
        name: 'No-Show-Wiederherstellung',
        description: 'Automatische SMS- und E-Mail-Sequenzen bei verpassten Anrufen oder Terminen.',
        value: 'Wert 1.500 $',
      },
      {
        name: '5-Sterne-Reputation Engine',
        description: 'Automatische Google- und Facebook-Bewertungen nach erfolgreichem Abschluss.',
        value: 'Wert 997 $',
      },
      {
        name: 'CRM-Integrations-Vault',
        description: '5.000+ App-Connectors ohne manuelle Dateneingabe.',
        value: 'Wert 500 $',
      },
    ],
  },
  guarantee: {
    badge: 'Bedingte Service-Garantie',
    title: 'Wir tragen das Risiko—nicht Sie.',
    body: 'Wenn Sie in den ersten 30 Tagen Werbung nicht mindestens 15 qualifizierte Termine buchen, arbeiten wir kostenlos weiter, bis Sie es tun. Ohne Wenn und Aber.',
  },
  scarcity: {
    prefix:
      'Wir nehmen nur 5 neue Premium-Partner pro Monat an, um 18-Stunden-Deployments aufrechtzuerhalten.',
    currentlyLabel: 'Aktuell:',
    spotsSuffix: 'Plätze frei für',
  },
  pricing: {
    title: 'Premium-Partnerschaftsinvestition',
    subtitle: 'Schützen Sie den Umsatz, den Sie schon bezahlen, um Nachfrage zu erzeugen.',
    valueAnchor: {
      heading: 'Gesamtwert vor Ihrer Investition',
      lineItems: [
        { label: 'KI-Buchungs-Loop-System (Done-with-you)', value: '$2,353' },
        { label: 'No-Show-Wiederherstellung', value: '$1,500' },
        { label: '5-Sterne-Reputation Engine', value: '$997' },
        { label: 'CRM-Integrations-Vault', value: '$500' },
      ],
      totalLabel: 'Gesamtwert',
      totalValue: '$5,350+',
      investmentLabel: 'Ihre Investition',
      investmentDetail: '$2,000 Setup + $500/Monat',
      investmentNote: 'Erster Monat ≈ $2,500 · schützt bezahlte Nachfrage',
    },
    planName: 'KI-Buchungs-Loop · Done-with-you',
    limitedLabel: 'Begrenzte Partnerschaft (einer pro Markt bei Commitment)',
    setupFee: '2.000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'einmalige Einrichtung',
    setupFeePromo: 'Im Mai entfällt die einmalige Einrichtungsgebühr.',
    setupPromoCountdownLead: 'Angebot endet in',
    monthlyLabel: 'Monatlich',
    price: '500 $',
    period: '/Monat',
    note: 'Wenn Sie in Nachfrage investieren, ist die Rechnung einfach: schützen Sie den Umsatz, den Sie schon bezahlen, um zu erzeugen.',
    cta: 'Growth-System-Audit buchen',
  },
  finalCta: {
    badge: 'Die Entscheidung',
    title: 'Jeder Tag ohne Loop',
    titleHighlight: 'verschenkt Leads an Stille.',
    subtitle:
      'Buchen Sie Ihr Growth-System-Audit. Wir kartieren das Leck, den 48h-Plan, und prüfen den Fit vor dem Commit.',
    primaryCta: 'Partnerplatz sichern',
    bullet1: 'Ein Audit, ein klares Ja/Nein zum Fit',
    bullet2: 'Ca. 30 Minuten, kein Pitch-Marathon',
    bullet3: 'Nur Partner, bei denen 15+ qualifizierte Termine realistisch sind',
  },
}

export const aiEmployeePageEs: AiEmployeePageTranslations = {
  hero: {
    badge: 'Loop de reservas IA · 48h',
    titleLine1:
      'El loop de reservas IA en 48 horas: capturar, calificar y agendar 24/7 para negocios de servicios premium—automáticamente',
    titleHighlight: '',
    hook: 'Para negocios de servicios premium. Instalamos y operamos el loop para que cada lead pagado sea atendido, calificado y agendado—sin seguimiento manual.',
    primaryCta: 'Hacer el test de compatibilidad (2 min)',
    footnote: '5 socios/mes · respuesta <2s · despliegue en 48 horas',
  },
  valueBadges: {
    ariaLabel: 'Garantías de velocidad y configuración',
    responseTime: 'Respuesta <2s',
    setupSpeed: 'Despliegue en 48 horas',
    zeroEffort: 'Cero entrada manual',
  },
  dreamOutcome: {
    badge: 'El resultado soñado',
    title: 'Los mismos 100 leads. Otro marcador.',
    subtitle: 'La fuga cierra ~1 de 100. El loop cierra 95—con referidos que componen.',
    beforeLabel: 'La fuga',
    beforeMetric: '~1 / 100',
    beforeHint: 'Cierre tras caos manual, buzón y seguimiento lento.',
    arrowLabel: 'Con el loop',
    afterLabel: 'El loop',
    afterMetric: '95 / 100',
    referralLine: '+23 referidos del mismo lote',
    afterHint: 'Capturado, calificado, agendado y seguido—24/7.',
  },
  denominator: {
    badge: 'Ecuación de valor · denominador',
    title: 'Velocidad instantánea. Esfuerzo casi cero.',
    subtitle: 'Reducimos retraso y esfuerzo—el sistema corre mientras usted dirige el negocio.',
    pillarSpeed: 'Respuesta instantánea',
    pillarSpeedHint: 'Menos de 2 segundos en cada entrada. Sin lotería del buzón.',
    pillarDeploy: 'Despliegue en 48 horas',
    pillarDeployHint: 'Implementamos y activamos—no otra herramienta que vigilar.',
    pillarEffort: 'Control sin fricción',
    pillarEffortHint: 'App móvil + automatizaciones. Usted aprueba; el loop ejecuta.',
  },
  mobileApp: {
    title: 'Gestione su embudo en movimiento con la app móvil AI Employee.',
    bullet1: 'Notificaciones en tiempo real directamente en su teléfono',
    bullet2: 'Chatee con clientes y leads desde la app',
    tagline: 'No vuelva a perder una oportunidad.',
    imageAlt: 'App móvil AI Employee en el teléfono con métricas del embudo y actividad reciente',
    appStoreHref: 'https://apps.apple.com/',
    playStoreHref: 'https://play.google.com/store',
    appStoreAriaLabel: 'Descargar en App Store',
    playStoreAriaLabel: 'Disponible en Google Play',
  },
  problem: {
    badge: 'El patrón que vemos una y otra vez',
    title: 'El crecimiento no falla en los anuncios.',
    titleHighlight: 'Falla después del clic.',
    subtitle:
      'Cuando el embudo vive en bandejas, notas y conocimiento tribal, hay fugas, incluso con buen posicionamiento. El enemigo no son “malos leads”. Es un sistema que aún depende de que haya gente disponible 24/7.',
    stats: [
      {
        value: '40%',
        label: 'de entradas sin respuesta',
        hint: 'La atención pagada se evapora si nadie recoge el hilo.',
      },
      {
        value: '78%',
        label: 'compra quien responde primero',
        hint: 'La velocidad no es un extra, es la tabla de posiciones.',
      },
      {
        value: '5 min',
        label: 'es la ventana que importa',
        hint: 'Tarde y el lead caliente ya habla con otro.',
      },
    ],
  },
  capabilities: {
    badge: 'La capa operativa',
    title: 'Seis capacidades.',
    titleHighlight: 'Un sistema de crecimiento.',
    subtitle:
      'Para negocios de servicios que buscan crecer sin caos, sistematizando todo lo que toca ingresos: captar, calificar, agendar, seguir y retener.',
    items: [
      {
        title: 'Respuesta instantánea',
        body: 'Cada lead recibe respuesta rápida y con su tono, deja de regalar victorias al silencio.',
      },
      {
        title: 'Calificación inteligente',
        body: 'Las preguntas correctas para que solo compradores serios lleguen a su agenda.',
      },
      {
        title: 'Reserva automática',
        body: 'Eligen horario. Su calendario se llena. Sin “¿quién lleva esto?”.',
      },
      {
        title: 'Seguimiento que corre',
        body: 'Persistente, educado, consistente, hasta cita o baja. Se acabó el “se me olvidó”.',
      },
      {
        title: 'Multicanal, un cerebro',
        body: 'Llamadas, WhatsApp, correo, una bandeja, una verdad, un siguiente paso.',
      },
      {
        title: 'Recuperación de ingresos',
        body: 'Reactivar interés frío, reducir incomparecencias, empujar ingresos recurrentes, no ventas sueltas.',
      },
    ],
  },
  timeToValue: {
    badge: 'Tiempo hasta el valor',
    title: 'En vivo en 48 horas',
    subtitle:
      'No le damos otra herramienta que vigilar. Implementamos el flujo, conectamos canales y operamos el sistema con usted, para no depender de la memoria del equipo.',
    statBig: '48h',
    statSmall: 'De la decisión a operativo',
    cta: 'Reservar su auditoría Growth System',
  },
  qualification: {
    badge: 'El encaje importa',
    title: 'Diseñado para',
    titleHighlight: 'negocios de servicios premium',
    forHeading: 'Para quién es',
    forItems: [
      'Vende un servicio premium y la retención importa tanto como los leads',
      'Hace adquisición de pago (o planea) y la captación debe seguir el ritmo',
      'Vende con citas, consultas o conversaciones de alta confianza',
      'El crecimiento se siente caótico: herramientas, gente y seguimiento no alinean',
      'Quiere escalar con calma, no más ruido, más carga, más riesgo',
      'Está dispuesto a asociarse en un sistema, no a comprar software de estantería',
    ],
    notHeading: 'Menos encaje si',
    notItems: [
      'Quiere creatividad de anuncios sin arreglar operaciones',
      'Optimiza por el menor precio, no por resultados y retención',
      'No hay conversación de venta o cita en su recorrido',
      'El tiempo de respuesta no es un cuello de ingresos',
      'Solo quiere un login, no implementación ni alianza',
      'No está listo a cambiar cómo fluye el trabajo con el cliente',
    ],
  },
  caseStudy: {
    label: 'Prueba',
    title: 'De captación fallida a un sistema que no duerme, rápido.',
    company: 'Centro médico regional',
    industry: 'Salud',
    contextLabel: 'Contexto',
    challengeLabel: 'Reto',
    solutionLabel: 'Solución',
    context: '15k$/mes en anuncios, pero la captación no seguía volumen ni velocidad.',
    challenge: 'Cerca del 40 % de leads sin respuesta a tiempo. Embudo tibio. Ingreso fugado.',
    solution:
      'Sistema inteligente en 18 h en vivo, responde, califica, agenda y hace seguimiento con una sola vista.',
    outcomesHeading: 'Resultados',
    results: [
      { metric: '100%', description: 'Cada lead atendido rápido, con siguiente paso claro.' },
      { metric: 'Cero', description: 'Sin huecos de “los llamamos luego” al inicio.' },
      { metric: '18h', description: 'De decisión a en vivo, el impacto empieza ya.' },
      { metric: '85%', description: 'Mejor conversión cuando el tiempo sigue la urgencia del comprador.' },
    ],
  },
  bonusStack: {
    badge: 'Incluido gratis',
    title: 'Pack Acelerador de Crecimiento (incluido gratis)',
    subtitle:
      'No son complementos. Van con cada alianza premium para que su loop capture, convierta y componga desde el día 1.',
    includedLabel: 'Incluido',
    totalValue: '2.997 $ en bonos',
    items: [
      {
        name: "Sistema de recuperación 'No-Show'",
        description: 'Secuencias automáticas de SMS y email cuando no contestan o faltan a citas.',
        value: 'Valor 1.500 $',
      },
      {
        name: 'Motor de reputación 5 estrellas',
        description: 'Recolección automática de reseñas en Google y Facebook tras la venta.',
        value: 'Valor 997 $',
      },
      {
        name: 'Bóveda de integración CRM',
        description: '5.000+ conectores sin entrada manual de datos.',
        value: 'Valor 500 $',
      },
    ],
  },
  guarantee: {
    badge: 'Garantía de servicio condicional',
    title: 'Nosotros asumimos el riesgo—no usted.',
    body: 'Si no agenda al menos 15 citas calificadas en sus primeros 30 días de anuncios, trabajamos gratis hasta lograrlo. Sin letra pequeña.',
  },
  scarcity: {
    prefix:
      'Solo aceptamos 5 nuevos socios premium al mes para mantener despliegues en 18 horas.',
    currentlyLabel: 'Actualmente:',
    spotsSuffix: 'plazas restantes para',
  },
  pricing: {
    title: 'Inversión en alianza premium',
    subtitle: 'Proteja el ingreso que ya paga por crear. Un buen cliente suele cubrir el primer mes.',
    valueAnchor: {
      heading: 'Valor total antes de su inversión',
      lineItems: [
        { label: 'Sistema loop de reservas IA (hecho con usted)', value: '$2,353' },
        { label: "Sistema de recuperación 'No-Show'", value: '$1,500' },
        { label: 'Motor de reputación 5 estrellas', value: '$997' },
        { label: 'Bóveda de integración CRM', value: '$500' },
      ],
      totalLabel: 'Valor total',
      totalValue: '$5,350+',
      investmentLabel: 'Su inversión',
      investmentDetail: '$2,000 setup + $500/mes',
      investmentNote: 'Primer mes ≈ $2,500 · protege la demanda pagada',
    },
    planName: 'Loop de reservas IA · hecho con usted',
    limitedLabel: 'Cupos limitados (una alianza por mercado cuando nos comprometemos)',
    setupFee: '2.000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'configuración única',
    setupFeePromo: 'En mayo, se elimina el cargo único de configuración.',
    setupPromoCountdownLead: 'La oferta termina en',
    monthlyLabel: 'Mensual',
    price: '500 $',
    period: '/mes',
    note: 'Si invierte en demanda, la cuenta es simple: proteja el ingreso que ya paga por crear.',
    cta: 'Reservar su auditoría Growth System',
  },
  finalCta: {
    badge: 'La decisión',
    title: 'كل يوم بلا الحلقة',
    titleHighlight: 'يهدي العملاء للصمت.',
    subtitle:
      'احجز مراجعة Growth System. نرسم التسرّب وخطة 48 ساعة ونؤكد الملاءمة قبل الالتزام.',
    primaryCta: 'احجز مقعد الشريك',
    bullet1: 'مراجعة واحدة ونعم/لا واضح للملاءمة',
    bullet2: 'نحو 30 دقيقة، بلا عرض طويل',
    bullet3: 'نشارك فقط حيث 15+ موعداً مؤهلاً ممكن',
  },
}

export const aiEmployeePageAr: AiEmployeePageTranslations = {
  hero: {
    badge: 'حلقة الحجز بالذكاء · 48 ساعة',
    titleLine1:
      'حلقة الحجز بالذكاء الاصطناعي في 48 ساعة: التقاط وتأهيل وجدولة 24/7 لشركات الخدمات الراقية—تلقائياً',
    titleHighlight: '',
    hook: 'لشركات الخدمات الراقية. نثبت ونشغّل الحلقة حتى يُجاب كل عميل مدفوع ويُؤهل ويُحجز—من دون متابعة يدوية.',
    primaryCta: 'ابدأ اختبار الملاءمة (دقيقتان)',
    footnote: '5 شركاء/شهر · رد <2ث · نشر خلال 48 ساعة',
  },
  valueBadges: {
    ariaLabel: 'ضمانات السرعة والإعداد',
    responseTime: 'رد <2 ثانية',
    setupSpeed: 'نشر خلال 48 ساعة',
    zeroEffort: 'صفر إدخال يدوي',
  },
  dreamOutcome: {
    badge: 'النتيجة المرجوة',
    title: 'نفس الـ100 عميلاً. لوحة نتائج مختلفة.',
    subtitle: 'التسرب يغلق ~1 من 100. الحلقة تغلق 95—مع إحالات تتضاعف.',
    beforeLabel: 'التسرب',
    beforeMetric: '~1 / 100',
    beforeHint: 'إغلاق بعد فوضى يدوية وبريد صوتي وبطء.',
    arrowLabel: 'مع الحلقة',
    afterLabel: 'الحلقة',
    afterMetric: '95 / 100',
    referralLine: '+23 إحالة من نفس الدفعة',
    afterHint: 'مُلتقط ومؤهل ومحجوز ومتابَع—24/7.',
  },
  denominator: {
    badge: 'معادلة القيمة · المقام',
    title: 'سرعة فورية. جهد شبه معدوم.',
    subtitle: 'نقلّص التأخير والجهد—النظام يعمل بينما تدير العمل.',
    pillarSpeed: 'رد فوري',
    pillarSpeedHint: 'أقل من ثانيتين على كل اتصال. بلا يانصيب البريد الصوتي.',
    pillarDeploy: 'نشر خلال 48 ساعة',
    pillarDeployHint: 'ننفّذ ونشغّل—ليس أداة أخرى للمراقبة.',
    pillarEffort: 'تحكم بلا احتكاك',
    pillarEffortHint: 'تطبيق جوال + أتمتة. أنت توافق؛ الحلقة تنفّذ.',
  },
  mobileApp: {
    title: 'شغّل مسار العملاء أثناء التنقّل مع تطبيق AI Employee.',
    bullet1: 'إشعارات فورية مباشرة إلى هاتفك',
    bullet2: 'دردش مع العملاء والعملاء المحتملين من التطبيق',
    tagline: 'لا تفوّت فرصة أخرى.',
    imageAlt: 'تطبيق AI Employee على الهاتف يعرض مؤشرات المسار والنشاط الأخير',
    appStoreHref: 'https://apps.apple.com/',
    playStoreHref: 'https://play.google.com/store',
    appStoreAriaLabel: 'التنزيل من App Store',
    playStoreAriaLabel: 'احصل عليه من Google Play',
  },
  problem: {
    badge: 'النمط الذي نراه يتكرر',
    title: 'النمو لا يتعثر في الإعلان.',
    titleHighlight: 'يتعثر بعد النقرة.',
    subtitle:
      'عندما يعيش مسار العمل في صناديق البريد والملاحظات والمعرفة الشفهية، تحدث تسرّبات, حتى مع تموضع قوي. العدو ليس «عملاء سيئون». بل نظام ما زال يعتمد على توافر بشري على مدار الساعة.',
    stats: [
      {
        value: '40٪',
        label: 'من الاتصالات دون رد',
        hint: 'الاهتمام المدفوع يضيع إذا لم يلتقط أحد الخيط.',
      },
      {
        value: '78٪',
        label: 'يشتري من يرد أولاً',
        hint: 'السرعة ليست رفاهية, إنها الميزان.',
      },
      {
        value: '5 د',
        label: 'هذه النافذة الحاسمة',
        hint: 'التأخير يعني أن العميل الساخن يتحدث لمنافس.',
      },
    ],
  },
  capabilities: {
    badge: 'طبقة التشغيل',
    title: 'ست قدرات.',
    titleHighlight: 'نظام نمو واحد.',
    subtitle:
      'لمقدمي الخدمات الساعين للنمو من دون فوضى, تنظيم كل ما يمس الإيراد: الجذب والتأهيل والحجز والمتابعة والاحتفاظ.',
    items: [
      {
        title: 'رد فوري',
        body: 'كل عميل محتمل يردّ بسرعة وبأسلوبك, تتوقف عن إهدار الفرص للصمت.',
      },
      {
        title: 'تأهيل ذكي',
        body: 'الأسئلة الصحيح حتى يصل المشترون الجادون فقط إلى جدولك.',
      },
      {
        title: 'حجز تلقائي',
        body: 'يختارون وقتاً. يمتلئ التقويم. بلا تسليم ضبابي.',
      },
      {
        title: 'متابعة تعمل',
        body: 'ثابتة ومهذبة, حتى الحجز أو الانسحاب. لا «نسيت».',
      },
      {
        title: 'قنوات متعددة، عقل واحد',
        body: 'مكالمات وواتساب وبريد, صندوق واحد، حقيقة واحدة، خطوة تالية.',
      },
      {
        title: 'استعادة الإيراد',
        body: 'إحياء الاهتمام البارد، تقليل الغياب، دفع الإيراد المتكرر لا المرة الواحدة.',
      },
    ],
  },
  timeToValue: {
    badge: 'الوقت حتى القيمة',
    title: 'جاهز خلال 48 ساعة',
    subtitle:
      'لسنا هنا لنسلّم أداة أخرى تراقبونها. ننفّذ المسار ونوصل القنوات ونشغّل النظام معكم, لتقل الاعتماد على ذاكرة الفريق.',
    statBig: '48س',
    statSmall: 'من القرار إلى التشغيل',
    cta: 'احجز مراجعة Growth System',
  },
  qualification: {
    badge: 'الملاءمة مهمة',
    title: 'مبني لـ',
    titleHighlight: 'شركات الخدمات الراقية',
    forHeading: 'لمن هذا',
    forItems: [
      'تبيع خدمة راقية والاحتفاظ يهمك مثل العملاء المحتملين',
      'تستثمر في اكتساب مدفوع (أو تخطط) وتحتاج أن يواكب الاستقبال',
      'تبيع عبر مواعيد أو استشارات أو حوارات عالية الثقة',
      'النمو يشعر بالفوضى: أدوات وناس ومتابعة غير متوافقة',
      'تريد توسعاً هادئاً, ليس أعلى صوتاً وأعباء وأخطاراً',
      'مستعد لشراكة نظام, لا شراء برمجية جاهزة',
    ],
    notHeading: 'أقل ملاءمة إن',
    notItems: [
      'تريد إبداع إعلانات دون إصلاح العمليات',
      'تحسّن للسعر الأدنى لا للنتائج والاحتفاظ',
      'لا يوجد بيع أو موعد في رحلة المشتري',
      'سرعة الرد ليست عنق زجاجة للإيراد',
      'تريد تسجيل دخول فقط, لا تنفيذ ولا شراكة',
      'غير مستعد لتغيير تدفق العمل بين الفريق والعميل',
    ],
  },
  caseStudy: {
    label: 'دليل',
    title: 'من استقبال مفقود إلى نظام لا ينام, بسرعة.',
    company: 'مركز طبي إقليمي',
    industry: 'رعاية صحية',
    contextLabel: 'السياق',
    challengeLabel: 'التحدي',
    solutionLabel: 'الحل',
    context: '15 ألف دولار شهرياً إعلانات, لكن الاستقبال لم يواكب الحجم ولا السرعة.',
    challenge: 'نحو 40٪ من العملاء المحتملين دون رد آنٍ. مسار بارد. إيراد يتسرّب.',
    solution:
      'نظام ذكي جاهز خلال 18 ساعة, رد وتأهيل وحجز ومتابعة بمنظر تشغيلي واحد.',
    outcomesHeading: 'النتائج',
    results: [
      { metric: '100٪', description: 'كل عميل محتمل يُخدم بسرعة, بخطوة تالية واضحة.' },
      { metric: 'صفر', description: 'لا فجوات «سنعاود الاتصال» في البداية.' },
      { metric: '18س', description: 'من القرار إلى التشغيل, تبدأ النتائج فوراً.' },
      { metric: '85٪', description: 'تحويل أفضل عندما يواكب التوقيت إلحاح المشتري.' },
    ],
  },
  bonusStack: {
    badge: 'مضمّن مجاناً',
    title: 'حزمة مسرّع النمو (مضمّنة مجاناً)',
    subtitle:
      'ليست إضافات. تأتي مع كل شراكة راقية لتلتقط الحلقة وتحوّل وتتوسع من اليوم الأول.',
    includedLabel: 'مضمّن',
    totalValue: '2,997$ مكافآت',
    items: [
      {
        name: 'نظام استعادة «عدم الحضور»',
        description: 'تسلسلات SMS وبريد تلقائية عند فوات المكالمات أو المواعيد.',
        value: 'قيمة 1,500$',
      },
      {
        name: 'محرك السمعة 5 نجوم',
        description: 'جمع تلقائي لتقييمات Google وFacebook بعد البيع.',
        value: 'قيمة 997$',
      },
      {
        name: 'خزنة تكامل CRM',
        description: '5,000+ موصل بلا إدخال يدوي للبيانات.',
        value: 'قيمة 500$',
      },
    ],
  },
  guarantee: {
    badge: 'ضمان خدمة مشروط',
    title: 'نحن نتحمل المخاطر—ليس أنت.',
    body: 'إن لم تحجز 15 موعداً مؤهلاً على الأقل في أول 30 يوماً من الإعلانات، نعمل مجاناً حتى تحقق ذلك. بلا أسئلة.',
  },
  scarcity: {
    prefix: 'نقبل 5 شركاء راقيين جدد شهرياً فقط للحفاظ على نشر خلال 18 ساعة.',
    currentlyLabel: 'حالياً:',
    spotsSuffix: 'مقاعد متبقية لـ',
  },
  pricing: {
    title: 'استثمار الشراكة الراقية',
    subtitle: 'احمِ الإيراد الذي تدفع أصلاً لخلقه. عميل قوي يغطي غالباً الشهر الأول.',
    valueAnchor: {
      heading: 'إجمالي القيمة قبل استثمارك',
      lineItems: [
        { label: 'نظام حلقة الحجز بالذكاء (منفّذ معك)', value: '$2,353' },
        { label: 'نظام استعادة عدم الحضور', value: '$1,500' },
        { label: 'محرك السمعة 5 نجوم', value: '$997' },
        { label: 'خزنة تكامل CRM', value: '$500' },
      ],
      totalLabel: 'إجمالي القيمة',
      totalValue: '$5,350+',
      investmentLabel: 'استثمارك',
      investmentDetail: '$2,000 إعداد + $500/شهر',
      investmentNote: 'الشهر الأول ≈ $2,500 · يحمي الطلب المدفوع',
    },
    planName: 'حلقة الحجز بالذكاء · منفّذ معك',
    limitedLabel: 'شراكات محدودة (واحدة لكل سوق عند الالتزام)',
    setupFee: '2,000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'إعداد لمرة واحدة',
    setupFeePromo: 'خلال شهر مايو، يُزال رسم الإعداد.',
    setupPromoCountdownLead: 'تنتهي العرض خلال',
    monthlyLabel: 'شهري',
    price: '500 $',
    period: '/شهر',
    note: 'إذا استثمرت في الطلب، الحساب بسيط: احمِ الإيراد الذي تدفع أصلاً لخلقه.',
    cta: 'احجز مراجعة Growth System',
  },
  finalCta: {
    badge: 'القرار',
    title: 'كل يوم بلا الحلقة',
    titleHighlight: 'يهدي العملاء للصمت.',
    subtitle:
      'احجز مراجعة Growth System. نرسم التسرّب وخطة 48 ساعة ونؤكد الملاءمة قبل الالتزام.',
    primaryCta: 'احجز مقعد الشريك',
    bullet1: 'مراجعة واحدة ونعم/لا واضح للملاءمة',
    bullet2: 'نحو 30 دقيقة، بلا عرض طويل',
    bullet3: 'نشارك فقط حيث 15+ موعداً مؤهلاً ممكن',
  },
}
