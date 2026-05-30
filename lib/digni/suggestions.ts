export type DigniLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

export const digniSuggestions: Record<DigniLanguage, string[]> = {
  en: [
    'Can an AI Employee answer calls after hours for my clinic?',
    'Do you build custom software when off-the-shelf tools fail?',
    'What is the Future-Ready Graduate Program for schools?',
    'How fast can you launch an AI receptionist?',
    'We need food delivery tech like SwiftDrop — can you build that?',
    'What does agentic software cost to get started?',
  ],
  fr: [
    'Un employé IA peut-il répondre après 17h pour ma clinique ?',
    'Construisez-vous du logiciel sur mesure quand le SaaS ne suffit pas ?',
    'Qu’est-ce que le programme Future-Ready Graduate ?',
    'En combien de temps déployez-vous un réceptionniste IA ?',
    'Nous voulons une app de livraison comme SwiftDrop — est-ce possible ?',
    'Quel budget pour démarrer un projet Agentic Softwares ?',
  ],
  es: [
    '¿Puede un empleado IA atender llamadas fuera de horario en mi clínica?',
    '¿Desarrollan software a medida cuando el SaaS no alcanza?',
    '¿Qué es el programa Future-Ready Graduate?',
    '¿Qué tan rápido pueden lanzar un recepcionista IA?',
    'Necesitamos delivery como SwiftDrop — ¿lo construyen?',
    '¿Cuánto cuesta empezar con software agéntico?',
  ],
  de: [
    'Kann ein KI-Mitarbeiter nach 17 Uhr für meine Praxis antworten?',
    'Baut ihr Custom Software, wenn Standard-Tools nicht reichen?',
    'Was ist das Future-Ready Graduate Program?',
    'Wie schnell ist ein KI-Rezeptionist live?',
    'Wir brauchen Delivery-Tech wie SwiftDrop — geht das?',
    'Was kostet der Einstieg bei Agentic Software?',
  ],
  ar: [
    'هل يمكن لموظف الذكاء الاصطناعي الرد بعد ساعات العمل لعيادتي؟',
    'هل تبنون برمجيات مخصصة عندما لا تكفي أدوات SaaS؟',
    'ما هو برنامج Future-Ready Graduate؟',
    'كم يستغرق إطلاق موظف استقبال بالذكاء الاصطناعي؟',
    'نحتاج منصة توصيل مثل SwiftDrop — هل يمكنكم بناؤها؟',
    'ما تكلفة البدء في البرمجيات الوكيلة؟',
  ],
}

export function getDigniLanguageFromLocale(locale: string): DigniLanguage {
  const lang = locale.split('-')[1]?.toLowerCase()
  if (lang === 'fr' || lang === 'es' || lang === 'de' || lang === 'ar') return lang
  return 'en'
}
