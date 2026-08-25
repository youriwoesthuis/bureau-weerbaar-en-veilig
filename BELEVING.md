# BELEVING.md — opdracht aan mezelf: van correcte site naar ervaring

> Geschreven op 25 augustus 2026, na de opmerking van Youri: *"ik wil nog meer
> interactieve elementen en vind het nogsteeds zaai laat de website leven. het
> moet een beleving zijn voor de bezoeker."*
>
> Dit bestand is mijn eigen opdracht. Ik voer hem uit zonder tussentijds om
> toestemming te vragen — zie `feedback_niet_om_toestemming_vragen` in het
> geheugen.

---

## 1. De eerlijke diagnose

De site is nu technisch in orde: 383 pagina's, geen contrastfouten, kloppend
schema, alles werkt zonder JavaScript. En toch is het saai. Ik moet benoemen
waaróm, anders bouw ik er alleen decoratie overheen.

**Er is geen enkel moment waarop de bezoeker iets dóét.**
De hele site is lezen. Twee uitzonderingen — de niveaukeuzehulp en het filter op
de trainingenpagina — staan allebei diep weggestopt. De homepage, waar tachtig
procent van het verkeer binnenkomt, is van boven tot onder een folder.

**Er is geen fotografie.**
195 pagina's verwijzen naar een `afbeelding:`-veld dat nergens bestaat. De enige
echte beelden op de hele site zijn twaalf portretten. Alles wat ik daartegen kan
zetten moet uit typografie, kleur, beweging en interactie komen — er ís niets
anders. Dat is geen excuus maar een ontwerpopdracht.

**De 461 praktijksituaties liggen ongebruikt.**
Dit is het beste materiaal dat de site heeft: 461 zinnen die letterlijk uit de
trainingen komen, per beroepsgroep anders, herkenbaar voor wie het werk doet.
Ze staan nu als vier stille kaartjes op een oranje vlak. Dat is de meest
verspilde kans van de hele site.

**Alles staat stil.**
Er is één `komt-op`-animatie bij het scrollen. Verder beweegt er niets, reageert
er niets, verandert er niets. Een pagina die niet reageert voelt als een PDF.

**De cijfers zijn cijfers, geen verhaal.**
132 / 44 / 19 / 461 staan in een balk. Dat zijn abstracties. Niemand voelt wat
461 praktijksituaties betekent.

---

## 2. Wat "beleving" hier wél en niet betekent

De doelgroep is een HR-adviseur, teamleider of preventiemedewerker met een
serieus probleem: er is iets gebeurd op de werkvloer. Beleving betekent hier
**niet** carrousels, parallax-bergen, confetti of een chatbot. Het betekent:

1. **Herkenning** — binnen tien seconden denken: *dit gaat over ons.*
2. **Grip** — iets kunnen aanwijzen, kiezen, uitklappen, filteren. Wie iets doet,
   onthoudt het.
3. **Ritme** — de pagina moet ademen: donker, licht, oranje, blauw, rust, spanning.
4. **Reactie** — als ik iets aanwijs, gebeurt er iets. Direct, zonder laden.

En één harde randvoorwaarde die niet verschuift: **alles moet werken zonder
JavaScript.** De projectbrief eist volledige HTML-inhoud voor AI-crawlers. Alle
interactie hieronder draait op `:has()`, `:checked`, `<details>` en
`animation-timeline: view()`. JavaScript mag alleen als progressieve verbetering
bovenop iets dat al werkt.

---

## 3. Wat ik ga bouwen — twaalf ingrepen

### Blok A — De homepage wordt een instrument in plaats van een folder

**A1. De sectorkiezer terug op de homepage, direct onder de hero.**
`TrainingFinder.astro` bestaat al en is nergens meer ingehangen. Links negentien
sectorchips, rechts verschijnen de beroepsgroepen van de gekozen sector. Werkt
op `:has()`. Dit is het eerste wat een bezoeker doet in plaats van leest, en het
geeft alle 44 beroepsgroeppagina's een link vanaf de zwaarste pagina van de site.

**A2. Een tellende cijferbalk.**
De vier getallen krijgen een `@property`-gebaseerde teller die van nul naar hun
waarde loopt zodra de balk in beeld scrollt. Pure CSS, met `@supports`-vangnet en
een `prefers-reduced-motion`-uitzondering die het getal meteen op de eindwaarde
zet.

