/**
 * De identiteit van de organisatie in gestructureerde data.
 *
 * Een zoekmachine of AI-systeem bouwt uit alle pagina's samen een netwerk van
 * entiteiten. Dat werkt alleen als hetzelfde ding overal hetzelfde
 * identificatienummer draagt.
 *
 * Dat was hier niet zo. De sitebrede Organization had helemaal geen `@id`, en
 * op elke trainingspagina stond de organisatie nog twee keer los opgevoerd als
 * `provider` en als `recognizedBy` — telkens met alleen een naam en een URL.
 * Voor een consument van die data waren dat drie naamloze knooppunten die
 * toevallig dezelfde naam dragen, niet één organisatie die op
 * driehonderdtachtig plekken voorkomt.
 *
 * Nu draagt de sitebrede node `ORGANISATIE_ID` en verwijst al het andere daar
 * alleen nog naar. Dat scheelt ook opmaak op elke pagina.
 *
 * Het anker (`#organisatie`) is geen willekeurige toevoeging. Zonder anker zou
 * het `@id` gelijk zijn aan de URL van de homepage, en dan zeg je dat de
 * webpagina en de organisatie hetzelfde ding zijn. Dat zijn ze niet: de een is
 * een document, de ander een bedrijf.
 */
const OORSPRONG = 'https://bureauweerbaarenveilig.nl';

export const ORGANISATIE_ID = `${OORSPRONG}/#organisatie`;

/** Verwijzing naar de organisatie, voor gebruik in provider, worksFor en recognizedBy. */
export const ORGANISATIE = { '@id': ORGANISATIE_ID } as const;

/**
 * Het `@id` van een persoon, met hetzelfde onderscheid: `#persoon` scheidt de
 * mens van de pagina waarop diens verhaal staat.
 */
export const persoonId = (paginaUrl: string) => `${paginaUrl.replace(/\/$/, '/')}#persoon`;
