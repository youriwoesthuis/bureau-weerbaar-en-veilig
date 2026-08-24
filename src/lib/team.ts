import { getCollection } from 'astro:content';

/**
 * Wie er voor de groep staat.
 *
 * Iedereen geeft alle trainingen, want het bureau doet maar één onderwerp. Er
 * is dus geen koppeling tussen een training en een trainer: je krijgt dit team,
 * wie er die dag ook staat.
 *
 * Wat wél onderscheid maakt is of iemand in de zaal staat of de organisatie
 * draaiend houdt. Alleen de eerste groep hoort bij de vraag "wie geeft deze
 * training".
 *
 * Deze regel stond in TrainersBlok.astro en wordt nu ook door de
 * Course-markup gebruikt. Twee plekken die hetzelfde moeten zeggen, dus staat
 * hij hier één keer: gaat er een teamlid bij of af, dan verandert het blok op
 * de pagina en de gestructureerde data samen.
 */
export const IN_DE_ZAAL = /trainer|coach|acteur/i;

export async function voorDeGroep() {
  const team = await getCollection('team');
  return team
    .filter((lid) => IN_DE_ZAAL.test(lid.data.rol))
    .sort((a, b) => a.data.volgorde - b.data.volgorde);
}
