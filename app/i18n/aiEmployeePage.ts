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
    expandStory: string
    collapseStory: string
  }
  pricing: {
    title: string
    subtitle: string
    /** Shown on the product page before assessment (no dollar amounts). */
    assessmentNote: string
    assessmentCta: string
    investmentNote: string
    planName: string
    limitedLabel: string
    setupFee: string
    /** Shown as the current amount while `setupFee` is struck through (e.g. promo period). */
    setupFeeWaivedDisplay: string
    setupLabel: string
    /** Short promo line (e.g. limited-time fee removal). */
    setupFeePromo: string
    monthlyLabel: string
    price: string
    period: string
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
    /** Hero/pricing one-liner after the count, e.g. "slots left in {month} · max 5/month" */
    inlineSuffix: string
  }
  finalCta: {
    title: string
    titleHighlight: string
    subtitle: string
    primaryCta: string
  }
}

type BonusItem = { name: string; description: string; value: string }

type StatTriple = { value: string; label: string; hint: string }
type CapItem = { title: string; body: string }
type ResultLine = { metric: string; description: string }

export const aiEmployeePageEn: AiEmployeePageTranslations = {
  hero: {
    badge: 'Service growth infrastructure',
    titleLine1: 'Install once—then never',
    titleHighlight: 'answer DMs, send booking links, or chase follow-ups again.',
    hook:
      'The only done-for-you loop that captures, qualifies, books, upsells, and follows up on every paid lead—while you run the service. Turn on ads: same spend, a pipeline that does not leak.',
    primaryCta: 'Take the 2-Minute Fit Check',
    footnote: '15 qualified appointments in 30 days—or we work free until you hit it. We take the risk.',
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
        label: 'inbound touches unanswered',
        hint: 'Paid attention evaporates when nobody picks up the thread.',
      },
      {
        value: '78%',
        label: 'buy from first responder',
        hint: 'Speed isn’t a nice-to-have, it’s the scoreboard.',
      },
      {
        value: '5 min',
        label: 'response window',
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
    expandStory: 'Read full case study',
    collapseStory: 'Show less',
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
    body: '15 qualified appointments in 30 days—or we work free until you hit it.',
  },
  scarcity: {
    prefix: 'Limited to 5 premium partners per month.',
    currentlyLabel: 'Currently:',
    spotsSuffix: 'spots remaining for',
    inlineSuffix: 'premium slots left in {month} · max 5/month',
  },
  pricing: {
    title: 'Ready when the numbers make sense',
    subtitle: 'We install one loop—setup plus monthly—only after your fit assessment shows the leak, the upside, and what the system costs.',
    assessmentNote:
      'Your personalized report spells out what slow follow-up is costing you, what recovery looks like with the loop live, and the all-in investment—before you pay.',
    assessmentCta: 'Run the fit assessment',
    investmentNote: 'Dollar amounts unlock in your results—not on this page.',
    planName: 'AI Booking Loop',
    limitedLabel: 'Limited partner slots',
    setupFee: '$2,000',
    setupFeeWaivedDisplay: '$0',
    setupLabel: 'Setup',
    setupFeePromo: 'Setup waived — ends in',
    monthlyLabel: 'Monthly',
    price: '$500',
    period: '/mo',
    cta: 'Book a fit call',
  },
  finalCta: {
    title: 'Stop losing leads',
    titleHighlight: 'to silence.',
    subtitle: 'Book a 30-minute fit call. We map the leak and confirm the loop is right for you.',
    primaryCta: 'Book a fit call',
  },
}

