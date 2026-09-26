import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Future Ready | A Legitimate Way to Earn, Not Another Certificate',
    description:
      'Getting hired is someone else’s decision. Making money is the skill. Future Ready teaches legitimate ways to earn: paid work, service offers, and proof a client can pay for.',
  },
  fr: {
    title: 'Future Ready | Un moyen légitime de gagner, pas un certificat de plus',
    description:
      'Être embauché dépend de quelqu’un d’autre. Gagner de l’argent est une compétence. Future Ready enseigne des moyens légitimes de gagner : travail payé, offres de service, et une preuve qu’un client peut payer.',
  },
  es: {
    title: 'Future Ready | Una forma legítima de ganar, no otro certificado',
    description:
      'Que te contraten lo decide otra persona. Ganar dinero es una habilidad. Future Ready enseña formas legítimas de ganar: trabajo pagado, ofertas de servicio y una prueba que un cliente puede pagar.',
  },
  de: {
    title: 'Future Ready | Ein legitimer Weg zu verdienen, kein weiteres Zertifikat',
    description:
      'Eingestellt zu werden entscheidet jemand anderes. Geld verdienen ist eine Fähigkeit. Future Ready lehrt legitime Wege zu verdienen: bezahlte Arbeit, Serviceangebote und einen Nachweis, den ein Kunde bezahlen kann.',
  },
  ar: {
    title: 'Future Ready | وسيلة مشروعة للكسب، لا شهادة أخرى',
    description:
      'التوظيف قرار شخص آخر. كسب المال مهارة. يعلّم Future Ready وسائل مشروعة للكسب: عملاً مدفوعاً، وعروض خدمات، وإثباتاً يستطيع العميل دفع ثمنه.',
  },
} satisfies Record<MetadataLanguage, Metadata>

function getLanguage(locale: string): MetadataLanguage {
  if (locale.includes('fr')) return 'fr'
  if (locale.includes('es')) return 'es'
  if (locale.includes('de')) return 'de'
  if (locale.includes('ar')) return 'ar'
  return 'en'
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return metadataByLanguage[getLanguage(locale)]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
