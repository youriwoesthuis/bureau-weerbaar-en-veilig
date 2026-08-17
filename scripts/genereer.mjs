/**
 * Contentgenerator (Fase 5).
 *
 * Zet de per training vastgelegde brongegevens uit `scripts/data/*.mjs` om naar
 * markdown-bestanden in src/content/. De brongegevens komen 1-op-1 van de
 * bestaande site (bureauwenv.wizzinc-dev2.nl): dit script verzint niets, het
 * giet de feiten in de vaste paginastructuur uit contentmodel.md.
 *
 * Bestanden die al bestaan worden overgeslagen, tenzij --overschrijf.
 *
 * Gebruik (in de projectmap):  node scripts/genereer.mjs
 */
import { writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HIER = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(HIER, '..', 'src', 'content');
const OVERSCHRIJF = process.argv.includes('--overschrijf');

const NIVEAUS = ['basis', 'gevorderd', 'expert'];

/* ---------- YAML-hulp: quote alleen waar nodig, zodat ':' in tekst veilig is ---------- */
function y(waarde) {
  const s = String(waarde);
  return /[:#\-?*&!|>'"%@`{}[\],]|^\s|\s$/.test(s) ? JSON.stringify(s) : s;
}
function blok(tekst, indent = '  ') {
  // Gefolde blokstijl voor lange samenvattingen: leest prettig in de repo.
  const woorden = String(tekst).replace(/\s+/g, ' ').trim().split(' ');
  const regels = [];
  let regel = '';
  for (const w of woorden) {
    if ((regel + ' ' + w).trim().length > 72) {
      regels.push(regel.trim());
      regel = w;
    } else regel += ' ' + w;
  }
  if (regel.trim()) regels.push(regel.trim());
  return '>-\n' + regels.map((r) => indent + r).join('\n');
}
function lijst(items, indent = '  ') {
  return items.map((i) => `${indent}- ${y(i)}`).join('\n');
}

/* ---------- Standaardvragen, gevuld met de echte feiten van de training ---------- */
function standaardVragen(t, bgNaam) {
  const v = [];
  v.push([
    `Hoe lang duurt de ${t.titel.toLowerCase()}?`,
    `De training duurt ${t.duur}. De groep telt ${t.groep}.`,
  ]);
  v.push([
    'Voor wie is deze training bedoeld?',
    t.voorwaarde
      ? `${t.doelgroep} Voorwaarde voor deelname: ${t.voorwaarde}.`
      : `${t.doelgroep} Er is geen voorkennis nodig; dit is het instapniveau.`,
  ]);
  v.push([
    'Waar vindt de training plaats?',
    'Incompany op de eigen locatie, of bij Bureau Weerbaar en Veilig in Neede (Gelderland).',
  ]);
  if (t.cert) {
    v.push(['Krijgen deelnemers een certificaat?', `Ja, elke deelnemer ontvangt na afloop een ${t.cert.replace(/ na afloop$/, '')}.`]);
  }
  const niveauUitleg = {
    basis: `De basistraining leert ${bgNaam.toLowerCase()} agressie herkennen, de eigen reactie reguleren en situaties de-escaleren. Wie structureel met zwaardere situaties werkt, gaat daarna verder met het gevorderde niveau.`,
    gevorderd:
      'De basistraining behandelt het herkennen en de-escaleren van agressie in het moment. Dit gevorderde niveau richt zich op patronen die niet impulsief zijn: bewuste grensoverschrijding, manipulatie en consistent teamoptreden.',
    expert:
      'De basis- en gevorderde training gaan over het eigen handelen. Dit expertniveau gaat over de organisatie: beleid, escalatiestructuur, nazorg, meldcultuur en het coachen van medewerkers.',
  };
  v.push([`Wat is het verschil met de andere niveaus?`, niveauUitleg[t.niveau]]);
  return v;
}

/* ---------- Eén trainingsbestand ---------- */
function trainingMarkdown(t, bg) {
  const alleVragen = [...(t.vragen ?? []), ...standaardVragen(t, bg.naam)].slice(0, 6);
  if (alleVragen.length < 4) throw new Error(`${t.slug}: te weinig vragen`);

  const andereNiveaus = NIVEAUS.filter((n) => n !== t.niveau).map((n) => `${bg.slugPrefix}-${n}`);
  const gerelateerd = [...andereNiveaus, ...(t.gerelateerd ?? [])];

  const fm = [
    '---',
    `titel: ${y(t.titel)}`,
    `slug: ${t.slug}`,
    `sector: ${bg.sector}`,
    `beroepsgroep: ${bg.slug}`,
    `niveau: ${t.niveau}`,
    `duur: ${y(t.duur)}`,
    `groepsgrootte: ${y(t.groep)}`,
    'locatie: incompany',
    `locatie_detail: ${y(t.locatieDetail ?? 'op eigen locatie of bij Bureau Weerbaar en Veilig in Neede')}`,
    t.cert ? `certificaat: ${y(t.cert)}` : null,
    t.voorwaarde ? `voorwaarde: ${y(t.voorwaarde)}` : null,
    `doelgroep: ${y(t.doelgroep)}`,
    `samenvatting: ${blok(t.samenvatting)}`,
    'resultaat:',
    lijst(t.resultaat),
    'programma:',
    t.programma.map(([titel, inhoud]) => `  - titel: ${y(titel)}\n    inhoud: ${y(inhoud)}`).join('\n'),
    'werkvormen:',
    lijst(t.werkvormen),
    'veelgestelde_vragen:',
    alleVragen.map(([v, a]) => `  - vraag: ${y(v)}\n    antwoord: ${y(a)}`).join('\n'),
    'gerelateerd:',
    lijst(gerelateerd),
    'afbeelding:',
    `  src: /images/trainingen/${bg.afbeelding}`,
    `  alt: ${y(t.afbeeldingAlt ?? `Deelnemers oefenen een praktijksituatie tijdens de agressietraining voor ${bg.naam.toLowerCase()}`)}`,
    '---',
    '',
    '## Waarom deze training',
    '',
    t.waarom.join('\n\n'),
    '',
    `## ${t.situatiesKop ?? (t.niveau === 'expert' ? 'Wat speelt er op dit niveau' : 'Herkenbare praktijksituaties')}`,
    '',
    t.situaties.map((s) => `- ${s}`).join('\n'),
    '',
  ].filter((r) => r !== null);

  return fm.join('\n');
}

/* ---------- Beroepsgroep- en sectorbestanden ---------- */
function beroepsgroepMarkdown(bg) {
  return [
    '---',
    `naam: ${y(bg.naam)}`,
    `slug: ${bg.slug}`,
    `sector: ${bg.sector}`,
    `samenvatting: ${blok(bg.samenvatting)}`,
    'afbeelding:',
    `  src: /images/beroepsgroepen/${bg.afbeelding}`,
    `  alt: ${y(bg.afbeeldingAlt)}`,
    '---',
    '',
    bg.intro.join('\n\n'),
    '',
  ].join('\n');
}

function sectorMarkdown(s) {
  return [
    '---',
    `naam: ${y(s.naam)}`,
    `slug: ${s.slug}`,
    `samenvatting: ${blok(s.samenvatting)}`,
    'afbeelding:',
    `  src: /images/sectoren/${s.slug}.jpg`,
    `  alt: ${y(s.afbeeldingAlt)}`,
    '---',
    '',
    s.intro.join('\n\n'),
    '',
  ].join('\n');
}

/* ---------- Wegschrijven ---------- */
let gemaakt = 0;
let overgeslagen = 0;

function schrijf(map, bestandsnaam, inhoud) {
  const dir = join(CONTENT, map);
  mkdirSync(dir, { recursive: true });
  const pad = join(dir, bestandsnaam);
  if (existsSync(pad) && !OVERSCHRIJF) {
    overgeslagen++;
    return;
  }
  writeFileSync(pad, inhoud, 'utf8');
  gemaakt++;
}

const dataMap = join(HIER, 'data');
const bestanden = existsSync(dataMap) ? readdirSync(dataMap).filter((f) => f.endsWith('.mjs')).sort() : [];

for (const bestand of bestanden) {
  const { sector, beroepsgroepen } = await import(`file://${join(dataMap, bestand)}`);

  if (sector) schrijf('sectoren', `${sector.slug}.md`, sectorMarkdown(sector));

  for (const bg of beroepsgroepen) {
    bg.sector = bg.sector ?? sector.slug;
    bg.slugPrefix = bg.slugPrefix ?? `agressietraining-${bg.slug}`;
    schrijf('beroepsgroepen', `${bg.slug}.md`, beroepsgroepMarkdown(bg));

    for (const t of bg.trainingen) {
      t.slug = t.slug ?? `${bg.slugPrefix}-${t.niveau}`;
      schrijf('trainingen', `${t.slug}.md`, trainingMarkdown(t, bg));
    }
  }
}

console.log(`Klaar: ${gemaakt} bestand(en) geschreven, ${overgeslagen} overgeslagen (bestond al).`);
