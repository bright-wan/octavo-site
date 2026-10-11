import { defineConfig } from 'astro/config'

// GitHub Pages project site: https://bright-wan.github.io/octavo-site/.
// For a custom domain later, set SITE_ORIGIN=https://<domain> and SITE_BASE=/
// in the deploy workflow and add public/CNAME.
export default defineConfig({
  site: process.env.SITE_ORIGIN ?? 'https://bright-wan.github.io',
  base: process.env.SITE_BASE ?? '/octavo-site',
})
