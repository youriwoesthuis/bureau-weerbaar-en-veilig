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

/*
  Pagina's die wel bestaan maar niet in de sitemap horen, omdat ze op noindex
  staan (zie de prop `nietIndexeren` in src/layouts/Base.astro). Een sitemap is
  een lijst met pagina's die je geïndexeerd wilt hebben; daar een pagina in
  zetten die tegelijk zegt "neem mij niet op" is een tegenstrijdig signaal en
  levert een melding op in Search Console.

  Voeg hier het pad toe zodra je ergens `nietIndexeren` gebruikt.
*/
const GEEN_SITEMAP = new Set(['/contact/bedankt/']);

/**
 * Schrijft na het bouwen een `_redirects`-bestand: het formaat dat Netlify en
 * Cloudflare Pages lezen om échte 301's te sturen.
 *
 * GitHub Pages kan geen HTTP-headers zetten. Daar worden de oude URL's daarom
 * afgehandeld met een meta-refresh plus canonical (zie src/pages/[...pad].astro).
 * Dat werkt, maar het is trager en onbetrouwbaarder: een crawler moet de pagina
 * eerst renderen voordat hij de verhuizing ziet.
 *
 * Op GitHub Pages doet dit bestand niets — het wordt daar niet gelezen. Verhuist
 * de site naar Netlify of Cloudflare Pages, dan werken alle doorverwijzingen
 * meteen als echte 301, zonder dat er iets hoeft te worden overgetypt. Daarna
 * kan [...pad].astro weg.
 */
function schrijfRedirects() {
  return {
    name: 'redirects-bestand',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const { writeFileSync } = await import('node:fs');
        const { fileURLToPath } = await import('node:url');
        const regels = [
          '# Automatisch gegenereerd uit src/lib/redirects.ts — niet met de hand aanpassen.',
          '# Gelezen door Netlify en Cloudflare Pages. GitHub Pages negeert dit bestand.',
          '',
          ...Object.entries(REDIRECTS).map(([oud, nieuw]) => `${oud}  ${nieuw}  301!`),
          '',
        ];
        writeFileSync(fileURLToPath(new URL('_redirects', dir)), regels.join('\n'));
        logger.info(`_redirects geschreven: ${Object.keys(REDIRECTS).length} doorverwijzingen`);
      },
    },
  };
}

export default defineConfig({
  site: siteUrl,
  base: basePad,
  trailingSlash: 'always',
  integrations: [
    schrijfRedirects(),
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
        return !(pad in REDIRECTS) && !GEEN_SITEMAP.has(pad);
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
