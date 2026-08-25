/**
 * Meet titles, descriptions, canonicals en koppenstructuur over de hele build.
 *
 * Aanvulling op controleer.mjs: dat script bewaakt de harde fouten, dit meet de
 * dingen waar een grens op zit die je pas ziet als je ze allemaal naast elkaar
 * legt — lengte, uniciteit en dekking. Draait op dist/, dus op wat een
 * zoekmachine daadwerkelijk krijgt en niet op de bron.
 */
import fs from 'node:fs';
import path from 'node:path';

const decodeer = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

function* htmls(map) {
  for (const item of fs.readdirSync(map, { withFileTypes: true })) {
    const p = path.join(map, item.name);
    if (item.isDirectory()) yield* htmls(p);
    else if (item.name.endsWith('.html')) yield p;
  }
}

const naarUrl = (f) =>
  '/' + path.relative('dist', f).split(path.sep).join('/').replace(/index\.html$/, '');

const titels = new Map();
const descs = new Map();
const teLang = [];
const descTeLang = [];
const descTeKort = [];
const kopfouten = [];
let zonderCanonical = 0;
let zonderDesc = 0;
let zonderH1 = 0;
let meerdereH1 = 0;
let aantal = 0;
let stubs = 0;

for (const f of htmls('dist')) {
  aantal++;
  const h = fs.readFileSync(f, 'utf8');
  const url = naarUrl(f);
  const noindex = /name="robots" content="[^"]*noindex/.test(h);
  /* Een doorverwijsstub: meta-refresh naar elders, met een canonical die naar
     de bestemming wijst. Geen inhoudspagina, dus buiten de telling. */
  const stub = /http-equiv="refresh"/.test(h);
  if (stub) { stubs++; continue; }

  const t = decodeer((h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const d = decodeer((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');

  if (!/rel="canonical"/.test(h) && !noindex) zonderCanonical++;
  if (!d) zonderDesc++;
  if (t.length > 60) teLang.push([t.length, url, t]);
  if (d && d.length > 155) descTeLang.push([d.length, url]);
  if (d && d.length < 70) descTeKort.push([d.length, url]);

  if (!noindex) {
    titels.set(t, [...(titels.get(t) || []), url]);
    descs.set(d, [...(descs.get(d) || []), url]);
  }

  /* Koppen: precies één H1, en geen niveau overslaan. */
  const koppen = [...h.matchAll(/<h([1-6])[^>]*>/g)].map((m) => +m[1]);
  const h1 = koppen.filter((n) => n === 1).length;
  if (h1 === 0) zonderH1++;
  if (h1 > 1) meerdereH1++;
  let vorig = 0;
  for (const n of koppen) {
    if (vorig && n > vorig + 1) {
      kopfouten.push(`${url}: h${vorig} naar h${n}`);
      break;
    }
    vorig = n;
  }
}

const dubbelT = [...titels].filter(([, u]) => u.length > 1);
const dubbelD = [...descs].filter(([, u]) => u.length > 1);

const regel = (label, waarde, goed = waarde === 0) =>
  console.log(`${goed ? '  ok ' : '  !! '} ${label.padEnd(34)} ${waarde}`);

console.log(`\nMETADATA over ${aantal} pagina's\n${'─'.repeat(52)}`);
regel('titels langer dan 60 tekens', teLang.length);
regel('descriptions langer dan 155', descTeLang.length);
regel('descriptions korter dan 70', descTeKort.length);
regel('dubbele titels', dubbelT.length);
regel('dubbele descriptions', dubbelD.length);
regel('zonder canonical', zonderCanonical);
regel('zonder description', zonderDesc);
regel('zonder H1', zonderH1);
regel("met meer dan één H1", meerdereH1);
regel('kopniveau overgeslagen', kopfouten.length);

if (teLang.length) {
  console.log('\nLangste titels:');
  teLang.sort((a, b) => b[0] - a[0]).slice(0, 8).forEach(([n, , t]) => console.log(`   ${n}  ${t}`));
}
for (const [wat, lijst] of [['titel', dubbelT], ['description', dubbelD]]) {
  if (!lijst.length) continue;
  console.log(`\nDubbele ${wat}s:`);
  lijst.slice(0, 6).forEach(([w, urls]) => console.log(`   ${urls.length}x  ${(w || '(leeg)').slice(0, 60)}\n        ${urls.slice(0, 3).join('  ')}`));
}
if (kopfouten.length) {
  console.log('\nKopstructuur:');
  kopfouten.slice(0, 8).forEach((r) => console.log('   ' + r));
}
console.log();
