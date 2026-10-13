import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domain eintragen, sobald die Seite online ist – dann greifen kanonische URLs & OG absolut.
// Vorschau auf GitHub Pages: der Workflow setzt SITE_URL und BASE_PATH (/Systembrett), lokal bleibt alles am Root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://vanessa-systembrett.de',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
});
