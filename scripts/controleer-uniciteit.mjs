/**
 * Meet hoe uniek de trainingspagina's onderling zijn.
 *
 * Honderdtweeëndertig pagina's die volgens hetzelfde stramien zijn opgebouwd
 * lopen het risico dat Google ze als doorway pages ziet: bijna dezelfde tekst
 * met alleen een andere beroepsgroep erin. Zulke pagina's worden vaak wel
 * gevonden maar niet geïndexeerd.
 *
 * Deze controle knipt de lopende tekst van elke pagina in reeksen van vijf
 * woorden en kijkt hoeveel van die reeksen twee pagina's delen. Boven de zestig
 * procent overlap gaat het om varianten van dezelfde tekst.
 *
 * Draaien met:  node scripts/controleer-uniciteit.mjs
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MAP = 'dist/trainingen';
const REEKS = 5;

/**
 * Alleen de eigen tekst van de pagina.
 *
 * Kop, navigatie en voet gaan eraf, maar ook de blokken die op élke
 * trainingspagina woordelijk hetzelfde zijn: het trainersblok en het
 * terugbelverzoek. Die tellen bij elkaar zo'n honderdvijftig woorden, en als je
 * die meerekent lijkt elke pagina op elke andere zonder dat dat iets zegt over
 * de inhoud. Wat overblijft is wat deze training onderscheidt: de bodytekst, de
 * leeruitkomsten, het programma en de veelgestelde vragen.
 */
function paginaTekst(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  return (main ? main[1] : html)
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<section[^>]*aria-labelledby="trainers-titel"[\s\S]*?<\/section>/g, ' ')
    .replace(/<aside[^>]*aria-labelledby="terugbel-titel"[\s\S]*?<\/aside>/g, ' ')
    /*
      De feitenstrip in de kop: duur, groep, locatie en afsluiting. Die is op
      alle honderdtweeëndertig pagina's woordelijk gelijk — elke training duurt
      een dag en wordt incompany gegeven — dus telt hij mee als overlap zonder
      dat het iets zegt over de inhoud. Hij kwam er later bij, en de gemeten
      overlap sprong er meteen van 33,3 naar 35,2 procent door.
    */
    .replace(/<ul[^>]*border-white\/15[^>]*>[\s\S]*?<\/ul>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

function reeksen(tekst) {
  const woorden = tekst.split(' ').filter((w) => w.length > 1);
  const set = new Set();
  for (let i = 0; i + REEKS <= woorden.length; i++) {
    set.add(woorden.slice(i, i + REEKS).join(' '));
  }
  return set;
}

const overlap = (a, b) => {
  let gedeeld = 0;
  for (const r of a) if (b.has(r)) gedeeld++;
  return gedeeld / Math.min(a.size, b.size);
};

const paginas = readdirSync(MAP, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => {
    const html = readFileSync(join(MAP, e.name, 'index.html'), 'utf8');
    if (html.includes('http-equiv="refresh"')) return null;
    const tekst = paginaTekst(html);
    return { slug: e.name, woorden: tekst.split(' ').length, reeksen: reeksen(tekst) };
  })
  .filter(Boolean);

console.log(`Trainingspagina's: ${paginas.length}`);
const lengtes = paginas.map((p) => p.woorden).sort((a, b) => a - b);
console.log(
  `Woorden per pagina: kortste ${lengtes[0]}, mediaan ${lengtes[Math.floor(lengtes.length / 2)]}, langste ${lengtes.at(-1)}`
);

let hoogste = { waarde: 0 };
const perPagina = [];
for (let i = 0; i < paginas.length; i++) {
  let max = 0;
  let tegen = '';
  for (let j = 0; j < paginas.length; j++) {
    if (i === j) continue;
    const o = overlap(paginas[i].reeksen, paginas[j].reeksen);
    if (o > max) {
      max = o;
      tegen = paginas[j].slug;
    }
  }
  perPagina.push({ slug: paginas[i].slug, max, tegen });
  if (max > hoogste.waarde) hoogste = { waarde: max, a: paginas[i].slug, b: tegen };
}

const gemiddeld = perPagina.reduce((a, p) => a + p.max, 0) / perPagina.length;
console.log(`\nGrootste overlap met een andere pagina, gemiddeld: ${(gemiddeld * 100).toFixed(1)}%`);

const drempels = [0.8, 0.7, 0.6, 0.5, 0.4];
console.log('\nPagina\'s boven een overlapdrempel:');
for (const d of drempels) {
  console.log(`  meer dan ${(d * 100).toFixed(0)}%: ${perPagina.filter((p) => p.max > d).length}`);
}

console.log('\nMeest op elkaar lijkend:');
perPagina
  .sort((a, b) => b.max - a.max)
  .slice(0, 8)
  .forEach((p) => console.log(`  ${(p.max * 100).toFixed(0)}%  ${p.slug}\n        ↔ ${p.tegen}`));

console.log('\nMeest eigen:');
perPagina
  .slice()
  .sort((a, b) => a.max - b.max)
  .slice(0, 4)
  .forEach((p) => console.log(`  ${(p.max * 100).toFixed(0)}%  ${p.slug}`));
