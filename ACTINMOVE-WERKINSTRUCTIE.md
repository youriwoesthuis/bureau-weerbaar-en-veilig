# Werkinstructie actinmove.nl: van blog naar organisatie met aanbod

**Voor wie:** degene die het WordPress-beheer van actinmove.nl doet.
**Gemeten op:** 24 augustus 2026, WordPress 7.1 met Yoast SEO 28.2.
**Waarom:** zie `MERKGROEP.md` hoofdstuk 7, punt 2.

Deze instructie staat in de repo van bureauweerbaarenveilig.nl omdat actinmove.nl
zelf geen repo heeft. Er verandert niets aan URL's, menu's of teksten — alles
hieronder gebeurt op de plek waar het nu staat.

---

## 1. Het probleem in één zin

Alle 66 berichten op actinmove.nl vertellen aan Google en aan AI-antwoordsystemen
dat ze een **blogartikel** zijn, geschreven door een persoon genaamd **admin**, en
nergens staat dat Act in Move een **organisatie** is die iets aanbiedt.

### Wat er nu in de paginabron staat

In het blok `<script type="application/ld+json" class="yoast-schema-graph">`:

```
@type:           Article
headline:        "Weerbaarheid bij emoties en agressie Basistraining"
articleSection:  "Trainingen"
datePublished:   2025-08-10
wordCount:       312
author:          Person → "admin"
```

Geen `Organization`. Geen `publisher`. Geen `Course`, geen `Offer`, geen
`provider`. Nergens staat dus wie er iets aanbiedt, of dat er iets te boeken is.

> **Let op:** `publisher` hoeft niet weggehaald te worden — die staat er niet.
> Hij ontbreekt, en ontstaat vanzelf zodra stap 1 hieronder gedaan is.

### Waar het signaal vandaan komt

Vier plekken versterken elkaar:

1. **De JSON-LD in de bron** — `@type: Article` met `headline`, `wordCount`,
   `datePublished` en `articleSection`. Yoast genereert dat automatisch.
2. **Het berichttype** — het zijn WordPress-*berichten*, geen pagina's. Daarom
   staan ze in `post-sitemap.xml`.
3. **De categorie** — "Trainingen" is een blogrubriek, met `/category/`-archieven.
4. **De auteur** — een `Person` met de naam `admin`, plus `/author/`-archieven.

### Hoe de 66 berichten verdeeld zijn

| Rubriek | Aantal | Draagt nu | Zou moeten zijn |
|---|---|---|---|
| Trainingen | 29 | `Article` | `Course` |
| Workshops | 8 | `Article` | `Course` |
| Coaching | 6 | `Article` | `Service` |
| Advies | 3 | `Article` | `Service` |
| Kennisbank | 10 | `Article` | `Article` — klopt al |
| Team | 10 | `Article` | `Person` |

---

## 2. De stappen, in deze volgorde

De volgorde telt: het codefragment in stap 5 verwijst met `provider` naar de
organisatieknoop. Bestaat die nog niet, dan wijst het naar niets.

### Stap 1 — Site-weergave op organisatie zetten

**Yoast SEO → Instellingen → Site-weergave**

Daar staat de keuze *"Deze site vertegenwoordigt een organisatie / een persoon"*.
Die staat nu op persoon. Zet hem op **organisatie** en vul naam, logo, telefoon en
adres in.

Dit ene vinkje doet drie dingen tegelijk:
- maakt de `Organization`-knoop aan
- vult `publisher` op elke pagina
- haalt "admin" weg als identiteit van de site

**Levert op:** Act in Move bestaat als bedrijf in de gestructureerde data. Zonder
deze stap heeft geen van de volgende stappen iets om aan te haken.

### Stap 2 — Sociale profielen invullen

**Yoast SEO → Instellingen → Site-weergave**, onderaan.

Wat hier ingevuld wordt, komt als `sameAs` in de code. Zet er naast de eigen
sociale kanalen ook neer:

- `https://agressievisie.nl`
- `https://bureauweerbaarenveilig.nl`

**Levert op:** Google en AI-systemen herkennen de drie merken als één organisatie
met drie handelsnamen, in plaats van drie losse en mogelijk concurrerende bronnen.
Dit is wat `MERKGROEP.md` hoofdstuk 4 vraagt.

De KvK-naam (`legalName`) kent Yoast niet als veld. Die komt mee in het fragment
van stap 5, zodra de naam bekend is.

### Stap 3 — Kruimelpad met de categorie erin

**Yoast SEO → Instellingen → Geavanceerd → Kruimelpad**

Per berichttype staat er *"Taxonomie om te tonen in het kruimelpad"*. Voor
Berichten staat die op "Geen" — vandaar dat het kruimelpad nu `Home › Titel` is.
Zet hem op **Categorie**.

Resultaat: `Home › Trainingen › Omgaan met telefonische agressie`.

Twee dingen om te weten:
- Dit past zowel het zichtbare kruimelpad als de `BreadcrumbList` in de code aan.
  Eén instelling, beide goed.
