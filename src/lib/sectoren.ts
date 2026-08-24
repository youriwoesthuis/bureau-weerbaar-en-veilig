/** Weergavenamen van de 19 vaste sectoren (sleutel = slug). */
export const SECTOR_NAMEN: Record<string, string> = {
  zorg: 'Zorg',
  onderwijs: 'Onderwijs',
  retail: 'Retail',
  beveiliging: 'Beveiliging',
  'openbaar-vervoer': 'Openbaar vervoer',
  'overheid-handhaving': 'Overheid & handhaving',
  'financiele-dienstverlening': 'Financiële dienstverlening',
  welzijn: 'Welzijn',
  horeca: 'Horeca',
  sportaccommodaties: 'Sportaccommodaties',
  woningcorporaties: 'Woningcorporaties',
  bibliotheken: 'Bibliotheken',
  transport: 'Transport',
  dierenzorg: 'Dierenzorg',
  farmacie: 'Farmacie',
  energie: 'Energie',
  'justitiele-keten': 'Justitiële keten',
  asielopvang: 'Asielopvang',
  uitvaart: 'Uitvaart',
};

/**
 * Zet een aantal om naar tekst met het juiste enkelvoud of meervoud:
 * telwoord(1, 'training', 'trainingen') → "1 training"
 * telwoord(6, 'training', 'trainingen') → "6 trainingen"
 */
export function telwoord(aantal: number, enkelvoud: string, meervoud: string): string {
  return `${aantal} ${aantal === 1 ? enkelvoud : meervoud}`;
}

export const NIVEAU_LABELS = {
  basis: 'Basis',
  gevorderd: 'Gevorderd',
  expert: 'Expert',
} as const;

/*
  De linktekst naar een niveau-overzicht. Uitgeschreven per niveau, omdat het
  label niet aan "trainingen" te plakken is: dat leverde "gevorderdtrainingen"
  op.
*/
export const NIVEAU_LINKTEKST = {
  basis: 'Alle basistrainingen',
  gevorderd: 'Alle gevorderde trainingen',
  expert: 'Alle experttrainingen',
} as const;

export const NIVEAU_BESCHRIJVING = {
  basis:
    'Herkennen en de-escaleren. Voor iedereen die met agressie te maken kan krijgen: signalen lezen, de eigen reactie reguleren en het gesprek terugbrengen.',
  gevorderd:
    'Voor wie de basis beheerst en structureel met zwaardere situaties werkt: complexe casuïstiek, grenzen stellen onder druk, nazorg en melden.',
  expert:
    'Voor leidinggevenden en coördinatoren: beleid, teamnorm, nazorgstructuur, borging en het aanspreken van de eigen organisatie.',
} as const;
