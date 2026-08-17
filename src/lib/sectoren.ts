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

export const NIVEAU_LABELS = {
  basis: 'Basis',
  gevorderd: 'Gevorderd',
  expert: 'Expert',
} as const;

export const NIVEAU_BESCHRIJVING = {
  basis:
    'Herkennen en de-escaleren. Voor iedereen die met agressie te maken kan krijgen: signalen lezen, de eigen reactie reguleren en het gesprek terugbrengen.',
  gevorderd:
    'Voor wie de basis beheerst en structureel met zwaardere situaties werkt: complexe casuïstiek, grenzen stellen onder druk, nazorg en melden.',
  expert:
    'Voor leidinggevenden en coördinatoren: beleid, teamnorm, nazorgstructuur, borging en het aanspreken van de eigen organisatie.',
} as const;
