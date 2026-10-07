import type { Language } from '@/app/i18n/translations'
import type { AssessmentServiceId } from './types'
import type { AssessmentOverlay } from './overlay-types'

const chromeFr = {
  startCta: 'Commencer l’évaluation',
  progressLabel: 'Question',
  back: 'Retour',
  next: 'Suivant',
  finish: 'Voir mon score',
  answerAll: 'Sélectionnez une réponse pour continuer.',
  resultEyebrow: 'Votre résultat',
  nextStepsTitle: 'Prochaine étape recommandée',
  backToService: 'Retour à la page du service',
  retake: 'Refaire l’évaluation',
  captureTitle: 'Ce score disparaît dès que vous fermez l’onglet',
  captureSubtitle:
    'Laissez un e-mail ou un WhatsApp. Nous envoyons le résultat et la prochaine étape, pour que la fuite ne continue pas une semaine de plus.',
  captureName: 'Nom',
  captureEmail: 'E-mail',
  captureWhatsapp: 'WhatsApp',
  captureCta: 'Envoyer mes résultats',
  captureDone: 'Envoyé. Surveillez votre e-mail ou WhatsApp — nous vous recontactons.',
  captureError: 'Envoi impossible. Réessayez, ou réservez un appel ci-dessus.',
  capturePrivacy: 'Utilisé uniquement pour envoyer votre score et vous recontacter. Pas de liste, pas de relance de masse.',
}

const chromeEs = {
  startCta: 'Empezar la evaluación',
  progressLabel: 'Pregunta',
  back: 'Atrás',
  next: 'Siguiente',
  finish: 'Ver mi puntuación',
  answerAll: 'Seleccione una respuesta para continuar.',
  resultEyebrow: 'Su resultado',
  nextStepsTitle: 'Siguiente paso recomendado',
  backToService: 'Volver a la página del servicio',
  retake: 'Repetir la evaluación',
  captureTitle: 'Esta puntuación se pierde al cerrar la pestaña',
  captureSubtitle:
    'Deje un correo o WhatsApp. Enviamos el resultado y el siguiente paso, para que la fuga no siga otra semana.',
  captureName: 'Nombre',
  captureEmail: 'Correo',
  captureWhatsapp: 'WhatsApp',
  captureCta: 'Enviar mis resultados',
  captureDone: 'Enviado. Revise su correo o WhatsApp — le escribiremos.',
  captureError: 'No se pudo enviar. Inténtelo de nuevo o reserve una llamada arriba.',
  capturePrivacy: 'Solo para enviar su puntuación y el seguimiento. Sin listas ni envíos masivos.',
}

const chromeDe = {
  startCta: 'Bewertung starten',
  progressLabel: 'Frage',
  back: 'Zurück',
  next: 'Weiter',
  finish: 'Meine Punktzahl sehen',
  answerAll: 'Wählen Sie eine Antwort, um fortzufahren.',
  resultEyebrow: 'Ihr Ergebnis',
  nextStepsTitle: 'Empfohlener nächster Schritt',
  backToService: 'Zurück zur Leistungsseite',
  retake: 'Bewertung wiederholen',
  captureTitle: 'Diese Punktzahl verschwindet, wenn Sie den Tab schließen',
  captureSubtitle:
    'Hinterlassen Sie E-Mail oder WhatsApp. Wir senden Ergebnis und nächsten Schritt, damit das Leck nicht noch eine Woche läuft.',
  captureName: 'Name',
  captureEmail: 'E-Mail',
  captureWhatsapp: 'WhatsApp',
  captureCta: 'Meine Ergebnisse senden',
  captureDone: 'Gesendet. Prüfen Sie E-Mail oder WhatsApp — wir melden uns.',
  captureError: 'Senden fehlgeschlagen. Bitte erneut versuchen oder oben einen Termin buchen.',
  capturePrivacy: 'Nur für Ihr Ergebnis und die Rückmeldung. Keine Liste, kein Massenversand.',
}

const chromeAr = {
  startCta: 'ابدأ التقييم',
  progressLabel: 'سؤال',
  back: 'رجوع',
  next: 'التالي',
  finish: 'عرض نتيجتي',
  answerAll: 'اختر إجابة للمتابعة.',
  resultEyebrow: 'نتيجتك',
  nextStepsTitle: 'الخطوة التالية الموصى بها',
  backToService: 'العودة إلى صفحة الخدمة',
  retake: 'أعد التقييم',
  captureTitle: 'هذه النتيجة تختفي عند إغلاق التبويب',
  captureSubtitle:
    'اترك بريداً أو واتساب. نرسل النتيجة والخطوة التالية حتى لا يستمر التسرب أسبوعاً إضافياً.',
  captureName: 'الاسم',
  captureEmail: 'البريد الإلكتروني',
  captureWhatsapp: 'واتساب',
  captureCta: 'أرسل نتائجي',
  captureDone: 'تم الإرسال. راقب بريدك أو واتساب — سنتابع معك.',
  captureError: 'تعذّر الإرسال. حاول مرة أخرى أو احجز مكالمة أعلاه.',
  capturePrivacy: 'يُستخدم فقط لإرسال نتيجتك والمتابعة. بلا قوائم وبلا رسائل جماعية.',
}

