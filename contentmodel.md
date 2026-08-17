# Contentmodel: Bureau Weerbaar en Veilig

**Fase 2: concept**, wacht op goedkeuring. Gebaseerd op de projectbrief (hoofdstuk 5)
en gecontroleerd tegen twee echte pagina's van de live dev-site
(winkelmedewerkers basis + gevorderd): de opbouw daarvan is consistent.

## Uitgangspunten

- Alle content leeft als markdown-bestanden in de repo (Astro content collections,
  geen CMS). Eén bestand = één pagina.
- Elk bestand heeft **frontmatter** (de gestructureerde velden bovenaan, tussen `---`)
  en een **body** (de lopende tekst).
- Uit de frontmatter worden automatisch gegenereerd: `<title>`, meta description,
  schema.org (Course, FAQPage, BreadcrumbList), interne links en de niveau-switcher.
  Per pagina overschrijfbaar via optionele velden `seo_titel` / `seo_beschrijving`.
- **Geen verzonnen feiten.** Duur, groepsgrootte, certificaat e.d. komen van de
  bestaande site of van de opdrachtgever. Prijzen staan bewust nergens in het model.

## Collectie 1: `trainingen/` (132 bestanden)

Bestandsnaam = slug, bijv. `agressietraining-winkelmedewerkers-basis.md`.

```yaml
---
titel:            # H1: bevat beroepsgroep + "agressietraining"
slug:             # gelijk aan bestandsnaam
sector:           # één van 19 vaste sectorsleutels (zie collectie 2)
beroepsgroep:     # sleutel van de beroepsgroep (zie collectie 3)
niveau:           # basis | gevorderd | expert
duur:             # bijv. "1 dag": feit van bestaande site
groepsgrootte:    # bijv. "maximaal 10 deelnemers"
locatie:          # incompany | open-inschrijving | beide
locatie_detail:   # vrije tekst, bijv. "op eigen locatie of bij Bureau Weerbaar en Veilig in Neede"
certificaat:      # bijv. "deelnamecertificaat": alleen als de bron dit noemt
voorwaarde:       # optioneel: bijv. "afgeronde basistraining" (gevorderd/expert)
doelgroep:        # één zin: wie is dit voor
samenvatting:     # 2-3 zinnen, direct citeerbaar antwoord (GEO): opent de pagina
resultaat:        # lijst van 4-6 concrete leeruitkomsten
programma:        # lijst van blokken {titel, inhoud}: thema's, geen verzonnen tijden
werkvormen:       # lijst: bijv. realistische oefeningen, casuïstiek, trainingsacteur
veelgestelde_vragen:  # 4-6 paren {vraag, antwoord}
gerelateerd:      # slugs: de 2 andere niveaus + 2-3 aanpalende beroepsgroepen
afbeelding:       # pad + verplichte alt-tekst {src, alt}
seo_titel:        # optioneel, overschrijft gegenereerde title (max ~60 tekens)
seo_beschrijving: # optioneel, overschrijft gegenereerde description (max ~155)
---
Body: "Waarom deze training" + herkenbare praktijksituaties + eventuele verdieping.
```

**Vaste bodystructuur** (volgorde ligt vast, zodat elke pagina hetzelfde leest):
1. Samenvatting (uit frontmatter, als openingsblok: het GEO-antwoord)
2. Waarom deze training: het probleem van déze beroepsgroep
3. Herkenbare praktijksituaties (opsomming)
4. Wat je leert (uit `resultaat`)
5. Programma (uit `programma`)
6. Praktische informatie (duur, groepsgrootte, locatie, certificaat, voorwaarde)
7. Veelgestelde vragen (uit `veelgestelde_vragen` → FAQPage-schema)
8. Andere niveaus + gerelateerde trainingen (uit `gerelateerd`)

