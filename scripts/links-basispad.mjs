/**
 * Maakt interne links submap-bewust.
 *
 * Vervangt href="/pad/" door href={link('/pad/')} en href={`/pad/${x}/`} door
 * href={link(`/pad/${x}/`)}, en zet de benodigde import bovenaan het bestand.
 * Eenmalig te draaien; daarna is de code al goed.
 *
 * Gebruik (in de projectmap):  node scripts/links-basispad.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const WORTEL = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(WORTEL, 'src');

function verzamel(map, gevonden = []) {
  for (const naam of readdirSync(map)) {
    const pad = join(map, naam);
    if (statSync(pad).isDirectory()) verzamel(pad, gevonden);
    else if (naam.endsWith('.astro')) gevonden.push(pad);
  }
  return gevonden;
}

/** Berekent het relatieve importpad naar src/lib/link. */
function importPad(bestand) {
  const vanaf = dirname(bestand);
  let rel = relative(vanaf, join(SRC, 'lib', 'link')).split(sep).join('/');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

let totaal = 0;
let bestanden = 0;

for (const bestand of verzamel(SRC)) {
  let inhoud = readFileSync(bestand, 'utf8');
  const origineel = inhoud;
  let aantal = 0;

  // href="/pad/"  ->  href={link('/pad/')}
  inhoud = inhoud.replace(/href="(\/[^"]*)"/g, (_m, pad) => {
    aantal++;
    return `href={link('${pad}')}`;
  });

  // href={`/pad/${...}/`}  ->  href={link(`/pad/${...}/`)}
  inhoud = inhoud.replace(/href=\{(`\/[^`]*`)\}/g, (_m, sjabloon) => {
    aantal++;
    return `href={link(${sjabloon})}`;
  });

  if (aantal === 0) continue;

  // Import toevoegen als die er nog niet staat
  if (!inhoud.includes("from '") || !/import \{ link \}/.test(inhoud)) {
    const regel = `import { link } from '${importPad(bestand)}';`;
    if (inhoud.startsWith('---')) {
      const eind = inhoud.indexOf('\n', 3);
      inhoud = inhoud.slice(0, eind + 1) + regel + '\n' + inhoud.slice(eind + 1);
    } else {
      inhoud = `---\n${regel}\n---\n\n${inhoud}`;
    }
  }

  if (inhoud !== origineel) {
    writeFileSync(bestand, inhoud, 'utf8');
    totaal += aantal;
    bestanden++;
    console.log(`  ${relative(WORTEL, bestand)}: ${aantal}`);
  }
}

console.log(`\nKlaar: ${totaal} link(s) aangepast in ${bestanden} bestand(en).`);
