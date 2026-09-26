'use client'

import { createContext, useContext } from 'react'

const DemoReverseContext = createContext(false)

export function DemoReverseProvider({
  reverse,
  children,
}: {
  reverse: boolean
  children: React.ReactNode
}) {
  return <DemoReverseContext.Provider value={reverse}>{children}</DemoReverseContext.Provider>
}

export function useDemoReverse(): boolean {
  return useContext(DemoReverseContext)
}
