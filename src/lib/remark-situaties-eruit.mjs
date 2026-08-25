/**
 * Haalt "## Herkenbare praktijksituaties" en de opsomming eronder uit de
 * gerenderde markdown.
 *
 * ── Waarom dit bestaat ──
 *
 * De praktijksituaties staan in de body van elk trainingsbestand, en dat blijft
 * zo: het is de enige bron van waarheid, en src/lib/situaties.ts leest ze daar
 * uit voor de homepage, de sectorpagina's en het uitklapblok op de
 * trainingspagina zelf.
 *
 * Sinds dat uitklapblok bestaat, zou <Content /> ze een tweede keer op dezelfde
 * pagina zetten. Twee keer dezelfde zes zinnen is niet alleen slordig om te
 * lezen — het is dubbele inhoud binnen één document, en dat verzwakt precies de
 * passage waarop deze pagina's gevonden moeten worden.
 *
 * Deze plugin snijdt de sectie weg vlak voordat de HTML gemaakt wordt. De
 * markdown verandert niet, de extractie blijft werken, en de bezoeker ziet de
 * situaties één keer: in het blok waar je ze kunt openklappen.
 *
 * Verdwijnt het kopje ooit uit een bestand, dan doet deze plugin daar niets —
 * geen fout, geen lege sectie.
 */
const KOPTEKST = 'Herkenbare praktijksituaties';

export function remarkSituatiesEruit() {
  return (tree) => {
    const kinderen = tree.children;
    const i = kinderen.findIndex(
      (node) =>
        node.type === 'heading' &&
        node.depth === 2 &&
        node.children?.map((k) => k.value ?? '').join('').trim() === KOPTEKST
    );
    if (i === -1) return;

    /*
      Alles weghalen vanaf het kopje tot de eerstvolgende kop van gelijk of
      hoger niveau. Zo verdwijnt de opsomming mee, ook als er een inleidende
      zin tussen staat, en blijft de rest van het document intact.
    */
    let eind = i + 1;
    while (
      eind < kinderen.length &&
      !(kinderen[eind].type === 'heading' && kinderen[eind].depth <= 2)
    ) {
      eind++;
    }

    kinderen.splice(i, eind - i);
  };
}
