# Content-inventaris: Bureau Weerbaar en Veilig

**Fase 1: Inventarisatie** · Bron: `sitemap-export.tsv` (export 2026-08-10)
Status: concept, wacht op goedkeuring opdrachtgever.

## Totaaloverzicht

| Type | Aantal | Opmerking |
|---|---|---|
| Trainingspagina's (`/trainingen/`) | 132 | 44 beroepsgroepen × 3 niveaus: alle 19 sectoren gedekt |
| Kennisbank (`/kennisbank/`) | 80 | merendeel praktijkgericht; deel breder dan agressie → beoordelen |
| Kennisbank intern (`/kennisbank_intern/`) | 28 | oudere duplicaten + niet-agressie-onderwerpen → grotendeels vervallen |
| Teampagina's (`/team/`) | 8 | nog te besluiten: onder /over-ons/ of vervallen |
| **Totaal** | **248** | de projectbrief noemt 204: het bestand bevat er 248 (content bijgekomen na de brief) |

**Niet in de sitemap-export aanwezig** (wel verwacht): homepage, /over-ons/, /contact/,
sectorpagina's, en de in de brief genoemde `/category/trainingen/...`-duplicaten.
Vermoedelijk sluit de sitemap-plugin die uit, of zijn de category-paden inmiddels weg.
→ Controleren op de live dev-site in Fase 5/6; voor nu geen blokkade.

**Statuslegenda**
- `migreren`: 1-op-1 mee naar de nieuwe site (met nieuwe canonieke URL waar nodig)
- `beoordelen`: inhoudelijk breder dan agressie, of mogelijk duplicaat; keuze nodig
- `vervallen`, niet migreren; 301-redirect naar het best passende alternatief
- `duplicaat`: zelfde inhoud bestaat elders; redirect naar de bron van waarheid

---

## 1. Trainingen per sector (132 pagina's)

Elke beroepsgroep heeft op de huidige site exact drie niveaus. De slugvormen zijn
inconsistent (drie patronen door elkaar: `...-basis/-gevorderd/-expert`,
`gevorderde-agressietraining-voor-...` en `expert-agressietraining-voor-...`).
Voorstel nieuwe canonieke vorm: `/trainingen/agressietraining-{beroepsgroep}-{niveau}/`
: volledige mapping in `redirects.md`.

### Zorg (8 beroepsgroepen, 24 pagina's)

| Beroepsgroep | Niveaus aanwezig | Huidige slugs (verkort) | Status |
|---|---|---|---|
| Huisartsassistenten | basis, gevorderd, expert | `agressietraining-huisartsassistenten-*` | migreren |
| Ambulancemedewerkers | basis, gevorderd, expert | `agressietraining-ambulancemedewerkers-*` | migreren |
| Thuiszorg, verzorgenden & wijkverpleegkundigen | basis, gevorderd, expert | `...-thuiszorgmedewerkers-verzorgenden-en-wijkverpleegkundigen` / expert: `...-in-de-thuiszorg-en-wijkverpleging` | migreren |
| Zorgmedewerkers verpleeghuizen & ouderenzorg | basis, gevorderd, expert | ⚠ naamgeving verwisseld: *gevorderd* heet "voor leidinggevenden", *expert* heet "voor zorgmedewerkers": inhoudelijk controleren en rechtzetten | migreren + corrigeren |
| GGD & publieke gezondheidszorg | basis, gevorderd, expert | `...-medewerkers-van-de-ggd-en-publieke-gezondheidszorg` | migreren |
| Begeleiders woonbegeleiding (gehandicaptenzorg) | basis, gevorderd, expert | `agressietraining-begeleiders-woonbegeleiding-gehandicaptenzorg-basis` e.a. | migreren |
| Persoonlijk begeleiders (gehandicaptenzorg) | basis, gevorderd, expert | `...-persoonlijk-begeleiders-pb-ers-in-de-gehandicaptenzorg` / expert: `...-leidinggevenden-over-persoonlijk-begeleiders...` | migreren |
| Gedragsdeskundigen & orthopedagogen (gehandicaptenzorg) | basis, gevorderd, expert | `...-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg` | migreren |

