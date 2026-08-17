// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { remarkLeestijd } from './src/lib/remark-leestijd.mjs';

export default defineConfig({
  site: 'https://bureauweerbaarenveilig.nl',
  integrations: [sitemap()],
  markdown: {
    // Berekent tijdens het bouwen de leestijd per artikel
    remarkPlugins: [remarkLeestijd],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
