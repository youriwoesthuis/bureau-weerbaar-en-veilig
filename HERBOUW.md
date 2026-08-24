# Herbouw: opdracht aan mezelf

Opgesteld 25 augustus 2026, na een dag bouwen die op "helemaal kut" uitkwam.
Dit document is het uitgangspunt voor de herbouw. Het beschrijft wat er mis is,
waarom, wat er anders wordt, en in welke volgorde.

---

## 1. De diagnose

Ik heb een dag lang de opmaak verfijnd — verlopen, texturen, schuine randen,
grote cijfers — terwijl het onderliggende probleem ergens anders zat. Dit is
wat ik had moeten opzoeken vóór ik ging poetsen.

### 1.1 De site heeft geen beeld

| Waar | Verwijst naar een afbeelding | Bestand aanwezig |
|---|---|---|
| Trainingen | 132 | 0 |
| Beroepsgroepen | 44 | 0 |
| Sectoren | 19 | 0 |

Honderdvijfennegentig pagina's zijn geschreven mét beeld in gedachten. Er is
geen enkel bestand, en het veld `afbeelding` wordt in geen enkele template
gebruikt. Een trainingspagina bevat precies één afbeelding: het trainersblok.

Een trainingsbureau verkoopt iets wat je moet zien — mensen in een zaal die
oefenen. Een website daarover zonder één foto is leeg, en geen enkele hoeveelheid
CSS repareert dat. Ik heb de hele dag een lege kamer gedecoreerd.

**Besluit van de opdrachtgever:** er komen voorlopig geen foto's. Er wordt
bewust omheen ontworpen. Geen stockbeeld, geen lege plekken die op een foto
wachten — een grafisch systeem dat op zichzelf staat.

### 1.2 Eén lettertype voor alles

De hele site draait op Montserrat, voor koppen én lopende tekst. Montserrat is
een prima letter, maar het is ook de letter van elke template en elk
startup-landingspaginaatje van het afgelopen decennium. Eén geometrische sans
voor alles is precies wat een sjabloon doet; een ontworpen site zet een
karaktervolle kopletter tegenover een leesletter die z'n werk doet.

Dit is de grootste enkele oorzaak van "het ziet er goedkoop uit".

### 1.3 Te veel tekst op de verkeerde plek

| Pagina | Woorden |
|---|---|
| Homepage | 1818 |
| Sectorpagina | 1020 |
| Beroepsgroeppagina | 829 |
| Trainingspagina | 880 |

Een homepage van 1818 woorden is geen homepage maar een brochure. De pagina's
waar iemand binnenkomt en kiest, staan vol met tekst die pas relevant is als de
keuze al gemaakt is.

### 1.4 De indeling volgt geen redenering

De volgorde van secties is gegroeid, niet ontworpen. Er is geen antwoord op de
vraag: wat moet iemand hier in welke volgorde te zien krijgen, en waarom.

---

## 2. Het idee: een vakdossier, geen brochure

Bureau Weerbaar en Veilig kent vierenveertig beroepen tot in detail. Dat is het
hele bestaansrecht van dit merk, en het is ook het enige wat een concurrent niet
kan overschrijven.

De site moet dus niet aanvoelen als een brochure met een hero, drie
verkoopargumenten en een knop. Hij moet aanvoelen als het openslaan van een goed
gemaakt vakdossier: precies, zelfverzekerd, dicht waar het ertoe doet en leeg
waar het niet nodig is.

Concreet betekent dat drie dingen.

**Wat je ziet is het vak, niet het bureau.** De honderdzevenenzestig situaties
uit de trainingen — "Je wilt de woning verlaten maar wordt tegengehouden" — zijn
het beeldmateriaal. Niet als sfeermaker maar als hoofdzaak.

**Wie kiest, krijgt geen proza.** Homepage en sectorpagina's worden
navigatie-instrumenten. De tekst verhuist naar de pagina waar iemand daadwerkelijk
zit te lezen omdat hij bijna besloten heeft.

**Elk niveau heeft een eigen gezicht.** Basis, gevorderd en expert dragen al
oranje, paars en indigo. Dat wordt doorgetrokken tot je aan de kleur ziet waar
je bent, zonder dat er een woord bij hoeft.

---

## 3. Het grafische systeem, zonder fotografie

### 3.1 Typografie draagt het beeld

Gekozen na overleg met Gemini, dat Montserrat aanwees als "een marketingletter
met te veel ronding en hipheid voor dit onderwerp".

- **Koppen: Space Grotesk.** Schreefloos met een technische ondertoon die je
  terugziet in de cijfers en de a. Beheerste precisie, protocol, gezag — zonder
  stoffig te worden.
- **Lopende tekst: IBM Plex Sans.** Ontworpen voor technische documentatie.
  Hoge x-hoogte, rustig over lange alinea's, en legt het naast Space Grotesk
  bewust af in karakter. De kop is het beeld, de tekst is er om gelezen te
  worden.
- Beide variabel, zelfgehost, alleen de latijnse subset. De @font-face-regels
  staan met de hand in de CSS omdat de variabele pakketten geen los latin.css
  hebben. Van 180 kB voor één letter met alle subsets naar 72 kB voor twee.

### 3.5 Warmte als tegenwicht — de belangrijkste correctie

