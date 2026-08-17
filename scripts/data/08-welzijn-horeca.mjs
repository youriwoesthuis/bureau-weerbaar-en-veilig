/**
 * Brongegevens sectoren WELZIJN en HORECA: bureauwenv.wizzinc-dev2.nl.
 * Twee sectoren in één databestand; `sector` hieronder is welzijn, horeca staat
 * per beroepsgroep met een eigen `sector`-sleutel en een eigen sectorbestand.
 */

export const sector = {
  naam: 'Welzijn',
  slug: 'welzijn',
  samenvatting:
    'Bureau Weerbaar en Veilig traint maatschappelijk werkers in het stellen van grenzen binnen een hulpverleningsrelatie, zonder de professionele nabijheid te verliezen. Voor maatschappelijk werkers, in drie niveaus.',
  afbeeldingAlt: 'Maatschappelijk werker in gesprek met een cliënt',
  intro: [
    'In het maatschappelijk werk is agressie zelden zomaar agressie. Voor veel cliënten is het de enige manier die zij kennen om duidelijk te maken dat iets niet gaat, en de hulpverlener is degene die dat moet begrijpen én begrenzen.',
    'Dat is precies de spanning die dit vak kenmerkt: de professionele norm is nabijheid, betrokkenheid en niet opgeven. Grenzen stellen voelt daardoor snel als falen. Bureau Weerbaar en Veilig maakt die norm expliciet onderwerp van de training.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Maatschappelijk werkers',
    slug: 'maatschappelijk-werkers',
    sector: 'welzijn',
    afbeelding: 'maatschappelijk-werkers.jpg',
    afbeeldingAlt: 'Maatschappelijk werker voert een huisbezoek uit bij een cliënt',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor maatschappelijk werkers in drie niveaus. Van grenzen stellen binnen de hulpverleningsrelatie (basis) tot manipulatie en grensvervaging in langdurige trajecten (gevorderd) en een agressieprotocol dat past bij de hulpverleningsnorm (expert).',
    intro: [
      'Maatschappelijk werkers zoeken mensen op in hun eigen omgeving, vaak op het moment dat het leven van die mensen vastloopt. Een afgewezen hulpvraag of een noodzakelijke grens kan dan hard aankomen.',
      'Wat dit werk risicovol maakt is niet alleen de cliënt maar ook de eigen beroepshouding: doorgaan, begrijpen, niet opgeven. Bureau Weerbaar en Veilig richt de training daarom net zo veel op de professional als op de cliënt.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor maatschappelijk werkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Alle maatschappelijk werkers met direct cliëntcontact.',
        samenvatting:
          'De agressietraining voor maatschappelijk werkers van Bureau Weerbaar en Veilig leert hulpverleners agressie herkennen en begrenzen zonder de hulpverleningsrelatie op te geven, inclusief veilig handelen bij huisbezoeken. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Vormen van agressie herkennen',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag begrenzen',
          'Situaties de-escaleren',
          'Veilig handelen bij huisbezoeken',
          'Incidenten correct melden',
        ],
        programma: [
          ['Agressie als communicatie', 'Herkennen waarom agressie voor sommige cliënten de enige beschikbare taal is.'],
          ['Reguleren onder druk', 'De eigen reactie beheersen bij crisis en dreigend gedrag.'],
          ['Begrenzen zonder op te geven', 'Grenzen stellen bij een afgewezen hulpvraag, zonder de relatie te verbreken.'],
          ['Veilig op huisbezoek', 'Veilig handelen bij thuisbezoeken en bij agressie vanuit de omgeving van de cliënt.'],
          ['Contact buiten werktijd en melden', 'Omgaan met ongewenst contact buiten werktijd en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met ervaring in het maatschappelijk werk',
          'casuïstiek uit de eigen praktijk',
          'expliciete aandacht voor de professionele norm van nabijheid',
        ],
        situaties: [
          'Agressie bij een grensstelling of afgewezen hulpvraag',
          'Crisis en dreigend gedrag',
          'Onvoorspelbare reacties bij psychiatrische problematiek',
          'Verbale intimidatie bij moeilijke mededelingen',
          'Ongewenst contact buiten werktijd',
          'Agressie vanuit de omgeving van de cliënt',
        ],
        waarom: [
          'Maatschappelijk werkers werken met kwetsbare mensen bij wie agressie soms de enige beschikbare communicatievorm is. Dat vraagt begrip én de vaardigheid om te begrenzen.',
          'Zonder training ontstaat handelingsverlegenheid en op termijn burn-out. De basistraining van Bureau Weerbaar en Veilig geeft hulpverleners daarom concrete handvatten, met erkenning van de beroepsnorm van nabijheid.',
        ],
        vragen: [
          [
            'Botst grenzen stellen niet met de hulpverleningsrelatie?',
            'Dat is precies de spanning die deze training behandelt. Grenzen stellen kan juist bijdragen aan een werkbare relatie: de professionele norm van nabijheid komt expliciet aan bod.',
          ],
        ],
        gerelateerd: ['agressietraining-sociale-dienst-uitkeringsinstanties-basis', 'agressietraining-reclasseringsmedewerkers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor maatschappelijk werkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Maatschappelijk werkers met een afgeronde basistraining die werken met complexe, langdurige cliëntsituaties.',
        samenvatting:
          'De gevorderde agressietraining voor maatschappelijk werkers van Bureau Weerbaar en Veilig richt zich op langdurige trajecten waarin grenzen vervagen: manipulatie, benadering in de privésfeer en agressie vanuit het netwerk van de cliënt. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Complexe agressiepatronen in langdurige relaties herkennen',
          'Grenzen handhaven zonder overmatige betrokkenheid',
          'Professioneel omgaan met manipulatie en grensverlegging',
          'Veiligheidsmaatregelen nemen bij ongewenste benadering',
          'Veiligheidstaxatie toepassen bij meervoudige problematiek',
          'Teamoverleg effectief benutten',
        ],
        programma: [
          ['Patronen in langdurige relaties', 'Herkennen hoe grenzen over maanden of jaren verschuiven.'],
          ['Manipulatie en grensverlegging', 'Professioneel omgaan met cliënten die de hulpverlening bewust manipuleren.'],
          ['Privésfeer', 'Veiligheidsmaatregelen bij benadering buiten werktijd of in de privésfeer.'],
          ['Meervoudige problematiek', 'Veiligheidstaxatie bij psychiatrie en verslaving, en agressie vanuit het cliëntnetwerk.'],
          ['Compassiemoeheid en team', 'De eigen belasting herkennen en het teamoverleg effectief benutten.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen praktijk',
          'feedback op patronen die de hulpverlener zelf niet ziet',
          'aandacht voor compassiemoeheid',
        ],
        situaties: [
          'Cliënten die de hulpverlening bewust manipuleren en grenzen verschuiven',
          'Agressie verweven met meervoudige problematiek zoals psychiatrie en verslaving',
          'Ongewenste benadering buiten werktijd of in de privésfeer',
          'Agressie vanuit het netwerk van de cliënt: partner, familie of derden',
          'Langdurige relaties met vervaagde professionele grenzen',
        ],
        waarom: [
          'In langdurige hulpverleningsrelaties is agressie niet impulsief maar geworden: patronen slijten in, grenzen schuiven op en de hulpverlener ziet het zelf als laatste.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig gaat verder dan basisvaardigheden en richt zich op situaties waarin de professionele relatie zelf risico loopt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-sociale-dienst-participatiewet-gevorderd', 'agressietraining-reclasseringsmedewerkers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in het maatschappelijk werk',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende ervaring met een hulpverleningsteam',
        doelgroep:
          'Teamleiders, coördinatoren en afdelingshoofden in het maatschappelijk werk en welzijn.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in het maatschappelijk werk van Bureau Weerbaar en Veilig leert leidinggevenden een agressieprotocol ontwikkelen dat aansluit op de hulpverleningsnorm en medewerkers coachen zonder melden te ontmoedigen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen en veiligheidsrisico’s op teamniveau herkennen',
          'Een agressieprotocol ontwikkelen dat aansluit op de hulpverleningsnorm',
          'Medewerkers coachen na incidenten zonder melden te ontmoedigen',
          'Beleid opstellen voor huisbezoeken en ongewenst contact buiten werktijd',
          'De meldcultuur versterken als vorm van professioneel handelen',
        ],
        programma: [
          ['Patronen op teamniveau', 'Agressiepatronen en veiligheidsrisico’s in het team zichtbaar maken.'],
          ['Protocol dat past bij de hulpverlening', 'Een agressieprotocol ontwikkelen dat niet botst met de hulpverleningsnorm.'],
          ['Grensvervaging als veiligheidsrisico', 'Grensvervaging leren zien als veiligheidsrisico in plaats van als betrokkenheid.'],
          ['Beleid huisbezoeken', 'Beleid opstellen voor veiligheid bij huisbezoeken en voor ongewenst contact buiten werktijd.'],
          ['Melden als professionaliteit', 'Coachen na incidenten zodat melden niet als falen voelt maar als vakmanschap.'],
        ],
        werkvormen: [
          'analyse van teampatronen en bestaand beleid',
          'beleidsontwikkeling toegespitst op de hulpverleningscontext',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers melden agressie-incidenten niet omdat het voelt als falen',
          'Grensvervaging wordt niet herkend als veiligheidsrisico',
          'Er is geen structureel beleid voor veiligheid bij huisbezoeken',
          'Debriefing na ernstige incidenten ontbreekt',
          'Het agressieprotocol sluit niet aan op de hulpverleningsnormen',
        ],
        waarom: [
          'Agressie is in het maatschappelijk werk structureel. De grootste belemmering is echter niet de agressie zelf maar de beroepscultuur: melden voelt als falen, en grensvervaging heet betrokkenheid.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt leidinggevenden beleid te maken dat zowel de veiligheid van medewerkers als de hulpverleningsmissie borgt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-sociale-dienst-participatiewet-expert', 'agressietraining-reclasseringsmedewerkers-expert'],
      },
    ],
  },

  {
    naam: 'Horecabediening, gastheren & gastvrouwen',
    slug: 'horeca-bediening',
    sector: 'horeca',
    afbeelding: 'horeca-bediening.jpg',
    afbeeldingAlt: 'Medewerker bedient gasten op een druk terras',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor bediening, gastheren en gastvrouwen in de horeca in drie niveaus. Van weigeren zonder escalatie en seksuele intimidatie benoemen (basis) tot groepsdynamiek en zware intoxicatie (gevorderd) en normen en meldcultuur op locatie (expert).',
    intro: [
      'In de horeca is de gast koning, en dat is precies wat grenzen stellen zo moeilijk maakt. Wie een alcoholweigering moet uitspreken of een gast op gedrag moet aanspreken, gaat in tegen de gastvrijheidsnorm waarop het werk is gebouwd.',
      'Daar komt bij dat seksuele intimidatie in deze sector veel voorkomt en vaak wordt weggelachen als "hoort erbij". Bureau Weerbaar en Veilig benoemt dat expliciet en behandelt de spanning tussen gastvrijheid en grenzen als kernonderwerp.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor bediening, gastheren en gastvrouwen in de horeca',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Bedienend personeel, gastheren en gastvrouwen met direct gastencontact in de horeca.',
        samenvatting:
          'De agressietraining voor bediening, gastheren en gastvrouwen van Bureau Weerbaar en Veilig leert horecapersoneel spanning vroeg herkennen, een weigering professioneel formuleren en grensoverschrijdend gedrag benoemen, inclusief seksuele intimidatie. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Signalen van oplopende spanning herkennen voordat escalatie optreedt',
          'De eigen reactie reguleren onder druk, ondanks de gastvrijheidsnorm',
          'Een weigering professioneel formuleren zonder onnodige escalatie',
          'Grensoverschrijdend gedrag benoemen, inclusief seksuele intimidatie',
          'Collega’s op het juiste moment inschakelen',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Spanning zien oplopen', 'Signalen herkennen voordat een gast omslaat, ook in een drukke zaak.'],
          ['Gastvrij én duidelijk', 'De eigen reactie reguleren wanneer de gastvrijheidsnorm zegt "vriendelijk blijven".'],
          ['Weigeren zonder escalatie', 'Een alcoholweigering of toegangsbeperking professioneel formuleren.'],
          ['Grensoverschrijdend gedrag benoemen', 'Seksuele intimidatie van gasten richting personeel benoemen en begrenzen.'],
          ['Collega’s en melden', 'Op het juiste moment een collega inschakelen en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met horeca-ervaring',
          'casuïstiek van de eigen zaak',
          'expliciete erkenning van de spanning tussen gastvrijheid en grenzen stellen',
        ],
        situaties: [
          'Een gast reageert agressief op een alcoholweigering of toegangsbeperking',
          'Seksueel grensoverschrijdend gedrag van gasten richting personeel',
          'Een groep die de sfeer negatief beïnvloedt, ondanks vriendelijke correctie',
          'Een gast die dreigt bij de rekening of bij een klacht over het eten',
          'Onderlinge ruzie tussen gasten',
          'Een gast die bij sluitingstijd weigert te vertrekken en agressief reageert',
        ],
        waarom: [
          'Horecamedewerkers werken in een omgeving waarin alcohol grensoverschrijdend gedrag versterkt, terwijl de norm van gastvrijheid het moeilijk maakt om grenzen te stellen.',
          'De basistraining van Bureau Weerbaar en Veilig verhoogt de veiligheid zonder de gastvrijheid op te offeren, en maakt seksuele intimidatie expliciet benoembaar.',
        ],
        vragen: [
          [
            'Komt seksuele intimidatie aan bod?',
            'Ja, expliciet. Grensoverschrijdend gedrag van gasten richting personeel, inclusief seksuele intimidatie: benoemen en begrenzen is een vast leerdoel.',
          ],
        ],
        gerelateerd: ['agressietraining-horecaportiers-uitsmijters-basis', 'agressietraining-kassamedewerkers-baliemedewerkers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor bediening, gastheren en gastvrouwen in de horeca',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Ervaren bedienend personeel en gastheren uit drukke horecaomgevingen die de basistraining hebben afgerond.',
        samenvatting:
          'De gevorderde agressietraining voor de horeca van Bureau Weerbaar en Veilig richt zich op situaties waarin standaard de-escalatie niet meer werkt: groepen die de zaak domineren, zware intoxicatie en structurele seksuele intimidatie. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Groepsdynamieken en escalatiepatronen vroegtijdig herkennen',
          'Omgaan met extreme intoxicatie en beslissen over hulpverlening',
          'Grensoverschrijding als team consistent aanpakken',
          'Teamconsistentie handhaven bij terugkerende situaties',
          'De regie behouden bij complexe omstandigheden',
        ],
        programma: [
          ['Vaste gasten die grenzen testen', 'Herkennen hoe vaste gasten medewerkers manipuleren en grenzen oprekken.'],
          ['Groepen die de zaak domineren', 'Groepsdynamiek lezen en ingrijpen voordat de sfeer kantelt.'],
          ['Extreme intoxicatie', 'Beslissen wanneer een gast hulp nodig heeft in plaats van een correctie.'],
          ['Structurele seksuele intimidatie', 'Als team consistent optreden tegen terugkerende grensoverschrijding.'],
          ['Regie bij meerdere spanningsbronnen', 'De regie behouden wanneer er meerdere dingen tegelijk spelen.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen locatie',
          'patroonanalyse met directe feedback',
          'aandacht voor de cultuur op de werkvloer en normalisering van grensoverschrijding',
        ],
        situaties: [
          'Vaste gasten die grenzen testen en medewerkers manipuleren',
          'Groepen die de zaak domineren en intimideren',
          'Ernstig geïntoxiceerde gasten in gevaarlijke situaties',
          'Structurele seksuele intimidatie',
          'Situaties met meerdere spanningsbronnen tegelijk',
          'Gasten die weigeren te vertrekken',
        ],
        waarom: [
          'Er zijn situaties in de horeca waarin standaard de-escalatie niet meer werkt: een groep die de zaak overneemt, een gast die te ver heen is, of intimidatie die elke week terugkomt.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op groepsdynamiek en teamconsistentie, en op de werkvloercultuur waarin grensoverschrijding genormaliseerd raakt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-horecaportiers-uitsmijters-gevorderd', 'agressietraining-kassamedewerkers-baliemedewerkers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor horecamanagers en leidinggevenden',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid in een horecagelegenheid',
        doelgroep: 'Horecamanagers, bedrijfsleiders en shiftleiders met leidinggevende verantwoordelijkheid.',
        samenvatting:
          'De expert agressietraining voor horecamanagers en leidinggevenden van Bureau Weerbaar en Veilig leert managers heldere normen stellen over gastengedrag, seksuele intimidatie structureel aanpakken en een meldcultuur creëren. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Heldere normen stellen over acceptabel gastengedrag',
          'Een werkbaar agressieprotocol ontwikkelen',
          'Medewerkers coachen na incidenten zonder te bagatelliseren',
          'Seksuele intimidatie structureel aanpakken',
          'Een meldcultuur creëren waarin incidenten worden gerapporteerd',
          'Consequent voorgaan bij grensoverschrijding',
        ],
        programma: [
          ['Normen stellen', 'Duidelijk maken welk gastengedrag wel en niet acceptabel is op deze locatie.'],
          ['Werkbaar protocol', 'Een agressieprotocol ontwikkelen dat ook op een drukke zaterdagavond werkt.'],
          ['Seksuele intimidatie', 'Structureel aanpakken wat vaak onopgelost blijft vanwege de gastvrijheidsnorm.'],
          ['Melden en fooien', 'Een meldcultuur bouwen, ook wanneer medewerkers vrezen voor hun fooien.'],
          ['Zelf voorgaan', 'Consequent ingrijpen als leidinggevende, en wat inconsistentie met een team doet.'],
        ],
        werkvormen: [
          'cultuuranalyse op locatieniveau',
          'constructieve confrontatie met de eigen rol als leidinggevende',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Teams normaliseren grensoverschrijdend gastengedrag als onderdeel van het vak',
          'Medewerkers melden incidenten niet uit angst voor reacties of verlies van fooien',
          'Er is geen helder weigerings- en verwijderingsbeleid',
          'Seksuele intimidatie blijft onopgelost vanwege de gastvrijheidsnorm',
          'Leidinggevenden grijpen inconsistent in',
        ],
        waarom: [
          'In de horeca bepaalt de leidinggevende of grensoverschrijdend gedrag "erbij hoort" of niet. Een team dat ziet dat de bedrijfsleider wegkijkt, gaat zelf ook wegkijken.',
          'Deze experttraining van Bureau Weerbaar en Veilig herdefinieert gastvrijheid daarom als iets dat ook de medewerker beschermt, en confronteert leidinggevenden constructief met hun eigen rol.',
        ],
        vragen: [
          [
            'Waarom staat de rol van de leidinggevende zo centraal?',
            'Omdat teams hun norm afleiden van wat de leidinggevende doet. Inconsistent ingrijpen is de belangrijkste reden dat grensoverschrijdend gedrag blijft bestaan.',
          ],
        ],
        gerelateerd: ['agressietraining-horecaportiers-uitsmijters-expert', 'agressietraining-kassamedewerkers-baliemedewerkers-expert'],
      },
    ],
  },
];
