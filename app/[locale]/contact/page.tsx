'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import { officeLocations, formatFullAddress, getGoogleMapsUrl } from '@/app/data/locations'
import { getCtaButtonText, getBookingLinkProps, getBookingUrl } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getContactPageJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

const contactMethodConfig = [
  { icon: '📅', href: getBookingUrl(), primary: true as const },
  { icon: '✉️', href: 'mailto:support@digni-digital-llc.com', primary: false as const },
  { icon: '💬', href: 'https://wa.me/254702593518', primary: false as const },
  { icon: '💼', href: 'https://www.linkedin.com/company/digni-digital-llc', primary: false as const },
]

const contactPageCopy = {
  en: {
    years: 'building growth systems',
    satisfaction: 'client satisfaction',
    formAria: 'Contact form',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'Your full name',
    email: 'Email Address *',
    company: 'Company Name',
    companyPlaceholder: 'Your company name',
    projectType: 'Project Type',
    projectDetails: 'Project Details *',
    projectDetailsPlaceholder: 'Tell us about your project, goals, timeline, and any specific requirements...',
    responseNote: "We'll respond within 24 hours with next steps",
    invalidResponse: 'Invalid response from server.',
    serverError: (status: number) => `Server error (${status}). The contact API may be unavailable.`,
    failedToSend: 'Failed to send',
    officesBadge: 'Our Offices',
    officesTitle: 'Find Us',
    officesTitleHighlight: 'Worldwide',
    officesDesc: "With offices across 4 continents, we're positioned to serve you with local expertise and global standards.",
    headquarters: 'Headquarters',
    mainAfrica: 'Main office in Africa',
    viewMap: 'View on Map',
    faqsTitle: 'Frequently Asked Questions',
  },
  fr: {
    years: 'à construire des systèmes de croissance',
    satisfaction: 'de satisfaction client',
    formAria: 'Formulaire de contact',
    fullName: 'Nom complet *',
    fullNamePlaceholder: 'Votre nom complet',
    email: 'Adresse e-mail *',
    company: 'Nom de l’entreprise',
    companyPlaceholder: 'Nom de votre entreprise',
    projectType: 'Type de projet',
    projectDetails: 'Détails du projet *',
    projectDetailsPlaceholder: 'Décrivez votre projet, vos objectifs, votre calendrier et vos besoins précis...',
    responseNote: 'Nous répondrons sous 24 heures avec les prochaines étapes',
    invalidResponse: 'Réponse invalide du serveur.',
    serverError: (status: number) => `Erreur serveur (${status}). L’API de contact peut être indisponible.`,
    failedToSend: 'Échec de l’envoi',
    officesBadge: 'Nos bureaux',
    officesTitle: 'Retrouvez-nous',
    officesTitleHighlight: 'dans le monde',
    officesDesc: 'Présents sur 4 continents, nous vous servons avec une expertise locale et des standards globaux.',
    headquarters: 'Siège social',
    mainAfrica: 'Bureau principal en Afrique',
    viewMap: 'Voir sur la carte',
    faqsTitle: 'Questions fréquentes',
  },
  ar: {
    years: 'في بناء أنظمة النمو',
    satisfaction: 'رضا العملاء',
    formAria: 'نموذج التواصل',
    fullName: 'الاسم الكامل *',
    fullNamePlaceholder: 'اكتب اسمك الكامل',
    email: 'البريد الإلكتروني *',
    company: 'اسم الشركة',
    companyPlaceholder: 'اسم شركتك',
    projectType: 'نوع المشروع',
    projectDetails: 'تفاصيل المشروع *',
    projectDetailsPlaceholder: 'أخبرنا عن مشروعك وأهدافك والمدة المطلوبة وأي متطلبات محددة...',
    responseNote: 'سنرد خلال 24 ساعة مع الخطوات التالية',
    invalidResponse: 'استجابة غير صالحة من الخادم.',
    serverError: (status: number) => `خطأ في الخادم (${status}). قد تكون واجهة التواصل غير متاحة.`,
    failedToSend: 'فشل الإرسال',
    officesBadge: 'مكاتبنا',
    officesTitle: 'تجدنا',
    officesTitleHighlight: 'حول العالم',
    officesDesc: 'بوجودنا في 4 قارات، نخدمك بخبرة محلية ومعايير عالمية.',
    headquarters: 'المقر الرئيسي',
    mainAfrica: 'المكتب الرئيسي في أفريقيا',
    viewMap: 'عرض على الخريطة',
    faqsTitle: 'الأسئلة الشائعة',
  },
  de: {
    years: 'im Aufbau von Wachstumssystemen',
    satisfaction: 'Kundenzufriedenheit',
    formAria: 'Kontaktformular',
    fullName: 'Vollständiger Name *',
    fullNamePlaceholder: 'Ihr vollständiger Name',
    email: 'E-Mail-Adresse *',
    company: 'Unternehmensname',
    companyPlaceholder: 'Name Ihres Unternehmens',
    projectType: 'Projekttyp',
    projectDetails: 'Projektdetails *',
    projectDetailsPlaceholder: 'Erzählen Sie uns von Ihrem Projekt, Ihren Zielen, dem Zeitplan und konkreten Anforderungen...',
    responseNote: 'Wir antworten innerhalb von 24 Stunden mit den nächsten Schritten',
    invalidResponse: 'Ungültige Serverantwort.',
    serverError: (status: number) => `Serverfehler (${status}). Die Kontakt-API ist möglicherweise nicht verfügbar.`,
    failedToSend: 'Senden fehlgeschlagen',
    officesBadge: 'Unsere Büros',
    officesTitle: 'Sie finden uns',
    officesTitleHighlight: 'weltweit',
    officesDesc: 'Mit Büros auf 4 Kontinenten bedienen wir Sie mit lokaler Expertise und globalen Standards.',
    headquarters: 'Hauptsitz',
    mainAfrica: 'Hauptbüro in Afrika',
    viewMap: 'Auf Karte ansehen',
    faqsTitle: 'Häufig gestellte Fragen',
  },
  es: {
    years: 'construyendo sistemas de crecimiento',
    satisfaction: 'satisfacción del cliente',
    formAria: 'Formulario de contacto',
    fullName: 'Nombre completo *',
    fullNamePlaceholder: 'Su nombre completo',
    email: 'Correo electrónico *',
    company: 'Nombre de la empresa',
    companyPlaceholder: 'Nombre de su empresa',
    projectType: 'Tipo de proyecto',
    projectDetails: 'Detalles del proyecto *',
    projectDetailsPlaceholder: 'Cuéntenos sobre su proyecto, objetivos, calendario y cualquier requisito específico...',
    responseNote: 'Responderemos en 24 horas con los próximos pasos',
    invalidResponse: 'Respuesta no válida del servidor.',
    serverError: (status: number) => `Error del servidor (${status}). La API de contacto puede no estar disponible.`,
    failedToSend: 'No se pudo enviar',
    officesBadge: 'Nuestras oficinas',
    officesTitle: 'Encuéntrenos',
    officesTitleHighlight: 'en todo el mundo',
    officesDesc: 'Con oficinas en 4 continentes, estamos preparados para servirle con experiencia local y estándares globales.',
    headquarters: 'Sede central',
    mainAfrica: 'Oficina principal en África',
    viewMap: 'Ver en el mapa',
    faqsTitle: 'Preguntas frecuentes',
  },
}

type ContactPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function ContactPage({ params, searchParams }: ContactPageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const t = translations[language].contact
  const pageCopy = contactPageCopy[language]
  const cta = getCtaButtonText(language)
  const pageJsonLd = getContactPageJsonLd(locale)
  const contactMethods = contactMethodConfig.map((cfg, i) => ({ ...cfg, ...t.methods[i] }))
  const faqs = t.faqs
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorDetail, setErrorDetail] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorDetail(null)

    // Read from form directly so we get real values even if React state is
    // out of sync (e.g. browser autofill, password managers)
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: (fd.get('name') as string) || formData.name,
      email: (fd.get('email') as string) || formData.email,
      company: (fd.get('company') as string) || formData.company,
      message: (fd.get('message') as string) || formData.message,
      projectType: (fd.get('projectType') as string) || formData.projectType,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      let data: { error?: string; success?: boolean }
      try {
        data = await res.json()
      } catch {
        // API returned HTML (e.g. error page, 404) instead of JSON
        setErrorDetail(
          res.ok
            ? pageCopy.invalidResponse
            : pageCopy.serverError(res.status)
        )
        setSubmitStatus('error')
        return
      }

      if (!res.ok) {
        const msg = data.error || pageCopy.failedToSend
        setErrorDetail(msg)
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', projectType: '' })
    } catch (err) {
      setSubmitStatus('error')
      if (err instanceof Error && err.message !== pageCopy.failedToSend) {
        setErrorDetail(err.message)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t.heroBadge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              {t.heroTitle}{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">{t.heroSubtitle}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">10+ years</span> {pageCopy.years}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">98%</span> {pageCopy.satisfaction}
              </motion.div>
            </div>
          </motion.div>
        </PremiumHeroParallax>
      </section>

      {/* Contact Methods */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.howToReachUs}
            </h2>
            <p className="text-muted text-lg">
              {t.howToReachUsDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card p-8 text-center group hover:border-accent/50 ${
                  method.primary ? 'border-accent/30 glow-accent' : ''
                }`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{method.description}</p>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${method.primary ? 'btn-primary' : 'btn-secondary'} w-full`}
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.sendMessage}
            </h2>
            <p className="text-muted text-lg">
              {t.sendMessageDesc}
            </p>
          </div>
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card p-8 md:p-12"
            aria-label={pageCopy.formAria}
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {pageCopy.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-border-light rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder={pageCopy.fullNamePlaceholder}
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {pageCopy.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-border-light rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  aria-required="true"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {pageCopy.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-border-light rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder={pageCopy.companyPlaceholder}
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  {pageCopy.projectType}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-border-light rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                >
                  <option value="">{t.projectTypePlaceholder}</option>
                  {t.projectTypes.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {pageCopy.projectDetails}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-surface-light border border-border-light rounded-lg focus:border-accent/50 focus:outline-none transition-colors resize-none"
                placeholder={pageCopy.projectDetailsPlaceholder}
                aria-required="true"
              />
            </div>
            
            <div className="text-center">
              {submitStatus === 'success' && (
                <p className="mb-4 text-success font-medium">{t.formSuccess}</p>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 text-destructive">
                  <p className="font-medium">{t.formError}</p>
                  {errorDetail && (
                    <p className="mt-2 text-sm opacity-90">{errorDetail}</p>
                  )}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.formSending : t.sendMessage}
              </button>
              {submitStatus !== 'success' && (
                <p className="text-muted text-sm mt-4">
                  {pageCopy.responseNote}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </AnimatedSection>

      {/* Our Offices Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{pageCopy.officesBadge}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              {pageCopy.officesTitle} <span className="gradient-text">{pageCopy.officesTitleHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {pageCopy.officesDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeLocations.map((location, i) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card p-6 hover:border-accent/50 transition-all duration-300 ${
                  location.isPrimary
                    ? 'border-accent/30 relative overflow-hidden lg:col-start-2 lg:row-start-1'
                    : location.isPrimaryInRegion
                      ? 'border-success/30 relative overflow-hidden'
                      : ''
                }`}
              >
                {location.isPrimary && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-bl-lg">
                    {pageCopy.headquarters}
                  </div>
                )}
                {location.isPrimaryInRegion && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-success/90 text-background text-xs font-semibold rounded-bl-lg">
                    {pageCopy.mainAfrica}
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    location.isPrimary ? 'bg-accent/10' : 'bg-success/10'
                  }`}>
                    {location.region === 'North America' && '🇺🇸'}
                    {location.region === 'Africa' && location.id === 'kenya' && '🇰🇪'}
                    {location.region === 'Africa' && location.id === 'congo-drc' && '🇨🇩'}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg mb-1">
                      {location.city}, {location.country === 'United States' ? 'USA' : location.country === 'Democratic Republic of the Congo' ? 'DRC' : location.country === 'United Arab Emirates' ? 'UAE' : location.country}
                    </h3>
                    <p className="text-muted text-xs uppercase tracking-wider mb-3">{location.region}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-muted text-sm leading-relaxed">{formatFullAddress(location)}</p>
                      </div>
                      
                      {location.email && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${location.email}`} className="text-accent text-sm hover:underline truncate">
                            {location.email}
                          </a>
                        </div>
                      )}
                      
                      {location.phone && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${location.phone}`} className="text-accent text-sm hover:underline">
                            {location.phone}
                          </a>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-muted text-sm">{location.timezone}</p>
                      </div>
                    </div>
                    
                    <a
                      href={getGoogleMapsUrl(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                    >
                      <span>{pageCopy.viewMap}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageCopy.faqsTitle}
            </h2>
            <p className="text-muted text-lg">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedFaq === i}
                aria-label={expandedFaq === i ? `Collapse FAQ: ${faq.question}` : `Expand FAQ: ${faq.question}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setExpandedFaq(expandedFaq === i ? null : i)
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-semibold text-lg pr-4">{faq.question}</h3>
                  <span className="text-accent text-xl flex-shrink-0">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === i ? 'auto' : 0, opacity: expandedFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted mt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted text-lg mb-8">
            The best way to get answers is to talk directly. Book a free consultation and we'll address all your questions personally.
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {cta.bookConsultation}
          </a>
        </div>
      </AnimatedSection>
    </main>
  )
}