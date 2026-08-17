# Redirects: URL-mapping oud → nieuw

**Status: geïmplementeerd (Fase 6).** De volledige mapping staat in
`src/lib/redirects.ts` en telt **149 regels**. Bij elke build genereert
`src/pages/[...pad].astro` daaruit een doorverwijspagina, en controleert
`node scripts/controleer.mjs` of elk doel ook echt bestaat.

Basis-URL oud: `https://bureauwenv.wizzinc-dev2.nl`: bij livegang wordt dit het
definitieve domein `bureauweerbaarenveilig.nl`.

## Hoe de redirects technisch werken

GitHub Pages kan geen server-side 301-statuscode sturen. Daarom krijgt elke oude URL
een klein HTML-bestand met drie elementen:

1. `<meta http-equiv="refresh" content="0; url=...">`: de bezoeker gaat direct door;
2. `<link rel="canonical" href="...">`: Google behandelt dit als een permanente
   verhuizing en verplaatst de waarde van de oude URL naar de nieuwe;
3. `<meta name="robots" content="noindex, follow">`: de oude URL zelf verdwijnt uit
   de index, de link naar de nieuwe pagina wordt wél gevolgd.

Verhuist de site later naar hosting mét servertoegang (bijvoorbeeld Netlify of een
eigen server), dan is dezelfde mapping één-op-één om te zetten naar echte
301-redirects.

## Correcties die in de mapping zijn verwerkt

Tijdens de migratie bleken drie fouten op de oude site, die hier zijn rechtgezet:

| Wat | Op de oude site | Nu |
|---|---|---|
| Verpleeghuizen | Titels van gevorderd en expert verwisseld | Op het juiste niveau gezet volgens de vaste niveaudefinities |
| Persoonlijk begeleiders (expert) | Pagina bevat inhoud over gedragsdeskundigen | Inhoud naar gedragsdeskundigen; expertniveau voor PB'ers nieuw geschreven |
| Gedragsdeskundigen (expert) | Pagina is duplicaat van woonbegeleiding-expert | Oude URL wijst nu naar woonbegeleiding-expert |

**Canonieke slugvorm trainingen:** `/trainingen/agressietraining-{beroepsgroep}-{niveau}/`
De huidige site gebruikt drie slugpatronen door elkaar; hieronder is alles genormaliseerd.
Waar oud = nieuw staat "ongewijzigd": daar is geen redirect nodig.

## 1. Trainingen (132)

### Zorg

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-huisartsassistenten-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-huisartsassistenten-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-huisartsassistenten-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-ambulancemedewerkers-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-ambulancemedewerkers-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-ambulancemedewerkers-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-voor-thuiszorgmedewerkers-verzorgenden-en-wijkverpleegkundigen/ | /trainingen/agressietraining-thuiszorg-wijkverpleging-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-thuiszorgmedewerkers-verzorgenden-en-wijkverpleegkundigen/ | /trainingen/agressietraining-thuiszorg-wijkverpleging-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-de-thuiszorg-en-wijkverpleging/ | /trainingen/agressietraining-thuiszorg-wijkverpleging-expert/ | normalisatie |
| /trainingen/agressietraining-voor-zorgmedewerkers-in-verpleeghuizen-en-ouderenzorg/ | /trainingen/agressietraining-verpleeghuizen-ouderenzorg-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-leidinggevenden-in-verpleeghuizen-en-ouderenzorg/ | /trainingen/agressietraining-verpleeghuizen-ouderenzorg-gevorderd/ | normalisatie: ⚠ titel/niveau-verwisseling controleren |
| /trainingen/expert-agressietraining-voor-zorgmedewerkers-in-verpleeghuizen-en-ouderenzorg/ | /trainingen/agressietraining-verpleeghuizen-ouderenzorg-expert/ | normalisatie: ⚠ idem |
| /trainingen/agressietraining-voor-medewerkers-van-de-ggd-en-publieke-gezondheidszorg/ | /trainingen/agressietraining-ggd-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-van-de-ggd-en-publieke-gezondheidszorg/ | /trainingen/agressietraining-ggd-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-de-ggd-en-publieke-gezondheidszorg/ | /trainingen/agressietraining-ggd-expert/ | normalisatie |
| /trainingen/agressietraining-begeleiders-woonbegeleiding-gehandicaptenzorg-basis/ | /trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-begeleiders-en-agogisch-medewerkers-in-de-woonbegeleiding-gehandicaptenzorg/ | /trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-de-woonbegeleiding-gehandicaptenzorg/ | /trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-expert/ | normalisatie |
| /trainingen/agressietraining-voor-persoonlijk-begeleiders-pb-ers-in-de-gehandicaptenzorg/ | /trainingen/agressietraining-persoonlijk-begeleiders-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-persoonlijk-begeleiders-pb-ers-in-de-gehandicaptenzorg/ | /trainingen/agressietraining-persoonlijk-begeleiders-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-over-persoonlijk-begeleiders-in-de-gehandicaptenzorg/ | /trainingen/agressietraining-persoonlijk-begeleiders-expert/ | normalisatie |
| /trainingen/agressietraining-voor-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg/ | /trainingen/agressietraining-gedragsdeskundigen-orthopedagogen-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg/ | /trainingen/agressietraining-gedragsdeskundigen-orthopedagogen-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-over-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg/ | /trainingen/agressietraining-gedragsdeskundigen-orthopedagogen-expert/ | normalisatie |

