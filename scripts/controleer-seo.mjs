/**
 * Doorlichting van de gebouwde site op vindbaarheid.
 *
 * Loopt over alles in dist/ en controleert wat een zoekmachine en een
 * AI-antwoordsysteem tegenkomen: titels, omschrijvingen, koppen, canonicals,
 * gestructureerde data en de omvang van elke pagina.
 *
 * Draaien met:  node scripts/controleer-seo.mjs
 * Draait na `npm run build`, want hij leest de opgebouwde HTML.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const paginas = [];
(function loop(map) {
  for (const item of readdirSync(map, { withFileTypes: true })) {
    const pad = join(map, item.name);
    if (item.isDirectory()) loop(pad);
    else if (item.name === 'index.html') paginas.push(pad);
  }
})('dist');

const pak = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};

const alles = paginas.map((pad) => {
  const html = readFileSync(pad, 'utf8');
  const url = '/' + relative('dist', pad).split(/[\\/]/).slice(0, -1).join('/') + '/';
  return {
    url: url === '//' ? '/' : url,
    doorverwijzing: html.includes('http-equiv="refresh"'),
    titel: pak(html, /<title>([^<]*)<\/title>/) ?? '',
    omschrijving: pak(html, /<meta name="description" content="([^"]*)"/) ?? '',
    canonical: pak(html, /<link rel="canonical" href="([^"]*)"/),
    h1: (html.match(/<h1[\s>]/g) || []).length,
    h2: (html.match(/<h2[\s>]/g) || []).length,
    schema: [...new Set([...html.matchAll(/"@type":"([^"]+)"/g)].map((m) => m[1]))].sort(),
    interneLinks: [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))],
    bytes: Buffer.byteLength(html),
    ogAfbeelding: /property="og:image"/.test(html),
  };
});

const echt = alles.filter((p) => !p.doorverwijzing);
const regel = (t) => console.log('\n' + t + '\n' + '─'.repeat(t.length));

console.log(`Pagina's: ${alles.length} totaal, ${echt.length} met inhoud, ${alles.length - echt.length} doorverwijzingen`);

regel('TITELS');
const titelTeLang = echt.filter((p) => p.titel.length > 60);
console.log(`te lang (>60 tekens): ${titelTeLang.length}`);
titelTeLang.slice(0, 6).forEach((p) => console.log(`   ${p.titel.length}  ${p.titel}`));
const titelTelling = {};
echt.forEach((p) => (titelTelling[p.titel] = (titelTelling[p.titel] || 0) + 1));
const titelDubbel = Object.entries(titelTelling).filter(([, n]) => n > 1);
console.log(`dubbel: ${titelDubbel.length}`);
titelDubbel.slice(0, 6).forEach(([t, n]) => console.log(`   ${n}x  ${t}`));

regel('OMSCHRIJVINGEN');
console.log(`te lang (>158): ${echt.filter((p) => p.omschrijving.length > 158).length}`);
console.log(`te kort (<70):  ${echt.filter((p) => p.omschrijving.length < 70).length}`);
const omsTelling = {};
echt.forEach((p) => (omsTelling[p.omschrijving] = (omsTelling[p.omschrijving] || 0) + 1));
const omsDubbel = Object.entries(omsTelling).filter(([, n]) => n > 1);
console.log(`dubbel: ${omsDubbel.length}`);
omsDubbel.slice(0, 6).forEach(([t, n]) => console.log(`   ${n}x  ${t.slice(0, 80)}…`));

regel('KOPPEN EN CANONICAL');
console.log(`zonder h1: ${echt.filter((p) => p.h1 === 0).length}`);
console.log(`meer dan een h1: ${echt.filter((p) => p.h1 > 1).length}`);
console.log(`zonder h2: ${echt.filter((p) => p.h2 === 0).length}`);
console.log(`canonical ontbreekt: ${echt.filter((p) => !p.canonical).length}`);
console.log(`og:image ontbreekt: ${echt.filter((p) => !p.ogAfbeelding).length}`);

regel('GESTRUCTUREERDE DATA');
const schemaTelling = {};
echt.forEach((p) => {
  const sleutel = p.schema.join(', ') || '(geen)';
  schemaTelling[sleutel] = (schemaTelling[sleutel] || 0) + 1;
});
Object.entries(schemaTelling)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, n]) => console.log(`${String(n).padStart(4)}  ${k}`));

regel('INTERNE LINKS');
const inkomend = {};
echt.forEach((p) => p.url && (inkomend[p.url] = 0));
echt.forEach((p) =>
  p.interneLinks.forEach((l) => {
    const schoon = l.replace(/^\/bureau-weerbaar-en-veilig/, '') || '/';
    if (schoon in inkomend) inkomend[schoon]++;
  })
);
const wezen = Object.entries(inkomend).filter(([, n]) => n === 0);
console.log(`pagina's zonder enkele interne link ernaartoe: ${wezen.length}`);
wezen.slice(0, 12).forEach(([u]) => console.log(`   ${u}`));
const minst = Object.entries(inkomend)
  .filter(([, n]) => n > 0)
  .sort((a, b) => a[1] - b[1])
  .slice(0, 6);
console.log('minst gelinkt:');
minst.forEach(([u, n]) => console.log(`   ${String(n).padStart(3)}x  ${u}`));

regel('OMVANG');
const gemiddeld = echt.reduce((a, p) => a + p.bytes, 0) / echt.length / 1024;
console.log(`gemiddeld: ${gemiddeld.toFixed(1)} kB html`);
echt
  .slice()
  .sort((a, b) => b.bytes - a.bytes)
  .slice(0, 5)
  .forEach((p) => console.log(`   ${(p.bytes / 1024).toFixed(0).padStart(4)} kB  ${p.url}`));
