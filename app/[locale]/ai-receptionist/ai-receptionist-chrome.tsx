'use client'

import { usePathname } from 'next/navigation'
import AiEmployeeMobileAppBanner from '@/app/components/AiEmployeeMobileAppBanner'

export function AIReceptionistChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideMobileBanner = pathname?.includes('/assessment')

  return (
    <>
      {children}
      {!hideMobileBanner && <AiEmployeeMobileAppBanner />}
    </>
  )
}
