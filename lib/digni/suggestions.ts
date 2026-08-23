export type DigniLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

export const digniSuggestions: Record<DigniLanguage, string[]> = {
  en: [
    'Tell me what’s happening in your business.',
    'We generate demand but inquiries go cold after hours.',
    'Our students finish school without proof employers hire.',
    'Our team still copies information between systems.',
    'Help me identify which exposure is costing us most.',
  ],
  fr: [
    'Dites-moi ce qui se passe dans votre activité.',
    'Nous générons de la demande, mais les demandes refroidissent hors horaires.',
    'Nos étudiants finissent l’école sans preuve que les employeurs embauchent.',
    'Notre équipe copie encore des informations entre systèmes.',
    'Aidez-moi à identifier quelle exposition nous coûte le plus.',
  ],
  es: [
    'Cuénteme qué está pasando en su negocio.',
    'Generamos demanda, pero las consultas se enfrían fuera de horario.',
    'Nuestros estudiantes terminan sin evidencia que los empleadores contraten.',
    'El equipo sigue copiando información entre sistemas.',
    'Ayúdeme a identificar qué exposición nos cuesta más.',
  ],
  de: [
    'Erzählen Sie, was in Ihrem Geschäft passiert.',
    'Wir erzeugen Nachfrage, aber Anfragen kühlen nach Feierabend ab.',
    'Unsere Absolventen haben keinen Nachweis, den Arbeitgeber einstellen.',
    'Unser Team kopiert noch Informationen zwischen Systemen.',
    'Helfen Sie, welche Exposition uns am meisten kostet.',
  ],
  ar: [
    'أخبرني بما يحدث في عملك.',
    'نولّد طلباً لكن الاستفسارات تبرد خارج الدوام.',
    'طلابنا ينهون الدراسة دون إثبات يوظّف عليه أصحاب العمل.',
    'فريقنا ما زال ينسخ المعلومات بين الأنظمة.',
    'ساعدني في تحديد أي تعرّض يكلّفنا أكثر.',
  ],
}

export function getDigniLanguageFromLocale(locale: string): DigniLanguage {
  const lang = locale.split('-')[1]?.toLowerCase()
  if (lang === 'fr' || lang === 'es' || lang === 'de' || lang === 'ar') return lang
  return 'en'
}
