import { inZin } from './naam';

/**
 * Hulpfuncties voor title en meta description.
 *
 * Google toont ongeveer 60 tekens van een title en ongeveer 155 van een
 * description. Wat daarna komt wordt afgekapt met "…", dus zorgen we dat de
 * belangrijkste woorden vooraan staan en we zelf netjes afbreken op een woord.
 */

/*
  Google kapt een title af rond de 600 pixels, wat ongeveer 60 tot 65 tekens is.
  Die grens stond hier op 60, en dat was te strak: hij dwong afkortingen af die
  twee verschillende beroepsgroepen op dezelfde titel lieten uitkomen — sociale
  dienst participatiewet en sociale dienst uitkeringsinstanties werden allebei
  "Agressietraining sociale dienst".

  Een unieke, volledige titel weegt zwaarder dan een titel die precies binnen de
  weergave past: wordt hij afgekapt in de zoekresultaten, dan is dat cosmetisch,
  maar twee pagina's die niet uit elkaar te houden zijn kost posities.
*/
const MAX_TITEL = 65;

/* Boven deze lengte wordt een titel alsnog ingekort, op een woordgrens. */
const HARDE_GRENS = 75;
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

  /*
    De merknaam wordt alleen toegevoegd als hij past. Past hij niet, dan blijft
    de titel van de pagina zelf staan — onafgekapt.

    Dat laatste was het probleem: deze functie kapte ook de eigen titel af, en
    daarmee verdween juist het onderscheidende staartstuk. Vijf paren pagina's
    kwamen zo op dezelfde titel uit, en vijftien titels eindigden op een
    beletselteken. Een title mag langer zijn dan wat Google toont; wat niet mag,
    is dat twee pagina's niet uit elkaar te houden zijn.

    Alleen boven een harde grens wordt er nog ingekort, en dan netjes op een
    woordgrens.
  */
  const eigen = titel.length <= HARDE_GRENS ? titel : kortAf(titel, HARDE_GRENS);
  if (titel.includes(merk)) return eigen;

  const volledig = `${titel} | ${merk}`;
  return volledig.length <= MAX_TITEL ? volledig : eigen;
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

/**
 * Titel voor een trainingspagina.
 *
 * Deze titel is twee keer eerder fout geweest, en het is de moeite waard om te
 * weten waarom, want de derde versie lost een ander probleem op dan de tweede.
 *
 * De eerste versie kapte de hele zin af op zestig tekens. Omdat het niveau
 * achteraan stond was dát het eerste wat verdween: negenentwintig pagina's
 * kregen dezelfde titel als hun buren.
 *
 * De tweede versie kortte niet meer af en zette het niveau tussen haakjes:
 * "Agressietraining thuiszorg & wijkverpleging (basis)". Alle titels waren toen
 * uniek, en daar leek het mee opgelost.
 *
 * Maar uniek is niet hetzelfde als onderscheidend. Vier pagina's begonnen met
 * exact dezelfde woorden — de beroepsgroeppagina en de drie niveaus — en
 * mikten daarmee alle vier op "agressietraining {beroepsgroep}". Dat is één
 * zoekopdracht met vier kandidaten van dezelfde site. Zo'n stapel dwingt een
 * zoekmachine te kiezen zonder houvast, en de kans is reëel dat de
 * beroepsgroeppagina — juist de pagina die die zoekopdracht hoort te winnen —
 * als een dunne tussenpagina wordt gezien die alleen doorlinkt.
 *
 * Nu claimt de beroepsgroeppagina de algemene term, en zeggen de drie
 * niveaupagina's vooraan waarin ze verschillen. Dat is ook wat hun eigen H1 al
 * deed: die van het expertniveau begint met "Expert agressietraining voor
 * leidinggevenden". Alleen de titel liep achter.
 */