### Onderwijs

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-leraren-mbo-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-leraren-mbo-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-leraren-mbo-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-leraren-voortgezet-onderwijs-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-leraren-voortgezet-onderwijs-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-leraren-voortgezet-onderwijs-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-voor-leerplichtambtenaren/ | /trainingen/agressietraining-leerplichtambtenaren-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-leerplichtambtenaren/ | /trainingen/agressietraining-leerplichtambtenaren-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-over-leerplichtambtenaren/ | /trainingen/agressietraining-leerplichtambtenaren-expert/ | normalisatie |

### Retail

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-winkelmedewerkers-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-winkelmedewerkers-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-winkelmedewerkers-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-kassamedewerkers-baliemedewerkers-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-kassamedewerkers-baliemedewerkers-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-kassamedewerkers-baliemedewerkers-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-filiaalmanagers-teamleiders-retail/ | /trainingen/agressietraining-filiaalmanagers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-filiaalmanagers/ | /trainingen/agressietraining-filiaalmanagers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-leidinggevenden-expert/ | /trainingen/agressietraining-filiaalmanagers-expert/ | onduidelijke oude slug |

### Overheid & handhaving

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-medewerkers-bij-de-sociale-dienst-en-uitkeringsinstanties/ | /trainingen/agressietraining-sociale-dienst-uitkeringsinstanties-basis/ | normalisatie: ⚠ evt. samenvoegen met Participatiewet-reeks |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-bij-de-sociale-dienst-en-uitkeringsinstanties/ | /trainingen/agressietraining-sociale-dienst-uitkeringsinstanties-gevorderd/ | normalisatie: ⚠ idem |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-de-sociale-dienst-en-uitkeringsinstanties/ | /trainingen/agressietraining-sociale-dienst-uitkeringsinstanties-expert/ | normalisatie: ⚠ idem |
| /trainingen/agressietraining-voor-medewerkers-van-de-sociale-dienst-en-participatiewet/ | /trainingen/agressietraining-sociale-dienst-participatiewet-basis/ | normalisatie: ⚠ idem |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-van-de-sociale-dienst-en-participatiewet/ | /trainingen/agressietraining-sociale-dienst-participatiewet-gevorderd/ | normalisatie: ⚠ idem |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-de-sociale-dienst-en-participatiewet/ | /trainingen/agressietraining-sociale-dienst-participatiewet-expert/ | normalisatie: ⚠ idem |
| /trainingen/agressietraining-voor-medewerkers-aan-het-gemeenteloket-en-de-publieksbalie/ | /trainingen/agressietraining-gemeenteloket-publieksbalie-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-aan-het-gemeenteloket-en-de-publieksbalie/ | /trainingen/agressietraining-gemeenteloket-publieksbalie-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-gemeenten-en-publieke-dienstverlening/ | /trainingen/agressietraining-gemeenteloket-publieksbalie-expert/ | normalisatie |
| /trainingen/agressietraining-voor-medewerkers-bij-de-belastingdienst/ | /trainingen/agressietraining-belastingdienst-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-bij-de-belastingdienst/ | /trainingen/agressietraining-belastingdienst-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-medewerkers-bij-de-belastingdienst/ | /trainingen/agressietraining-belastingdienst-expert/ | normalisatie: ⚠ titel zegt "medewerkers", expert = leidinggevenden; controleren |
| /trainingen/agressietraining-voor-handhavers-en-boas/ | /trainingen/agressietraining-handhavers-boas-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-handhavers-en-boas/ | /trainingen/agressietraining-handhavers-boas-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-de-handhaving/ | /trainingen/agressietraining-handhavers-boas-expert/ | normalisatie |
| /trainingen/agressietraining-voor-parkeerwachters-en-toezichthouders-in-de-openbare-ruimte/ | /trainingen/agressietraining-parkeerwachters-toezichthouders-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-parkeerwachters-en-toezichthouders-in-de-openbare-ruimte/ | /trainingen/agressietraining-parkeerwachters-toezichthouders-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-over-parkeerwachters-en-toezichthouders-in-de-openbare-ruimte/ | /trainingen/agressietraining-parkeerwachters-toezichthouders-expert/ | normalisatie |
| /trainingen/agressietraining-voor-medewerkers-vergunningverlening-en-bezwaar-beroep/ | /trainingen/agressietraining-vergunningverlening-bezwaar-beroep-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-vergunningverlening-en-bezwaar-beroep/ | /trainingen/agressietraining-vergunningverlening-bezwaar-beroep-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-vergunningverlening-en-bezwaar-beroep/ | /trainingen/agressietraining-vergunningverlening-bezwaar-beroep-expert/ | normalisatie |

