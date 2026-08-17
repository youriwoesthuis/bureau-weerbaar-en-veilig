# CLAUDE.md — Bureau Weerbaar en Veilig: website rebuild

## Wat dit document is
Dit bestand hoort in de root van de repo. Claude Code leest het automatisch in
bij elke sessie in deze map — het is tegelijk de projectbrief én de
gedragsregels. Wijzig het alleen in overleg met de opdrachtgever (de mens aan
de andere kant van dit gesprek, hierna "de gebruiker").

De gebruiker is **beginner in Git/GitHub**. Alle communicatie-regels onderaan
dit document zijn daarop afgestemd en gelden voor élke stap, niet alleen de
eerste sessie.

---

## 1. Opdracht in één zin
Bouw de website van Bureau Weerbaar en Veilig (nu: WordPress/Elementor op
`bureauwenv.wizzinc-dev2.nl`) opnieuw op als een snelle, statisch gegenereerde
codebase — inhoudelijk 1-op-1, visueel strakker — met trainingen ingedeeld in
drie niveaus (basis, gevorderd, expert), volledig geoptimaliseerd voor
klassieke zoekmachines (SEO) én AI-antwoordsystemen (GEO), en scherp
gepositioneerd binnen de merkgroep waar het onderdeel van is (zie hoofdstuk 3).

## 2. Opdrachtgever
**Bureau Weerbaar en Veilig** — specialist in agressietraining: omgaan met
agressie, intimidatie en grensoverschrijdend gedrag op de werkvloer.
Aanbod per sector (zorg, onderwijs, retail, beveiliging, openbaar vervoer,
overheid & handhaving, financiële dienstverlening, welzijn, horeca,
sportaccommodaties, woningcorporaties, bibliotheken, transport, dierenzorg,
farmacie, energie, justitiële keten, asielopvang, uitvaart) en daarbinnen per
beroepsgroep.

- Vestiging: Russchemorsweg 5-04, 7161 RT Neede (provincie Gelderland)
- Telefoon: 085 760 0435
- E-mail: info@bureauweerbaarenveilig.nl
- Openingstijden: maandag t/m vrijdag 08:30–17:00, zaterdag en zondag gesloten

### Positionering — moet uit élke pagina spreken
Dé specialist in agressietraining. Geen brede trainer die ook agressie doet —
één onderwerp, tot in de diepte, per beroepsgroep vertaald. Onderdeel van de
Actinmove-groep, maar bewust opgericht als apart merk dat uitsluitend
agressietrainingen verkoopt — dát smalle, diepe focuspunt is het hele bestaan
van dit merk en moet nergens verwateren richting "we doen ook nog wat anders".

## 3. Merkstructuur en zusterbedrijven

### 3.1 De drie merken en hun rol
| Merk | Rol | Aanbod |
|---|---|---|
| **actinmove.nl** | Moederbedrijf, praktijkgericht | Communicatiebreed trainingsaanbod; verkoopt óók agressietrainingen, als één van meerdere onderwerpen |
| **agressievisie.nl** | Kennisplatform over agressie | Informatie en achtergrond over agressie op de werkvloer; verwijst door naar actinmove.nl |
| **bureauweerbaarenveilig.nl** | Specialist | Uitsluitend agressietrainingen, tot in de diepte per beroepsgroep — reden van bestaan is exact dít smalle domein |

Bureau Weerbaar en Veilig is dus geen concurrent van de andere twee, maar de
verdiepingslaag: waar actinmove het onderwerp aanbiedt als deel van een breder
pakket en agressievisie het onderwerp uitlegt, is Bureau Weerbaar en Veilig de
plek waar iemand daadwerkelijk een agressietraining voor zíjn beroepsgroep en
niveau boekt.

**Juridisch:** alle drie zijn handelsnamen onder dezelfde KvK-inschrijving —
geen aparte rechtspersonen. Dat is relevant voor de schema.org-opzet, zie 3.4.

### 3.2 Contentdifferentiatie — wie schrijft over wat
- **Bureau Weerbaar en Veilig**: transactionele/commerciële content —
  trainingspagina's, sector- en beroepsgroeppagina's, per niveau. Geen brede
  achtergrondartikelen die al op agressievisie.nl staan.
- **agressievisie.nl**: informatieve/awareness-content (cijfers, wetgeving,
  signalen, trends). De kennisbank op bureauweerbaarenveilig.nl (hoofdstuk 6)
  moet dit **niet dupliceren** — praktijkgericht en trainingsgerelateerd
  blijven, en waar verdieping nodig is doorverwijzen naar agressievisie.nl.
