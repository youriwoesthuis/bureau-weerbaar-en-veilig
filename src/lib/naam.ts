/**
 * Een naam midden in een zin zetten.
 *
 * Beroepsgroep- en sectornamen staan in de content met een hoofdletter, omdat
 * ze daar op zichzelf staan: "GGD & publieke gezondheidszorg", "Thuiszorg &
 * wijkverpleging". Midden in een zin hoort die hoofdletter weg — "de
 * agressietraining voor thuiszorg & wijkverpleging".
 *
 * Dat gebeurde met toLowerCase() op de hele naam, en dat is precies één woord
 * te ver:
 *
 *   GGD & publieke gezondheidszorg                → ggd & publieke ...
 *   Medewerkers asielzoekerscentra & COA-locaties → ... & coa-locaties
 *   Persoonlijk begeleiders (VG)                  → persoonlijk begeleiders (vg)
 *   Sociale dienst & Participatiewet              → ... & participatiewet
 *
 * Dat stond op negenentwintig pagina's, waaronder in de <title> — dus in het
 * zoekresultaat zelf. Een afkorting die je kleinschrijft leest als een typefout,
 * en "ggd" is bovendien geen woord.
 *
 * De regel hier is simpeler dan een lijst met uitzonderingen, en dekt alle vier
 * de gevallen: alleen het eerste woord gaat naar kleine letters, en de rest
 * blijft staan zoals het is geschreven. Dat werkt omdat het Nederlands in zo'n
 * naam alleen het eerste woord een hoofdletter geeft — elke hoofdletter verderop
 * is dus bewust gezet, of het nu een afkorting is (COA, VG) of een eigennaam
 * (Participatiewet).
 *
 * Begint de naam zelf met een afkorting, dan blijft ook die overeind.
 */
export function inZin(naam: string): string {
  const eersteWoord = naam.match(/^\S+/)?.[0];
  if (!eersteWoord) return naam;

  /*
    Twee of meer hoofdletters aan het begin: een afkorting, laat staan. Eén
    hoofdletter is gewoon het begin van een woord. Een eventueel staartje na
    een koppelteken telt niet mee, zodat "COA-locaties" ook wordt herkend.
  */
  const kop = eersteWoord.split(/[-‑]/)[0];
  if (kop.length >= 2 && kop === kop.toUpperCase() && /[A-ZÀ-Ü]/.test(kop)) {
    return naam;
  }

  return naam.charAt(0).toLowerCase() + naam.slice(1);
}
