# Bureau Weerbaar en Veilig: website

De website van Bureau Weerbaar en Veilig: 132 agressietrainingen verdeeld over 19
sectoren en 44 beroepsgroepen, in drie niveaus.

Uitgebreide, stap-voor-stap uitleg staat in **[WERKWIJZE.md](WERKWIJZE.md)**: begin
daar als je de site voor het eerst opstart of iets wilt wijzigen.

## De vier commando's die je nodig hebt

Voer ze uit in de projectmap (`bureau-weerbaar-en-veilig`).

| Commando | Wat het doet |
|---|---|
| `npm install` | Haalt de bouwpakketten op. Eenmalig, en na het ophalen van wijzigingen. |
| `npm run dev` | Start de site lokaal op http://localhost:4321: wijzigingen zijn direct zichtbaar. |
| `npm run build` | Bouwt de definitieve site in de map `dist/` en controleert alle content. |
| `npm run preview` | Toont de gebouwde site zoals hij live komt te staan. |

## Waar staat wat

```
src/content/trainingen/      132 trainingen (één markdown-bestand per training)
src/content/sectoren/        19 sectorpagina's
src/content/beroepsgroepen/  44 beroepsgroeppagina's
src/content/kennisbank/      artikelen
src/content/team/            teamleden voor /over-ons/
src/pages/                   de paginasjablonen
src/components/              herbruikbare onderdelen (kruimelpad, niveaubadge, ...)
src/styles/global.css        huisstijlkleuren en typografie
src/lib/redirects.ts         mapping van oude naar nieuwe URL's
scripts/                     generator + brongegevens per sector
public/                      afbeeldingen, robots.txt
```

## Documenten bij dit project

- **[CLAUDE.md](CLAUDE.md)**: de projectbrief en werkafspraken
- **[MERKGROEP.md](MERKGROEP.md)**: hoe deze site zich verhoudt tot actinmove.nl
  en agressievisie.nl — leidend bij alles wat de drie merken samen raakt
- **[WERKWIJZE.md](WERKWIJZE.md)**: handleiding voor dagelijks gebruik
- **[DESIGN.md](DESIGN.md)**: kleuren, typografie en componenten
- **[contentmodel.md](contentmodel.md)**: welke velden een training heeft
- **[content-inventaris.md](content-inventaris.md)**: alle content van de oude site
- **[redirects.md](redirects.md)**: verantwoording van de URL-wijzigingen

## Techniek

Astro (statische site), Tailwind CSS, markdown-content met getypeerd schema.
Publicatie via GitHub Pages; elke push naar `main` bouwt en publiceert automatisch.