Gemini wees op het grootste risico van het vakdossier-idee, en dat had ik zelf
niet gezien: **de site wordt te koud, klinisch en intimiderend.**

Agressietraining draait om menselijke veiligheid en vertrouwen. Een
HR-directeur koopt geen abstract rechtbankdossier, maar een trainer die zijn
team het gevoel van veiligheid teruggeeft. Strakke typografie, donkere
chevrons, cijfers en vierhonderdeenenzestig incidenten bij elkaar leest als een
rapport van de Arbeidsinspectie.

De correctie: **de twaalf echte teamfoto's zijn het visuele anker van de site.**
Zonder fotografie zijn die twaalf gezichten de sterkste troef die er is. De
trainers krijgen een prominente, warme plek op de beroepsgroep- en
detailpagina's als de mens achter het dossier.

### 3.6 Dosering van de situaties

Ook uit het overleg, en het antwoord op mijn eigen zorg dat een pagina vol
"intimidatie door familieleden" afschrikt in plaats van vertrouwen wekt:

- **Hoogstens één tot twee situaties tegelijk in beeld.** Als typografisch
  rustpunt, niet als ononderbroken muur van ellende.
- **In een dossiercontainer.** Een label als `Casus 142 · Sector: thuiszorg`
  zet rauwe emotie om in vaktechnische beheersing.
- Angstmarketing schrikt zakelijke kopers af. Het doel is gezag, niet dreiging.

### 3.2 De chevron als structuur

Het beeldmerk is een dubbele chevron. Die staat nu als achtergrondbehang op 2,8%
dekking — onzichtbaar en dus zinloos. Hij wordt een echt bouwelement:
sectiemarkering, niveau-aanduiding, opsommingsteken, hoekafsluiting.

### 3.3 Kleur met betekenis

Geen decoratie. Oranje is basis, paars is gevorderd, indigo is expert — overal,
consequent, zodat de kleur informatie draagt in plaats van sfeer.

### 3.4 Cijfers als anker

132 trainingen, 44 beroepsgroepen, 19 sectoren, 461 situaties, 1 dag, max 10
deelnemers. Allemaal geteld uit de content, dus altijd waar. Dat is wat een
merk zonder klantverhalen kan laten zien.

---

## 4. Wat blijft en wat gaat

**Blijft, niet aankomen.** Dit is met schade en schande zo geworden en zit niet
in de opmaak:

- De correctie van "2 dagen" naar "1 dag" op tweeënnegentig plekken
- De afkortingen in titels (`src/lib/naam.ts`)
- Unieke titels per pagina, en de niveau-intentie vooraan (`src/lib/seo.ts`)
- De entiteitsgrafiek: één `Organization` met `@id`, personen met `#persoon`
- De 158 doorverwijzingen en het `_redirects`-bestand
- De merkscheiding met Act in Move en AgressieVisie (`MERKGROEP.md`)
- De drie controlescripts
- Alle inhoud in `src/content/`

**Gaat op de schop:**

- `src/styles/global.css` — opnieuw opbouwen vanaf de tokens
- Alle paginasjablonen: indeling, volgorde, hoeveelheid tekst
- De componenten die alleen bestonden om leegte te vullen

---

## 5. Stappenplan

Elke stap eindigt met een gebouwde, gecontroleerde site. Geen stap laat de site
kapot achter.

| # | Stap | Klaar wanneer |
|---|---|---|
| 1 | Diagnose en dit document | ✅ |
| 2 | Overleg met Gemini over richting en typografie | Advies binnen en gewogen |
| 3 | Nieuw fundament: letters, schaal, kleur, ruimte | `global.css` opnieuw, oude site draait nog |
| 4 | Eén pagina volledig af als ijkpunt | Beroepsgroeppagina, ter goedkeuring |
| 5 | Terugkoppeling Gemini + opdrachtgever | Akkoord op het ijkpunt |
| 6 | Trainingspagina (132×) | Gebouwd en gecontroleerd |
| 7 | Sectorpagina (19×) | Gebouwd en gecontroleerd |
| 8 | Homepage | Van 1818 naar circa 500 woorden |
| 9 | Overige pagina's | Niveaus, gids, over ons, contact |
| 10 | Eindcontrole | Toegankelijkheid, SEO, GEO, uniciteit |

---

## 6. De werkwijze met Gemini

Gemini toetst; ik bouw. Na elke stap gaat er een vraag heen met wat er gemaakt
is en waar ik twijfel. Wat terugkomt weeg ik tegen wat er in deze repo is
vastgelegd — als een advies botst met `MERKGROEP.md` of met gemeten feiten,
zeg ik dat en wijk ik af met opgaaf van reden. Dat is vandaag al twee keer
gebeurd en beide keren terecht.

Wat ik niet doe: adviezen uitvoeren die vragen om gegevens die niet bestaan. Er
komen geen verzonnen risicoprofielen, trainingsfrequenties of cijfers op deze
site.

---

## 7. Wat er niet gebeurt

**Geen doorlopende klok.** Ik werk per beurt en stop als ik antwoord; er loopt
niets door terwijl er niemand kijkt. Ik houd geen uren bij en ik meld geen
verstreken tijd, want dat zou verzonnen zijn. Wat ik wel doe: per beurt zoveel
mogelijk afmaken en eerlijk melden wat af is en wat niet.