### Financiële dienstverlening

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-incasso-en-schuldbehandelaars/ | /trainingen/agressietraining-incasso-schuldhulpverlening-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-incasso-en-schuldbehandelaars/ | /trainingen/agressietraining-incasso-schuldhulpverlening-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-incasso-en-schuldhulpverlening/ | /trainingen/agressietraining-incasso-schuldhulpverlening-expert/ | normalisatie |
| /trainingen/agressietraining-voor-verzekeringsmedewerkers/ | /trainingen/agressietraining-verzekeringsmedewerkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-verzekeringsmedewerkers/ | /trainingen/agressietraining-verzekeringsmedewerkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-de-verzekeringsbranche/ | /trainingen/agressietraining-verzekeringsmedewerkers-expert/ | normalisatie |
| /trainingen/agressietraining-voor-hypotheek-en-kredietadviseurs-copy/ | /trainingen/agressietraining-hypotheek-kredietadviseurs-basis/ | `-copy`-slug opschonen |
| /trainingen/gevorderde-agressietraining-voor-hypotheek-en-kredietadviseurs/ | /trainingen/agressietraining-hypotheek-kredietadviseurs-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-hypotheek-en-kredietadvies/ | /trainingen/agressietraining-hypotheek-kredietadviseurs-expert/ | normalisatie |
| /trainingen/agressietraining-voor-bankmedewerkers-en-baliepersoneel/ | /trainingen/agressietraining-bankmedewerkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-bankmedewerkers-en-baliepersoneel/ | /trainingen/agressietraining-bankmedewerkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-de-financiele-dienstverlening-copy/ | /trainingen/agressietraining-bankmedewerkers-expert/ | `-copy`-slug opschonen |

### Openbaar vervoer

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-treinpersoneel-conducteurs-en-metro-en-trambestuurders/ | /trainingen/agressietraining-treinpersoneel-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-treinpersoneel-conducteurs-en-metro-en-trambestuurders/ | /trainingen/agressietraining-treinpersoneel-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-het-rail-en-stadsvervoer/ | /trainingen/agressietraining-treinpersoneel-expert/ | normalisatie |
| /trainingen/agressietraining-buschauffeurs-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-buschauffeurs-gevorderd/ | ongewijzigd |: |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-het-ov/ | /trainingen/agressietraining-buschauffeurs-expert/ | normalisatie |

