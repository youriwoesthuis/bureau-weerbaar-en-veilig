/**
 * Controleert of elke pagina opent met een direct antwoord.
 *
 * Dat is de kerneis uit CLAUDE.md hoofdstuk 8: een AI-antwoordsysteem citeert
 * wat er vlak na de H1 staat. Staat daar marketingtaal, dan is dat wat er
 * geciteerd wordt — of er wordt niets geciteerd.
 *
 * Getoetst wordt de eerste alinea na de H1, op drie dingen:
 *
 *   1. Lengte. Onder de honderd tekens is het een kreet, geen antwoord. Boven
 *      de vierhonderd valt het buiten wat een systeem als citaat overneemt.
 *   2. De organisatie voluit. "Wij bieden" is losgeknipt van de pagina
 *      betekenisloos; "Bureau Weerbaar en Veilig biedt" niet. Dit geldt niet
 *      voor de sector- en beroepsgroepteksten, die de lezer al in een context
 *      hebben en waar de naam in elke alinea herhalen onnatuurlijk leest.
 *   3. Holle woorden. Een superlatief is niet controleerbaar en dus niet
 *      citeerbaar.
 *
 * Draaien met:  node scripts/controleer-geo.mjs   (na npm run build)
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const MIN = 100;
const MAX = 400;

/* Woorden die een bewering doen die niemand kan natrekken. */
const HOL = [
  'toonaangevend',
  'marktleider',
  'de beste',
  'ongeëvenaard',
  'uniek in nederland',
  'jarenlange ervaring',
  'al jaren',
  'vooraanstaand',
  'hét adres',
];

const ENTITEITEN = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const ontcijfer = (t) =>
  t
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (heel, naam) => ENTITEITEN[naam.toLowerCase()] ?? heel);

const naarTekst = (html) =>
  ontcijfer(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

const paginas = [];
(function loop(map) {
  for (const item of readdirSync(map, { withFileTypes: true })) {
    const pad = join(map, item.name);
    if (item.isDirectory()) loop(pad);
    else if (item.name === 'index.html') paginas.push(pad);
  }
})('dist');

const bevindingen = [];
let gecontroleerd = 0;

for (const pad of paginas) {
  const html = readFileSync(pad, 'utf8');
  if (html.includes('http-equiv="refresh"') || html.includes('content="noindex')) continue;

  const url = '/' + relative('dist', pad).split(/[\\/]/).slice(0, -1).join('/') + '/';
  const schoon = url === '//' ? '/' : url;

  /* Alles na de eerste H1; daar hoort het antwoord te beginnen. */
  const naH1 = html.split(/<\/h1>/)[1];
  if (!naH1) {
    bevindingen.push({ url: schoon, wat: 'geen h1' });
    continue;
  }

  const alinea = naH1.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  if (!alinea) {
    bevindingen.push({ url: schoon, wat: 'geen alinea na de h1' });
    continue;
  }

  const tekst = naarTekst(alinea[1]);
  gecontroleerd++;

  if (tekst.length < MIN) {
    bevindingen.push({ url: schoon, wat: `openingsalinea kort (${tekst.length})`, tekst });
  } else if (tekst.length > MAX) {
    bevindingen.push({ url: schoon, wat: `openingsalinea lang (${tekst.length})`, tekst });
  }

  /*
    Twee soorten pagina's zijn hiervan uitgezonderd.

    Sector- en beroepsgroeppagina's staan midden in een kruimelpad dat de
    context al geeft; de naam daar in elke openingsalinea herhalen leest
    onnatuurlijk.

    Teampagina's openen met de eigen tekst van die persoon. Daar hoort geen
    bedrijfsnaam doorheen geschreven — de koppeling tussen mens en organisatie
    hoort in de markup, en staat daar ook: elke teampagina heeft een
    Person met worksFor naar Bureau Weerbaar en Veilig.
  */
  const contextpagina = /^\/(sectoren|team)\//.test(schoon);
  if (!contextpagina && !tekst.includes('Bureau Weerbaar en Veilig')) {
    bevindingen.push({ url: schoon, wat: 'organisatie niet voluit genoemd', tekst });
  }

  const hol = HOL.filter((w) => tekst.toLowerCase().includes(w));
  if (hol.length) {
    bevindingen.push({ url: schoon, wat: `holle bewering: ${hol.join(', ')}`, tekst });
  }
}

console.log(`Pagina's met inhoud gecontroleerd: ${gecontroleerd}`);
console.log(`Bevindingen: ${bevindingen.length}\n`);

const perSoort = {};
for (const b of bevindingen) {
  const soort = b.wat.replace(/\(\d+\)/, '(…)').replace(/:.*/, '');
  (perSoort[soort] ??= []).push(b);
}

for (const [soort, lijst] of Object.entries(perSoort).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${lijst.length}x  ${soort}`);
  for (const b of lijst.slice(0, 5)) {
    console.log(`      ${b.url}`);
    if (b.tekst) console.log(`      → ${b.tekst.slice(0, 120)}${b.tekst.length > 120 ? '…' : ''}`);
  }
  if (lijst.length > 5) console.log(`      … en nog ${lijst.length - 5}`);
  console.log();
}