const aiEmployeeFr: AssessmentOverlay = {
  serviceName: 'Employé IA',
  copy: {
    ...chromeFr,
    metaTitle: 'Évaluation Employé IA | Digni Digital',
    metaDescription:
      'Dix questions honnêtes sur la visibilité du pipeline, la vitesse de réponse, la responsabilité de l’équipe et les fuites de prospects.',
    eyebrow: 'Contrôle de 2 minutes',
    introTitle: 'Combien de revenu vous échappe quand vous n’êtes pas dans la pièce ?',
    introSubtitle:
      'Sans inscription. Dix questions montrent où les prospects, les réservations, les avis et les relances fuient quand l’équipe est occupée ou que vous êtes hors ligne.',
    introBullets: [
      'Visibilité du pipeline, responsabilité, vitesse de réponse et charge administrative',
      'Score d’adéquation Employé IA immédiat',
      'Une suite claire seulement si les écarts sont réels',
    ],
    resultTitle: 'de correspondance pour l’Employé IA',
    matchLabel: 'Score d’adéquation',
    primaryCta: 'Réserver un audit du système de croissance',
    secondaryCta: 'Voir l’Employé IA',
    bands: [
      {
        minPercent: 85,
        label: 'Fuite inbound critique',
        description:
          'Vos réponses montrent un risque de revenu sérieux : réponse lente, visibilité faible, admin manuel et relances irrégulières. L’Employé IA referme ces écarts avant que les acheteurs prêts ne partent.',
      },
      {
        minPercent: 68,
        label: 'Profil de fuite à haut risque',
        description:
          'Plusieurs parties du pipeline dépendent de la mémoire, des horaires ou de l’effort manuel. Un audit peut cartographier où l’intake instantané et les relances récupèrent de la valeur.',
      },
      {
        minPercent: 45,
        label: 'Écart d’automatisation modéré',
        description:
          'Vous avez une protection partielle, mais des écarts restent visibles. Un audit ciblé peut prioriser les fuites les plus coûteuses.',
      },
      {
        minPercent: 0,
        label: 'Besoin immédiat plus bas',
        description:
          'Vos réponses suggèrent que vos systèmes couvrent déjà une grande partie des cas Employé IA. Si vous voulez plus de levier, nous pouvons indiquer une étape plus légère.',
      },
    ],
  },
  customResult: {
    headline: 'Votre score de fuite inbound est prêt.',
    body: 'Le score pèse la visibilité du pipeline, la responsabilité, la charge manuelle, la vitesse de réponse et le coût des relances manquées.',
    ctaIntro:
      'Réservez un audit du système de croissance. Nous cartographierons où un Employé IA peut refermer la fuite.',
    primaryCta: 'Réserver un audit du système de croissance',
    warning: 'Ne réservez pas si vous acceptez de perdre des prospects au profit d’un concurrent plus rapide.',
  },
  questions: {
    'lifetime-value': {
      prompt: 'Quelle est la valeur vie moyenne d’un client ou d’un patient ?',
      choices: {
        'under 1k': { label: 'Moins de 1 000 $' },
        '1k 3k': { label: '1 000 $ – 3 000 $' },
        '3k 5k': { label: '3 000 $ – 5 000 $' },
        '5k plus': { label: '5 000 $ et plus' },
      },
    },
    'after-hours-response': {
      prompt:
        'Quand un prospect chaud vous écrit sur Instagram ou appelle après 17 h, quel est le délai de réponse moyen exact ?',
      choices: {
        instant: { label: 'Instantané (moins de 2 min)' },
        'within-hour': { label: 'Dans l’heure' },
        'next-morning': { label: 'Le lendemain matin' },
        missed: { label: 'Parfois ils sont manqués entièrement' },
      },
    },
    'leaked-leads': {
      prompt:
        'Quand quelqu’un montre un vrai intérêt (appel, DM ou formulaire) mais ne réserve pas tout de suite, que se passe-t-il d’habitude dans les 7 jours ?',
      choices: {
        sequence: { label: 'Chaque prospect a une séquence de relance claire jusqu’à la réservation ou le désistement' },
        '1 5': { label: 'Nous relançons la plupart du temps, mais quelques-uns passent encore' },
        '5 15': { label: 'Les relances sont irrégulières, selon qui travaille ce jour-là' },
        'no-tracking': { label: 'Nous n’avons pas de façon cohérente de suivre qui doit encore être relancé' },
      },
    },
    'content-distraction': {
      prompt:
        'Combien de création de contenu et de gestion d’annonces mange actuellement votre temps ou celui de l’équipe, au détriment du service client ?',
      choices: {
        automated: { label: 'Rien, c’est automatisé' },
        'few-hours': { label: 'Quelques heures par semaine' },
        'second-job': { label: 'C’est un second métier constant et stressant' },
      },
    },
    'fourteen-day-test': {
      prompt:
        'Si vous quittiez l’activité 14 jours, téléphone éteint, la génération de prospects, les réservations et les avis continueraient-ils de croître, ou le revenu gèlerait-il ?',
      choices: {
        'keep-growing': { label: 'Ça continuerait de croître sans accroc' },
        freeze: { label: 'Ça gèlerait et déclinerait complètement' },
      },
    },
    'pipeline-visibility': {
      prompt:
        'Si je vous demandais maintenant le nombre exact de prospects intéressés le mois dernier qui n’ont pas acheté, un système peut-il me montrer leurs noms et numéros en moins de 60 secondes ?',
      choices: {
        'fully-mapped': { label: 'Oui, notre pipeline est entièrement cartographié' },
        scattered: { label: 'Non, ils sont éparpillés entre tableurs, DM et notes papier' },
        'not-tracked': { label: 'Honnêtement, nous ne les suivons pas du tout.' },
      },
    },
    'staff-accountability': {
      prompt:
        'Quand l’accueil traite une demande, comment vérifiez-vous qu’ils ont utilisé la psychologie et la séquence de relance nécessaires pour closer ?',
      choices: {
        'review-regularly': { label: 'Je revois régulièrement les appels et messages enregistrés' },
        trusting: { label: 'Je fais confiance : ils font de leur mieux' },
        'no-monitoring': { label: 'Je n’ai aucun moyen concret de surveiller chaque interaction.' },
      },
    },
    'manual-task-hours': {
      prompt:
        'Combien d’heures par semaine passez-vous, vous ou l’équipe clé, sur des tâches répétitives (rappels, avis, infos de base) ?',
      choices: {
        'mostly-automated': { label: '0 à 2 heures (surtout automatisé)' },
        'three-to-ten': { label: '3 à 10 heures' },
        'ten-plus': { label: '10+ heures (ça ressemble à un poste admin à temps plein).' },
      },
    },
    'organic-dm-follow-up': {
      prompt:
        'Quand vous créez du contenu organique ou des promotions, quel pourcentage des personnes qui commentent ou voient reçoivent un message direct avec un moyen simple de réserver ?',
      choices: {
        'all-automatic': { label: '100 % (nous envoyons un DM automatique à tout le monde)' },
        'maybe-half': { label: 'Peut-être la moitié, si on voit la notification à temps' },
        'few-addressed': { label: 'Très peu, la plupart des commentaires restent sans suite.' },
      },
    },
    'competitor-speed': {
      prompt:
        'Si un prospect chaud vous écrit, à vous et à votre concurrent le plus proche, en même temps, qui va réellement répondre utilement et sécuriser la réservation en premier ?',
      choices: {
        'we-will': { label: 'Nous, parce que nous avons des systèmes instantanés' },
        competitor: { label: 'Le concurrent nous battra probablement' },
        gamble: { label: 'C’est un pari total, selon à quel point nous sommes occupés.' },
      },
    },
  },
}

