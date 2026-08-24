/**
 * Vervangt de groene studioachtergrond van de portretfoto's door het
 * merkverloop van Bureau Weerbaar en Veilig.
 *
 * De foto's zijn geschoten tegen het groen van Act in Move. Op deze site is dat
 * de kleur van een ander merk uit de groep, dus hij hoort hier weg.
 *
 * Werkwijze: per pixel bepalen hoe "groen" hij is ten opzichte van rood en
 * blauw. Boven een drempel is het achtergrond, eronder de persoon, en in de
 * band ertussen een zachte overgang — anders krijg je een uitgeknipte rand rond
 * haar en schouders. Daarna wordt de groenzweem die op de persoon zelf valt
 * (spill) teruggedrukt, en komt de persoon over het verloop te staan.
 *
 * Draaien met:  node scripts/portret-achtergrond.mjs [--proef]
 * Met --proef wordt alleen jeroen-woesthuis verwerkt naar een testbestand.
 */
import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAP = join(process.cwd(), 'src', 'images', 'team');
const proef = process.argv.includes('--proef');

/* Onder deze groenwaarde is het de persoon, erboven de achtergrond. */
const ONDER = 18;
const BOVEN = 55;

/**
 * Het merkverloop als achtergrond, in hetzelfde formaat als de foto.
 *
 * Met een fijne ruislaag erover. Een vloeiend kleurverloop is het lastigste wat
 * je een compressor kunt geven: JPEG en daarna WebP hakken hem in banden, en
 * die randen zie je als vlekken of donkere pixels. Een klein beetje ruis breekt
 * die banden en verdwijnt zelf in de compressie. Standaardtruc in de
 * beeldbewerking, en hier hard nodig omdat het beeld twee compressieslagen
 * ondergaat: eerst mijn JPEG, daarna de WebP die Astro ervan maakt.
 */
const achtergrond = (breedte, hoogte) =>
  Buffer.from(`
    <svg width="${breedte}" height="${hoogte}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="merk" x1="0" y1="0" x2="${breedte}" y2="${hoogte}"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#f18919"/>
          <stop offset="42%" stop-color="#c9743a"/>
          <stop offset="68%" stop-color="#8a5f6d"/>
          <stop offset="100%" stop-color="#4a3f7a"/>
        </linearGradient>
        <radialGradient id="licht" cx="0.5" cy="0.34" r="0.62">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
        <filter id="ruis" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
      </defs>
      <rect width="${breedte}" height="${hoogte}" fill="url(#merk)"/>
      <rect width="${breedte}" height="${hoogte}" fill="url(#licht)"/>
      <rect width="${breedte}" height="${hoogte}" filter="url(#ruis)" opacity="0.035"/>
    </svg>`);

async function verwerk(bestand, doel) {
  /*
    Het bestand eerst helemaal in het geheugen lezen. Geef je sharp een pad, dan
    houdt hij dat bestand open, en op Windows kun je er dan niet overheen
    schrijven — ook niet nadat de bewerking klaar is.
  */
  const bron = sharp(readFileSync(join(MAP, bestand)));
  const { width, height } = await bron.metadata();
  const { data } = await bron.clone().ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const groen = g - Math.max(r, b);

    if (groen > ONDER) {
      // Zachte overgang: volledig doorzichtig pas boven BOVEN
      const t = Math.min(1, (groen - ONDER) / (BOVEN - ONDER));
      data[i + 3] = Math.round(255 * (1 - t));
      // Groenzweem terugdringen op wat er van de pixel overblijft
      const doelG = Math.max(r, b);
      data[i + 1] = Math.round(g + (doelG - g) * t);
    }
  }

  const persoon = await sharp(data, { raw: { width, height, channels: 4 } }).png().toBuffer();

  /*
    Eerst naar een buffer en dan pas wegschrijven. Rechtstreeks naar hetzelfde
    pad schrijven waar sharp nog uit leest levert "unable to open for write" op.
  */
  const klaar = await sharp(achtergrond(width, height))
    .composite([{ input: persoon }])
    .jpeg({ quality: 96, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toBuffer();

  writeFileSync(doel, klaar);
  return `${bestand} → ${doel.split(/[\\/]/).pop()}`;
}

if (proef) {
  console.log(await verwerk('jeroen-woesthuis.jpg', join(MAP, '..', 'proef-portret.jpg')));
} else {
  const bestanden = readdirSync(MAP).filter((f) => f.endsWith('.jpg'));
  for (const f of bestanden) {
    console.log(await verwerk(f, join(MAP, f)));
  }
  console.log(`${bestanden.length} portretten verwerkt.`);
}