> NB uit de brief: verpleeghuizen stond op de oude site onder thuiszorg-ouderenzorg maar
> hoort in het menu onder **Zorg**: in de nieuwe structuur ondergebracht bij sector zorg.

### Onderwijs (3 beroepsgroepen, 9 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Leraren MBO | basis, gevorderd, expert | migreren |
| Leraren voortgezet onderwijs | basis, gevorderd, expert | migreren |
| Leerplichtambtenaren | basis, gevorderd, expert | migreren: sector-toewijzing dubbel mogelijk (onderwijs óf overheid); voorstel: **onderwijs** |

### Retail (3 beroepsgroepen, 9 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Winkelmedewerkers | basis, gevorderd, expert | migreren |
| Kassamedewerkers & baliemedewerkers | basis, gevorderd, expert | migreren |
| Filiaalmanagers & teamleiders | basis, gevorderd, expert | migreren: ⚠ expert-slug is kaal (`expert-agressietraining-leidinggevenden-expert`), nieuwe slug nodig |

### Overheid & handhaving (7 beroepsgroepen, 21 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Sociale dienst & uitkeringsinstanties | basis, gevorderd, expert | migreren: ⚠ zie vraag hieronder |
| Sociale dienst & Participatiewet | basis, gevorderd, expert | migreren: ⚠ overlapt sterk met de vorige; samenvoegen of bewust twee doelgroepen? |
| Gemeenteloket & publieksbalie | basis, gevorderd, expert | migreren: expert heet "leidinggevenden bij gemeenten en publieke dienstverlening" |
| Belastingdienst | basis, gevorderd, expert | migreren: ⚠ expert-slug zegt "voor medewerkers" i.p.v. leidinggevenden; controleren |
| Handhavers & boa's | basis, gevorderd, expert | migreren |
| Parkeerwachters & toezichthouders openbare ruimte | basis, gevorderd, expert | migreren |
| Vergunningverlening & bezwaar/beroep | basis, gevorderd, expert | migreren |

### Financiële dienstverlening (4 beroepsgroepen, 12 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Incasso- & schuldbehandelaars | basis, gevorderd, expert | migreren |
| Verzekeringsmedewerkers | basis, gevorderd, expert | migreren |
| Hypotheek- & kredietadviseurs | basis, gevorderd, expert | migreren: ⚠ basis-slug eindigt op `-copy` |
| Bankmedewerkers & baliepersoneel | basis, gevorderd, expert | migreren: ⚠ expert-slug eindigt op `-copy` ("financiële dienstverlening") |

### Openbaar vervoer (2 beroepsgroepen, 6 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Treinpersoneel, conducteurs, metro- & trambestuurders | basis, gevorderd, expert (rail- & stadsvervoer) | migreren |
| Buschauffeurs | basis, gevorderd, expert (leidinggevenden OV) | migreren |

### Transport (2 beroepsgroepen, 6 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Taxichauffeurs | basis, gevorderd, expert | migreren |
| Bezorgers pakket- & maaltijdbezorging | basis, gevorderd, expert | migreren |

### Beveiliging (2 beroepsgroepen, 6 pagina's)

| Beroepsgroep | Niveaus | Status |
|---|---|---|
| Horecaportiers & uitsmijters | basis, gevorderd, expert | migreren |
| Evenementenbeveiligers | basis, gevorderd, expert | migreren |

### Overige sectoren (13 beroepsgroepen, 39 pagina's)