export const aiEmployeePageFr: AiEmployeePageTranslations = {
  hero: {
    badge: 'Infrastructure de croissance pour services',
    titleLine1: 'Une fois installée—plus jamais',
    titleHighlight: 'de répondre aux DM, envoyer un lien, ni relancer à la main.',
    hook:
      'La seule boucle clé en main qui capte, qualifie, réserve, relance et fait monter le panier sur chaque lead payant—pendant que vous livrez le service. Ajoutez la pub : même budget, zéro fuite.',
    primaryCta: 'Faire le test de compatibilité (2 min)',
    footnote:
      '15 RDV qualifiés en 30 jours—sinon on travaille gratuitement jusqu’au seuil. Le risque est pour nous.',
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
    expandStory: 'Lire l’étude complète',
    collapseStory: 'Réduire',
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
    body: '15 RDV qualifiés en 30 jours—sinon nous travaillons gratuitement jusqu’à atteindre ce seuil.',
  },
  scarcity: {
    prefix: 'Limité à 5 partenaires premium par mois.',
    currentlyLabel: 'Actuellement :',
    spotsSuffix: 'places restantes pour',
    inlineSuffix: 'places premium en {month} · max 5/mois',
  },
  pricing: {
    title: 'Prêt quand les chiffres sont clairs',
    subtitle:
      'Une seule boucle—mise en place et mensuel—après que l’évaluation fit montre la fuite, le potentiel et le coût du système.',
    assessmentNote:
      'Votre rapport détaille ce que les lenteurs vous coûtent, ce que la reprise avec la boucle peut rapporter, et l’investissement global—avant tout paiement.',
    assessmentCta: 'Lancer l’évaluation fit',
    investmentNote: 'Les montants s’affichent dans vos résultats—pas sur cette page.',
    planName: 'Boucle de réservation IA',
    limitedLabel: 'Places partenaires limitées',
    setupFee: '2 000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'Mise en place',
    setupFeePromo: 'Mise en place offerte — fin dans',
    monthlyLabel: 'Mensuel',
    price: '500 $',
    period: '/mois',
    cta: 'Réserver un appel fit',
  },
  finalCta: {
    title: 'Arrêtez de perdre des leads',
    titleHighlight: 'dans le silence.',
    subtitle: 'Réservez un appel fit de 30 min. Nous cartographions la fuite et validons que la boucle vous convient.',
    primaryCta: 'Réserver un appel fit',
  },
}

export const aiEmployeePageDe: AiEmployeePageTranslations = {
  hero: {
    badge: 'Wachstums-Infrastruktur für Services',
    titleLine1: 'Einmal installiert—nie wieder',
    titleHighlight: 'DMs beantworten, Buchungslinks schicken oder nachfassen.',
    hook:
      'Der einzige Done-for-you-Loop, der jeden bezahlten Lead erfasst, qualifiziert, bucht, nachfasst und Upsell fährt—während Sie den Service liefern. Ads dazu: gleiches Budget, keine Lecks.',
    primaryCta: '2-Minuten-Passungstest starten',
    footnote:
      '15 qualifizierte Termine in 30 Tagen—oder wir arbeiten gratis, bis Sie sie haben. Das Risiko tragen wir.',
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
    expandStory: 'Vollständige Fallstudie lesen',
    collapseStory: 'Weniger anzeigen',
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
    body: '15 qualifizierte Termine in 30 Tagen—sonst arbeiten wir kostenlos, bis Sie es schaffen.',
  },
  scarcity: {
    prefix: 'Max. 5 Premium-Partner pro Monat.',
    currentlyLabel: 'Aktuell:',
    spotsSuffix: 'Plätze frei für',
    inlineSuffix: 'Premium-Plätze in {month} · max. 5/Monat',
  },
  pricing: {
    title: 'Bereit, wenn die Zahlen passen',
    subtitle:
      'Ein Loop—Einrichtung plus monatlich—erst nach dem Fit-Assessment mit Leck, Potenzial und Systemkosten.',
    assessmentNote:
      'Ihr Report zeigt, was langsames Follow-up kostet, was mit aktivem Loop möglich ist und die Gesamtinvestition—vor der Zahlung.',
    assessmentCta: 'Fit-Assessment starten',
    investmentNote: 'Beträge sehen Sie in den Ergebnissen—nicht hier.',
    planName: 'KI-Buchungs-Loop',
    limitedLabel: 'Begrenzte Partnerplätze',
    setupFee: '2.000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'Einrichtung',
    setupFeePromo: 'Einrichtung entfällt — endet in',
    monthlyLabel: 'Monatlich',
    price: '500 $',
    period: '/Monat',
    cta: 'Fit-Call buchen',
  },
  finalCta: {
    title: 'Keine Leads mehr',
    titleHighlight: 'im Stille-Modus.',
    subtitle: 'Buchen Sie einen 30-Minuten-Fit-Call. Wir kartieren das Leck und prüfen, ob der Loop passt.',
    primaryCta: 'Fit-Call buchen',
  },
}

