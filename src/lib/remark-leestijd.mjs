/**
 * Remark-plugin die de leestijd van een artikel berekent.
 *
 * Draait tijdens het bouwen van de site, dus er komt geen JavaScript in de
 * browser bij. De uitkomst is via `remarkPluginFrontmatter` beschikbaar in de
 * paginasjablonen.
 *
 * Rekent met 200 woorden per minuut: het gangbare tempo voor informatieve tekst
 * in het Nederlands. Onderdelen die je niet leest zoals code worden meegeteld als
 * gewone tekst; dat maakt bij deze artikelen geen verschil.
 */

/** Verzamelt alle leesbare tekst uit de markdown-boom. */
function telWoorden(knoop) {
  let aantal = 0;

  if (typeof knoop.value === 'string') {
    const woorden = knoop.value.trim().split(/\s+/).filter(Boolean);
    aantal += woorden.length;
  }

  if (Array.isArray(knoop.children)) {
    for (const kind of knoop.children) aantal += telWoorden(kind);
  }

  return aantal;
}

const WOORDEN_PER_MINUUT = 200;

export function remarkLeestijd() {
  return (boom, bestand) => {
    const woorden = telWoorden(boom);
    const minuten = Math.max(1, Math.round(woorden / WOORDEN_PER_MINUUT));

    const frontmatter = bestand.data?.astro?.frontmatter;
    if (frontmatter) {
      frontmatter.woorden = woorden;
      frontmatter.leestijd = minuten;
    }
  };
}
