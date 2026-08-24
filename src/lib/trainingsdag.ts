/**
 * Hoe een trainingsdag verloopt.
 *
 * Deze vijf blokken stonden alleen op /trainingsgids/de-trainingsdag/. Ze staan
 * nu ook op de homepage, want het is het antwoord op de vraag die iedereen
 * heeft die nog nooit een training bij ons heeft geboekt: wat gebeurt er die
 * dag eigenlijk? Dat hoort niet vier klikken diep te staan.
 *
 * Eén bron, twee plekken: de gids toont de volledige toelichting, de homepage
 * alleen de titels. Zo kunnen ze niet uit elkaar lopen.
 *
 * De volgorde ligt niet vast — elke training wordt afgestemd op de
 * beroepsgroep — maar de opbouw is dit wel. Aantallen staan er bewust niet in,
 * alleen de patronen: die veranderen minder vaak dan een groepsgrootte.
 */
export interface Dagdeel {
  titel: string;
  /** Volledige toelichting, alleen gebruikt op de gidspagina. */
  inhoud: string;
  /** Korte variant voor de homepage: één regel, geen tweede zin. */
  kort: string;
}

export const TRAININGSDAG: Dagdeel[] = [
  {
    titel: 'Aankomst en afspraken',
    inhoud:
      'Kennismaken en vastleggen wat er in de zaal blijft. Zonder die afspraak brengt niemand een situatie in waar hij zich ongemakkelijk over voelt, en dan valt de training terug op theorie.',
    kort: 'Vastleggen wat er in de zaal blijft. Zonder die afspraak brengt niemand iets echts in.',
  },
  {
    titel: 'Herkennen: wat gebeurt hier eigenlijk?',
    inhoud:
      'Het onderscheid tussen agressie uit emotie en agressie als middel. Dat onderscheid bepaalt je hele reactie: bij de eerste werkt begrip tonen, bij de tweede werkt het averechts.',
    kort: 'Agressie uit emotie of agressie als middel — dat onderscheid bepaalt je hele reactie.',
  },
  {
    titel: 'Eigen casuïstiek op tafel',
    inhoud:
      'Deelnemers brengen situaties in uit hun eigen werk. Dit is het deel waar de training staat of valt, en de reden dat we vooraf vragen om voorbeelden te verzamelen.',
    kort: 'Situaties uit het eigen werk. Hier staat of valt de training.',
  },
  {
    titel: 'Oefenen',
    inhoud:
      'Praktijkgericht oefenen met de ingebrachte situaties, met directe feedback. Geen bedachte rollenspellen met een acteur die overdrijft, maar de situatie zoals hij zich echt voordeed.',
    kort: 'Met de ingebrachte situaties, niet met een bedacht rollenspel.',
  },
  {
    titel: 'Afspraken voor morgen',
    inhoud:
      'Wat neemt het team mee naar de werkvloer, en wat vraagt dat van de organisatie? Hier komen bijna altijd punten uit die verder gaan dan de individuele vaardigheid.',
    kort: 'Wat het team meeneemt, en wat dat van de organisatie vraagt.',
  },
];