| Sector | Beroepsgroep | Niveaus | Status |
|---|---|---|---|
| Welzijn | Maatschappelijk werkers | basis, gevorderd, expert | migreren |
| Horeca | Bediening, gastheren & gastvrouwen | basis, gevorderd, expert (horecamanagers) | migreren |
| Sportaccommodaties | Medewerkers sportaccommodaties & zwembaden | basis, gevorderd, expert | migreren |
| Woningcorporaties | Buurtbeheerders & opzichters | basis, gevorderd, expert | migreren |
| Woningcorporaties | Klantcontact & woonconsulenten | basis, gevorderd, expert | migreren |
| Bibliotheken | Bibliotheekmedewerkers (balie & publiek) | basis, gevorderd, expert | migreren |
| Justitiële keten | Reclasseringsmedewerkers | basis, gevorderd, expert | migreren |
| Justitiële keten | Medewerkers justitiële jeugdinrichtingen | basis, gevorderd, expert | migreren |
| Energie | Medewerkers energie- & nutsbedrijven (huisbezoeken) | basis, gevorderd, expert | migreren |
| Farmacie | Apotheekmedewerkers | basis, gevorderd, expert | migreren |
| Dierenzorg | Dierenartsen & medewerkers dierklinieken | basis, gevorderd, expert | migreren |
| Asielopvang | Medewerkers asielzoekerscentra & COA-locaties | basis, gevorderd, expert | migreren |
| Uitvaart | Uitvaartmedewerkers & begrafenisondernemers | basis, gevorderd, expert | migreren |

---

## 2. Kennisbank (`/kennisbank/`, 80 artikelen)

Beoordeeld op de contentdifferentiatie uit de projectbrief (3.2): praktijkgericht en
trainingsgerelateerd = behouden; awareness/cijfers = agressievisie.nl; breed
niet-agressie = actinmove.nl.

### 2a. Behouden: praktijkgericht, agressie/weerbaarheid (55)

