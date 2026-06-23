import type { Language } from '@/app/i18n/translations'

export type HomeChapterId =
  | 'hero'
  | 'capabilities'
  | 'proof'
  | 'demo'
  | 'work'
  | 'insights'
  | 'process'
  | 'mission'
  | 'faq'
  | 'cta'

export const HOME_CHAPTER_ANCHORS: Record<HomeChapterId, string> = {
  hero: 'home-hero',
  capabilities: 'home-capabilities',
  proof: 'home-proof',
  demo: 'home-demo',
  work: 'home-work',
  insights: 'home-insights',
  process: 'home-process',
  mission: 'our-mission',
  faq: 'home-faq',
  cta: 'home-cta',
}

export function getHomeChapters(language: Language) {
  const labels: Record<Language, { index: string; label: string; id: HomeChapterId }[]> = {
    en: [
      { index: '01', label: 'About', id: 'hero' },
      { index: '02', label: 'Services', id: 'capabilities' },
      { index: '03', label: 'Proof', id: 'proof' },
      { index: '04', label: 'Demo', id: 'demo' },
      { index: '05', label: 'Work', id: 'work' },
      { index: '06', label: 'Insights', id: 'insights' },
      { index: '07', label: 'Process', id: 'process' },
      { index: '08', label: 'Mission', id: 'mission' },
      { index: '09', label: 'FAQ', id: 'faq' },
      { index: '10', label: 'Contact', id: 'cta' },
    ],
    fr: [
      { index: '01', label: 'À propos', id: 'hero' },
      { index: '02', label: 'Services', id: 'capabilities' },
      { index: '03', label: 'Preuves', id: 'proof' },
      { index: '04', label: 'Démo', id: 'demo' },
      { index: '05', label: 'Réalisations', id: 'work' },
      { index: '06', label: 'Articles', id: 'insights' },
      { index: '07', label: 'Processus', id: 'process' },
      { index: '08', label: 'Mission', id: 'mission' },
      { index: '09', label: 'FAQ', id: 'faq' },
      { index: '10', label: 'Contact', id: 'cta' },
    ],
    ar: [
      { index: '01', label: 'من نحن', id: 'hero' },
      { index: '02', label: 'الخدمات', id: 'capabilities' },
      { index: '03', label: 'الإثبات', id: 'proof' },
      { index: '04', label: 'عرض', id: 'demo' },
      { index: '05', label: 'الأعمال', id: 'work' },
      { index: '06', label: 'مقالات', id: 'insights' },
      { index: '07', label: 'العملية', id: 'process' },
      { index: '08', label: 'المهمة', id: 'mission' },
      { index: '09', label: 'أسئلة', id: 'faq' },
      { index: '10', label: 'اتصل', id: 'cta' },
    ],
    de: [
      { index: '01', label: 'Über uns', id: 'hero' },
      { index: '02', label: 'Services', id: 'capabilities' },
      { index: '03', label: 'Beweis', id: 'proof' },
      { index: '04', label: 'Demo', id: 'demo' },
      { index: '05', label: 'Arbeit', id: 'work' },
      { index: '06', label: 'Insights', id: 'insights' },
      { index: '07', label: 'Prozess', id: 'process' },
      { index: '08', label: 'Mission', id: 'mission' },
      { index: '09', label: 'FAQ', id: 'faq' },
      { index: '10', label: 'Kontakt', id: 'cta' },
    ],
    es: [
      { index: '01', label: 'Nosotros', id: 'hero' },
      { index: '02', label: 'Servicios', id: 'capabilities' },
      { index: '03', label: 'Prueba', id: 'proof' },
      { index: '04', label: 'Demo', id: 'demo' },
      { index: '05', label: 'Trabajo', id: 'work' },
      { index: '06', label: 'Artículos', id: 'insights' },
      { index: '07', label: 'Proceso', id: 'process' },
      { index: '08', label: 'Misión', id: 'mission' },
      { index: '09', label: 'FAQ', id: 'faq' },
      { index: '10', label: 'Contacto', id: 'cta' },
    ],
  }

  return labels[language].map((chapter) => ({
    index: chapter.index,
    label: chapter.label,
    href: `#${HOME_CHAPTER_ANCHORS[chapter.id]}`,
  }))
}