const futureReadyFr: AssessmentOverlay = {
  serviceName: 'Future Ready',
  copy: {
    ...chromeFr,
    metaTitle: 'Évaluation Future Ready | Digni Digital',
    metaDescription:
      'Dix questions pour écoles et universités : le programme Future Ready correspond-il à vos résultats, parties prenantes, financement et calendrier ?',
    eyebrow: 'Contrôle de 2 minutes',
    introTitle: 'Future Ready est-il le bon programme pour votre établissement ?',
    introSubtitle:
      'Pour les établissements qui veulent des diplômés capables de gagner, pas seulement un certificat. Un score clair avant de réserver une consultation.',
    introBullets: [
      '10 questions sur l’établissement, les parties prenantes, les employeurs et le budget',
      'Score pour le modèle de programme de 9 mois',
      'Un conseil honnête si un autre chemin convient mieux',
    ],
    resultTitle: 'de correspondance pour Future Ready',
    matchLabel: 'Correspondance programme',
    primaryCta: 'Réserver une consultation école',
    secondaryCta: 'Voir le programme',
    bands: [
      {
        minPercent: 85,
        label: 'Très bonne correspondance',
        description:
          'Le profil de l’établissement, le focus résultats et le calendrier s’alignent avec Future Ready. Vous êtes positionnés pour un impact employabilité.',
      },
      {
        minPercent: 70,
        label: 'Bonne correspondance',
        description:
          'La plupart des critères correspondent. Une consultation école peut cartographier la cohorte, l’intégration et les objectifs de placement.',
      },
      {
        minPercent: 50,
        label: 'Correspondance modérée',
        description:
          'Il y a du potentiel, mais un déploiement progressif peut être nécessaire. Discutons préparation et adhésion.',
      },
      {
        minPercent: 0,
        label: 'Explorer d’autres chemins',
        description:
          'Vos réponses suggèrent des ateliers, des modules plus courts ou un autre service en premier. Nous recommanderons honnêtement.',
      },
    ],
  },
  questions: {
    institution: {
      prompt: 'Quel type d’établissement êtes-vous ?',
      choices: {
        university: { label: 'Université ou enseignement supérieur' },
        'high-school': { label: 'Lycée privé ou secondaire' },
        vocational: { label: 'Institut professionnel / technique' },
        other: { label: 'Formation entreprise ou autre' },
      },
    },
    outcomes: {
      prompt: 'Comment mesurez-vous aujourd’hui la réussite des étudiants ?',
      choices: {
        employment: { label: 'Placement et employabilité' },
        grades: { label: 'Surtout notes et examens' },
        mixed: { label: 'Mélange d’académique et de compétences transversales' },
        unclear: { label: 'Les résultats ne sont pas clairement suivis' },
      },
    },
    cohort: {
      prompt: 'Combien d’étudiants entreraient dans le programme par an, approximativement ?',
      choices: {
        small: { label: 'Moins de 50' },
        medium: { label: '50 à 200' },
        large: { label: '200 à 1 000' },
        'very-large': { label: '1 000+' },
      },
    },
    existing: {
      prompt: 'Avez-vous déjà des programmes de carrière ou de compétences numériques ?',
      choices: {
        none: { label: 'Pas encore de programme structuré' },
        basic: { label: 'Ateliers de base seulement' },
        partial: { label: 'Cursus partiel, résultats irréguliers' },
        strong: { label: 'Programme solide, à renforcer' },
      },
    },
    timeline: {
      prompt: 'Quand voulez-vous lancer ou étendre ?',
      choices: {
        asap: { label: 'Cette année académique' },
        next: { label: 'L’année académique suivante' },
        explore: { label: 'Exploration sur 12 mois ou plus' },
        unknown: { label: 'Pas encore de calendrier' },
      },
    },
    goal: {
      prompt: 'Quelle est votre priorité n°1 pour les étudiants ?',
      choices: {
        jobs: { label: 'Emploi rémunéré et stages' },
        entrepreneur: { label: 'Entrepreneuriat et revenus freelance' },
        digital: { label: 'Culture numérique et portfolios' },
        cert: { label: 'Certificats seulement, peu de placement' },
      },
    },
    'student-value': {
      prompt: 'Quelle est la valeur annuelle ou vie d’un étudiant inscrit ?',
      choices: {
        unknown: { label: 'Non suivie' },
        low: { label: 'Moins de 1 000 $ / an' },
        mid: { label: '1 000 $ à 5 000 $ / an' },
        high: { label: '5 000 $ à 15 000 $ / an' },
        'very-high': { label: '15 000 $ + / an' },
      },
    },
    stakeholders: {
      prompt: 'Qui doit valider le lancement d’un nouveau programme d’employabilité ?',
      choices: {
        aligned: { label: 'La direction est déjà alignée, prête à cadrer' },
        one: { label: 'Un décideur, peu d’adhésion interne restante' },
        multiple: { label: 'Plusieurs départements, consensus encore à construire' },
        early: { label: 'Exploration précoce, pas encore de sponsor' },
      },
    },
    employers: {
      prompt: 'À quel point êtes-vous connectés aux employeurs pour les placements ?',
      choices: {
        strong: { label: 'Partenariats actifs, nous plaçons stages et emplois' },
        building: { label: 'Relations en construction, nous voulons plus de placements' },
        weak: { label: 'Liens faibles, l’employabilité est un écart' },
        none: { label: 'Pas encore de réseau employeurs' },
      },
    },
    funding: {
      prompt: 'Un budget est-il alloué (ou probable) pour un programme résultats d’un an ?',
      choices: {
        yes: { label: 'Oui, budget confirmé ou dans le plan de l’année' },
        likely: { label: 'Probable, en attente d’approbation finale' },
        grant: { label: 'Dépend de subventions ou de donateurs' },
        none: { label: 'Aucun budget identifié encore' },
      },
    },
  },
}