| Slug | Onderwerp |
|---|---|
| met-vertrouwen-op-pad | veilig buitenwerk |
| goed-zorgen-na-een-ingrijpend-incident | nazorg |
| professioneel-blijven-aan-de-lijn | telefonische agressie |
| grensoverschrijdend-gedrag-herkennen-en-aanpakken-2 | grensoverschrijdend gedrag: ⚠ `-2`-suffix, interne versie bestaat ook; deze is de bron van waarheid, slug schonen |
| professioneel-reageren-in-gespannen-situaties | de-escalatie |
| spanning-ombuigen-naar-samenwerking | de-escalatie |
| van-controle-naar-contact | beveiliging/handhaving |
| weerbaarheid-op-de-werkvloer-een-vaardigheid-die-je-samen-ontwikkelt | weerbaarheid: ⚠ interne versie bestaat ook |
| professioneel-blijven-als-het-gesprek-uit-de-hand-loopt | de-escalatie |
| professioneel-en-bekwaam-blijven-als-de-stoppen-doorslaan | escalatie |
| werken-met-mensen-onder-invloed | middelengebruik |
| omgaan-met-onbegrepen-gedrag-bij-dementie-blog | dementie: ⚠ `-blog`-suffix, slug schonen |
| het-belang-van-een-agressie-interventie-team | AIT |
| waarom-goede-opvang-en-nazorg-na-een-incident-het-verschil-maakt | nazorg |
| waarom-een-meld-en-aangiftebeleid-bij-agressie-onmisbaar-is | meldbeleid |
| conflicten-begeleiden-voordat-ze-escaleren | conflicthantering |
| wat-professionele-weerbaarheid-echt-betekent | weerbaarheid |
| grenzen-stellen-zonder-spanning-te-creeren | grenzen stellen |
| wat-te-doen-als-emoties-oplopen | de-escalatie |
| hoe-je-rustig-blijft-in-stressvolle-situaties | zelfregulatie |
| hoe-teams-elkaar-sterker-maken-in-lastige-situaties | teamweerbaarheid |
| weerbaarheid-in-de-zorg-professioneel-blijven-met-aandacht | zorg |
| de-balans-tussen-begrip-en-begrenzing | grenzen stellen |
| wanneer-emoties-het-gesprek-overnemen-wat-helpt-jou-om-professioneel-te-blijven | de-escalatie |
| waarom-veiligheid-in-teams-begint-bij-eerlijkheid | sociale veiligheid |
| wat-doe-je-als-een-collega-over-jouw-grens-gaat | interne agressie |
| wat-sterke-teams-doen-als-het-spannend-wordt | teamweerbaarheid |
| als-spanning-blijft-hangen-na-een-incident | nazorg |
| de-collega-die-rustig-bleef-tijdens-het-oefengesprek | training/rollenspel |
| waarom-beleid-pas-werkt-als-gedrag-volgt | agressiebeleid |
| hoe-je-beleid-levend-houdt-in-de-dagelijkse-praktijk | agressiebeleid |
| de-rol-van-leiderschap-in-een-veilige-organisatiecultuur | expert-thema |
| wanneer-voelt-een-organisatie-echt-veilig | sociale veiligheid |
| de-korte-nabespreking-die-werkt | nazorg |
| waarom-melden-begint-bij-vertrouwen | meldbeleid |
| wat-leiders-kunnen-leren-van-incidenten | expert-thema |
| grenzen-stellen-zonder-schuldgevoel | grenzen stellen |
| wanneer-beleid-echt-gedragen-wordt-van-document-naar-dagelijks-gedrag | agressiebeleid |
| leren-als-organisatie-ontwikkeling-stopt-niet-na-de-training | borging na training |
| wat-je-ziet-als-je-aanbelt-signalen-herkennen-bij-onrust | huisbezoek |
| de-rol-van-organisaties-in-veilig-werken-buiten-kantoor | buitenwerk |
| flexibele-contracten-en-veiligheid-in-wisselende-teams | sociale veiligheid |
| de-rekensom-van-onveiligheid-wat-een-incidentje-jouw-organisatie-echt-kost | kosten van agressie |
| de-stille-bewaker-hoe-je-werkplek-agressie-kan-uitlokken-of-juist-voorkomen | preventie |
| de-emotionele-ehbo-koffer-van-je-team-wat-spreek-je-af-voordat-een-gesprek-ontspoort | teamafspraken |
| een-gat-in-het-rooster-is-een-gat-in-je-zorgplicht | zorgplicht |
| de-digitale-klap-hoe-je-professioneel-blijft-als-de-agressie-via-e-mail-komt | digitale agressie |
| de-sluipmoordenaar-van-het-team-waarom-roddelen-en-buitensluiten-gevaarlijker-zijn-dan-een-schreeuwende-klant | interne agressie |
| de-ramptoerist-met-een-camera-wat-doe-je-als-je-werk-tijdens-een-crisis-wordt-gefilmd | filmen/omstanders |
| de-stille-sabotage-herkennen-van-en-omgaan-met-de-passief-agressieve-leidinggevende | interne agressie |
| de-stoplichtmethode-voor-huisbezoeken-wanneer-is-het-rood-oranje-of-groen | huisbezoek |
| lsd-in-de-spreekkamer-hoe-je-regie-houdt-als-de-deur-dicht-is | gesprekstechniek |
| herken-de-fase-begrijp-het-type-de-agressieladder-en-het-verschil-tussen-frustratie-en-manipulatie | agressieladder |
| waarom-niet-de-gebeurtenis-maar-je-gedachte-de-stress-bepaalt-het-g-model | G-model |
| je-hoofd-resetten-hoe-de-matrixmethode-emotionele-lading-neutraliseert | matrixmethode |

### 2b. Beoordelen: breder dan agressie of mogelijk verkeerd merk (24)

