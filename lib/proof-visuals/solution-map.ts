/** Maps page-specific IDs to proof visual manifest sectionIds */
export const SOLUTION_PROOF_SECTION: Record<string, string> = {
  'lead-generation': 'lead-gen',
  'operational-efficiency': 'ops-efficiency',
  'customer-experience': 'customer-experience',
}

export function getSolutionProofSectionId(solutionId: string): string | undefined {
  return SOLUTION_PROOF_SECTION[solutionId]
}
