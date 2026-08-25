/**
 * Genereert robots.txt, met de sitemapregel op het domein waar de site
 * daadwerkelijk staat.
 *
 * ── Waarom dit geen statisch bestand meer is ──
 *
 * In public/robots.txt stond de sitemapregel hard ingetypt op
 * bureauweerbaarenveilig.nl. Op de voorbeeldpublicatie
 * (youriwoesthuis.github.io/bureau-weerbaar-en-veilig/) verwees robots.txt dus
 * naar een sitemap op een ander domein — een domein dat op dit moment nog een
 * "we zijn bijna live"-pagina toont en die sitemap niet serveert.
 *
 * Gevolg: elke crawler die de voorbeeldpublicatie bezoekt, krijgt een
 * sitemapadres dat niets oplevert, terwijl de échte sitemap op dezelfde host
 * gewoon klaarstaat. Een sitemapregel die naar een ander domein wijst wordt
 * bovendien genegeerd — Google accepteert alleen sitemaps op de host waar het
 * robots.txt-bestand zelf staat.
 *
 * Nu komt het adres uit dezelfde bron als alle andere URL's op de site, dus
 * verhuist het mee zodra bureauweerbaarenveilig.nl gekoppeld wordt en de twee
 * regels uit .github/workflows/deploy.yml verdwijnen.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const oorsprong = site?.href.replace(/\/$/, '') ?? 'https://bureauweerbaarenveilig.nl';
  const submap = import.meta.env.BASE_URL.replace(/\/$/, '');

  /*
    Zolang de site op de voorbeeldpublicatie staat, wordt hij niet geïndexeerd.
    Anders bouwt github.io een geschiedenis op voor inhoud die straks op het
    eigen domein hoort te staan, en start het echte domein zijn leven als
    duplicaat van een adres dat niemand zou moeten kennen.

    De vlag hangt aan het adres zelf, niet aan een losse omgevingsvariabele:
    zo kan er geen build ontstaan waarin de een is bijgewerkt en de ander niet.
  */
  const isVoorbeeld = oorsprong.includes('github.io');

  const regels = isVoorbeeld
    ? [
        '# Voorbeeldpublicatie van Bureau Weerbaar en Veilig.',
        '# De echte site komt op https://bureauweerbaarenveilig.nl te staan;',
        '# tot die tijd hoort deze kopie niet in de zoekresultaten.',
        'User-agent: *',
        'Disallow: /',
      ]
    : [
        'User-agent: *',
        'Allow: /',
        '',
        '# AI-crawlers zijn expliciet welkom: de inhoud van Bureau Weerbaar en Veilig mag',
        '# gebruikt worden om vragen over agressietraining te beantwoorden.',
        'User-agent: GPTBot',
        'Allow: /',
        '',
        'User-agent: ClaudeBot',
        'Allow: /',
        '',
        'User-agent: PerplexityBot',
        'Allow: /',
        '',
        'User-agent: Google-Extended',
        'Allow: /',
        '',
        `Sitemap: ${oorsprong}${submap}/sitemap-index.xml`,
      ];

  return new Response(regels.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