| Slug | Onderwerp | Voorstel |
|---|---|---|
| zelfdoding-is-de-nummer-een-doodsoorzaak-onder-tieners-en-twintigers | awareness, sensitief | vervallen hier; onderwerp past (indien al gewenst) bij agressievisie.nl |
| 7-krachtige-strategieen-voor-sterke-teams | teamontwikkeling | actinmove-thema |
| samen-werken-aan-vertrouwen | teamontwikkeling | actinmove-thema |
| balans-energie-en-regie-in-drukke-tijden | stress/werkdruk | actinmove-thema |
| richting-geven-met-rust-vertrouwen-en-resultaat | leiderschap | actinmove-thema: ⚠ bijna-duplicaat van `richting-geven-met-rust-helderheid-en-vertrouwen` |
| richting-geven-met-rust-helderheid-en-vertrouwen | leiderschap | idem: één van beide vervalt sowieso |
| rustig-duidelijk-en-effectief-communiceren | communicatie breed | actinmove-thema |
| gastvrij-en-professioneel-handelen | hospitality | actinmove-thema |
| samenwerken-zonder-energie-te-verliezen | samenwerken | actinmove-thema |
| balans-houden-in-een-volle-werkdag | werkdruk | actinmove-thema |
| hoe-bouw-je-een-sterke-cultuur | cultuur breed | actinmove-thema |
| omgaan-met-generatieverschillen-samenwerken-tussen-jong-en-oud-2 | generatieverschillen | actinmove-thema: ⚠ interne versie bestaat ook |
| waarom-waardering-geen-luxe-is-maar-noodzaak | waardering | actinmove-thema |
| de-kracht-van-een-goede-dagstart | werkritme | actinmove-thema |
| waarom-nieuwsgierigheid-je-beste-werkvaardigheid-is | soft skills | actinmove-thema |
| verandering-vraagt-veerkracht-maar-vooral-realisme | verandering | actinmove-thema |
| de-kracht-van-voorspelbaar-leiderschap-waarom-duidelijk-gedrag-vertrouwen-wekt | leiderschap | twijfelgeval: raakt veilige cultuur; keuze aan opdrachtgever |
| de-rol-van-hr-in-moderne-organisatieontwikkeling-van-structuur-naar-gedrag | HR breed | actinmove-thema |
| teams-die-zichzelf-sturen-hebben-duidelijke-kaders-nodig | zelfsturing | actinmove-thema |
| wanneer-werk-en-prive-in-elkaar-overlopen | werk-privé | actinmove-thema |
| wanneer-ontwikkeling-belangrijker-wordt-dan-doorgroeien | loopbaan | actinmove-thema |
| als-de-robot-meeluistert | AI/privacy | twijfelgeval |
| ethische-keuzes-zonder-protocol-wat-je-doet-als-regels-niet-toereikend-zijn | ethiek | twijfelgeval: raakt handelen onder druk |
| verantwoord-online-gedrag-hoe-teams-samen-normen-bepalen-voor-communicatie | online gedrag | twijfelgeval: raakt digitale agressie |
| het-korte-lontje-van-nederland-waarom-agressie-in-2025-een-systeemprobleem-is-en-geen-incident | cijfers/trends | awareness → agressievisie.nl-thema; twijfelgeval |

### 2c. Duplicaat binnen /kennisbank/ (1)

| Slug | Opmerking |
|---|---|
| richting-geven-met-rust-* (2×) | zie 2b: één vervalt, of beide naar actinmove |

---

## 3. Kennisbank intern (`/kennisbank_intern/`, 28 items)

Dit zijn geen artikelen maar (oudere) trainings-/aanbodbeschrijvingen. Voorstel:
**geen van deze pagina's migreren**; per item een redirect naar het beste alternatief.

### 3a. Duplicaat van een /kennisbank/-artikel → redirect daarnaartoe (8)

