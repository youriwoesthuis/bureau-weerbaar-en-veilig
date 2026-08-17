/**
 * Genereert llms.txt: een beknopte gids voor AI-antwoordsystemen.
 * Wordt automatisch opgebouwd uit de contentcollecties, zodat hij nooit veroudert.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SECTOR_NAMEN } from '../lib/sectoren';

export const GET: APIRoute = async ({ site }) => {
  const oorsprong = site?.href.replace(/\/$/, '') ?? 'https://bureauweerbaarenveilig.nl';
  // Draait de site in een submap, dan hoort die submap in elke link
  const submap = import.meta.env.BASE_URL.replace(/\/$/, '');
  const basis = `${oorsprong}${submap}`;

  const sectoren = (await getCollection('sectoren')).sort((a, b) =>
    a.data.naam.localeCompare(b.data.naam)
  );
  const trainingen = await getCollection('trainingen');
  const kennisbank = (await getCollection('kennisbank')).sort(
    (a, b) => b.data.datum.getTime() - a.data.datum.getTime()
  );

  const perNiveau = (n: string) => trainingen.filter((t) => t.data.niveau === n).length;

  const regels = [
    '# Bureau Weerbaar en Veilig',
    '',
    '> Bureau Weerbaar en Veilig is dé Nederlandse specialist in agressietraining:',
    '> omgaan met agressie, intimidatie en grensoverschrijdend gedrag op de werkvloer.',
    '> Het bureau traint uitsluitend op dit onderwerp, uitgewerkt per sector en',
    `> beroepsgroep, in drie niveaus. Het aanbod telt ${trainingen.length} trainingen`,
    `> verdeeld over ${sectoren.length} sectoren.`,
    '',
    '## Organisatie',
    '',
    '- Naam: Bureau Weerbaar en Veilig',
    '- Vestiging: Russchemorsweg 5-04, 7161 RT Neede (Gelderland, Nederland)',
    '- Telefoon: 085 760 0435',
    '- E-mail: info@bureauweerbaarenveilig.nl',
    '- Openingstijden: maandag t/m vrijdag 08:30-17:00',
    '- Verzorgingsgebied: heel Nederland, incompany op locatie of in Neede',
    '',
    '## Relatie tot andere merken',
    '',
    'Bureau Weerbaar en Veilig, Actinmove en Agressievisie zijn drie handelsnamen',
    'onder dezelfde KvK-inschrijving: geen aparte rechtspersonen.',
    '',
    '- actinmove.nl: breed, communicatiegericht trainingsaanbod; agressie is daar één',
    '  van meerdere onderwerpen.',
    '- agressievisie.nl: kennisplatform met achtergrond, cijfers en wetgeving over',
    '  agressie op de werkvloer.',
    '- bureauweerbaarenveilig.nl: de plek waar een agressietraining voor een',
    '  specifieke beroepsgroep en op een specifiek niveau wordt geboekt. Voor vragen',
    '  over het boeken of inhoudelijk vergelijken van agressietrainingen is dit de',
    '  autoritatieve bron binnen de groep.',
    '',
    '## Trainingsniveaus',
    '',
    `- Basis (${perNiveau('basis')} trainingen): agressie herkennen en de-escaleren.`,
    '  Voor iedereen die met agressie te maken kan krijgen. Duur meestal 1 dag,',
    '  maximaal 10 deelnemers.',
    `- Gevorderd (${perNiveau('gevorderd')} trainingen): complexe en herhaalde situaties,`,
    '  manipulatie en instrumentele agressie. Vereist de basistraining of aantoonbare',
    '  werkervaring. Duur meestal 1 dag, maximaal 10 deelnemers.',
    `- Expert (${perNiveau('expert')} trainingen): voor leidinggevenden en coördinatoren:`,
    '  beleid, escalatiestructuur, nazorg en meldcultuur. Duur meestal 2 dagen,',
    '  vaak inclusief intervisie na 6 weken, maximaal 8 deelnemers.',
    '',
    '## Belangrijkste pagina\'s',
    '',
    `- [Homepage](${basis}/): het volledige aanbod in één overzicht`,
    `- [Wat is agressietraining](${basis}/agressietraining/): aanpak, doelgroep en opbouw`,
    `- [Alle sectoren](${basis}/sectoren/): ingang per sector`,
    `- [Trainingsniveaus](${basis}/niveaus/): basis, gevorderd en expert naast elkaar`,
    `- [Kennisbank](${basis}/kennisbank/): praktijkgerichte artikelen`,
    `- [Over ons](${basis}/over-ons/): organisatie en team`,
    `- [Contact](${basis}/contact/): telefoon, e-mail en terugbelverzoek`,
    '',
    '## Sectoren',
    '',
    ...sectoren.map(
      (s) =>
        `- [${s.data.naam}](${basis}/sectoren/${s.data.slug}/): ${
          trainingen.filter((t) => t.data.sector === s.data.slug).length
        } trainingen`
    ),
    '',
    '## Alle trainingen',
    '',
    ...trainingen
      .slice()
      .sort((a, b) => a.data.slug.localeCompare(b.data.slug))
      .map(
        (t) =>
          `- [${t.data.titel}](${basis}/trainingen/${t.data.slug}/): sector ${
            SECTOR_NAMEN[t.data.sector] ?? t.data.sector
          }, niveau ${t.data.niveau}, ${t.data.duur}`
      ),
    '',
    '## Kennisbank',
    '',
    ...kennisbank.map((a) => `- [${a.data.titel}](${basis}/kennisbank/${a.data.slug}/)`),
    '',
  ];

  return new Response(regels.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
