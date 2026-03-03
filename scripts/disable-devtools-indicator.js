#!/usr/bin/env node
// Pre-configures Next.js DevTools to hide the indicator (may reduce params/searchParams enumeration warnings)
const fs = require('fs')
const path = require('path')
const configDir = path.join(process.cwd(), '.next', 'cache')
const configPath = path.join(configDir, 'next-devtools-config.json')
try {
  fs.mkdirSync(configDir, { recursive: true })
  fs.writeFileSync(configPath, JSON.stringify({ disableDevIndicator: true }))
} catch (_) {}