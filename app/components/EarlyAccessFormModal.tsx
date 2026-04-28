'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage, useLocale } from '@/app/context/LocaleContext'
import type { Language } from '@/app/i18n/translations'
import { guidedLearningConfig } from '@/app/config/guided-learning.config'

interface EarlyAccessFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const FORM_TRANSLATIONS: Record<Language, {
  title: string
  firstName: string
  lastName: string
  email: string
  whatsapp: string
  profession: string
  whyJoin: string
  commitReady: string
  commitReadyYes: string
  commitReadyNo: string
  paidProgram: string
  paidProgramYes: string
  paidProgramNo: string
  submit: string
  submitting: string
  success: string
  successMessage: string
  error: string
  close: string
  // Payment flow
  nextSteps: string
  step1: string
  step1Airtel: string
  step1Vodacom: string
  step2: string
  step3: string
  step4: string
  sendToWhatsApp: string
  whatsappMessage: string
  spotFullyBookedNote: string
}> = {
  en: {
    title: 'Book Your Spot. Only 25 Spaces Left',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    whatsapp: 'WhatsApp number',
    profession: 'Profession',
    whyJoin: 'Why do you want to join?',
    commitReady: 'Are you ready to commit 3 days/week for 1 month?',
    commitReadyYes: 'Yes',
    commitReadyNo: 'No',
    paidProgram: 'I understand and agree this is a paid program ($49/month after completion) to remain part of the community and get access to info faster than anyone else.',
    paidProgramYes: 'Yes, I agree',
    paidProgramNo: 'No',
    submit: 'Submit',
    submitting: 'Submitting...',
    success: 'Success!',
    successMessage: 'Complete the steps below to secure your spot.',
    error: 'Something went wrong. Please try again.',
    close: 'Cancel',
    nextSteps: 'Next steps',
    step1: 'Send $49 to our Vodacom Mpesa number.',
    step1Airtel: 'Send $49 to our Airtel Money number.',
    step1Vodacom: 'Send $49 to our Vodacom Mpesa number.',
    step2: 'Take a screenshot of your payment',
    step3: 'Click the button below to open WhatsApp and send us the screenshot',
    step4: 'We\'ll add you to the community group immediately',
    sendToWhatsApp: 'Send screenshot on WhatsApp',
    whatsappMessage: 'Hi! I just completed the Guided Learning Early Access form. I\'ve sent $49. Please find my payment screenshot attached. I\'m ready to join the community!',
    spotFullyBookedNote: 'Your spot is fully booked only after you send the payment screenshot to the WhatsApp above.',
  },
  fr: {
    title: 'Réservez votre place. Il ne reste que 25 places.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'E-mail',
    whatsapp: 'Numéro WhatsApp',
    profession: 'Profession',
    whyJoin: 'Pourquoi voulez-vous rejoindre ?',
    commitReady: 'Êtes-vous prêt à vous engager 3 jours/semaine pendant 1 mois ?',
    commitReadyYes: 'Oui',
    commitReadyNo: 'Non',
    paidProgram: 'Je comprends et accepte qu\'il s\'agit d\'un programme payant (49 $/mois après la fin) pour rester dans la communauté et accéder aux infos plus rapidement que quiconque.',
    paidProgramYes: 'Oui, j\'accepte',
    paidProgramNo: 'Non',
    submit: 'Envoyer',
    submitting: 'Envoi...',
    success: 'Succès !',
    successMessage: 'Complétez les étapes ci-dessous pour sécuriser votre place.',
    error: 'Une erreur s\'est produite. Veuillez réessayer.',
    close: 'Annuler',
    nextSteps: 'Prochaines étapes',
    step1: 'Envoyez 49 $ à notre numéro Vodacom Mpesa.',
    step1Airtel: 'Envoyez 49 $ à notre numéro Airtel Money.',
    step1Vodacom: 'Envoyez 49 $ à notre numéro Vodacom Mpesa.',
    step2: 'Prenez une capture d\'écran de votre paiement',
    step3: 'Cliquez sur le bouton ci-dessous pour ouvrir WhatsApp et nous envoyer la capture',
    step4: 'Nous vous ajouterons au groupe communautaire immédiatement',
    sendToWhatsApp: 'Envoyer la capture sur WhatsApp',
    whatsappMessage: 'Bonjour ! J\'ai complété le formulaire Early Access Guided Learning. J\'ai envoyé 49 $. Veuillez trouver ma capture d\'écran du paiement en pièce jointe. Je suis prêt à rejoindre la communauté !',
    spotFullyBookedNote: 'Votre place n\'est définitivement réservée qu\'après avoir envoyé la capture du paiement au WhatsApp ci-dessus.',
  },
  ar: {
    title: 'احجز مكانك. 25 مكاناً فقط متبقي',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    whatsapp: 'رقم واتساب',
    profession: 'المهنة',
    whyJoin: 'لماذا تريد الانضمام؟',
    commitReady: 'هل أنت مستعد للالتزام 3 أيام/أسبوع لمدة شهر؟',
    commitReadyYes: 'نعم',
    commitReadyNo: 'لا',
    paidProgram: 'أفهم وأوافق على أن هذا برنامج مدفوع (25 دولاراً/شهر بعد الإكمال) للبقاء في المجتمع والحصول على المعلومات أسرع من أي شخص آخر.',
    paidProgramYes: 'نعم، أوافق',
    paidProgramNo: 'لا',
    submit: 'إرسال',
    submitting: 'جاري الإرسال...',
    success: 'تم بنجاح!',
    successMessage: 'أكمل الخطوات أدناه لتأمين مكانك.',
    error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    close: 'إلغاء',
    nextSteps: 'الخطوات التالية',
    step1: 'أرسل 49 دولاراً إلى رقم Vodacom Mpesa.',
    step1Airtel: 'أرسل 49 دولاراً إلى رقم Airtel Money.',
    step1Vodacom: 'أرسل 49 دولاراً إلى رقم Vodacom Mpesa.',
    step2: 'التقط لقطة شاشة للدفع',
    step3: 'انقر على الزر أدناه لفتح واتساب وإرسال اللقطة إلينا',
    step4: 'سنضيفك إلى مجموعة المجتمع فوراً',
    sendToWhatsApp: 'إرسال اللقطة على واتساب',
    whatsappMessage: 'مرحباً! أكملت نموذج الوصول المبكر للتعلم الموجه. أرسلت 25 دولاراً. يرجى العثور على لقطة شاشة الدفع المرفقة. أنا مستعد للانضمام للمجتمع!',
    spotFullyBookedNote: 'مكانك محجوز بالكامل فقط بعد إرسال لقطة شاشة الدفع إلى واتساب أعلاه.',
  },
  de: {
    title: 'Sichern Sie sich Ihren Platz. Nur noch 25 Plätze',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    whatsapp: 'WhatsApp-Nummer',
    profession: 'Beruf',
    whyJoin: 'Warum möchten Sie teilnehmen?',
    commitReady: 'Sind Sie bereit, 3 Tage/Woche für 1 Monat zu investieren?',
    commitReadyYes: 'Ja',
    commitReadyNo: 'Nein',
    paidProgram: 'Ich verstehe und akzeptiere, dass dies ein kostenpflichtiges Programm ist (25 $/Monat nach Abschluss), um Teil der Community zu bleiben und schneller Zugang zu Informationen zu erhalten.',
    paidProgramYes: 'Ja, ich stimme zu',
    paidProgramNo: 'Nein',
    submit: 'Absenden',
    submitting: 'Wird gesendet...',
    success: 'Erfolg!',
    successMessage: 'Schließen Sie die folgenden Schritte ab, um Ihren Platz zu sichern.',
    error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    close: 'Abbrechen',
    nextSteps: 'Nächste Schritte',
    step1: 'Senden Sie 49 $ an unsere Vodacom Mpesa-Nummer.',
    step1Airtel: 'Senden Sie 49 $ an unsere Airtel Money-Nummer.',
    step1Vodacom: 'Senden Sie 49 $ an unsere Vodacom Mpesa-Nummer.',
    step2: 'Machen Sie einen Screenshot Ihrer Zahlung',
    step3: 'Klicken Sie auf die Schaltfläche unten, um WhatsApp zu öffnen und uns den Screenshot zu senden',
    step4: 'Wir fügen Sie sofort zur Community-Gruppe hinzu',
    sendToWhatsApp: 'Screenshot auf WhatsApp senden',
    whatsappMessage: 'Hallo! Ich habe das Guided Learning Early Access Formular ausgefüllt. Ich habe 25 $ gesendet. Bitte finden Sie meinen Zahlungs-Screenshot im Anhang. Ich bin bereit, der Community beizutreten!',
    spotFullyBookedNote: 'Ihr Platz ist erst nach dem Senden des Zahlungs-Screenshots an das obige WhatsApp vollständig gebucht.',
  },
  es: {
    title: 'Reserva tu lugar. Solo quedan 25 plazas',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    whatsapp: 'Número de WhatsApp',
    profession: 'Profesión',
    whyJoin: '¿Por qué quieres unirte?',
    commitReady: '¿Estás dispuesto a comprometerte 3 días/semana durante 1 mes?',
    commitReadyYes: 'Sí',
    commitReadyNo: 'No',
    paidProgram: 'Entiendo y acepto que es un programa de pago ($49/mes tras completarlo) para permanecer en la comunidad y acceder a la información más rápido que nadie.',
    paidProgramYes: 'Sí, acepto',
    paidProgramNo: 'No',
    submit: 'Enviar',
    submitting: 'Enviando...',
    success: '¡Éxito!',
    successMessage: 'Completa los pasos a continuación para asegurar tu plaza.',
    error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
    close: 'Cancelar',
    nextSteps: 'Próximos pasos',
    step1: 'Envía $49 a nuestro número Vodacom Mpesa.',
    step1Airtel: 'Envía $49 a nuestro número Airtel Money.',
    step1Vodacom: 'Envía $49 a nuestro número Vodacom Mpesa.',
    step2: 'Toma una captura de pantalla de tu pago',
    step3: 'Haz clic en el botón de abajo para abrir WhatsApp y enviarnos la captura',
    step4: 'Te añadiremos al grupo de la comunidad inmediatamente',
    sendToWhatsApp: 'Enviar captura por WhatsApp',
    whatsappMessage: '¡Hola! Acabo de completar el formulario de Early Access de Guided Learning. He enviado $49. Por favor, encuentra mi captura de pantalla del pago adjunta. ¡Estoy listo para unirme a la comunidad!',
    spotFullyBookedNote: 'Tu plaza queda totalmente reservada solo después de enviar la captura del pago al WhatsApp de arriba.',
  },
}

