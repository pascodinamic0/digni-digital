/**
 * AI Employee / ai receptionist page, full StoryBrand + growth operator copy.
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
 clientOutcomes: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 expandTechnical: string
 collapseTechnical: string
 steps: [OutcomeStep, OutcomeStep, OutcomeStep]
 }
 caseStudy: {
 label: string
 title: string
 titleHighlight: string
 subtitle: string
 company: string
 industry: string
 timeline: string
 before: { label: string; metric: string; description: string }
 after: { label: string; metric: string; description: string }
 contextLabel: string
 challengeLabel: string
 solutionLabel: string
 context: string
 challenge: string
 solution: string
 testimonial: string
 testimonialAuthor: string
 testimonialRole: string
 outcomesHeading: string
 results: [ResultLine, ResultLine, ResultLine, ResultLine]
 expandStory: string
 collapseStory: string
 }
 pricing: {
 title: string
 titleHighlight: string
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
 /** Short promo line (e.g. limited time fee removal). */
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
 /** Hero/pricing one liner after the count, e.g. "slots left in {month} · max 5/month" */
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
type OutcomeStep = { title: string; body: string; technical: [string, string, string] }

type StatTriple = { value: string; label: string; hint: string }
type CapItem = { title: string; body: string }
type ResultLine = { metric: string; description: string }

