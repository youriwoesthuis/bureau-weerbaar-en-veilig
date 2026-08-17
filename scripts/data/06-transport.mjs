/** Brongegevens sector TRANSPORT: bureauwenv.wizzinc-dev2.nl. */

export const sector = {
  naam: 'Transport',
  slug: 'transport',
  samenvatting:
    'Bureau Weerbaar en Veilig traint taxichauffeurs en bezorgers in het omgaan met agressie op plekken waar geen collega meekijkt: in de auto en aan de voordeur. Voor taxichauffeurs en pakket- en maaltijdbezorgers, elk in drie niveaus.',
  afbeeldingAlt: 'Bezorger overhandigt een pakket aan de voordeur',
  intro: [
    'Taxichauffeurs en bezorgers hebben iets gemeen dat hun risico bepaalt: zij werken alleen, op wisselende locaties, zonder achterwacht. Een taxichauffeur zit met een onbekende in een besloten ruimte terwijl hij rijdt; een bezorger staat aan een voordeur waar hij niet weet wat erachter zit.',
    'Bij bezorgers speelt daarnaast de platformdynamiek: een klacht of slechte beoordeling kan werk kosten, waardoor incidenten niet worden gemeld. Bureau Weerbaar en Veilig behandelt dat mechanisme expliciet, want onveiligheid die niet gemeld wordt, blijft bestaan.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Taxichauffeurs',
    slug: 'taxichauffeurs',
    afbeelding: 'taxichauffeurs.jpg',
    afbeeldingAlt: 'Taxichauffeur achter het stuur met een passagier op de achterbank',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor taxichauffeurs in drie niveaus. Van spanning herkennen en veilig blijven rijden (basis) tot fysieke dreiging en groepsdruk in het voertuig (gevorderd) en veiligheidsprotocol en risicoanalyse (expert).',
    intro: [
      'Een taxichauffeur werkt in een besloten ruimte met iemand die hij niet kent, terwijl hij rijdt en zijn aandacht bij het verkeer moet houden. Discussies over route, prijs of rijstijl ontstaan makkelijk, en escaleren snel.',
      '’s Nachts in uitgaansgebieden komt daar intoxicatie bij, en soms groepen die samen druk uitoefenen. Bureau Weerbaar en Veilig richt deze trainingen daarom op het besluit om te stoppen of door te rijden.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor taxichauffeurs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Alle taxichauffeurs en personenvervoerders met direct passagierscontact.',
        samenvatting:
          'De agressietraining voor taxichauffeurs van Bureau Weerbaar en Veilig leert chauffeurs oplopende spanning herkennen, agressie begrenzen en beslissen wanneer zij stoppen of hulpdiensten inschakelen, zonder de verkeersveiligheid in gevaar te brengen. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Signalen van oplopende spanning herkennen',
          'De eigen reactie reguleren zonder de verkeersveiligheid in gevaar te brengen',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Beslissen wanneer je stopt of hulpdiensten inschakelt',
          'Veilig omgaan met personen onder invloed',
          'Incidenten correct melden',
        ],
        programma: [
          ['Spanning in de auto', 'Signalen van oplopende spanning herkennen bij discussies over route, prijs of rijstijl.'],
          ['Reguleren tijdens het rijden', 'De eigen reactie beheersen zonder de aandacht van het verkeer te halen.'],
          ['Begrenzen en de-escaleren', 'Verbaal begrenzen bij een passagier die weigert te betalen of intimideert.'],
          ['Onder invloed', 'Veilig omgaan met personen onder invloed en met onbeheersbaar gedrag.'],
          ['Stoppen of doorrijden', 'Beslissen wanneer je stopt, hulpdiensten inschakelt en hoe je het incident meldt.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de dynamiek van rijdende voertuigen kennen',
          'casuïstiek uit de eigen ritten',
          'praktijkgericht oefenen zonder naïeve rollenspellen',
        ],
        situaties: [
          'Een passagier weigert te betalen en reageert agressief',
          'Personen onder invloed met onbeheersbaar gedrag',
          'Verbale intimidatie over route, prijs of rijstijl',
          'Seksueel grensoverschrijdend gedrag',
          'Meerdere passagiers die samen druk uitoefenen',
          'Escalatie terwijl de chauffeur rijdt',
        ],
        waarom: [
          'Taxichauffeurs werken in geïsoleerde, kwetsbare omstandigheden zonder collega’s in de buurt. Dat leidt tot een structureel hoge agressiebelasting en tot verzuim na incidenten.',
          'De basistraining van Bureau Weerbaar en Veilig geeft chauffeurs handvatten die werken tijdens het rijden, inclusief het besluit om te stoppen.',
        ],
        vragen: [
          [
            'Blijft de verkeersveiligheid een aandachtspunt in de training?',
            'Ja. De-escaleren mag nooit ten koste gaan van veilig rijden. Het reguleren van de eigen reactie zonder de aandacht van het verkeer te halen is een expliciet leerdoel.',
          ],
        ],
        gerelateerd: ['agressietraining-buschauffeurs-basis', 'agressietraining-pakket-maaltijdbezorgers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor taxichauffeurs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met ernstige agressie-incidenten',
        doelgroep:
          'Taxichauffeurs met een afgeronde basistraining die regelmatig ernstige agressie-incidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor taxichauffeurs van Bureau Weerbaar en Veilig richt zich op fysieke dreiging in een rijdend voertuig, ernstige intoxicatie en groepen die de chauffeur omsingelen. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met ernstige incidenten.',
        resultaat: [
          'Gevaarlijke situaties snel inschatten: stoppen, doorrijden of hulpdiensten inschakelen',
          'Ernstig geïntoxiceerde passagiers aanpakken',
          'Groepsdruk neutraliseren zonder de rijveiligheid te compromitteren',
          'Zelfbescherming bij fysieke dreiging',
          'Grensstellend reageren op filmende of dreigende passagiers',
          'De juiste vervolgstappen zetten na een ernstig incident',
        ],
        programma: [
          ['Snel inschatten', 'Gevaarlijke situaties beoordelen en beslissen: stoppen, doorrijden of hulpdiensten inschakelen.'],
          ['Ernstige intoxicatie', 'Handelen wanneer intoxicatie veilig rijden onmogelijk maakt.'],
          ['Groepsdruk en omsingeling', 'Groepsdruk neutraliseren en handelen wanneer je wordt omsingeld of geblokkeerd.'],
          ['Fysieke dreiging', 'Zelfbescherming bij fysieke dreiging in een rijdend voertuig.'],
          ['Na de rit', 'Omgaan met online dreiging via opnames en met achtervolging na een rit.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen werkervaring',
          'analyse van besluitvorming onder druk',
          'praktische feedback van de trainer',
        ],
        situaties: [
          'Passagiers die intimideren om een gratis rit te krijgen',
          'Intoxicatie waardoor veilig rijden onmogelijk wordt',
          'Groepen die de chauffeur omsingelen of blokkeren',
          'Fysieke dreiging in een rijdend voertuig',
          'Online dreiging via opnames',
          'Achtervolging na een rit',
        ],
        waarom: [
          'Taxichauffeurs die ’s nachts in uitgaansgebieden werken, komen in situaties die standaardvaardigheden overstijgen: fysieke dreiging, zware intoxicatie en groepsdruk, terwijl zij rijden.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig bereidt chauffeurs daarop voor, met de nadruk op besluitvorming onder druk.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-buschauffeurs-gevorderd', 'agressietraining-pakket-maaltijdbezorgers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden bij taxibedrijven en personenvervoerders',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of operationele verantwoordelijkheid voor taxichauffeurs',
        doelgroep:
          'Planners, operationeel leidinggevenden en managers bij taxibedrijven met ervaring met agressie-incidenten.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden bij taxibedrijven en personenvervoerders van Bureau Weerbaar en Veilig leert leidinggevenden een veiligheidsprotocol opstellen, risicoanalyses maken op rittypen en gebieden, en een meldcultuur bouwen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Een helder veiligheidsprotocol voor chauffeurs opstellen',
          'Risicoanalyses uitvoeren op rittypen en gebieden',
          'Chauffeurs coachen na agressie-incidenten',
          'Een meldcultuur creëren binnen de organisatie',
          'Chauffeurs informeren over hun juridische positie en aangifte',
          'Samenwerken met de politie bij structurele problemen',
        ],
        programma: [
          ['Veiligheidsprotocol', 'Een helder protocol opstellen voor chauffeurs die alleen op de weg zitten.'],
          ['Risicoanalyse', 'Rittypen, gebieden en tijdstippen analyseren op risico.'],
          ['Meldcultuur zonder angst', 'Wegnemen van de vrees dat melden gevolgen heeft voor de chauffeur.'],
          ['Juridische positie en aangifte', 'Chauffeurs informeren over hun rechten en over het doen van aangifte.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: [
          'analyse van bestaand veiligheidsbeleid en incidentrapportages',
          'concrete protocollen voor de operationele praktijk',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Chauffeurs melden incidenten niet uit vrees voor gevolgen binnen de organisatie',
          'Er is geen helder protocol voor handelen bij agressie',
          'Debriefing en nazorg na incidenten ontbreken',
          'Geen inzicht in risicovolle ritten en gebieden',
          'Chauffeurs weten niet wat hun juridische positie is',
        ],
        waarom: [
          'Taxichauffeurs werken alleen en zijn afhankelijk van wat hun bedrijf heeft geregeld: het protocol, de meldweg, de nazorg en de kennis over hun juridische positie.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt leidinggevenden dat te organiseren, met kennis van de transportsector.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-buschauffeurs-expert', 'agressietraining-pakket-maaltijdbezorgers-expert'],
      },
    ],
  },

  {
    naam: 'Pakket- & maaltijdbezorgers',
    slug: 'pakket-maaltijdbezorgers',
    afbeelding: 'bezorgers.jpg',
    afbeeldingAlt: 'Maaltijdbezorger op een scooter in een woonwijk',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor bezorgers in pakket- en maaltijdbezorging in drie niveaus. Van risicovolle situaties herkennen vóór het aanbellen (basis) tot veiligheidstaxatie en fysieke dreiging (gevorderd) en veiligheidsprotocol en platformdynamiek (expert).',
    intro: [
      'Een bezorger staat tientallen keren per dag aan een voordeur zonder te weten wat erachter zit. De klant heeft verwachtingen over tijd en staat van de bestelling, en de bezorger krijgt de reactie als iets niet klopt.',
      'Wat deze groep bijzonder kwetsbaar maakt, is de beoordeling: een klacht kan werk kosten. Daardoor worden incidenten vaak niet gemeld, en blijft onveiligheid onzichtbaar. Bureau Weerbaar en Veilig benoemt dat mechanisme expliciet in de trainingen.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor bezorgers in pakket- en maaltijdbezorging',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Alle bezorgers in pakket- en maaltijdbezorging met direct klantcontact aan de deur.',
        samenvatting:
          'De agressietraining voor bezorgers in pakket- en maaltijdbezorging van Bureau Weerbaar en Veilig leert bezorgers risicovolle situaties herkennen vóórdat er contact is, agressie begrenzen en bepalen wanneer een levering veilig kan worden beëindigd. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Risicovolle situaties herkennen voordat er contact is',
          'De eigen reactie reguleren onder druk aan de deur',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Bepalen wanneer een levering veilig kan worden beëindigd',
          'Omgaan met online bedreigingen na een incident',
          'Incidenten correct melden bij de werkgever',
        ],
        programma: [
          ['Inschatten vóór het aanbellen', 'Risicovolle situaties herkennen voordat je uitstapt of aanbelt.'],
          ['Reguleren aan de deur', 'Rustig blijven bij een klant die agressief reageert op een beschadigd of vertraagd pakket.'],
          ['Begrenzen', 'Verbale intimidatie aan de voordeur professioneel begrenzen.'],
          ['Levering afbreken', 'Bepalen wanneer je een levering veilig beëindigt en vertrekt.'],
          ['Na het incident', 'Omgaan met online beschuldigingen via het platform en incidenten melden bij de werkgever.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die bezorgwerk kennen',
          'herkenbare bezorgscenario’s',
          'aandacht voor alleen werken zonder achterwacht',
        ],
        situaties: [
          'Klanten die agressief reageren op een beschadigd of vertraagd pakket',
          'Weigering van toegang met dreigend gedrag',
          'Verbale intimidatie aan de voordeur',
          'Adressen waar je je onveilig voelt',
          'Agressie van omstanders',
          'Online beschuldigingen via het platform',
        ],
        waarom: [
          'Bezorgers werken alleen en staan dagelijks aan de voordeur van klanten met verwachtingen die niet altijd uitkomen. Er is geen collega die meekijkt en geen achterwacht om de hoek.',
          'Werkgevers die hun zorgplicht serieus nemen, investeren in training vóórdat incidenten escaleren. De basistraining van Bureau Weerbaar en Veilig is daarop gericht.',
        ],
        vragen: [
          [
            'Mag een bezorger een levering afbreken?',
            'Bepalen wanneer een levering veilig kan worden beëindigd is een expliciet leerdoel in deze training. Hoe de eigen organisatie daarmee omgaat, is onderwerp van de experttraining voor leidinggevenden.',
          ],
        ],
        gerelateerd: ['agressietraining-taxichauffeurs-basis', 'agressietraining-energie-nutsbedrijven-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor bezorgers in pakket- en maaltijdbezorging',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring',
        doelgroep:
          'Bezorgers met basistraining die regelmatig ernstige of herhaalde agressie-incidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor bezorgers van Bureau Weerbaar en Veilig richt zich op veiligheidstaxatie vóór het uitstappen, fysieke dreiging aan de deur en online bedreigingen. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of aantoonbare werkervaring.',
        resultaat: [
          'Veiligheidstaxatie toepassen vóór het uitstappen',
          'Beslissen wanneer een levering moet worden afgebroken',
          'Professioneel handelen bij fysieke dreiging',
          'Omgaan met online bedreigingen en valse klachten',
          'Veilig navigeren in risicovolle omgevingen',
          'De juiste stappen zetten na een ernstig incident',
        ],
        programma: [
          ['Taxatie vóór het uitstappen', 'Systematisch inschatten van een adres of situatie voordat je de auto of scooter verlaat.'],
          ['Afbreken', 'Beslissen wanneer je een levering niet doorzet.'],
          ['Fysieke dreiging', 'Professioneel handelen bij fysieke dreiging of intimidatie aan de deur.'],
          ['Online bedreiging en valse klachten', 'Omgaan met online bedreigingen en met valse klachten die je werk raken.'],
          ['Risicovolle omgevingen', 'Veilig navigeren in wijken met een hoge veiligheidsdreiging en tijdens avond- en nachtdiensten.'],
        ],
        werkvormen: [
          'casuïstiek uit eigen routes',
          'praktische feedback op besluitvorming onder druk',
          'oefening van veiligheidstaxatie',
        ],
        situaties: [
          'Klanten die structureel problemen maken bij leveringen',
          'Adressen in wijken met hoge veiligheidsdreiging',
          'Fysieke dreiging of intimidatie aan de deur',
          'Online bedreigingen na een incident',
          'Agressie vanuit groepen op straat',
          'Situaties tijdens avond- en nachtdiensten',
        ],
        waarom: [
          'Bezorgers zijn kwetsbaar voor klanten die hun afhankelijkheid van het platform uitbuiten: wie weet dat een klacht gevolgen heeft, heeft een drukmiddel in handen.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die specifieke kwetsbaarheid en op veiligheidstaxatie vóór elk contact.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-taxichauffeurs-gevorderd', 'agressietraining-energie-nutsbedrijven-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden bij bezorgdiensten',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende functie bij een bezorgdienst',
        doelgroep:
          'Leidinggevenden, planners en operationeel managers bij bezorgdiensten met ervaring met agressie-incidenten.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden bij bezorgdiensten van Bureau Weerbaar en Veilig leert leidinggevenden veiligheidsprotocollen opstellen en de spanning tussen beoordelingssystemen en veiligheid aanpakken. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Veiligheidsprotocollen voor bezorgers opstellen',
          'De spanning tussen beoordelingssystemen en veiligheid adresseren',
          'Risicoanalyses uitvoeren op adressen en gebieden',
          'Bezorgers coachen na incidenten',
          'Een meldcultuur zonder angst creëren',
          'Juridische informatie voor bezorgers organiseren',
        ],
        programma: [
          ['Veiligheidsprotocol', 'Een protocol opstellen dat bruikbaar is voor bezorgers die alleen op pad zijn.'],
          ['Beoordelingen versus veiligheid', 'De spanning aanpakken waarin platformbeoordelingen tegen veilig handelen werken.'],
          ['Risicoanalyse', 'Adressen, gebieden en tijdstippen in kaart brengen.'],
          ['Melden zonder angst', 'Een meldcultuur bouwen waarin een incident melden geen risico is voor de bezorger.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: [
          'organisatiebrede beleidsanalyse met focus op platformdynamiek',
          'concrete protocollen voor de bezorgsector',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Bezorgers melden incidenten niet uit angst voor een negatieve beoordeling',
          'Er is geen helder protocol voor bezorgers bij agressie',
          'Platformbeoordelingen werken tegen veilig handelen',
          'Nazorg na ernstige incidenten ontbreekt',
          'Geen zicht op risicovolle adressen en tijdstippen',
          'Bezorgers weten niet wat hun juridische positie is',
        ],
        waarom: [
          'Veiligheid voor bezorgers begint bij goede voorbereiding, heldere protocollen en een organisatiecultuur waarin incidenten serieus worden genomen.',
          'Deze experttraining van Bureau Weerbaar en Veilig legt daarom de vinger op het mechanisme dat veiligheid ondermijnt: een beoordelingssysteem waarin melden of afbreken de bezorger geld kan kosten.',
        ],
        vragen: [
          [
            'Waarom is het beoordelingssysteem onderwerp van de training?',
            'Omdat het direct tegen veiligheid in kan werken. Een bezorger die weet dat afbreken of melden zijn beoordeling raakt, doet het niet, en dan blijft onveiligheid onzichtbaar voor de organisatie.',
          ],
        ],
        gerelateerd: ['agressietraining-taxichauffeurs-expert', 'agressietraining-energie-nutsbedrijven-expert'],
      },
    ],
  },
];
