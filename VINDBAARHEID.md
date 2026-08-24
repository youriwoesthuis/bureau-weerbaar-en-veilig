# Vindbaarheid: stand van zaken en wat er nog nodig is

Bijgewerkt op 24 augustus 2026.

Dit bestand gaat over gevonden worden — door Google en door AI-antwoordsystemen
zoals ChatGPT, Perplexity en Google AI Overviews. Het beschrijft wat er in de
code geregeld is, wat dat oplevert, en welke stappen alleen door een mens gezet
kunnen worden.

## 1. De kern in één alinea

De techniek is af. Wat de site nu mist is niet nog een schema-type of nog een
tekstuele verbetering, maar **bewijs van buitenaf dat dit bedrijf bestaat**.
Een gloednieuw domein zonder vermeldingen elders is voor een zoekmachine en
voor een taalmodel een lege huls: de inhoud kan kloppen, maar er is geen enkele
onafhankelijke bron die bevestigt dat Bureau Weerbaar en Veilig een echte
organisatie is. Alles in hoofdstuk 4 hieronder gaat daarover, en dat is waar de
opbrengst nu zit.

## 2. Wat er geregeld is

### Controles die je zelf kunt draaien

Na `npm run build`:

```bash
node scripts/controleer-seo.mjs
```

Titels, omschrijvingen, koppen, canonicals, gestructureerde data, interne
links en paginagewicht over de hele gebouwde site.

```bash
node scripts/controleer-geo.mjs
```

Of elke pagina opent met een antwoord dat een AI-systeem kan overnemen: lang
genoeg om iets te zeggen, kort genoeg om geciteerd te worden, met de
organisatie voluit en zonder beweringen die niemand kan natrekken.

```bash
node scripts/controleer-uniciteit.mjs
```

Hoeveel de 132 trainingspagina's onderling op elkaar lijken. Meet de eigen
tekst, dus zonder de blokken die op elke pagina hetzelfde zijn.

### Stand op 24 augustus 2026

| Wat | Stand |
|---|---|
| Pagina's met inhoud | 223 |
| Dubbele titels of omschrijvingen | 0 |
| Pagina's zonder h1, h2 of canonical | 0 |
| GEO-bevindingen | 0 op 223 pagina's |
| Onderlinge overlap trainingen | 33,3% gemiddeld, niets boven 50% |
| Pagina's met alleen een breadcrumb aan schema | 15, allemaal hubs |
| Interne links per pagina | minimaal 5 |

De overlap van 33% is ruim binnen wat veilig is. De grens waar Google naar
doorway pages gaat kijken ligt rond de 60 tot 65 procent. Hier hoeft dus niets
meer aan te gebeuren.

### Gestructureerde data

- Elke training: `Course` met `hasCourseInstance`, `EducationalAudience`,
  `EducationalOccupationalCredential` en `FAQPage`.
- De negen mensen die voor de groep staan zijn `instructor` bij elke training,
  met een `@id` dat overeenkomt met hun `Person` op hun eigen teampagina. Eén
  persoon die op 132 trainingen staat, geen 132 losse naamsvermeldingen.
- Beroepsgroeppagina's: `ItemList` met de drie niveaus.
- Sectorpagina's: `ItemList` met de beroepsgroepen.
- Sitebreed: `Organization` en `LocalBusiness`, met `sameAs` naar actinmove.nl
  en agressievisie.nl.

## 3. Wat bewust niet gedaan is

**Meer schema op de overgebleven 15 pagina's.** Dat zijn overzichtspagina's en
de trainingsgids. Schema helpt een zoekmachine bestaande inhoud te begrijpen;
het verhoogt geen posities op een domein zonder autoriteit. Verder opvoeren zou
ruis zijn.

**llms.txt uitbreiden.** Het bestand staat er en wordt automatisch bijgewerkt,
maar geen enkele grote crawler gebruikt het als indexatieprotocol. Het kan geen
kwaad, het levert niets op, en er hoort geen tijd meer in.

**De trainingsteksten verder uit elkaar trekken.** Gemeten en te licht
bevonden: zie de overlapcijfers hierboven.

## 4. Wat er nog nodig is — dit kan alleen een mens

In volgorde van opbrengst.

### 4.1 Laat de zusterdomeinen naar deze site linken

De snelste manier om vertrouwen over te hevelen. Actinmove.nl en
agressievisie.nl bestaan al jaren en hebben een geschiedenis bij Google; deze
site heeft die niet.

- Op **agressievisie.nl**: een link naar bureauweerbaarenveilig.nl waar het
  over trainingen gaat. Nu verwijst agressievisie alleen door naar
  actinmove.nl. Zie MERKGROEP.md hoofdstuk 3 en 7.
- Op **actinmove.nl**: op de over-onspagina of in de voettekst een harde
  tekstlink, met de handelsnaamrelatie erbij benoemd.
- Werk de `llms.txt` van agressievisie.nl bij zodra die link er staat.

### 4.2 Google Bedrijfsprofiel en bedrijvengidsen

Externe bronnen die naam, adres en telefoonnummer bevestigen zijn voor
AI-systemen het bewijs dat een bedrijf echt bestaat.

- Maak een Google Bedrijfsprofiel aan op Russchemorsweg 5-04, 7161 RT Neede.
- Claim vermeldingen op drie tot vijf Nederlandse bedrijvengidsen.
- **Belangrijk:** naam, adres en telefoonnummer moeten overal exact gelijk
  zijn aan wat er in het `LocalBusiness`-schema van deze site staat. Tot op de
  spatie. Afwijkingen maken de bevestiging waardeloos.

Gegevens zoals ze nu op de site staan:

```
Bureau Weerbaar en Veilig
Russchemorsweg 5-04
7161 RT Neede
085 760 0435
info@bureauweerbaarenveilig.nl
maandag t/m vrijdag 08:30–17:00
```

### 4.3 LinkedIn-profielen bij de teamleden

De teampagina's hebben `Person`-markup, maar die verwijst nergens naartoe.
Een `sameAs` naar het LinkedIn-profiel koppelt de persoon op deze site aan een
persoon die elders al bestaat. Voor een nieuw merk leunen zoekmachines zwaar op
de personen erachter.

**Nodig:** de LinkedIn-URL's van de teamleden. Zodra die er zijn, is het een
klein veld in de teambestanden.

### 4.4 Verhuizen van GitHub Pages

De 158 oude URL's van de WordPress-site worden nu doorverwezen met een
meta-refresh, omdat GitHub Pages geen echte doorverwijzing kan sturen. Dat
werkt, maar een crawler moet de pagina eerst laden voordat hij de verhuizing
ziet, en dat vertraagt het overdragen van de opgebouwde waarde.

De build schrijft al een `_redirects`-bestand. Op Netlify of Cloudflare Pages
werken alle 158 doorverwijzingen meteen als echte 301, zonder dat er iets
overgetypt hoeft te worden. Agressievisie.nl draait al op Netlify.

### 4.5 KvK-naam voor de schema-opmaak

De drie merken vallen onder dezelfde KvK-inschrijving. In het
`Organization`-schema hoort `legalName` te staan met de KvK-naam, gelijk op
alle drie de sites, plus een `sameAs` naar de KvK-registerpagina. Dat is voor
een zoekmachine de hardste bevestiging die er is.

**Nodig:** de KvK-naam en het KvK-nummer.

## 5. Wat er nog van de opdrachtgever moet komen

- LinkedIn-URL's van de teamleden (4.3)
- KvK-naam en -nummer (4.5)
- Echte trainingsfoto's
- Prijzen of een prijsindicatie
- Het logo
