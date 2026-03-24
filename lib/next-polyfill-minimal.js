/* eslint-disable no-extend-native */
/**
 * Replaces Next.js `next/dist/build/polyfills/polyfill-module` for production.
 *
 * The upstream module ships ~14 KiB of polyfills (trimStart, flat, fromEntries,
 * Array.at, Object.hasOwn, etc.) that are already native in Next.js supported
 * browsers (Chrome 111+, Edge 111+, Firefox 111+, Safari 16.4+).
 *
 * `URL.canParse` is the only one still missing on parts of that support matrix
 * (e.g. Chrome 111–119, Firefox 111–114, Safari 16.x). Keep that polyfill only.
 *
 * @see https://github.com/vercel/next.js/blob/canary/packages/next-polyfill-module/src/index.js
 */
if (!('canParse' in URL)) {
  URL.canParse = function canParse(url, base) {
    try {
      return !!new URL(url, base)
    } catch {
      return false
    }
  }
}
