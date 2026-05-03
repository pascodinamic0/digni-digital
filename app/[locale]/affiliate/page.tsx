'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage, type Language } from '@/app/context/LocaleContext'
import { formatMissedLeadsUsdStat, MISSED_LEADS_USD } from '@/lib/formatMissedLeadsUsdStat'

type AffiliatePageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const affiliatePageCopy = {
  en: {
    heroBadge: 'Partner Program',
    heroTitle: 'Earn While Helping Businesses',
    heroHighlight: 'Transform.',
    heroDescription:
      'Join our affiliate program and earn commissions by creating authentic content that helps businesses capture more leads, students get job-ready, and organizations access enterprise-level technology.',
    trustBadges: {
      experience: 'building growth systems',
      satisfaction: 'client satisfaction',
    },
    applyNow: 'Apply Now',
    bookCall: 'Book a Call',
    quickStats: [
      { value: 'Up to 50%', label: 'On setup & tuition' },
      { value: '90 Days', label: 'Cookie Duration' },
      { value: 'Monthly', label: 'Payouts' },
    ],
    whyLabel: 'Why Join Us',
    whyTitlePrefix: 'Join a',
    whyTitleHighlight: 'Movement',
    whyTitleSuffix: ', Not Just a Program',
    whyDescription:
      "We believe technology should serve humanity. When you partner with us, you're not just earning commissions, you're helping democratize access to opportunity for businesses and students who need it most.",
    missionCards: [
      {
        title: 'Help Businesses Capture Every Lead',
        description:
          'Small businesses lose $62 billion annually to missed leads. Our AI Employee ensures they never miss another opportunity.',
        statLabel: 'in missed leads annually',
      },
      {
        title: 'Help Students Get Job-Ready',
        description:
          '40% of graduates are unemployed 6 months after graduation. Our program gives them real, income-generating skills.',
        statLabel: 'graduate unemployment rate',
      },
      {
        title: 'Democratize Enterprise Tech',
        description:
          'Enterprise software is locked behind million-dollar budgets. We build custom solutions accessible to everyone.',
        statLabel: 'enterprise vs SMB tech gap',
      },
    ],
    howLabel: 'How It Works',
    howTitlePrefix: 'Four Simple Steps to',
    howTitleHighlight: 'Start Earning',
    howDescription: "From application to your first commission, here's exactly how the process works.",
    stepLabel: 'Step',
    steps: [
      {
        title: 'Apply',
        description: 'Submit your application with your social media profiles and audience information.',
      },
      {
        title: 'Get Approved',
        description: 'Receive your unique affiliate link, tracking dashboard, and marketing assets.',
      },
      {
        title: 'Create Content',
        description: 'Produce authentic UGC videos showcasing how our products solve real problems.',
      },
      {
        title: 'Earn Commissions',
        description: 'Get paid for every successful referral. Monthly payouts directly to your account.',
      },
    ],
    productsLabel: "What You'll Promote",
    productsTitlePrefix: 'Three Products That',
    productsTitleHighlight: 'Solve Real Problems',
    productsDescription:
      'Each product addresses a critical challenge. Your content helps the right audience discover solutions that can transform their business or career.',
    products: [
      {
        tagline: 'Never miss a lead again',
        price: '$449/month',
        commission: '50% of $2,000 setup fee',
        target: 'Service businesses running paid ads',
        description: 'AI-powered system that handles calls, qualifies leads, and books appointments 24/7.',
      },
      {
        tagline: 'Students with real income skills',
        price: '$5,000/semester or $12,000/year',
        commission: '50% of semester or yearly tuition',
        target: 'Schools & universities',
        description: 'Complete employability program transforming students into job-ready professionals.',
      },
      {
        tagline: 'Your vision, built to scale',
        price: 'Custom pricing',
        commission: '10% of client-paid project value',
        target: 'Businesses with unique challenges',
        description: 'Agentic Softwares, AI-native software that perceives, reasons, and acts autonomously.',
      },
    ],
    priceLabel: 'Price:',
    commissionLabel: 'Your Commission:',
    targetLabel: 'Target:',
    productLink: 'See results from this product ->',
    benefitsLabel: 'Benefits',
    benefitsTitlePrefix: 'Everything You Need to',
    benefitsTitleHighlight: 'Succeed',
    benefitsDescription:
      'We set you up for success with competitive commissions, professional resources, and dedicated support.',
    benefits: [
      {
        title: 'Competitive Commissions',
        description: 'Earn up to 50% on setup and program tuition, and 10% on Agentic Softwares project fees.',
      },
      {
        title: 'Marketing Assets',
        description: 'Access to professional graphics, video scripts, and promotional materials.',
      },
      {
        title: 'Real-Time Tracking',
        description: 'Monitor your referrals, conversions, and earnings in your personal dashboard.',
      },
      {
        title: 'Monthly Payouts',
        description: 'Reliable monthly payments via bank transfer or PayPal. No minimum threshold.',
      },
      {
        title: 'Dedicated Support',
        description: 'Direct access to our affiliate team for questions, strategies, and optimization.',
      },
      {
        title: 'Exclusive Bonuses',
        description: 'Performance bonuses, early access to new products, and special promotions.',
      },
    ],
    partnersLabel: 'Ideal Partners',
    partnersTitlePrefix: "Who We're",
    partnersTitleHighlight: 'Looking For',
    partnersDescription:
      "If you create content for business owners, entrepreneurs, educators, or tech enthusiasts, you're a great fit for our program.",
    idealAffiliates: [
      {
        title: 'Social Media Influencers',
        description: 'Business, tech, or entrepreneurship focused creators with engaged audiences.',
      },
      {
        title: 'YouTube Creators',
        description: 'Channels covering business, productivity, AI, or education topics.',
      },
      {
        title: 'TikTok & Reels Creators',
        description: 'Short-form content creators in the business and tech space.',
      },
      {
        title: 'Business Coaches',
        description: 'Consultants helping businesses grow and optimize operations.',
      },
      {
        title: 'Marketing Agencies',
        description: 'Agencies looking for white-label or referral partnerships.',
      },
      {
        title: 'Tech Bloggers',
        description: 'Writers covering AI, SaaS, business technology, and digital transformation.',
      },
    ],
    form: {
      sectionLabel: 'Get Started',
      titlePrefix: 'Ready to',
      titleHighlight: 'Join Us?',
      description: 'Apply now to become an affiliate partner, or book a call to learn more about the program.',
      applyTitle: 'Apply Now',
      successTitle: 'Application Received!',
      successDescription: "Thank you for applying. We'll review your application and get back to you within 48 hours.",
      nameLabel: 'Full Name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone / WhatsApp',
      youtubePlaceholder: 'Channel URL',
      audienceLabel: 'Total Audience Size *',
      audiencePlaceholder: 'Select your audience size',
      messageLabel: 'Why are you interested in partnering with us?',
      messagePlaceholder: 'Tell us about your content and audience...',
      submitting: 'Submitting...',
      submit: 'Submit Application',
      error: 'Something went wrong. Please try again or email us directly.',
    },
    talk: {
      title: 'Prefer to Talk?',
      description:
        'Not sure if the affiliate program is right for you? Book a quick call with our team to learn more about the products, commission structure, and how we can support your content creation.',
      points: [
        'Learn about our products in detail',
        'Understand the commission structure',
        'Get answers to your specific questions',
        'Discuss content ideas and strategies',
        'Explore custom partnership opportunities',
      ],
      note: '30-minute call • No obligation',
    },
    faqTitlePrefix: 'Common',
    faqTitleHighlight: 'Questions',
    faqs: [
      {
        question: 'What are the commission rates?',
        answer:
          'You earn 50% of the $2,000 AI Employee setup fee, 50% of the Future-Ready Graduate Program semester ($1,000) or yearly tuition, and 10% of the project value the client pays on Agentic Softwares engagements.',
      },
      {
        question: 'When and how do I get paid?',
        answer:
          "You earn commission once per qualifying sale, when your referral completes payment on an eligible offer. We pay by bank transfer or PayPal once the sale is confirmed; there's no minimum payout threshold.",
      },
      {
        question: 'What kind of content should I create?',
        answer:
          'Authentic UGC works best, product demos, before/after results, problem-solution stories, and honest reviews. We provide content guidelines and scripts to help you get started.',
      },
      {
        question: 'Do I need a large following to join?',
        answer:
          'No. We value engagement and authenticity over follower count. Micro-influencers with niche audiences often outperform larger accounts.',
      },
      {
        question: 'Will I receive training on the products?',
        answer:
          'Yes! All approved affiliates get access to product training, demo accounts, and regular updates so you can speak confidently about our solutions.',
      },
      {
        question: 'How is my referral tracked?',
        answer:
          "You receive a unique affiliate link and tracking code. When someone clicks your link, they're cookied for 90 days, so you get credit even if they don't buy immediately.",
      },
    ],
    finalTitlePrefix: 'Start Earning',
    finalTitleHighlight: 'Today',
    finalDescription:
      'Join our affiliate program and help businesses and students access the technology they need to thrive, while earning competitive commissions.',
  },
  fr: {
    heroBadge: 'Programme Partenaires',
    heroTitle: 'Gagnez en aidant les entreprises a',
    heroHighlight: 'se transformer.',
    heroDescription:
      'Rejoignez notre programme d affiliation et touchez des commissions en creant du contenu authentique qui aide les entreprises a capter plus de prospects, les etudiants a devenir employables et les organisations a acceder a une technologie de niveau entreprise.',
    trustBadges: {
      experience: 'a construire des systemes de croissance',
      satisfaction: 'de satisfaction client',
    },
    applyNow: 'Postuler maintenant',
    bookCall: 'Reserver un appel',
    quickStats: [
      { value: 'Jusqu a 50%', label: 'Sur les frais de setup et de formation' },
      { value: '90 jours', label: 'Duree du cookie' },
      { value: 'Mensuel', label: 'Paiements' },
    ],
    whyLabel: 'Pourquoi nous rejoindre',
    whyTitlePrefix: 'Rejoignez un',
    whyTitleHighlight: 'mouvement',
    whyTitleSuffix: ', pas seulement un programme',
    whyDescription:
      'Nous croyons que la technologie doit servir l humain. En devenant partenaire, vous ne gagnez pas seulement des commissions: vous democratisez l acces aux opportunites pour les entreprises et les etudiants qui en ont le plus besoin.',
    missionCards: [
      {
        title: 'Aidez les entreprises a capter chaque prospect',
        description:
          'Les petites entreprises perdent 62 milliards de dollars par an a cause des prospects manques. Notre AI Employee les aide a ne plus laisser passer d opportunites.',
        statLabel: 'de prospects manques par an',
      },
      {
        title: 'Aidez les etudiants a devenir employables',
        description:
          '40% des diplomes sont sans emploi 6 mois apres la remise du diplome. Notre programme leur donne des competences concretes qui generent des revenus.',
        statLabel: 'taux de chomage des diplomes',
      },
      {
        title: 'Democratisez la technologie d entreprise',
        description:
          'Les logiciels d entreprise restent souvent reserves aux budgets millionnaires. Nous construisons des solutions sur mesure accessibles a tous.',
        statLabel: 'ecart tech entreprise vs PME',
      },
    ],
    howLabel: 'Comment ca marche',
    howTitlePrefix: 'Quatre etapes simples pour',
    howTitleHighlight: 'commencer a gagner',
    howDescription: 'De la candidature a votre premiere commission, voici exactement comment fonctionne le processus.',
    stepLabel: 'Etape',
    steps: [
      {
        title: 'Postulez',
        description: 'Envoyez votre candidature avec vos profils sociaux et les informations sur votre audience.',
      },
      {
        title: 'Soyez approuve',
        description: 'Recevez votre lien affilie unique, votre tableau de suivi et vos supports marketing.',
      },
      {
        title: 'Creez du contenu',
        description: 'Produisez des videos UGC authentiques qui montrent comment nos produits resolvent de vrais problemes.',
      },
      {
        title: 'Touchez vos commissions',
        description: 'Soyez paye pour chaque recommandation qualifiee, avec des paiements mensuels sur votre compte.',
      },
    ],
    productsLabel: 'Ce que vous promouvez',
    productsTitlePrefix: 'Trois produits qui',
    productsTitleHighlight: 'resolvent de vrais problemes',
    productsDescription:
      'Chaque produit repond a un enjeu critique. Votre contenu aide la bonne audience a decouvrir des solutions qui transforment leur entreprise ou leur carriere.',
    products: [
      {
        tagline: 'Ne manquez plus jamais un prospect',
        price: '449 $/mois',
        commission: '50% des 2 000 $ de frais de setup',
        target: 'Entreprises de services avec publicites payantes',
        description: 'Systeme propulse par l IA qui gere les appels, qualifie les prospects et prend des rendez-vous 24/7.',
      },
      {
        tagline: 'Des etudiants avec de vraies competences monetisables',
        price: '5 000 $/semestre ou 12 000 $/an',
        commission: '50% des frais semestriels ou annuels',
        target: 'Ecoles et universites',
        description: 'Programme complet d employabilite qui transforme les etudiants en professionnels prets pour le marche.',
      },
      {
        tagline: 'Votre vision, construite pour passer a l echelle',
        price: 'Tarification sur mesure',
        commission: '10% de la valeur du projet payee par le client',
        target: 'Entreprises avec des defis uniques',
        description: 'Agentic Softwares, logiciel AI-native qui percoit, raisonne et agit de facon autonome.',
      },
    ],
    priceLabel: 'Prix :',
    commissionLabel: 'Votre commission :',
    targetLabel: 'Cible :',
    productLink: 'Voir les resultats de ce produit ->',
    benefitsLabel: 'Avantages',
    benefitsTitlePrefix: 'Tout ce qu il vous faut pour',
    benefitsTitleHighlight: 'reussir',
    benefitsDescription:
      'Nous vous donnons les moyens de reussir avec des commissions competitives, des ressources professionnelles et un accompagnement dedie.',
    benefits: [
      {
        title: 'Commissions competitives',
        description: 'Gagnez jusqu a 50% sur les frais de setup et de formation, et 10% sur les projets Agentic Softwares.',
      },
      {
        title: 'Supports marketing',
        description: 'Accedez a des visuels professionnels, scripts video et supports promotionnels.',
      },
      {
        title: 'Suivi en temps reel',
        description: 'Suivez vos recommandations, conversions et gains dans votre tableau de bord personnel.',
      },
      {
        title: 'Paiements mensuels',
        description: 'Paiements fiables par virement bancaire ou PayPal. Aucun seuil minimum.',
      },
      {
        title: 'Support dedie',
        description: 'Acces direct a notre equipe affiliate pour vos questions, strategies et optimisations.',
      },
      {
        title: 'Bonus exclusifs',
        description: 'Bonus de performance, acces anticipe aux nouveaux produits et promotions speciales.',
      },
    ],
    partnersLabel: 'Partenaires ideaux',
    partnersTitlePrefix: 'Qui nous',
    partnersTitleHighlight: 'recherchons',
    partnersDescription:
      'Si vous creez du contenu pour entrepreneurs, dirigeants, educateurs ou passionnes de tech, vous pouvez etre un excellent partenaire.',
    idealAffiliates: [
      {
        title: 'Influenceurs social media',
        description: 'Createurs axes business, tech ou entrepreneuriat avec une audience engagee.',
      },
      {
        title: 'Createurs YouTube',
        description: 'Chaines sur le business, la productivite, l IA ou l education.',
      },
      {
        title: 'Createurs TikTok et Reels',
        description: 'Createurs de formats courts dans l univers business et tech.',
      },
      {
        title: 'Business coaches',
        description: 'Consultants qui aident les entreprises a croitre et optimiser leurs operations.',
      },
      {
        title: 'Agences marketing',
        description: 'Agences qui cherchent des partenariats white-label ou de recommandation.',
      },
      {
        title: 'Blogueurs tech',
        description: 'Redacteurs couvrant IA, SaaS, technologie business et transformation digitale.',
      },
    ],
    form: {
      sectionLabel: 'Commencer',
      titlePrefix: 'Pret a',
      titleHighlight: 'nous rejoindre ?',
      description: 'Postulez pour devenir partenaire affilie, ou reservez un appel pour en savoir plus sur le programme.',
      applyTitle: 'Postuler maintenant',
      successTitle: 'Candidature recue !',
      successDescription: 'Merci pour votre candidature. Nous l examinerons et vous recontacterons sous 48 heures.',
      nameLabel: 'Nom complet *',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Adresse e-mail *',
      phoneLabel: 'Telephone / WhatsApp',
      youtubePlaceholder: 'URL de la chaine',
      audienceLabel: 'Taille totale de votre audience *',
      audiencePlaceholder: 'Selectionnez la taille de votre audience',
      messageLabel: 'Pourquoi souhaitez-vous devenir partenaire ?',
      messagePlaceholder: 'Parlez-nous de votre contenu et de votre audience...',
      submitting: 'Envoi...',
      submit: 'Envoyer la candidature',
      error: 'Une erreur est survenue. Reessayez ou envoyez-nous directement un e-mail.',
    },
    talk: {
      title: 'Vous preferez en parler ?',
      description:
        'Vous ne savez pas encore si le programme affiliate est fait pour vous ? Reservez un court appel avec notre equipe pour comprendre les produits, la structure de commission et notre soutien a votre creation de contenu.',
      points: [
        'Comprendre nos produits en detail',
        'Clarifier la structure des commissions',
        'Obtenir des reponses a vos questions',
        'Discuter d idees et de strategies de contenu',
        'Explorer des opportunites de partenariat sur mesure',
      ],
      note: 'Appel de 30 minutes • Sans obligation',
    },
    faqTitlePrefix: 'Questions',
    faqTitleHighlight: 'frequentes',
    faqs: [
      {
        question: 'Quels sont les taux de commission ?',
        answer:
          'Vous gagnez 50% des 2 000 $ de frais de setup AI Employee, 50% des frais semestriels (1 000 $) ou annuels du Future-Ready Graduate Program, et 10% de la valeur payee par le client sur les projets Agentic Softwares.',
      },
      {
        question: 'Quand et comment suis-je paye ?',
        answer:
          'Vous gagnez une commission pour chaque vente qualifiee lorsque votre recommandation finalise le paiement d une offre eligible. Nous payons par virement bancaire ou PayPal une fois la vente confirmee, sans seuil minimum.',
      },
      {
        question: 'Quel type de contenu dois-je creer ?',
        answer:
          'Le contenu UGC authentique fonctionne le mieux: demos produit, avant/apres, histoires probleme-solution et avis honnetes. Nous fournissons des lignes directrices et scripts pour demarrer.',
      },
      {
        question: 'Faut-il une grande audience pour rejoindre ?',
        answer:
          'Non. Nous valorisons l engagement et l authenticite plus que le nombre d abonnes. Les micro-influenceurs avec des audiences de niche performent souvent mieux.',
      },
      {
        question: 'Vais-je etre forme aux produits ?',
        answer:
          'Oui. Tous les affilies approuves recoivent des formations produit, des comptes de demo et des mises a jour regulieres pour parler de nos solutions avec confiance.',
      },
      {
        question: 'Comment ma recommandation est-elle suivie ?',
        answer:
          'Vous recevez un lien affilie unique et un code de suivi. Lorsqu une personne clique sur votre lien, un cookie de 90 jours vous attribue la vente meme si l achat n est pas immediat.',
      },
    ],
    finalTitlePrefix: 'Commencez a gagner',
    finalTitleHighlight: 'des aujourd hui',
    finalDescription:
      'Rejoignez notre programme affiliate et aidez entreprises et etudiants a acceder a la technologie dont ils ont besoin pour prosperer, tout en gagnant des commissions competitives.',
  },
  es: {
    heroBadge: 'Programa de Partners',
    heroTitle: 'Gana mientras ayudas a empresas a',
    heroHighlight: 'transformarse.',
    heroDescription:
      'Unete a nuestro programa de afiliados y gana comisiones creando contenido autentico que ayuda a las empresas a captar mas leads, a los estudiantes a estar listos para trabajar y a las organizaciones a acceder a tecnologia de nivel empresarial.',
    trustBadges: {
      experience: 'construyendo sistemas de crecimiento',
      satisfaction: 'satisfaccion de clientes',
    },
    applyNow: 'Postular ahora',
    bookCall: 'Reservar llamada',
    quickStats: [
      { value: 'Hasta 50%', label: 'En setup y matricula' },
      { value: '90 dias', label: 'Duracion de cookie' },
      { value: 'Mensual', label: 'Pagos' },
    ],
    whyLabel: 'Por que unirte',
    whyTitlePrefix: 'Unete a un',
    whyTitleHighlight: 'movimiento',
    whyTitleSuffix: ', no solo a un programa',
    whyDescription:
      'Creemos que la tecnologia debe servir a las personas. Al asociarte con nosotros, no solo ganas comisiones: ayudas a democratizar el acceso a oportunidades para empresas y estudiantes que mas lo necesitan.',
    missionCards: [
      {
        title: 'Ayuda a las empresas a captar cada lead',
        description:
          'Las pequenas empresas pierden 62 mil millones de dolares al ano por leads perdidos. Nuestro AI Employee evita que pierdan nuevas oportunidades.',
        statLabel: 'en leads perdidos al ano',
      },
      {
        title: 'Ayuda a estudiantes a estar listos para trabajar',
        description:
          'El 40% de los graduados esta desempleado 6 meses despues de graduarse. Nuestro programa les da habilidades reales para generar ingresos.',
        statLabel: 'tasa de desempleo de graduados',
      },
      {
        title: 'Democratiza la tecnologia empresarial',
        description:
          'El software empresarial suele estar bloqueado por presupuestos millonarios. Creamos soluciones a medida accesibles para todos.',
        statLabel: 'brecha tech empresa vs pyme',
      },
    ],
    howLabel: 'Como funciona',
    howTitlePrefix: 'Cuatro pasos simples para',
    howTitleHighlight: 'empezar a ganar',
    howDescription: 'Desde la postulacion hasta tu primera comision, asi funciona exactamente el proceso.',
    stepLabel: 'Paso',
    steps: [
      {
        title: 'Postula',
        description: 'Envia tu solicitud con tus perfiles de redes sociales e informacion de audiencia.',
      },
      {
        title: 'Recibe aprobacion',
        description: 'Recibe tu enlace unico de afiliado, panel de seguimiento y materiales de marketing.',
      },
      {
        title: 'Crea contenido',
        description: 'Produce videos UGC autenticos que muestren como nuestros productos resuelven problemas reales.',
      },
      {
        title: 'Gana comisiones',
        description: 'Cobra por cada referido exitoso, con pagos mensuales directamente a tu cuenta.',
      },
    ],
    productsLabel: 'Que promocionaras',
    productsTitlePrefix: 'Tres productos que',
    productsTitleHighlight: 'resuelven problemas reales',
    productsDescription:
      'Cada producto responde a un reto critico. Tu contenido ayuda a la audiencia correcta a descubrir soluciones que pueden transformar su negocio o carrera.',
    products: [
      {
        tagline: 'No vuelvas a perder un lead',
        price: '449 $/mes',
        commission: '50% del setup fee de 2.000 $',
        target: 'Empresas de servicios con anuncios pagados',
        description: 'Sistema con IA que atiende llamadas, califica leads y agenda citas 24/7.',
      },
      {
        tagline: 'Estudiantes con habilidades reales para generar ingresos',
        price: '5.000 $/semestre o 12.000 $/ano',
        commission: '50% de la matricula semestral o anual',
        target: 'Escuelas y universidades',
        description: 'Programa completo de empleabilidad que transforma estudiantes en profesionales listos para trabajar.',
      },
      {
        tagline: 'Tu vision, construida para escalar',
        price: 'Precio personalizado',
        commission: '10% del valor del proyecto pagado por el cliente',
        target: 'Empresas con desafios unicos',
        description: 'Agentic Softwares, software AI-native que percibe, razona y actua de forma autonoma.',
      },
    ],
    priceLabel: 'Precio:',
    commissionLabel: 'Tu comision:',
    targetLabel: 'Audiencia:',
    productLink: 'Ver resultados de este producto ->',
    benefitsLabel: 'Beneficios',
    benefitsTitlePrefix: 'Todo lo que necesitas para',
    benefitsTitleHighlight: 'tener exito',
    benefitsDescription:
      'Te preparamos para ganar con comisiones competitivas, recursos profesionales y soporte dedicado.',
    benefits: [
      {
        title: 'Comisiones competitivas',
        description: 'Gana hasta 50% en setup y matricula, y 10% en proyectos de Agentic Softwares.',
      },
      {
        title: 'Materiales de marketing',
        description: 'Accede a graficos profesionales, guiones de video y materiales promocionales.',
      },
      {
        title: 'Seguimiento en tiempo real',
        description: 'Monitorea tus referidos, conversiones e ingresos en tu panel personal.',
      },
      {
        title: 'Pagos mensuales',
        description: 'Pagos confiables por transferencia bancaria o PayPal. Sin minimo de retiro.',
      },
      {
        title: 'Soporte dedicado',
        description: 'Acceso directo a nuestro equipo de afiliados para preguntas, estrategias y optimizacion.',
      },
      {
        title: 'Bonos exclusivos',
        description: 'Bonos por rendimiento, acceso anticipado a nuevos productos y promociones especiales.',
      },
    ],
    partnersLabel: 'Partners ideales',
    partnersTitlePrefix: 'A quien',
    partnersTitleHighlight: 'buscamos',
    partnersDescription:
      'Si creas contenido para duenos de negocio, emprendedores, educadores o entusiastas tech, puedes ser un gran partner.',
    idealAffiliates: [
      {
        title: 'Influencers de redes sociales',
        description: 'Creadores enfocados en negocio, tecnologia o emprendimiento con audiencias activas.',
      },
      {
        title: 'Creadores de YouTube',
        description: 'Canales sobre negocio, productividad, IA o educacion.',
      },
      {
        title: 'Creadores de TikTok y Reels',
        description: 'Creadores de formato corto en el espacio de negocio y tecnologia.',
      },
      {
        title: 'Business coaches',
        description: 'Consultores que ayudan a empresas a crecer y optimizar operaciones.',
      },
      {
        title: 'Agencias de marketing',
        description: 'Agencias que buscan alianzas white-label o de referidos.',
      },
      {
        title: 'Blogueros tech',
        description: 'Escritores sobre IA, SaaS, tecnologia empresarial y transformacion digital.',
      },
    ],
    form: {
      sectionLabel: 'Empezar',
      titlePrefix: 'Listo para',
      titleHighlight: 'unirte?',
      description: 'Postula para convertirte en partner afiliado o reserva una llamada para conocer mejor el programa.',
      applyTitle: 'Postular ahora',
      successTitle: 'Solicitud recibida!',
      successDescription: 'Gracias por postular. Revisaremos tu solicitud y te responderemos en un plazo de 48 horas.',
      nameLabel: 'Nombre completo *',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electronico *',
      phoneLabel: 'Telefono / WhatsApp',
      youtubePlaceholder: 'URL del canal',
      audienceLabel: 'Tamano total de audiencia *',
      audiencePlaceholder: 'Selecciona el tamano de tu audiencia',
      messageLabel: 'Por que te interesa asociarte con nosotros?',
      messagePlaceholder: 'Cuentanos sobre tu contenido y audiencia...',
      submitting: 'Enviando...',
      submit: 'Enviar solicitud',
      error: 'Algo salio mal. Intentalo de nuevo o escribenos directamente por email.',
    },
    talk: {
      title: 'Prefieres hablar?',
      description:
        'No sabes si el programa de afiliados es para ti? Reserva una llamada rapida con nuestro equipo para conocer los productos, la estructura de comisiones y como podemos apoyar tu creacion de contenido.',
      points: [
        'Conocer nuestros productos en detalle',
        'Entender la estructura de comisiones',
        'Resolver tus preguntas especificas',
        'Hablar de ideas y estrategias de contenido',
        'Explorar oportunidades de partnership a medida',
      ],
      note: 'Llamada de 30 minutos • Sin compromiso',
    },
    faqTitlePrefix: 'Preguntas',
    faqTitleHighlight: 'frecuentes',
    faqs: [
      {
        question: 'Cuales son las comisiones?',
        answer:
          'Ganas 50% del setup fee de 2.000 $ de AI Employee, 50% de la matricula semestral (1.000 $) o anual del Future-Ready Graduate Program, y 10% del valor del proyecto que paga el cliente en engagements de Agentic Softwares.',
      },
      {
        question: 'Cuando y como cobro?',
        answer:
          'Ganas comision una vez por venta calificada, cuando tu referido completa el pago de una oferta elegible. Pagamos por transferencia bancaria o PayPal cuando la venta se confirma; no hay minimo de retiro.',
      },
      {
        question: 'Que tipo de contenido debo crear?',
        answer:
          'El UGC autentico funciona mejor: demos de producto, resultados antes/despues, historias problema-solucion y resenas honestas. Te damos guias y guiones para empezar.',
      },
      {
        question: 'Necesito una audiencia grande para unirme?',
        answer:
          'No. Valoramos el engagement y la autenticidad mas que el numero de seguidores. Los microinfluencers con nichos claros suelen superar a cuentas grandes.',
      },
      {
        question: 'Recibire formacion sobre los productos?',
        answer:
          'Si. Todos los afiliados aprobados reciben formacion de producto, cuentas demo y actualizaciones regulares para hablar de nuestras soluciones con seguridad.',
      },
      {
        question: 'Como se rastrea mi referido?',
        answer:
          'Recibes un enlace unico de afiliado y un codigo de seguimiento. Cuando alguien hace clic, queda con cookie por 90 dias, asi recibes credito aunque no compre inmediatamente.',
      },
    ],
    finalTitlePrefix: 'Empieza a ganar',
    finalTitleHighlight: 'hoy',
    finalDescription:
      'Unete a nuestro programa de afiliados y ayuda a empresas y estudiantes a acceder a la tecnologia que necesitan para prosperar, mientras ganas comisiones competitivas.',
  },
  de: {
    heroBadge: 'Partnerprogramm',
    heroTitle: 'Verdiene, waehrend du Unternehmen beim',
    heroHighlight: 'Wandel hilfst.',
    heroDescription:
      'Werde Teil unseres Affiliate-Programms und verdiene Provisionen mit authentischem Content, der Unternehmen zu mehr Leads, Studierenden zu Job-Reife und Organisationen zu Enterprise-Technologie verhilft.',
    trustBadges: {
      experience: 'im Aufbau von Wachstumssystemen',
      satisfaction: 'Kundenzufriedenheit',
    },
    applyNow: 'Jetzt bewerben',
    bookCall: 'Call buchen',
    quickStats: [
      { value: 'Bis zu 50%', label: 'Auf Setup und Tuition' },
      { value: '90 Tage', label: 'Cookie-Laufzeit' },
      { value: 'Monatlich', label: 'Auszahlungen' },
    ],
    whyLabel: 'Warum mitmachen',
    whyTitlePrefix: 'Werde Teil einer',
    whyTitleHighlight: 'Bewegung',
    whyTitleSuffix: ', nicht nur eines Programms',
    whyDescription:
      'Wir glauben, dass Technologie Menschen dienen soll. Als Partner verdienst du nicht nur Provisionen, sondern hilfst, Chancen fuer Unternehmen und Studierende zugaenglicher zu machen.',
    missionCards: [
      {
        title: 'Hilf Unternehmen, jeden Lead zu erfassen',
        description:
          'Kleine Unternehmen verlieren jaehrlich 62 Milliarden Dollar durch verpasste Leads. Unser AI Employee sorgt dafuer, dass keine Chance verloren geht.',
        statLabel: 'jaehrlich durch verpasste Leads',
      },
      {
        title: 'Hilf Studierenden, jobbereit zu werden',
        description:
          '40% der Absolventen sind 6 Monate nach dem Abschluss arbeitslos. Unser Programm vermittelt echte, einkommensfaehige Skills.',
        statLabel: 'Arbeitslosenquote bei Absolventen',
      },
      {
        title: 'Demokratisiere Enterprise-Technologie',
        description:
          'Enterprise-Software ist oft hinter Millionenbudgets verschlossen. Wir bauen individuelle Loesungen, die zugaenglich sind.',
        statLabel: 'Tech-Luecke Enterprise vs KMU',
      },
    ],
    howLabel: 'So funktioniert es',
    howTitlePrefix: 'Vier einfache Schritte zum',
    howTitleHighlight: 'Verdienen',
    howDescription: 'Von der Bewerbung bis zur ersten Provision: So laeuft der Prozess genau ab.',
    stepLabel: 'Schritt',
    steps: [
      {
        title: 'Bewerben',
        description: 'Reiche deine Bewerbung mit Social-Profilen und Informationen zu deiner Audience ein.',
      },
      {
        title: 'Freigabe erhalten',
        description: 'Erhalte deinen eindeutigen Affiliate-Link, ein Tracking-Dashboard und Marketing-Assets.',
      },
      {
        title: 'Content erstellen',
        description: 'Produziere authentische UGC-Videos, die zeigen, wie unsere Produkte echte Probleme loesen.',
      },
      {
        title: 'Provisionen verdienen',
        description: 'Werde fuer jede erfolgreiche Empfehlung bezahlt, mit monatlichen Auszahlungen auf dein Konto.',
      },
    ],
    productsLabel: 'Was du bewirbst',
    productsTitlePrefix: 'Drei Produkte, die',
    productsTitleHighlight: 'echte Probleme loesen',
    productsDescription:
      'Jedes Produkt adressiert eine kritische Herausforderung. Dein Content hilft der richtigen Zielgruppe, Loesungen zu entdecken, die Business oder Karriere veraendern.',
    products: [
      {
        tagline: 'Nie wieder einen Lead verpassen',
        price: '449 $/Monat',
        commission: '50% der 2.000 $ Setup-Gebuehr',
        target: 'Service-Unternehmen mit Paid Ads',
        description: 'KI-gestuetztes System, das Anrufe annimmt, Leads qualifiziert und Termine 24/7 bucht.',
      },
      {
        tagline: 'Studierende mit echten Einkommens-Skills',
        price: '5.000 $/Semester oder 12.000 $/Jahr',
        commission: '50% der Semester- oder Jahresgebuehr',
        target: 'Schulen und Universitaeten',
        description: 'Vollstaendiges Employability-Programm, das Studierende zu jobbereiten Fachkraeften macht.',
      },
      {
        tagline: 'Deine Vision, gebaut fuer Skalierung',
        price: 'Individuelle Preise',
        commission: '10% des vom Kunden bezahlten Projektwerts',
        target: 'Unternehmen mit einzigartigen Herausforderungen',
        description: 'Agentic Softwares, AI-native Software, die autonom wahrnimmt, denkt und handelt.',
      },
    ],
    priceLabel: 'Preis:',
    commissionLabel: 'Deine Provision:',
    targetLabel: 'Zielgruppe:',
    productLink: 'Ergebnisse dieses Produkts ansehen ->',
    benefitsLabel: 'Vorteile',
    benefitsTitlePrefix: 'Alles, was du fuer',
    benefitsTitleHighlight: 'Erfolg brauchst',
    benefitsDescription:
      'Wir statten dich mit wettbewerbsfaehigen Provisionen, professionellen Ressourcen und dediziertem Support aus.',
    benefits: [
      {
        title: 'Wettbewerbsfaehige Provisionen',
        description: 'Verdiene bis zu 50% auf Setup und Programmgebuehren sowie 10% auf Agentic Softwares Projektgebuehren.',
      },
      {
        title: 'Marketing-Assets',
        description: 'Zugang zu professionellen Grafiken, Video-Skripten und Werbematerialien.',
      },
      {
        title: 'Tracking in Echtzeit',
        description: 'Verfolge Empfehlungen, Conversions und Einnahmen in deinem persoenlichen Dashboard.',
      },
      {
        title: 'Monatliche Auszahlungen',
        description: 'Zuverlaessige Zahlungen per Bankueberweisung oder PayPal. Keine Mindestgrenze.',
      },
      {
        title: 'Dedizierter Support',
        description: 'Direkter Zugang zu unserem Affiliate-Team fuer Fragen, Strategien und Optimierung.',
      },
      {
        title: 'Exklusive Boni',
        description: 'Performance-Boni, frueher Zugang zu neuen Produkten und Sonderaktionen.',
      },
    ],
    partnersLabel: 'Ideale Partner',
    partnersTitlePrefix: 'Wen wir',
    partnersTitleHighlight: 'suchen',
    partnersDescription:
      'Wenn du Content fuer Unternehmer, Business Owner, Bildungseinrichtungen oder Tech-Interessierte erstellst, passt du gut zu unserem Programm.',
    idealAffiliates: [
      {
        title: 'Social-Media-Influencer',
        description: 'Creator mit Fokus auf Business, Tech oder Unternehmertum und engagierten Audiences.',
      },
      {
        title: 'YouTube-Creator',
        description: 'Kanaele zu Business, Produktivitaet, KI oder Bildung.',
      },
      {
        title: 'TikTok- und Reels-Creator',
        description: 'Short-Form-Creator im Business- und Tech-Bereich.',
      },
      {
        title: 'Business Coaches',
        description: 'Berater, die Unternehmen beim Wachstum und bei Operations helfen.',
      },
      {
        title: 'Marketingagenturen',
        description: 'Agenturen, die White-Label- oder Referral-Partnerschaften suchen.',
      },
      {
        title: 'Tech-Blogger',
        description: 'Autoren zu KI, SaaS, Business-Technologie und digitaler Transformation.',
      },
    ],
    form: {
      sectionLabel: 'Loslegen',
      titlePrefix: 'Bereit,',
      titleHighlight: 'mitzumachen?',
      description: 'Bewirb dich als Affiliate-Partner oder buche einen Call, um mehr ueber das Programm zu erfahren.',
      applyTitle: 'Jetzt bewerben',
      successTitle: 'Bewerbung erhalten!',
      successDescription: 'Danke fuer deine Bewerbung. Wir pruefen sie und melden uns innerhalb von 48 Stunden.',
      nameLabel: 'Vollstaendiger Name *',
      namePlaceholder: 'Dein Name',
      emailLabel: 'E-Mail-Adresse *',
      phoneLabel: 'Telefon / WhatsApp',
      youtubePlaceholder: 'Kanal-URL',
      audienceLabel: 'Gesamte Audience-Groesse *',
      audiencePlaceholder: 'Waehle deine Audience-Groesse',
      messageLabel: 'Warum moechtest du mit uns Partner werden?',
      messagePlaceholder: 'Erzaehle uns von deinem Content und deiner Audience...',
      submitting: 'Wird gesendet...',
      submit: 'Bewerbung absenden',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe uns direkt per E-Mail.',
    },
    talk: {
      title: 'Lieber sprechen?',
      description:
        'Nicht sicher, ob das Affiliate-Programm zu dir passt? Buche einen kurzen Call mit unserem Team und erfahre mehr ueber Produkte, Provisionen und unsere Unterstuetzung fuer deinen Content.',
      points: [
        'Unsere Produkte im Detail verstehen',
        'Die Provisionsstruktur kennenlernen',
        'Antworten auf deine konkreten Fragen bekommen',
        'Content-Ideen und Strategien besprechen',
        'Individuelle Partnerschaftsmoeglichkeiten erkunden',
      ],
      note: '30-Minuten-Call • Keine Verpflichtung',
    },
    faqTitlePrefix: 'Haeufige',
    faqTitleHighlight: 'Fragen',
    faqs: [
      {
        question: 'Wie hoch sind die Provisionen?',
        answer:
          'Du verdienst 50% der 2.000 $ Setup-Gebuehr fuer AI Employee, 50% der Semestergebuehr (1.000 $) oder Jahresgebuehr des Future-Ready Graduate Program und 10% des Projektwerts, den Kunden fuer Agentic Softwares Engagements bezahlen.',
      },
      {
        question: 'Wann und wie werde ich bezahlt?',
        answer:
          'Du verdienst eine Provision pro qualifiziertem Verkauf, sobald deine Empfehlung eine berechtigte Offer bezahlt. Wir zahlen per Bankueberweisung oder PayPal nach Bestaetigung des Verkaufs; es gibt keine Mindestgrenze.',
      },
      {
        question: 'Welche Art von Content soll ich erstellen?',
        answer:
          'Authentischer UGC funktioniert am besten: Produktdemos, Vorher/Nachher-Ergebnisse, Problem-Loesung-Stories und ehrliche Reviews. Wir liefern Guidelines und Skripte fuer den Start.',
      },
      {
        question: 'Brauche ich eine grosse Followerschaft?',
        answer:
          'Nein. Engagement und Authentizitaet zaehlen mehr als Follower-Zahlen. Micro-Influencer mit Nischen-Audiences performen oft besser.',
      },
      {
        question: 'Bekomme ich Produktschulungen?',
        answer:
          'Ja. Alle freigegebenen Affiliates erhalten Produktschulungen, Demo-Accounts und regelmaessige Updates, damit sie sicher ueber unsere Loesungen sprechen koennen.',
      },
      {
        question: 'Wie wird meine Empfehlung getrackt?',
        answer:
          'Du erhaeltst einen eindeutigen Affiliate-Link und Tracking-Code. Wenn jemand klickt, gilt ein 90-Tage-Cookie, damit du auch bei spaeterem Kauf Credit bekommst.',
      },
    ],
    finalTitlePrefix: 'Starte heute',
    finalTitleHighlight: 'mit dem Verdienen',
    finalDescription:
      'Werde Teil unseres Affiliate-Programms und hilf Unternehmen und Studierenden, die Technologie zu nutzen, die sie fuer Wachstum brauchen, waehrend du wettbewerbsfaehige Provisionen verdienst.',
  },
  ar: {
    heroBadge: 'برنامج الشركاء',
    heroTitle: 'اربح وانت تساعد الشركات على',
    heroHighlight: 'التحول.',
    heroDescription:
      'انضم الى برنامج الشركاء واربح عمولات من خلال محتوى اصيل يساعد الشركات على التقاط مزيد من العملاء المحتملين، والطلاب على الجاهزية للعمل، والمؤسسات على الوصول الى تقنية بمستوى الشركات الكبرى.',
    trustBadges: {
      experience: 'في بناء انظمة نمو',
      satisfaction: 'رضا العملاء',
    },
    applyNow: 'قدّم الآن',
    bookCall: 'احجز مكالمة',
    quickStats: [
      { value: 'حتى 50%', label: 'على الاعداد والرسوم الدراسية' },
      { value: '90 يوما', label: 'مدة الكوكي' },
      { value: 'شهريا', label: 'المدفوعات' },
    ],
    whyLabel: 'لماذا تنضم الينا',
    whyTitlePrefix: 'انضم الى',
    whyTitleHighlight: 'حركة',
    whyTitleSuffix: '، وليس مجرد برنامج',
    whyDescription:
      'نؤمن ان التقنية يجب ان تخدم الانسان. عندما تصبح شريكا معنا، فانت لا تكسب العمولات فقط، بل تساعد على فتح باب الفرص امام الشركات والطلاب الذين يحتاجونها اكثر.',
    missionCards: [
      {
        title: 'ساعد الشركات على التقاط كل عميل محتمل',
        description:
          'تخسر الشركات الصغيرة 62 مليار دولار سنويا بسبب العملاء المحتملين الضائعين. يضمن AI Employee الا تضيع فرصة اخرى.',
        statLabel: 'من العملاء المحتملين الضائعين سنويا',
      },
      {
        title: 'ساعد الطلاب على الجاهزية لسوق العمل',
        description:
          '40% من الخريجين بلا عمل بعد 6 اشهر من التخرج. يمنحهم برنامجنا مهارات عملية قادرة على توليد دخل.',
        statLabel: 'معدل بطالة الخريجين',
      },
      {
        title: 'اجعل تقنية الشركات الكبرى متاحة',
        description:
          'غالبا ما تكون برمجيات الشركات الكبرى محصورة خلف ميزانيات ضخمة. نحن نبني حلولا مخصصة يمكن الوصول اليها.',
        statLabel: 'فجوة التقنية بين الشركات الكبرى والصغيرة',
      },
    ],
    howLabel: 'كيف يعمل البرنامج',
    howTitlePrefix: 'اربع خطوات بسيطة لكي',
    howTitleHighlight: 'تبدأ الربح',
    howDescription: 'من التقديم حتى اول عمولة، هذه هي خطوات العمل بوضوح.',
    stepLabel: 'الخطوة',
    steps: [
      {
        title: 'قدّم',
        description: 'ارسل طلبك مع حساباتك الاجتماعية ومعلومات جمهورك.',
      },
      {
        title: 'احصل على الموافقة',
        description: 'استلم رابطك الفريد، ولوحة التتبع، ومواد التسويق.',
      },
      {
        title: 'انشئ محتوى',
        description: 'اصنع فيديوهات UGC اصيلة تعرض كيف تحل منتجاتنا مشكلات حقيقية.',
      },
      {
        title: 'اكسب العمولات',
        description: 'تحصل على الدفع مقابل كل احالة ناجحة، مع مدفوعات شهرية مباشرة الى حسابك.',
      },
    ],
    productsLabel: 'ما الذي ستروّج له',
    productsTitlePrefix: 'ثلاثة منتجات',
    productsTitleHighlight: 'تحل مشكلات حقيقية',
    productsDescription:
      'كل منتج يعالج تحديا مهما. يساعد محتواك الجمهور المناسب على اكتشاف حلول يمكن ان تحول اعمالهم او مسارهم المهني.',
    products: [
      {
        tagline: 'لا تفقد عميلا محتملا مرة اخرى',
        price: '449 دولار/شهر',
        commission: '50% من رسوم الاعداد البالغة 2,000 دولار',
        target: 'شركات الخدمات التي تستخدم اعلانات مدفوعة',
        description: 'نظام مدعوم بالذكاء الاصطناعي يتولى المكالمات، يؤهل العملاء المحتملين، ويحجز المواعيد 24/7.',
      },
      {
        tagline: 'طلاب بمهارات حقيقية للدخل',
        price: '5,000 دولار/فصل او 12,000 دولار/سنة',
        commission: '50% من رسوم الفصل او السنة',
        target: 'المدارس والجامعات',
        description: 'برنامج توظيف كامل يحول الطلاب الى محترفين جاهزين للعمل.',
      },
      {
        tagline: 'رؤيتك مبنية للتوسع',
        price: 'تسعير مخصص',
        commission: '10% من قيمة المشروع التي يدفعها العميل',
        target: 'شركات لديها تحديات فريدة',
        description: 'Agentic Softwares، برمجيات AI-native تدرك وتفكر وتتصرف بشكل مستقل.',
      },
    ],
    priceLabel: 'السعر:',
    commissionLabel: 'عمولتك:',
    targetLabel: 'الجمهور المستهدف:',
    productLink: 'شاهد نتائج هذا المنتج ->',
    benefitsLabel: 'المزايا',
    benefitsTitlePrefix: 'كل ما تحتاجه لكي',
    benefitsTitleHighlight: 'تنجح',
    benefitsDescription:
      'نجهزك للنجاح بعمولات منافسة، وموارد احترافية، ودعم مخصص.',
    benefits: [
      {
        title: 'عمولات منافسة',
        description: 'اربح حتى 50% على الاعداد ورسوم البرامج، و10% على رسوم مشاريع Agentic Softwares.',
      },
      {
        title: 'مواد تسويقية',
        description: 'احصل على تصاميم احترافية، نصوص فيديو، ومواد ترويجية.',
      },
      {
        title: 'تتبع فوري',
        description: 'راقب احالاتك، التحويلات، والارباح من لوحة التحكم الخاصة بك.',
      },
      {
        title: 'مدفوعات شهرية',
        description: 'مدفوعات موثوقة عبر التحويل البنكي او PayPal، بلا حد ادنى.',
      },
      {
        title: 'دعم مخصص',
        description: 'وصول مباشر الى فريق الشركاء للاسئلة والاستراتيجيات والتحسين.',
      },
      {
        title: 'مكافآت حصرية',
        description: 'مكافآت اداء، وصول مبكر الى منتجات جديدة، وعروض خاصة.',
      },
    ],
    partnersLabel: 'الشركاء المثاليون',
    partnersTitlePrefix: 'من',
    partnersTitleHighlight: 'نبحث عنه',
    partnersDescription:
      'اذا كنت تنشئ محتوى لاصحاب الاعمال او رواد الاعمال او المعلمين او محبي التقنية، فقد تكون مناسبا جدا لبرنامجنا.',
    idealAffiliates: [
      {
        title: 'مؤثرو وسائل التواصل',
        description: 'صناع محتوى في الاعمال او التقنية او ريادة الاعمال مع جمهور متفاعل.',
      },
      {
        title: 'صناع محتوى YouTube',
        description: 'قنوات تغطي الاعمال، الانتاجية، الذكاء الاصطناعي، او التعليم.',
      },
      {
        title: 'صناع TikTok و Reels',
        description: 'صناع محتوى قصير في مجال الاعمال والتقنية.',
      },
      {
        title: 'مدربو الاعمال',
        description: 'استشاريون يساعدون الشركات على النمو وتحسين العمليات.',
      },
      {
        title: 'وكالات التسويق',
        description: 'وكالات تبحث عن شراكات white-label او شراكات احالة.',
      },
      {
        title: 'مدونو التقنية',
        description: 'كتاب يغطون الذكاء الاصطناعي، SaaS، تقنية الاعمال، والتحول الرقمي.',
      },
    ],
    form: {
      sectionLabel: 'ابدأ',
      titlePrefix: 'هل انت جاهز',
      titleHighlight: 'للانضمام؟',
      description: 'قدّم الآن لتصبح شريكا، او احجز مكالمة لمعرفة المزيد عن البرنامج.',
      applyTitle: 'قدّم الآن',
      successTitle: 'تم استلام الطلب!',
      successDescription: 'شكرا لتقديمك. سنراجع طلبك ونرد عليك خلال 48 ساعة.',
      nameLabel: 'الاسم الكامل *',
      namePlaceholder: 'اسمك',
      emailLabel: 'البريد الالكتروني *',
      phoneLabel: 'الهاتف / WhatsApp',
      youtubePlaceholder: 'رابط القناة',
      audienceLabel: 'حجم الجمهور الكلي *',
      audiencePlaceholder: 'اختر حجم جمهورك',
      messageLabel: 'لماذا ترغب في الشراكة معنا؟',
      messagePlaceholder: 'اخبرنا عن محتواك وجمهورك...',
      submitting: 'جار الارسال...',
      submit: 'ارسال الطلب',
      error: 'حدث خطأ. حاول مرة اخرى او راسلنا مباشرة عبر البريد.',
    },
    talk: {
      title: 'تفضل الحديث؟',
      description:
        'لست متأكدا ان برنامج الشركاء مناسب لك؟ احجز مكالمة قصيرة مع فريقنا لتعرف المزيد عن المنتجات، وهيكل العمولات، وكيف ندعم صناعة محتواك.',
      points: [
        'تعرف على منتجاتنا بالتفصيل',
        'افهم هيكل العمولات',
        'احصل على اجابات لاسئلتك المحددة',
        'ناقش افكار واستراتيجيات المحتوى',
        'استكشف فرص شراكة مخصصة',
      ],
      note: 'مكالمة 30 دقيقة • بلا التزام',
    },
    faqTitlePrefix: 'اسئلة',
    faqTitleHighlight: 'شائعة',
    faqs: [
      {
        question: 'ما هي معدلات العمولة؟',
        answer:
          'تكسب 50% من رسوم اعداد AI Employee البالغة 2,000 دولار، و50% من رسوم فصل Future-Ready Graduate Program (1,000 دولار) او رسومه السنوية، و10% من قيمة المشروع التي يدفعها العميل في مشاريع Agentic Softwares.',
      },
      {
        question: 'متى وكيف احصل على الدفع؟',
        answer:
          'تكسب العمولة عند كل بيع مؤهل عندما يكمل الشخص الذي احلته الدفع على عرض مؤهل. ندفع عبر التحويل البنكي او PayPal بعد تأكيد البيع، ولا يوجد حد ادنى للسحب.',
      },
      {
        question: 'ما نوع المحتوى الذي يجب ان انشئه؟',
        answer:
          'المحتوى الاصيل UGC هو الافضل: عروض المنتج، نتائج قبل/بعد، قصص المشكلة والحل، ومراجعات صادقة. نوفر ارشادات ونصوصا تساعدك على البدء.',
      },
      {
        question: 'هل احتاج الى جمهور كبير للانضمام؟',
        answer:
          'لا. نحن نقدر التفاعل والاصالة اكثر من عدد المتابعين. غالبا ما يحقق المؤثرون الصغار ضمن جماهير متخصصة نتائج افضل.',
      },
      {
        question: 'هل ساتلقى تدريبا على المنتجات؟',
        answer:
          'نعم. يحصل كل الشركاء المقبولين على تدريب للمنتجات، حسابات تجريبية، وتحديثات منتظمة حتى يتحدثوا عن حلولنا بثقة.',
      },
      {
        question: 'كيف يتم تتبع احالتي؟',
        answer:
          'تحصل على رابط شريك فريد ورمز تتبع. عندما يضغط شخص على رابطك، يتم حفظ كوكي لمدة 90 يوما، فتحصل على الرصيد حتى لو لم يشتر فورا.',
      },
    ],
    finalTitlePrefix: 'ابدأ الربح',
    finalTitleHighlight: 'اليوم',
    finalDescription:
      'انضم الى برنامج الشركاء وساعد الشركات والطلاب على الوصول الى التقنية التي يحتاجونها للنمو، بينما تكسب عمولات منافسة.',
  },
}

