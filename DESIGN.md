# Designsysteem: Bureau Weerbaar en Veilig

**Fase 3: concept**, wacht op goedkeuring. De definitieve brandkit volgt later en
vervangt dan de gemeten waarden hieronder (dat is één wijziging in
`src/styles/global.css`: alle componenten volgen automatisch).

## Kleuren (uit `public/images/logo/logo.svg`)

Het logoverloop heeft **vier** stops, niet twee: `#F18919` → `#E8801F` →
`#B06A55` → `#35409B`. Juist het middenstuk daarvan levert het paars op dat het
beeldmerk zijn karakter geeft. Een eerdere versie van dit document versimpelde
het verloop tot oranje → blauw en liet het paars weg; die versimpeling is
teruggedraaid. Oranje en paars zijn nu de twee dragende accentkleuren.

| Token | Waarde | Contrast | Gebruik |
|---|---|---|---|
| `oranje` | `#F18919` | 6,36:1 op marine-diep | het merk-oranje: accentbalken, en tekst op donkere vlakken |
| `oranje-tekst` | `#A35405` | 5,49:1 op wit | oranje als tekst op een lichte achtergrond |
| `oranje-knop` | `#AD5A06` | 4,95:1 met wit erop | oranje vlak met witte tekst |
| `oranje-knop-hover` | `#8F4A03` | 6,67:1 met wit erop | hover van de primaire knop |
| `oranje-licht` | `#FDF1E2` | — | zachte oranje achtergrondtint |
| `paars` | `#735578` | 6,36:1 beide kanten op | het middenstuk van het logoverloop; niveau gevorderd |
| `paars-diep` | `#4A3455` | 10,97:1 op wit | donkere paarse variant |
| `paars-helder` | `#C9A9D0` | — | paars op donkere vlakken |
| `paars-licht` | `#F4EFF6` | — | zachte paarse achtergrondtint |
| `indigo` | `#35409B` | 8,91:1 op wit | de echte eindkleur van het logo; niveau expert |
| `marine` | `#212E56` | 13,21:1 op wit | koppen, footer |
| `marine-diep` | `#17203D` | — | onderkant van de donkere vlakken |
| `blauw` | `#203E91` | 9,73:1 op wit | tekstlinks en focus-ring |
| `inkt` | `#33373D` | — | bodytekst |
| `grijs` | `#5B6068` | 6,4:1 op wit | secundaire tekst |
| `vlak` / `vlak-warm` | `#F4F4F4` / `#FAF7F3` | — | lichte achtergrondvlakken |
| `lijn` | `#E2E4E8` | — | randen en scheidingslijnen |

### Contrastregels (WCAG 2.1 AA)

Het volle merk-oranje `#F18919` haalt op wit maar **2,52:1**. Het mag daarom
nooit als tekstkleur op wit staan, en ook niet als knopvlak met witte tekst —
dat zakt door dezelfde 2,52:1. Dat was in de eerste versie van de site wél zo
gebouwd; de primaire knop en de Contact-knop in de header staan nu op
`oranje-knop`.

Omgekeerd geldt: op een donker vlak schittert datzelfde volle oranje juist, met
6,36:1. Vandaar dat hero, kruimelpadbalk en het terugbelblok donker zijn — daar
mag de echte merkkleur aan.

Elk niveau levert drie varianten van zijn kleur, zodat één component altijd de
juiste kan pakken: `--accent` (vlakken en lijnen), `--accent-sterk` (donker
genoeg voor witte tekst erop) en `--accent-tekst` (donker genoeg om zelf tekst
te zijn). Voor paars en indigo vallen die samen; alleen oranje moet dempen.

Gemeten met een script over de opgebouwde pagina's: nul zakkers op de homepage,
een sectorpagina en een trainingspagina.

## Typografie

- **Lettertype:** Montserrat (variable font, lokaal gehost via `@fontsource`:
  geen Google-servers, AVG-vriendelijk en snel)
- **Koppen:** vet (700), marine. H1 30–40px, H2 24px, H3 16–18px
- **Bodytekst:** 16px, regelafstand ruim (1.6–1.75), inkt-kleur
- **Kleine labels:** 12px, hoofdletters, letterspacing, vet (badges, kickers)

## Componenten (gebouwd in Fase 3)

| Component | Bestand | Doel |
|---|---|---|
| Basislayout | `src/layouts/Base.astro` | header + navigatie, footer met contactgegevens en "onderdeel van Actinmove", skip-link, Organization/LocalBusiness-schema op elke pagina |
| Kruimelpad | `src/components/Breadcrumb.astro` | navigatie + BreadcrumbList-schema |
| Niveaubadge | `src/components/NiveauBadge.astro` | basis (oranje) / gevorderd (blauw) / expert (marine) |
| Terugbelverzoek | `src/components/Terugbelverzoek.astro` | de ene duidelijke actie per pagina; formulier-endpoint volgt in Fase 4 |
| Trainingspagina | `src/pages/trainingen/[slug].astro` | de referentiepagina: zie hieronder |

## Referentiepagina: de trainingspagina

Opbouw van boven naar beneden, conform de GEO/SEO-eisen uit de projectbrief:

1. **Kruimelpad** (Home › Sectoren › {sector} › training)
2. **Niveaubadge + H1** (de enige H1)
3. **GEO-openingsantwoord**: de `samenvatting` uit de frontmatter, direct
   citeerbaar, vóór alle marketingtaal
4. **Waarom deze training** + herkenbare praktijksituaties (uit de markdown-body)
5. **Wat je leert** (vinkjeslijst, 2 kolommen)
6. **Programma** (genummerde themablokken)
7. **Werkvormen** (labels)
8. **Veelgestelde vragen** (uitklapbaar, mét FAQPage-schema; de content staat
   volledig in de HTML, ook zonder JavaScript leesbaar)
9. **Terugbelverzoek-blok**
10. **Zijkolom** (sticky): praktische informatie + "Plan deze training",
    andere niveaus van dezelfde beroepsgroep, gerelateerde trainingen

Automatisch gegenereerd per pagina: `<title>`, meta description, canonical,
Course-schema, FAQPage-schema, BreadcrumbList-schema, Organization-schema.

## Logo

Tijdelijke SVG-benadering van het beeldmerk (cirkel + dubbele chevron met
merkverloop) in de header. Wordt vervangen door de echte logobestanden zodra de
brandkit binnen is: de aangeleverde PNG's zijn daarvoor het uitgangspunt
(gestapelde variant + horizontale variant, elk in kleur/zwart/wit).

## Toegankelijkheid (WCAG 2.1 AA)

- Skip-link ("Direct naar inhoud") als eerste focusbaar element
- Zichtbare focus-ring (3px blauw) op alle interactieve elementen
- Semantische HTML: `header/nav/main/article/section/aside/footer`, één H1,
  logische kop-hiërarchie, `dl` voor praktische info, `details/summary` voor FAQ
- Alle kleurcombinaties gecontroleerd op AA-contrast
- Mobile-first: zijkolom zakt op mobiel onder de content; menu klapt in (het
  mobiele menu wordt in Fase 4 afgemaakt)
