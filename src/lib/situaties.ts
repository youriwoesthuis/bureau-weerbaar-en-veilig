/**
 * De praktijksituaties uit alle trainingen, bij elkaar.
 *
 * Onder het kopje "Herkenbare praktijksituaties" staat in elke training een
 * rijtje met wat er in dat vak écht gebeurt: "Je wilt de woning verlaten maar
 * wordt tegengehouden", "Conflicten tussen reizigers in een rijdend voertuig",
 * "Verbale intimidatie op het moment van de besluitmededeling". Bij elkaar
 * ruim vijfhonderd stuks.
 *
 * Dat is het sterkste materiaal dat deze site heeft en het stond nergens
 * anders dan als opsomming halverwege een trainingspagina. Elke concurrent kan
 * opschrijven dat hij professionele agressietraining verzorgt; niemand kan
 * zomaar deze vijfhonderd zinnen opschrijven, want daar moet je de vakken voor
 * kennen.
 *
 * Ze worden hier uit de markdown zelf gehaald in plaats van overgetypt, zodat
 * er niets kan gaan afwijken van de trainingspagina waar ze vandaan komen.
 */
import { getCollection } from 'astro:content';

export interface Situatie {
  tekst: string;
  /** Voor wie dit dagelijks werk is — de context die de zin scherp maakt. */
  beroepsgroep: string;
  sector: string;
  /** Waar deze situatie vandaan komt, zodat er altijd doorgelinkt kan worden. */
  slug: string;
}

const KOP = /^##\s+Herkenbare praktijksituaties\s*$/m;

/**
 * Leest de opsomming die direct onder het kopje staat. Stopt bij de eerstvolgende
 * lege regel gevolgd door iets dat geen opsommingsteken is, zodat een training
 * die het kopje anders opbouwt gewoon niets oplevert in plaats van rommel.
 */
function leesSituaties(body: string): string[] {
  const match = KOP.exec(body);
  if (!match) return [];

  const rest = body.slice(match.index + match[0].length);
  const regels: string[] = [];
  for (const regel of rest.split('\n')) {
    const schoon = regel.trim();
    if (!schoon) {
      if (regels.length) break;
      continue;
    }
    if (!schoon.startsWith('- ')) break;
    regels.push(schoon.slice(2).trim());
  }
  return regels;
}

export async function alleSituaties(): Promise<Situatie[]> {
  const trainingen = await getCollection('trainingen');
  const beroepsgroepen = await getCollection('beroepsgroepen');
  const naamVan = new Map(beroepsgroepen.map((b) => [b.data.slug, b.data.naam]));

  return trainingen.flatMap((t) =>
    leesSituaties(t.body ?? '').map((tekst) => ({
      tekst,
      beroepsgroep: naamVan.get(t.data.beroepsgroep) ?? t.data.beroepsgroep,
      sector: t.data.sector,
      slug: t.data.slug,
    }))
  );
}

/**
 * Een selectie die elke beroepsgroep hoogstens één keer laat zien.
 *
 * Zonder die regel komen er vier situaties uit de thuiszorg achter elkaar te
 * staan, en dan lijkt het aanbod smal terwijl het juist breed is. Nu laat een
 * rij van tien zien dat dit over tien verschillende vakken gaat.
 *
 * De keuze is deterministisch: bij elke build dezelfde volgorde, zodat een
 * pagina niet bij elke publicatie verandert zonder dat er iets is gewijzigd.
 */
export async function situatieSelectie(aantal: number, sector?: string): Promise<Situatie[]> {
  const alle = (await alleSituaties()).filter((s) => !sector || s.sector === sector);

  const perGroep = new Map<string, Situatie[]>();
  for (const s of alle) {
    const lijst = perGroep.get(s.beroepsgroep) ?? [];
    lijst.push(s);
    perGroep.set(s.beroepsgroep, lijst);
  }

  /*
    Uit elke beroepsgroep de langste situatie: die is bijna altijd de meest
    specifieke. "Scheldende klanten" zegt minder dan "Je wilt de woning
    verlaten maar wordt tegengehouden", en het is die tweede soort waar deze
    site het van moet hebben.
  */
  const kandidaten = [...perGroep.entries()]
    .map(([, lijst]) => lijst.slice().sort((a, b) => b.tekst.length - a.tekst.length)[0])
    .sort((a, b) => a.beroepsgroep.localeCompare(b.beroepsgroep));

  /* Gelijkmatig over het alfabet spreiden in plaats van de eerste tien pakken. */
  const stap = Math.max(1, Math.floor(kandidaten.length / aantal));
  const gekozen: Situatie[] = [];
  for (let i = 0; gekozen.length < aantal && i < kandidaten.length; i += stap) {
    gekozen.push(kandidaten[i]);
  }
  return gekozen;
}
