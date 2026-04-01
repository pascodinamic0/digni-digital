import AiEmployeeMobileAppBanner from '@/app/components/AiEmployeeMobileAppBanner'

/**
 * Mobile app promo renders after the full page <main> so it stays at the bottom
 * of the AI Employee page (last content block before the site footer).
 */
export default function AIReceptionistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AiEmployeeMobileAppBanner />
    </>
  )
}
