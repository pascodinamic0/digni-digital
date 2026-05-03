'use client'

import { use, useState, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import VideoModal from '@/app/components/VideoModal'
import VideoThumbnail from '@/app/components/VideoThumbnail'
import DemoPresentationDownload from '@/app/components/DemoPresentationDownload'
import EarlyAccessFormModal from '@/app/components/EarlyAccessFormModal'
import StripeCheckoutButton from '@/app/components/StripeCheckoutButton'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getFutureReadyGraduateJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'
import {
  type FutureReadyOffering,
  visibleDefaultFutureReadyOfferings,
} from '@/lib/future-ready-offerings'

type FutureReadyGraduatePageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

type FutureReadyOfferingDisplayCopy = Record<
  string,
  Partial<Pick<FutureReadyOffering, 'name' | 'period' | 'description' | 'features'>> & {
    priceOptions?: { period: string }[]
  }
>

const futureReadyHeroProofCopy = {
  en: { yearsMetric: 'years', years: 'building growth systems', satisfaction: 'client satisfaction' },
  fr: { yearsMetric: 'ans', years: 'à construire des systèmes de croissance', satisfaction: 'de satisfaction client' },
  es: { yearsMetric: 'años', years: 'construyendo sistemas de crecimiento', satisfaction: 'de satisfacción del cliente' },
  de: { yearsMetric: 'Jahre', years: 'im Aufbau von Wachstumssystemen', satisfaction: 'Kundenzufriedenheit' },
  ar: { yearsMetric: 'سنوات', years: 'في بناء أنظمة النمو', satisfaction: 'رضا العملاء' },
}

const futureReadyGraduateLocalCopy = {
  en: {
    labels: {
      problemOpportunity: 'Problem vs Opportunity',
      futureReadyAdvantage: 'Future-ready advantage',
      programInProgress: 'Program in Progress',
      challenge: 'Challenge',
      implementation: 'Implementation',
      timeline: 'Timeline',
      projections: 'Projections',
      keyTools: 'Key Tools',
      emptyVideos: 'More videos from global leaders coming soon...',
    },
    problemStats: [
      'of graduates unemployed 6 months after graduation',
      'of employers say graduates lack job ready skills',
      'in student debt with poor employment outcomes',
    ],
    opportunityStats: [
      'global digital economy size by 2025 (growing 15% annually)',
      'new freelancers worldwide in 2024 (fastest growing workforce)',
      'increase in remote work opportunities since 2020',
    ],
    digitalSkillsReasons: [
      { icon: '💰', label: 'Freedom trifecta', title: 'Income Freedom', description: 'Build skills that can turn into paid projects, better jobs, and multiple income streams.' },
      { icon: '🌍', label: 'Freedom trifecta', title: 'Location Freedom', description: 'Work with clients, teams, or employers beyond your city, country, or local job market.' },
      { icon: '⏰', label: 'Freedom trifecta', title: 'Time Freedom', description: 'Learn flexible digital work systems you can shape around school, family, or a job.' },
      { icon: '🤖', label: 'AI advantage', title: 'AI-Powered Leverage', description: 'Use modern AI tools to produce faster, compete sooner, and avoid being left behind.' },
      { icon: '🎓', label: 'Proof', title: 'Future-Ready Certification', description: 'Leave with a clear signal that shows you understand practical digital and AI-ready work.' },
      { icon: '🚀', label: 'Pathway', title: 'From Learning to Earning', description: 'Turn lessons into a portfolio, service offers, job readiness, and entrepreneurial action.' },
    ],
    outcomes: [
      { metric: '85%', description: 'Graduate employment rate within 6 months', detail: 'Compared to 45% industry average' },
      { metric: '150%', description: 'Average salary increase for graduates', detail: 'Versus non-program graduates' },
      { metric: '95%', description: 'Employer satisfaction rating', detail: 'From our hiring partner network' },
      { metric: '85+', description: 'Learners per flagship cohort', detail: 'Across partner institutions' },
    ],
    caseStudy: {
      school: 'GS Laricharde',
      location: 'Kinshasa, Monga Fula',
      challenge: '45% employed after 12 months. No practical skills.',
      implementation: 'Full program. Final year. September-July. Ministry breaks respected.',
      projections: [
        { metric: '85%', description: 'Target graduate employment rate' },
        { metric: '≥1.4M FC', description: 'Projected starting salary (min. ~$500 equiv.)' },
        { metric: '50+', description: 'Target employer partnerships' },
        { metric: '8 months', description: 'Projected program ROI payback period' },
      ],
      timeline: 'September 2024 - July 2025 (Full Academic Year - Ongoing)',
      testimonial: '"The program timing was perfect. Students learned during school hours, and the breaks gave them time to practice. By graduation, they were genuinely job ready." - GS Laricharde Administration',
    },
    featuredVideos: [
      {
        src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4',
        title: 'Entrepreneurship as Problem-Solving',
        speaker: 'Strive Masiyiwa',
        description: 'The fundamental challenge: entrepreneurship is not about building products, it is a mindset focused on solving real problems.',
        thumbnail: null,
      },
      {
        src: '/Einstein on What Intelligence Really Means... .mp4',
        title: 'What Intelligence Really Means',
        speaker: 'Albert Einstein',
        description: 'A timeless perspective on intelligence and the importance of thinking differently in an evolving world.',
        thumbnail: null,
      },
      {
        src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4',
        title: 'Education Must Evolve',
        speaker: 'Global Thought Leader',
        description: 'The world has transformed in every way, except education. It is time for education to catch up with the digital revolution.',
        thumbnail: null,
      },
      {
        src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4',
        title: 'School System vs Creative Thinking',
        speaker: 'Kim Kiyosaki',
        description: 'The school system trains students to follow instructions instead of thinking creatively, a critical insight for modern education.',
        thumbnail: null,
      },
      {
        src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4',
        title: 'The Era of Solo Billionaires',
        speaker: 'Sam Altman',
        description: 'OpenAI CEO Sam Altman believes the era of solo billionaires may be closer than we think, powered by AI and individual capability.',
        thumbnail: null,
      },
      {
        src: '/get.mp4',
        title: 'Digital Opportunity',
        speaker: 'Thought Leader',
        description: 'Insights on seizing digital opportunities and building success in the modern economy.',
        thumbnail: null,
      },
    ],
    skills: [
      { skill: 'AI-Powered Web Development', icon: '🌐', earning: '$40-100/hour', description: 'Build professional websites and web apps using AI tools that let beginners compete with expert developers.', tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'], demand: 'Extremely High' },
      { skill: 'AI Content Creation & Copywriting', icon: '✍️', earning: '$30-80/hour', description: 'Create high-quality blogs, social media content, and marketing copy using advanced AI writing tools.', tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'], demand: 'Extremely High' },
      { skill: 'AI-Powered Digital Marketing', icon: '📊', earning: '$25-70/hour', description: 'Leverage AI for social media management, SEO, analytics, and data-driven marketing campaigns.', tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'], demand: 'Very High' },
      { skill: 'AI Video Production & Editing', icon: '🎬', earning: '$35-90/hour', description: 'Create professional videos using AI tools for editing, animation, voiceovers, and content generation.', tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'], demand: 'Very High' },
      { skill: 'AI E-commerce & Store Building', icon: '🛒', earning: '$30-75/hour', description: 'Build and manage online stores using AI-powered platforms that automate product creation and marketing.', tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'], demand: 'Growing Fast' },
      { skill: 'AI Automation & Virtual Assistance', icon: '⚡', earning: '$20-60/hour', description: 'Automate business processes and provide AI-enhanced virtual assistance using cutting-edge tools.', tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'], demand: 'Exploding' },
      { skill: 'AI Data Annotation & Labeling', icon: '🏷️', earning: '$15-50/hour', description: 'Label and annotate data for AI training. Critical for ML models, demand surged 220%+. Work from anywhere.', tools: ['Scale AI', 'Label Studio', 'Amazon SageMaker', 'Supervisely'], demand: 'Exploding' },
      { skill: 'AI Image Generation & Editing', icon: '🎨', earning: '$25-80/hour', description: 'Create stunning visuals with AI. Design assets, marketing imagery, and creative content for brands.', tools: ['Midjourney', 'DALL·E 3', 'Adobe Firefly', 'Leonardo.ai', 'Ideogram'], demand: 'Very High' },
      { skill: 'AI Chatbot Development', icon: '🤖', earning: '$35-100/hour', description: 'Build custom AI assistants and conversational agents. Integrate chatbots into websites and apps.', tools: ['OpenAI API', 'Claude API', 'Voiceflow', 'Botpress', 'LangChain'], demand: 'Very High' },
      { skill: 'Prompt Engineering', icon: '💬', earning: '$30-90/hour', description: 'Specialize in crafting prompts that get the best from AI. Essential skill for AI-powered workflows.', tools: ['ChatGPT', 'Claude', 'Anthropic', 'Prompt libraries'], demand: 'Growing Fast' },
      { skill: 'Career Coaching & Training', icon: '🎯', earning: '$40-150/hour', description: 'Help workers reskill and adapt to AI. Human guidance and empathy remain irreplaceable, demand +74%.', tools: ['Coaching platforms', 'Notion AI', 'Loom', 'Zoom'], demand: 'Very High' },
      { skill: 'AI Meeting Transcription', icon: '📝', earning: '$20-50/hour', description: 'Transcribe meetings, generate summaries, and extract action items. Enable async collaboration globally.', tools: ['Fireflies.ai', 'Otter.ai', 'Clara', 'Krisp', 'Rev'], demand: 'Growing Fast' },
      { skill: 'AI Integration & Automation', icon: '🔗', earning: '$40-120/hour', description: 'Connect AI tools to business workflows. Custom integrations that embed AI into everyday operations.', tools: ['Zapier', 'Make.com', 'n8n', 'API integrations'], demand: 'Exploding' },
      { skill: 'AI-Powered Email Marketing', icon: '📧', earning: '$25-70/hour', description: 'High-volume, high-demand. Create campaigns, automate sequences, and optimize with AI copywriting.', tools: ['Copy.ai', 'Jasper', 'Mailchimp AI', 'HubSpot', 'Woodpecker'], demand: 'Very High' },
    ],
    partnership: {
      schoolProvides: [
        { title: 'Program Investment', description: <>Partnership fee: <span className="font-medium text">$5,000/semester</span> (5 months) or <span className="font-medium text">$12,000/year</span>, flexible to your budget and academic calendar.</> },
        { title: 'Students (Finalists)', description: 'Provide final-year students who are committed to completing the full program and ready for intensive digital skills training.' },
        { title: 'Computer Lab Facility', description: 'Existing computer lab with reliable electricity supply and adequate space for student cohorts during program hours.' },
        { title: 'Computing Equipment', description: 'Computers or laptops for students to use during training sessions. Equipment should be capable of running modern web browsers and basic software.' },
        { title: 'Program Integration', description: 'Integrate the program into your academic calendar and provide dedicated time slots for our curriculum delivery.' },
      ],
      weProvide: [
        { title: 'Internet Connectivity', description: "We handle all internet connectivity costs and setup, ensuring reliable high-speed internet essential for the program's success." },
        { title: 'Site Facilitator', description: 'Dedicated on-site team representative who follows our proven curriculum and provides direct instruction and support to students.' },
        { title: 'AI Tools & Subscriptions', description: 'We provide and manage all premium AI tool subscriptions (ChatGPT Plus, Claude Pro, GitHub Copilot, etc.) that give students superhero capabilities in the digital economy.' },
        { title: 'Complete Curriculum', description: 'Full academic year curriculum with 42 weeks of structured content, assessments, and practical projects aligned with industry needs.' },
        { title: 'Ongoing Support', description: 'Continuous program monitoring, progress tracking, and support to ensure successful implementation and student outcomes.' },
      ],
      successTitle: 'Partnership Success Factors',
      successFactors: [
        { title: 'Student Performance', description: 'Their determination and commitment drive employment success, or job creation' },
        { title: 'Personalized to Talents', description: "Guided learning tailored to each person's gifts, bringing out entrepreneurial talents" },
        { title: 'Mutual Commitment', description: 'Both parties dedicated to student success and program completion' },
        { title: 'Continuous Support', description: 'Ongoing collaboration throughout the academic year' },
      ],
    },
  },
  fr: {
    labels: {
      problemOpportunity: 'Problème vs opportunité',
      futureReadyAdvantage: 'Avantage prêt pour l’avenir',
      programInProgress: 'Programme en cours',
      challenge: 'Défi',
      implementation: 'Mise en œuvre',
      timeline: 'Calendrier',
      projections: 'Projections',
      keyTools: 'Outils clés',
      emptyVideos: 'D’autres vidéos de leaders mondiaux arrivent bientôt...',
    },
    problemStats: [
      'des diplômés sont sans emploi 6 mois après l’obtention du diplôme',
      'des employeurs disent que les diplômés manquent de compétences prêtes pour l’emploi',
      'de dette étudiante avec de faibles résultats d’emploi',
    ],
    opportunityStats: [
      'taille de l’économie numérique mondiale d’ici 2025 (croissance annuelle de 15 %)',
      'nouveaux freelances dans le monde en 2024 (main-d’œuvre à la croissance la plus rapide)',
      'd’augmentation des opportunités de travail à distance depuis 2020',
    ],
    digitalSkillsReasons: [
      { icon: '💰', label: 'Triple liberté', title: 'Liberté de revenu', description: 'Développez des compétences qui peuvent devenir des missions payées, de meilleurs emplois et plusieurs sources de revenus.' },
      { icon: '🌍', label: 'Triple liberté', title: 'Liberté géographique', description: 'Travaillez avec des clients, équipes ou employeurs au-delà de votre ville, de votre pays ou de votre marché local.' },
      { icon: '⏰', label: 'Triple liberté', title: 'Liberté de temps', description: 'Apprenez des systèmes de travail numérique flexibles, compatibles avec l’école, la famille ou un emploi.' },
      { icon: '🤖', label: 'Avantage IA', title: 'Effet de levier par l’IA', description: 'Utilisez des outils IA modernes pour produire plus vite, rivaliser plus tôt et ne pas rester à la traîne.' },
      { icon: '🎓', label: 'Preuve', title: 'Certification prêt pour l’avenir', description: 'Repartez avec un signal clair qui montre votre maîtrise du travail numérique pratique et prêt pour l’IA.' },
      { icon: '🚀', label: 'Parcours', title: 'De l’apprentissage au revenu', description: 'Transformez les leçons en portfolio, offres de service, préparation à l’emploi et action entrepreneuriale.' },
    ],
    outcomes: [
      { metric: '85%', description: 'Taux d’emploi des diplômés en 6 mois', detail: 'Comparé à une moyenne sectorielle de 45 %' },
      { metric: '150%', description: 'Hausse moyenne de salaire des diplômés', detail: 'Par rapport aux diplômés hors programme' },
      { metric: '95%', description: 'Satisfaction des employeurs partenaires', detail: 'Issue de notre réseau de recrutement partenaire' },
      { metric: '85+', description: 'Apprenants par cohorte phare', detail: 'Dans les institutions partenaires' },
    ],
    caseStudy: {
      school: 'GS Laricharde',
      location: 'Kinshasa, Monga Fula',
      challenge: '45 % employés après 12 mois. Aucune compétence pratique.',
      implementation: 'Programme complet. Année terminale. Septembre-juillet. Pauses ministérielles respectées.',
      projections: [
        { metric: '85%', description: 'Taux d’emploi cible des diplômés' },
        { metric: '≥1.4M FC', description: 'Salaire de départ projeté (min. équiv. ~$500)' },
        { metric: '50+', description: 'Partenariats employeurs ciblés' },
        { metric: '8 mois', description: 'Délai projeté de retour sur investissement du programme' },
      ],
      timeline: 'Septembre 2024 - juillet 2025 (année académique complète - en cours)',
      testimonial: '« Le calendrier du programme était parfait. Les élèves ont appris pendant les heures de cours, et les pauses leur ont donné du temps pour pratiquer. À la remise des diplômes, ils étaient réellement prêts pour l’emploi. » - Administration GS Laricharde',
    },
    featuredVideos: [
      { src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4', title: 'L’entrepreneuriat comme résolution de problèmes', speaker: 'Strive Masiyiwa', description: 'Le défi fondamental : l’entrepreneuriat ne consiste pas à créer des produits, mais à adopter un état d’esprit orienté vers la résolution de vrais problèmes.', thumbnail: null },
      { src: '/Einstein on What Intelligence Really Means... .mp4', title: 'Ce que signifie vraiment l’intelligence', speaker: 'Albert Einstein', description: 'Une perspective intemporelle sur l’intelligence et l’importance de penser autrement dans un monde qui évolue.', thumbnail: null },
      { src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4', title: 'L’éducation doit évoluer', speaker: 'Leader d’opinion mondial', description: 'Le monde s’est transformé dans tous les domaines, sauf l’éducation. Il est temps qu’elle rattrape la révolution numérique.', thumbnail: null },
      { src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4', title: 'Système scolaire vs pensée créative', speaker: 'Kim Kiyosaki', description: 'Le système scolaire forme les élèves à suivre des instructions au lieu de penser de manière créative : un enseignement clé pour l’éducation moderne.', thumbnail: null },
      { src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4', title: 'L’ère des milliardaires solo', speaker: 'Sam Altman', description: 'Sam Altman, CEO d’OpenAI, pense que l’ère des milliardaires solo est peut-être plus proche qu’on ne le croit, portée par l’IA et la capacité individuelle.', thumbnail: null },
      { src: '/get.mp4', title: 'Opportunité numérique', speaker: 'Leader d’opinion', description: 'Des idées pour saisir les opportunités numériques et bâtir sa réussite dans l’économie moderne.', thumbnail: null },
    ],
    skills: [
      { skill: 'Développement web propulsé par l’IA', icon: '🌐', earning: '$40-100/heure', description: 'Créez des sites et applications web professionnels avec des outils IA qui permettent aux débutants de rivaliser avec des développeurs experts.', tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'], demand: 'Extrêmement élevé' },
      { skill: 'Création de contenu IA & copywriting', icon: '✍️', earning: '$30-80/heure', description: 'Créez des blogs, contenus sociaux et textes marketing de qualité avec des outils avancés d’écriture IA.', tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'], demand: 'Extrêmement élevé' },
      { skill: 'Marketing digital propulsé par l’IA', icon: '📊', earning: '$25-70/heure', description: 'Utilisez l’IA pour les réseaux sociaux, le SEO, l’analyse et les campagnes marketing pilotées par les données.', tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'], demand: 'Très élevé' },
      { skill: 'Production & montage vidéo IA', icon: '🎬', earning: '$35-90/heure', description: 'Créez des vidéos professionnelles avec des outils IA pour le montage, l’animation, les voix off et la génération de contenu.', tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'], demand: 'Très élevé' },
      { skill: 'E-commerce IA & création de boutiques', icon: '🛒', earning: '$30-75/heure', description: 'Créez et gérez des boutiques en ligne avec des plateformes IA qui automatisent la création de produits et le marketing.', tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'], demand: 'Croissance rapide' },
      { skill: 'Automatisation IA & assistance virtuelle', icon: '⚡', earning: '$20-60/heure', description: 'Automatisez les processus métier et fournissez une assistance virtuelle renforcée par l’IA avec des outils de pointe.', tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'], demand: 'En explosion' },
      { skill: 'Annotation & étiquetage de données IA', icon: '🏷️', earning: '$15-50/heure', description: 'Annotez et étiquetez des données pour l’entraînement IA. Essentiel aux modèles ML, demande +220 %. Travail possible partout.', tools: ['Scale AI', 'Label Studio', 'Amazon SageMaker', 'Supervisely'], demand: 'En explosion' },
      { skill: 'Génération & retouche d’images IA', icon: '🎨', earning: '$25-80/heure', description: 'Créez des visuels remarquables avec l’IA : assets de design, images marketing et contenus créatifs pour les marques.', tools: ['Midjourney', 'DALL·E 3', 'Adobe Firefly', 'Leonardo.ai', 'Ideogram'], demand: 'Très élevé' },
      { skill: 'Développement de chatbots IA', icon: '🤖', earning: '$35-100/heure', description: 'Construisez des assistants IA sur mesure et des agents conversationnels. Intégrez des chatbots aux sites et applications.', tools: ['OpenAI API', 'Claude API', 'Voiceflow', 'Botpress', 'LangChain'], demand: 'Très élevé' },
      { skill: 'Ingénierie de prompts', icon: '💬', earning: '$30-90/heure', description: 'Spécialisez-vous dans la création de prompts qui tirent le meilleur de l’IA. Une compétence essentielle pour les workflows IA.', tools: ['ChatGPT', 'Claude', 'Anthropic', 'Bibliothèques de prompts'], demand: 'Croissance rapide' },
      { skill: 'Coaching carrière & formation', icon: '🎯', earning: '$40-150/heure', description: 'Aidez les actifs à se reconvertir et à s’adapter à l’IA. L’accompagnement humain reste irremplaçable, demande +74 %.', tools: ['Plateformes de coaching', 'Notion AI', 'Loom', 'Zoom'], demand: 'Très élevé' },
      { skill: 'Transcription de réunions par IA', icon: '📝', earning: '$20-50/heure', description: 'Transcrivez les réunions, générez des résumés et extrayez les actions à mener. Facilitez la collaboration asynchrone mondiale.', tools: ['Fireflies.ai', 'Otter.ai', 'Clara', 'Krisp', 'Rev'], demand: 'Croissance rapide' },
      { skill: 'Intégration & automatisation IA', icon: '🔗', earning: '$40-120/heure', description: 'Connectez les outils IA aux workflows métier. Des intégrations sur mesure qui ancrent l’IA dans les opérations quotidiennes.', tools: ['Zapier', 'Make.com', 'n8n', 'Intégrations API'], demand: 'En explosion' },
      { skill: 'Email marketing propulsé par l’IA', icon: '📧', earning: '$25-70/heure', description: 'Fort volume, forte demande. Créez des campagnes, automatisez les séquences et optimisez avec le copywriting IA.', tools: ['Copy.ai', 'Jasper', 'Mailchimp AI', 'HubSpot', 'Woodpecker'], demand: 'Très élevé' },
    ],
    partnership: {
      schoolProvides: [
        { title: 'Investissement programme', description: <>Frais de partenariat : <span className="font-medium text">$5,000/semestre</span> (5 mois) ou <span className="font-medium text">$12,000/an</span>, ajustables à votre budget et à votre calendrier académique.</> },
        { title: 'Élèves (finalistes)', description: 'Fournir des élèves de dernière année engagés à terminer le programme complet et prêts pour une formation intensive aux compétences numériques.' },
        { title: 'Salle informatique', description: 'Salle informatique existante avec électricité fiable et espace suffisant pour les cohortes pendant les heures du programme.' },
        { title: 'Équipement informatique', description: 'Ordinateurs fixes ou portables pour les élèves pendant les sessions. L’équipement doit pouvoir exécuter des navigateurs modernes et des logiciels de base.' },
        { title: 'Intégration au programme scolaire', description: 'Intégrer le programme à votre calendrier académique et prévoir des créneaux dédiés pour notre curriculum.' },
      ],
      weProvide: [
        { title: 'Connectivité Internet', description: 'Nous prenons en charge les coûts et la mise en place d’un Internet haut débit fiable, essentiel à la réussite du programme.' },
        { title: 'Facilitateur sur site', description: 'Un représentant dédié sur place suit notre curriculum éprouvé et apporte instruction directe et soutien aux élèves.' },
        { title: 'Outils IA & abonnements', description: 'Nous fournissons et gérons tous les abonnements premium aux outils IA (ChatGPT Plus, Claude Pro, GitHub Copilot, etc.) qui donnent aux élèves des capacités décuplées dans l’économie numérique.' },
        { title: 'Curriculum complet', description: 'Curriculum d’une année académique complète avec 42 semaines de contenus structurés, évaluations et projets pratiques alignés sur les besoins du marché.' },
        { title: 'Soutien continu', description: 'Suivi du programme, mesure des progrès et accompagnement continus pour garantir une mise en œuvre réussie et de meilleurs résultats élèves.' },
      ],
      successTitle: 'Facteurs de réussite du partenariat',
      successFactors: [
        { title: 'Performance des élèves', description: 'Leur détermination et leur engagement stimulent la réussite à l’emploi ou la création d’activité' },
        { title: 'Personnalisation selon les talents', description: 'Un apprentissage guidé adapté aux dons de chacun pour faire émerger les talents entrepreneuriaux' },
        { title: 'Engagement mutuel', description: 'Les deux parties sont dédiées à la réussite des élèves et à l’achèvement du programme' },
        { title: 'Soutien continu', description: 'Collaboration active tout au long de l’année académique' },
      ],
    },
  },
  es: {
    labels: {
      problemOpportunity: 'Problema vs oportunidad',
      futureReadyAdvantage: 'Ventaja preparada para el futuro',
      programInProgress: 'Programa en curso',
      challenge: 'Reto',
      implementation: 'Implementación',
      timeline: 'Calendario',
      projections: 'Proyecciones',
      keyTools: 'Herramientas clave',
      emptyVideos: 'Pronto habrá más videos de líderes globales...',
    },
    problemStats: [
      'de graduados desempleados 6 meses después de graduarse',
      'de empleadores dicen que los graduados carecen de habilidades listas para el trabajo',
      'en deuda estudiantil con pobres resultados laborales',
    ],
    opportunityStats: [
      'tamaño de la economía digital global para 2025 (crece 15 % anual)',
      'nuevos freelancers en el mundo en 2024 (la fuerza laboral de mayor crecimiento)',
      'aumento de oportunidades de trabajo remoto desde 2020',
    ],
    digitalSkillsReasons: [
      { icon: '💰', label: 'Triple libertad', title: 'Libertad de ingresos', description: 'Desarrolla habilidades que pueden convertirse en proyectos pagados, mejores empleos y varias fuentes de ingresos.' },
      { icon: '🌍', label: 'Triple libertad', title: 'Libertad de ubicación', description: 'Trabaja con clientes, equipos o empleadores más allá de tu ciudad, país o mercado laboral local.' },
      { icon: '⏰', label: 'Triple libertad', title: 'Libertad de tiempo', description: 'Aprende sistemas flexibles de trabajo digital que puedes adaptar a la escuela, la familia o un empleo.' },
      { icon: '🤖', label: 'Ventaja IA', title: 'Apalancamiento con IA', description: 'Usa herramientas modernas de IA para producir más rápido, competir antes y no quedarte atrás.' },
      { icon: '🎓', label: 'Prueba', title: 'Certificación preparada para el futuro', description: 'Sal con una señal clara de que entiendes el trabajo digital práctico y preparado para la IA.' },
      { icon: '🚀', label: 'Ruta', title: 'De aprender a ganar', description: 'Convierte las lecciones en portafolio, ofertas de servicio, preparación laboral y acción emprendedora.' },
    ],
    outcomes: [
      { metric: '85%', description: 'Tasa de empleo de graduados en 6 meses', detail: 'Frente al promedio del sector de 45 %' },
      { metric: '150%', description: 'Aumento salarial medio para graduados', detail: 'Comparado con graduados fuera del programa' },
      { metric: '95%', description: 'Satisfacción de empleadores', detail: 'Desde nuestra red de socios de contratación' },
      { metric: '85+', description: 'Estudiantes por cohorte insignia', detail: 'En instituciones asociadas' },
    ],
    caseStudy: {
      school: 'GS Laricharde',
      location: 'Kinshasa, Monga Fula',
      challenge: '45 % empleados después de 12 meses. Sin habilidades prácticas.',
      implementation: 'Programa completo. Último año. Septiembre-julio. Se respetan los descansos ministeriales.',
      projections: [
        { metric: '85%', description: 'Tasa objetivo de empleo de graduados' },
        { metric: '≥1.4M FC', description: 'Salario inicial proyectado (mín. equiv. ~$500)' },
        { metric: '50+', description: 'Alianzas objetivo con empleadores' },
        { metric: '8 meses', description: 'Periodo proyectado de recuperación de la inversión del programa' },
      ],
      timeline: 'Septiembre 2024 - julio 2025 (año académico completo - en curso)',
      testimonial: '“El calendario del programa fue perfecto. Los estudiantes aprendieron durante el horario escolar, y los descansos les dieron tiempo para practicar. Al graduarse, estaban realmente listos para trabajar.” - Administración de GS Laricharde',
    },
    featuredVideos: [
      { src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4', title: 'Emprendimiento como resolución de problemas', speaker: 'Strive Masiyiwa', description: 'El reto fundamental: emprender no consiste en crear productos, sino en adoptar una mentalidad enfocada en resolver problemas reales.', thumbnail: null },
      { src: '/Einstein on What Intelligence Really Means... .mp4', title: 'Qué significa realmente la inteligencia', speaker: 'Albert Einstein', description: 'Una perspectiva atemporal sobre la inteligencia y la importancia de pensar diferente en un mundo en evolución.', thumbnail: null },
      { src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4', title: 'La educación debe evolucionar', speaker: 'Líder de opinión global', description: 'El mundo se transformó en todos los sentidos, excepto la educación. Es hora de que la educación alcance la revolución digital.', thumbnail: null },
      { src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4', title: 'Sistema escolar vs pensamiento creativo', speaker: 'Kim Kiyosaki', description: 'El sistema escolar entrena a los estudiantes para seguir instrucciones en lugar de pensar de forma creativa, una idea crítica para la educación moderna.', thumbnail: null },
      { src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4', title: 'La era de los multimillonarios en solitario', speaker: 'Sam Altman', description: 'Sam Altman, CEO de OpenAI, cree que la era de los multimillonarios en solitario puede estar más cerca de lo que pensamos, impulsada por la IA y la capacidad individual.', thumbnail: null },
      { src: '/get.mp4', title: 'Oportunidad digital', speaker: 'Líder de opinión', description: 'Ideas para aprovechar oportunidades digitales y construir éxito en la economía moderna.', thumbnail: null },
    ],
    skills: [
      { skill: 'Desarrollo web con IA', icon: '🌐', earning: '$40-100/hora', description: 'Crea sitios web y apps profesionales con herramientas de IA que permiten a principiantes competir con desarrolladores expertos.', tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'], demand: 'Extremadamente alta' },
      { skill: 'Creación de contenido IA y copywriting', icon: '✍️', earning: '$30-80/hora', description: 'Crea blogs, contenido para redes sociales y textos de marketing de alta calidad con herramientas avanzadas de escritura IA.', tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'], demand: 'Extremadamente alta' },
      { skill: 'Marketing digital con IA', icon: '📊', earning: '$25-70/hora', description: 'Aprovecha la IA para gestión de redes sociales, SEO, analítica y campañas de marketing basadas en datos.', tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'], demand: 'Muy alta' },
      { skill: 'Producción y edición de video con IA', icon: '🎬', earning: '$35-90/hora', description: 'Crea videos profesionales con herramientas de IA para edición, animación, locuciones y generación de contenido.', tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'], demand: 'Muy alta' },
      { skill: 'E-commerce IA y creación de tiendas', icon: '🛒', earning: '$30-75/hora', description: 'Crea y gestiona tiendas online con plataformas impulsadas por IA que automatizan la creación de productos y el marketing.', tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'], demand: 'Crecimiento rápido' },
      { skill: 'Automatización IA y asistencia virtual', icon: '⚡', earning: '$20-60/hora', description: 'Automatiza procesos de negocio y ofrece asistencia virtual mejorada con IA usando herramientas de vanguardia.', tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'], demand: 'En explosión' },
      { skill: 'Anotación y etiquetado de datos IA', icon: '🏷️', earning: '$15-50/hora', description: 'Etiqueta y anota datos para entrenamiento de IA. Crítico para modelos ML, demanda +220 %. Trabaja desde cualquier lugar.', tools: ['Scale AI', 'Label Studio', 'Amazon SageMaker', 'Supervisely'], demand: 'En explosión' },
      { skill: 'Generación y edición de imágenes IA', icon: '🎨', earning: '$25-80/hora', description: 'Crea visuales impactantes con IA: assets de diseño, imágenes de marketing y contenido creativo para marcas.', tools: ['Midjourney', 'DALL·E 3', 'Adobe Firefly', 'Leonardo.ai', 'Ideogram'], demand: 'Muy alta' },
      { skill: 'Desarrollo de chatbots IA', icon: '🤖', earning: '$35-100/hora', description: 'Construye asistentes IA personalizados y agentes conversacionales. Integra chatbots en sitios web y aplicaciones.', tools: ['OpenAI API', 'Claude API', 'Voiceflow', 'Botpress', 'LangChain'], demand: 'Muy alta' },
      { skill: 'Ingeniería de prompts', icon: '💬', earning: '$30-90/hora', description: 'Especialízate en crear prompts que obtienen lo mejor de la IA. Habilidad esencial para workflows impulsados por IA.', tools: ['ChatGPT', 'Claude', 'Anthropic', 'Bibliotecas de prompts'], demand: 'Crecimiento rápido' },
      { skill: 'Coaching profesional y formación', icon: '🎯', earning: '$40-150/hora', description: 'Ayuda a trabajadores a recualificarse y adaptarse a la IA. La guía humana y la empatía siguen siendo irremplazables, demanda +74 %.', tools: ['Plataformas de coaching', 'Notion AI', 'Loom', 'Zoom'], demand: 'Muy alta' },
      { skill: 'Transcripción de reuniones con IA', icon: '📝', earning: '$20-50/hora', description: 'Transcribe reuniones, genera resúmenes y extrae acciones. Facilita la colaboración asíncrona global.', tools: ['Fireflies.ai', 'Otter.ai', 'Clara', 'Krisp', 'Rev'], demand: 'Crecimiento rápido' },
      { skill: 'Integración y automatización IA', icon: '🔗', earning: '$40-120/hora', description: 'Conecta herramientas de IA con workflows de negocio. Integraciones a medida que incorporan IA a las operaciones diarias.', tools: ['Zapier', 'Make.com', 'n8n', 'Integraciones API'], demand: 'En explosión' },
      { skill: 'Email marketing con IA', icon: '📧', earning: '$25-70/hora', description: 'Alto volumen, alta demanda. Crea campañas, automatiza secuencias y optimiza con copywriting IA.', tools: ['Copy.ai', 'Jasper', 'Mailchimp AI', 'HubSpot', 'Woodpecker'], demand: 'Muy alta' },
    ],
    partnership: {
      schoolProvides: [
        { title: 'Inversión del programa', description: <>Cuota de alianza: <span className="font-medium text">$5,000/semestre</span> (5 meses) o <span className="font-medium text">$12,000/año</span>, flexible según tu presupuesto y calendario académico.</> },
        { title: 'Estudiantes (finalistas)', description: 'Aportar estudiantes de último año comprometidos a completar el programa completo y listos para una formación intensiva en habilidades digitales.' },
        { title: 'Laboratorio informático', description: 'Laboratorio existente con suministro eléctrico fiable y espacio adecuado para las cohortes durante el horario del programa.' },
        { title: 'Equipos informáticos', description: 'Computadoras o laptops para que los estudiantes las usen durante las sesiones. Deben ejecutar navegadores modernos y software básico.' },
        { title: 'Integración del programa', description: 'Integrar el programa en tu calendario académico y reservar franjas horarias dedicadas para nuestro currículo.' },
      ],
      weProvide: [
        { title: 'Conectividad a Internet', description: 'Gestionamos todos los costos y la instalación de Internet de alta velocidad fiable, esencial para el éxito del programa.' },
        { title: 'Facilitador en sitio', description: 'Representante dedicado en el campus que sigue nuestro currículo probado y brinda instrucción directa y apoyo a los estudiantes.' },
        { title: 'Herramientas IA y suscripciones', description: 'Proporcionamos y gestionamos todas las suscripciones premium a herramientas IA (ChatGPT Plus, Claude Pro, GitHub Copilot, etc.) que dan a los estudiantes capacidades extraordinarias en la economía digital.' },
        { title: 'Currículo completo', description: 'Currículo de año académico completo con 42 semanas de contenido estructurado, evaluaciones y proyectos prácticos alineados con las necesidades del mercado.' },
        { title: 'Soporte continuo', description: 'Monitoreo del programa, seguimiento del progreso y apoyo continuo para asegurar una implementación exitosa y mejores resultados estudiantiles.' },
      ],
      successTitle: 'Factores de éxito de la alianza',
      successFactors: [
        { title: 'Rendimiento estudiantil', description: 'Su determinación y compromiso impulsan el éxito laboral o la creación de empleo' },
        { title: 'Personalizado según talentos', description: 'Aprendizaje guiado adaptado a los dones de cada persona para despertar talentos emprendedores' },
        { title: 'Compromiso mutuo', description: 'Ambas partes dedicadas al éxito estudiantil y a completar el programa' },
        { title: 'Soporte continuo', description: 'Colaboración permanente durante todo el año académico' },
      ],
    },
  },
  de: {
    labels: {
      problemOpportunity: 'Problem vs. Chance',
      futureReadyAdvantage: 'Zukunftsfähiger Vorteil',
      programInProgress: 'Programm läuft',
      challenge: 'Herausforderung',
      implementation: 'Umsetzung',
      timeline: 'Zeitplan',
      projections: 'Prognosen',
      keyTools: 'Wichtige Tools',
      emptyVideos: 'Weitere Videos von globalen Vordenkern folgen in Kürze...',
    },
    problemStats: [
      'der Absolventen sind 6 Monate nach dem Abschluss arbeitslos',
      'der Arbeitgeber sagen, Absolventen fehlen arbeitsreife Fähigkeiten',
      'an Studienschulden bei schwachen Beschäftigungsergebnissen',
    ],
    opportunityStats: [
      'Größe der globalen Digitalwirtschaft bis 2025 (15 % Wachstum pro Jahr)',
      'neue Freelancer weltweit in 2024 (am schnellsten wachsende Arbeitsgruppe)',
      'Zunahme von Remote-Work-Chancen seit 2020',
    ],
    digitalSkillsReasons: [
      { icon: '💰', label: 'Dreifache Freiheit', title: 'Einkommensfreiheit', description: 'Baue Fähigkeiten auf, die zu bezahlten Projekten, besseren Jobs und mehreren Einkommensquellen werden können.' },
      { icon: '🌍', label: 'Dreifache Freiheit', title: 'Ortsfreiheit', description: 'Arbeite mit Kunden, Teams oder Arbeitgebern jenseits deiner Stadt, deines Landes oder deines lokalen Arbeitsmarkts.' },
      { icon: '⏰', label: 'Dreifache Freiheit', title: 'Zeitfreiheit', description: 'Lerne flexible digitale Arbeitssysteme, die zu Schule, Familie oder Job passen.' },
      { icon: '🤖', label: 'KI-Vorteil', title: 'Hebelwirkung durch KI', description: 'Nutze moderne KI-Tools, um schneller zu produzieren, früher mitzuhalten und nicht abgehängt zu werden.' },
      { icon: '🎓', label: 'Nachweis', title: 'Future-Ready-Zertifizierung', description: 'Gehe mit einem klaren Signal, dass du praktische digitale und KI-fähige Arbeit verstehst.' },
      { icon: '🚀', label: 'Weg', title: 'Vom Lernen zum Verdienen', description: 'Verwandle Lektionen in Portfolio, Serviceangebote, Jobreife und unternehmerisches Handeln.' },
    ],
    outcomes: [
      { metric: '85%', description: 'Beschäftigungsquote der Absolventen innerhalb von 6 Monaten', detail: 'Verglichen mit 45 % Branchendurchschnitt' },
      { metric: '150%', description: 'Durchschnittliche Gehaltssteigerung für Absolventen', detail: 'Gegenüber Absolventen ohne Programm' },
      { metric: '95%', description: 'Zufriedenheit der Arbeitgeber', detail: 'Aus unserem Netzwerk von Einstellungspartnern' },
      { metric: '85+', description: 'Lernende pro Vorzeige-Kohorte', detail: 'Über Partnerinstitutionen hinweg' },
    ],
    caseStudy: {
      school: 'GS Laricharde',
      location: 'Kinshasa, Monga Fula',
      challenge: '45 % nach 12 Monaten beschäftigt. Keine praktischen Fähigkeiten.',
      implementation: 'Vollständiges Programm. Abschlussjahr. September-Juli. Ministerielle Pausen werden respektiert.',
      projections: [
        { metric: '85%', description: 'Zielquote für Beschäftigung der Absolventen' },
        { metric: '≥1.4M FC', description: 'Prognostiziertes Einstiegsgehalt (mind. ca. $500 äquiv.)' },
        { metric: '50+', description: 'Zielzahl an Arbeitgeberpartnerschaften' },
        { metric: '8 Monate', description: 'Prognostizierte Amortisationszeit des Programms' },
      ],
      timeline: 'September 2024 - Juli 2025 (vollständiges akademisches Jahr - laufend)',
      testimonial: '„Der Zeitpunkt des Programms war perfekt. Die Schüler lernten während der Schulzeit, und die Pausen gaben ihnen Zeit zum Üben. Beim Abschluss waren sie wirklich bereit für den Job.“ - Verwaltung der GS Laricharde',
    },
    featuredVideos: [
      { src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4', title: 'Unternehmertum als Problemlösung', speaker: 'Strive Masiyiwa', description: 'Die zentrale Herausforderung: Unternehmertum bedeutet nicht nur Produkte zu bauen, sondern eine Denkweise, die echte Probleme löst.', thumbnail: null },
      { src: '/Einstein on What Intelligence Really Means... .mp4', title: 'Was Intelligenz wirklich bedeutet', speaker: 'Albert Einstein', description: 'Eine zeitlose Perspektive auf Intelligenz und die Bedeutung, in einer sich wandelnden Welt anders zu denken.', thumbnail: null },
      { src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4', title: 'Bildung muss sich weiterentwickeln', speaker: 'Globaler Vordenker', description: 'Die Welt hat sich in jeder Hinsicht verändert, nur die Bildung nicht. Es ist Zeit, dass Bildung die digitale Revolution einholt.', thumbnail: null },
      { src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4', title: 'Schulsystem vs. kreatives Denken', speaker: 'Kim Kiyosaki', description: 'Das Schulsystem trainiert Schüler, Anweisungen zu befolgen, statt kreativ zu denken. Eine entscheidende Einsicht für moderne Bildung.', thumbnail: null },
      { src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4', title: 'Die Ära der Solo-Milliardäre', speaker: 'Sam Altman', description: 'OpenAI-CEO Sam Altman glaubt, dass die Ära der Solo-Milliardäre näher sein könnte als gedacht, angetrieben von KI und individueller Leistungsfähigkeit.', thumbnail: null },
      { src: '/get.mp4', title: 'Digitale Chance', speaker: 'Vordenker', description: 'Impulse, um digitale Chancen zu nutzen und in der modernen Wirtschaft Erfolg aufzubauen.', thumbnail: null },
    ],
    skills: [
      { skill: 'KI-gestützte Webentwicklung', icon: '🌐', earning: '$40-100/Stunde', description: 'Baue professionelle Websites und Web-Apps mit KI-Tools, die Anfängern ermöglichen, mit erfahrenen Entwicklern mitzuhalten.', tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'], demand: 'Extrem hoch' },
      { skill: 'KI-Content-Erstellung & Copywriting', icon: '✍️', earning: '$30-80/Stunde', description: 'Erstelle hochwertige Blogs, Social-Media-Inhalte und Marketingtexte mit fortschrittlichen KI-Schreibtools.', tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'], demand: 'Extrem hoch' },
      { skill: 'KI-gestütztes Digitalmarketing', icon: '📊', earning: '$25-70/Stunde', description: 'Nutze KI für Social-Media-Management, SEO, Analytics und datengetriebene Marketingkampagnen.', tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'], demand: 'Sehr hoch' },
      { skill: 'KI-Videoproduktion & Schnitt', icon: '🎬', earning: '$35-90/Stunde', description: 'Erstelle professionelle Videos mit KI-Tools für Schnitt, Animation, Voiceovers und Content-Generierung.', tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'], demand: 'Sehr hoch' },
      { skill: 'KI-E-Commerce & Shop-Aufbau', icon: '🛒', earning: '$30-75/Stunde', description: 'Baue und betreibe Online-Shops mit KI-Plattformen, die Produkterstellung und Marketing automatisieren.', tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'], demand: 'Wächst schnell' },
      { skill: 'KI-Automatisierung & virtuelle Assistenz', icon: '⚡', earning: '$20-60/Stunde', description: 'Automatisiere Geschäftsprozesse und biete KI-gestützte virtuelle Assistenz mit modernsten Tools.', tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'], demand: 'Explodiert' },
      { skill: 'KI-Datenannotation & Labeling', icon: '🏷️', earning: '$15-50/Stunde', description: 'Annotiere und label Daten für KI-Training. Entscheidend für ML-Modelle, Nachfrage +220 %. Arbeite von überall.', tools: ['Scale AI', 'Label Studio', 'Amazon SageMaker', 'Supervisely'], demand: 'Explodiert' },
      { skill: 'KI-Bildgenerierung & Bearbeitung', icon: '🎨', earning: '$25-80/Stunde', description: 'Erstelle starke Visuals mit KI: Design-Assets, Marketingbilder und kreative Inhalte für Marken.', tools: ['Midjourney', 'DALL·E 3', 'Adobe Firefly', 'Leonardo.ai', 'Ideogram'], demand: 'Sehr hoch' },
      { skill: 'KI-Chatbot-Entwicklung', icon: '🤖', earning: '$35-100/Stunde', description: 'Baue individuelle KI-Assistenten und Gesprächsagenten. Integriere Chatbots in Websites und Apps.', tools: ['OpenAI API', 'Claude API', 'Voiceflow', 'Botpress', 'LangChain'], demand: 'Sehr hoch' },
      { skill: 'Prompt Engineering', icon: '💬', earning: '$30-90/Stunde', description: 'Spezialisiere dich auf Prompts, die das Beste aus KI herausholen. Eine Schlüsselkompetenz für KI-gestützte Workflows.', tools: ['ChatGPT', 'Claude', 'Anthropic', 'Prompt-Bibliotheken'], demand: 'Wächst schnell' },
      { skill: 'Karriere-Coaching & Training', icon: '🎯', earning: '$40-150/Stunde', description: 'Hilf Menschen, sich weiterzubilden und an KI anzupassen. Menschliche Führung und Empathie bleiben unersetzlich, Nachfrage +74 %.', tools: ['Coaching-Plattformen', 'Notion AI', 'Loom', 'Zoom'], demand: 'Sehr hoch' },
      { skill: 'KI-Meeting-Transkription', icon: '📝', earning: '$20-50/Stunde', description: 'Transkribiere Meetings, erstelle Zusammenfassungen und extrahiere Aufgaben. Ermögliche globale asynchrone Zusammenarbeit.', tools: ['Fireflies.ai', 'Otter.ai', 'Clara', 'Krisp', 'Rev'], demand: 'Wächst schnell' },
      { skill: 'KI-Integration & Automatisierung', icon: '🔗', earning: '$40-120/Stunde', description: 'Verbinde KI-Tools mit Geschäftsworkflows. Maßgeschneiderte Integrationen, die KI in den Alltag einbetten.', tools: ['Zapier', 'Make.com', 'n8n', 'API-Integrationen'], demand: 'Explodiert' },
      { skill: 'KI-gestütztes E-Mail-Marketing', icon: '📧', earning: '$25-70/Stunde', description: 'Hohes Volumen, hohe Nachfrage. Erstelle Kampagnen, automatisiere Sequenzen und optimiere mit KI-Copywriting.', tools: ['Copy.ai', 'Jasper', 'Mailchimp AI', 'HubSpot', 'Woodpecker'], demand: 'Sehr hoch' },
    ],
    partnership: {
      schoolProvides: [
        { title: 'Programminvestition', description: <>Partnerschaftsgebühr: <span className="font-medium text">$5,000/Semester</span> (5 Monate) oder <span className="font-medium text">$12,000/Jahr</span>, flexibel an Budget und akademischen Kalender anpassbar.</> },
        { title: 'Schüler (Abschlussjahr)', description: 'Stellen Sie Schüler im Abschlussjahr bereit, die das gesamte Programm abschließen wollen und bereit für intensives digitales Kompetenztraining sind.' },
        { title: 'Computerlabor', description: 'Vorhandenes Computerlabor mit zuverlässiger Stromversorgung und ausreichend Platz für Kohorten während der Programmzeiten.' },
        { title: 'Computerausstattung', description: 'Computer oder Laptops für Schüler während der Trainings. Die Geräte sollten moderne Browser und Basissoftware ausführen können.' },
        { title: 'Programmintegration', description: 'Integrieren Sie das Programm in Ihren akademischen Kalender und stellen Sie feste Zeitfenster für unser Curriculum bereit.' },
      ],
      weProvide: [
        { title: 'Internetverbindung', description: 'Wir übernehmen alle Kosten und die Einrichtung für zuverlässiges Highspeed-Internet, das für den Programmerfolg entscheidend ist.' },
        { title: 'Facilitator vor Ort', description: 'Ein dedizierter Teamvertreter vor Ort folgt unserem bewährten Curriculum und gibt Schülern direkte Anleitung und Unterstützung.' },
        { title: 'KI-Tools & Abonnements', description: 'Wir stellen und verwalten alle Premium-Abos für KI-Tools (ChatGPT Plus, Claude Pro, GitHub Copilot usw.), die Schülern besondere Fähigkeiten in der Digitalwirtschaft geben.' },
        { title: 'Vollständiges Curriculum', description: 'Curriculum für ein volles akademisches Jahr mit 42 Wochen strukturierten Inhalten, Bewertungen und Praxisprojekten, ausgerichtet auf Marktbedürfnisse.' },
        { title: 'Laufende Unterstützung', description: 'Kontinuierliches Programmmonitoring, Fortschrittsverfolgung und Support für erfolgreiche Umsetzung und bessere Lernergebnisse.' },
      ],
      successTitle: 'Erfolgsfaktoren der Partnerschaft',
      successFactors: [
        { title: 'Schülerleistung', description: 'Entschlossenheit und Engagement treiben Beschäftigungserfolg oder Jobschaffung voran' },
        { title: 'An Talente angepasst', description: 'Geführtes Lernen, zugeschnitten auf die Begabungen jeder Person, bringt unternehmerische Talente hervor' },
        { title: 'Gegenseitiges Engagement', description: 'Beide Seiten setzen sich für Schülererfolg und Programmabschluss ein' },
        { title: 'Laufende Unterstützung', description: 'Kontinuierliche Zusammenarbeit während des gesamten akademischen Jahres' },
      ],
    },
  },
  ar: {
    labels: {
      problemOpportunity: 'المشكلة مقابل الفرصة',
      futureReadyAdvantage: 'ميزة الجاهزية للمستقبل',
      programInProgress: 'البرنامج قيد التنفيذ',
      challenge: 'التحدي',
      implementation: 'التنفيذ',
      timeline: 'الجدول الزمني',
      projections: 'التوقعات',
      keyTools: 'الأدوات الأساسية',
      emptyVideos: 'سيتم نشر المزيد من فيديوهات القادة العالميين قريباً...',
    },
    problemStats: [
      'من الخريجين عاطلون عن العمل بعد 6 أشهر من التخرج',
      'من أصحاب العمل يقولون إن الخريجين يفتقرون إلى مهارات جاهزة للعمل',
      'ديون طلابية مع نتائج توظيف ضعيفة',
    ],
    opportunityStats: [
      'حجم الاقتصاد الرقمي العالمي بحلول 2025 (ينمو 15% سنوياً)',
      'مستقل جديد حول العالم في 2024 (أسرع قوة عمل نمواً)',
      'زيادة في فرص العمل عن بعد منذ 2020',
    ],
    digitalSkillsReasons: [
      { icon: '💰', label: 'حرية ثلاثية', title: 'حرية الدخل', description: 'ابنِ مهارات يمكن أن تتحول إلى مشاريع مدفوعة، وظائف أفضل، ومصادر دخل متعددة.' },
      { icon: '🌍', label: 'حرية ثلاثية', title: 'حرية المكان', description: 'اعمل مع عملاء أو فرق أو أصحاب عمل خارج مدينتك أو بلدك أو سوق العمل المحلي.' },
      { icon: '⏰', label: 'حرية ثلاثية', title: 'حرية الوقت', description: 'تعلّم أنظمة عمل رقمية مرنة يمكنك تشكيلها حول الدراسة أو العائلة أو الوظيفة.' },
      { icon: '🤖', label: 'ميزة الذكاء الاصطناعي', title: 'رافعة مدعومة بالذكاء الاصطناعي', description: 'استخدم أدوات الذكاء الاصطناعي الحديثة لتنتج أسرع، وتنافس أبكر، وتتجنب أن تُترك خلف الركب.' },
      { icon: '🎓', label: 'إثبات', title: 'شهادة الجاهزية للمستقبل', description: 'اخرج بإشارة واضحة تثبت أنك تفهم العمل الرقمي العملي والعمل الجاهز للذكاء الاصطناعي.' },
      { icon: '🚀', label: 'مسار', title: 'من التعلّم إلى الكسب', description: 'حوّل الدروس إلى ملف أعمال، عروض خدمات، جاهزية وظيفية، وخطوات ريادية.' },
    ],
    outcomes: [
      { metric: '85%', description: 'معدل توظيف الخريجين خلال 6 أشهر', detail: 'مقارنة بمتوسط قطاعي يبلغ 45%' },
      { metric: '150%', description: 'متوسط زيادة رواتب الخريجين', detail: 'مقارنة بخريجين لم يلتحقوا بالبرنامج' },
      { metric: '95%', description: 'معدل رضا أصحاب العمل', detail: 'من شبكة شركاء التوظيف لدينا' },
      { metric: '85+', description: 'متعلمون في كل دفعة رئيسية', detail: 'عبر المؤسسات الشريكة' },
    ],
    caseStudy: {
      school: 'GS Laricharde',
      location: 'Kinshasa, Monga Fula',
      challenge: '45% موظفون بعد 12 شهراً. لا توجد مهارات عملية.',
      implementation: 'برنامج كامل. السنة النهائية. سبتمبر-يوليو. مع احترام العطل الوزارية.',
      projections: [
        { metric: '85%', description: 'معدل توظيف الخريجين المستهدف' },
        { metric: '≥1.4M FC', description: 'راتب بداية متوقع (حد أدنى يعادل نحو $500)' },
        { metric: '50+', description: 'شراكات مستهدفة مع أصحاب العمل' },
        { metric: '8 أشهر', description: 'فترة استرداد استثمار البرنامج المتوقعة' },
      ],
      timeline: 'سبتمبر 2024 - يوليو 2025 (عام أكاديمي كامل - جارٍ)',
      testimonial: '«كان توقيت البرنامج مثالياً. تعلّم الطلاب خلال ساعات الدراسة، ومنحتهم العطل وقتاً للتطبيق. عند التخرج، كانوا جاهزين فعلاً للعمل.» - إدارة GS Laricharde',
    },
    featuredVideos: [
      { src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4', title: 'ريادة الأعمال كحل للمشكلات', speaker: 'Strive Masiyiwa', description: 'التحدي الأساسي: ريادة الأعمال لا تعني بناء منتجات فقط، بل هي عقلية تركز على حل مشكلات حقيقية.', thumbnail: null },
      { src: '/Einstein on What Intelligence Really Means... .mp4', title: 'ما معنى الذكاء حقاً', speaker: 'Albert Einstein', description: 'منظور خالد حول الذكاء وأهمية التفكير بطريقة مختلفة في عالم يتغير باستمرار.', thumbnail: null },
      { src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4', title: 'يجب أن يتطور التعليم', speaker: 'قائد فكر عالمي', description: 'لقد تغير العالم في كل شيء تقريباً، باستثناء التعليم. حان الوقت ليلحق التعليم بالثورة الرقمية.', thumbnail: null },
      { src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4', title: 'النظام المدرسي مقابل التفكير الإبداعي', speaker: 'Kim Kiyosaki', description: 'يدرّب النظام المدرسي الطلاب على اتباع التعليمات بدلاً من التفكير بإبداع، وهي بصيرة مهمة للتعليم الحديث.', thumbnail: null },
      { src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4', title: 'عصر المليارديرات الأفراد', speaker: 'Sam Altman', description: 'يعتقد Sam Altman، CEO في OpenAI، أن عصر المليارديرات الأفراد قد يكون أقرب مما نتخيل، مدفوعاً بالذكاء الاصطناعي والقدرة الفردية.', thumbnail: null },
      { src: '/get.mp4', title: 'الفرصة الرقمية', speaker: 'قائد فكر', description: 'رؤى لاقتناص الفرص الرقمية وبناء النجاح في الاقتصاد الحديث.', thumbnail: null },
    ],
    skills: [
      { skill: 'تطوير الويب المدعوم بالذكاء الاصطناعي', icon: '🌐', earning: '$40-100/ساعة', description: 'ابنِ مواقع وتطبيقات ويب احترافية باستخدام أدوات ذكاء اصطناعي تتيح للمبتدئين منافسة المطورين الخبراء.', tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'], demand: 'مرتفع جداً' },
      { skill: 'إنشاء محتوى وكتابة تسويقية بالذكاء الاصطناعي', icon: '✍️', earning: '$30-80/ساعة', description: 'أنشئ مدونات ومحتوى شبكات اجتماعية ونصوصاً تسويقية عالية الجودة باستخدام أدوات كتابة ذكاء اصطناعي متقدمة.', tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'], demand: 'مرتفع جداً' },
      { skill: 'تسويق رقمي مدعوم بالذكاء الاصطناعي', icon: '📊', earning: '$25-70/ساعة', description: 'استفد من الذكاء الاصطناعي لإدارة الشبكات الاجتماعية، SEO، التحليلات، وحملات التسويق القائمة على البيانات.', tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'], demand: 'عالٍ جداً' },
      { skill: 'إنتاج وتحرير فيديو بالذكاء الاصطناعي', icon: '🎬', earning: '$35-90/ساعة', description: 'أنشئ فيديوهات احترافية بأدوات ذكاء اصطناعي للتحرير، التحريك، التعليق الصوتي، وتوليد المحتوى.', tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'], demand: 'عالٍ جداً' },
      { skill: 'تجارة إلكترونية وبناء متاجر بالذكاء الاصطناعي', icon: '🛒', earning: '$30-75/ساعة', description: 'ابنِ وأدر متاجر إلكترونية باستخدام منصات مدعومة بالذكاء الاصطناعي لأتمتة إنشاء المنتجات والتسويق.', tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'], demand: 'ينمو بسرعة' },
      { skill: 'أتمتة بالذكاء الاصطناعي ومساعدة افتراضية', icon: '⚡', earning: '$20-60/ساعة', description: 'أتمت عمليات الأعمال وقدّم مساعدة افتراضية معززة بالذكاء الاصطناعي باستخدام أدوات متقدمة.', tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'], demand: 'ينفجر طلباً' },
      { skill: 'تعليق البيانات ووسمها للذكاء الاصطناعي', icon: '🏷️', earning: '$15-50/ساعة', description: 'وسّم وعلّق البيانات لتدريب الذكاء الاصطناعي. ضروري لنماذج ML، الطلب ارتفع +220%. اعمل من أي مكان.', tools: ['Scale AI', 'Label Studio', 'Amazon SageMaker', 'Supervisely'], demand: 'ينفجر طلباً' },
      { skill: 'توليد الصور وتحريرها بالذكاء الاصطناعي', icon: '🎨', earning: '$25-80/ساعة', description: 'أنشئ صوراً مذهلة بالذكاء الاصطناعي: أصول تصميم، صور تسويقية، ومحتوى إبداعي للعلامات التجارية.', tools: ['Midjourney', 'DALL·E 3', 'Adobe Firefly', 'Leonardo.ai', 'Ideogram'], demand: 'عالٍ جداً' },
      { skill: 'تطوير روبوتات محادثة بالذكاء الاصطناعي', icon: '🤖', earning: '$35-100/ساعة', description: 'ابنِ مساعدين مخصصين ووكلاء محادثة بالذكاء الاصطناعي. ادمج روبوتات المحادثة في المواقع والتطبيقات.', tools: ['OpenAI API', 'Claude API', 'Voiceflow', 'Botpress', 'LangChain'], demand: 'عالٍ جداً' },
      { skill: 'هندسة التعليمات', icon: '💬', earning: '$30-90/ساعة', description: 'تخصص في صياغة تعليمات تستخرج أفضل ما لدى الذكاء الاصطناعي. مهارة أساسية لسير العمل المدعوم بالذكاء الاصطناعي.', tools: ['ChatGPT', 'Claude', 'Anthropic', 'مكتبات تعليمات'], demand: 'ينمو بسرعة' },
      { skill: 'تدريب مهني وتأهيل', icon: '🎯', earning: '$40-150/ساعة', description: 'ساعد العاملين على اكتساب مهارات جديدة والتكيف مع الذكاء الاصطناعي. الإرشاد الإنساني والتعاطف لا يمكن استبدالهما، الطلب +74%.', tools: ['منصات تدريب', 'Notion AI', 'Loom', 'Zoom'], demand: 'عالٍ جداً' },
      { skill: 'تفريغ اجتماعات بالذكاء الاصطناعي', icon: '📝', earning: '$20-50/ساعة', description: 'فرّغ الاجتماعات، أنشئ ملخصات، واستخرج بنود العمل. فعّل التعاون غير المتزامن عالمياً.', tools: ['Fireflies.ai', 'Otter.ai', 'Clara', 'Krisp', 'Rev'], demand: 'ينمو بسرعة' },
      { skill: 'تكامل وأتمتة بالذكاء الاصطناعي', icon: '🔗', earning: '$40-120/ساعة', description: 'اربط أدوات الذكاء الاصطناعي بسير عمل الأعمال. تكاملات مخصصة تجعل الذكاء الاصطناعي جزءاً من العمليات اليومية.', tools: ['Zapier', 'Make.com', 'n8n', 'تكاملات API'], demand: 'ينفجر طلباً' },
      { skill: 'تسويق بريد إلكتروني مدعوم بالذكاء الاصطناعي', icon: '📧', earning: '$25-70/ساعة', description: 'حجم كبير وطلب عالٍ. أنشئ حملات، أتمت التسلسلات، وحسّن الأداء بكتابة تسويقية مدعومة بالذكاء الاصطناعي.', tools: ['Copy.ai', 'Jasper', 'Mailchimp AI', 'HubSpot', 'Woodpecker'], demand: 'عالٍ جداً' },
    ],
    partnership: {
      schoolProvides: [
        { title: 'استثمار البرنامج', description: <>رسوم الشراكة: <span className="font-medium text">$5,000/فصل</span> (5 أشهر) أو <span className="font-medium text">$12,000/سنة</span>، بمرونة تناسب ميزانيتك وتقويمك الأكاديمي.</> },
        { title: 'الطلاب (السنة النهائية)', description: 'توفير طلاب السنة النهائية الملتزمين بإكمال البرنامج الكامل والمستعدين لتدريب مكثف على المهارات الرقمية.' },
        { title: 'معمل حاسوب', description: 'معمل حاسوب قائم مع كهرباء موثوقة ومساحة كافية للدفعات خلال ساعات البرنامج.' },
        { title: 'معدات حاسوبية', description: 'أجهزة حاسوب أو حواسيب محمولة يستخدمها الطلاب أثناء جلسات التدريب. يجب أن تكون قادرة على تشغيل متصفحات حديثة وبرامج أساسية.' },
        { title: 'دمج البرنامج', description: 'دمج البرنامج في التقويم الأكاديمي وتوفير أوقات مخصصة لتقديم المنهج.' },
      ],
      weProvide: [
        { title: 'اتصال بالإنترنت', description: 'نتولى جميع تكاليف وإعداد الاتصال بالإنترنت عالي السرعة والموثوق، وهو عنصر أساسي لنجاح البرنامج.' },
        { title: 'ميسّر في الموقع', description: 'ممثل فريق مخصص في الموقع يتبع منهجنا المثبت ويوفر تعليماً مباشراً ودعماً للطلاب.' },
        { title: 'أدوات واشتراكات الذكاء الاصطناعي', description: 'نوفر وندير كل اشتراكات أدوات الذكاء الاصطناعي المميزة (ChatGPT Plus وClaude Pro وGitHub Copilot وغيرها) لمنح الطلاب قدرات قوية في الاقتصاد الرقمي.' },
        { title: 'منهج كامل', description: 'منهج عام أكاديمي كامل يتضمن 42 أسبوعاً من المحتوى المنظم والتقييمات والمشاريع العملية المتوافقة مع احتياجات السوق.' },
        { title: 'دعم مستمر', description: 'متابعة مستمرة للبرنامج، تتبع للتقدم، ودعم لضمان تنفيذ ناجح ونتائج أفضل للطلاب.' },
      ],
      successTitle: 'عوامل نجاح الشراكة',
      successFactors: [
        { title: 'أداء الطلاب', description: 'عزيمتهم والتزامهم يدفعان نجاح التوظيف أو خلق فرص عمل' },
        { title: 'مخصص للمواهب', description: 'تعلم موجّه يناسب مواهب كل شخص ويُظهر القدرات الريادية' },
        { title: 'التزام متبادل', description: 'الطرفان ملتزمان بنجاح الطلاب وإكمال البرنامج' },
        { title: 'دعم مستمر', description: 'تعاون متواصل طوال العام الأكاديمي' },
      ],
    },
  },
}

const futureReadyOfferingDisplayCopy: Record<keyof typeof translations, FutureReadyOfferingDisplayCopy> = {
  en: {},
  fr: {
    'school-partnership-program': {
      name: 'Programme de partenariat scolaire',
      period: '/semestre',
      priceOptions: [{ period: '/semestre (5 mois)' }, { period: '/an' }],
      description: 'Programme complet. Écoles et institutions.',
      features: [
        'Curriculum d’une année académique complète (42 semaines)',
        'Facilitateur sur site et soutien',
        'Connectivité Internet incluse',
        'Outils IA premium et abonnements',
        'Tous les supports d’apprentissage fournis',
        'Suivi des progrès et rapports',
        'Évaluation des élèves et certification',
        'Soutien continu du programme',
        'Préparation à l’emploi et compétences pour créer ses propres emplois',
        'Apprentissage guidé personnalisé selon les talents et dons de chaque élève',
        'Garantie de réussite du partenariat',
      ],
    },
    'guided-learning': {
      name: 'Apprentissage guidé',
      period: ' en une fois',
      description: 'Compétences numériques. Personnalisé selon vos talents. Apprenez partout. Gagnez en ligne.',
      features: [
        'Curriculum complet de compétences numériques (départ de zéro)',
        'Apprentissage guidé personnalisé selon vos talents et dons uniques',
        'Apprenez depuis la maison, l’école, l’université ou un centre de formation',
        'Outils et techniques IA pour gagner de l’argent en ligne',
        'Apprentissage guidé : étudiez à votre rythme avec soutien',
        'Compétences qui révèlent votre potentiel entrepreneurial',
        'Soutien communautaire et forums d’apprentissage entre pairs',
        'Certificats numériques à la fin du parcours',
        'Accès à vie à tous les supports du cours',
        'Création de portfolio et ressources de placement',
        'Apprenez à utiliser l’IA pour rivaliser avec des experts',
        'Commencez à gagner pendant que vous apprenez, créez des emplois ou soyez recruté',
      ],
    },
    'professional-institutes': {
      name: 'Instituts professionnels',
      period: '/centre de formation',
      description: 'Pour chaque centre de formation, académie ou institut professionnel.',
      features: [
        'Curriculum professionnel complet pour apprenants adultes',
        'Horaires flexibles pour professionnels actifs',
        'Facilitateur dédié et soutien de cohorte',
        'Outils IA premium et abonnements',
        'Tous les supports d’apprentissage fournis',
        'Suivi des progrès et certification',
        'Placement professionnel et partenariats sectoriels',
        'Durée de programme personnalisable',
        'Options de livraison sur site ou hybride',
        'Garantie de réussite du partenariat',
      ],
    },
  },
  es: {
    'school-partnership-program': {
      name: 'Programa de alianza escolar',
      period: '/semestre',
      priceOptions: [{ period: '/semestre (5 meses)' }, { period: '/año' }],
      description: 'Programa completo. Escuelas e instituciones.',
      features: [
        'Currículo de año académico completo (42 semanas)',
        'Facilitador en sitio y soporte',
        'Conectividad a Internet incluida',
        'Herramientas IA premium y suscripciones',
        'Todos los materiales de aprendizaje incluidos',
        'Seguimiento del progreso e informes',
        'Evaluación estudiantil y certificación',
        'Soporte continuo del programa',
        'Preparación laboral y habilidades para crear tus propios empleos',
        'Aprendizaje guiado personalizado según talentos y dones de cada estudiante',
        'Garantía de éxito de la alianza',
      ],
    },
    'guided-learning': {
      name: 'Aprendizaje guiado',
      period: ' pago único',
      description: 'Habilidades digitales. Personalizado según tus talentos. Aprende desde cualquier lugar. Gana online.',
      features: [
        'Currículo completo de habilidades digitales (desde cero)',
        'Aprendizaje guiado personalizado según tus talentos y dones únicos',
        'Aprende desde casa, la escuela, la universidad o un centro vocacional',
        'Herramientas y técnicas IA para ganar dinero online',
        'Aprendizaje guiado: estudia a tu ritmo con soporte',
        'Habilidades que despiertan tu potencial emprendedor',
        'Soporte comunitario y foros de aprendizaje entre pares',
        'Certificados digitales al completar',
        'Acceso de por vida a todos los materiales del curso',
        'Creación de portafolio y recursos de inserción laboral',
        'Aprende a usar IA para competir con expertos',
        'Empieza a ganar mientras aprendes, crea empleos o consigue contratación',
      ],
    },
    'professional-institutes': {
      name: 'Institutos profesionales',
      period: '/centro vocacional',
      description: 'Para cada centro vocacional, academia de formación o instituto profesional.',
      features: [
        'Currículo profesional completo para estudiantes adultos',
        'Horario flexible para profesionales que trabajan',
        'Facilitador dedicado y soporte de cohorte',
        'Herramientas IA premium y suscripciones',
        'Todos los materiales de aprendizaje incluidos',
        'Seguimiento del progreso y certificación',
        'Inserción laboral y alianzas con la industria',
        'Duración del programa personalizable',
        'Opciones de entrega presencial o híbrida',
        'Garantía de éxito de la alianza',
      ],
    },
  },
  de: {
    'school-partnership-program': {
      name: 'Schulpartnerschaftsprogramm',
      period: '/Semester',
      priceOptions: [{ period: '/Semester (5 Monate)' }, { period: '/Jahr' }],
      description: 'Vollständiges Programm. Schulen und Institutionen.',
      features: [
        'Curriculum für ein volles akademisches Jahr (42 Wochen)',
        'Facilitator vor Ort und Support',
        'Internetverbindung inklusive',
        'Premium-KI-Tools und Abonnements',
        'Alle Lernmaterialien werden bereitgestellt',
        'Fortschrittsverfolgung und Berichte',
        'Schülerbewertung und Zertifizierung',
        'Laufender Programmsupport',
        'Jobreife-Training und Fähigkeiten, um eigene Jobs zu schaffen',
        'Geführtes Lernen, personalisiert nach Talenten und Begabungen jedes Schülers',
        'Erfolgsgarantie für die Partnerschaft',
      ],
    },
    'guided-learning': {
      name: 'Geführtes Lernen',
      period: ' einmalig',
      description: 'Digitale Fähigkeiten. Personalisiert nach deinen Talenten. Lerne überall. Verdiene online.',
      features: [
        'Vollständiges Curriculum für digitale Fähigkeiten (von Grund auf)',
        'Personalisiertes geführtes Lernen, zugeschnitten auf deine Talente und Begabungen',
        'Lerne von zu Hause, der Schule, Universität oder einem Berufsbildungszentrum',
        'KI-gestützte Tools und Techniken, um online Geld zu verdienen',
        'Geführtes Lernen: lerne mit Unterstützung nach deinem eigenen Zeitplan',
        'Fähigkeiten, die dein unternehmerisches Potenzial freilegen',
        'Community-Support und Peer-Learning-Foren',
        'Digitale Zertifikate nach Abschluss',
        'Lebenslanger Zugriff auf alle Kursmaterialien',
        'Portfolio-Aufbau und Ressourcen für Jobvermittlung',
        'Lerne, KI zu nutzen, um mit Experten zu konkurrieren',
        'Beginne zu verdienen, während du lernst, schaffe Jobs oder werde eingestellt',
      ],
    },
    'professional-institutes': {
      name: 'Berufsinstitute',
      period: '/Berufsbildungszentrum',
      description: 'Für jedes Berufsbildungszentrum, jede Trainingsakademie oder jedes Berufsinstitut.',
      features: [
        'Vollständiges professionelles Curriculum für erwachsene Lernende',
        'Flexibler Zeitplan für Berufstätige',
        'Dedizierter Facilitator und Kohorten-Support',
        'Premium-KI-Tools und Abonnements',
        'Alle Lernmaterialien werden bereitgestellt',
        'Fortschrittsverfolgung und Zertifizierung',
        'Jobvermittlung und Branchenpartnerschaften',
        'Anpassbare Programmdauer',
        'Optionen für Vor-Ort- oder Hybrid-Durchführung',
        'Erfolgsgarantie für die Partnerschaft',
      ],
    },
  },
  ar: {
    'school-partnership-program': {
      name: 'برنامج الشراكة المدرسية',
      period: '/فصل',
      priceOptions: [{ period: '/فصل (5 أشهر)' }, { period: '/سنة' }],
      description: 'برنامج كامل. للمدارس والمؤسسات.',
      features: [
        'منهج عام أكاديمي كامل (42 أسبوعاً)',
        'ميسّر في الموقع ودعم',
        'اتصال بالإنترنت مشمول',
        'أدوات واشتراكات ذكاء اصطناعي مميزة',
        'توفير جميع مواد التعلم',
        'تتبع التقدم وإعداد التقارير',
        'تقييم الطلاب ومنح الشهادات',
        'دعم مستمر للبرنامج',
        'تدريب على الجاهزية للعمل ومهارات لإنشاء وظائفك الخاصة',
        'تعلم موجه مخصص لمواهب كل طالب وقدراته',
        'ضمان نجاح الشراكة',
      ],
    },
    'guided-learning': {
      name: 'تعلم موجه',
      period: ' دفعة واحدة',
      description: 'مهارات رقمية. مخصصة لمواهبك. تعلم من أي مكان. اكسب عبر الإنترنت.',
      features: [
        'منهج كامل للمهارات الرقمية (من الصفر)',
        'تعلم موجه مخصص لمواهبك وقدراتك الفريدة',
        'تعلم من المنزل أو المدرسة أو الجامعة أو مركز التدريب المهني',
        'أدوات وتقنيات مدعومة بالذكاء الاصطناعي لكسب المال عبر الإنترنت',
        'تعلم موجه: ادرس وفق جدولك مع الدعم',
        'مهارات تُظهر إمكاناتك الريادية',
        'دعم مجتمعي ومنتديات تعلم بين الأقران',
        'شهادات رقمية عند الإكمال',
        'وصول مدى الحياة إلى جميع مواد الدورة',
        'بناء ملف أعمال وموارد للتوظيف',
        'تعلم كيف تستخدم الذكاء الاصطناعي للمنافسة مع الخبراء',
        'ابدأ بالكسب أثناء التعلم، أنشئ وظائف أو احصل على عمل',
      ],
    },
    'professional-institutes': {
      name: 'المعاهد المهنية',
      period: '/مركز تدريب مهني',
      description: 'لكل مركز تدريب مهني أو أكاديمية تدريب أو معهد مهني.',
      features: [
        'منهج مهني كامل للمتعلمين البالغين',
        'جدول مرن للمهنيين العاملين',
        'ميسّر مخصص ودعم للدفعة',
        'أدوات واشتراكات ذكاء اصطناعي مميزة',
        'توفير جميع مواد التعلم',
        'تتبع التقدم ومنح الشهادات',
        'توظيف وشراكات مع القطاع',
        'مدة برنامج قابلة للتخصيص',
        'خيارات تنفيذ في الموقع أو هجينة',
        'ضمان نجاح الشراكة',
      ],
    },
  },
}

export default function FutureReadyGraduatePage({ params, searchParams }: FutureReadyGraduatePageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string; speaker: string; description: string } | null>(null)
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false)
  const skillsScrollRef = useRef<HTMLDivElement>(null)
  const language = useLanguage()
  const pageJsonLd = getFutureReadyGraduateJsonLd(locale)

  const ctaT = translations[language].cta
  const pageT = translations[language].futureReadyGraduate
  const heroProofCopy = futureReadyHeroProofCopy[language]
  const localCopy = futureReadyGraduateLocalCopy[language]
  const digitalSkillsReasons = localCopy.digitalSkillsReasons
  const outcomes = localCopy.outcomes
  const caseStudy = localCopy.caseStudy
  const featuredVideos = localCopy.featuredVideos
  const [pricing, setPricing] = useState<FutureReadyOffering[]>(visibleDefaultFutureReadyOfferings())
  const localizedPricing = useMemo(
    () =>
      pricing.map((plan) => {
        const displayCopy = futureReadyOfferingDisplayCopy[language][plan.slug]

        if (!displayCopy) {
          return plan
        }

        const { priceOptions: localizedPriceOptions, ...localizedDisplayCopy } = displayCopy

        return {
          ...plan,
          ...localizedDisplayCopy,
          priceOptions: plan.priceOptions?.map((option, index) => ({
            ...option,
            period: localizedPriceOptions?.[index]?.period ?? option.period,
          })),
        }
      }),
    [language, pricing]
  )
  const heroTitles = useMemo(
    () => [
      `${pageT.heroTitleLine1} ${pageT.heroTitleHighlight}`,
      pageT.heroAlternateTitle,
    ],
    [pageT.heroAlternateTitle, pageT.heroTitleHighlight, pageT.heroTitleLine1]
  )
  const [heroTitleIndex, setHeroTitleIndex] = useState(0)
  const pathsHeading = localizedPricing.length === 3 ? pageT.threePaths : pageT.threePaths.replace(/^(Three|Trois|Tres|Drei|ثلاثة)\s+/i, '')

  useEffect(() => {
    setHeroTitleIndex(0)
  }, [heroTitles])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroTitleIndex((current) => (current + 1) % heroTitles.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [heroTitles.length])

  useEffect(() => {
    let cancelled = false

    async function loadOfferings() {
      try {
        const res = await fetch('/api/future-ready-offerings')
        const data = await res.json()
        if (!cancelled && res.ok && Array.isArray(data.offerings)) {
          setPricing(data.offerings)
        }
      } catch {
        // Keep the static fallback if the CMS table/API is not available yet.
      }
    }

    void loadOfferings()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const carousel = skillsScrollRef.current
      const firstCard = carousel?.firstElementChild as HTMLElement | null

      if (!carousel || !firstCard) {
        return
      }

      const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap || '0')
      const step = firstCard.getBoundingClientRect().width + gap
      const loopWidth = carousel.scrollWidth / 2
      const nextLeft = carousel.scrollLeft + step

      carousel.scrollTo({
        left: nextLeft >= loopWidth ? nextLeft - loopWidth : nextLeft,
        behavior: nextLeft >= loopWidth ? 'auto' : 'smooth',
      })
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <PremiumHeroBackdrop />
        <PremiumHeroParallax className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-success/10 border border-success/30 rounded-full text-success text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {pageT.heroBadge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight mb-4 sm:mb-6 md:mb-8 px-2 min-h-[3.1em] sm:min-h-[2.7em]">
              <motion.span
                key={heroTitles[heroTitleIndex]}
                initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="block gradient-text"
              >
                {heroTitles[heroTitleIndex]}
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2">
              {pageT.heroDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">10+ {heroProofCopy.yearsMetric}</span> {heroProofCopy.years}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">98%</span> {heroProofCopy.satisfaction}
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 mt-4 sm:mt-6">
              <a
                {...getBookingLinkProps()}
                className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                {ctaT.scheduleConsultation}
              </a>
              <DemoPresentationDownload service="futureReadyGraduate" variant="hero" />
            </div>
          </motion.div>
        </PremiumHeroParallax>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Problem vs Opportunity */}
      <AnimatedSection className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-success/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="section-label mb-4 inline-block">{localCopy.labels.problemOpportunity}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block">
                {pageT.educationPrefix}
                <span className="text-destructive">{pageT.educationFails}</span>
              </span>
              <span className="mt-3 block gradient-text">
                {pageT.digitalEconomyPrefix}
                {pageT.digitalThrives}
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              {pageT.educationFailsSubtitle}
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Traditional System Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center text-2xl">
                    📉
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text">
                      {pageT.traditionalCrisis}
                    </h3>
                    <p className="text-muted text-sm">{pageT.traditionalCrisisDesc}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">40%</div>
                    <p className="text-muted text-sm leading-relaxed">{localCopy.problemStats[0]}</p>
                  </div>
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">75%</div>
                    <p className="text-muted text-sm leading-relaxed">{localCopy.problemStats[1]}</p>
                  </div>
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">$1.7T</div>
                    <p className="text-muted text-sm leading-relaxed">{localCopy.problemStats[2]}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Digital Economy Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="card p-8 border-success/30 bg-gradient-to-br from-success/10 to-success/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-2xl">
                    📈
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text">
                      {pageT.digitalBoom}
                    </h3>
                    <p className="text-muted text-sm">{pageT.digitalBoomDesc}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">$4.8T</div>
                    <p className="text-muted text-sm leading-relaxed">{localCopy.opportunityStats[0]}</p>
                  </div>
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">73M</div>
                    <p className="text-muted text-sm leading-relaxed">{localCopy.opportunityStats[1]}</p>
                  </div>
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">300%</div>
                    <p className="text-muted text-sm leading-relaxed">{localCopy.opportunityStats[2]}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Future-ready certification advantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-20 md:mt-28"
          >
            <div className="pointer-events-none absolute inset-x-8 top-16 h-48 rounded-full bg-success/10 blur-3xl" aria-hidden />
            <div className="relative text-center mb-12">
              <span className="section-label mb-4 inline-block">{localCopy.labels.futureReadyAdvantage}</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">{pageT.whyDigitalSkills}</span>
              </h3>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                {pageT.whyDigitalSkillsDesc}
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {digitalSkillsReasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className={`group relative min-w-0 overflow-hidden rounded-3xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    i < 3
                      ? 'border-success/35 bg-background/85 hover:border-success/60 hover:shadow-success/10'
                      : 'border-border-light bg-surface/75 hover:border-accent/45 hover:shadow-accent/10'
                  }`}
                >
                  <div className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r ${i < 3 ? 'from-transparent via-success to-transparent' : 'from-transparent via-accent to-transparent'}`} />
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-3xl shadow-sm ${
                      i < 3 ? 'border-success/25 bg-success/10' : 'border-accent/20 bg-accent/10'
                    }`}>
                      {reason.icon}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      i < 3 ? 'border-success/25 bg-success/10 text-success' : 'border-accent/20 bg-accent/10 text-accent'
                    }`}>
                      {reason.label}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text mb-3">{reason.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Results */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageT.provenResults}<br />
              <span className="gradient-text">{pageT.provenResultsHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-success mb-2">
                  {outcome.metric}
                </div>
                <p className="text font-semibold mb-1">{outcome.description}</p>
                <p className="text-muted text-sm">{outcome.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Case Study */}
          <div className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    {localCopy.labels.programInProgress}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{caseStudy.school}</h3>
                  <span className="text-muted text-sm">{caseStudy.location}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">{localCopy.labels.challenge}</span>
                    <p className="text-muted mt-2 leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">{localCopy.labels.implementation}</span>
                    <p className="text mt-2 leading-relaxed">{caseStudy.implementation}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">{localCopy.labels.timeline}</span>
                    <p className="text-success font-medium mt-2">{caseStudy.timeline}</p>
                  </div>

                  <div className="card p-6 bg-success/5 border border-success/20">
                    <blockquote className="text italic leading-relaxed">
                      {caseStudy.testimonial}
                    </blockquote>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold mb-6">{localCopy.labels.projections}</h4>
                <div className="space-y-6">
                  {caseStudy.projections.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-success mb-2">
                        {result.metric}
                      </div>
                      <p className="text-muted text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Videos from Global Leaders */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageT.globalLeaders}<br />
              <span className="gradient-text">{pageT.globalLeadersHighlight}</span>
            </h2>
              <p className="text-muted text-lg max-w-3xl mx-auto">
              {pageT.globalLeadersSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-0 overflow-hidden hover:border-success/50 group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <VideoThumbnail 
                  src={video.src} 
                  onPlay={() => {}}
                />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-dark mb-2">
                    {video.speaker}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-success transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {featuredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">{localCopy.labels.emptyVideos}</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Digital Economy Skills */}
      <section id="curriculum" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              {pageT.highDemandSkills}<br />
              <span className="gradient-text">{pageT.highDemandSkillsHighlight}</span>
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {pageT.highDemandSkillsSubtitle}
            </p>
          </div>

          <div className="relative -mx-4 overflow-hidden px-4 sm:mx-auto sm:max-w-[1008px] sm:px-0 mb-10 sm:mb-16">
            <div
              ref={skillsScrollRef}
              className="flex gap-3 sm:gap-6 pb-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory scroll-px-4 sm:scroll-px-0"
            >
              {(() => {
                const skills = localCopy.skills
                const scrollCards = [...skills, ...skills]

                const SkillCard = ({ item }: { item: typeof skills[0] }) => (
                  <div className="card p-4 sm:p-6 hover:border-success/50 group w-[min(18rem,calc(100vw-2rem))] sm:w-[320px] min-h-[260px] sm:min-h-[300px] flex flex-col flex-shrink-0 snap-start">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-[1.35rem] border border-success/25 bg-gradient-to-br from-success/20 via-success/10 to-background shadow-lg shadow-success/10 overflow-visible transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                        <div className="absolute inset-1 rounded-[1.05rem] bg-background/75 backdrop-blur-sm" />
                        <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-success/20 blur-[2px]" aria-hidden />
                        <span className="relative z-10 flex h-full w-full items-center justify-center text-2xl sm:text-3xl leading-none drop-shadow-sm">
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold leading-snug group-hover:text-success transition-colors mb-2">
                        {item.skill}
                      </h3>
                      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-2">
                        <span className="text-success text-sm sm:text-base font-bold">{item.earning}</span>
                        <span className="px-2 py-0.5 bg-success/10 text-success text-xs rounded-full">
                          {item.demand}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-xs leading-relaxed mb-3 flex-1 line-clamp-3 sm:line-clamp-none">{item.description}</p>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-dark block mb-1">{localCopy.labels.keyTools}</span>
                      <div className="flex flex-wrap gap-1">
                        {item.tools.slice(0, 4).map((tool, j) => (
                          <span key={j} className="px-2 py-0.5 bg-surface-light text-xs rounded text-muted">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )

                return scrollCards.map((item, i) => (
                  <SkillCard key={`${item.skill}-${i}`} item={item} />
                ))
              })()}
            </div>
          </div>

        </div>
      </section>

      {/* Partnership Requirements */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageT.partnershipRequirements}<br />
              <span className="gradient-text">{pageT.partnershipRequirementsHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {pageT.partnershipRequirementsDesc}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What Schools Provide */}
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-8"
              >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-info/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🏫
                </div>
                <h3 className="font-display text-2xl font-bold text-info">{pageT.whatSchoolsProvide}</h3>
                <p className="text-muted text-sm mt-2">{pageT.whatSchoolsProvideDesc}</p>
                  </div>

              <div className="space-y-6">
                {localCopy.partnership.schoolProvides.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-info rounded-full" />
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What We Provide */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="font-display text-2xl font-bold text-success">{pageT.whatWeProvide}</h3>
                <p className="text-muted text-sm mt-2">{pageT.whatWeProvideDesc}</p>
              </div>

              <div className="space-y-6">
                {localCopy.partnership.weProvide.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              </motion.div>
          </div>

          {/* Partnership Success Factors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 card p-8 bg-gradient-to-br from-success/5 to-info/5 border-success/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold mb-6">
                <span className="gradient-text">{localCopy.partnership.successTitle}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {localCopy.partnership.successFactors.map((factor) => (
                  <div key={factor.title}>
                    <span className="font-semibold text block mb-2">{factor.title}</span>
                    <span className="text-muted">{factor.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {pathsHeading}<br />
              <span className="gradient-text">{pageT.threePathsHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {pageT.threePathsSubtitle} <span className="text font-medium">{pageT.noOneLeftBehind}</span>
            </p>
          </div>

          {/* Three Tiers Visual Layout */}
          <div className="relative">
            <div
              className={`grid gap-8 mx-auto ${
                localizedPricing.length === 1
                  ? 'max-w-xl'
                  : localizedPricing.length === 2
                    ? 'max-w-4xl md:grid-cols-2'
                    : 'max-w-6xl md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {localizedPricing.map((plan, i) => (
                <motion.div
                  key={plan.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative card p-8 pt-10 h-full flex flex-col ${
                    plan.popular 
                      ? 'border-success/50 glow-accent' 
                      : plan.spotsAvailable
                        ? 'border-accent/30'
                        : 'border-success/30'
                  }`}
                >
                  {/* Path Indicator – in-flow, responsive, opaque so no overlay or color clash */}
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <span className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold whitespace-normal text-center ${
                      plan.audience === 'schools'
                        ? 'bg-surface-light border border-success/60 text-success'
                        : plan.audience === 'professional'
                          ? 'bg-surface-light border border-accent/60 text-accent'
                          : 'bg-surface-light border border-border text-muted'
                    }`}>
                      {plan.audience === 'schools' ? `🏫 ${pageT.forSchools}` : plan.audience === 'professional' ? (
                        <>🏢 {pageT.forProfessional}</>
                      ) : `🌍 ${pageT.guidedLearning}`}
                    </span>
                    {'isNew' in plan && plan.isNew && (
                      <span className="shrink-0 px-3 py-1 bg-surface-light border border-accent/60 text-accent text-xs font-bold rounded-full">
                        {pageT.newLabel}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold mb-3 text-center">{plan.name}</h3>
                    <div className="text-center mb-4">
                      {plan.priceOptions ? (
                        <div className="space-y-2 mb-2">
                          {plan.priceOptions.map((opt, j) => (
                            <div key={j} className="font-display text-lg font-bold text-success">
                              {opt.amount}
                              <span className="text-base text-muted font-normal ml-1">{opt.period}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="font-display text-5xl font-bold text-success mb-1">
                          {plan.price}
                          <span className="text-xl text-muted font-normal ml-1">{plan.period}</span>
                        </div>
                      )}
                      <p className="text-muted text-sm leading-relaxed">{plan.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
                          plan.audience === 'schools' ? 'bg-success' : plan.audience === 'professional' ? 'bg-accent' : 'bg-muted'
                        }`} />
                        <span className="text-sm text leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.ctaMode === 'guided' && plan.spotsAvailable ? (
                    <div className="space-y-3 w-full">
                      <button
                        type="button"
                        onClick={() => setEarlyAccessOpen(true)}
                        className="btn-primary w-full text-center py-3 block"
                      >
                        {ctaT.bookYourSpot}
                      </button>
                      <StripeCheckoutButton
                        plan="frg_guided"
                        className="btn-secondary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPayGuided}
                      </StripeCheckoutButton>
                    </div>
                  ) : plan.ctaMode === 'school' ? (
                    <div className="space-y-3 w-full">
                      <StripeCheckoutButton
                        plan="frg_school_semester"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPaySchoolSemester}
                      </StripeCheckoutButton>
                      <StripeCheckoutButton
                        plan="frg_school_yearly"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPaySchoolYearly}
                      </StripeCheckoutButton>
                      <a
                        {...getBookingLinkProps()}
                        className="btn-secondary w-full text-center py-3 rounded-lg font-semibold transition-all block"
                      >
                        {ctaT.orBookConsultationFirst}
                      </a>
                    </div>
                  ) : plan.ctaMode === 'professional' ? (
                    <div className="space-y-3 w-full">
                      <StripeCheckoutButton
                        plan="frg_professional_monthly"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPayProfessionalMonthly}
                      </StripeCheckoutButton>
                      <a
                        {...getBookingLinkProps()}
                        className="btn-secondary w-full text-center py-3 rounded-lg font-semibold transition-all block"
                      >
                        {ctaT.scheduleConsultation}
                      </a>
                    </div>
                  ) : plan.ctaMode === 'guided' ? (
                    <div className="space-y-3 w-full">
                      <StripeCheckoutButton
                        plan="frg_guided"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPayGuided}
                      </StripeCheckoutButton>
                      <a
                        {...getBookingLinkProps()}
                        className="btn-secondary w-full text-center py-3 rounded-lg font-semibold transition-all block hover:border-accent hover:text-accent"
                      >
                        {ctaT.getStarted}
                      </a>
                    </div>
                  ) : (
                    <a
                      {...getBookingLinkProps()}
                      className="btn-primary w-full text-center py-3 rounded-lg font-semibold transition-all block"
                    >
                      {ctaT.scheduleConsultation}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {pageT.readyToTransform}
          </h2>
          <p className="text-muted text-lg mb-8">
            {pageT.readyToTransformDesc}
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {ctaT.scheduleConsultation}
          </a>
        </div>
      </AnimatedSection>

      <EarlyAccessFormModal isOpen={earlyAccessOpen} onClose={() => setEarlyAccessOpen(false)} />

      {selectedVideo && selectedVideo.src && (
        <VideoModal
          isOpen={selectedVideo !== null}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title}
          description={`${selectedVideo.speaker}: ${selectedVideo.description}`}
        />
      )}
    </main>
  )
}