- **actinmove.nl**: blijft eigenaar van het brede, sectoroverstijgende
  trainingsverhaal. Bureau Weerbaar en Veilig verwijst er alleen naartoe als
  een bezoeker eigenlijk een ander (niet-agressie) type training zoekt.

### 3.3 Cross-linking
- Footer en over-ons-pagina van bureauweerbaarenveilig.nl vermelden expliciet
  "onderdeel van Actinmove" met link naar actinmove.nl.
- Kennisbank-artikelen linken contextueel naar het bijpassende
  achtergrondartikel op agressievisie.nl (niet naar de homepage, maar naar het
  specifieke artikel).
- Trainingspagina's linken **niet** naar actinmove.nl, om verwarring over waar
  te boeken te voorkomen — de transactie hoort hier te blijven.
- **Bevestigd:** agressievisie.nl verwijst momenteel alleen door naar
  actinmove.nl, niet naar bureauweerbaarenveilig.nl. Deze site krijgt dus
  voorlopig geen inkomende links vanaf agressievisie.nl — dat ligt buiten de
  scope van deze build (het is een ander domein), maar is later met de
  beheerder van agressievisie.nl te bespreken als kans.

### 3.4 SEO/GEO-implicaties
- **Keyword-allocatie**: commerciële zoektermen per beroepsgroep
  ("agressietraining [beroepsgroep]", "de-escalatietraining [sector]") horen
  bij Bureau Weerbaar en Veilig. Informatieve zoektermen ("agressie cijfers
  zorg", "wat is grensoverschrijdend gedrag") blijven bij agressievisie.nl.
  Breed/niet-agressie trainingsaanbod blijft bij actinmove.nl. Voorkom dat
  twee sites uit dezelfde groep op dezelfde zoekterm tegen elkaar opboksen.
- **Schema.org-relaties**: géén `parentOrganization`/`memberOf` — dat
  suggereert aparte rechtspersonen, en dat zijn het niet (zelfde
  KvK-inschrijving, zie 3.1). Gebruik in plaats daarvan `legalName` (de
  KvK-naam — komt later, gebruiker houdt dit voorlopig aan) op elke site
  gelijk, `name` per site de eigen handelsnaam ("Bureau Weerbaar en
  Veilig"), en onderlinge `sameAs` naar actinmove.nl en agressievisie.nl.
  Dat helpt Google en AI-systemen de merken herkennen als één organisatie
  met drie gerichte handelsnamen, in plaats van drie losse, mogelijk
  concurrerende bronnen.
- **Canonicaliteit**: als actinmove.nl al eigen pagina's over agressietraining
  heeft die inhoudelijk overlappen met een pagina hier — bevestigd dat dit het
  geval is, zie 3.5 — moet nog worden bepaald hoe dat wordt opgelost
  (samenvoegen, doorverwijzen, of canonical laten wijzen naar
  bureauweerbaarenveilig.nl). Zie open vraag in 3.6.

### 3.5 Bevestigd
- Agressievisie.nl verwijst niet door naar bureauweerbaarenveilig.nl, alleen
  naar actinmove.nl. Blijft voorlopig zo (zie 3.3).
- Alle drie de merken vallen onder dezelfde KvK-inschrijving, met elk een
  eigen handelsnaam — geen aparte rechtspersonen (zie 3.1 en 3.4).
- Actinmove.nl heeft al content over agressietraining die qua zoekwoorden
  overlapt met deze site.

### 3.6 Nog open
- Wat gebeurt er met de overlappende agressietraining-content op
  actinmove.nl: blijft die gewoon staan naast deze nieuwe site,
  wordt hij samengevoegd/verwijderd, of krijgt bureauweerbaarenveilig.nl
  via canonical de leidende rol op dat onderwerp? Dit bepaalt of Fase 6 een
  redirect- of canonical-afspraak met actinmove.nl moet regelen.

## 4. Bronmateriaal
- **Sitemap:** aangeleverd, zie `sitemap-export.tsv` in de repo — 204 URL's,
  export van 2026-08-10. **Fase 0 kan hiermee starten.**
- Live dev-site: https://bureauwenv.wizzinc-dev2.nl/
- WordPress-export (optioneel, sterk aanbevolen): wp-admin → Gereedschap →
  Exporteren → Alle inhoud (XML met alle teksten, categorieën, media)
- Screenshots homepage / sectorpagina / trainingspagina — nog toe te voegen,
  bijv. in `/reference/screenshots/`

## 5. Contentmodel
Elke training is één markdown-bestand met deze frontmatter:

```yaml
titel:            # H1, bevat sector/beroepsgroep + "agressietraining"
slug:
sector:           # zorg | onderwijs | retail | ...
beroepsgroep:     # ambulancemedewerkers | leerplichtambtenaren | ...
niveau:           # basis | gevorderd | expert
duur:
groepsgrootte:
locatie:          # incompany | open inschrijving | beide
doelgroep:        # één zin, wie is dit voor
resultaat:        # 4-6 concrete leeruitkomsten
programma:        # dagdelen of blokken
werkvormen:       # rollenspel, trainingsacteur, casuïstiek
samenvatting:     # 2-3 zinnen, direct citeerbaar antwoord (GEO)
veelgestelde_vragen:  # 4-6 vraag/antwoord-paren
gerelateerd:      # slugs van andere niveaus + aanpalende beroepsgroepen
afbeelding:
```

Sectoren en beroepsgroepen krijgen eigen bestanden met eigen introtekst —
**geen gegenereerde vulteksten**. Elke pagina moet iets zeggen dat alleen over
die beroepsgroep gaat.

### Niveaus — vaste definities
- **Basis** — herkennen en de-escaleren. Voor iedereen die met agressie te
  maken kan krijgen. Signalen lezen, eigen reactie reguleren, gesprek
  terugbrengen.
- **Gevorderd** — voor wie de basis beheerst en structureel met zwaardere
  situaties werkt. Complexe casuïstiek, grenzen stellen onder druk, nazorg en
  melden.
- **Expert** — voor leidinggevenden en coördinatoren. Beleid, teamnorm,
  nazorgstructuur, borging, het aanspreken van de eigen organisatie.

Niet elke beroepsgroep hoeft alle drie te hebben — bepaal per beroepsgroep
welke niveaus zinvol zijn. Nieuwe niveauteksten mogen worden geschreven op
basis van bestaande trainingen, mits inhoudelijk kloppend en per beroepsgroep
specifiek gemaakt.

## 6. Sitestructuur
```
/                                  homepage
/agressietraining/                 hub: wat is het, aanpak, voor wie
/sectoren/                         alle sectoren
/sectoren/{sector}/                sector, met beroepsgroepen en niveaufilter
/sectoren/{sector}/{beroepsgroep}/ beroepsgroep, drie niveaus naast elkaar
/trainingen/{slug}/                de training zelf
/niveaus/{basis|gevorderd|expert}/ overzicht per niveau, over sectoren heen
/kennisbank/                       artikelen (praktijkgericht — zie 3.2)
/over-ons/  /contact/
```

### URL-migratie
De huidige site heeft dubbele paden (`/trainingen/...` én
`/category/trainingen/...`) en minstens één bekende inconsistentie:
**verpleeghuizen** staat onder thuiszorg-ouderenzorg terwijl het in het menu
onder **Zorg** valt. Kies één canonieke structuur, maak de rest
301-redirects, leg de volledige mapping vast in `redirects.md`
(kolommen: oude URL, nieuwe URL, type/reden).

**Waargenomen in `sitemap-export.tsv` (te bevestigen/verwerken in Fase 0):**
- Twee kennisbank-bomen: `/kennisbank/` én `/kennisbank_intern/`. Een deel van
  `/kennisbank_intern/` lijkt een oudere versie van artikelen die ook (met
  ander pad) in `/kennisbank/` staan — bijv. namen met een `-2`-suffix
  wijzen op een duplicaat. Bepalen welke de bron van waarheid is.
- Een paar slugs eindigen op `-copy` (bijv.
  `agressietraining-voor-hypotheek-en-kredietadviseurs-copy`) — vermoedelijk
  onafgemaakte duplicaten, geen aparte pagina's.
- `/team/{naam}/`-pagina's staan niet in de sitestructuur hierboven — nog
  bepalen of teampagina's terugkomen (bijv. onder `/over-ons/`) of vervallen.
- Sommige kennisbank-artikelen gaan over een breder onderwerp dan agressie
  (bijv. mindfulness, feedback geven, presenteren) — die vallen mogelijk
  eerder onder actinmove.nl's brede aanbod dan onder de praktijkgerichte
  kennisbank van Bureau Weerbaar en Veilig (zie 3.2). Beoordelen per artikel.

## 7. SEO-eisen
- Eén H1 per pagina, logische H2/H3-hiërarchie
- Unieke title (max ~60 tekens) en meta description (max ~155), gegenereerd
  uit frontmatter maar per pagina overschrijfbaar
- Schema.org: `Course` + `EducationalOccupationalCredential` per training,
  `Organization` + `LocalBusiness` sitebreed (mét groepsrelaties, zie 3.4),
  `FAQPage` bij vragenblokken, `BreadcrumbList` overal
- Interne links: elke training linkt naar de andere niveaus van dezelfde
  beroepsgroep, naar de sector, en naar 2-3 aanpalende beroepsgroepen
- XML-sitemap en robots.txt automatisch genereren; canonicals expliciet
- Core Web Vitals: statisch, moderne beeldformaten met vaste afmetingen,
  geen render-blocking JS, lettertypen lokaal gehost
- Alt-teksten beschrijvend, niet volgestopt met zoekwoorden
- Zoekwoordlogica: hoofdterm "agressietraining" + hoe mensen echt zoeken
  ("omgaan met agressie op de werkvloer", "agressietraining zorg",
  "de-escalatietraining", "training grensoverschrijdend gedrag") + vaktaal
  per beroepsgroep
- **Keyword-allocatie binnen de merkgroep**: zie 3.4 — geen interne
  zoekwoordconcurrentie met actinmove.nl of agressievisie.nl

## 8. GEO-eisen (vindbaarheid in AI-antwoorden)
- Elke pagina opent met een direct antwoord van 2-3 zinnen op de kernvraag,
  vóór alle marketingtaal — dit is het stuk dat een AI citeert
- Schrijf in extraheerbare eenheden: korte alinea's, tussenkoppen die een
  vraag beantwoorden, opsommingen bij opsombare zaken
- FAQ-blokken met vragen zoals mensen ze echt stellen
- Concrete, verifieerbare feiten (duur, groepsgrootte, werkvormen,
  verzorgingsgebied) — geen vage superlatieven
- Entiteiten voluit: "Bureau Weerbaar en Veilig" (niet "wij", geen
  afkortingen) in de eerste zin van elk hoofdblok
- Volledige HTML-content zonder JavaScript — AI-crawlers voeren vaak geen
  scripts uit
- `llms.txt` in de root: beknopte organisatiebeschrijving + belangrijkste
  pagina's + expliciete vermelding van de relatie tot actinmove.nl en
  agressievisie.nl (zie 3.1)
- Entiteitsrelaties expliciet in schema.org (zie 3.4) zodat AI-systemen
  Bureau Weerbaar en Veilig herkennen als de autoritatieve bron specifiek voor
  agressietraining binnen de groep

## 9. Design
Strakker dan het origineel, herkenbaar hetzelfde merk — huisstijlkleuren,
logo en beeldtaal overnemen uit de bestaande site. Rustig, professioneel,
geloofwaardig; doelgroep is een HR-adviseur/teamleider/preventiemedewerker
met een serieus probleem. Ruime witruimte, sterke typografische hiërarchie,
één duidelijke actie per scherm. Geen Elementor-drukte, geen stockfoto's van
handen schudden.

Mobile-first, WCAG 2.1 AA (contrast, focus states, toetsenbordnavigatie,
semantische HTML). Praktische eis: binnen drie klikken van de homepage bij de
juiste training voor beroepsgroep + niveau.

## 10. Techniek — vastgelegde keuzes
> Dit stond open in de brief. Onderstaande zijn mijn defaults; de gebruiker
> kan ze op elk moment wijzigen — vraag niet opnieuw tenzij iets concreet
> misgaat met een keuze.

- **Framework:** Astro (statisch, snel, weinig JS)
- **Styling:** Tailwind
- **Content:** markdown-bestanden in de repo met getypeerd schema (Astro
  content collections), geen CMS
- **Formulieren** (terugbelverzoek + contact): werkend, via Formspree of
  Web3Forms — spamprotectie zonder tracking, bevestigingsmelding,
  AVG-conform, geen eigen server nodig
- **Hosting:** statische build via GitHub Pages + GitHub Actions
- Alle content in het Nederlands, `lang="nl"`

## 11. Werkwijze — fasen (verplichte volgorde, elke fase eindigt met een stop)
1. **Inventarisatie** — sitemap uitlezen, alle content vastleggen in
   `content-inventaris.md` (titel, URL, sector, beroepsgroep, afgeleid
   niveau, status), URL-mapping in `redirects.md`.
   **STOP: wacht op goedkeuring voordat je verdergaat.**
2. **Contentmodel** — schema's + één volledig uitgewerkte voorbeeldtraining.
   **STOP: wacht op goedkeuring.**
3. **Designsysteem** — kleuren, typografie, componenten, één afgemaakte
   pagina als referentie. **STOP: wacht op goedkeuring.**
4. **Bouw** — templates en pagina's, sector voor sector. Laat na elke sector
   zien wat er klaar is.
5. **Contentmigratie** — alle trainingen erin, ontbrekende niveaus schrijven.
6. **Optimalisatie** — schema, sitemap, redirects, performance,
   toegankelijkheid, groepsrelaties (hoofdstuk 3.4); controleer op élke
   pagina of het openingsantwoord (GEO) losstaand klopt.

Verzin geen prijzen, data, certificeringen, aantallen of klantnamen — die
komen van de opdrachtgever of blijven weg. Ontbreekt iets: vragen, niet
gokken.

## 12. Definition of done
- Elke bestaande trainingspagina heeft een tegenhanger of een gemotiveerde
  redirect
- Elke beroepsgroep heeft minimaal niveau basis, en waar zinvol gevorderd
  en expert
- Alle pagina's: unieke title/description, kloppend schema, werkende
  interne links
- Lighthouse ≥ 95 op performance, toegankelijkheid, best practices, SEO
- Volledige HTML-content zichtbaar zonder JavaScript
- `redirects.md` compleet en gecontroleerd
- Geen zoekwoordoverlap met actinmove.nl of agressievisie.nl op de
  kernzoektermen (zie 3.4)
- "Agressietraining voor [beroepsgroep]" zoeken landt op een pagina die dat
  in de eerste drie zinnen beantwoordt

## 13. Live zetten via GitHub
Uitgangspunt: gebruiker is Git-beginner. Concepten kort houden bij eerste
gebruik, daarna gewoon de term gebruiken.

- Eén repository, standaardbranch `main`
- Publiceren via GitHub Pages met workflow `.github/workflows/deploy.yml`
- Elke push naar `main` start automatisch een build; slaagt die, dan staat
  de nieuwe versie binnen enkele minuten live
- Mislukt de build, dan blijft de oude site in de lucht — een fout haalt de
  site nooit offline
- Eigen domein later: Instellingen → Pages → Custom domain + DNS-wijziging

### Verplichte opleverstukken
- `.gitignore` (sluit `node_modules` en buildmappen uit)
- `README.md` met de dagelijkse commando's
- `WERKWIJZE.md` met exact:
  1. site lokaal opstarten en bekijken in de browser
  2. een training toevoegen/wijzigen — welk bestand, welke velden
  3. een wijziging live zetten, commando voor commando
  4. zien of de deploy geslaagd is (tabblad Actions: groen vinkje/rood
     kruis)
  5. terugdraaien naar de vorige versie als er iets misgaat
  6. de vijf meest voorkomende foutmeldingen met oplossing

## 14. Communicatie- en werkregels (gelden voor élke stap, ook nu)
- Zeg vooraf wát er gaat gebeuren en wat het oplevert — niet alleen "run
  dit commando", maar wat het doet, wat de gebruiker daarna op het scherm
  ziet, en waaraan diegene ziet dat het gelukt is
- Eén commando per keer bij nieuwe dingen — geen blok van zes regels
- Vermeld altijd de werkmap: waar moet de gebruiker staan om dit uit te
  voeren?
- Noem de verwachte uitkomst concreet (bijv. "je ziet nu een URL zoals
  localhost:4321 — open die in je browser")
- Waarschuw vooraf bij onomkeerbare handelingen en zeg wat het gevolg is
- Leg jargon één keer uit bij eerste gebruik, daarna mag de term gewoon
  gebruikt worden
- Bij een foutmelding: vraag om de volledige tekst, benoem de
  waarschijnlijke oorzaak, geef één oplossing tegelijk
- De gebruiker werkt het liefst met screenshots van wat die ziet — verwacht
  dat als foutrapportage-vorm

## 15. Openstaande input, nog nodig van de gebruiker
- [x] Sitemap → `sitemap-export.tsv`
- [ ] Akkoord (of aanpassing) op de techniekkeuzes in hoofdstuk 10
- [ ] Screenshots homepage / sectorpagina / trainingspagina
- [ ] Naam van de GitHub-repository, en of die al bestaat
- [ ] Gedeelde KvK-naam (legalName) voor de schema.org-markup — bewust nog
      niet ingevuld, zie 3.4
- [ ] Resolutie voor de overlappende agressietraining-content op
      actinmove.nl (open vraag in 3.6)
