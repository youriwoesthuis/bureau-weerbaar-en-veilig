# Werkwijze: de website beheren

Deze handleiding is geschreven voor iemand die nog niet met Git of GitHub heeft
gewerkt. Elk hoofdstuk vertelt: **wat je gaat doen**, **welk commando je typt**,
**waar je moet staan** en **waaraan je ziet dat het gelukt is**.

Een paar begrippen, één keer uitgelegd:

- **Terminal / PowerShell**: het venster waarin je commando's typt.
- **Projectmap**: de map `bureau-weerbaar-en-veilig`. Bijna alles doe je daar.
- **Repository (repo)**: de projectmap zoals GitHub die kent, inclusief de
  volledige geschiedenis van alle wijzigingen.
- **Commit**: een opgeslagen wijziging met een korte omschrijving. Een soort
  "opslaan met een briefje erbij".
- **Push**: je opgeslagen wijzigingen naar GitHub sturen. Dat is het moment
  waarop de site opnieuw wordt gebouwd en live gaat.
- **Build**: het bouwen van de site: van markdown-bestanden naar kant-en-klare
  webpagina's.

---

## 1. De site lokaal opstarten en bekijken

**Wat je gaat doen:** de site op je eigen computer starten, zodat je wijzigingen
kunt bekijken vóórdat iemand anders ze ziet.

**Waar je moet staan:** in de projectmap. Open PowerShell en typ:

```bash
cd "C:\Users\CindyWoesthuisActinM\Downloads\bureau-weerbaar-en-veilig"
```

Alleen de allereerste keer (en na het ophalen van wijzigingen van GitHub) haal je
de bouwpakketten op:

```bash
npm install
```

*Je ziet:* een lijst met regels en tot slot iets als `added 320 packages`. Dit duurt
één tot twee minuten.

Daarna start je de site:

```bash
npm run dev
```

*Je ziet:* een blokje met daarin `Local http://localhost:4321/`. Open dat adres in
je browser: daar staat de site.

**Gelukt als:** de homepage van Bureau Weerbaar en Veilig verschijnt in je browser.

**Stoppen:** klik in het PowerShell-venster en druk op `Ctrl + C`. De site is dan
alleen lokaal gestopt; de live site blijft gewoon staan.

> **Tip:** laat dit venster openstaan terwijl je werkt. Elke wijziging die je in een
> bestand opslaat, is meteen zichtbaar in de browser.

---

## 2. Een training toevoegen of wijzigen

### Een bestaande training wijzigen

Elke training is één bestand in `src/content/trainingen/`. De bestandsnaam is de
URL. De training op
`bureauweerbaarenveilig.nl/trainingen/agressietraining-winkelmedewerkers-basis/`
staat dus in:

```
src/content/trainingen/agressietraining-winkelmedewerkers-basis.md
```

Open het bestand in een teksteditor. Je ziet twee delen:

1. **Bovenaan, tussen de twee regels met `---`:** de gegevens (duur,
   groepsgrootte, leeruitkomsten, veelgestelde vragen).
2. **Daaronder:** de lopende tekst van de pagina.

Wijzig wat je wilt en sla op. Als `npm run dev` draait, ververs je de browser en
zie je het resultaat direct.

### De velden op een rij