const agenticFr: AssessmentOverlay = {
  serviceName: 'Systèmes agentiques',
  copy: {
    ...chromeFr,
    metaTitle: 'Évaluation Systèmes agentiques | Digni Digital',
    metaDescription:
      'Dix questions pour voir si un système agentique sur mesure correspond à votre flux, vos critères de succès, vos intégrations et votre budget.',
    eyebrow: 'Contrôle de 2 minutes',
    introTitle: 'Un système agentique est-il le bon build pour vous ?',
    introSubtitle:
      'Pour les équipes qui ont besoin d’un logiciel qui exécute leur processus, pas l’inverse. Un score avant de cadencer un projet.',
    introBullets: [
      '10 questions sur le problème, les critères de succès, les intégrations et le budget',
      'Score pour un build agentique sur mesure',
      'Un appel seulement si la correspondance est réelle',
    ],
    resultTitle: 'de correspondance pour les systèmes agentiques',
    matchLabel: 'Correspondance projet',
    primaryCta: 'Réserver une consultation projet',
    secondaryCta: 'Voir les systèmes agentiques',
    bands: [
      {
        minPercent: 85,
        label: 'Très bonne correspondance',
        description:
          'Le problème, le besoin de stack et les objectifs d’ownership s’alignent avec un système agentique. Vous êtes un bon candidat pour un MVP ou un build complet.',
      },
      {
        minPercent: 70,
        label: 'Bonne correspondance',
        description:
          'Un système agentique battra probablement le prêt-à-porter. Une consultation projet peut définir périmètre, calendrier et conception du flux.',
      },
      {
        minPercent: 50,
        label: 'Correspondance modérée',
        description:
          'Un build sur mesure peut aider, mais des écarts de périmètre suggèrent de commencer plus petit : audit de flux ou MVP phasé.',
      },
      {
        minPercent: 0,
        label: 'Explorer d’autres chemins',
        description:
          'Vos réponses pointent vers du SaaS, l’Employé IA, ou une intégration plus légère d’abord. Nous ne pousserons pas un build complet s’il n’est pas le bon mouvement.',
      },
    ],
  },
  questions: {
    problem: {
      prompt: 'Qu’est-ce qui décrit le mieux le problème à résoudre ?',
      choices: {
        niche: { label: 'Un flux de niche qu’aucun outil standard ne couvre' },
        integrate: { label: 'Connecter plusieurs outils avec une automatisation intelligente' },
        'ai-product': { label: 'Produit natif IA ou copilote interne' },
        generic: { label: 'CRM ou site générique seulement' },
      },
    },
    shelfware: {
      prompt: 'Avez-vous essayé un logiciel prêt-à-porter pour cela ?',
      choices: {
        failed: { label: 'Oui, ça ne collait pas à notre process' },
        partial: { label: 'Oui, avec des contournements partout' },
        'not-yet': { label: 'Pas encore, mais nous doutons des outils génériques' },
        happy: { label: 'Les outils actuels suffisent' },
      },
    },
    automation: {
      prompt: 'Quelle est l’importance de l’IA ou d’agents autonomes dans la solution ?',
      choices: {
        core: { label: 'Cœur du produit : nous avons besoin d’agents qui agissent' },
        important: { label: 'Important pour l’efficacité, pas cosmétique' },
        nice: { label: 'Utile plus tard' },
        none: { label: 'Pas nécessaire' },
      },
    },
    timeline: {
      prompt: 'Quel calendrier avez-vous en tête ?',
      choices: {
        mvp: { label: 'MVP en semaines (7 à 30 jours)' },
        quarter: { label: 'Plateforme complète en 1 à 3 mois' },
        long: { label: '6+ mois, périmètre entreprise' },
        flex: { label: 'Pas de deadline / flou' },
      },
    },
    team: {
      prompt: 'Avez-vous des profils techniques en interne ?',
      choices: {
        none: { label: 'Non, nous avons besoin d’un partenaire pour build + déploiement' },
        some: { label: 'Un peu de capacité, besoin d’accélération' },
        strong: { label: 'Équipe solide, besoin d’expertise agents/IA' },
        full: { label: 'Nous voulons seulement du conseil, pas du build' },
      },
    },
    ownership: {
      prompt: 'Qu’est-ce qui compte le plus après le lancement ?',
      choices: {
        own: { label: 'Posséder le code et les données, pas de lock-in' },
        scale: { label: 'Scaler les flux sans limites par siège' },
        maintain: { label: 'Maintenance déléguée au partenaire' },
        rent: { label: 'Le plus bas abonnement SaaS' },
      },
    },
    'problem-value': {
      prompt: 'Quelle est la valeur annuelle estimée si ce problème était pleinement résolu ?',
      choices: {
        unknown: { label: 'Pas encore estimée' },
        low: { label: 'Moins de 10 000 $ / an' },
        mid: { label: '10 000 $ à 50 000 $ / an' },
        high: { label: '50 000 $ à 250 000 $ / an' },
        'very-high': { label: '250 000 $ + / an' },
      },
    },
    'success-criteria': {
      prompt: 'À quoi ressemblerait le « succès » 90 jours après le lancement ?',
      choices: {
        revenue: { label: 'Revenu ou économies mesurables' },
        workflow: { label: 'Un flux cœur tourne sans étapes manuelles' },
        users: { label: 'Les utilisateurs internes l’ont adopté au quotidien' },
        unclear: { label: 'Pas encore défini' },
      },
    },
    integrations: {
      prompt: 'Combien d’outils existants la solution doit-elle connecter ?',
      choices: {
        many: { label: '4+ systèmes (CRM, ERP, comms, etc.)' },
        some: { label: '2 à 3 intégrations clés' },
        one: { label: 'Une plateforme principale' },
        greenfield: { label: 'Autonome, peu d’intégrations' },
      },
    },
    investment: {
      prompt: 'Quelle fourchette d’investissement semble réaliste pour résoudre ce problème ?',
      choices: {
        enterprise: { label: '50 k$+ pour le bon résultat' },
        mid: { label: '15 k$ à 50 k$' },
        mvp: { label: 'Moins de 15 k$ en MVP pour prouver la valeur' },
        unsure: { label: 'Pas encore sûr / besoin d’un cas ROI d’abord' },
      },
    },
  },
}

