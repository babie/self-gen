import { defineConfig } from 'astro/config'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const selfConfig = require('./self.config.json')

// https://astro.build/config
export default defineConfig({ trailingSlash: 'never', ...selfConfig })