| Veld | Wat je invult | Verplicht |
|---|---|---|
| `titel` | De kop van de pagina. Moet het woord "agressietraining" bevatten. | ja |
| `slug` | De URL. Houd deze gelijk aan de bestandsnaam. | ja |
| `sector` | Eén van de 19 sectoren, bijvoorbeeld `zorg` of `retail`. | ja |
| `beroepsgroep` | De beroepsgroep, bijvoorbeeld `winkelmedewerkers`. | ja |
| `niveau` | `basis`, `gevorderd` of `expert`. | ja |
| `duur` | Bijvoorbeeld `1 dag` of `2 dagen`. | ja |
| `groepsgrootte` | Bijvoorbeeld `maximaal 10 deelnemers`. | ja |
| `locatie_detail` | Waar de training plaatsvindt. | nee |
| `certificaat` | Bijvoorbeeld `deelnamecertificaat na afloop`. | nee |
| `voorwaarde` | Toelatingseis, bijvoorbeeld een afgeronde basistraining. | nee |
| `doelgroep` | Eén zin: voor wie is deze training? | ja |
| `samenvatting` | 2 tot 3 zinnen. **Moet "Bureau Weerbaar en Veilig" voluit noemen.** | ja |
| `resultaat` | 4 tot 6 leeruitkomsten. | ja |
| `programma` | Minimaal 3 blokken met `titel` en `inhoud`. | ja |
| `werkvormen` | Minimaal 1 werkvorm. | ja |
| `veelgestelde_vragen` | 4 tot 6 vraag-en-antwoordparen. | ja |
| `gerelateerd` | Slugs van verwante trainingen. | ja |

> **Let op bij het typen:** staat er een dubbele punt (`:`) midden in een zin? Zet
> die zin dan tussen dubbele aanhalingstekens. Dus:
> `antwoord: "De training kent drie delen: herkennen, begrenzen en melden."`
> Zonder aanhalingstekens denkt het systeem dat er een nieuw veld begint en
> mislukt de build.

### Een nieuwe training toevoegen

Kopieer een bestaande training die er het meest op lijkt, geef het nieuwe bestand
een nieuwe naam en pas de inhoud aan. Vergeet niet `slug` gelijk te maken aan de
bestandsnaam.

**Gelukt als:** de nieuwe pagina verschijnt op `localhost:4321/trainingen/<slug>/`
en automatisch opduikt in de sector-, beroepsgroep- en niveau-overzichten.

---

## 3. Een wijziging live zetten

**Wat je gaat doen:** je wijzigingen opslaan en naar GitHub sturen. Daar wordt de
site automatisch gebouwd en gepubliceerd.

**Waar je moet staan:** in de projectmap.

**Stap 1: kijk wat je hebt gewijzigd:**

```bash
git status
```

*Je ziet:* een lijst met bestandsnamen in het rood. Dat zijn je wijzigingen.

**Stap 2: selecteer alle wijzigingen:**

```bash
git add .
```

*Je ziet:* niets. Dat is goed: geen bericht betekent gelukt.

**Stap 3: sla ze op met een omschrijving:**

```bash
git commit -m "Duur van de training voor winkelmedewerkers aangepast"
```

*Je ziet:* een regel met het aantal gewijzigde bestanden.

**Stap 4: stuur ze naar GitHub:**

```bash
git push
```

*Je ziet:* enkele regels die eindigen met iets als `main -> main`.

**Gelukt als:** stap 4 zonder foutmelding eindigt. De site staat binnen enkele
minuten live: controleer dat via hoofdstuk 4.

---

## 4. Zien of het live zetten gelukt is

1. Ga naar je repository op **github.com**.
2. Klik bovenaan op het tabblad **Actions**.
3. Bovenaan staat je laatste wijziging, met de omschrijving die je bij de commit
   typte.

| Symbool | Betekenis | Wat te doen |
|---|---|---|
| 🟡 Geel bolletje | De site wordt nu gebouwd | Wachten, meestal 1–3 minuten |
| ✅ Groen vinkje | Gelukt, de nieuwe versie staat live | Niets, klaar |
| ❌ Rood kruis | De build is mislukt | Zie hieronder |

**Belangrijk:** bij een rood kruis blijft de vorige versie van de site gewoon in de
lucht. Een fout haalt de site dus nooit offline.

Bij een rood kruis: klik op de regel met het kruisje, klik op **bouwen**, en scrol
naar de regel in rood. Daar staat welk bestand het probleem veroorzaakt. Zie
hoofdstuk 6 voor de meest voorkomende oorzaken.

