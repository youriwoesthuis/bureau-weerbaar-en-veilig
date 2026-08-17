/**
 * Maakt een intern pad geschikt voor de plek waar de site draait.
 *
 * Op het eigen domein (bureauweerbaarenveilig.nl) staat de site in de hoofdmap
 * en verandert er niets. Op de voorbeeldomgeving van GitHub Pages staat hij in
 * een submap; dan zet deze functie die submap ervoor, zodat elke link blijft
 * werken. De submap komt uit de instelling `base` in astro.config.mjs.
 */
export function link(pad: string): string {
  if (!pad.startsWith('/')) return pad;
  const basis = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${basis}${pad}`;
}
