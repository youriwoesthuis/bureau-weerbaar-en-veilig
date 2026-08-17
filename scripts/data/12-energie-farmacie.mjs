/** Brongegevens sectoren ENERGIE en FARMACIE: bureauwenv.wizzinc-dev2.nl. */

export const sector = {
  naam: 'Energie',
  slug: 'energie',
  samenvatting:
    'Bureau Weerbaar en Veilig traint monteurs, inspecteurs en servicemedewerkers van energie- en nutsbedrijven die alleen bij klanten thuis komen, ook op de moeilijkste momenten zoals een afsluiting. In drie niveaus.',
  afbeeldingAlt: 'Monteur voert een inspectie uit in de meterkast van een woning',
  intro: [
    'Een monteur van een energie- of nutsbedrijf komt binnen op momenten die klanten liever niet meemaken: een verplichte inspectie, een storing, of het zwaarste scenario: een afsluiting wegens betalingsachterstand. De medewerker voert een besluit uit dat elders is genomen, in de woning van degene die het raakt.',
    'Dat werk gebeurt alleen, zonder collega en zonder achterwacht. Bureau Weerbaar en Veilig traint deze beroepsgroep daarom op risicotaxatie vóór binnenkomst en op het besluit om een bezoek af te breken.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Medewerkers energie- & nutsbedrijven',
    slug: 'energie-nutsbedrijven',
    sector: 'energie',
    afbeelding: 'energie.jpg',
    afbeeldingAlt: 'Servicemonteur belt aan bij een klant voor een huisbezoek',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor medewerkers van energie- en nutsbedrijven met huisbezoeken in drie niveaus. Van risicovolle thuissituaties herkennen (basis) tot afsluitingen onder fysieke dreiging (gevorderd) en veiligheidsprotocollen met afbreekcriteria (expert).',
    intro: [
      'Monteurs en inspecteurs werken alleen in de privéwoningen van klanten, vaak bij taken die de klant niet wil: een verplichte keuring, een afsluiting, een meterwissel na wanbetaling.',
      'De klant staat erbij, familie kijkt mee, en de medewerker moet zijn werk doen én veilig blijven. Bureau Weerbaar en Veilig traint op precies dat spanningsveld.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor medewerkers van energie- en nutsbedrijven met huisbezoeken',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Monteurs, inspecteurs en servicemedewerkers die huisbezoeken bij klanten uitvoeren.',
        samenvatting:
          'De agressietraining voor medewerkers van energie- en nutsbedrijven van Bureau Weerbaar en Veilig leert medewerkers risicovolle thuissituaties herkennen vóór binnenkomst en agressief gedrag begrenzen tijdens huisbezoeken. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Risicovolle thuissituaties herkennen vóór binnenkomst',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Veilig handelen bij escalatie',
          'Incidenten correct melden',
        ],
        programma: [
          ['Inschatten vóór de deur', 'Risicovolle thuissituaties herkennen voordat je binnenstapt.'],
          ['De boodschapper van het besluit', 'Reguleren van de eigen reactie bij klanten die agressief reageren op een afsluiting.'],
          ['Begrenzen in de woning', 'Verbaal begrenzen wanneer toegang wordt geweigerd bij een verplichte inspectie.'],
          ['Escalatie en omstanders', 'Veilig handelen wanneer dreigende familieleden aanwezig zijn.'],
          ['Melden', 'Incidenten correct melden zodat het bedrijf risicoadressen kent.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de huisbezoekcontext kennen',
          'casuïstiek uit de eigen routes',
          'praktijkgericht oefenen zonder naïeve rollenspellen',
        ],
        situaties: [
          'Klanten die agressief reageren op een afsluiting',
          'Weigering van toegang bij een verplichte inspectie',
          'Dreigende familieleden die aanwezig zijn',
          'Intimidatie bij ongewenste beslissingen',
        ],
        waarom: [
          'Medewerkers van energie- en nutsbedrijven werken alleen in privéwoningen, vaak bij ingrijpende taken zoals afsluitingen en verplichte inspecties.',
          'Zonder concrete training weten medewerkers niet altijd hoe zij agressief gedrag kunnen begrenzen. De basistraining van Bureau Weerbaar en Veilig geeft die handvatten.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-thuiszorg-wijkverpleging-basis', 'agressietraining-buurtbeheerders-opzichters-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor medewerkers van energie- en nutsbedrijven met huisbezoeken',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Medewerkers met basistraining die regelmatig ernstige agressie-incidenten bij huisbezoeken meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor energie- en nutsbedrijven van Bureau Weerbaar en Veilig richt zich op afsluitingen onder fysieke dreiging, meervoudige problematiek achter de voordeur en klanten die medewerkers opwachten of volgen. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Veiligheidstaxatie toepassen vóór binnenkomst',
          'Beslissen wanneer een huisbezoek moet worden afgebroken',
          'Professioneel handelen bij ernstige agressie in een woning',
          'Omgaan met groepsdruk van omstanders',
          'Veilig navigeren in risicovolle wijken',
        ],
        programma: [
          ['Systematische veiligheidstaxatie', 'Een vaste taxatie vóór elk risicovol adres, in plaats van inschatten op gevoel.'],
          ['Afbreken', 'Beslissen wanneer een bezoek wordt afgebroken: bijvoorbeeld bij een geblokkeerde toegang met fysieke dreiging.'],
          ['Ernstige agressie binnen', 'Professioneel handelen bij ernstige agressie in de woning.'],
          ['Meervoudige problematiek', 'Werken bij klanten waar schulden, verslaving en psychiatrie samenkomen.'],
          ['Na het bezoek', 'Handelen wanneer klanten je opwachten of volgen, en veilig door risicovolle wijken navigeren.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen routes en risicoadressen',
          'oefening van ingebrachte situaties',
          'aandacht voor de emotionele belasting van werken bij klanten in wanhoop',
        ],
        situaties: [
          'Een klant blokkeert de toegang en dreigt fysiek bij een afsluiting',
          'Meervoudige problematiek: schulden, verslaving en psychiatrie',
          'Klanten die medewerkers opwachten of volgen na een bezoek',
        ],
        waarom: [
          'Sommige huisbezoeken vragen meer dan basisvaardigheden: een afsluiting bij iemand die niets meer te verliezen heeft, of een adres waar de vorige collega al problemen had.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig bereidt medewerkers voor op die risicovolle situaties, inclusief het besluit om níet naar binnen te gaan.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-thuiszorg-wijkverpleging-gevorderd', 'agressietraining-pakket-maaltijdbezorgers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden bij energie- en nutsbedrijven',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of operationele verantwoordelijkheid voor een team medewerkers met huisbezoeken',
        doelgroep:
          'Teamleiders, planners en operationeel managers bij energie- en nutsbedrijven die verantwoordelijk zijn voor de veiligheid bij huisbezoeken.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden bij energie- en nutsbedrijven van Bureau Weerbaar en Veilig leert leidinggevenden veiligheidsprotocollen opzetten met afbreekcriteria en risicoadressen systematisch in kaart brengen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Veiligheidsprotocollen opzetten, inclusief afbreekcriteria',
          'Risicovolle situaties systematisch in kaart brengen',
          'Medewerkers coachen en nazorg organiseren na incidenten',
          'Een meldcultuur voor veiligheid creëren',
          'Samenwerking organiseren met schuldhulp, gemeente en politie',
        ],
        programma: [
          ['Protocol met afbreekcriteria', 'Vastleggen wanneer een medewerker een bezoek mag en moet afbreken.'],
          ['Risicoadressen in kaart', 'Hoogrisico-adressen en tijdstippen systematisch registreren en delen.'],
          ['Coachen en nazorg', 'Debriefing en nazorg na ernstige incidenten inrichten.'],
          ['Wettelijke taak én veiligheid', 'De spanning tussen wettelijke taken en medewerkersveiligheid beleidsmatig oplossen.'],
          ['Externe partners en intervisie', 'Samenwerking met schuldhulp, gemeente en politie organiseren; intervisie na 6 weken.'],
        ],
        werkvormen: [
          'analyse van veiligheidsbeleid en operationele context',
          'concrete protocollen voor solo-werk bij klanten thuis',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers melden agressie-incidenten niet structureel',
          'Veiligheidsprotocollen voor risicovolle adressen ontbreken',
          'Debriefing na ernstige incidenten ontbreekt',
          'Onvoldoende zicht op hoogrisico-adressen en tijdstippen',
          'Spanning tussen wettelijke taken en medewerkersveiligheid',
        ],
        waarom: [
          'Medewerkers met huisbezoeken werken in volledige afzondering bij klanten thuis. Hun veiligheid hangt af van wat de organisatie vooraf heeft geregeld: het protocol, het zicht op risicoadressen en de cultuur rond melden.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op die verantwoordelijkheid van de leidinggevende.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-thuiszorg-wijkverpleging-expert', 'agressietraining-pakket-maaltijdbezorgers-expert'],
      },
    ],
  },

  {
    naam: 'Apotheekmedewerkers',
    slug: 'apotheekmedewerkers',
    sector: 'farmacie',
    afbeelding: 'apotheek.jpg',
    afbeeldingAlt: 'Apothekersassistent helpt een patiënt aan de balie van de apotheek',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor apotheekmedewerkers in drie niveaus. Van de medicatie-afhankelijkheid als agressiebron begrijpen (basis) tot verslavingsproblematiek en bekende probleempatiënten (gevorderd) en beleid rond de zorgrelatie (expert).',
    intro: [
      'Aan de apotheekbalie gaat elk conflict uiteindelijk over medicatie die iemand nodig heeft: het recept dat er niet is, het middel dat niet vergoed wordt, de herhaling die geweigerd wordt. Die afhankelijkheid maakt de drempel voor agressie laag.',
      'Extra complex is de groep patiënten met verslavingsproblematiek, die dagelijks aan de balie kan staan. Bureau Weerbaar en Veilig traint apotheekteams op het bewaken van de balans tussen zorg verlenen en grenzen stellen.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor apotheekmedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Apotheekmedewerkers en apothekersassistenten met direct patiëntcontact aan de balie.',
        samenvatting:
          'De agressietraining voor apotheekmedewerkers van Bureau Weerbaar en Veilig leert medewerkers de emotionele context achter agressie herkennen en moeilijke gesprekken voeren over wachttijden, weigeringen en niet-beschikbare medicatie. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'De emotionele context achter agressie van patiënten herkennen',
          'De eigen reactie reguleren bij agressieve interacties',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Omgaan met patiënten met verslavingsproblematiek',
          'Moeilijke gesprekken voeren over wachttijden en weigeringen',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Afhankelijkheid als agressiebron', 'Begrijpen waarom medicatie-afhankelijkheid de drempel voor agressie verlaagt.'],
          ['Reguleren aan de balie', 'Rustig blijven bij een patiënt die agressief wordt over een niet-beschikbaar recept.'],
          ['Moeilijke boodschappen', 'Gesprekken voeren over wachttijden, weigeringen en herhaalrecepten die niet worden verstrekt.'],
          ['Verslavingsproblematiek', 'Professioneel omgaan met patiënten die onder druk medicatie proberen te krijgen.'],
          ['Begrenzen en melden', 'Verbale agressie en intimidatie begrenzen, en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de apotheekcontext kennen',
          'casuïstiek uit de eigen apotheek',
          'aandacht voor de dynamiek van medicatie-afhankelijkheid',
        ],
        situaties: [
          'Een patiënt wordt agressief over een niet-beschikbaar recept',
          'Een klant in pijn die niet kan wachten',
          'Een geweigerde herhaling die niet wordt geaccepteerd',
          'Patiënten met verslavingsproblematiek die druk uitoefenen',
          'Beschuldigingen van fouten, met dreigementen',
          'Verbale agressie en intimidatie aan de balie',
        ],
        waarom: [
          'Apotheekmedewerkers werken met patiënten die afhankelijk zijn van hun medicatie. Die afhankelijkheid maakt de drempel voor agressief gedrag laag, zeker bij pijn, angst, psychiatrische problematiek of verslaving.',
          'Zonder voorbereiding leidt dat tot onveiligheid en verzuim. De basistraining van Bureau Weerbaar en Veilig geeft het apotheekteam concrete handvatten.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-huisartsassistenten-basis', 'agressietraining-ggd-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor apotheekmedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Apotheekmedewerkers met basistraining die regelmatig ernstige agressie-incidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor apotheekmedewerkers van Bureau Weerbaar en Veilig richt zich op complexe patronen bij verslavings- en psychiatrische problematiek en op eenduidig teamhandelen bij bekende probleempatiënten. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Complexe agressiepatronen bij verslavings- of psychiatrische problematiek herkennen',
          'Professioneel standhouden bij medicatieweigeringen',
          'Eenduidig teamhandelen bij bekende probleempatiënten',
          'Dreigementen professioneel hanteren',
          'De eigen veiligheid bewaken',
        ],
        programma: [
          ['Complexe patronen', 'Patronen herkennen bij patiënten met verslavings- of psychiatrische problematiek die dagelijks terugkomen.'],
          ['Standhouden bij weigering', 'Een medicatieweigering handhaven onder oplopende druk.'],
          ['Teamconsistentie', 'Eenduidig handelen als team, zodat probleempatiënten overal hetzelfde antwoord krijgen.'],
          ['Dreigementen', 'Omgaan met dreiging met media-aandacht of juridische stappen.'],
          ['Wachtrij en veiligheid', 'Spanning in de wachtrij hanteren en de eigen veiligheid bewaken, ook bij telefonische en online agressie.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen apotheek',
          'analyse van patronen in de teamreactie',
          'aandacht voor emotionele belasting',
        ],
        situaties: [
          'Patiënten met verslavingsproblematiek die dagelijks terugkomen',
          'Escalatie van gedrag bij medicatiewijzigingen',
          'Dreiging met media-aandacht of juridische stappen',
          'Spanning in de wachtrij met meerdere patiënten',
          'Agressie via telefoon of online',
        ],
        waarom: [
          'In elke apotheek zijn er patiënten bij wie een standaardaanpak niet werkt: bekende gezichten met complexe problematiek, bij wie elk contact spanning oproept.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig helpt medewerkers de balans tussen zorg verlenen en grenzen stellen bewust en professioneel te houden.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-huisartsassistenten-gevorderd', 'agressietraining-ggd-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor apothekers en leidinggevenden van apotheken',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of eigenaarverantwoordelijkheid voor een apotheek of apotheekteam',
        doelgroep:
          'Apothekers, apotheekmanagers en leidinggevende apothekersassistenten die verantwoordelijk zijn voor de veiligheid in de apotheek.',
        samenvatting:
          'De expert agressietraining voor apothekers en leidinggevenden van Bureau Weerbaar en Veilig leert leidinggevenden beleid opstellen over het beëindigen van de zorgrelatie bij grensoverschrijdend gedrag en de meldcultuur versterken. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Helder beleid opstellen over het beëindigen van de zorgrelatie bij grensoverschrijdend gedrag',
          'Medewerkers coachen na agressie-incidenten met structurele debriefing',
          'De meldcultuur versterken zodat incidenten worden gerapporteerd',
          'De balans borgen tussen zorgplicht en een veilige werkomgeving',
          'Samenwerken met huisartsen en GGZ bij complexe patiënten',
        ],
        programma: [
          ['Beleid rond de zorgrelatie', 'Vastleggen wanneer en hoe de zorgrelatie wordt beëindigd bij grensoverschrijdend gedrag.'],
          ['Eenduidige aanpak probleempatiënten', 'Beleid voor patiënten met bekende agressieve patronen.'],
          ['Coachen en debriefing', 'Structurele opvang na incidenten inrichten.'],
          ['Zorgplicht én veiligheid', 'De spanning tussen toegankelijke zorg en medewerkersveiligheid beleidsmatig oplossen.'],
          ['Samenwerking en intervisie', 'Samenwerking met huisartsen en GGZ organiseren; intervisie na 6 weken.'],
        ],
        werkvormen: [
          'analyse van beleid, patiëntenpopulatie en veiligheidscultuur',
          'beleidsontwikkeling op organisatieniveau',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Grensoverschrijding wordt geaccepteerd als "normaal in de zorg"',
          'Inconsistente reacties op probleempatiënten',
          'Debriefing en nazorg na incidenten ontbreken',
          'Onduidelijk beleid voor patiënten met bekende agressieve patronen',
          'Spanning tussen zorgplicht en medewerkersveiligheid',
        ],
        waarom: [
          'De apotheek is voor veel patiënten de meest toegankelijke zorgverlener. Juist die toegankelijkheid vraagt duidelijke grenzen, zonder de bereikbaarheid op te geven.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt apothekers dat beleid te formuleren en te verankeren in het team.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-huisartsassistenten-expert', 'agressietraining-ggd-expert'],
      },
    ],
  },
];