---

## 5. Terugdraaien naar de vorige versie

**Wanneer:** je hebt iets live gezet dat niet klopt en je wilt snel terug.

**Waar je moet staan:** in de projectmap.

**Stap 1: zoek de laatste goede versie op:**

```bash
git log --oneline -5
```

*Je ziet:* vijf regels, elk beginnend met een code van zeven tekens, bijvoorbeeld
`a1b2c3d Duur van de training aangepast`. De bovenste is de meest recente.

**Stap 2: maak een nieuwe wijziging die de laatste ongedaan maakt:**

```bash
git revert HEAD
```

*Je ziet:* mogelijk opent er een teksteditor met een voorgestelde omschrijving. Is
dat het geval en zie je onderin `-- INSERT --` niet staan? Typ dan `:wq` en druk op
Enter.

**Stap 3: zet de terugdraaiing live:**

```bash
git push
```

**Gelukt als:** in het tabblad Actions een nieuwe build start en groen wordt. De
oude situatie is dan hersteld.

> **Waarom `revert` en niet iets anders?** `git revert` maakt een nieuwe wijziging
> die de vorige ongedaan maakt. De geschiedenis blijft compleet, en je kunt altijd
> weer terug. Commando's als `git reset --hard` gooien werk definitief weg: die
> heb je hier niet nodig.

---

## 6. De vijf meest voorkomende foutmeldingen

### 1. `bad indentation of a mapping entry`

**Waar:** tijdens `npm run build` of in het rode kruis bij Actions.

**Oorzaak:** in de bovenkant van een trainingsbestand staat een dubbele punt midden
in een zin, of de inspringing (het aantal spaties) klopt niet.

**Oplossing:** zet de betreffende regel tussen dubbele aanhalingstekens:

```yaml
antwoord: "De training kent drie delen: herkennen, begrenzen en melden."
```

De foutmelding noemt het bestand en het regelnummer erbij.

---

### 2. `Expected type "string", received "undefined"` of `Required`

**Oorzaak:** er ontbreekt een verplicht veld in een trainingsbestand.

**Oplossing:** de melding noemt het veld, bijvoorbeeld `doelgroep`. Vul dat veld aan
volgens de tabel in hoofdstuk 2.

---

### 3. `Samenvatting moet "Bureau Weerbaar en Veilig" voluit noemen (GEO-eis)`

**Oorzaak:** in het veld `samenvatting` staat "wij" of een afkorting in plaats van
de volledige naam.

**Oplossing:** schrijf de naam voluit. Dit is bewust ingebouwd: AI-systemen citeren
die openingszin, en dan moet de organisatienaam erin staan.

---

### 4. `npm : The term 'npm' is not recognized`

**Oorzaak:** Node.js is niet geïnstalleerd, of het PowerShell-venster is geopend
vóór de installatie.

**Oplossing:** sluit PowerShell, open een nieuw venster en probeer opnieuw. Werkt
het dan nog niet, installeer Node.js (LTS-versie) van nodejs.org.

---

### 5. `Updates were rejected because the remote contains work that you do not have locally`

**Oorzaak:** er is elders een wijziging naar GitHub gestuurd die jij nog niet hebt.

**Oplossing:** haal die wijzigingen eerst op en probeer daarna opnieuw:

```bash
git pull
```

Daarna:

```bash
git push
```

---

## 7. Het contactformulier aansluiten

Het terugbelformulier werkt via Web3Forms: gratis, geen eigen server, geen tracking.
Zolang de sleutel ontbreekt, staat het formulier zichtbaar maar uitgeschakeld op de
site, met telefoon en e-mail als route.

1. Ga naar **web3forms.com** en vraag een access key aan met het e-mailadres
   `info@bureauweerbaarenveilig.nl`. Je krijgt de sleutel per mail.
