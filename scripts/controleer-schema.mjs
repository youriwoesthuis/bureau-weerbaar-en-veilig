/**
 * Controleert de gestructureerde data (schema.org) over de hele build.
 *
 * Wat hier gemeten wordt is niet of de JSON klopt — dat zou de build al hebben
 * gemeld — maar of de dingen kloppen die een zoekmachine stilzwijgend negeert:
 * een Course zonder provider, een verwijzing naar een @id dat nergens bestaat,
 * een FAQPage met een vraag zonder antwoord, een BreadcrumbList die niet bij de
 * URL past. Dat soort fouten kost rich results zonder ooit een foutmelding te
 * geven.
 */
import fs from 'node:fs';
import path from 'node:path';

function* htmls(map) {
  for (const item of fs.readdirSync(map, { withFileTypes: true })) {
    const p = path.join(map, item.name);
    if (item.isDirectory()) yield* htmls(p);
    else if (item.name.endsWith('.html')) yield p;
  }
}

const naarUrl = (f) =>
  '/' + path.relative('dist', f).split(path.sep).join('/').replace(/index\.html$/, '');

const ontsnap = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const fouten = [];
const meld = (url, wat) => fouten.push(`${url}: ${wat}`);

/* Alle @id's die ergens gedefinieerd worden, en alle die ergens genoemd worden. */
const gedefinieerd = new Set();
const genoemd = new Map();

const typen = new Map();
let metSchema = 0;
let aantal = 0;

function loop(knoop, url, definieert) {
  if (Array.isArray(knoop)) {
    for (const k of knoop) loop(k, url, definieert);
    return;
  }
  if (!knoop || typeof knoop !== 'object') return;

  const sleutels = Object.keys(knoop);
  const heeftId = typeof knoop['@id'] === 'string';
  /* Een knoop met alleen een @id is een verwijzing; met meer velden is het een
     definitie. Dat onderscheid bepaalt of een ontbrekend doel een fout is. */
  const isVerwijzing = heeftId && sleutels.filter((k) => k !== '@id' && k !== '@type').length === 0;

  if (heeftId) {
    if (isVerwijzing) {
      if (!genoemd.has(knoop['@id'])) genoemd.set(knoop['@id'], []);
      genoemd.get(knoop['@id']).push(url);
    } else if (definieert) {
      gedefinieerd.add(knoop['@id']);
    }
  }

  const type = knoop['@type'];
  if (typeof type === 'string') {
    typen.set(type, (typen.get(type) || 0) + 1);

    if (type === 'Course') {
      if (!knoop.provider) meld(url, 'Course zonder provider');
      if (!knoop.name) meld(url, 'Course zonder name');
      if (!knoop.description) meld(url, 'Course zonder description');
      if (!knoop.hasCourseInstance) meld(url, 'Course zonder hasCourseInstance');
    }
    if (type === 'Question') {
      const a = knoop.acceptedAnswer;
      if (!a || !a.text) meld(url, `Question zonder antwoord: ${String(knoop.name).slice(0, 40)}`);
    }
    if (type === 'ListItem') {
      if (typeof knoop.position !== 'number') meld(url, 'ListItem zonder position');
      /* Een ListItem identificeert zich met een naam, een genest item of een
         url. Alle drie tegelijk eisen is strenger dan schema.org zelf. */
      if (!knoop.name && !knoop.item && !knoop.url) meld(url, 'ListItem zonder naam, item of url');
    }
    if (type === 'Person' && !knoop.name) meld(url, 'Person zonder name');
    if (type === 'ImageObject' && !knoop.url && !knoop.contentUrl) {
      meld(url, 'ImageObject zonder url');
    }
  }

  for (const [k, v] of Object.entries(knoop)) {
    if (k === '@context') continue;
    loop(v, url, definieert);
  }
}

for (const f of htmls('dist')) {
  const h = fs.readFileSync(f, 'utf8');
  if (/http-equiv="refresh"/.test(h)) continue;
  aantal++;
  const url = naarUrl(f);

  const blokken = [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!blokken.length) {
    meld(url, 'geen gestructureerde data');
    continue;
  }
  metSchema++;

  for (const [, ruw] of blokken) {
    let data;
    try {
      data = JSON.parse(ontsnap(ruw));
    } catch (e) {
      meld(url, 'ongeldige JSON-LD: ' + e.message.slice(0, 60));
      continue;
    }
    loop(data, url, true);

    /* Het kruimelpad moet bij de eigen URL passen: de laatste kruimel hoort de
       pagina zelf te zijn, en die heeft dus géén eigen item-link. */
    if (data['@type'] === 'BreadcrumbList') {
      const lijst = data.itemListElement ?? [];
      const laatste = lijst[lijst.length - 1];
      if (laatste?.item) meld(url, 'laatste kruimel verwijst naar zichzelf');
      const posities = lijst.map((x) => x.position).join(',');
      const verwacht = lijst.map((_, i) => i + 1).join(',');
      if (posities !== verwacht) meld(url, `kruimelposities ${posities} i.p.v. ${verwacht}`);
    }
  }
}

/* Verwijzingen die nergens uitkomen. De sitebrede Organization wordt op elke
   pagina gedefinieerd, dus die hoort altijd gevonden te worden. */
const wees = [...genoemd].filter(([id]) => !gedefinieerd.has(id));

console.log(`\nSCHEMA.ORG over ${aantal} inhoudspagina's\n${'─'.repeat(52)}`);
console.log(`  pagina's met gestructureerde data  ${metSchema} van ${aantal}`);
console.log(`  gedefinieerde @id's                ${gedefinieerd.size}`);
console.log(`  verwijzingen zonder doel           ${wees.length}`);
console.log(`  fouten                             ${fouten.length}`);

console.log('\nGebruikte typen:');
[...typen]
  .sort((a, b) => b[1] - a[1])
  .forEach(([t, n]) => console.log(`  ${String(n).padStart(6)}  ${t}`));

if (wees.length) {
  console.log('\nVerwijzingen zonder doel:');
  wees.slice(0, 6).forEach(([id, urls]) => console.log(`  ${id}  (${urls.length} pagina's)`));
}
if (fouten.length) {
  console.log('\nFouten:');
  const uniek = [...new Set(fouten.map((f) => f.replace(/^[^:]+: /, '')))];
  uniek.slice(0, 12).forEach((f) => {
    const n = fouten.filter((x) => x.endsWith(f)).length;
    console.log(`  ${n}x  ${f}`);
  });
}
console.log();
process.exit(fouten.length || wees.length ? 1 : 0);
