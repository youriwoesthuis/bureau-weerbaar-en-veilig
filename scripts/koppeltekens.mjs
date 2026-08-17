/**
 * Vervangt het lange koppelteken (—) door passende interpunctie.
 *
 * Het bedrijf gebruikt dit teken bewust niet. Simpelweg wegstrepen levert kreupele
 * zinnen op, dus kiest dit script per geval:
 *
 *   - staat er een voegwoord achter (en, maar, want, dus, of ...) -> komma
 *   - volgt er een toelichting of uitwerking                      -> dubbele punt
 *
 * De witruimte na het teken blijft staan, zodat regelafbrekingen in markdown
 * intact blijven.
 *
 * Gebruik (in de projectmap):  node scripts/koppeltekens.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const WORTEL = join(dirname(fileURLToPath(import.meta.url)), '..');

/* Waar we wél kijken. CLAUDE.md blijft ongemoeid: dat is het briefdocument. */
const MAPPEN = ['src', 'scripts'];
const LOSSE_BESTANDEN = [
  'README.md',
  'WERKWIJZE.md',
  'DESIGN.md',
  'contentmodel.md',
  'content-inventaris.md',
  'redirects.md',
];
const EXTENSIES = new Set(['.md', '.mjs', '.ts', '.astro', '.css', '.js']);
const OVERSLAAN = new Set(['node_modules', 'dist', '.astro', '.git']);

/* Woorden die na het teken om een komma vragen in plaats van een dubbele punt. */
const KOMMA_WOORDEN = new Set([
  'en', 'maar', 'want', 'dus', 'of', 'terwijl', 'zodat', 'omdat', 'hoewel',
  'niet', 'ook', 'zeker', 'juist', 'precies', 'vaak', 'soms', 'altijd', 'nooit',
  'inclusief', 'behalve', 'tenzij', 'mits', 'waardoor', 'waarmee', 'waarbij', 'zonder',
]);

function bepaalTeken(volgendWoord) {
  const kaal = volgendWoord.toLowerCase().replace(/[^a-zà-ÿ]/g, '');
  return KOMMA_WOORDEN.has(kaal) ? ',' : ':';
}

function verwerk(tekst) {
  let aantal = 0;
  const nieuw = tekst.replace(
    /[ \t]*—([ \t]*\n?[ \t]*)(\S+)/g,
    (_geheel, witruimteNa, volgendWoord) => {
      aantal++;
      return bepaalTeken(volgendWoord) + witruimteNa + volgendWoord;
    }
  );
  // Losse tekens die niet door het patroon zijn gevangen (bijv. aan regeleinde)
  const opgeschoond = nieuw.replace(/[ \t]*—/g, () => {
    aantal++;
    return '';
  });
  return { tekst: opgeschoond, aantal };
}

function verzamel(map, gevonden = []) {
  for (const naam of readdirSync(map)) {
    if (OVERSLAAN.has(naam)) continue;
    const pad = join(map, naam);
    if (statSync(pad).isDirectory()) verzamel(pad, gevonden);
    else if (EXTENSIES.has(extname(naam))) gevonden.push(pad);
  }
  return gevonden;
}

const bestanden = [
  ...MAPPEN.flatMap((m) => verzamel(join(WORTEL, m))),
  ...LOSSE_BESTANDEN.map((b) => join(WORTEL, b)),
];

let totaal = 0;
let aangepast = 0;

for (const bestand of bestanden) {
  // Dit script beschrijft het teken zelf, dus sla het over
  if (bestand.endsWith('koppeltekens.mjs')) continue;
  let inhoud;
  try {
    inhoud = readFileSync(bestand, 'utf8');
  } catch {
    continue;
  }
  if (!inhoud.includes('—')) continue;

  const { tekst, aantal } = verwerk(inhoud);
  writeFileSync(bestand, tekst, 'utf8');
  totaal += aantal;
  aangepast++;
  console.log(`  ${relative(WORTEL, bestand)}: ${aantal}`);
}

console.log(`\nKlaar: ${totaal} koppeltekens vervangen in ${aangepast} bestand(en).`);