| Interne slug | Bron van waarheid in /kennisbank/ |
|---|---|
| weerbaarheid-op-de-werkvloer | weerbaarheid-op-de-werkvloer-een-vaardigheid-die-je-samen-ontwikkelt |
| generatieverschillen-op-de-werkvloer | omgaan-met-generatieverschillen-samenwerken-tussen-jong-en-oud-2 (of vervalt mee naar actinmove) |
| grensoverschrijdend-gedrag-herkennen | grensoverschrijdend-gedrag-herkennen-en-aanpakken-2 |
| opvang-en-nazorg-bieden-2 | waarom-goede-opvang-en-nazorg-na-een-incident-het-verschil-maakt |
| omgaan-met-telefonische-agressie-2 | professioneel-blijven-aan-de-lijn |
| omgaan-met-telefonische-agressie-professioneel-rustig-en-met-regie-reageren | professioneel-blijven-aan-de-lijn |
| omgaan-met-verward-gedrag-bij-middelengebruik-2 | werken-met-mensen-onder-invloed |
| omgaan-met-onbegrepen-gedrag-bij-dementie-2 | omgaan-met-onbegrepen-gedrag-bij-dementie-blog |

### 3b. Agressie-gerelateerd maar geen duplicaat → beoordelen (5)

| Interne slug | Voorstel |
|---|---|
| telefonische-agressie-training | vervallen → redirect naar kennisbank-artikel telefonische agressie of naar relevante training |
| sociale-veiligheid-op-de-werkvloer-2 | inhoud bekijken; mogelijk omwerken tot kennisbank-artikel |
| omgaan-met-fysieke-agressie-2 | inhoud bekijken; mogelijk omwerken tot kennisbank-artikel |
| veilig-huisbezoek-2 | overlapt met 2 huisbezoek-artikelen → redirect |
| ait-basistraining-stevig-samenwerken | overlapt met AIT-artikel → redirect |

### 3c. Niet-agressie (actinmove-domein) → vervallen (15)

hospitality-training-2 · mediationvaardigheden-conflicten-oplossen · grip-op-gedoe-2 ·
verzuimpreventie-en-inzetbaarheidsgesprekken · overtuigend-presenteren-met-rust ·
praktisch-leiderschap-sturen-met-rust-richting-en-resultaat · lastige-gesprekken-voeren-2 ·
grip-op-stress-en-werkdruk-2 · feedback-training-2 · effectief-communiceren-2 ·
assertiviteitstraining-met-rust-en-duidelijkheid · supermarkt-safari-gezonder-kiezen ·
ontspannen-in-10-minuten · ademhaling-en-rust · mindfulness-op-het-werk

Redirect: naar `/kennisbank/` (er is geen inhoudelijke tegenhanger op deze site, en
linken naar actinmove.nl vanaf vervallen URL's zou bezoekers het merk uit sturen).

---

## 4. Teampagina's (`/team/`, 8)

marieke-van-leeuwen · koen-van-weerden · youri-woesthuis · sandra-den-dulk ·
cindy-woesthuis · jeroen-woesthuis · lucien-ost · constant-cornelissen

De sitestructuur uit de brief kent geen `/team/`. **Voorstel:** teamleden tonen als
sectie op `/over-ons/` (foto + korte bio, geen losse pagina's) en de acht oude URL's
301'en naar `/over-ons/#team`. Alternatief: losse pagina's onder `/over-ons/team/{naam}/`
behouden. → Keuze aan opdrachtgever.

---

## 5. Openstaande beslissingen voor akkoord Fase 1

1. **Teampagina's**: sectie op /over-ons/ (voorstel) of losse pagina's behouden?
2. **Sociale dienst**: "uitkeringsinstanties" en "Participatiewet" zijn twee bijna
   identieke beroepsgroepen (6 pagina's). Samenvoegen tot één, of bewust apart?
3. **Kennisbank "beoordelen"-lijst (2b, 24 artikelen)**: akkoord dat de
   actinmove-thema's hier vervallen? De vier twijfelgevallen graag expliciet.
4. **kennisbank_intern**: akkoord dat deze boom volledig vervalt met redirects (§3)?
5. **Verpleeghuizen**: gevorderd/expert-naamgeving lijkt verwisseld: mag ik dit bij
   de migratie rechtzetten volgens de vaste niveaudefinities?
6. **Aantal**: sitemap bevat 248 URL's i.p.v. 204 uit de brief: klopt het dat er
   content is bijgekomen en dit bestand de actuele stand is?
