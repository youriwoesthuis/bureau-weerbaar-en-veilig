/**
 * Kwaliteitscontrole op de gebouwde site (draai eerst `npm run build`).
 *
 * Controleert:
 *  1. Bestaat elk redirect-doel echt?
 *  2. Wijst elke interne link in de HTML naar een bestaande pagina?
 *  3. Heeft elke pagina precies één <h1>, een title en een meta description?
 *  4. Zijn title en description binnen de SEO-lengtes?
 *
 * Gebruik (in de projectmap):  node scripts/controleer.mjs
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const fouten = [];
const waarschuwingen = [];

/* Alle gebouwde HTML-pagina's verzamelen */
function verzamel(map, gevonden = []) {
  for (const naam of readdirSync(map)) {
    const pad = join(map, naam);
    if (statSync(pad).isDirectory()) verzamel(pad, gevonden);
    else if (naam.endsWith('.html')) gevonden.push(pad);
  }
  return gevonden;
}

const paginas = verzamel(DIST);

/** Bestaat er een gebouwde pagina op dit URL-pad? */
function bestaat(pad) {
  const schoon = pad.split('#')[0].split('?')[0];
  if (schoon === '/' || schoon === '') return true;
  const zonderSlash = schoon.replace(/^\/|\/$/g, '');
  return (
    existsSync(join(DIST, zonderSlash, 'index.html')) ||
    existsSync(join(DIST, zonderSlash)) ||
    existsSync(join(DIST, `${zonderSlash}.html`))
  );
}

/* 1. Redirect-doelen. Node kan geen .ts inladen, dus lezen we het bestand als tekst. */
const redirectBron = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'lib', 'redirects.ts'),
  'utf8'
);
const paren = [...redirectBron.matchAll(/'(\/[^']+)':\s*\n?\s*'(\/[^']*)'/g)];
if (paren.length === 0) fouten.push('Geen redirects gevonden in redirects.ts: controleer het patroon.');
for (const [, oud, nieuw] of paren) {
  if (!bestaat(nieuw)) fouten.push(`Redirect-doel bestaat niet: ${oud} -> ${nieuw}`);
}
console.log(`Redirects gecontroleerd: ${paren.length}`);

/* 2, 3, 4. Per pagina */
for (const bestand of paginas) {
  const html = readFileSync(bestand, 'utf8');
  const url = '/' + relative(DIST, bestand).replace(/\\/g, '/').replace(/index\.html$/, '');

  // Doorverwijspagina's slaan we over: die hebben bewust geen h1 of description
  if (html.includes('http-equiv="refresh"')) continue;

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fouten.push(`${url}: ${h1s.length} h1-koppen (moet er precies 1 zijn)`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  if (!title) fouten.push(`${url}: geen <title>`);
  else if (title.length > 70) waarschuwingen.push(`${url}: title ${title.length} tekens (streef < 60)`);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (!desc) fouten.push(`${url}: geen meta description`);
  else if (desc.length > 165) waarschuwingen.push(`${url}: description ${desc.length} tekens (streef < 155)`);

  // Interne links
  for (const match of html.matchAll(/href="(\/[^"#][^"]*)"/g)) {
    const doel = match[1];
    if (doel.startsWith('//')) continue;
    if (/\.(xml|txt|jpg|png|webp|svg|ico|css|js|woff2?)$/i.test(doel)) continue;
    if (!bestaat(doel)) fouten.push(`${url}: link naar niet-bestaande pagina ${doel}`);
  }
}

/* Rapport */
const uniek = (a) => [...new Set(a)];
const f = uniek(fouten);
const w = uniek(waarschuwingen);

console.log(`Gecontroleerd: ${paginas.length} pagina's\n`);

if (f.length === 0) console.log('Geen fouten gevonden.');
else {
  console.log(`FOUTEN (${f.length}):`);
  f.slice(0, 40).forEach((r) => console.log(`  - ${r}`));
  if (f.length > 40) console.log(`  ... en nog ${f.length - 40}`);
}

if (w.length > 0) {
  console.log(`\nWAARSCHUWINGEN (${w.length}):`);
  w.slice(0, 20).forEach((r) => console.log(`  - ${r}`));
  if (w.length > 20) console.log(`  ... en nog ${w.length - 20}`);
}

process.exit(f.length > 0 ? 1 : 0);
