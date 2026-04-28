import { NextResponse } from 'next/server'
import { getProductsFeed } from '@/lib/agent-readiness'

export const revalidate = 86400

export function GET() {
  return NextResponse.json(getProductsFeed())
}