/*
  Beroepsgroepnamen zijn geschreven om op de pagina volledig te zijn, niet om in
  een zoekresultaat te passen: "medewerkers sportaccommodaties & zwembaden" is
  tweeënveertig tekens voordat het woord agressietraining er ook maar bij staat.
  Tweeëntwintig titels liepen daardoor over de zestig.

  Een eerdere versie kortte elke naam los van de andere in, en liep daardoor
  precies tegen de val aan waar de opmerking hierboven voor waarschuwt: "sociale
  dienst & uitkeringsinstanties" en "sociale dienst & Participatiewet" werden
  allebei "sociale dienst". Twee verschillende beroepsgroepen, woordelijk
  dezelfde titel.

  Daarom kijkt deze functie naar alle vierenveertig namen tegelijk. Per naam
  worden de kandidaat-vormen van kort naar lang geprobeerd, en een korte vorm
  wordt alleen gebruikt als geen enkele andere beroepsgroep op diezelfde vorm
  uitkomt. Botst het, dan wint de volledige naam — een titel die in het
  zoekresultaat wordt afgekapt is cosmetisch, twee pagina's die niet uit elkaar
  te houden zijn kost posities.

  De uitkomst wordt één keer per build berekend en daarna hergebruikt.
*/
function kandidaten(naam: string): string[] {
  const zonderMedewerkers = naam.replace(/^medewerkers\s+/i, '');
  const hoofdterm = zonderMedewerkers.split(/\s*[&,]\s*|\s+en\s+/)[0].trim();
  return [hoofdterm, zonderMedewerkers, naam]
    .filter((v, i, a) => v.length >= 6 && a.indexOf(v) === i)
    .sort((a, b) => a.length - b.length);
}

let korteNamen: Map<string, string> | null = null;

async function groepsnamen(): Promise<Map<string, string>> {
  if (korteNamen) return korteNamen;

  const { getCollection } = await import('astro:content');
  const alle = (await getCollection('beroepsgroepen')).map((b) => inZin(b.data.naam));

  korteNamen = new Map(
    alle.map((naam) => {
      const eigen = kandidaten(naam);
      const kort = eigen.find(
        (vorm) =>
          /* Uniek zodra geen ándere beroepsgroep deze vorm ook kan aannemen. */
          !alle.some((ander) => ander !== naam && kandidaten(ander).includes(vorm))
      );
      return [naam, kort ?? naam];
    })
  );
  return korteNamen;
}

export async function trainingTitel(
  beroepsgroepNaam: string,
  niveau: 'basis' | 'gevorderd' | 'expert'
): Promise<string> {
  const sjabloon = {
    basis: (g: string) => `Basistraining agressie voor ${g}`,
    gevorderd: (g: string) => `Gevorderde agressietraining voor ${g}`,
    expert: (g: string) => `Agressietraining leidinggevenden ${g}`,
  }[niveau];

  const vol = inZin(beroepsgroepNaam);
  if (sjabloon(vol).length <= 60) return sjabloon(vol);

  const kort = (await groepsnamen()).get(vol) ?? vol;
  return sjabloon(kort);
}

/**
 * Kort een naam in op een woordgrens, zonder beletselteken.
 *
 * In een meta description hoort een puntje: daar lees je een afgebroken zin. In
 * een title niet — daar staat een naam, en "asielzoekerscentra &… (basis)" leest
 * als een fout. Losse voegwoorden aan het eind gaan er dus ook af.
 */
function kortAf(tekst: string, max: number): string {
  const schoon = tekst.replace(/\s+/g, ' ').trim();
  if (schoon.length <= max) return schoon;

  let stuk = schoon.slice(0, max);
  const spatie = stuk.lastIndexOf(' ');
  if (spatie > 0) stuk = stuk.slice(0, spatie);

  // Blijft er een voegwoord of leesteken over, dan valt dat mee weg
  return stuk.replace(/[\s,;:–-]*(&|en|of|met|voor|in|bij)?[\s,;:–-]*$/i, '').trim();
}
