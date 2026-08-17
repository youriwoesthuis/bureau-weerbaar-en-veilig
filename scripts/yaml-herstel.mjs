/**
 * Zet frontmatter-waarden met een dubbele punt tussen aanhalingstekens.
 *
 * Nodig na het vervangen van lange koppeltekens: een dubbele punt midden in een
 * waarde laat YAML denken dat er een nieuw veld begint. Blokken met >- worden
 * overgeslagen, want daar mag een dubbele punt gewoon staan.
 *
 * Gebruik (in de projectmap):  node scripts/yaml-herstel.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const WORTEL = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(WORTEL, 'src', 'content');

/** Moet deze waarde tussen aanhalingstekens? */
function moetQuoten(waarde) {
  const w = waarde.trim();
  if (w === '') return false;
  if (/^["'[{>|]/.test(w)) return false; // al gequoot, of een blok/lijst/map
  return /:\s/.test(w) || /\s#/.test(w);
}

function quote(waarde) {
  return `"${waarde.trim().replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function herstelFrontmatter(inhoud) {
  if (!inhoud.startsWith('---')) return { inhoud, aantal: 0 };
  const eind = inhoud.indexOf('\n---', 3);
  if (eind === -1) return { inhoud, aantal: 0 };

  const kop = inhoud.slice(4, eind);
  const rest = inhoud.slice(eind);
  let aantal = 0;

  let inBlok = false;
  let blokInspring = 0;

  const regels = kop.split('\n').map((regel) => {
    if (regel.trim() === '') return regel;
    const inspring = regel.length - regel.trimStart().length;

    if (inBlok) {
      if (inspring > blokInspring) return regel; // hoort bij het blok
      inBlok = false;
    }

    // "- sleutel: waarde" (map binnen een lijst)
    let m = regel.match(/^(\s*-\s+)([A-Za-z_][\w]*):\s*(.*)$/);
    if (m) {
      const [, prefix, sleutel, waarde] = m;
      if (/^[>|]/.test(waarde.trim())) {
        inBlok = true;
        blokInspring = inspring;
        return regel;
      }
      if (moetQuoten(waarde)) {
        aantal++;
        return `${prefix}${sleutel}: ${quote(waarde)}`;
      }
      return regel;
    }

    // "sleutel: waarde"
    m = regel.match(/^(\s*)([A-Za-z_][\w]*):\s*(.*)$/);
    if (m) {
      const [, spaties, sleutel, waarde] = m;
      if (/^[>|]/.test(waarde.trim())) {
        inBlok = true;
        blokInspring = inspring;
        return regel;
      }
      if (moetQuoten(waarde)) {
        aantal++;
        return `${spaties}${sleutel}: ${quote(waarde)}`;
      }
      return regel;
    }

    // "- losse waarde" (gewone lijstregel)
    m = regel.match(/^(\s*-\s+)(.*)$/);
    if (m) {
      const [, prefix, waarde] = m;
      if (moetQuoten(waarde)) {
        aantal++;
        return `${prefix}${quote(waarde)}`;
      }
    }
    return regel;
  });

  return { inhoud: `---\n${regels.join('\n')}${rest}`, aantal };
}

function verzamel(map, gevonden = []) {
  for (const naam of readdirSync(map)) {
    const pad = join(map, naam);
    if (statSync(pad).isDirectory()) verzamel(pad, gevonden);
    else if (naam.endsWith('.md')) gevonden.push(pad);
  }
  return gevonden;
}

let totaal = 0;
let bestanden = 0;
for (const pad of verzamel(CONTENT)) {
  const origineel = readFileSync(pad, 'utf8');
  const { inhoud, aantal } = herstelFrontmatter(origineel);
  if (aantal > 0) {
    writeFileSync(pad, inhoud, 'utf8');
    totaal += aantal;
    bestanden++;
    console.log(`  ${relative(WORTEL, pad)}: ${aantal}`);
  }
}

console.log(`\nKlaar: ${totaal} waarde(n) gequoot in ${bestanden} bestand(en).`);
