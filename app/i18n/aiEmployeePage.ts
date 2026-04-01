/**
 * AI Employee / ai-receptionist page — full StoryBrand + growth-operator copy.
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
  /** Mobile app promo strip — pairs with assets in /public/images/Download */
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
  noMoreJust: {
    title: string
    noMoreLabel: string
    noMoreItems: [string, string, string, string, string, string]
    justLabel: string
    justItems: [string, string, string, string, string, string]
  }
  problem: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    stats: [StatTriple, StatTriple, StatTriple]
    painCards: [PainCard, PainCard, PainCard]
    closing: { title: string; subtitle: string }
  }
  traditionalFails: {
    badge: string
    title: string
    titleHighlight: string
    items: [FailCard, FailCard, FailCard, FailCard, FailCard, FailCard]
    closing: string
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
    planName: string
    limitedLabel: string
    setupFee: string
    setupLabel: string
    monthlyLabel: string
    price: string
    period: string
    note: string
    cta: string
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

type StatTriple = { value: string; label: string; hint: string }
type PainCard = { title: string; body: string }
type FailCard = { title: string; body: string }
type CapItem = { title: string; body: string }
type ResultLine = { metric: string; description: string }

export const aiEmployeePageEn: AiEmployeePageTranslations = {
  hero: {
    badge: 'AI Employee Systems',
    titleLine1: 'Stop running growth on memory.',
    titleHighlight: 'Start running it on systems.',
    hook: 'Premium service businesses · we install and run intake, follow-up, and booking—so nothing depends on who remembered what.',
    primaryCta: 'Book Your Growth System Audit',
    footnote: 'Limited partnerships · often live in 48h',
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
  noMoreJust: {
    title: 'What quietly drains revenue — and what replaces it',
    noMoreLabel: 'No more',
    noMoreItems: [
      'Unqualified leads burning your team’s time',
      'Scattered tools and no single operating picture',
      'Manual follow-up that depends on memory',
      'Delayed responses that hand wins to faster competitors',
      'Lost deals stuck between channels',
      'No-shows and ghosting after the first touch',
    ],
    justLabel: 'Just',
    justItems: [
      'Qualified conversations — your team’s time stays on real buyers',
      'One connected system — a single operating picture you can trust',
      'Follow-up that runs automatically — no more “I’ll remember tomorrow”',
      'First-response speed that keeps you in the race — and on-brand',
      'One thread across channels — deals don’t die in the handoff',
      'Fewer no-shows and ghosting — reminders and recovery built in',
    ],
  },
  problem: {
    badge: 'The pattern we see on repeat',
    title: 'Growth isn’t failing in the ad account.',
    titleHighlight: 'It’s failing after the click.',
    subtitle:
      'When pipelines live in inboxes, sticky notes, and tribal knowledge, you get leakage — even with strong positioning. The enemy isn’t “bad leads.” It’s a system that still depends on people being available 24/7.',
    stats: [
      {
        value: '40%',
        label: 'of inbound touches go unanswered',
        hint: 'Paid attention evaporates when nobody picks up the thread.',
      },
      {
        value: '78%',
        label: 'buy from whoever responds first',
        hint: 'Speed isn’t a nice-to-have — it’s the scoreboard.',
      },
      {
        value: '5 min',
        label: 'is the window that matters',
        hint: 'Wait too long and the “hot lead” is already talking to someone else.',
      },
    ],
    painCards: [
      {
        title: 'Slow response',
        body: 'Lead at 2pm. Your team replies at 6pm. They already booked elsewhere.',
      },
      {
        title: 'Context dies in handoffs',
        body: 'WhatsApp here. Email there. Nobody sees the full story — so trust never compounds.',
      },
      {
        title: 'Follow-up that doesn’t run',
        body: '“I’ll circle back tomorrow.” Tomorrow becomes never. Revenue walks out.',
      },
    ],
    closing: {
      title: 'The winners run systems. The rest run on hustle.',
      subtitle: 'We install and run the layer that doesn’t forget — one partnership per market when we commit.',
    },
  },
  traditionalFails: {
    badge: 'Why “more software” isn’t the answer',
    title: 'Another login doesn’t fix',
    titleHighlight: 'broken operations.',
    items: [
      {
        title: 'Humans as the routing layer',
        body: 'One inbox. One phone. Voicemail after hours. Scale becomes headcount — and headcount becomes variance.',
      },
      {
        title: 'Generic answering services',
        body: 'Messages get taken, not moved. Nothing qualifies, books, or nurtures — so pipeline stays thin.',
      },
      {
        title: 'Chatbots without teeth',
        body: 'They answer FAQs. They don’t own outcomes. Calls and high-intent threads still fall through.',
      },
      {
        title: 'Tool sprawl',
        body: 'Five tabs, zero truth. Nobody knows which lead is real, warm, or ready to pay.',
      },
      {
        title: 'Manual follow-up culture',
        body: 'Every reminder is a person. When someone is sick, busy, or new — deals stall.',
      },
      {
        title: 'No single growth operating system',
        body: 'Marketing promises. Operations can’t keep the promise at the speed buyers expect.',
      },
    ],
    closing:
      'One intelligent system — your voice, your rules — built to keep clients longer, convert more leads, and scale with confidence.',
  },
  capabilities: {
    badge: 'The operating layer',
    title: 'Six capabilities.',
    titleHighlight: 'One growth system.',
    subtitle:
      'Tailored for service businesses seeking growth without chaos — systematizing the departments that touch revenue: capture, qualify, book, follow up, and retain.',
    items: [
      {
        title: 'Instant response',
        body: 'Every lead gets a fast, on-brand reply — so you stop donating wins to silence.',
      },
      {
        title: 'Smart qualification',
        body: 'The right questions so only serious buyers reach your calendar — fewer tire-kickers, more conversations that close.',
      },
      {
        title: 'Auto booking',
        body: 'They pick a time. Your calendar fills. No “who owns this thread?” handoffs.',
      },
      {
        title: 'Follow-up that runs',
        body: 'Persistent, polite, consistent — until they book or opt out. No more “I forgot.”',
      },
      {
        title: 'Multi-channel, one brain',
        body: 'Calls, WhatsApp, email — one inbox, one truth, one next step.',
      },
      {
        title: 'Revenue recovery',
        body: 'Wake cold interest, tighten no-shows, and nudge toward repeat revenue — not one-off wins.',
      },
    ],
  },
  timeToValue: {
    badge: 'Time to value',
    title: 'Live in 48 hours',
    subtitle:
      'We’re not here to hand you another tool to babysit. We implement the workflow, connect the channels, and run the system with you — so you stop relying on staff memory.',
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
      'You want scaling that feels calm — not louder, busier, riskier',
      'You’re willing to partner on a system — not buy shelf-ware',
    ],
    notHeading: 'Not the right fit',
    notItems: [
      'You want ad creative strategy without fixing operations',
      'You’re optimizing for the lowest price — not outcomes and retention',
      'There’s no sales conversation or appointment in your buyer journey',
      'Response time isn’t a bottleneck for revenue',
      'You only want a login — not implementation and partnership',
      'You’re not ready to change how work flows between team and client',
    ],
  },
  caseStudy: {
    label: 'Proof',
    title: 'From missed intake to a system that doesn’t sleep — fast.',
    company: 'Regional Medical Center',
    industry: 'Healthcare',
    contextLabel: 'Context',
    challengeLabel: 'Challenge',
    solutionLabel: 'Solution',
    context: '$15k/month in ads — but intake couldn’t keep up with volume or speed.',
    challenge: 'Roughly 40% of leads weren’t getting a timely response. Pipeline cooled. Revenue leaked.',
    solution:
      'A done-with-you intelligent system live in 18 hours — answering, qualifying, booking, and following up with a single operating view.',
    outcomesHeading: 'Outcomes',
    results: [
      { metric: '100%', description: 'Every lead answered — fast — with a consistent next step.' },
      { metric: 'Zero', description: 'No more “we’ll call them back” gaps in the first mile.' },
      { metric: '18h', description: 'From decision to live — so results start immediately.' },
      { metric: '85%', description: 'Stronger conversion when response time matches buyer urgency.' },
    ],
  },
  pricing: {
    title: 'Transparent. Calm. No surprises.',
    subtitle:
      'Everything included in a partnership designed to pay for itself when your acquisition is real — priced in the ballpark of winning one good client for the full system.',
    planName: 'Done-with-you growth system',
    limitedLabel: 'Limited partnership slots (one per market when we commit)',
    setupFee: '$2,000',
    setupLabel: 'one-time setup',
    monthlyLabel: 'Monthly',
    price: '$500',
    period: '/month',
    note: 'If you invest in demand, the math is simple: protect the revenue you already pay to create.',
    cta: 'Book Your Growth System Audit',
  },
  finalCta: {
    badge: 'Limited partnerships',
    title: 'Stop betting growth on',
    titleHighlight: 'staff memory.',
    subtitle:
      'We have limited partnership slots left. Book your Growth System Audit — we’ll map bottlenecks, show what an intelligent system replaces first, and confirm fit before you move forward.',
    primaryCta: 'Book Your Growth System Audit',
    bullet1: 'One clear next step — the audit',
    bullet2: 'Fast, serious conversation (about 30 minutes)',
    bullet3: 'We only partner where we can drive measurable lift',
  },
}

export const aiEmployeePageFr: AiEmployeePageTranslations = {
  hero: {
    badge: 'Systèmes employé IA',
    titleLine1: 'Ne laissez plus la croissance à la mémoire.',
    titleHighlight: 'Faites-la tourner sur des systèmes.',
    hook: 'Entreprises de services premium · nous installons et exploitons prise en charge, relances et réservation — sans dépendre de qui se souvient de quoi.',
    primaryCta: 'Réserver votre audit Growth System',
    footnote: 'Partenariats limités · souvent en ligne en 48h',
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
  noMoreJust: {
    title: 'Ce qui fait fuir le chiffre — et ce qui le remplace',
    noMoreLabel: 'Fini',
    noMoreItems: [
      'Les leads non qualifiés qui brûlent le temps de l’équipe',
      'Les outils éparpillés et aucune vue d’ensemble',
      'Les relances manuelles qui dépendent de la mémoire',
      'Les réponses tardives qui offrent la victoire au plus rapide',
      'Les deals perdus entre les canaux',
      'Les lapins et les silences après le premier contact',
    ],
    justLabel: 'À la place',
    justItems: [
      'Des conversations qualifiées — le temps de l’équipe va aux vrais acheteurs',
      'Un système connecté — une vue d’ensemble fiable',
      'Des relances automatiques — fini le « je rappelle demain »',
      'Une première réponse rapide — vous restez dans la course, à votre ton',
      'Un fil conducteur entre canaux — les deals ne se perdent plus au passage',
      'Moins de lapins et de silences — rappels et relance intégrés',
    ],
  },
  problem: {
    badge: 'Le schéma qu’on voit en boucle',
    title: 'La croissance ne casse pas dans la pub.',
    titleHighlight: 'Elle casse après le clic.',
    subtitle:
      'Quand le pipeline vit dans les boîtes mail, les post-it et le savoir tribal, il y a des fuites — même avec un bon positionnement. L’ennemi n’est pas « les mauvais leads ». C’est un système qui dépend encore de la disponibilité humaine 24/7.',
    stats: [
      {
        value: '40%',
        label: 'des entrées ne reçoivent pas de réponse',
        hint: 'L’attention payée s’évapore si personne ne prend le fil.',
      },
      {
        value: '78%',
        label: 'achètent chez celui qui répond en premier',
        hint: 'La vitesse n’est pas un bonus — c’est le classement.',
      },
      {
        value: '5 min',
        label: 'c’est la fenêtre qui compte',
        hint: 'Trop tard et le lead brûlant parle déjà à un concurrent.',
      },
    ],
    painCards: [
      {
        title: 'Réponse lente',
        body: 'Lead à 14h. Réponse à 18h. Ils ont déjà réservé ailleurs.',
      },
      {
        title: 'Le contexte se perd',
        body: 'WhatsApp ici. Mail là. Personne ne voit l’histoire complète — la confiance ne se construit pas.',
      },
      {
        title: 'Relances qui n’existent pas',
        body: '« Je rappelle demain. » Demain n’arrive jamais. Le chiffre part.',
      },
    ],
    closing: {
      title: 'Les gagnants ont des systèmes. Les autres courent après le hustle.',
      subtitle: 'Nous installons la couche qui n’oublie pas — un partenariat par marché quand on s’engage.',
    },
  },
  traditionalFails: {
    badge: 'Pourquoi « plus de logiciel » ne suffit pas',
    title: 'Un login de plus ne répare pas',
    titleHighlight: 'des opérations cassées.',
    items: [
      {
        title: 'L’humain comme routeur',
        body: 'Une ligne. Un répondeur le soir. Scaler = plus de têtes — et plus de variance.',
      },
      {
        title: 'Standard téléphonique générique',
        body: 'On prend des messages, pas des rendez-vous. Rien ne qualifie ni ne nourrit le pipeline.',
      },
      {
        title: 'Chatbots sans mordant',
        body: 'Ils répondent aux FAQ. Ils ne portent pas le résultat. Les fils à fort intent passent encore à la trappe.',
      },
      {
        title: 'Éparpillement d’outils',
        body: 'Cinq onglets, zéro vérité. Personne ne sait quel lead est chaud et prêt à payer.',
      },
      {
        title: 'Culture de relance manuelle',
        body: 'Chaque rappel est une personne. Malade, occupé, nouveau — les deals calent.',
      },
      {
        title: 'Pas de système d’exploitation de la croissance',
        body: 'Le marketing promet. Les opérations ne tiennent pas la promesse à la vitesse attendue.',
      },
    ],
    closing:
      'Un système intelligent — votre voix, vos règles — pour garder les clients plus longtemps, convertir plus de leads et scaler sereinement.',
  },
  capabilities: {
    badge: 'La couche opérationnelle',
    title: 'Six capacités.',
    titleHighlight: 'Un système de croissance.',
    subtitle:
      'Pensé pour les services haut de gamme qui veulent croître sans chaos — en systématisant tout ce qui touche au revenu : capter, qualifier, booker, relancer, fidéliser.',
    items: [
      {
        title: 'Réponse instantanée',
        body: 'Chaque lead reçoit une réponse rapide et à votre ton — vous arrêtez de offrir la victoire au silence.',
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
        body: 'Persistantes, polies, cohérentes — jusqu’à réservation ou refus. Plus de « j’ai oublié ».',
      },
      {
        title: 'Multi-canal, un cerveau',
        body: 'Appels, WhatsApp, mail — une boîte, une vérité, une prochaine étape.',
      },
      {
        title: 'Récupération de revenu',
        body: 'Réchauffer l’intérêt froid, réduire les lapins, pousser vers la récurrence — pas le one-shot.',
      },
    ],
  },
  timeToValue: {
    badge: 'Délai jusqu’à la valeur',
    title: 'En ligne en 48 h',
    subtitle:
      'Nous ne vous donnons pas un outil de plus à surveiller. Nous implémentons le flux, connectons les canaux et faisons tourner le système avec vous — pour ne plus dépendre de la mémoire de l’équipe.',
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
      'Vous voulez scaler calmement — pas plus fort, plus chargé, plus risqué',
      'Vous acceptez un partenariat sur un système — pas un logiciel en rayon',
    ],
    notHeading: 'Moins adapté si',
    notItems: [
      'Vous voulez de la créa pub sans refondre les opérations',
      'Vous cherchez le prix le plus bas — pas les résultats et la rétention',
      'Aucune conversation de vente ou de rendez-vous dans votre parcours',
      'Le délai de réponse n’est pas un frein au revenu',
      'Vous voulez seulement un login — pas l’implémentation et le partenariat',
      'Vous n’êtes pas prêt à changer le flux travail / client',
    ],
  },
  caseStudy: {
    label: 'Preuve',
    title: 'D’une prise en charge ratée à un système qui ne dort pas — vite.',
    company: 'Centre médical régional',
    industry: 'Santé',
    contextLabel: 'Contexte',
    challengeLabel: 'Défi',
    solutionLabel: 'Solution',
    context: '15 k$/mois de pub — mais l’intake ne suivait ni le volume ni la vitesse.',
    challenge: 'Environ 40 % des leads sans réponse rapide. Pipeline tiède. Revenu qui fuit.',
    solution:
      'Système intelligent clé en main en 18 h — réponse, qualification, booking et relances avec une vue unique.',
    outcomesHeading: 'Résultats',
    results: [
      { metric: '100 %', description: 'Chaque lead traité vite — avec une prochaine étape claire.' },
      { metric: 'Zéro', description: 'Plus de trous du type « on les rappellera » au début du tunnel.' },
      { metric: '18 h', description: 'De la décision au live — les résultats commencent tout de suite.' },
      { metric: '85 %', description: 'Meilleure conversion quand le délai suit l’urgence de l’acheteur.' },
    ],
  },
  pricing: {
    title: 'Transparent. Serein. Sans surprise.',
    subtitle:
      'Tout inclus dans un partenariat fait pour se payer quand l’acquisition est réelle — un investissement du même ordre que gagner un bon client pour tout le système.',
    planName: 'Système de croissance clé en main',
    limitedLabel: 'Places limitées (un partenariat par marché quand on s’engage)',
    setupFee: '2 000 $',
    setupLabel: 'mise en place unique',
    monthlyLabel: 'Mensuel',
    price: '500 $',
    period: '/mois',
    note: 'Si vous investissez dans la demande, le calcul est simple : protégez le revenu que vous payez déjà pour créer.',
    cta: 'Réserver votre audit Growth System',
  },
  finalCta: {
    badge: 'Partenariats limités',
    title: 'Arrêtez de parier la croissance sur',
    titleHighlight: 'la mémoire des équipes.',
    subtitle:
      'Il reste peu de places de partenariat. Réservez votre audit Growth System — nous cartographions les goulots, montrons ce qu’un système intelligent remplace en premier, et validons le fit avant d’avancer.',
    primaryCta: 'Réserver votre audit Growth System',
    bullet1: 'Une prochaine étape claire — l’audit',
    bullet2: 'Échange sérieux et rapide (environ 30 minutes)',
    bullet3: 'Nous ne partenons que là où nous pouvons un gain mesurable',
  },
}

export const aiEmployeePageDe: AiEmployeePageTranslations = {
  hero: {
    badge: 'KI-Mitarbeiter-Systeme',
    titleLine1: 'Lassen Sie Wachstum nicht von Erinnerungen abhängen.',
    titleHighlight: 'Lassen Sie es von Systemen laufen.',
    hook: 'Premium-Dienstleister · wir implementieren und betreiben Annahme, Nachfass und Buchung — ohne „wer erinnert sich an was“.',
    primaryCta: 'Growth-System-Audit buchen',
    footnote: 'Begrenzte Partnerschaften · oft live in 48h',
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
  noMoreJust: {
    title: 'Was Umsatz leise frisst — und was es ersetzt',
    noMoreLabel: 'Schluss mit',
    noMoreItems: [
      'Unqualifizierten Leads, die Ihr Team Zeit kosten',
      'Zerstreuten Tools ohne einheitliches Bild',
      'Manuellem Nachfassen, das von Erinnerung lebt',
      'Verzögerten Antworten, die schnellere Konkurrenten gewinnen lassen',
      'Verlorenen Deals zwischen Kanälen',
      'Nichterscheinen und Funkstille nach dem ersten Kontakt',
    ],
    justLabel: 'Stattdessen',
    justItems: [
      'Qualifizierte Gespräche — die Zeit des Teams geht an echte Käufer',
      'Ein verbundenes System — ein verlässliches Gesamtbild',
      'Automatisches Nachfassen — Schluss mit „morgen erinnere ich mich“',
      'Schnelle Erstantwort — Sie bleiben im Rennen, markengerecht',
      'Ein roter Faden über Kanäle — Deals gehen nicht in der Übergabe verloren',
      'Weniger No-Shows und Funkstille — Erinnerungen und Recovery eingebaut',
    ],
  },
  problem: {
    badge: 'Das Muster, das wir immer wieder sehen',
    title: 'Wachstum scheitert nicht am Werbekonto.',
    titleHighlight: 'Es scheitert nach dem Klick.',
    subtitle:
      'Wenn Pipelines in Postfächern, Zetteln und Kopfwissen leben, gibt es Lecks — auch mit gutem Positioning. Der Feind sind nicht „schlechte Leads“. Es ist ein System, das noch von 24/7-Verfügbarkeit abhängt.',
    stats: [
      {
        value: '40%',
        label: 'der Eingänge unbeantwortet',
        hint: 'Bezahlte Aufmerksamkeit verpufft, wenn niemand den Faden aufnimmt.',
      },
      {
        value: '78%',
        label: 'kaufen beim Schnellsten',
        hint: 'Geschwindigkeit ist kein Nice-to-have — sie ist die Punktzahl.',
      },
      {
        value: '5 Min',
        label: 'ist das relevante Fenster',
        hint: 'Zu spät und der heiße Lead spricht schon woanders.',
      },
    ],
    painCards: [
      {
        title: 'Langsame Antwort',
        body: 'Lead um 14 Uhr. Antwort um 18 Uhr. Termin ist woanders.',
      },
      {
        title: 'Kontext geht verloren',
        body: 'WhatsApp hier. Mail da. Niemand sieht die ganze Story — Vertrauen baut sich nicht auf.',
      },
      {
        title: 'Nachfassen, das nicht läuft',
        body: '„Morgen melde ich mich.“ Morgen wird nie. Umsatz geht.',
      },
    ],
    closing: {
      title: 'Gewinner haben Systeme. Der Rest lebt von Hustle.',
      subtitle: 'Wir installieren die Schicht, die nicht vergisst — ein Partner pro Markt, wenn wir uns committen.',
    },
  },
  traditionalFails: {
    badge: 'Warum „mehr Software“ nicht reicht',
    title: 'Ein weiteres Login repariert keine',
    titleHighlight: 'kaputten Abläufe.',
    items: [
      {
        title: 'Menschen als Router',
        body: 'Eine Leitung. Mailbox nach Feierabend. Skalieren = mehr Köpfe — und mehr Streuung.',
      },
      {
        title: 'Generische Anrufdienste',
        body: 'Nachrichten werden notiert, nicht vorangetrieben. Keine Qualifikation, kein Booking.',
      },
      {
        title: 'Chatbots ohne Biss',
        body: 'Sie beantworten FAQs. Sie tragen kein Ergebnis. Hohe Absicht verliert sich trotzdem.',
      },
      {
        title: 'Tool-Wildwuchs',
        body: 'Fünf Tabs, keine Wahrheit. Niemand weiß, welcher Lead wirklich zahlt.',
      },
      {
        title: 'Manuelle Follow-up-Kultur',
        body: 'Jede Erinnerung ist eine Person. Krank, beschäftigt, neu — Deals stocken.',
      },
      {
        title: 'Kein einheitliches Wachstums-OS',
        body: 'Marketing verspricht. Operations halten das Tempo der Käufer nicht.',
      },
    ],
    closing:
      'Ein intelligentes System — Ihre Stimme, Ihre Regeln — damit Kunden länger bleiben, mehr Leads werden und Sie sicher skalieren.',
  },
  capabilities: {
    badge: 'Die Betriebsschicht',
    title: 'Sechs Fähigkeiten.',
    titleHighlight: 'Ein Wachstumssystem.',
    subtitle:
      'Für anspruchsvolle Dienstleister, die wachsen wollen ohne Chaos — systematisiert über alle Bereiche, die Umsatz berühren: Erfassen, qualifizieren, buchen, nachfassen, binden.',
    items: [
      {
        title: 'Sofortige Antwort',
        body: 'Jeder Lead bekommt schnell eine markengerechte Antwort — Sie verschenken keine Siege an Stille.',
      },
      {
        title: 'Smarte Qualifikation',
        body: 'Die richtigen Fragen — nur ernsthafte Käufer landen in Ihrem Kalender.',
      },
      {
        title: 'Auto-Booking',
        body: 'Sie wählen einen Slot. Der Kalender füllt sich. Keine unklaren Übergaben.',
      },
      {
        title: 'Nachfassen, das läuft',
        body: 'Beharrlich, höflich, konsistent — bis Buchung oder Opt-out. Schluss mit „hätte ich mal“.',
      },
      {
        title: 'Multi-Kanal, ein Gehirn',
        body: 'Anrufe, WhatsApp, E-Mail — ein Posteingang, eine Wahrheit, ein nächster Schritt.',
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
      'Wir geben Ihnen kein weiteres Tool zum Hüten. Wir implementieren den Flow, verbinden Kanäle und betreiben das System mit Ihnen — damit Sie nicht von Gedächtnis im Team abhängen.',
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
      'Sie wollen ruhig skalieren — nicht lauter, busier, riskanter',
      'Sie wollen ein System-Partnerschaft — kein Regal-Softwarekauf',
    ],
    notHeading: 'Weniger passend',
    notItems: [
      'Sie wollen Ad-Kreativ ohne Operations zu fixen',
      'Sie optimieren auf den niedrigsten Preis — nicht auf Ergebnis und Retention',
      'Kein Vertriebsgespräch oder Termin in Ihrer Buyer Journey',
      'Reaktionszeit ist kein Umsatz-Engpass',
      'Sie wollen nur Login — nicht Implementierung und Partnerschaft',
      'Sie sind nicht bereit, Arbeitsfluss zwischen Team und Kunde zu ändern',
    ],
  },
  caseStudy: {
    label: 'Beweis',
    title: 'Von verpasster Annahme zu einem System, das nicht schläft — schnell.',
    company: 'Regionales medizinisches Zentrum',
    industry: 'Gesundheit',
    contextLabel: 'Kontext',
    challengeLabel: 'Herausforderung',
    solutionLabel: 'Lösung',
    context: '15k$/Monat Werbung — aber die Annahme kam weder mit Volumen noch Tempo nach.',
    challenge: 'Etwa 40 % der Leads ohne zeitnahe Antwort. Pipeline kühlte. Umsatz floss ab.',
    solution:
      'Intelligentes System in 18 Stunden live — antworten, qualifizieren, buchen, nachfassen mit einer Betriebsansicht.',
    outcomesHeading: 'Ergebnisse',
    results: [
      { metric: '100%', description: 'Jeder Lead schnell bedient — mit klarem nächsten Schritt.' },
      { metric: 'Null', description: 'Keine „rufen wir zurück“-Lücken mehr am Anfang.' },
      { metric: '18h', description: 'Von Entscheidung zu live — Ergebnisse starten sofort.' },
      { metric: '85%', description: 'Bessere Conversion, wenn das Tempo zur Dringlichkeit passt.' },
    ],
  },
  pricing: {
    title: 'Transparent. Ruhig. Keine Überraschungen.',
    subtitle:
      'Alles in einer Partnerschaft, die sich rechnet, wenn Akquise echt ist — in der Größenordnung eines gewonnenen guten Kunden für das ganze System.',
    planName: 'Done-with-you Wachstumssystem',
    limitedLabel: 'Begrenzte Partnerschaft (einer pro Markt bei Commitment)',
    setupFee: '2.000 $',
    setupLabel: 'einmalige Einrichtung',
    monthlyLabel: 'Monatlich',
    price: '500 $',
    period: '/Monat',
    note: 'Wenn Sie in Nachfrage investieren, ist die Rechnung einfach: schützen Sie den Umsatz, den Sie schon bezahlen, um zu erzeugen.',
    cta: 'Growth-System-Audit buchen',
  },
  finalCta: {
    badge: 'Begrenzte Partnerschaften',
    title: 'Hören Sie auf, Wachstum auf',
    titleHighlight: 'Teamgedächtnis zu setzen.',
    subtitle:
      'Es sind nur noch wenige Partnerschaftsplätze frei. Buchen Sie Ihr Growth-System-Audit — wir kartieren Engpässe, zeigen, was ein intelligentes System zuerst ersetzt, und prüfen den Fit, bevor Sie weitermachen.',
    primaryCta: 'Growth-System-Audit buchen',
    bullet1: 'Ein klarer nächster Schritt — das Audit',
    bullet2: 'Ernstes, kurzes Gespräch (ca. 30 Minuten)',
    bullet3: 'Wir partnern nur, wo messbarer Hebel möglich ist',
  },
}

export const aiEmployeePageEs: AiEmployeePageTranslations = {
  hero: {
    badge: 'Sistemas de empleado IA',
    titleLine1: 'Deje de sostener el crecimiento con la memoria.',
    titleHighlight: 'Hágalo correr sobre sistemas.',
    hook: 'Negocios de servicios premium · instalamos y operamos captación, seguimiento y reserva — sin depender de quién recordó qué.',
    primaryCta: 'Reservar su auditoría Growth System',
    footnote: 'Alianzas limitadas · en vivo en ~48h',
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
  noMoreJust: {
    title: 'Lo que drena ingresos en silencio — y qué lo reemplaza',
    noMoreLabel: 'Se acabó',
    noMoreItems: [
      'Leads no calificados que queman el tiempo del equipo',
      'Herramientas dispersas y ninguna foto única',
      'Seguimiento manual que depende de la memoria',
      'Respuestas tardías que regalan el triunfo al más rápido',
      'Tratos perdidos entre canales',
      'Incomparecencias y silencio tras el primer contacto',
    ],
    justLabel: 'En su lugar',
    justItems: [
      'Conversaciones calificadas — el tiempo del equipo va a compradores reales',
      'Un sistema conectado — una foto operativa en la que puede confiar',
      'Seguimiento automático — se acabó el «me acuerdo mañana»',
      'Primera respuesta rápida — sigue en la carrera, con su tono',
      'Un hilo entre canales — los tratos no mueren en el traspaso',
      'Menos incomparecencias y silencios — recordatorios y recuperación incluidos',
    ],
  },
  problem: {
    badge: 'El patrón que vemos una y otra vez',
    title: 'El crecimiento no falla en los anuncios.',
    titleHighlight: 'Falla después del clic.',
    subtitle:
      'Cuando el embudo vive en bandejas, notas y conocimiento tribal, hay fugas — incluso con buen posicionamiento. El enemigo no son “malos leads”. Es un sistema que aún depende de que haya gente disponible 24/7.',
    stats: [
      {
        value: '40%',
        label: 'de entradas sin respuesta',
        hint: 'La atención pagada se evapora si nadie recoge el hilo.',
      },
      {
        value: '78%',
        label: 'compra quien responde primero',
        hint: 'La velocidad no es un extra — es la tabla de posiciones.',
      },
      {
        value: '5 min',
        label: 'es la ventana que importa',
        hint: 'Tarde y el lead caliente ya habla con otro.',
      },
    ],
    painCards: [
      {
        title: 'Respuesta lenta',
        body: 'Lead a las 14h. Respuesta a las 18h. Ya reservaron en otro lado.',
      },
      {
        title: 'Se pierde el contexto',
        body: 'WhatsApp aquí. Correo allí. Nadie ve la historia — la confianza no se construye.',
      },
      {
        title: 'Seguimiento que no existe',
        body: '“Mañana les escribo.” Mañana nunca llega. Se va el ingreso.',
      },
    ],
    closing: {
      title: 'Los que ganan tienen sistemas. El resto vive de esfuerzo bruto.',
      subtitle: 'Instalamos la capa que no olvida — una alianza por mercado cuando nos comprometemos.',
    },
  },
  traditionalFails: {
    badge: 'Por qué “más software” no basta',
    title: 'Otro inicio de sesión no arregla',
    titleHighlight: 'operaciones rotas.',
    items: [
      {
        title: 'Humanos como enrutador',
        body: 'Una línea. Buzón fuera de horario. Escalar = más gente — y más varianza.',
      },
      {
        title: 'Contestadores genéricos',
        body: 'Se toman mensajes, no se avanza. Nada califica ni nutre el embudo.',
      },
      {
        title: 'Chatbots sin mordida',
        body: 'Responden FAQs. No llevan resultado. La intención alta sigue cayéndose.',
      },
      {
        title: 'Herramientas dispersas',
        body: 'Cinco pestañas, cero verdad. Nadie sabe qué lead paga de verdad.',
      },
      {
        title: 'Cultura de seguimiento manual',
        body: 'Cada recordatorio es una persona. Enfermo, ocupado, nuevo — los tratos se frenan.',
      },
      {
        title: 'Sin sistema operativo de crecimiento',
        body: 'Marketing promete. Operaciones no mantienen el ritmo que espera el comprador.',
      },
    ],
    closing:
      'Un sistema inteligente — su voz, sus reglas — para retener más clientes, convertir más leads y escalar con confianza.',
  },
  capabilities: {
    badge: 'La capa operativa',
    title: 'Seis capacidades.',
    titleHighlight: 'Un sistema de crecimiento.',
    subtitle:
      'Para negocios de servicios que buscan crecer sin caos — sistematizando todo lo que toca ingresos: captar, calificar, agendar, seguir y retener.',
    items: [
      {
        title: 'Respuesta instantánea',
        body: 'Cada lead recibe respuesta rápida y con su tono — deja de regalar victorias al silencio.',
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
        body: 'Persistente, educado, consistente — hasta cita o baja. Se acabó el “se me olvidó”.',
      },
      {
        title: 'Multicanal, un cerebro',
        body: 'Llamadas, WhatsApp, correo — una bandeja, una verdad, un siguiente paso.',
      },
      {
        title: 'Recuperación de ingresos',
        body: 'Reactivar interés frío, reducir incomparecencias, empujar ingresos recurrentes — no ventas sueltas.',
      },
    ],
  },
  timeToValue: {
    badge: 'Tiempo hasta el valor',
    title: 'En vivo en 48 horas',
    subtitle:
      'No le damos otra herramienta que vigilar. Implementamos el flujo, conectamos canales y operamos el sistema con usted — para no depender de la memoria del equipo.',
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
      'Quiere escalar con calma — no más ruido, más carga, más riesgo',
      'Está dispuesto a asociarse en un sistema — no a comprar software de estantería',
    ],
    notHeading: 'Menos encaje si',
    notItems: [
      'Quiere creatividad de anuncios sin arreglar operaciones',
      'Optimiza por el menor precio — no por resultados y retención',
      'No hay conversación de venta o cita en su recorrido',
      'El tiempo de respuesta no es un cuello de ingresos',
      'Solo quiere un login — no implementación ni alianza',
      'No está listo a cambiar cómo fluye el trabajo con el cliente',
    ],
  },
  caseStudy: {
    label: 'Prueba',
    title: 'De captación fallida a un sistema que no duerme — rápido.',
    company: 'Centro médico regional',
    industry: 'Salud',
    contextLabel: 'Contexto',
    challengeLabel: 'Reto',
    solutionLabel: 'Solución',
    context: '15k$/mes en anuncios — pero la captación no seguía volumen ni velocidad.',
    challenge: 'Cerca del 40 % de leads sin respuesta a tiempo. Embudo tibio. Ingreso fugado.',
    solution:
      'Sistema inteligente en 18 h en vivo — responde, califica, agenda y hace seguimiento con una sola vista.',
    outcomesHeading: 'Resultados',
    results: [
      { metric: '100%', description: 'Cada lead atendido rápido — con siguiente paso claro.' },
      { metric: 'Cero', description: 'Sin huecos de “los llamamos luego” al inicio.' },
      { metric: '18h', description: 'De decisión a en vivo — el impacto empieza ya.' },
      { metric: '85%', description: 'Mejor conversión cuando el tiempo sigue la urgencia del comprador.' },
    ],
  },
  pricing: {
    title: 'Transparente. Tranquilo. Sin sorpresas.',
    subtitle:
      'Todo incluido en una alianza pensada para pagarse cuando la adquisición es real — del orden de ganar un buen cliente por todo el sistema.',
    planName: 'Sistema de crecimiento hecho con usted',
    limitedLabel: 'Cupos limitados (una alianza por mercado cuando nos comprometemos)',
    setupFee: '2.000 $',
    setupLabel: 'configuración única',
    monthlyLabel: 'Mensual',
    price: '500 $',
    period: '/mes',
    note: 'Si invierte en demanda, la cuenta es simple: proteja el ingreso que ya paga por crear.',
    cta: 'Reservar su auditoría Growth System',
  },
  finalCta: {
    badge: 'Alianzas limitadas',
    title: 'Deje de apostar el crecimiento a',
    titleHighlight: 'la memoria del equipo.',
    subtitle:
      'Quedan pocos cupos de alianza. Reserve su auditoría Growth System — mapeamos cuellos, mostramos qué reemplaza primero un sistema inteligente y confirmamos encaje antes de avanzar.',
    primaryCta: 'Reservar su auditoría Growth System',
    bullet1: 'Un siguiente paso claro — la auditoría',
    bullet2: 'Conversación seria y breve (unos 30 minutos)',
    bullet3: 'Solo nos asociamos donde hay margen medible',
  },
}

export const aiEmployeePageAr: AiEmployeePageTranslations = {
  hero: {
    badge: 'أنظمة الموظف الذكي',
    titleLine1: 'توقفوا عن رهان النمو على الذاكرة.',
    titleHighlight: 'شغّلوه على أنظمة.',
    hook: 'شركات خدمات راقية · نثبت ونشغّل الاستقبال والمتابعة والحجز — من دون الاعتماد على من تذكر ماذا.',
    primaryCta: 'احجز مراجعة Growth System',
    footnote: 'شراكات محدودة · غالباً جاهز خلال 48 ساعة',
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
  noMoreJust: {
    title: 'ما يفرغ الإيراد بهدوء — وما يحل محله',
    noMoreLabel: 'لا مزيد من',
    noMoreItems: [
      'عملاء محتملين غير مؤهلين يستهلكون وقت الفريق',
      'أدوات مبعثرة بلا صورة تشغيلية واحدة',
      'متابعات يدوية تعتمد على الذاكرة',
      'ردود متأخرة تمنح الفوز لمن يسرع',
      'صفقات ضائعة بين القنوات',
      'تخلف عن المواعيد وصمت بعد أول لمسة',
    ],
    justLabel: 'بل',
    justItems: [
      'محادثات مؤهلة — وقت الفريق للمشترين الجادين فقط',
      'نظام متصل — صورة تشغيلية واحدة يمكن الاعتماد عليها',
      'متابعة تلقائية — لا مزيد من «سأتذكر غداً»',
      'رد أول سريع — تبقى في السباق وبأسلوبك',
      'خيط واحد عبر القنوات — الصفقات لا تضيع عند التسليم',
      'غياب أقل وصمت أقل — تذكيرات واستعادة مدمجة',
    ],
  },
  problem: {
    badge: 'النمط الذي نراه يتكرر',
    title: 'النمو لا يتعثر في الإعلان.',
    titleHighlight: 'يتعثر بعد النقرة.',
    subtitle:
      'عندما يعيش مسار العمل في صناديق البريد والملاحظات والمعرفة الشفهية، تحدث تسرّبات — حتى مع تموضع قوي. العدو ليس «عملاء سيئون». بل نظام ما زال يعتمد على توافر بشري على مدار الساعة.',
    stats: [
      {
        value: '40٪',
        label: 'من الاتصالات دون رد',
        hint: 'الاهتمام المدفوع يضيع إذا لم يلتقط أحد الخيط.',
      },
      {
        value: '78٪',
        label: 'يشتري من يرد أولاً',
        hint: 'السرعة ليست رفاهية — إنها الميزان.',
      },
      {
        value: '5 د',
        label: 'هذه النافذة الحاسمة',
        hint: 'التأخير يعني أن العميل الساخن يتحدث لمنافس.',
      },
    ],
    painCards: [
      {
        title: 'رد بطيء',
        body: 'عميل محتمل ظهراً. ردّتم مساءً. حجزوا عند غيركم.',
      },
      {
        title: 'ضياع السياق',
        body: 'واتساب هنا وبريد هناك. لا أحد يرى القصة كاملة — الثقة لا تتراكم.',
      },
      {
        title: 'متابعة لا تعمل',
        body: '«سأعود غداً». الغد لا يأتي. يذهب الإيراد.',
      },
    ],
    closing: {
      title: 'الفائزون يملكون أنظمة. الباقون يعتمدون على الجهد المتواصل فقط.',
      subtitle: 'نثبّت الطبقة التي لا تنسى — شراكة واحدة لكل سوق عند الالتزام.',
    },
  },
  traditionalFails: {
    badge: 'لماذا «المزيد من البرمجيات» لا يكفي',
    title: 'تسجيل دخول آخر لا يصلح',
    titleHighlight: 'عمليات معطلة.',
    items: [
      {
        title: 'البشر كموزّعين',
        body: 'خط واحد. بريد صوتي بعد الدوام. التوسع = مزيد من التكلفة والتفاوت.',
      },
      {
        title: 'خدمات الرد العامة',
        body: 'تُسجَّل الرسائل ولا تُدفع للنتيجة. لا تأهيل ولا حجز.',
      },
      {
        title: 'روبوتات بلا نتيجة',
        body: 'تجيب عن الأسئلة الشائعة. لا تملك المسار. النية العالية تضيع.',
      },
      {
        title: 'انتشار الأدوات',
        body: 'خمس تبويبات ولا حقيقة واحدة. لا أحد يعرف أي عميل جاهز للدفع.',
      },
      {
        title: 'ثقافة متابعة يدوية',
        body: 'كل تذكير يعتمد على شخص. مرض أو انشغال — تتعثر الصفقات.',
      },
      {
        title: 'لا نظام تشغيل للنمو',
        body: 'التسويق يعد. العمليات لا تحافظ على سرعة المشتري.',
      },
    ],
    closing:
      'نظام ذكي واحد — صوتك وقواعدك — لإبقاء العملاء أطول وتحويل المزيد من العملاء المحتملين والتوسع بثقة.',
  },
  capabilities: {
    badge: 'طبقة التشغيل',
    title: 'ست قدرات.',
    titleHighlight: 'نظام نمو واحد.',
    subtitle:
      'لمقدمي الخدمات الساعين للنمو من دون فوضى — تنظيم كل ما يمس الإيراد: الجذب والتأهيل والحجز والمتابعة والاحتفاظ.',
    items: [
      {
        title: 'رد فوري',
        body: 'كل عميل محتمل يردّ بسرعة وبأسلوبك — تتوقف عن إهدار الفرص للصمت.',
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
        body: 'ثابتة ومهذبة — حتى الحجز أو الانسحاب. لا «نسيت».',
      },
      {
        title: 'قنوات متعددة، عقل واحد',
        body: 'مكالمات وواتساب وبريد — صندوق واحد، حقيقة واحدة، خطوة تالية.',
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
      'لسنا هنا لنسلّم أداة أخرى تراقبونها. ننفّذ المسار ونوصل القنوات ونشغّل النظام معكم — لتقل الاعتماد على ذاكرة الفريق.',
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
      'تريد توسعاً هادئاً — ليس أعلى صوتاً وأعباء وأخطاراً',
      'مستعد لشراكة نظام — لا شراء برمجية جاهزة',
    ],
    notHeading: 'أقل ملاءمة إن',
    notItems: [
      'تريد إبداع إعلانات دون إصلاح العمليات',
      'تحسّن للسعر الأدنى لا للنتائج والاحتفاظ',
      'لا يوجد بيع أو موعد في رحلة المشتري',
      'سرعة الرد ليست عنق زجاجة للإيراد',
      'تريد تسجيل دخول فقط — لا تنفيذ ولا شراكة',
      'غير مستعد لتغيير تدفق العمل بين الفريق والعميل',
    ],
  },
  caseStudy: {
    label: 'دليل',
    title: 'من استقبال مفقود إلى نظام لا ينام — بسرعة.',
    company: 'مركز طبي إقليمي',
    industry: 'رعاية صحية',
    contextLabel: 'السياق',
    challengeLabel: 'التحدي',
    solutionLabel: 'الحل',
    context: '15 ألف دولار شهرياً إعلانات — لكن الاستقبال لم يواكب الحجم ولا السرعة.',
    challenge: 'نحو 40٪ من العملاء المحتملين دون رد آنٍ. مسار بارد. إيراد يتسرّب.',
    solution:
      'نظام ذكي جاهز خلال 18 ساعة — رد وتأهيل وحجز ومتابعة بمنظر تشغيلي واحد.',
    outcomesHeading: 'النتائج',
    results: [
      { metric: '100٪', description: 'كل عميل محتمل يُخدم بسرعة — بخطوة تالية واضحة.' },
      { metric: 'صفر', description: 'لا فجوات «سنعاود الاتصال» في البداية.' },
      { metric: '18س', description: 'من القرار إلى التشغيل — تبدأ النتائج فوراً.' },
      { metric: '85٪', description: 'تحويل أفضل عندما يواكب التوقيت إلحاح المشتري.' },
    ],
  },
  pricing: {
    title: 'شفاف. هادئ. بلا مفاجآت.',
    subtitle:
      'كل شيء ضمن شراكة تُقاس على أنها تستحق عندما يكون الاستثمار في الطلب حقيقياً — بمستوى استحواذ عميل جيد للنظام بأكمله.',
    planName: 'نظام نمو منفّذ معك',
    limitedLabel: 'شراكات محدودة (واحدة لكل سوق عند الالتزام)',
    setupFee: '2,000 $',
    setupLabel: 'إعداد لمرة واحدة',
    monthlyLabel: 'شهري',
    price: '500 $',
    period: '/شهر',
    note: 'إذا استثمرت في الطلب، الحساب بسيط: احمِ الإيراد الذي تدفع أصلاً لخلقه.',
    cta: 'احجز مراجعة Growth System',
  },
  finalCta: {
    badge: 'شراكات محدودة',
    title: 'توقف عن رهان النمو على',
    titleHighlight: 'ذاكرة الموظفين.',
    subtitle:
      'تبقى مقاعد شراكة محدودة. احجز مراجعة Growth System — نرسم الاختناقات ونوضح ما يستبدله النظام الذكي أولاً ونؤكد الملاءمة قبل المضي.',
    primaryCta: 'احجز مراجعة Growth System',
    bullet1: 'خطوة تالية واضحة — المراجعة',
    bullet2: 'حوار جاد وسريع (نحو 30 دقيقة)',
    bullet3: 'نشارك فقط حيث يمكن قياس الأثر',
  },
}