2. **Lokaal:** maak in de projectmap een bestand `.env` met daarin één regel:
   ```
   PUBLIC_WEB3FORMS_KEY=jouw-sleutel-hier
   ```
3. **Live:** ga op github.com naar je repository → **Settings** → **Secrets and
   variables** → **Actions** → **New repository secret**. Naam:
   `PUBLIC_WEB3FORMS_KEY`, waarde: dezelfde sleutel.
4. Zet een wijziging live (hoofdstuk 3). Het formulier werkt dan.

**Gelukt als:** je een testbericht verstuurt en dat binnenkomt op
info@bureauweerbaarenveilig.nl. De bezoeker ziet daarna de bedanktpagina.

> Het `.env`-bestand staat in `.gitignore` en gaat dus nooit mee naar GitHub. Dat is
> de bedoeling: sleutels horen niet in een repository.

---

## 8. Een eigen domein koppelen

Zodra de site live staat op een adres als `<gebruikersnaam>.github.io/<repo>`:

1. Ga op github.com naar je repository → **Settings** → **Pages**.
2. Vul bij **Custom domain** in: `bureauweerbaarenveilig.nl` en klik op **Save**.
3. Ga naar de partij waar het domein geregistreerd staat en zet daar de
   DNS-instellingen zoals GitHub die op dat scherm toont.
4. Zet daarna op dezelfde GitHub-pagina **Enforce HTTPS** aan.

**Gelukt als:** `https://bureauweerbaarenveilig.nl` de nieuwe site toont met een
slotje in de adresbalk. Een DNS-wijziging kan enkele uren duren.

---

## 9. Afbeeldingen toevoegen

Afbeeldingen staan in `public/images/`, gesorteerd per soort:

```
public/images/trainingen/     bij trainingspagina's
public/images/sectoren/       bij sectorpagina's
public/images/beroepsgroepen/ bij beroepsgroeppagina's
public/images/kennisbank/     bij artikelen
public/images/team/           portretfoto's
```

Verwijs er in een bestand naar met het pad vanaf `public`, dus zonder `public` zelf:

```yaml
afbeelding:
  src: /images/trainingen/agressietraining-winkelmedewerkers.jpg
  alt: Trainer oefent een winkelsituatie met deelnemers
```

De alt-tekst is verplicht en beschrijft wat er te zien is. Die tekst wordt
voorgelezen aan mensen die de afbeelding niet kunnen zien: schrijf hem dus als een
korte zin, niet als een rij zoekwoorden.

---

## 10. Het originele logobestand plaatsen

De site toont nu een nagebouwde versie van het logo. Heb je het originele bestand
van de ontwerper, dan neemt dat automatisch over zodra je het op de goede plek zet.

1. Zorg dat de map `public/images/logo/` bestaat.
2. Sla het logo daarin op onder precies deze naam:
   ```
   public/images/logo/logo-origineel.svg
   ```
   Een PNG mag ook: `logo-origineel.png`. Voor de donkere footer kun je daarnaast
   een witte versie neerzetten als `logo-origineel-wit.svg`.
3. Start de site opnieuw (`npm run dev`) of zet een wijziging live.

**Gelukt als:** het logo in de kop van de site jouw bestand toont in plaats van de
nagebouwde versie. Er hoeft geen code aangepast te worden.

> **Waarom SVG boven PNG?** Een SVG blijft op elk formaat haarscherp, ook op een
> telefoon met hoge resolutie, en is meestal een fractie van de bestandsgrootte.

---

## Kort naslagwerk

| Ik wil… | Commando |
|---|---|
| De site lokaal bekijken | `npm run dev` |
| Controleren of alles klopt vóór het live zetten | `npm run build` |
| Zien wat ik gewijzigd heb | `git status` |
| Een wijziging live zetten | `git add .` → `git commit -m "..."` → `git push` |
| De laatste wijziging terugdraaien | `git revert HEAD` → `git push` |
| Wijzigingen van GitHub ophalen | `git pull` |
