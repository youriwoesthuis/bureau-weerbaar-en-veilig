import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const NIVEAUS = ['basis', 'gevorderd', 'expert'] as const;

const SECTOREN = [
  'zorg',
  'onderwijs',
  'retail',
  'beveiliging',
  'openbaar-vervoer',
  'overheid-handhaving',
  'financiele-dienstverlening',
  'welzijn',
  'horeca',
  'sportaccommodaties',
  'woningcorporaties',
  'bibliotheken',
  'transport',
  'dierenzorg',
  'farmacie',
  'energie',
  'justitiele-keten',
  'asielopvang',
  'uitvaart',
] as const;

const afbeelding = z.object({
  src: z.string(),
  alt: z.string().min(10, 'Alt-tekst moet beschrijvend zijn'),
});

const trainingen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trainingen' }),
  schema: z.object({
    titel: z
      .string()
      .refine((t) => t.toLowerCase().includes('agressietraining'), {
        message: 'Titel moet het woord "agressietraining" bevatten',
      }),
    slug: z.string(),
    sector: z.enum(SECTOREN),
    beroepsgroep: z.string(),
    niveau: z.enum(NIVEAUS),
    duur: z.string(),
    groepsgrootte: z.string(),
    locatie: z.enum(['incompany', 'open-inschrijving', 'beide']),
    locatie_detail: z.string().optional(),
    certificaat: z.string().optional(),
    voorwaarde: z.string().optional(),
    doelgroep: z.string(),
    samenvatting: z
      .string()
      .refine((s) => s.includes('Bureau Weerbaar en Veilig'), {
        message: 'Samenvatting moet "Bureau Weerbaar en Veilig" voluit noemen (GEO-eis)',
      }),
    resultaat: z.array(z.string()).min(4).max(6),
    programma: z.array(z.object({ titel: z.string(), inhoud: z.string() })).min(3),
    werkvormen: z.array(z.string()).min(1),
    veelgestelde_vragen: z
      .array(z.object({ vraag: z.string(), antwoord: z.string() }))
      .min(4)
      .max(6),
    gerelateerd: z.array(z.string()).min(2),
    afbeelding: afbeelding.optional(),
    seo_titel: z.string().max(60).optional(),
    seo_beschrijving: z.string().max(155).optional(),
  }),
});

const sectoren = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sectoren' }),
  schema: z.object({
    naam: z.string(),
    slug: z.enum(SECTOREN),
    samenvatting: z.string(),
    afbeelding: afbeelding.optional(),
    seo_titel: z.string().max(60).optional(),
    seo_beschrijving: z.string().max(155).optional(),
  }),
});

const beroepsgroepen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beroepsgroepen' }),
  schema: z.object({
    naam: z.string(),
    slug: z.string(),
    sector: z.enum(SECTOREN),
    samenvatting: z.string(),
    afbeelding: afbeelding.optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    naam: z.string(),
    rol: z.string(),
    foto: afbeelding.optional(),
    volgorde: z.number(),
  }),
});

export const collections = { trainingen, sectoren, beroepsgroepen, team };
