import type { Lang } from './locales'

export type GuideCopy = {
  welcome: string; placeholder: string; send: string; thinking: string; error: string
  newChat: string; voiceStart: string; voiceStop: string; book: string; suggestions: string[]
}

export const guideCopy: Record<Lang, GuideCopy> = {
  en: {
    welcome: 'Tell me what keeps slipping in your organisation: missed enquiries, manual reporting, skills gaps. I’ll point you to the system that would fix it, and book a call if you want one.',
    placeholder: 'Ask anything about Digni Digital…', send: 'Send', thinking: 'Thinking…',
    error: 'Something went wrong. Try again, or message us on WhatsApp.', newChat: 'New chat',
    voiceStart: 'Speak your question', voiceStop: 'Stop listening', book: 'Book a call',
    suggestions: ['What does Digni Digital build?', 'We miss WhatsApp enquiries after hours.', 'Our school still prepares report cards by hand.', 'We need a reporting platform for a donor programme.', 'How does Future Ready training work?'],
  },
  fr: {
    welcome: 'Dites-moi ce qui coince dans votre organisation : demandes manquées, reporting manuel, manque de compétences. Je vous oriente vers le système qui réglerait le problème et je peux réserver un appel.',
    placeholder: 'Posez votre question sur Digni Digital…', send: 'Envoyer', thinking: 'Réflexion…',
    error: 'Un problème est survenu. Réessayez ou écrivez-nous sur WhatsApp.', newChat: 'Nouvelle conversation',
    voiceStart: 'Poser la question à l’oral', voiceStop: 'Arrêter l’écoute', book: 'Réserver un appel',
    suggestions: ['Que construit Digni Digital ?', 'Nous ratons des demandes WhatsApp le soir.', 'Notre école prépare encore les bulletins à la main.', 'Il nous faut une plateforme de reporting pour un programme financé.', 'Comment fonctionne la formation Future Ready ?'],
  },
  es: {
    welcome: 'Cuéntame qué se escapa en tu organización: consultas perdidas, reportes manuales, falta de habilidades. Te indico qué sistema lo resolvería y, si quieres, reservo una llamada.',
    placeholder: 'Pregunta lo que quieras sobre Digni Digital…', send: 'Enviar', thinking: 'Pensando…',
    error: 'Algo salió mal. Inténtalo de nuevo o escríbenos por WhatsApp.', newChat: 'Nueva conversación',
    voiceStart: 'Hablar la pregunta', voiceStop: 'Dejar de escuchar', book: 'Reservar llamada',
    suggestions: ['¿Qué construye Digni Digital?', 'Perdemos consultas de WhatsApp fuera de horario.', 'Nuestro colegio aún hace los boletines a mano.', 'Necesitamos una plataforma de reportes para un programa de donantes.', '¿Cómo funciona la formación Future Ready?'],
  },
  de: {
    welcome: 'Sagen Sie mir, was in Ihrer Organisation immer wieder hakt: verpasste Anfragen, manuelle Berichte, fehlende Kompetenzen. Ich zeige Ihnen das passende System und buche auf Wunsch ein Gespräch.',
    placeholder: 'Fragen Sie alles über Digni Digital…', send: 'Senden', thinking: 'Denke nach…',
    error: 'Etwas ist schiefgelaufen. Bitte erneut versuchen oder per WhatsApp schreiben.', newChat: 'Neuer Chat',
    voiceStart: 'Frage einsprechen', voiceStop: 'Zuhören beenden', book: 'Gespräch buchen',
    suggestions: ['Was baut Digni Digital?', 'Wir verpassen WhatsApp-Anfragen nach Feierabend.', 'Unsere Schule erstellt Zeugnisse noch von Hand.', 'Wir brauchen eine Berichtsplattform für ein Geberprogramm.', 'Wie funktioniert das Future-Ready-Training?'],
  },
  ar: {
    welcome: 'أخبرني بما يتعثر في مؤسستك: استفسارات فائتة، أو تقارير يدوية، أو نقص في المهارات. سأرشدك إلى النظام الذي يعالج ذلك، ويمكنني حجز مكالمة إن أردت.',
    placeholder: 'اسأل أي شيء عن ديجني ديجيتال…', send: 'إرسال', thinking: 'جارٍ التفكير…',
    error: 'حدث خطأ. حاول مرة أخرى أو راسلنا على واتساب.', newChat: 'محادثة جديدة',
    voiceStart: 'اطرح سؤالك بالصوت', voiceStop: 'إيقاف الاستماع', book: 'احجز مكالمة',
    suggestions: ['ماذا تبني ديجني ديجيتال؟', 'تفوتنا استفسارات واتساب بعد الدوام.', 'ما زالت مدرستنا تُعدّ كشوف الدرجات يدوياً.', 'نحتاج منصة تقارير لبرنامج ممول من المانحين.', 'كيف يعمل تدريب جاهز للمستقبل؟'],
  },
}

export const speechLang: Record<Lang, string> = { en: 'en-US', fr: 'fr-FR', es: 'es-ES', de: 'de-DE', ar: 'ar-SA' }