### Transport

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-taxichauffeurs/ | /trainingen/agressietraining-taxichauffeurs-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-taxichauffeurs/ | /trainingen/agressietraining-taxichauffeurs-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-taxibedrijven-en-personenvervoerders/ | /trainingen/agressietraining-taxichauffeurs-expert/ | normalisatie |
| /trainingen/agressietraining-voor-bezorgers-in-pakket-en-maaltijdbezorging/ | /trainingen/agressietraining-pakket-maaltijdbezorgers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-bezorgers-in-pakket-en-maaltijdbezorging/ | /trainingen/agressietraining-pakket-maaltijdbezorgers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-bezorgdiensten/ | /trainingen/agressietraining-pakket-maaltijdbezorgers-expert/ | normalisatie |

### Beveiliging

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-horecaportiers-uitsmijters-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-horecaportiers-uitsmijters-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-horecaportiers-uitsmijters-expert/ | ongewijzigd |: |
| /trainingen/agressietraining-evenementenbeveiligers-basis/ | ongewijzigd |: |
| /trainingen/agressietraining-evenementenbeveiligers-gevorderd/ | ongewijzigd |: |
| /trainingen/agressietraining-evenementenbeveiligers-expert/ | ongewijzigd |: |

### Horeca

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-bediening-gastheren-en-gastvrouwen-in-de-horeca/ | /trainingen/agressietraining-horeca-bediening-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-bediening-gastheren-en-gastvrouwen-in-de-horeca/ | /trainingen/agressietraining-horeca-bediening-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-horecamanagers-en-leidinggevenden/ | /trainingen/agressietraining-horeca-bediening-expert/ | normalisatie |

### Welzijn

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-maatschappelijk-werkers/ | /trainingen/agressietraining-maatschappelijk-werkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-maatschappelijk-werkers/ | /trainingen/agressietraining-maatschappelijk-werkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-het-maatschappelijk-werk/ | /trainingen/agressietraining-maatschappelijk-werkers-expert/ | normalisatie |

### Woningcorporaties

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-buurtbeheerders-en-opzichters-bij-woningcorporaties/ | /trainingen/agressietraining-buurtbeheerders-opzichters-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-buurtbeheerders-en-opzichters-bij-woningcorporaties/ | /trainingen/agressietraining-buurtbeheerders-opzichters-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-over-buurtbeheerders-en-opzichters-bij-woningcorporaties/ | /trainingen/agressietraining-buurtbeheerders-opzichters-expert/ | normalisatie |
| /trainingen/agressietraining-voor-medewerkers-klantcontact-en-woonconsulenten-bij-woningcorporaties/ | /trainingen/agressietraining-woonconsulenten-klantcontact-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-klantcontact-en-woonconsulenten-bij-woningcorporaties/ | /trainingen/agressietraining-woonconsulenten-klantcontact-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-woningcorporaties/ | /trainingen/agressietraining-woonconsulenten-klantcontact-expert/ | normalisatie |

### Sportaccommodaties

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-medewerkers-in-sportaccommodaties-en-zwembaden/ | /trainingen/agressietraining-sportaccommodaties-zwembaden-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-in-sportaccommodaties-en-zwembaden/ | /trainingen/agressietraining-sportaccommodaties-zwembaden-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-sportaccommodaties-en-zwembaden/ | /trainingen/agressietraining-sportaccommodaties-zwembaden-expert/ | normalisatie |

### Bibliotheken

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-bibliotheekmedewerkers-met-een-balie-en-publieksfunctie/ | /trainingen/agressietraining-bibliotheekmedewerkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-bibliotheekmedewerkers-met-een-balie-en-publieksfunctie/ | /trainingen/agressietraining-bibliotheekmedewerkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-vestigingsmanagers-en-leidinggevenden-in-bibliotheken/ | /trainingen/agressietraining-bibliotheekmedewerkers-expert/ | normalisatie |

