// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { REDIRECTS } from './src/lib/redirects.ts';
import { remarkLeestijd } from './src/lib/remark-leestijd.mjs';

/*
  Waar draait de site?

  Standaard: het eigen domein, in de hoofdmap. Zo staat hij straks live.

  Op de voorbeeldomgeving van GitHub Pages draait de site in een submap
  (/bureau-weerbaar-en-veilig/). De workflow zet daarvoor twee variabelen klaar.
  Zodra het eigen domein is gekoppeld, haal je die twee regels uit
  .github/workflows/deploy.yml en staat alles weer op de hoofdmap.
*/
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://bureauweerbaarenveilig.nl';
const basePad = process.env.PUBLIC_BASE_PATH || undefined;

export default defineConfig({
  site: siteUrl,
  base: basePad,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      /*
        De doorverwijspagina's uit src/pages/[...pad].astro horen niet in de
        sitemap. Ze stonden er wel in: alle oude URL's van de vorige site, ruim
        honderdvijftig stuks. Een sitemap is een lijst met pagina's die je
        geïndexeerd wilt hebben, en een pagina die alleen doorverwijst is dat
        per definitie niet.
      */
      filter: (pagina) => {
        const pad = new URL(pagina).pathname.replace(basePad ?? '', '') || '/';
        return !(pad in REDIRECTS);
      },
    }),
  ],
  markdown: {
    // Berekent tijdens het bouwen de leestijd per artikel
    remarkPlugins: [remarkLeestijd],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
