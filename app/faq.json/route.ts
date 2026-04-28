import { NextResponse } from 'next/server'
import { getFaqFeed } from '@/lib/agent-readiness'

export const revalidate = 86400

export function GET() {
  return NextResponse.json(getFaqFeed())
}