**Validatieregels** (afgedwongen in de build: bouwfout als het niet klopt):
- `titel` bevat het woord "agressietraining" en de beroepsgroep
- `niveau` ∈ {basis, gevorderd, expert}; `sector` en `beroepsgroep` bestaan echt
- `resultaat` 4–6 items; `veelgestelde_vragen` 4–6 paren
- `samenvatting` 2–3 zinnen; noemt "Bureau Weerbaar en Veilig" voluit (GEO-eis)
- `gerelateerd` bevat de twee andere niveaus van dezelfde beroepsgroep
- `afbeelding.alt` verplicht en beschrijvend

## Collectie 2: `sectoren/` (19 bestanden)

```yaml
---
naam:             # bijv. "Zorg"
slug:             # zorg | onderwijs | retail | beveiliging | openbaar-vervoer |
                  # overheid-handhaving | financiele-dienstverlening | welzijn |
                  # horeca | sportaccommodaties | woningcorporaties | bibliotheken |
                  # transport | dierenzorg | farmacie | energie | justitiele-keten |
                  # asielopvang | uitvaart
samenvatting:     # 2-3 zinnen GEO-antwoord: agressieproblematiek in déze sector
afbeelding:       # {src, alt}
seo_titel:        # optioneel
seo_beschrijving: # optioneel
---
Body: eigen introtekst over agressie in deze sector: géén gegenereerde vultekst.
```
De beroepsgroepen-lijst en niveaufilter op de sectorpagina worden automatisch
opgebouwd uit de trainingen-collectie (geen dubbele administratie).

## Collectie 3: `beroepsgroepen/` (44 bestanden)

```yaml
---
naam:             # bijv. "Winkelmedewerkers"
slug:             # winkelmedewerkers
sector:           # sectorsleutel
samenvatting:     # 2-3 zinnen GEO-antwoord: waarom agressietraining voor déze groep
afbeelding:       # {src, alt}
---
Body: introtekst specifiek voor deze beroepsgroep: wat alleen over hén gaat.
```
De pagina toont de drie niveaus naast elkaar (automatisch uit trainingen-collectie).

## Collectie 4: `kennisbank/` (55+ bestanden na opschoning)

```yaml
---
titel:
slug:
datum:            # publicatiedatum (uit de bestaande site)
onderwerp:        # bijv. nazorg | de-escalatie | huisbezoek | agressiebeleid | ...
samenvatting:     # 2-3 zinnen GEO-antwoord
gerelateerde_trainingen:  # slugs: elk artikel wijst naar minstens 1 training
verdieping_extern:        # optioneel: specifieke artikel-URL op agressievisie.nl
afbeelding:       # {src, alt}
---
Body: het artikel. Praktijkgericht; verdieping → link naar agressievisie.nl.
```

## Collectie 5: `team/` (8 bestanden: indien akkoord op teamsectie)

```yaml
---
naam:
rol:              # bijv. trainer / trainingsacteur: van bestaande site
foto:             # {src, alt}
volgorde:         # sorteervolgorde op /over-ons/
---
Body: korte bio (van bestaande site).
```
Geen eigen pagina's; gerenderd als sectie op `/over-ons/`.

## Afgeleide generatie (geen handwerk per pagina)

| Gegenereerd | Bron |
|---|---|
| `<title>` | `{titel} \| Bureau Weerbaar en Veilig` (of `seo_titel`) |
| Meta description | eerste zin(nen) van `samenvatting` (of `seo_beschrijving`) |
| Course-schema | titel, samenvatting, duur, niveau, aanbieder |
| FAQPage-schema | `veelgestelde_vragen` |
| BreadcrumbList | sector → beroepsgroep → training |
| Niveau-overzichten `/niveaus/{niveau}/` | filter op `niveau` over alle trainingen |
| XML-sitemap, llms.txt | alle collecties |

## Open punt uit Fase 1 dat dit model raakt

- Bij samenvoegen van de twee sociale-dienst-reeksen: 43 i.p.v. 44 beroepsgroepen.
- Live site noemt "open inschrijving" nergens op de twee gecontroleerde pagina's;
  het veld `locatie` ondersteunt het wél, zodat het later toe te voegen is.