export const aiEmployeePageEn: AiEmployeePageTranslations = {
 hero: {
 badge: 'Service growth infrastructure',
 titleLine1: 'Install once.',
 titleHighlight: 'Never chase DMs, booking links, or follow ups again.',
 hook:
 'One done for you system captures, qualifies, books, upsells, and follows up on every paid lead while you run the service.',
 primaryCta: 'Take the 2 Minute Fit Check',
 footnote: '15 qualified appointments in 30 days, or we work free until you hit it. We take the risk.',
 },
 valueBadges: {
 ariaLabel: 'Speed, deployment, and effort guarantees',
 responseTime: '<2s Response Time',
 setupSpeed: '48 Hour Live Deployment',
 zeroEffort: 'Zero Manual Entry',
 },
 dreamOutcome: {
 badge: 'The dream outcome',
 title: 'Same 100 leads. A different scoreboard.',
 subtitle:
 'The leaky bucket closes ~1 in 100. The loop closes 95, with referrals compounding the batch.',
 beforeLabel: 'The leaky bucket',
 beforeMetric: '~1 / 100',
 beforeHint: 'Closed after manual chaos, voicemail, and slow follow up.',
 arrowLabel: 'With the loop',
 afterLabel: 'The loop',
 afterMetric: '95 / 100',
 referralLine: '+23 referrals from the same batch',
 afterHint: 'Captured, qualified, booked, and followed up, 24/7.',
 },
 denominator: {
 badge: 'Value equation · denominator',
 title: 'Instant speed. Near zero effort.',
 subtitle:
 'We shrink time delay and effort sacrifice, so the system runs while you run the business.',
 pillarSpeed: 'Instant response',
 pillarSpeedHint: 'Under 2 seconds on every inbound touch. No voicemail lottery.',
 pillarDeploy: '48 hour live deployment',
 pillarDeployHint: 'We implement, connect channels, and go live, not another tool to babysit.',
 pillarEffort: 'Frictionless control',
 pillarEffortHint: 'Mobile app + automations. You approve; the loop executes.',
 },
 mobileApp: {
 title: 'See every lead and reply from your phone, anytime.',
 bullet1: 'Get real time notifications straight to your phone',
 bullet2: 'Chat with your clients and leads right from the app',
 tagline: 'Never miss another opportunity again.',
 imageAlt: 'AI Employee mobile app on a phone showing pipeline metrics and recent activity',
 appStoreHref: 'https://apps.apple.com/',
 playStoreHref: 'https://play.google.com/store',
 appStoreAriaLabel: 'Download on the App Store',
 playStoreAriaLabel: 'Get it on Google Play',
 },
 problem: {
 badge: 'The problem',
 title: 'You pay for leads.',
 titleHighlight: 'Then most never get a reply on time.',
 subtitle:
 'People reach out through your ads, website, texts, and phone, while your team is busy on the job. Nobody answers fast enough. The lead moves on. You keep paying for clicks, but the booking goes to whoever replied first.',
 stats: [
 {
 value: '40%',
 label: 'of inbound leads never get a timely reply',
 hint: 'Typical when intake runs on staff memory instead of one connected system.',
 },
 {
 value: '5 min',
 label: 'is when buyer intent peaks',
 hint: 'Reply inside this window or qualification odds drop fast (HBR lead response research).',
 },
 {
 value: '78%',
 label: 'choose whoever answers first',
 hint: 'The competitor wins the conversation while your team is still on the job.',
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
 body: 'Every lead gets a fast, on brand reply, so you stop donating wins to silence.',
 },
 {
 title: 'Smart qualification',
 body: 'The right questions so only serious buyers reach your calendar, fewer tire kickers, more conversations that close.',
 },
 {
 title: 'Auto booking',
 body: 'They pick a time. Your calendar fills. No “who owns this thread?” handoffs.',
 },
 {
 title: 'Follow up that runs',
 body: 'Persistent, polite, consistent, until they book or opt out. No more “I forgot.”',
 },
 {
 title: 'Multi channel, one brain',
 body: 'Calls, WhatsApp, email, one inbox, one truth, one next step.',
 },
 {
 title: 'Revenue recovery',
 body: 'Wake cold interest, tighten no shows, and nudge toward repeat revenue, not one off wins.',
 },
 ],
 },
 timeToValue: {
 badge: 'Time to value',
 title: 'Live in 48 hours',
 subtitle:
 'Done for you, not DIY. We connect your channels and run capture, qualify, book, and follow up on every paid lead.',
 statBig: '48h',
 statSmall: 'From decision to operational',
 },
 qualification: {
 badge: 'Fit matters',
 title: 'Built for',
 titleHighlight: 'high end service businesses',
 forHeading: 'Who this is for',
 forItems: [
 'You sell a premium service and care about retention, not just leads',
 'You run paid acquisition (or plan to) and need intake to keep pace',
 'You sell through appointments, consults, or high trust conversations',
 'Growth feels chaotic: tools, people, and follow up don’t line up',
 'You want scaling that feels calm, not louder, busier, riskier',
 'You’re willing to partner on a system, not buy shelf ware',
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
 clientOutcomes: {
 badge: 'Outcomes',
 title: 'Three outcomes.',
 titleHighlight: 'One system.',
 subtitle:
 'Capture every inquiry. Convert qualified demand into appointments. Grow with reviews and follow up.',
 expandTechnical: 'Tap a step to see how it works under the hood',
 collapseTechnical: 'Tap again to collapse details',
 steps: [
 {
 title: 'Capture',
 body: 'Every inquiry receives a response.',
 technical: [
 'Instant reply on web, SMS, WhatsApp, Instagram, and phone',
 'One inbox, no scattered threads or voicemail lottery',
 'Leads logged automatically with source and intent',
 ],
 },
 {
 title: 'Convert',
 body: 'Qualified prospects become appointments.',
 technical: [
 'Smart qualification before your team gets involved',
 'Self serve booking into your live calendar',
 'Confirmations and reminders that cut no shows',
 ],
 },
 {
 title: 'Grow',
 body: 'Reviews, referrals, and follow up create more revenue.',
 technical: [
 'Persistent follow up until they book or opt out',
 'Review requests after every completed visit',
 'Referral prompts that compound the same lead batch',
 ],
 },
 ],
 },
 caseStudy: {
 label: 'Proof',
 title: 'A regional clinic stopped leaking',
 titleHighlight: '$15k in ad spend every month.',
 subtitle:
 'Real numbers from a healthcare partner, what broke in intake, what changed in 18 hours, and what stayed fixed after go live.',
 company: 'Regional Medical Center',
 industry: 'Healthcare',
 timeline: 'Live in 18 hours',
 before: {
 label: 'Before',
 metric: '40%',
 description: 'Of leads got no timely response. Ad spend kept burning while the pipeline cooled.',
 },
 after: {
 label: 'After',
 metric: '100%',
 description: 'Every inquiry answered fast, with a clear next step, around the clock.',
 },
 contextLabel: 'Context',
 challengeLabel: 'Challenge',
 solutionLabel: 'Solution',
 context: '$15k/month in ads, but intake couldn’t keep up with volume or speed.',
 challenge: 'Roughly 40% of leads weren’t getting a timely response. Pipeline cooled. Revenue leaked.',
 solution:
 'A done with you intelligent system live in 18 hours, answering, qualifying, booking, and following up from one operating view.',
 testimonial:
 'We were spending $15k a month on ads and still losing people in the first mile. Now every lead gets answered immediately, and our team finally sees one pipeline.',
 testimonialAuthor: 'Operations Director',
 testimonialRole: 'Regional Medical Center',
 outcomesHeading: 'Measured outcomes',
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
 'Solves the next problems you would hit after install, no show recovery, reputation, and CRM sync, at no extra cost.',
 includedLabel: 'Included',
 totalValue: '$2,997 in bonuses',
 items: [
 {
 name: "The 'No Show' Recovery System",
 description: 'Automated SMS and email reminder sequences when calls go unanswered or appointments slip.',
 value: '$1,500 Value',
 },
 {
 name: 'The 5 Star Reputation Engine',
 description: 'Automated Google and Facebook review collection after successful appointments.',
 value: '$997 Value',
 },
 {
 name: 'The CRM Integration Vault',
 description: '5,000+ app connectors for zero manual entry data sync across your stack.',
 value: '$500 Value',
 },
 ],
 },
 guarantee: {
 badge: 'Conditional service guarantee',
 title: 'We take the risk, not you.',
 body: '15 qualified appointments in 30 days, or we work free until you hit it.',
 },
 scarcity: {
 prefix: 'Limited to 5 premium partners per month.',
 currentlyLabel: 'Currently:',
 spotsSuffix: 'spots remaining for',
 inlineSuffix: 'premium slots left in {month} · max 5/month',
 },
 pricing: {
 title: 'See the leak',
 titleHighlight: 'before you spend a dollar.',
 subtitle: 'Two minute fit check. One report with the leak, the upside, and all in cost, then you decide.',
 assessmentNote:
 'Your personalized report spells out what slow follow up is costing you, what recovery looks like with the loop live, and the all in investment, before you pay.',
 assessmentCta: 'Run the fit assessment',
 investmentNote: 'Dollar amounts unlock in your results, not on this page.',
 planName: 'AI Booking Loop',
 limitedLabel: 'Limited partner slots',
 setupFee: '$2,000',
 setupFeeWaivedDisplay: '$0',
 setupLabel: 'Setup',
 setupFeePromo: 'Setup waived, ends in',
 monthlyLabel: 'Monthly',
 price: '$500',
 period: '/mo',
 cta: 'Book a fit call',
 },
 finalCta: {
 title: 'Stop losing leads',
 titleHighlight: 'to silence.',
 subtitle: 'Book a 30 minute fit call. We map the leak and confirm the loop is right for you.',
 primaryCta: 'Book a fit call',
 },
}

export const aiEmployeePageFr: AiEmployeePageTranslations = {
 hero: {
 badge: 'Infrastructure de croissance pour services',
 titleLine1: 'Une fois installée.',
 titleHighlight: 'Plus jamais de répondre aux DM, envoyer un lien, ni relancer à la main.',
 hook:
 'La seule boucle clé en main qui capte, qualifie, réserve, relance et fait monter le panier sur chaque lead payant pendant que vous livrez le service.',
 primaryCta: 'Faire le test de compatibilité (2 min)',
 footnote:
 '15 RDV qualifiés en 30 jours, sinon on travaille gratuitement jusqu’au seuil. Le risque est pour nous.',
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
 subtitle: 'La fuite conclut ~1 sur 100. La boucle en conclut 95, avec des parrainages qui composent.',
 beforeLabel: 'La fuite',
 beforeMetric: '~1 / 100',
 beforeHint: 'Conclusion après chaos manuel, messagerie vocale et lenteur.',
 arrowLabel: 'Avec la boucle',
 afterLabel: 'La boucle',
 afterMetric: '95 / 100',
 referralLine: '+23 parrainages sur le même lot',
 afterHint: 'Capté, qualifié, réservé et relancé, 24/7.',
 },
 denominator: {
 badge: 'Équation de valeur · dénominateur',
 title: 'Vitesse instantanée. Effort quasi nul.',
 subtitle: 'Nous réduisons le délai et l’effort, le système tourne pendant que vous gérez l’entreprise.',
 pillarSpeed: 'Réponse instantanée',
 pillarSpeedHint: 'Moins de 2 secondes sur chaque entrée. Fini la loterie de la messagerie vocale.',
 pillarDeploy: 'Déploiement en 48 h',
 pillarDeployHint: 'Nous implémentons et mettons en ligne, pas un outil de plus à surveiller.',
 pillarEffort: 'Pilotage sans friction',
 pillarEffortHint: 'App mobile + automatisations. Vous validez ; la boucle exécute.',
 },
 mobileApp: {
 title: 'Voyez chaque lead et répondez depuis votre téléphone, à tout moment.',
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
 badge: 'Le problème',
 title: 'Vous payez pour des leads.',
 titleHighlight: 'Puis la plupart n’obtiennent pas de réponse à temps.',
 subtitle:
 'Les prospects vous contactent via vos pubs, votre site, vos SMS et votre téléphone, pendant que l’équipe est sur le terrain. Personne ne répond assez vite. Le prospect passe à un concurrent. Vous continuez à payer la pub, mais le contrat part à celui qui a répondu en premier.',
 stats: [
 {
 value: '40 %',
 label: 'des leads sans réponse à temps',
 hint: 'Typique quand l’intake repose sur la mémoire de l’équipe, pas sur un système connecté.',
 },
 {
 value: '5 min',
 label: 'c’est le pic d’intention d’achat',
 hint: 'Répondez dans cette fenêtre ou les chances de qualifier chutent (étude HBR).',
 },
 {
 value: '78 %',
 label: 'choisissent celui qui répond en premier',
 hint: 'Le concurrent gagne le fil pendant que votre équipe est encore en prestation.',
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
 title: 'Prise de rendez vous auto',
 body: 'Ils choisissent un créneau. Votre agenda se remplit. Fini les transferts flous.',
 },
 {
 title: 'Relances qui tournent',
 body: 'Persistantes, polies, cohérentes, jusqu’à réservation ou refus. Plus de « j’ai oublié ».',
 },
 {
 title: 'Multi canal, un cerveau',
 body: 'Appels, WhatsApp, mail, une boîte, une vérité, une prochaine étape.',
 },
 {
 title: 'Récupération de revenu',
 body: 'Réchauffer l’intérêt froid, réduire les lapins, pousser vers la récurrence, pas le one shot.',
 },
 ],
 },
 timeToValue: {
 badge: 'Délai jusqu’à la valeur',
 title: 'En ligne en 48 h',
 subtitle:
 'Clé en main, pas du bricolage. Nous connectons vos canaux et gérons capture, qualification, réservation et relance sur chaque lead payant.',
 statBig: '48 h',
 statSmall: 'De la décision à l’opérationnel',
 },
 qualification: {
 badge: 'Le fit compte',
 title: 'Conçu pour les',
 titleHighlight: 'entreprises de services premium',
 forHeading: 'Pour qui c’est fait',
 forItems: [
 'Vous vendez un service premium et la rétention compte autant que les leads',
 'Vous faites de l’acquisition payante (ou prévoyez) et l’intake doit suivre',
 'Vous vendez par rendez vous, consults ou conversations à forte confiance',
 'La croissance est chaotique : outils, gens et relances ne s’alignent pas',
 'Vous voulez grandir calmement, pas plus fort, plus chargé, plus risqué',
 'Vous acceptez un partenariat sur un système, pas un logiciel en rayon',
 ],
 notHeading: 'Moins adapté si',
 notItems: [
 'Vous voulez de la créa pub sans refondre les opérations',
 'Vous cherchez le prix le plus bas, pas les résultats et la rétention',
 'Aucune conversation de vente ou de rendez vous dans votre parcours',
 'Le délai de réponse n’est pas un frein au revenu',
 'Vous voulez seulement un login, pas l’implémentation et le partenariat',
 'Vous n’êtes pas prêt à changer le flux travail / client',
 ],
 },
 clientOutcomes: {
 badge: 'Résultats',
 title: 'Trois résultats.',
 titleHighlight: 'Un système.',
 subtitle:
 'Capturer chaque demande. Convertir la demande qualifiée en rendez vous. Grandir avec avis et relances.',
 expandTechnical: 'Touchez une étape pour voir le fonctionnement',
 collapseTechnical: 'Touchez à nouveau pour réduire',
 steps: [
 {
 title: 'Capturer',
 body: 'Chaque demande reçoit une réponse.',
 technical: [
 'Réponse instantanée web, SMS, WhatsApp, Instagram et téléphone',
 'Une boîte, pas de fils éparpillés ni de loterie vocale',
 'Leads enregistrés automatiquement avec source et intention',
 ],
 },
 {
 title: 'Convertir',
 body: 'Les prospects qualifiés deviennent des rendez vous.',
 technical: [
 'Qualification intelligente avant l’équipe',
 'Prise de rendez vous en libre service sur votre calendrier',
 'Confirmations et rappels qui réduisent les lapins',
 ],
 },
 {
 title: 'Grandir',
 body: 'Avis, parrainages et relances génèrent plus de revenu.',
 technical: [
 'Relance persistante jusqu’à réservation ou refus',
 'Demandes d’avis après chaque visite',
 'Invitations parrainage qui composent le même lot de leads',
 ],
 },
 ],
 },
 caseStudy: {
 label: 'Preuve',
 title: 'Une clinique régionale a stoppé la fuite de',
 titleHighlight: '15 k$/mois de budget pub.',
 subtitle:
 'Chiffres réels d’un partenaire santé, ce qui bloquait à l’intake, ce qui a changé en 18 h, et ce qui tient après la mise en ligne.',
 company: 'Centre médical régional',
 industry: 'Santé',
 timeline: 'En ligne en 18 h',
 before: {
 label: 'Avant',
 metric: '40 %',
 description: 'Des leads sans réponse rapide. La pub tournait pendant que le pipeline refroidissait.',
 },
 after: {
 label: 'Après',
 metric: '100 %',
 description: 'Chaque demande traitée vite, avec une prochaine étape claire, 24 h/24.',
 },
 contextLabel: 'Contexte',
 challengeLabel: 'Défi',
 solutionLabel: 'Solution',
 context: '15 k$/mois de pub, mais l’intake ne suivait ni le volume ni la vitesse.',
 challenge: 'Environ 40 % des leads sans réponse rapide. Pipeline tiède. Revenu qui fuit.',
 solution:
 'Système intelligent clé en main en 18 h, réponse, qualification, booking et relances depuis une vue unique.',
 testimonial:
 'On dépensait 15 k$/mois en pub et on perdait encore des gens dès la première étape. Maintenant chaque lead est traité tout de suite, et l’équipe voit enfin un seul pipeline.',
 testimonialAuthor: 'Directeur des opérations',
 testimonialRole: 'Centre médical régional',
 outcomesHeading: 'Résultats mesurés',
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
 name: 'Système anti no show',
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
 title: 'Nous prenons le risque, pas vous.',
 body: '15 RDV qualifiés en 30 jours, sinon nous travaillons gratuitement jusqu’à atteindre ce seuil.',
 },
 scarcity: {
 prefix: 'Limité à 5 partenaires premium par mois.',
 currentlyLabel: 'Actuellement :',
 spotsSuffix: 'places restantes pour',
 inlineSuffix: 'places premium en {month} · max 5/mois',
 },
 pricing: {
 title: 'Voyez la fuite',
 titleHighlight: 'avant de dépenser un dollar.',
 subtitle:
 'Évaluation fit en deux minutes. Un rapport : fuite, potentiel, coût total, puis vous décidez.',
 assessmentNote:
 'Votre rapport détaille ce que les lenteurs vous coûtent, ce que la reprise avec la boucle peut rapporter, et l’investissement global, avant tout paiement.',
 assessmentCta: 'Lancer l’évaluation fit',
 investmentNote: 'Les montants s’affichent dans vos résultats, pas sur cette page.',
 planName: 'Boucle de réservation IA',
 limitedLabel: 'Places partenaires limitées',
 setupFee: '2 000 $',
 setupFeeWaivedDisplay: '0 $',
 setupLabel: 'Mise en place',
 setupFeePromo: 'Mise en place offerte, fin dans',
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
 badge: 'Wachstums Infrastruktur für Services',
 titleLine1: 'Einmal installiert.',
 titleHighlight: 'Nie wieder DMs beantworten, Buchungslinks schicken oder nachfassen.',
 hook:
 'Der einzige Done for you Loop, der jeden bezahlten Lead erfasst, qualifiziert, bucht, nachfasst und Upsell fährt, während Sie den Service liefern.',
 primaryCta: '2 Minuten Passungstest starten',
 footnote:
 '15 qualifizierte Termine in 30 Tagen, oder wir arbeiten gratis, bis Sie sie haben. Das Risiko tragen wir.',
 },
 valueBadges: {
 ariaLabel: 'Geschwindigkeits und Setup Garantien',
 responseTime: '<2s Antwortzeit',
 setupSpeed: 'Live in 48 Stunden',
 zeroEffort: 'Keine manuelle Eingabe',
 },
 dreamOutcome: {
 badge: 'Das Traumergebnis',
 title: 'Dieselben 100 Leads. Andere Anzeigetafel.',
 subtitle: 'Das Leck schließt ~1 von 100. Der Loop schließt 95, mit Empfehlungen obendrauf.',
 beforeLabel: 'Das Leck',
 beforeMetric: '~1 / 100',
 beforeHint: 'Abschluss nach manuellem Chaos, Mailbox und langsamen Nachfassen.',
 arrowLabel: 'Mit dem Loop',
 afterLabel: 'Der Loop',
 afterMetric: '95 / 100',
 referralLine: '+23 Empfehlungen aus derselben Charge',
 afterHint: 'Erfasst, qualifiziert, gebucht und nachverfolgt, 24/7.',
 },
 denominator: {
 badge: 'Wertgleichung · Nenner',
 title: 'Sofortige Geschwindigkeit. Fast null Aufwand.',
 subtitle: 'Wir verkürzen Verzögerung und Aufwand, das System läuft, während Sie das Geschäft führen.',
 pillarSpeed: 'Sofortige Antwort',
 pillarSpeedHint: 'Unter 2 Sekunden auf jeden Eingang. Kein Mailbox Glücksspiel.',
 pillarDeploy: 'Live in 48 Stunden',
 pillarDeployHint: 'Wir implementieren und schalten live, kein weiteres Tool zum Hüten.',
 pillarEffort: 'Reibungslose Steuerung',
 pillarEffortHint: 'Mobile App + Automationen. Sie freigeben; der Loop arbeitet.',
 },
 mobileApp: {
 title: 'Jeden Lead sehen und vom Smartphone antworten, jederzeit.',
 bullet1: 'Echtzeit Benachrichtigungen direkt auf Ihr Smartphone',
 bullet2: 'Chatten Sie mit Kunden und Leads direkt in der App',
 tagline: 'Verpassen Sie keine Chance mehr.',
 imageAlt: 'AI Employee App auf dem Smartphone mit Pipeline Kennzahlen und Aktivität',
 appStoreHref: 'https://apps.apple.com/',
 playStoreHref: 'https://play.google.com/store',
 appStoreAriaLabel: 'Im App Store laden',
 playStoreAriaLabel: 'Bei Google Play laden',
 },
 problem: {
 badge: 'Das Problem',
 title: 'Sie zahlen für Leads.',
 titleHighlight: 'Und die meisten erhalten keine rechtzeitige Antwort.',
 subtitle:
 'Interessenten melden sich über Anzeigen, Website, SMS und Telefon, während Ihr Team auf dem Auftrag ist. Niemand antwortet schnell genug. Der Lead geht zum Wettbewerber. Sie zahlen weiter für Klicks, aber der Auftrag geht an den, der zuerst geantwortet hat.',
 stats: [
 {
 value: '40%',
 label: 'der Leads ohne zeitnahe Antwort',
 hint: 'Typisch, wenn Intake im Kopf der Mitarbeiter statt in einem System lebt.',
 },
 {
 value: '5 Min',
 label: 'ist das Fenster höchster Kaufabsicht',
 hint: 'Antworten Sie darin, sonst sinken Qualifizierungs Chancen stark (HBR Studie).',
 },
 {
 value: '78%',
 label: 'wählen, wer zuerst antwortet',
 hint: 'Der Wettbewerber gewinnt das Gespräch, während Ihr Team noch im Einsatz ist.',
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
 title: 'Auto Booking',
 body: 'Sie wählen einen Slot. Der Kalender füllt sich. Keine unklaren Übergaben.',
 },
 {
 title: 'Nachfassen, das läuft',
 body: 'Beharrlich, höflich, konsistent, bis Buchung oder Opt out. Schluss mit „hätte ich mal“.',
 },
 {
 title: 'Multi Kanal, ein Gehirn',
 body: 'Anrufe, WhatsApp, Email, ein Posteingang, eine Wahrheit, ein nächster Schritt.',
 },
 {
 title: 'Umsatz Rückgewinnung',
 body: 'Kalte Interessen reaktivieren, No Shows straffen, Wiederholungsumsatz statt Einmalverkauf.',
 },
 ],
 },
 timeToValue: {
 badge: 'Zeit bis zum Nutzen',
 title: 'Live in 48 Stunden',
 subtitle:
 'Done for you, kein DIY. Wir verbinden Ihre Kanäle und übernehmen Erfassung, Qualifizierung, Buchung und Follow up für jeden bezahlten Lead.',
 statBig: '48h',
 statSmall: 'Von Entscheidung bis Betrieb',
 },
 qualification: {
 badge: 'Fit ist wichtig',
 title: 'Gebaut für',
 titleHighlight: 'Premium Dienstleister',
 forHeading: 'Für wen das gedacht ist',
 forItems: [
 'Sie verkaufen ein Premium Angebot und denken an Bindung, nicht nur Leads',
 'Sie fahren bezahlte Akquise (oder planen) und die Annahme muss mithalten',
 'Sie verkaufen über Termine, Beratungen oder vertrauensintensive Gespräche',
 'Wachstum fühlt sich chaotisch an: Tools, Menschen, Nachfassen passen nicht zusammen',
 'Sie wollen ruhig skalieren, nicht lauter, busier, riskanter',
 'Sie wollen ein System Partnerschaft, kein Regal Softwarekauf',
 ],
 notHeading: 'Weniger passend',
 notItems: [
 'Sie wollen Ad Kreativ ohne Operations zu fixen',
 'Sie optimieren auf den niedrigsten Preis, nicht auf Ergebnis und Retention',
 'Kein Vertriebsgespräch oder Termin in Ihrer Buyer Journey',
 'Reaktionszeit ist kein Umsatz Engpass',
 'Sie wollen nur Login, nicht Implementierung und Partnerschaft',
 'Sie sind nicht bereit, Arbeitsfluss zwischen Team und Kunde zu ändern',
 ],
 },
 clientOutcomes: {
 badge: 'Ergebnisse',
 title: 'Drei Ergebnisse.',
 titleHighlight: 'Ein System.',
 subtitle:
 'Jede Anfrage erfassen. Qualifizierte Nachfrage in Termine verwandeln. Mit Bewertungen und Nachfassen wachsen.',
 expandTechnical: 'Schritt antippen für technische Details',
 collapseTechnical: 'Erneut antippen zum Einklappen',
 steps: [
 {
 title: 'Erfassen',
 body: 'Jede Anfrage erhält eine Antwort.',
 technical: [
 'Sofortantwort auf Web, SMS, WhatsApp, Instagram und Telefon',
 'Ein Posteingang, keine verstreuten Threads oder Mailbox Lotterie',
 'Leads automatisch mit Quelle und Absicht protokolliert',
 ],
 },
 {
 title: 'Konvertieren',
 body: 'Qualifizierte Interessenten werden zu Terminen.',
 technical: [
 'Intelligente Qualifizierung vor Ihrem Team',
 'Self Service Buchung in Ihren Live Kalender',
 'Bestätigungen und Erinnerungen gegen No Shows',
 ],
 },
 {
 title: 'Wachsen',
 body: 'Bewertungen, Empfehlungen und Nachfassen schaffen mehr Umsatz.',
 technical: [
 'Beharrliches Nachfassen bis Buchung oder Opt out',
 'Bewertungsanfragen nach jedem Besuch',
 'Empfehlungsimpulse, die denselben Lead Stapel vervielfachen',
 ],
 },
 ],
 },
 caseStudy: {
 label: 'Beweis',
 title: 'Eine regionale Klinik stoppte das Leck von',
 titleHighlight: '15k$/Monat Werbebudget.',
 subtitle:
 'Echte Zahlen eines Gesundheitspartners, was in der Annahme brach, was sich in 18 Stunden änderte und nach Go live hält.',
 company: 'Regionales medizinisches Zentrum',
 industry: 'Gesundheit',
 timeline: 'In 18 Stunden live',
 before: {
 label: 'Vorher',
 metric: '40%',
 description: 'Der Leads ohne zeitnahe Antwort. Werbung lief, während die Pipeline abkühlte.',
 },
 after: {
 label: 'Nachher',
 metric: '100%',
 description: 'Jede Anfrage schnell beantwortet, mit klarem nächsten Schritt, rund um die Uhr.',
 },
 contextLabel: 'Kontext',
 challengeLabel: 'Herausforderung',
 solutionLabel: 'Lösung',
 context: '15k$/Monat Werbung, aber die Annahme kam weder mit Volumen noch Tempo nach.',
 challenge: 'Etwa 40 % der Leads ohne zeitnahe Antwort. Pipeline kühlte. Umsatz floss ab.',
 solution:
 'Intelligentes System in 18 Stunden live, antworten, qualifizieren, buchen und nachfassen aus einer Betriebsansicht.',
 testimonial:
 'Wir gaben 15k$/Monat für Werbung aus und verloren trotzdem Leute in der ersten Meile. Jetzt wird jeder Lead sofort beantwortet, und das Team sieht endlich eine Pipeline.',
 testimonialAuthor: 'Betriebsleiter',
 testimonialRole: 'Regionales medizinisches Zentrum',
 outcomesHeading: 'Gemessene Ergebnisse',
 results: [
 { metric: '100%', description: 'Jeder Lead schnell bedient, mit klarem nächsten Schritt.' },
 { metric: 'Null', description: 'Keine „rufen wir zurück" Lücken mehr am Anfang.' },
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
 'Keine Add ons. Sie sind bei jeder Premium Partnerschaft dabei, damit Ihr Loop ab Tag 1 erfasst, konvertiert und skaliert.',
 includedLabel: 'Inklusive',
 totalValue: '2.997 $ Bonus',
 items: [
 {
 name: 'No Show Wiederherstellung',
 description: 'Automatische SMS und Email Sequenzen bei verpassten Anrufen oder Terminen.',
 value: 'Wert 1.500 $',
 },
 {
 name: '5 Sterne Reputation Engine',
 description: 'Automatische Google und Facebook Bewertungen nach erfolgreichem Abschluss.',
 value: 'Wert 997 $',
 },
 {
 name: 'CRM Integrations Vault',
 description: '5.000+ App Connectors ohne manuelle Dateneingabe.',
 value: 'Wert 500 $',
 },
 ],
 },
 guarantee: {
 badge: 'Bedingte Service Garantie',
 title: 'Wir tragen das Risiko, nicht Sie.',
 body: '15 qualifizierte Termine in 30 Tagen, sonst arbeiten wir kostenlos, bis Sie es schaffen.',
 },
 scarcity: {
 prefix: 'Max. 5 Premium Partner pro Monat.',
 currentlyLabel: 'Aktuell:',
 spotsSuffix: 'Plätze frei für',
 inlineSuffix: 'Premium Plätze in {month} · max. 5/Monat',
 },
 pricing: {
 title: 'Sehen Sie das Leck',
 titleHighlight: 'bevor Sie einen Dollar ausgeben.',
 subtitle:
 'Zweiminütiges Fit Assessment. Ein Report: Leck, Potenzial, Gesamtkosten, dann entscheiden Sie.',
 assessmentNote:
 'Ihr Report zeigt, was langsames Follow up kostet, was mit aktivem Loop möglich ist und die Gesamtinvestition, vor der Zahlung.',
 assessmentCta: 'Fit Assessment starten',
 investmentNote: 'Beträge sehen Sie in den Ergebnissen, nicht hier.',
 planName: 'KI Buchungs Loop',
 limitedLabel: 'Begrenzte Partnerplätze',
 setupFee: '2.000 $',
 setupFeeWaivedDisplay: '0 $',
 setupLabel: 'Einrichtung',
 setupFeePromo: 'Einrichtung entfällt, endet in',
 monthlyLabel: 'Monatlich',
 price: '500 $',
 period: '/Monat',
 cta: 'Fit Call buchen',
 },
 finalCta: {
 title: 'Keine Leads mehr',
 titleHighlight: 'im Stille Modus.',
 subtitle: 'Buchen Sie einen 30 Minuten Fit Call. Wir kartieren das Leck und prüfen, ob der Loop passt.',
 primaryCta: 'Fit Call buchen',
 },
}

export const aiEmployeePageEs: AiEmployeePageTranslations = {
 hero: {
 badge: 'Infraestructura de crecimiento para servicios',
 titleLine1: 'Instálalo una vez.',
 titleHighlight: 'Nunca más contestar DMs, mandar enlaces de reserva ni perseguir seguimientos.',
 hook:
 'El único loop llave en mano que captura, califica, agenda, hace upsell y da seguimiento a cada lead pagado mientras tú entregas el servicio.',
 primaryCta: 'Hacer el test de compatibilidad (2 min)',
 footnote:
 '15 citas calificadas en 30 días, o trabajamos gratis hasta lograrlas. El riesgo es nuestro.',
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
 subtitle: 'La fuga cierra ~1 de 100. El loop cierra 95, con referidos que componen.',
 beforeLabel: 'La fuga',
 beforeMetric: '~1 / 100',
 beforeHint: 'Cierre tras caos manual, buzón y seguimiento lento.',
 arrowLabel: 'Con el loop',
 afterLabel: 'El loop',
 afterMetric: '95 / 100',
 referralLine: '+23 referidos del mismo lote',
 afterHint: 'Capturado, calificado, agendado y seguido, 24/7.',
 },
 denominator: {
 badge: 'Ecuación de valor · denominador',
 title: 'Velocidad instantánea. Esfuerzo casi cero.',
 subtitle: 'Reducimos retraso y esfuerzo, el sistema corre mientras usted dirige el negocio.',
 pillarSpeed: 'Respuesta instantánea',
 pillarSpeedHint: 'Menos de 2 segundos en cada entrada. Sin lotería del buzón.',
 pillarDeploy: 'Despliegue en 48 horas',
 pillarDeployHint: 'Implementamos y activamos, no otra herramienta que vigilar.',
 pillarEffort: 'Control sin fricción',
 pillarEffortHint: 'App móvil + automatizaciones. Usted aprueba; el loop ejecuta.',
 },
 mobileApp: {
 title: 'Vea cada lead y responda desde su teléfono, en cualquier momento.',
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
 badge: 'El problema',
 title: 'Pagas por leads.',
 titleHighlight: 'Y casi nadie recibe respuesta a tiempo.',
 subtitle:
 'Los prospectos te contactan por anuncios, web, SMS y teléfono, mientras tu equipo está en el trabajo. Nadie responde a tiempo. El lead se va con la competencia. Sigues pagando anuncios, pero la reserva se la lleva quien contestó primero.',
 stats: [
 {
 value: '40%',
 label: 'de leads sin respuesta a tiempo',
 hint: 'Típico cuando la captación depende de la memoria del equipo, no de un sistema conectado.',
 },
 {
 value: '5 min',
 label: 'es cuando la intención de compra es máxima',
 hint: 'Responde en esa ventana o caen las probabilidades de calificar (estudio HBR).',
 },
 {
 value: '78%',
 label: 'eligen a quien responde primero',
 hint: 'El competidor gana la conversación mientras tu equipo sigue en el trabajo.',
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
 'Hecho para usted, no DIY. Conectamos sus canales y ejecutamos captura, calificación, reserva y seguimiento en cada lead pagado.',
 statBig: '48h',
 statSmall: 'De la decisión a operativo',
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
 clientOutcomes: {
 badge: 'Resultados',
 title: 'Tres resultados.',
 titleHighlight: 'Un sistema.',
 subtitle:
 'Captar cada consulta. Convertir demanda calificada en citas. Crecer con reseñas y seguimiento.',
 expandTechnical: 'Toque un paso para ver cómo funciona por dentro',
 collapseTechnical: 'Toque de nuevo para contraer',
 steps: [
 {
 title: 'Captar',
 body: 'Cada consulta recibe respuesta.',
 technical: [
 'Respuesta instantánea en web, SMS, WhatsApp, Instagram y teléfono',
 'Una bandeja, sin hilos dispersos ni lotería de buzón',
 'Leads registrados automáticamente con fuente e intención',
 ],
 },
 {
 title: 'Convertir',
 body: 'Los prospectos calificados se convierten en citas.',
 technical: [
 'Calificación inteligente antes de su equipo',
 'Reserva autoservicio en su calendario en vivo',
 'Confirmaciones y recordatorios que reducen ausencias',
 ],
 },
 {
 title: 'Crecer',
 body: 'Reseñas, referidos y seguimiento generan más ingresos.',
 technical: [
 'Seguimiento persistente hasta reserva o baja',
 'Solicitudes de reseña tras cada visita',
 'Invitaciones de referido que multiplican el mismo lote de leads',
 ],
 },
 ],
 },
 caseStudy: {
 label: 'Prueba',
 title: 'Una clínica regional dejó de perder',
 titleHighlight: '$15k/mes en inversión publicitaria.',
 subtitle:
 'Cifras reales de un socio sanitario, qué falló en captación, qué cambió en 18 h y qué se mantuvo tras el lanzamiento.',
 company: 'Centro médico regional',
 industry: 'Salud',
 timeline: 'En vivo en 18 h',
 before: {
 label: 'Antes',
 metric: '40%',
 description: 'De leads sin respuesta a tiempo. Los anuncios seguían mientras el embudo se enfriaba.',
 },
 after: {
 label: 'Después',
 metric: '100%',
 description: 'Cada consulta atendida rápido, con un siguiente paso claro, las 24 horas.',
 },
 contextLabel: 'Contexto',
 challengeLabel: 'Reto',
 solutionLabel: 'Solución',
 context: '15k$/mes en anuncios, pero la captación no seguía volumen ni velocidad.',
 challenge: 'Cerca del 40 % de leads sin respuesta a tiempo. Embudo tibio. Ingreso fugado.',
 solution:
 'Sistema inteligente en 18 h en vivo, responde, califica, agenda y hace seguimiento desde una sola vista.',
 testimonial:
 'Gastábamos 15k$/mes en anuncios y aún perdíamos gente en la primera milla. Ahora cada lead recibe respuesta al instante, y el equipo ve por fin un solo embudo.',
 testimonialAuthor: 'Director de operaciones',
 testimonialRole: 'Centro médico regional',
 outcomesHeading: 'Resultados medidos',
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
 name: "Sistema de recuperación 'No Show'",
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
 title: 'Nosotros asumimos el riesgo, no usted.',
 body: '15 citas calificadas en 30 días, o trabajamos gratis hasta lograrlo.',
 },
 scarcity: {
 prefix: 'Máximo 5 socios premium al mes.',
 currentlyLabel: 'Actualmente:',
 spotsSuffix: 'plazas restantes para',
 inlineSuffix: 'plazas premium en {month} · máx. 5/mes',
 },
 pricing: {
 title: 'Vea la fuga',
 titleHighlight: 'antes de gastar un dólar.',
 subtitle:
 'Evaluación fit de dos minutos. Un informe: fuga, potencial, costo total, luego usted decide.',
 assessmentNote:
 'Su informe detalla lo que cuesta el seguimiento lento, lo que recupera con el loop activo y la inversión total, antes de pagar.',
 assessmentCta: 'Hacer la evaluación fit',
 investmentNote: 'Los montos aparecen en sus resultados, no en esta página.',
 planName: 'Loop de reservas IA',
 limitedLabel: 'Cupos de socio limitados',
 setupFee: '2.000 $',
 setupFeeWaivedDisplay: '0 $',
 setupLabel: 'Configuración',
 setupFeePromo: 'Configuración sin cargo, termina en',
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
 titleLine1: 'ثبّتها مرة.',
 titleHighlight: 'ولن ترد على الرسائل أو ترسل روابط حجز أو تلاحق متابعة يدوياً.',
 hook:
 'الحلقة الوحيدة الجاهزة التي تلتقط وتؤهل وتحجز وترفع القيمة وتتابع كل عميل مدفوع وأنت تقدّم الخدمة.',
 primaryCta: 'ابدأ اختبار الملاءمة (دقيقتان)',
 footnote: '15 موعداً مؤهلاً خلال 30 يوماً، أو نعمل مجاناً حتى تحققها. المخاطرة علينا.',
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
 subtitle: 'التسرب يغلق ~1 من 100. الحلقة تغلق 95, مع إحالات تتضاعف.',
 beforeLabel: 'التسرب',
 beforeMetric: '~1 / 100',
 beforeHint: 'إغلاق بعد فوضى يدوية وبريد صوتي وبطء.',
 arrowLabel: 'مع الحلقة',
 afterLabel: 'الحلقة',
 afterMetric: '95 / 100',
 referralLine: '+23 إحالة من نفس الدفعة',
 afterHint: 'مُلتقط ومؤهل ومحجوز ومتابَع, 24/7.',
 },
 denominator: {
 badge: 'معادلة القيمة · المقام',
 title: 'سرعة فورية. جهد شبه معدوم.',
 subtitle: 'نقلّص التأخير والجهد, النظام يعمل بينما تدير العمل.',
 pillarSpeed: 'رد فوري',
 pillarSpeedHint: 'أقل من ثانيتين على كل اتصال. بلا يانصيب البريد الصوتي.',
 pillarDeploy: 'نشر خلال 48 ساعة',
 pillarDeployHint: 'ننفّذ ونشغّل, ليس أداة أخرى للمراقبة.',
 pillarEffort: 'تحكم بلا احتكاك',
 pillarEffortHint: 'تطبيق جوال + أتمتة. أنت توافق؛ الحلقة تنفّذ.',
 },
 mobileApp: {
 title: 'شاهد كل عميل محتمل وردّ من هاتفك, في أي وقت.',
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
 badge: 'المشكلة',
 title: 'أنت تدفع مقابل العملاء.',
 titleHighlight: 'ومعظمهم لا يحصلون على رد في الوقت المناسب.',
 subtitle:
 'يتواصل العملاء المحتملون عبر إعلاناتك وموقعك ورسائلك النصية وهاتفك, بينما فريقك مشغول في العمل. لا أحد يرد بسرعة كافية. ينتقل العميل إلى منافس. تستمر في دفع ثمن النقرات، لكن الحجز يذهب لمن رد أولاً.',
 stats: [
 {
 value: '40٪',
 label: 'من العملاء المحتملين دون رد في الوقت المناسب',
 hint: 'شائع عندما يعتمد الاستقبال على ذاكرة الفريق لا على نظام متصل.',
 },
 {
 value: '5 د',
 label: 'ذروة نية الشراء',
 hint: 'رد خلال هذه النافذة وإلا تتراجع فرص التأهيل (دراسة HBR).',
 },
 {
 value: '78٪',
 label: 'يختارون من يرد أولاً',
 hint: 'المنافس يفوز بالمحادثة بينما فريقك ما زال في الميدان.',
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
 'تنفيذ كامل, وليس DIY. نوصل قنواتكم وندير الالتقاط والتأهيل والحجز والمتابعة لكل عميل محتمل مدفوع.',
 statBig: '48س',
 statSmall: 'من القرار إلى التشغيل',
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
 clientOutcomes: {
 badge: 'النتائج',
 title: 'ثلاث نتائج.',
 titleHighlight: 'نظام واحد.',
 subtitle:
 'التقاط كل استفسار. تحويل الطلب المؤهل إلى مواعيد. النمو بالمراجعات والمتابعة.',
 expandTechnical: 'اضغط خطوة لرؤية التفاصيل التقنية',
 collapseTechnical: 'اضغط مرة أخرى للطي',
 steps: [
 {
 title: 'التقاط',
 body: 'كل استفسار يحصل على رد.',
 technical: [
 'رد فوري على الويب والرسائل وواتساب وإنستغرام والهاتف',
 'صندوق واحد, لا خيوط مبعثرة ولا يانصيب بريد صوتي',
 'تسجيل العملاء المحتملين تلقائياً بالمصدر والنية',
 ],
 },
 {
 title: 'التحويل',
 body: 'العملاء المؤهلون يصبحون مواعيد.',
 technical: [
 'تأهيل ذكي قبل تدخل فريقك',
 'حجز ذاتي في تقويمك المباشر',
 'تأكيدات وتذكيرات تقلل الغياب',
 ],
 },
 {
 title: 'النمو',
 body: 'المراجعات والإحالات والمتابعة تزيد الإيراد.',
 technical: [
 'متابعة مستمرة حتى الحجز أو الانسحاب',
 'طلبات مراجعة بعد كل زيارة',
 'دعوات إحالة تضاعف نفس دفعة العملاء',
 ],
 },
 ],
 },
 caseStudy: {
 label: 'دليل',
 title: 'عيادة إقليمية أوقفت تسرّب',
 titleHighlight: '15 ألف دولار شهرياً من ميزانية الإعلانات.',
 subtitle:
 'أرقام حقيقية من شريك رعاية صحية, ما تعطّل في الاستقبال, وما تغيّر خلال 18 ساعة, وما بقي ثابتاً بعد التشغيل.',
 company: 'مركز طبي إقليمي',
 industry: 'رعاية صحية',
 timeline: 'تشغيل خلال 18 ساعة',
 before: {
 label: 'قبل',
 metric: '40٪',
 description: 'من العملاء المحتملين دون رد آنٍ. الإعلانات استمرت بينما برد المسار.',
 },
 after: {
 label: 'بعد',
 metric: '100٪',
 description: 'كل استفسار يُجاب بسرعة, بخطوة تالية واضحة, على مدار الساعة.',
 },
 contextLabel: 'السياق',
 challengeLabel: 'التحدي',
 solutionLabel: 'الحل',
 context: '15 ألف دولار شهرياً إعلانات, لكن الاستقبال لم يواكب الحجم ولا السرعة.',
 challenge: 'نحو 40٪ من العملاء المحتملين دون رد آنٍ. مسار بارد. إيراد يتسرّب.',
 solution:
 'نظام ذكي جاهز خلال 18 ساعة, رد وتأهيل وحجز ومتابعة من منظر تشغيلي واحد.',
 testimonial:
 'كنا ننفق 15 ألف دولار شهرياً على الإعلانات وما زلنا نخسر الناس في الميل الأول. الآن يُجاب كل عميل محتمل فوراً, والفريق يرى أخيراً مساراً واحداً.',
 testimonialAuthor: 'مدير العمليات',
 testimonialRole: 'مركز طبي إقليمي',
 outcomesHeading: 'نتائج مُقاسة',
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
 title: 'نحن نتحمل المخاطر, ليس أنت.',
 body: '15 موعداً مؤهلاً في 30 يوماً, أو نعمل مجاناً حتى تحقق ذلك.',
 },
 scarcity: {
 prefix: 'حد أقصى 5 شركاء راقيين شهرياً.',
 currentlyLabel: 'حالياً:',
 spotsSuffix: 'مقاعد متبقية لـ',
 inlineSuffix: 'مقاعد متبقية في {month} · حد 5/شهر',
 },
 pricing: {
 title: 'اكتشف التسرّب',
 titleHighlight: 'قبل أن تنفق دولاراً.',
 subtitle:
 'تقييم ملاءمة دقيقتان. تقرير واحد: التسرّب، الفرصة، التكلفة الكاملة, ثم تقرّر.',
 assessmentNote:
 'تقريرك يوضح تكلفة البطء في المتابعة، وما يمكن استرداده مع الحلقة، والاستثمار الكامل, قبل الدفع.',
 assessmentCta: 'ابدأ تقييم الملاءمة',
 investmentNote: 'المبالغ تظهر في نتائجك, وليس هنا.',
 planName: 'حلقة الحجز بالذكاء',
 limitedLabel: 'مقاعد شركاء محدودة',
 setupFee: '2,000 $',
 setupFeeWaivedDisplay: '0 $',
 setupLabel: 'الإعداد',
 setupFeePromo: 'الإعداد مجاني، ينتهي خلال',
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
