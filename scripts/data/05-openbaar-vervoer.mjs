/** Brongegevens sector OPENBAAR VERVOER: bureauwenv.wizzinc-dev2.nl. */

export const sector = {
  naam: 'Openbaar vervoer',
  slug: 'openbaar-vervoer',
  samenvatting:
    'Bureau Weerbaar en Veilig traint personeel in het openbaar vervoer in het omgaan met agressie in een rijdend voertuig, waar wegkomen geen optie is. Voor treinpersoneel, conducteurs, metro- en trambestuurders en buschauffeurs, elk in drie niveaus.',
  afbeeldingAlt: 'Conducteur controleert vervoerbewijzen in een trein',
  intro: [
    'Agressie in het openbaar vervoer heeft één bepalend kenmerk: het gebeurt in een rijdend voertuig. Er is beperkte bewegingsvrijheid, geen deur om achter te verdwijnen en vaak een volle wagen met publiek dat meekijkt of meefilmt.',
    'Daarbij is de medewerker verantwoordelijk voor tientallen reizigers tegelijk. Een chauffeur of bestuurder moet de-escaleren én veilig blijven rijden. Bureau Weerbaar en Veilig traint deze beroepsgroepen daarom expliciet op besluiten onder druk: doorrijden, stoppen, melden of opschalen.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Treinpersoneel & conducteurs',
    slug: 'treinpersoneel',
    afbeelding: 'treinpersoneel.jpg',
    afbeeldingAlt: 'Conducteur in gesprek met een reiziger op een perron',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor treinpersoneel, conducteurs en metro- en trambestuurders in drie niveaus. Van agressie in het voertuig de-escaleren (basis) tot probleemreizigers en crisisbesluiten (gevorderd) en agressiebeleid per lijn (expert).',
    intro: [
      'Een conducteur die iemand zonder geldig vervoerbewijs aanspreekt, doet dat in een afgesloten ruimte met publiek. Wegkomen kan niet, en versterking is minuten weg.',
      'Voor bestuurders komt daar de verantwoordelijkheid voor de rit bij: elk besluit over stoppen of doorrijden raakt de veiligheid van alle reizigers. Bureau Weerbaar en Veilig traint conducteurs en bestuurders daarom op hun eigen rol.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor treinpersoneel, conducteurs en metro- en trambestuurders',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Treinpersoneel, conducteurs en metro- en trambestuurders met direct reizigerscontact.',
        samenvatting:
          'De agressietraining voor treinpersoneel, conducteurs en metro- en trambestuurders van Bureau Weerbaar en Veilig leert medewerkers agressie herkennen en de-escaleren in een rijdend voertuig met beperkte vluchtmogelijkheden. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Verschillende agressievormen herkennen: frustratie, instrumenteel gedrag en gedrag onder invloed',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Situaties de-escaleren',
          'Het agressieprotocol correct toepassen',
          'Incidenten correct melden',
        ],
        programma: [
          ['Agressie in een afgesloten ruimte', 'Wat het betekent om te de-escaleren in een rijdend voertuig zonder vluchtmogelijkheid.'],
          ['Reguleren onder druk', 'Rustig blijven wanneer een reiziger weigert uit te stappen of een groep de coupé verstoort.'],
          ['Begrenzen en de-escaleren', 'Verbaal begrenzen bij controle op vervoerbewijzen en bij conflicten tussen reizigers.'],
          ['Onder invloed', 'Handelen bij passagiers onder invloed met onvoorspelbaar gedrag.'],
          ['Gefilmd worden, protocol en melden', 'Professioneel blijven wanneer optreden wordt gefilmd, en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met ov-ervaring',
          'casuïstiek van de eigen lijnen',
          'theorie alleen waar die de praktijk ondersteunt',
        ],
        situaties: [
          'Reizigers zonder geldig vervoerbewijs die weigeren uit te stappen',
          'Jongeren die de coupé verstoren en intimideren',
          'Passagiers onder invloed met onvoorspelbaar gedrag',
          'Conflicten tussen reizigers in een rijdend voertuig',
          'Verbale agressie op het perron',
          'Optreden dat wordt gefilmd voor klachten of sociale media',
        ],
        waarom: [
          'Medewerkers in het rail- en stadsvervoer werken in rijdende voertuigen met beperkte vluchtmogelijkheden en een hoge passagiersdichtheid. Een conflict is er direct zichtbaar voor iedereen.',
          'Zonder training leidt dat tot stress en handelingsverlegenheid bij grensoverschrijdend gedrag. De basistraining van Bureau Weerbaar en Veilig geeft concrete vaardigheden voor precies die omstandigheden.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-buschauffeurs-basis', 'agressietraining-handhavers-boas-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor treinpersoneel, conducteurs en metro- en trambestuurders',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Treinpersoneel, conducteurs en metro- en trambestuurders met basistraining die regelmatig complexe agressie-incidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor het rail- en stadsvervoer van Bureau Weerbaar en Veilig richt zich op bekende probleemreizigers, groepsdruk en crisisbesluiten zoals doorrijden of een noodstop. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Instrumentele agressie onderscheiden van frustratie-agressie',
          'Crisissituaties snel beoordelen',
          'Groepsdruk weerstaan en consequent handelen',
          'Professioneel optreden wanneer er wordt gefilmd',
          'Effectief communiceren met de meldcentrale',
        ],
        programma: [
          ['Probleemreizigers', 'Bekende reizigers die structureel overlast veroorzaken consequent aanpakken.'],
          ['Instrumentele agressie', 'Herkennen wanneer agressie wordt ingezet om aan een boete te ontkomen.'],
          ['Crisisbesluiten', 'Snel beoordelen of je doorrijdt, stopt of de noodstop gebruikt.'],
          ['Groepsdruk', 'Consequent handelen wanneer een groep intimideert of afleiding creëert.'],
          ['Meldcentrale en camera', 'Effectief communiceren met de meldcentrale en professioneel blijven onder filmtoezicht.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen lijnen',
          'onderscheid tussen de rol van conducteur en bestuurder',
          'oefenen met de beschikbare communicatiemiddelen',
        ],
        situaties: [
          'Bekende probleemreizigers die structureel overlast veroorzaken',
          'Groepen die intimideren of afleiding creëren',
          'Instrumentele agressie om aan een boete te ontkomen',
          'Crisissituaties waarin een besluit over doorrijden of noodstop nodig is',
          'Optreden dat bewust wordt gefilmd',
        ],
        waarom: [
          'Sommige agressie in het ov is niet impulsief maar structureel: dezelfde reizigers, dezelfde lijnen, hetzelfde patroon. En het speelt in een afgesloten, rijdend voertuig waar directe hulp ontbreekt.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die situaties en op de besluiten die je in enkele seconden moet nemen.',
        ],
        vragen: [
          [
            'Wordt onderscheid gemaakt tussen conducteurs en bestuurders?',
            'Ja. De rollen verschillen wezenlijk: een bestuurder moet de rit veilig houden, een conducteur staat in het contact. De training behandelt beide rollen apart.',
          ],
        ],
        gerelateerd: ['agressietraining-buschauffeurs-gevorderd', 'agressietraining-handhavers-boas-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in het rail- en stadsvervoer',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende functie met aantoonbare werkervaring met agressiesituaties',
        doelgroep:
          'Lijnmanagers, depotmanagers en veiligheidscoördinatoren in het openbaar vervoer.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in het rail- en stadsvervoer van Bureau Weerbaar en Veilig leert leidinggevenden agressiepatronen per lijn analyseren, escalatie- en meldbeleid opzetten en medewerkers coachen na incidenten. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen per lijn analyseren en vertalen naar maatregelen',
          'Het agressieprotocol toetsen op bruikbaarheid',
          'Medewerkers coachen na incidenten',
          'Escalatie- en meldbeleid opzetten',
          'Juridische verantwoordelijkheid begrijpen en communiceren',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Patronen per lijn', 'Meldingsdata per lijn analyseren zodat structurele probleemlijnen zichtbaar worden.'],
          ['Protocol toetsen', 'Werkt het agressieprotocol ook in een volle tram op vrijdagavond? Toetsen en aanscherpen.'],
          ['Rituitval en politie', 'Helder beleid over wanneer ritten worden gestaakt en de politie wordt ingeschakeld.'],
          ['Coachen en nazorg', 'Structurele coaching en nazorg na incidenten inrichten.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: [
          'beleidsanalyse op basis van meldingsdata per lijn',
          'casuïstiekbespreking',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Incidenten worden onvoldoende gemeld, waardoor probleemlijnen onzichtbaar blijven',
          'Medewerkers reageren inconsistent op vergelijkbare situaties',
          'Structurele nazorg ontbreekt',
          'Het beleid over rituitval en politie-inschakeling is onduidelijk',
        ],
        waarom: [
          'Incidenten in het openbaar vervoer zijn zelden volledig te voorkomen. Wat een vervoerder wél kan sturen: hoe medewerkers reageren en hoe snel de organisatie leert van wat er gebeurt.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op die organisatiekant, met meldingsdata per lijn als startpunt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-buschauffeurs-expert', 'agressietraining-handhavers-boas-expert'],
      },
    ],
  },

  {
    naam: 'Buschauffeurs',
    slug: 'buschauffeurs',
    afbeelding: 'buschauffeurs.jpg',
    afbeeldingAlt: 'Buschauffeur achter het stuur van een stadsbus',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor buschauffeurs in drie niveaus. Van agressie bij het inchecken de-escaleren (basis) tot probleemreizigers en crisisbesluiten (gevorderd) en agressiebeleid per lijn (expert).',
    intro: [
      'Een buschauffeur werkt alleen, achter een stuur, met tientallen reizigers in de rug. Bij een conflict kan hij niet weglopen en niet even overleggen, en tegelijk moet de bus veilig blijven rijden.',
      'Die combinatie van beperkte bewegingsvrijheid, volle publieke zichtbaarheid en verantwoordelijkheid voor iedereen aan boord maakt de positie van de chauffeur kwetsbaar. Bureau Weerbaar en Veilig traint daar specifiek op.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor buschauffeurs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Alle buschauffeurs in het stads- en streekvervoer.',
        samenvatting:
          'De agressietraining voor buschauffeurs van Bureau Weerbaar en Veilig leert chauffeurs agressie herkennen, begrenzen en de-escaleren terwijl zij alleen in een rijdend voertuig verantwoordelijk zijn voor tientallen reizigers. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Verschillende vormen van agressie herkennen',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Situaties de-escaleren',
          'Het agressieprotocol van het bedrijf toepassen',
          'Incidenten correct melden',
        ],
        programma: [
          ['Alleen achter het stuur', 'Wat het betekent om te de-escaleren zonder collega en zonder de bus te kunnen verlaten.'],
          ['Reguleren onder druk', 'Rustig blijven bij reizigers die weigeren in te checken of verstorend gedrag vertonen.'],
          ['Begrenzen en de-escaleren', 'Verbaal begrenzen zonder de rit en de andere reizigers uit het oog te verliezen.'],
          ['Onder invloed en conflicten', 'Handelen bij passagiers onder invloed en bij conflicten tussen reizigers.'],
          ['Protocol en melden', 'Het agressieprotocol van het bedrijf toepassen en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit het openbaar vervoer',
          'herkenbare situaties uit de eigen lijnen',
          'praktijkgericht oefenen zonder naïeve rollenspellen',
        ],
        situaties: [
          'Reizigers die weigeren in te checken',
          'Jongeren die verstorend gedrag vertonen',
          'Passagiers onder invloed',
          'Conflicten tussen reizigers onderling',
        ],
        waarom: [
          'Buschauffeurs werken alleen in een rijdend voertuig en zijn tegelijk verantwoordelijk voor tientallen reizigers. De combinatie van beperkte bewegingsvrijheid, publieke zichtbaarheid en volledige afhankelijkheid van de situatie maakt hun positie kwetsbaar.',
          'De basistraining van Bureau Weerbaar en Veilig geeft chauffeurs handvatten die werken binnen precies die beperkingen.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-treinpersoneel-basis', 'agressietraining-taxichauffeurs-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor buschauffeurs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'afgeronde basistraining of aantoonbare werkervaring met agressie-incidenten in het openbaar vervoer',
        doelgroep:
          'Buschauffeurs met een afgeronde basistraining die regelmatig complexe agressie-incidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor buschauffeurs van Bureau Weerbaar en Veilig richt zich op structureel escalerende patronen: bekende probleemreizigers, groepsdruk en crisisbesluiten in een rijdende bus. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of aantoonbare werkervaring.',
        resultaat: [
          'Instrumentele agressie onderscheiden van frustratie-agressie',
          'Bekende probleemreizigers herkennen en consistent aanpakken',
          'Crisissituaties beoordelen: stoppen, melden of evacueren',
          'Professioneel reageren op provocatie en filmen',
          'Groepsdruk weerstaan',
          'Bruikbare meldingen doen',
        ],
        programma: [
          ['Probleemreizigers', 'Reizigers die structureel problemen veroorzaken herkennen en consistent aanpakken.'],
          ['Crisisbesluiten', 'Beoordelen wanneer je stopt, meldt of evacueert: met een volle bus.'],
          ['Groepsdruk', 'Standhouden wanneer een groep samenwerkt om druk uit te oefenen.'],
          ['Provocatie en camera', 'Professioneel reageren wanneer je bewust wordt uitgelokt en gefilmd.'],
          ['Bruikbaar melden', 'Meldingen doen waar de organisatie werkelijk iets mee kan.'],
        ],
        werkvormen: [
          'casuïstiek van deelnemers zelf',
          'patroonanalyse door de trainer',
          'directe feedback op besluitvorming',
        ],
        situaties: [
          'Bekende reizigers die structureel problemen veroorzaken',
          'Dronken reizigers die weigeren te vertrekken',
          'Groepen die samenwerken om druk uit te oefenen',
          'Crisissituaties in een rijdend voertuig',
          'Optreden dat bewust wordt gefilmd',
        ],
        waarom: [
          'Sommige agressie is niet impulsief en vraagt meer dan basisvaardigheden. Het gaat om patronen die structureel escaleren, op momenten dat de chauffeur er alleen voor staat.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die situaties, met nadruk op besluitvorming: stoppen, melden of doorrijden.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-treinpersoneel-gevorderd', 'agressietraining-taxichauffeurs-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in het openbaar vervoer',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende functie met aantoonbare werkervaring',
        doelgroep: 'Lijnmanagers, depotmanagers en veiligheidscoördinatoren in het openbaar vervoer.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in het openbaar vervoer van Bureau Weerbaar en Veilig leert leidinggevenden agressiepatronen per lijn analyseren, escalatie- en meldbeleid implementeren en chauffeurs structureel coachen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen per lijn analyseren en vertalen naar maatregelen',
          'Het agressieprotocol testen op praktische bruikbaarheid',
          'Chauffeurs structureel coachen na incidenten',
          'Escalatie- en meldbeleid implementeren',
          'Juridische verantwoordelijkheid begrijpen en communiceren',
          'De meldcultuur binnen het bedrijf versterken',
        ],
        programma: [
          ['Meldingsdata per lijn', 'Analyseren waar het structureel misgaat, zodat probleemlijnen zichtbaar worden.'],
          ['Protocol op bruikbaarheid', 'Toetsen of het protocol werkt voor een chauffeur die alleen achter het stuur zit.'],
          ['Rituitval en politie', 'Duidelijk maken wanneer een rit wordt gestaakt en de politie wordt ingeschakeld.'],
          ['Coachen na incidenten', 'Structurele coaching van chauffeurs inrichten.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid, meldingsdata per lijn en bedrijfscultuur',
          'casuïstiekbespreking',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Incidenten worden onvoldoende gemeld of nabesproken, waardoor structurele probleemlijnen onzichtbaar blijven',
          'Chauffeurs reageren inconsistent op vergelijkbare situaties',
          'Onduidelijkheid over wanneer ritten worden gestaakt en de politie wordt ingeschakeld',
          'Structurele nazorg na ernstige incidenten ontbreekt',
        ],
        waarom: [
          'Agressie-incidenten in het openbaar vervoer zijn moeilijk volledig te voorkomen. Cruciaal is hoe de organisatie erop reageert en ervan leert.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich daarom op beleid, meldcultuur en de coaching van chauffeurs.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-treinpersoneel-expert', 'agressietraining-taxichauffeurs-expert'],
      },
    ],
  },
];
