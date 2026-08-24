/**
 * Maakt de deelafbeelding die verschijnt als iemand een link naar de site plakt
 * in LinkedIn, WhatsApp, Slack of een mail.
 *
 * Waarom een script en geen SVG in de map public: die platforms tonen geen SVG.
 * Het moet een PNG zijn, en 1200 bij 630 is het formaat waar ze allemaal mee
 * overweg kunnen.
 *
 * Draaien met:  node scripts/og-afbeelding.mjs
 * Daarna staat public/og-afbeelding.png klaar. Het bestand hoort in git: zo
 * hoeft de build hem niet elke keer opnieuw te maken.
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BREEDTE = 1200;
const HOOGTE = 630;

/*
  Het lettertype van de site is Montserrat, maar dat zit als woff2 in
  node_modules en is voor de SVG-renderer niet te bereiken. Daarom een stapel
  schreefloze systeemletters die er dicht bij komt. De afbeelding wordt één keer
  gemaakt en meegecommit, dus het resultaat ligt vast.
*/
const LETTERS = "'Montserrat','Segoe UI Semibold','Segoe UI',Arial,sans-serif";

const svg = `
<svg width="${BREEDTE}" height="${HOOGTE}" viewBox="0 0 ${BREEDTE} ${HOOGTE}"
     xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!--
      De coördinaten staan in de lokale ruimte van de groep hieronder, niet in
      die van het hele doek: de chevrons lopen daar van x 116 tot 304 en van
      y 58 tot 271. Stonden de coördinaten daarbuiten, dan viel het hele verloop
      buiten het beeldmerk en werd het egaal oranje.
    -->
    <linearGradient id="merk" x1="116" y1="58" x2="304" y2="271" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#f18919"/>
      <stop offset="50%" stop-color="#e8801f"/>
      <stop offset="72%" stop-color="#b06a55"/>
      <stop offset="100%" stop-color="#35409b"/>
    </linearGradient>
    <linearGradient id="streep" x1="0" y1="0" x2="${BREEDTE}" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#f18919"/>
      <stop offset="55%" stop-color="#b06a55"/>
      <stop offset="100%" stop-color="#35409b"/>
    </linearGradient>
    <radialGradient id="gloedOranje" cx="0.08" cy="0" r="0.75">
      <stop offset="0%" stop-color="#f18919" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#f18919" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gloedPaars" cx="0.55" cy="1.1" r="0.7">
      <stop offset="0%" stop-color="#735578" stop-opacity="0.62"/>
      <stop offset="100%" stop-color="#735578" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gloedBlauw" cx="1.05" cy="0.1" r="0.7">
      <stop offset="0%" stop-color="#35409b" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#35409b" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Hetzelfde donkere vlak met drie gloeden als de hero op de site -->
  <rect width="${BREEDTE}" height="${HOOGTE}" fill="#17203d"/>
  <rect width="${BREEDTE}" height="${HOOGTE}" fill="url(#gloedOranje)"/>
  <rect width="${BREEDTE}" height="${HOOGTE}" fill="url(#gloedPaars)"/>
  <rect width="${BREEDTE}" height="${HOOGTE}" fill="url(#gloedBlauw)"/>

  <!-- Het beeldmerk: cirkel met dubbele chevron -->
  <g transform="translate(96,150) scale(0.62)">
    <circle cx="210" cy="58" r="40" fill="#f18919"/>
    <path d="M116 58 L210 128 L304 58 L304 112 L210 182 L116 112 Z" fill="url(#merk)"/>
    <path d="M163 182 L210 217 L304 147 L304 201 L210 271 L163 236 Z" fill="url(#merk)"/>
  </g>

  <text x="330" y="222" font-family=${JSON.stringify(LETTERS)} font-size="30" font-weight="700"
        fill="#f18919" letter-spacing="4">SPECIALIST IN AGRESSIETRAINING</text>

  <text x="330" y="300" font-family=${JSON.stringify(LETTERS)} font-size="62" font-weight="700"
        fill="#ffffff">Bureau Weerbaar</text>
  <text x="330" y="372" font-family=${JSON.stringify(LETTERS)} font-size="62" font-weight="700"
        fill="#ffffff">en Veilig</text>

  <text x="330" y="438" font-family=${JSON.stringify(LETTERS)} font-size="30" font-weight="400"
        fill="#ffffff" fill-opacity="0.85">Agressietraining per beroepsgroep, in drie niveaus</text>

  <!-- Concrete cijfers: dat is wat een lezer in een tijdlijn laat stoppen -->
  <text x="330" y="512" font-family=${JSON.stringify(LETTERS)} font-size="26" font-weight="700"
        fill="#ffffff" fill-opacity="0.7">132 trainingen · 19 sectoren · 44 beroepsgroepen</text>

  <rect x="0" y="${HOOGTE - 10}" width="${BREEDTE}" height="10" fill="url(#streep)"/>
</svg>`;

const doel = join(process.cwd(), 'public', 'og-afbeelding.png');
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(doel, png);
console.log(`Deelafbeelding gemaakt: ${doel} (${Math.round(png.length / 1024)} kB)`);