- Is het kruimelpad nu nergens zichtbaar op de pagina, dan moet het nog als
  Elementor-widget of via `yoast_breadcrumb()` in het sjabloon gezet worden. De
  code eronder klopt dan al wel.

**Levert op:** de hiërarchie van de site wordt leesbaar. Nu lijkt elke pagina los
onder de homepage te hangen.

### Stap 4 — Artikeltype uitzetten, en terugzetten waar het klopt

**In bulk:** Yoast SEO → Instellingen → **Inhoudstypen → Berichten → Schema**.
Daar staan twee keuzelijsten, *Paginatype* en *Artikeltype*. Zet **Artikeltype op
"Geen"**.

Dat haalt de `Article`-knoop in één keer van alle 66 berichten.

**Daarna terugzetten waar het wél klopt:** open de 10 kennisbankberichten en zet
in het Yoast-blok onder de editor → tabblad **Schema** het artikeltype terug op
*Artikel*.

Tien keer handwerk in plaats van zesenveertig.

**Levert op:** de trainingen, workshops, coaching en advies stoppen met beweren
dat ze een blogbericht zijn.

### Stap 5 — Course en Service toevoegen

Yoast kent deze types niet. Ze komen via een codefragment in de `functions.php`
van het **childthema**, of via een snippetplugin zoals WPCode.

```php
add_filter( 'wpseo_schema_graph', function ( $graph, $context ) {
    if ( ! is_singular( 'post' ) ) {
        return $graph;
    }
    $id = get_the_ID();

    if ( has_category( [ 'trainingen', 'workshops' ], $id ) ) {
        $type = 'Course';
    } elseif ( has_category( [ 'coaching', 'advies' ], $id ) ) {
        $type = 'Service';
    } else {
        return $graph; // kennisbank en team blijven zoals ze zijn
    }

    $url = get_permalink( $id );
    $graph[] = [
        '@type'       => $type,
        '@id'         => $url . '#' . strtolower( $type ),
        'name'        => get_the_title( $id ),
        'description' => YoastSEO()->meta->for_post( $id )->description,
        'url'         => $url,
        'provider'    => [ '@id' => trailingslashit( home_url() ) . '#organization' ],
    ];

    return $graph;
}, 10, 2 );
```

> **Vul hier geen duur, prijs of datum in die je niet hebt.** Google vraagt voor
> een cursusresultaat om `hasCourseInstance` met een echte duur. Die hoort uit een
> eigen veld per training te komen. Verzonnen gegevens in schema zijn erger dan
> geen schema: het is een belofte aan Google die de pagina niet waarmaakt.

Controleer de categorieslugs (`trainingen`, `workshops`, `coaching`, `advies`)
voordat je dit plaatst — het fragment matcht daarop.

**Levert op:** de 46 commerciële pagina's worden herkenbaar als boekbaar aanbod
met Act in Move als aanbieder.

### Stap 6 — De weergavenaam van het beheerdersaccount

**WordPress → Gebruikers → admin → Weergavenaam**

De naam "admin" staat nu leesbaar in de broncode van elke pagina. Los van SEO
verklapt dat de inlognaam van het beheerdersaccount.

Zet de weergavenaam op een echte naam. Overweeg daarnaast in Yoast onder
**Instellingen → Geavanceerd → Archiefpagina's** de auteurarchieven uit te zetten;
die voegen voor deze site niets toe.

---

## 3. Controleren of het gelukt is

Open een trainingspagina, bekijk de paginabron en zoek op `yoast-schema-graph`.
Wat er dan zou moeten staan:

- een `Organization`-knoop met naam, logo, telefoon, adres en `sameAs`
- `publisher` die daarnaar verwijst
- een `Course`-knoop met `provider` naar diezelfde organisatie
- **geen** `Article` meer
- een `BreadcrumbList` met drie stappen in plaats van twee
- geen `Person` met de naam "admin"

Sneller: plak de URL in de Rich Results Test van Google
(https://search.google.com/test/rich-results). Die toont welke types hij vindt.

---

## 4. Wat het samen oplevert

Google en AI-antwoordsystemen zien Act in Move dan als een organisatie die
cursussen en diensten aanbiedt, in plaats van een blog met 66 artikelen geschreven
door "admin".

Dat is de voorwaarde om genoemd te worden bij vragen als *"waar kan ik een
training omgaan met telefonische agressie volgen"*. En het is de haak waaraan de
drie merken van de groep aan elkaar geknoopt worden.

---

## 5. Wat je níét moet doen

- **De trainingen omzetten naar een eigen berichttype.** Dat verandert de URL's,
  vraagt een berg doorverwijzingen en gooit de opgebouwde positie weg. Alles
  hierboven kan op de plek waar het nu staat.
- **De categorieën weghalen.** Het fragment in stap 5 matcht erop, en de
  kruimelpaden gebruiken ze.
- **`Article` en `Course` allebei laten staan** op dezelfde pagina. Dat zijn
  tegenstrijdige signalen.
- **Pagina's van bureauweerbaarenveilig.nl naar hier kopiëren, of omgekeerd.**
  De twee sites mikken bewust op verschillende zoekopdrachten; zie `MERKGROEP.md`
  hoofdstuk 2.