const introBulletsByLang: Record<
  'es' | 'de' | 'ar',
  Record<'ai' | 'frg' | 'agentic', [string, string, string]>
> = {
  es: {
    ai: [
      'Visibilidad del pipeline, responsabilidad, velocidad y carga manual',
      'Puntuación de encaje inmediata',
      'Siguiente paso solo si las brechas son reales',
    ],
    frg: [
      '10 preguntas sobre institución, involucrados, empleadores y presupuesto',
      'Puntuación para el modelo de 9 meses',
      'Guía honesta si otro camino encaja mejor',
    ],
    agentic: [
      '10 preguntas sobre el problema, éxito, integraciones y presupuesto',
      'Puntuación para un build agéntico',
      'Llamada solo si el encaje es real',
    ],
  },
  de: {
    ai: [
      'Pipeline-Sichtbarkeit, Verantwortung, Tempo und manuelle Last',
      'Sofortiger Passungs-Score',
      'Nächster Schritt nur bei echten Lücken',
    ],
    frg: [
      '10 Fragen zu Institution, Stakeholdern, Arbeitgebern und Budget',
      'Punktzahl für das 9-Monats-Modell',
      'Ehrliche Empfehlung, wenn ein anderer Weg besser passt',
    ],
    agentic: [
      '10 Fragen zu Problem, Erfolg, Integrationen und Budget',
      'Punktzahl für einen agentischen Build',
      'Anruf nur bei echtem Fit',
    ],
  },
  ar: {
    ai: [
      'وضوح المسار والمساءلة وسرعة الرد والحمل اليدوي',
      'نتيجة ملاءمة فورية',
      'خطوة تالية فقط إذا كانت الفجوات حقيقية',
    ],
    frg: [
      '10 أسئلة عن المؤسسة وأصحاب المصلحة وأصحاب العمل والميزانية',
      'نتيجة لنموذج البرنامج لـ 9 أشهر',
      'توجيه صادق إن ناسب مسار آخر أكثر',
    ],
    agentic: [
      '10 أسئلة عن المشكلة والنجاح والتكاملات والميزانية',
      'نتيجة لبناء وكيلي مخصص',
      'اتصال فقط إذا كان التطابق حقيقياً',
    ],
  },
}

