/**
 * Guided Learning (Early Access) Program Configuration
 * Payment and WhatsApp contact for $49 enrollment
 */

export const guidedLearningConfig = {
  /** Vodacom Mpesa number for $49 payment */
  vodacomPhoneNumber: '+243822378097',
  /** Airtel Money number for $49 payment */
  airtelPhoneNumber: '+243984469371',
  /** @deprecated Use vodacomPhoneNumber */
  paymentPhoneNumber: '+243822378097',
  /** WhatsApp click-to-chat URL (same as contact page) */
  whatsappUrl: 'https://wa.me/254702593518',
  /** Optional: Google Form URL - if set, shows a link on success screen for backup submission */
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeqLxEb7t89Ju-sTx7s4MQj8PYBX-otT40f-R3nNSZ61DGRMA/viewform' as string | null,
}