export default function EarlyAccessFormModal({ isOpen, onClose }: EarlyAccessFormModalProps) {
  const language = useLanguage()
  const regionalLocale = useLocale()
  const t = FORM_TRANSLATIONS[language] || FORM_TRANSLATIONS.en
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'airtel' | 'vodacom'>('vodacom')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    profession: '',
    whyJoin: '',
    commitReady: '' as '' | 'yes' | 'no',
    paidProgram: '' as '' | 'yes' | 'no',
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        whatsapp: '',
        profession: '',
        whyJoin: '',
        commitReady: '',
        paidProgram: '',
      })
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    if (!formData.commitReady || !formData.paidProgram) return

    setStatus('submitting')
    setErrorMsg(null)

    try {
      const res = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          profession: formData.profession,
          whyJoin: formData.whyJoin,
          commitReady: formData.commitReady,
          paidProgram: formData.paidProgram,
          locale: regionalLocale,
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || t.error)
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg(t.error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[image:var(--overlay-scrim)] backdrop-blur-sm bg-cover"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-surface border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-text">
                  {t.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
                aria-label={t.close}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {status === 'success' ? (
              <div className="py-4">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-text text-center mb-2">{t.success}</h3>
                <p className="text-muted text-sm text-center mb-6">{t.successMessage}</p>

                <h4 className="font-display font-semibold text-sm text-text mb-3">{t.nextSteps}</h4>
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('airtel')}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors border ${
                      paymentMethod === 'airtel'
                        ? 'bg-accent text-white border-accent'
                        : 'bg-background border-border text-muted hover:border-accent/50 hover:text-text'
                    }`}
                  >
                    Airtel Money
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('vodacom')}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors border ${
                      paymentMethod === 'vodacom'
                        ? 'bg-accent text-white border-accent'
                        : 'bg-background border-border text-muted hover:border-accent/50 hover:text-text'
                    }`}
                  >
                    Vodacom Mpesa
                  </button>
                </div>
                <ol className="space-y-3 mb-6 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">1</span>
                    <span>
                      <strong className="text-text">
                        {paymentMethod === 'airtel' ? t.step1Airtel : t.step1Vodacom}
                      </strong>{' '}
                      <a
                        href={`tel:${(paymentMethod === 'airtel' ? guidedLearningConfig.airtelPhoneNumber : guidedLearningConfig.vodacomPhoneNumber).replace(/\s/g, '')}`}
                        className="text-accent hover:underline font-mono"
                      >
                        {paymentMethod === 'airtel' ? guidedLearningConfig.airtelPhoneNumber : guidedLearningConfig.vodacomPhoneNumber}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">2</span>
                    <span>{t.step2}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">3</span>
                    <span>{t.step3}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">4</span>
                    <span>{t.step4}</span>
                  </li>
                </ol>

                <p className="text-sm text-muted/90 bg-muted/20 rounded-lg px-4 py-3 mb-6 border border-border/50">
                  {t.spotFullyBookedNote}
                </p>

                <a
                  href={`${guidedLearningConfig.whatsappUrl}?text=${encodeURIComponent(t.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-success hover:opacity-90 text-on-accent font-semibold text-sm transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.sendToWhatsApp}
                </a>

                <button
                  onClick={onClose}
                  className="w-full mt-4 px-6 py-2.5 rounded-lg border border-border hover:border-accent hover:text-accent text-sm font-medium transition-colors"
                >
                  {t.close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text mb-1">{t.firstName} *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text mb-1">{t.lastName} *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">{t.email} *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-text mb-1">{t.whatsapp} *</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="+1234567890"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-text mb-1">{t.profession} *</label>
                  <input
                    id="profession"
                    name="profession"
                    type="text"
                    required
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="whyJoin" className="block text-sm font-medium text-text mb-1">{t.whyJoin} *</label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    required
                    rows={3}
                    value={formData.whyJoin}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">{t.commitReady} *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="commitReady"
                        value="yes"
                        checked={formData.commitReady === 'yes'}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent border-border focus:ring-accent"
                      />
                      <span className="text-sm text-text">{t.commitReadyYes}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="commitReady"
                        value="no"
                        checked={formData.commitReady === 'no'}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent border-border focus:ring-accent"
                      />
                      <span className="text-sm text-text">{t.commitReadyNo}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">{t.paidProgram} *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paidProgram"
                        value="yes"
                        checked={formData.paidProgram === 'yes'}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent border-border focus:ring-accent"
                      />
                      <span className="text-sm text-text">{t.paidProgramYes}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paidProgram"
                        value="no"
                        checked={formData.paidProgram === 'no'}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent border-border focus:ring-accent"
                      />
                      <span className="text-sm text-text">{t.paidProgramNo}</span>
                    </label>
                  </div>
                </div>

                {status === 'error' && errorMsg && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-3 rounded-lg font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