export default function AffiliatePage({ params, searchParams }: AffiliatePageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const copy = affiliatePageCopy[language]
  const missedLeadsStat = formatMissedLeadsUsdStat(MISSED_LEADS_USD, locale)
  const cta = getCtaButtonText(language)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    audienceSize: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formStatus === 'loading') return
    setFormStatus('loading')
    try {
      const res = await fetch('/api/affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      })
      if (res.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // How It Works - 4 Steps
  const steps = [
    {
      number: '01',
      title: copy.steps[0].title,
      description: copy.steps[0].description,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      number: '02',
      title: copy.steps[1].title,
      description: copy.steps[1].description,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '03',
      title: copy.steps[2].title,
      description: copy.steps[2].description,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      number: '04',
      title: copy.steps[3].title,
      description: copy.steps[3].description,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  // Products to promote
  const products = [
    {
      name: 'AI Employee',
      tagline: copy.products[0].tagline,
      price: copy.products[0].price,
      commission: copy.products[0].commission,
      target: copy.products[0].target,
      description: copy.products[0].description,
      icon: '🤖',
      color: 'accent',
      link: '/ai-receptionist'
    },
    {
      name: 'Future-Ready Graduate Program',
      tagline: copy.products[1].tagline,
      price: copy.products[1].price,
      commission: copy.products[1].commission,
      target: copy.products[1].target,
      description: copy.products[1].description,
      icon: '🎓',
      color: 'success',
      link: '/future-ready-graduate'
    },
    {
      name: 'Agentic Softwares',
      tagline: copy.products[2].tagline,
      price: copy.products[2].price,
      commission: copy.products[2].commission,
      target: copy.products[2].target,
      description: copy.products[2].description,
      icon: '⚙️',
      color: 'info',
      link: '/agentic-softwares'
    }
  ]

  // Benefits
  const benefits = [
    {
      title: copy.benefits[0].title,
      description: copy.benefits[0].description,
      icon: '💰'
    },
    {
      title: copy.benefits[1].title,
      description: copy.benefits[1].description,
      icon: '🎨'
    },
    {
      title: copy.benefits[2].title,
      description: copy.benefits[2].description,
      icon: '📊'
    },
    {
      title: copy.benefits[3].title,
      description: copy.benefits[3].description,
      icon: '📅'
    },
    {
      title: copy.benefits[4].title,
      description: copy.benefits[4].description,
      icon: '🤝'
    },
    {
      title: copy.benefits[5].title,
      description: copy.benefits[5].description,
      icon: '🎁'
    }
  ]

  // Ideal affiliates
  const idealAffiliates = [
    {
      title: copy.idealAffiliates[0].title,
      description: copy.idealAffiliates[0].description,
      icon: '📱'
    },
    {
      title: copy.idealAffiliates[1].title,
      description: copy.idealAffiliates[1].description,
      icon: '▶️'
    },
    {
      title: copy.idealAffiliates[2].title,
      description: copy.idealAffiliates[2].description,
      icon: '🎬'
    },
    {
      title: copy.idealAffiliates[3].title,
      description: copy.idealAffiliates[3].description,
      icon: '📈'
    },
    {
      title: copy.idealAffiliates[4].title,
      description: copy.idealAffiliates[4].description,
      icon: '🏢'
    },
    {
      title: copy.idealAffiliates[5].title,
      description: copy.idealAffiliates[5].description,
      icon: '✍️'
    }
  ]

  // FAQ
  const faqs = copy.faqs

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>

      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <PremiumHeroBackdrop />
        <PremiumHeroParallax className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              {copy.heroBadge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 max-w-5xl mx-auto text-center"
          >
            {copy.heroTitle}{' '}
            <span className="gradient-text">{copy.heroHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center"
          >
            {copy.heroDescription}
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mt-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
            >
              <span className="font-semibold text">10+ years</span> {copy.trustBadges.experience}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
            >
              <span className="font-semibold text">98%</span> {copy.trustBadges.satisfaction}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#apply"
              className="btn-primary text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center"
            >
              {copy.applyNow}
            </a>
            <a
              {...getBookingLinkProps()}
              className="btn-secondary text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center"
            >
              {copy.bookCall}
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 mt-12 sm:mt-16"
          >
            {copy.quickStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </PremiumHeroParallax>
      </section>

      {/* WHY Section - The Mission */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{copy.whyLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.whyTitlePrefix} <span className="gradient-text">{copy.whyTitleHighlight}</span>{copy.whyTitleSuffix}
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              {copy.whyDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📞',
                title: copy.missionCards[0].title,
                description: copy.missionCards[0].description,
                stat: missedLeadsStat,
                statLabel: copy.missionCards[0].statLabel
              },
              {
                icon: '🎓',
                title: copy.missionCards[1].title,
                description: copy.missionCards[1].description,
                stat: '40%',
                statLabel: copy.missionCards[1].statLabel
              },
              {
                icon: '⚙️',
                title: copy.missionCards[2].title,
                description: copy.missionCards[2].description,
                stat: '10:1',
                statLabel: copy.missionCards[2].statLabel
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-display font-bold text-accent mb-1">{item.stat}</div>
                <div className="text-xs text-muted uppercase tracking-wider mb-4">{item.statLabel}</div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* HOW Section - The Process */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{copy.howLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.howTitlePrefix}{' '}
              <span className="gradient-text">{copy.howTitleHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.howDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10 -translate-x-1/2" />
                )}
                
                <div className="card p-8 text-center h-full hover:border-accent/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl text-accent mb-6">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    {copy.stepLabel} {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* WHAT Section - Products to Promote */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{copy.productsLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.productsTitlePrefix}{' '}
              <span className="gradient-text">{copy.productsTitleHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.productsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card p-8 hover:border-accent/50 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                  product.color === 'accent' ? 'bg-accent/10' :
                  product.color === 'success' ? 'bg-success/10' :
                  'bg-info/10'
                }`}>
                  {product.icon}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">{product.name}</h3>
                <p className={`text-sm font-medium mb-4 ${
                  product.color === 'accent' ? 'text-accent' :
                  product.color === 'success' ? 'text-success' :
                  'text-info'
                }`}>
                  {product.tagline}
                </p>
                
                <p className="text-muted text-sm mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">{copy.priceLabel}</span>
                    <span className="font-semibold">{product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">{copy.commissionLabel}</span>
                    <span className="font-semibold text-success">{product.commission}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">{copy.targetLabel}</span>
                    <span className="text-right">{product.target}</span>
                  </div>
                </div>

                <Link 
                  href={product.link}
                  className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
                >
                  {copy.productLink}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{copy.benefitsLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.benefitsTitlePrefix}{' '}
              <span className="gradient-text">{copy.benefitsTitleHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.benefitsDescription}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Who This Is For Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{copy.partnersLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.partnersTitlePrefix}{' '}
              <span className="gradient-text">{copy.partnersTitleHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.partnersDescription}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {idealAffiliates.map((affiliate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 card hover:border-accent/50 transition-colors"
              >
                <div className="text-3xl flex-shrink-0">{affiliate.icon}</div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{affiliate.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{affiliate.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Application Form + Book a Call Section */}
      <AnimatedSection id="apply" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{copy.form.sectionLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.form.titlePrefix}{' '}
              <span className="gradient-text">{copy.form.titleHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.form.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="font-display text-2xl font-bold mb-6">{copy.form.applyTitle}</h3>
              
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-display text-xl font-bold mb-2">{copy.form.successTitle}</h4>
                  <p className="text-muted">
                    {copy.form.successDescription}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {copy.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder={copy.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {copy.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {copy.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="+1 …"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                        Instagram
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <label htmlFor="tiktok" className="block text-sm font-medium mb-2">
                        TikTok
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        value={formData.tiktok}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <label htmlFor="youtube" className="block text-sm font-medium mb-2">
                        YouTube
                      </label>
                      <input
                        type="text"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder={copy.form.youtubePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="audienceSize" className="block text-sm font-medium mb-2">
                      {copy.form.audienceLabel}
                    </label>
                    <select
                      id="audienceSize"
                      name="audienceSize"
                      required
                      value={formData.audienceSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">{copy.form.audiencePlaceholder}</option>
                      <option value="1-5k">1,000 - 5,000</option>
                      <option value="5-10k">5,000 - 10,000</option>
                      <option value="10-50k">10,000 - 50,000</option>
                      <option value="50-100k">50,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {copy.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder={copy.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-60"
                  >
                    {formStatus === 'loading' ? copy.form.submitting : copy.form.submit}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                      {copy.form.error}
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold mb-6">{copy.talk.title}</h3>
              
              <p className="text-muted mb-8 leading-relaxed">
                {copy.talk.description}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {copy.talk.points.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </div>
                ))}
              </div>

              <a
                {...getBookingLinkProps()}
                className="btn-primary w-full py-4 text-lg text-center"
              >
                {cta.bookStrategy}
              </a>

              <p className="text-center text-muted text-sm mt-4">
                {copy.talk.note}
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {copy.faqTitlePrefix}{' '}
              <span className="gradient-text">{copy.faqTitleHighlight}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-bold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? 'auto' : 0,
                    opacity: openFaq === i ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card p-12 md:p-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {copy.finalTitlePrefix} <span className="gradient-text">{copy.finalTitleHighlight}</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              {copy.finalDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="btn-primary text-lg px-8 py-4"
              >
                {copy.applyNow}
              </a>
              <a
                {...getBookingLinkProps()}
                className="btn-secondary text-lg px-8 py-4"
              >
                {copy.bookCall}
              </a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

    </main>
  )
}