### Justitiële keten

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-reclasseringsmedewerkers/ | /trainingen/agressietraining-reclasseringsmedewerkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-reclasseringsmedewerkers/ | /trainingen/agressietraining-reclasseringsmedewerkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-de-reclassering/ | /trainingen/agressietraining-reclasseringsmedewerkers-expert/ | normalisatie |
| /trainingen/agressietraining-voor-medewerkers-van-justitiele-jeugdinrichtingen/ | /trainingen/agressietraining-justitiele-jeugdinrichtingen-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-van-justitiele-jeugdinrichtingen/ | /trainingen/agressietraining-justitiele-jeugdinrichtingen-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-in-justitiele-jeugdinrichtingen/ | /trainingen/agressietraining-justitiele-jeugdinrichtingen-expert/ | normalisatie |

### Energie

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-medewerkers-van-energie-en-nutsbedrijven-met-huisbezoeken/ | /trainingen/agressietraining-energie-nutsbedrijven-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-van-energie-en-nutsbedrijven-met-huisbezoeken/ | /trainingen/agressietraining-energie-nutsbedrijven-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-energie-en-nutsbedrijven/ | /trainingen/agressietraining-energie-nutsbedrijven-expert/ | normalisatie |

### Farmacie

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-apotheekmedewerkers/ | /trainingen/agressietraining-apotheekmedewerkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-apotheekmedewerkers/ | /trainingen/agressietraining-apotheekmedewerkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-apothekers-en-leidinggevenden-van-apotheken/ | /trainingen/agressietraining-apotheekmedewerkers-expert/ | normalisatie |

### Dierenzorg

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-dierenartsen-en-medewerkers-van-dierklinieken/ | /trainingen/agressietraining-dierenartsen-dierklinieken-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-dierenartsen-en-medewerkers-van-dierklinieken/ | /trainingen/agressietraining-dierenartsen-dierklinieken-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-praktijkhouders-en-leidinggevenden-van-dierklinieken/ | /trainingen/agressietraining-dierenartsen-dierklinieken-expert/ | normalisatie |

### Asielopvang

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-medewerkers-van-asielzoekerscentra-en-coa-locaties/ | /trainingen/agressietraining-asielopvang-coa-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-medewerkers-van-asielzoekerscentra-en-coa-locaties/ | /trainingen/agressietraining-asielopvang-coa-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-leidinggevenden-bij-asielzoekerscentra-en-coa-locaties/ | /trainingen/agressietraining-asielopvang-coa-expert/ | normalisatie |

### Uitvaart

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /trainingen/agressietraining-voor-uitvaartmedewerkers-en-begrafenisondernemers/ | /trainingen/agressietraining-uitvaartmedewerkers-basis/ | normalisatie |
| /trainingen/gevorderde-agressietraining-voor-uitvaartmedewerkers-en-begrafenisondernemers/ | /trainingen/agressietraining-uitvaartmedewerkers-gevorderd/ | normalisatie |
| /trainingen/expert-agressietraining-voor-uitvaartondernemers-en-leidinggevenden-in-de-uitvaartbranche/ | /trainingen/agressietraining-uitvaartmedewerkers-expert/ | normalisatie |

