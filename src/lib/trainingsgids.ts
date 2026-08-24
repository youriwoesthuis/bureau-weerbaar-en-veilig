/**
 * De trainingsgids: hulp bij het regelen van een training.
 *
 * Dit is bewust géén kennisbank. Achtergrond over agressie — cijfers, wetgeving,
 * onderzoek, methodieken — hoort bij agressievisie.nl, het kennisplatform van de
 * groep. Zie MERKGROEP.md hoofdstuk 2, regel 3.
 *
 * Wat hier wél thuishoort is het enige onderwerp dat geen van de drie merken en
 * geen van de concurrenten bezet: hoe je als opdrachtgever een training kiest,
 * voorbereidt, verantwoordt en laat beklijven. Dat is kennis over trainen, niet
 * over agressie.
 *
 * Eén bron voor het menu, de hub, de onderlinge links en llms.txt.
 */

export interface GidsPagina {
  slug: string;
  /** De vraag zoals een opdrachtgever hem stelt. Wordt de H1. */
  titel: string;
  /** Eén regel voor de kaart op de hub en voor llms.txt. */
  kort: string;
  /** Voor de <title> en het menu: korter dan de vraag. */
  kortelabel: string;
}

export const TRAININGSGIDS: GidsPagina[] = [
  {
    slug: 'welk-niveau',
    titel: 'Welk niveau heeft mijn team nodig?',
    kort: 'keuzehulp die op basis van vier vragen uitkomt op basis, gevorderd of expert',
    kortelabel: 'Welk niveau',
  },
  {
    slug: 'de-trainingsdag',
    titel: 'Hoe ziet een trainingsdag eruit?',
    kort: 'het verloop van een dag, de werkvormen en wat er van deelnemers gevraagd wordt',
    kortelabel: 'De trainingsdag',
  },
  {
    slug: 'team-voorbereiden',
    titel: 'Hoe bereid ik mijn team voor?',
    kort: 'wat je vooraf regelt en aankondigt, en hoe je weerstand voor bent',
    kortelabel: 'Team voorbereiden',
  },
  {
    slug: 'na-de-training',
    titel: 'Wat gebeurt er na de training?',
    kort: 'hoe je voorkomt dat een training een losse dag blijft',
    kortelabel: 'Na de training',
  },
  {
    slug: 'intern-regelen',
    titel: 'Hoe krijg ik dit intern geregeld?',
    kort: 'de onderbouwing waarmee je binnen je organisatie akkoord krijgt',
    kortelabel: 'Intern regelen',
  },
];

export const gidsPagina = (slug: string) => TRAININGSGIDS.find((p) => p.slug === slug);