function alignedCopy(
  chrome: typeof chromeFr,
  service: 'ai' | 'frg' | 'agentic',
  language: 'es' | 'de' | 'ar',
): AssessmentOverlay {
  const pack = {
    es: {
      ai: {
        serviceName: 'Empleado IA',
        metaTitle: 'Evaluación Empleado IA | Digni Digital',
        metaDescription:
          'Diez preguntas honestas sobre visibilidad del pipeline, velocidad de respuesta, responsabilidad del equipo y fugas de leads.',
        introTitle: '¿Cuántos ingresos se le escapan cuando usted no está en la sala?',
        introSubtitle:
          'Sin registro. Diez preguntas muestran dónde se filtran leads, reservas, reseñas y seguimientos cuando el equipo está ocupado o usted está desconectado.',
        resultTitle: 'de coincidencia para Empleado IA',
        matchLabel: 'Nivel de encaje',
        primaryCta: 'Reservar una auditoría del sistema de crecimiento',
        secondaryCta: 'Ver Empleado IA',
      },
      frg: {
        serviceName: 'Future Ready',
        metaTitle: 'Evaluación Future Ready | Digni Digital',
        metaDescription:
          'Diez preguntas para escuelas y universidades: ¿Future Ready encaja con sus resultados, involucrados, financiación y calendario?',
        introTitle: '¿Es Future Ready el programa adecuado para su institución?',
        introSubtitle:
          'Para instituciones que quieren graduados capaces de ganar, no solo un certificado. Una puntuación clara antes de reservar consulta.',
        resultTitle: 'de coincidencia para Future Ready',
        matchLabel: 'Coincidencia de programa',
        primaryCta: 'Reservar una consulta escolar',
        secondaryCta: 'Ver el programa',
      },
      agentic: {
        serviceName: 'Sistemas agénticos',
        metaTitle: 'Evaluación Sistemas agénticos | Digni Digital',
        metaDescription:
          'Diez preguntas para ver si un sistema agéntico a medida encaja con su flujo, criterios de éxito, integraciones e inversión.',
        introTitle: '¿Es un sistema agéntico el build correcto para usted?',
        introSubtitle:
          'Para equipos que necesitan software que ejecute su proceso, no al revés. Una puntuación antes de definir el proyecto.',
        resultTitle: 'de coincidencia para sistemas agénticos',
        matchLabel: 'Coincidencia de proyecto',
        primaryCta: 'Reservar una consulta de proyecto',
        secondaryCta: 'Ver sistemas agénticos',
      },
    },
    de: {
      ai: {
        serviceName: 'AI Employee',
        metaTitle: 'AI Employee Bewertung | Digni Digital',
        metaDescription:
          'Zehn ehrliche Fragen zu Pipeline-Sichtbarkeit, Antwortgeschwindigkeit, Teamverantwortung und Lead-Lecks.',
        introTitle: 'Wie viel Umsatz geht verloren, wenn Sie nicht im Raum sind?',
        introSubtitle:
          'Keine Anmeldung. Zehn Fragen zeigen, wo Leads, Buchungen, Bewertungen und Follow-ups lecken, wenn das Team beschäftigt oder Sie offline sind.',
        resultTitle: 'Treffer für AI Employee',
        matchLabel: 'Passungs-Score',
        primaryCta: 'Growth-System-Audit buchen',
        secondaryCta: 'AI Employee ansehen',
      },
      frg: {
        serviceName: 'Future Ready',
        metaTitle: 'Future Ready Bewertung | Digni Digital',
        metaDescription:
          'Zehn Fragen für Schulen und Universitäten: Passt Future Ready zu Ergebnissen, Stakeholdern, Finanzierung und Zeitplan?',
        introTitle: 'Ist Future Ready das richtige Programm für Ihre Einrichtung?',
        introSubtitle:
          'Für Einrichtungen, die Absolventen wollen, die verdienen können, nicht nur ein Zertifikat. Klare Punktzahl vor der Beratung.',
        resultTitle: 'Treffer für Future Ready',
        matchLabel: 'Programm-Fit',
        primaryCta: 'Schulberatung buchen',
        secondaryCta: 'Programm ansehen',
      },
      agentic: {
        serviceName: 'Agentische Systeme',
        metaTitle: 'Bewertung Agentische Systeme | Digni Digital',
        metaDescription:
          'Zehn Fragen, ob ein maßgeschneidertes agentisches System zu Workflow, Erfolgskriterien, Integrationen und Budget passt.',
        introTitle: 'Ist ein agentisches System der richtige Build für Sie?',
        introSubtitle:
          'Für Teams, die Software brauchen, die ihren Prozess führt—nicht umgekehrt. Punktzahl vor der Projektklärung.',
        resultTitle: 'Treffer für agentische Systeme',
        matchLabel: 'Projekt-Fit',
        primaryCta: 'Projektberatung buchen',
        secondaryCta: 'Agentische Systeme ansehen',
      },
    },
    ar: {
      ai: {
        serviceName: 'موظف الذكاء الاصطناعي',
        metaTitle: 'تقييم موظف الذكاء الاصطناعي | Digni Digital',
        metaDescription:
          'عشرة أسئلة صادقة عن وضوح المسار وسرعة الرد ومساءلة الفريق وتسرب العملاء المحتملين.',
        introTitle: 'كم من إيراداتك يضيع عندما لا تكون في الغرفة؟',
        introSubtitle:
          'بدون تسجيل. عشرة أسئلة تُظهر أين تتسرب الاستفسارات والحجوزات والمراجعات والمتابعات عندما يكون الفريق مشغولاً أو تكون غير متصل.',
        resultTitle: 'من التطابق لموظف الذكاء الاصطناعي',
        matchLabel: 'درجة الملاءمة',
        primaryCta: 'احجز مراجعة نظام النمو',
        secondaryCta: 'اطلع على موظف الذكاء الاصطناعي',
      },
      frg: {
        serviceName: 'Future Ready',
        metaTitle: 'تقييم Future Ready | Digni Digital',
        metaDescription:
          'عشرة أسئلة للمدارس والجامعات: هل Future Ready يناسب نتائجكم وأصحاب المصلحة والتمويل والجدول؟',
        introTitle: 'هل Future Ready هو البرنامج المناسب لمؤسستك؟',
        introSubtitle:
          'للمؤسسات التي تريد خرّيجين يستطيعون الكسب، لا شهادة فحسب. نتيجة واضحة قبل حجز الاستشارة.',
        resultTitle: 'من التطابق لـ Future Ready',
        matchLabel: 'تطابق البرنامج',
        primaryCta: 'احجز استشارة للمدرسة',
        secondaryCta: 'اطلع على البرنامج',
      },
      agentic: {
        serviceName: 'أنظمة وكيلية',
        metaTitle: 'تقييم الأنظمة الوكيلية | Digni Digital',
        metaDescription:
          'عشرة أسئلة لمعرفة ما إذا كان نظام وكيلي مخصص يناسب سير عملك ومعايير النجاح والتكاملات والاستثمار.',
        introTitle: 'هل النظام الوكيلي هو البناء الصحيح لكم؟',
        introSubtitle:
          'للفرق التي تحتاج برمجيات تشغّل عمليتها لا العكس. نتيجة قبل تحديد نطاق المشروع.',
        resultTitle: 'من التطابق للأنظمة الوكيلية',
        matchLabel: 'تطابق المشروع',
        primaryCta: 'احجز استشارة للمشروع',
        secondaryCta: 'اطلع على الأنظمة الوكيلية',
      },
    },
  }[language][service]

  return {
    serviceName: pack.serviceName,
    copy: {
      ...chrome,
      metaTitle: pack.metaTitle,
      metaDescription: pack.metaDescription,
      eyebrow: language === 'es' ? 'Chequeo de 2 minutos' : language === 'de' ? '2-Minuten-Check' : 'فحص دقيقتين',
      introTitle: pack.introTitle,
      introSubtitle: pack.introSubtitle,
      introBullets: introBulletsByLang[language][service],
      resultTitle: pack.resultTitle,
      matchLabel: pack.matchLabel,
      primaryCta: pack.primaryCta,
      secondaryCta: pack.secondaryCta,
    },
  }
}

export const assessmentOverlays: Partial<
  Record<Language, Partial<Record<AssessmentServiceId, AssessmentOverlay>>>
> = {
  fr: {
    'ai-employee': aiEmployeeFr,
    'future-ready': futureReadyFr,
    'agentic-softwares': agenticFr,
  },
  es: {
    'ai-employee': alignedCopy(chromeEs, 'ai', 'es'),
    'future-ready': alignedCopy(chromeEs, 'frg', 'es'),
    'agentic-softwares': alignedCopy(chromeEs, 'agentic', 'es'),
  },
  de: {
    'ai-employee': alignedCopy(chromeDe, 'ai', 'de'),
    'future-ready': alignedCopy(chromeDe, 'frg', 'de'),
    'agentic-softwares': alignedCopy(chromeDe, 'agentic', 'de'),
  },
  ar: {
    'ai-employee': alignedCopy(chromeAr, 'ai', 'ar'),
    'future-ready': alignedCopy(chromeAr, 'frg', 'ar'),
    'agentic-softwares': alignedCopy(chromeAr, 'agentic', 'ar'),
  },
}