**A3. De situatieroulette.**
De vier praktijksituaties worden er acht, met een radioknopcarrousel eronder
zodat de bezoeker er doorheen kan bladeren. Geen automatische rotatie — dat
steelt aandacht en is slecht voor toegankelijkheid. De bezoeker bladert zelf.

### Blok B — Herkenning: de situaties krijgen het podium dat ze verdienen

**B4. Een situatiewand op de sectorpagina.**
Nu twee situaties per sector, dat worden er zes, in een raster met wisselende
hoogte. Elk met de beroepsgroep eronder als link. Dit is waar iemand denkt:
*dit is precies wat bij ons gebeurt.*

**B5. Situaties op de trainingspagina uitklapbaar per stuk.**
Elke situatie krijgt een `<details>` met daarin wat je op die dag met precies
die situatie doet. Dat is de brug van herkenning naar aanbod.

### Blok C — De pagina gaat leven bij het scrollen en aanwijzen

**C6. Scroll-onthulling breed uitgerold.**
`animation-timeline: view()` staat er al maar wordt alleen op `.komt-op`
gebruikt. Uitrollen naar kaarten, situaties, ladderitems en statistieken, met
oplopende vertraging binnen een raster zodat een rij zich uitvouwt in plaats van
in één klap te verschijnen.

**C7. Een voortgangsbalk in de kop.**
Een streep in het merkverloop die meeloopt met hoe ver je op de pagina bent.
Puur CSS via `animation-timeline: scroll()`. Op lange trainingspagina's geeft dat
gevoel voor lengte.

**C8. Kaarten die reageren op de muis.**
Alle kaarten krijgen een zichtbare hover-toestand: optillen, accentrand,
verschuivende pijl. Nu doen ze bijna niets.

**C9. Het merkverloop als levend element.**
De koppen krijgen een subtiel bewegend verloop achter de tekst — traag genoeg om
niet af te leiden, snel genoeg om te merken dat de pagina leeft. Uit bij
`prefers-reduced-motion`.

### Blok D — Nieuwe interactieve onderdelen

**D10. De niveauvergelijker terug, herbouwd.**
`NiveauMatrix.astro` ligt ongebruikt. Herbouwen als een schakelaar: kies basis /
gevorderd / expert en de inhoud van de kolom wisselt, met de drie naast elkaar
op breed scherm. Op de beroepsgroeppagina, waar de keuze daadwerkelijk gemaakt
wordt.

**D11. Een "wat gebeurt er op dag X"-tijdlijn met uitklap.**
De vijf dagdelen worden een tijdlijn waarin elk blok uitklapt naar de volledige
toelichting. Nu is het een statische lijst.

**D12. Een zoekveld dat zonder JavaScript filtert.**
Op de trainingenpagina: een tekstveld dat met `:has()` en een gegenereerde
CSS-regel per beroepsgroep de lijst filtert op beginletter. Kan geen vrije tekst
aan — dat kán niet zonder script — maar een alfabetbalk (A–Z) die 44
beroepsgroepen terugbrengt tot drie is wél te doen en scheelt echt scrollen.

---

## 4. Volgorde

1. A1, A2, A3 — de homepage eerst; daar valt het oordeel.
2. C6, C7, C8, C9 — de bewegingslaag, want die raakt alle 383 pagina's tegelijk.
3. B4, B5 — de situaties.
4. D10, D11, D12 — de nieuwe onderdelen.
5. Bouwen, contrast opnieuw meten, in de browser controleren op desktop én mobiel.

## 5. Waar ik mezelf op afreken

- [ ] Binnen drie seconden na het laden van de homepage is er iets aanwijsbaars
      om te dóén, zonder te scrollen naar beneden.
- [ ] Elke pagina heeft minstens één element dat reageert op de bezoeker.
- [ ] Alle interactie werkt met JavaScript uit.
- [ ] `prefers-reduced-motion` schakelt élke animatie uit, ook de nieuwe.
- [ ] Geen enkel contrastpaar zakt onder de norm — 4,5:1 voor normale tekst,
      3:1 voor tekst van 24px of 18,66px vet.
- [ ] Toetsenbordbediening werkt overal: elke `:has()`-constructie hangt aan een
      echte radioknop of checkbox met een zichtbare focusring.
- [ ] De build blijft onder de tien seconden en er komt geen render-blokkerend
      script bij.
