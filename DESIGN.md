# Designsysteem: Bureau Weerbaar en Veilig

**Fase 3: concept**, wacht op goedkeuring. De definitieve brandkit volgt later en
vervangt dan de gemeten waarden hieronder (dat is één wijziging in
`src/styles/global.css`: alle componenten volgen automatisch).

## Kleuren (gemeten op de bestaande site + logo)

| Token | Waarde | Gebruik |
|---|---|---|
| `oranje` | `#F18919` | primaire actiekleur: knoppen, accenten, badges |
| `oranje-donker` | `#D4720A` | hover/actief; voldoet aan contrast-eisen op wit |
| `marine` | `#212E56` | koppen, footer, donkere vlakken |
| `marine-licht` | `#35447A` | secundair donkerblauw |
| `blauw` | `#203E91` | links, focus-ring, verloop-eindkleur |
| `inkt` | `#33373D` | bodytekst |
| `grijs` | `#5B6068` | secundaire tekst |
| `vlak` | `#F4F4F4` | lichte achtergrondvlakken |
| `lijn` | `#E2E4E8` | randen en scheidingslijnen |
| merkverloop | `163deg, #F18919 → #203E91` | het logo-verloop; spaarzaam inzetten (hero, logo) |

Contrastregels (WCAG 2.1 AA): oranje alleen als **achtergrond met witte, vette
tekst** of als accent, nooit als kleine tekst op wit (te licht). Voor tekstlinks
wordt `blauw` gebruikt.

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
