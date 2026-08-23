import type { InstallerProcessStepId } from '@/lib/positioning/process'

export type HowDigniWorksStepCopy = {
  title: string
  description: string
}

export type HowDigniWorksTranslations = {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  steps: Record<InstallerProcessStepId, HowDigniWorksStepCopy>
}

export const howDigniWorksEn: HowDigniWorksTranslations = {
  badge: 'How it works',
  title: 'Identify. Build. Connect.',
  titleHighlight: 'Then put it to work.',
  subtitle: 'You do not need to figure out the technology. We diagnose the exposure, install the system, and keep improving it.',
  steps: {
    identify: {
      title: 'Identify',
      description: 'We understand your current state and find the highest-value gap.',
    },
    design: {
      title: 'Design',
      description: 'We architect the solution around your actual workflow.',
    },
    build: {
      title: 'Build',
      description: 'We build and configure the system.',
    },
    connect: {
      title: 'Connect',
      description: 'We integrate it with your existing tools and processes.',
    },
    deploy: {
      title: 'Deploy',
      description: 'We launch it into your operation.',
    },
    optimize: {
      title: 'Optimize',
      description: 'We monitor performance and improve the system.',
    },
  },
}

export const howDigniWorksFr: HowDigniWorksTranslations = {
  badge: 'Comment ça marche',
  title: 'Identifier. Construire. Connecter.',
  titleHighlight: 'Puis le mettre en service.',
  subtitle:
    'Vous n’avez pas à maîtriser la technologie. Nous diagnostiquons l’exposition, installons le système et l’améliorons en continu.',
  steps: {
    identify: {
      title: 'Identifier',
      description: 'Nous comprenons votre état actuel et trouvons l’écart à plus forte valeur.',
    },
    design: {
      title: 'Concevoir',
      description: 'Nous concevons la solution autour de votre flux de travail réel.',
    },
    build: {
      title: 'Construire',
      description: 'Nous construisons et configurons le système.',
    },
    connect: {
      title: 'Connecter',
      description: 'Nous l’intégrons à vos outils et processus existants.',
    },
    deploy: {
      title: 'Déployer',
      description: 'Nous le mettons en service dans votre opération.',
    },
    optimize: {
      title: 'Optimiser',
      description: 'Nous suivons la performance et améliorons le système.',
    },
  },
}

export const howDigniWorksEs: HowDigniWorksTranslations = {
  badge: 'Cómo funciona',
  title: 'Identificar. Construir. Conectar.',
  titleHighlight: 'Luego ponerlo a trabajar.',
  subtitle:
    'No necesita dominar la tecnología. Diagnosticamos la exposición, instalamos el sistema y lo seguimos mejorando.',
  steps: {
    identify: {
      title: 'Identificar',
      description: 'Entendemos su estado actual y encontramos la brecha de mayor valor.',
    },
    design: {
      title: 'Diseñar',
      description: 'Arquitectamos la solución alrededor de su flujo real.',
    },
    build: {
      title: 'Construir',
      description: 'Construimos y configuramos el sistema.',
    },
    connect: {
      title: 'Conectar',
      description: 'Lo integramos con sus herramientas y procesos actuales.',
    },
    deploy: {
      title: 'Desplegar',
      description: 'Lo lanzamos en su operación.',
    },
    optimize: {
      title: 'Optimizar',
      description: 'Monitoreamos el rendimiento y mejoramos el sistema.',
    },
  },
}

export const howDigniWorksDe: HowDigniWorksTranslations = {
  badge: 'So funktioniert es',
  title: 'Identifizieren. Bauen. Verbinden.',
  titleHighlight: 'Dann in Betrieb nehmen.',
  subtitle:
    'Sie müssen die Technologie nicht selbst durchdringen. Wir diagnostizieren die Exposition, installieren das System und verbessern es laufend.',
  steps: {
    identify: {
      title: 'Identifizieren',
      description: 'Wir verstehen Ihren Ist-Zustand und finden die wertvollste Lücke.',
    },
    design: {
      title: 'Konzipieren',
      description: 'Wir entwerfen die Lösung um Ihren tatsächlichen Workflow.',
    },
    build: {
      title: 'Bauen',
      description: 'Wir bauen und konfigurieren das System.',
    },
    connect: {
      title: 'Verbinden',
      description: 'Wir integrieren es in Ihre bestehenden Tools und Prozesse.',
    },
    deploy: {
      title: 'Bereitstellen',
      description: 'Wir bringen es in Ihren Betrieb.',
    },
    optimize: {
      title: 'Optimieren',
      description: 'Wir überwachen die Leistung und verbessern das System.',
    },
  },
}

export const howDigniWorksAr: HowDigniWorksTranslations = {
  badge: 'كيف يعمل',
  title: 'نحدد. نبني. نربط.',
  titleHighlight: 'ثم نشغّله.',
  subtitle: 'لست بحاجة إلى فهم التقنية. نحدّد التعرض، نُثبّت النظام، ونواصل تحسينه.',
  steps: {
    identify: {
      title: 'تحديد',
      description: 'نفهم وضعك الحالي ونجد الفجوة الأعلى قيمة.',
    },
    design: {
      title: 'تصميم',
      description: 'نصمم الحل حول سير عملك الفعلي.',
    },
    build: {
      title: 'بناء',
      description: 'نبني النظام ونضبطه.',
    },
    connect: {
      title: 'ربط',
      description: 'نربطه بأدواتك وعملياتك الحالية.',
    },
    deploy: {
      title: 'تشغيل',
      description: 'نطلقه داخل عملك.',
    },
    optimize: {
      title: 'تحسين',
      description: 'نراقب الأداء ونحسّن النظام.',
    },
  },
}

export const howDigniWorksByLanguage = {
  en: howDigniWorksEn,
  fr: howDigniWorksFr,
  es: howDigniWorksEs,
  de: howDigniWorksDe,
  ar: howDigniWorksAr,
} as const
