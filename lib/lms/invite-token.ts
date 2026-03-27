import { createHash, randomBytes, timingSafeEqual } from 'crypto'

const TOKEN_BYTES = 32

export function generateInviteSecret(): { plain: string; hash: string } {
  const plain = randomBytes(TOKEN_BYTES).toString('base64url')
  const hash = hashInviteToken(plain)
  return { plain, hash }
}

export function hashInviteToken(plain: string): string {
  return createHash('sha256').update(plain, 'utf8').digest('hex')
}

export function timingSafeEqualHex(a: string, b: string): boolean {
  try {
    const ba = Buffer.from(a, 'hex')
    const bb = Buffer.from(b, 'hex')
    if (ba.length !== bb.length) return false
    return timingSafeEqual(ba, bb)
  } catch {
    return false
  }
}