export const aiEmployeePageEs: AiEmployeePageTranslations = {
  hero: {
    badge: 'Infraestructura de crecimiento para servicios',
    titleLine1: 'Instálalo una vez—y nunca más',
    titleHighlight: 'contestar DMs, mandar enlaces de reserva ni perseguir seguimientos.',
    hook:
      'El único loop llave en mano que captura, califica, agenda, hace upsell y da seguimiento a cada lead pagado—mientras tú entregas el servicio. Activa anuncios: mismo gasto, pipeline sin fugas.',
    primaryCta: 'Hacer el test de compatibilidad (2 min)',
    footnote:
      '15 citas calificadas en 30 días—o trabajamos gratis hasta lograrlas. El riesgo es nuestro.',
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
    expandStory: 'Leer caso completo',
    collapseStory: 'Mostrar menos',
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
    body: '15 citas calificadas en 30 días—o trabajamos gratis hasta lograrlo.',
  },
  scarcity: {
    prefix: 'Máximo 5 socios premium al mes.',
    currentlyLabel: 'Actualmente:',
    spotsSuffix: 'plazas restantes para',
    inlineSuffix: 'plazas premium en {month} · máx. 5/mes',
  },
  pricing: {
    title: 'Listo cuando los números cuadran',
    subtitle:
      'Un solo loop—configuración y mensual—después de que la evaluación fit muestre la fuga, el potencial y el costo del sistema.',
    assessmentNote:
      'Su informe detalla lo que cuesta el seguimiento lento, lo que recupera con el loop activo y la inversión total—antes de pagar.',
    assessmentCta: 'Hacer la evaluación fit',
    investmentNote: 'Los montos aparecen en sus resultados—no en esta página.',
    planName: 'Loop de reservas IA',
    limitedLabel: 'Cupos de socio limitados',
    setupFee: '2.000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'Configuración',
    setupFeePromo: 'Configuración sin cargo — termina en',
    monthlyLabel: 'Mensual',
    price: '500 $',
    period: '/mes',
    cta: 'Reservar llamada de fit',
  },
  finalCta: {
    title: 'Deje de perder leads',
    titleHighlight: 'en el silencio.',
    subtitle: 'Reserve una llamada fit de 30 min. Mapeamos la fuga y confirmamos si el loop encaja.',
    primaryCta: 'Reservar llamada fit',
  },
}

export const aiEmployeePageAr: AiEmployeePageTranslations = {
  hero: {
    badge: 'بنية نمو لأعمال الخدمات',
    titleLine1: 'ثبّتها مرة—ولن',
    titleHighlight: 'ترد على الرسائل أو ترسل روابط حجز أو تلاحق متابعة يدوياً.',
    hook:
      'الحلقة الوحيدة الجاهزة التي تلتقط وتؤهل وتحجز وترفع القيمة وتتابع كل عميل مدفوع—وأنت تقدّم الخدمة. أضف الإعلانات: نفس الإنفاق، خط بلا تسرّب.',
    primaryCta: 'ابدأ اختبار الملاءمة (دقيقتان)',
    footnote: '15 موعداً مؤهلاً خلال 30 يوماً—أو نعمل مجاناً حتى تحققها. المخاطرة علينا.',
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
    expandStory: 'اقرأ دراسة الحالة كاملة',
    collapseStory: 'إظهار أقل',
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
    body: '15 موعداً مؤهلاً في 30 يوماً—أو نعمل مجاناً حتى تحقق ذلك.',
  },
  scarcity: {
    prefix: 'حد أقصى 5 شركاء راقيين شهرياً.',
    currentlyLabel: 'حالياً:',
    spotsSuffix: 'مقاعد متبقية لـ',
    inlineSuffix: 'مقاعد متبقية في {month} · حد 5/شهر',
  },
  pricing: {
    title: 'جاهزون عندما تتضح الأرقام',
    subtitle:
      'حلقة واحدة—إعداد وشهري—بعد أن يوضح تقييم الملاءمة التسرّب والفرصة وتكلفة النظام.',
    assessmentNote:
      'تقريرك يوضح تكلفة البطء في المتابعة، وما يمكن استرداده مع الحلقة، والاستثمار الكامل—قبل الدفع.',
    assessmentCta: 'ابدأ تقييم الملاءمة',
    investmentNote: 'المبالغ تظهر في نتائجك—وليس هنا.',
    planName: 'حلقة الحجز بالذكاء',
    limitedLabel: 'مقاعد شركاء محدودة',
    setupFee: '2,000 $',
    setupFeeWaivedDisplay: '0 $',
    setupLabel: 'الإعداد',
    setupFeePromo: 'الإعداد مجاني — ينتهي خلال',
    monthlyLabel: 'شهري',
    price: '500 $',
    period: '/شهر',
    cta: 'احجز مكالمة ملاءمة',
  },
  finalCta: {
    title: 'توقّف عن فقدان العملاء',
    titleHighlight: 'في الصمت.',
    subtitle: 'احجز مكالمة ملاءمة 30 دقيقة. نرسم التسرّب ونؤكد أن الحلقة مناسبة لك.',
    primaryCta: 'احجز مكالمة ملاءمة',
  },
}