## 2. Kennisbank intern (28): boom vervalt

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /kennisbank_intern/weerbaarheid-op-de-werkvloer/ | /kennisbank/weerbaarheid-op-de-werkvloer-een-vaardigheid-die-je-samen-ontwikkelt/ | duplicaat |
| /kennisbank_intern/generatieverschillen-op-de-werkvloer/ | /kennisbank/ (of actinmove-besluit) | duplicaat van te beoordelen artikel |
| /kennisbank_intern/grensoverschrijdend-gedrag-herkennen/ | /kennisbank/grensoverschrijdend-gedrag-herkennen-en-aanpakken/ | duplicaat (nieuwe geschoonde slug) |
| /kennisbank_intern/opvang-en-nazorg-bieden-2/ | /kennisbank/waarom-goede-opvang-en-nazorg-na-een-incident-het-verschil-maakt/ | duplicaat |
| /kennisbank_intern/omgaan-met-telefonische-agressie-2/ | /kennisbank/professioneel-blijven-aan-de-lijn/ | duplicaat |
| /kennisbank_intern/omgaan-met-telefonische-agressie-professioneel-rustig-en-met-regie-reageren/ | /kennisbank/professioneel-blijven-aan-de-lijn/ | duplicaat |
| /kennisbank_intern/telefonische-agressie-training/ | /kennisbank/professioneel-blijven-aan-de-lijn/ | duplicaat/aanbodtekst |
| /kennisbank_intern/omgaan-met-verward-gedrag-bij-middelengebruik-2/ | /kennisbank/werken-met-mensen-onder-invloed/ | duplicaat |
| /kennisbank_intern/omgaan-met-onbegrepen-gedrag-bij-dementie-2/ | /kennisbank/omgaan-met-onbegrepen-gedrag-bij-dementie/ | duplicaat (nieuwe geschoonde slug) |
| /kennisbank_intern/veilig-huisbezoek-2/ | /kennisbank/de-stoplichtmethode-voor-huisbezoeken-wanneer-is-het-rood-oranje-of-groen/ | overlapt |
| /kennisbank_intern/ait-basistraining-stevig-samenwerken/ | /kennisbank/het-belang-van-een-agressie-interventie-team/ | overlapt |
| /kennisbank_intern/sociale-veiligheid-op-de-werkvloer-2/ | /kennisbank/wanneer-voelt-een-organisatie-echt-veilig/ | dichtstbijzijnd alternatief: óf omwerken tot eigen artikel |
| /kennisbank_intern/omgaan-met-fysieke-agressie-2/ | /kennisbank/ | geen tegenhanger: óf omwerken tot eigen artikel |
| /kennisbank_intern/hospitality-training-2/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/mediationvaardigheden-conflicten-oplossen/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/grip-op-gedoe-2/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/verzuimpreventie-en-inzetbaarheidsgesprekken/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/overtuigend-presenteren-met-rust/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/praktisch-leiderschap-sturen-met-rust-richting-en-resultaat/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/lastige-gesprekken-voeren-2/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/grip-op-stress-en-werkdruk-2/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/feedback-training-2/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/effectief-communiceren-2/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/assertiviteitstraining-met-rust-en-duidelijkheid/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/supermarkt-safari-gezonder-kiezen/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/ontspannen-in-10-minuten/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/ademhaling-en-rust/ | /kennisbank/ | actinmove-domein |
| /kennisbank_intern/mindfulness-op-het-werk/ | /kennisbank/ | actinmove-domein |

## 3. Kennisbank: slugs schonen + vervallers

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /kennisbank/grensoverschrijdend-gedrag-herkennen-en-aanpakken-2/ | /kennisbank/grensoverschrijdend-gedrag-herkennen-en-aanpakken/ | `-2`-suffix schonen |
| /kennisbank/omgaan-met-onbegrepen-gedrag-bij-dementie-blog/ | /kennisbank/omgaan-met-onbegrepen-gedrag-bij-dementie/ | `-blog`-suffix schonen |
| /kennisbank/zelfdoding-is-de-nummer-een-doodsoorzaak-onder-tieners-en-twintigers/ | /kennisbank/ | vervalt (besluit 2b) |
| overige 2b-artikelen (na akkoord) | /kennisbank/ | actinmove-thema, vervalt hier |

Alle overige /kennisbank/-artikelen uit categorie "behouden": **URL ongewijzigd**.

## 4. Team (8)

| Oude URL (pad) | Nieuwe URL (pad) | Reden |
|---|---|---|
| /team/{alle 8 namen}/ | /over-ons/#team (voorstel) | teampagina's worden sectie op /over-ons/: wacht op besluit |

## 5. Nog te controleren bij livegang (Fase 6)

- `/category/trainingen/...`-paden uit de brief staan **niet** in deze sitemap-export;
  op de live site controleren of ze bestaan en zo ja: 301 naar de nieuwe trainings-URL.
- Homepage, /over-ons/, /contact/ en eventuele sectorpagina's van de oude site:
  paden vaststellen en mappen op de nieuwe structuur.
- Redirect-implementatie op GitHub Pages: geen server-301's mogelijk → oplossing met
  meta-refresh + `<link rel="canonical">` per oude URL, vast te leggen in Fase 6.
