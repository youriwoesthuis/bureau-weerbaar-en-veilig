/**
 * Hulpfuncties voor title en meta description.
 *
 * Google toont ongeveer 60 tekens van een title en ongeveer 155 van een
 * description. Wat daarna komt wordt afgekapt met "…", dus zorgen we dat de
 * belangrijkste woorden vooraan staan en we zelf netjes afbreken op een woord.
 */

const MAX_TITEL = 60;
const MAX_BESCHRIJVING = 155;

/** Kapt af op een woordgrens; voegt alleen een puntje toe als er echt iets wegvalt. */
function kapAf(tekst: string, max: number): string {
  const schoon = tekst.replace(/\s+/g, ' ').trim();
  if (schoon.length <= max) return schoon;
  const stuk = schoon.slice(0, max - 1);
  const spatie = stuk.lastIndexOf(' ');
  return (spatie > max * 0.6 ? stuk.slice(0, spatie) : stuk).replace(/[,;:–-]$/, '') + '…';
}

/**
 * Bouwt de paginatitel. De merknaam wordt alleen toegevoegd als hij past:
 * anders is de titel zelf belangrijker dan de merknaam erachter.
 */
export function paginaTitel(titel: string): string {
  const merk = 'Bureau Weerbaar en Veilig';
  if (titel.includes(merk)) return kapAf(titel, MAX_TITEL);
  const volledig = `${titel} | ${merk}`;
  return volledig.length <= MAX_TITEL ? volledig : kapAf(titel, MAX_TITEL);
}

/**
 * Bouwt de meta description uit een samenvatting: hele zinnen zolang ze passen,
 * anders netjes afgekapt op een woordgrens.
 */
export function metaBeschrijving(tekst: string): string {
  const schoon = tekst.replace(/\s+/g, ' ').trim();
  if (schoon.length <= MAX_BESCHRIJVING) return schoon;

  // Probeer op hele zinnen af te breken
  const zinnen = schoon.match(/[^.!?]+[.!?]+/g) ?? [];
  let opgebouwd = '';
  for (const zin of zinnen) {
    if ((opgebouwd + zin).trim().length > MAX_BESCHRIJVING) break;
    opgebouwd += zin;
  }
  const resultaat = opgebouwd.trim();
  return resultaat.length >= 80 ? resultaat : kapAf(schoon, MAX_BESCHRIJVING);
}

/** Korte, zoekwoordgerichte titel voor een training: "Agressietraining {groep} ({niveau})". */
export function trainingTitel(beroepsgroepNaam: string, niveauLabel: string): string {
  return kapAf(`Agressietraining ${beroepsgroepNaam.toLowerCase()} (${niveauLabel.toLowerCase()})`, MAX_TITEL);
}
