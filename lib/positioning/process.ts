import { INSTALLER_PROCESS_STEPS, type InstallerProcessStepId } from './glossary'

export { INSTALLER_PROCESS_STEPS }
export type { InstallerProcessStepId }

/** Shared installer loop — Identify → Design → Build → Connect → Deploy → Optimize. */
export const DIGNI_INSTALLER_PROCESS: Array<{
  id: InstallerProcessStepId
  number: string
}> = [
  { id: 'identify', number: '01' },
  { id: 'design', number: '02' },
  { id: 'build', number: '03' },
  { id: 'connect', number: '04' },
  { id: 'deploy', number: '05' },
  { id: 'optimize', number: '06' },
]
