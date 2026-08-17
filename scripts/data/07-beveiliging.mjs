/** Brongegevens sector BEVEILIGING: bureauwenv.wizzinc-dev2.nl. */

export const sector = {
  naam: 'Beveiliging',
  slug: 'beveiliging',
  samenvatting:
    'Bureau Weerbaar en Veilig traint beveiligers in het de-escaleren van agressie binnen de juridische grenzen van hun bevoegdheid, zodat fysiek ingrijpen zo vaak mogelijk onnodig blijft. Voor horecaportiers en evenementenbeveiligers, elk in drie niveaus.',
  afbeeldingAlt: 'Beveiliger houdt toezicht bij de ingang van een evenement',
  intro: [
    'Beveiligers zijn de enige beroepsgroep die agressie mag verwachten: het hoort bij de functie. Precies daarom is de-escaleren hier een vak. Elke keer dat een portier of evenementenbeveiliger een situatie met woorden oplost, blijft fysiek ingrijpen achterwege: met alle juridische en gezondheidsrisico’s die daarbij horen.',
    'Wat dit werk kenmerkt: late uren, alcohol en drugs, groepen, en een camera die altijd meedraait. Bureau Weerbaar en Veilig behandelt daarom de juridische positie van de beveiliger expliciet naast de gesprekstechniek.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Horecaportiers & uitsmijters',
    slug: 'horecaportiers-uitsmijters',
    afbeelding: 'horecaportiers.jpg',
    afbeeldingAlt: 'Portier houdt toezicht bij de ingang van een horecagelegenheid',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor horecaportiers en uitsmijters in drie niveaus. Van de-escaleren aan de deur binnen de juridische kaders (basis) tot probleembezoekers en gecoördineerd optreden (gevorderd) en veiligheidsbeleid en incidentregistratie (expert).',
    intro: [
      'Een portier beslist aan de deur wie naar binnen mag. Die beslissing valt vaak laat op de avond, tegenover mensen die hebben gedronken en een groep achter zich hebben staan.',
      'De juridische positie is daarbij smal: één verkeerde fysieke ingreep kan gevolgen hebben voor de portier én voor de vergunning van de zaak. Bureau Weerbaar en Veilig traint daarom op de-escaleren binnen die kaders.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor horecaportiers en uitsmijters',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Horecaportiers en uitsmijters met direct publiekscontact in de nachthoreca.',
        samenvatting:
          'De agressietraining voor horecaportiers en uitsmijters van Bureau Weerbaar en Veilig leert portiers agressie herkennen en de-escaleren voordat een situatie fysiek wordt, binnen de juridische kaders van hun functie. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Agressievormen herkennen: frustratie, groepsgedrag en gedrag onder invloed',
          'De eigen reactie reguleren onder druk',
          'Verbaal gedrag professioneel begrenzen',
          'Situaties de-escaleren voordat ze fysiek worden',
          'Handelen binnen de juridische kaders',
          'Incidenten correct melden en registreren',
        ],
        programma: [
          ['Agressie in de nachthoreca', 'Vormen van agressie herkennen bij alcohol, drugs en groepsgedrag.'],
          ['Reguleren aan de deur', 'De eigen reactie beheersen wanneer een geweigerde bezoeker uitvalt.'],
          ['De-escaleren vóór fysiek', 'Situaties met woorden oplossen zodat fysiek ingrijpen onnodig blijft.'],
          ['Juridische positie', 'Handelen binnen de juridische kaders die voor een portier gelden.'],
          ['Melden en registreren', 'Incidenten correct melden en registreren.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de horecabeveiliging',
          'casuïstiek van de eigen locatie',
          'expliciete aandacht voor de juridische positie van de portier',
        ],
        situaties: [
          'Geweigerde bezoekers die agressief reageren',
          'Dronken personen die weigeren te vertrekken',
          'Vechtpartijen op de dansvloer',
          'Druggebruik in de zaak',
          'Groepsintimidatie aan de deur',
          'Escalatie buiten, met toeschouwers erbij',
        ],
        waarom: [
          'Late uren en alcoholgebruik verhogen het escalatierisico in de nachthoreca aanzienlijk. Een portier neemt beslissingen die direct weerstand oproepen, vaak tegenover een groep.',
          'Onvoldoende training leidt tot onnodige fysieke ingrepen: met juridische consequenties voor de portier en voor de zaak. De basistraining van Bureau Weerbaar en Veilig is erop gericht dat te voorkomen.',
        ],
        vragen: [
          [
            'Behandelt de training de juridische positie van de portier?',
            'Ja. De juridische kaders waarbinnen een portier mag optreden zijn een expliciet onderdeel van de training, naast de gesprekstechniek.',
          ],
        ],
        gerelateerd: ['agressietraining-evenementenbeveiligers-basis', 'agressietraining-horeca-bediening-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor horecaportiers en uitsmijters',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Horecaportiers en uitsmijters met een afgeronde basistraining die werken op drukke of hoogrisicolocaties.',
        samenvatting:
          'De gevorderde agressietraining voor horecaportiers en uitsmijters van Bureau Weerbaar en Veilig richt zich op complexe patronen: bekende probleembezoekers, groepen die de deur testen en gerichte intimidatie van de portier. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Complexe agressiepatronen herkennen',
          'Gecoördineerd optreden met collega’s',
          'Professioneel handelen onder druk en provocatie',
          'De juridische grenzen correct toepassen',
          'Effectief samenwerken met de politie',
          'Structureel omgaan met probleembezoekers',
        ],
        programma: [
          ['Probleembezoekers', 'Bekende bezoekers die de grenzen kennen en anderen meenemen structureel aanpakken.'],
          ['Groepen aan de deur', 'Handelen bij groepen die bewust de deur testen met wisselende personen.'],
          ['Gerichte intimidatie', 'Professioneel blijven wanneer de intimidatie op jou persoonlijk is gericht.'],
          ['Gecoördineerd optreden', 'Samenwerken met collega’s bij vechtpartijen met meerdere personen.'],
          ['Politie en camera', 'Effectief samenwerken met de politie en professioneel blijven wanneer er gefilmd wordt.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen locatie',
          'patroonsignalering door de trainer',
          'feedback op besluitvorming en samenwerking',
        ],
        situaties: [
          'Bekende probleembezoekers die de grenzen kennen en anderen meenemen',
          'Groepen die bewust de deur testen met wisselende personen',
          'Gerichte intimidatie van de portier zelf',
          'Optreden dat wordt gefilmd',
          'Vechtpartijen met meerdere personen',
          'Samenwerking met de politie bij ernstige incidenten',
        ],
        waarom: [
          'Op drukke en hoogrisicolocaties is agressie zelden een losstaand incident. Dezelfde bezoekers komen terug, groepen testen systematisch de deur en de juridische en fysieke druk loopt tegelijk op.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig sluit aan op die realiteit van de nachthoreca, met nadruk op gecoördineerd optreden.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-evenementenbeveiligers-gevorderd', 'agressietraining-horeca-bediening-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor hoofden beveiliging in de horeca',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een portiersteam of voor de veiligheid van een locatie',
        doelgroep:
          'Hoofden beveiliging, horecaondernemers en leidinggevende portiers die het veiligheidsbeleid van hun locatie willen versterken.',
        samenvatting:
          'De expert agressietraining voor hoofden beveiliging in de horeca van Bureau Weerbaar en Veilig leert leidinggevenden risicoanalyses omzetten in maatregelen, incidentregistratie inrichten als sturingsinstrument en debriefing leiden. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Een risicoanalyse uitvoeren en vertalen naar maatregelen',
          'Het portiersteam aansturen via gedragsprotocollen',
          'Gestructureerde debriefing na incidenten leiden',
          'Incidentregistratie inrichten als sturingsinstrument',
          'De juridische positie van de locatie begrijpen',
        ],
        programma: [
          ['Risicoanalyse van de locatie', 'De locatie analyseren en de uitkomsten omzetten in concrete maatregelen.'],
          ['Gedragsprotocollen', 'Het portiersteam aansturen met protocollen die consistent optreden mogelijk maken.'],
          ['Debriefing', 'Gestructureerde debriefing na ernstige incidenten leiden.'],
          ['Registratie als sturingsinstrument', 'Incidentregistratie zo inrichten dat patronen zichtbaar worden.'],
          ['Juridische positie en vergunning', 'De juridische positie van de locatie begrijpen, inclusief vergunningsrisico’s.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid, incidentregistraties en teamcultuur',
          'juridische verdieping met operationele verbetering',
          'begeleiding bij protocolverandering',
        ],
        situaties: [
          'Onderregistratie van incidenten en daardoor blindheid voor patronen',
          'Inconsistent optreden van portiers',
          'Debriefing na ernstige incidenten ontbreekt',
          'Moeizame samenwerking met autoriteiten',
          'Onduidelijke juridische grenzen voor het team',
        ],
        waarom: [
          'Agressie-incidenten in de nachthoreca zijn zelden volledig te voorkomen. Wat wél te sturen is: hoe het team reageert en of de organisatie ervan leert.',
          'Dat bepaalt bovendien de juridische houdbaarheid en de vergunningsrisico’s van de locatie. Deze experttraining van Bureau Weerbaar en Veilig richt zich op precies die verantwoordelijkheid.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-evenementenbeveiligers-expert', 'agressietraining-horeca-bediening-expert'],
      },
    ],
  },

  {
    naam: 'Evenementenbeveiligers',
    slug: 'evenementenbeveiligers',
    afbeelding: 'evenementenbeveiligers.jpg',
    afbeeldingAlt: 'Evenementenbeveiliger houdt toezicht op een publiek bij een festival',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor evenementenbeveiligers in drie niveaus. Van de-escaleren bij bezoekers onder invloed (basis) tot groepsdynamiek en crowd control (gevorderd) en risicoanalyse en teambriefing (expert).',
    intro: [
      'Bij evenementen komt alles samen wat agressie voedt: grote aantallen mensen, wisselende locaties, beperkt zicht en bezoekers onder invloed. Een conflict tussen twee personen kan binnen een minuut een groep meenemen.',
      'Beveiligers moeten daar niet alleen individueel handelen maar vooral als team: gecoördineerd, proportioneel en met een duidelijk moment om op te schalen. Bureau Weerbaar en Veilig traint precies dat.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor evenementenbeveiligers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Alle evenementenbeveiligers met direct publiekscontact.',
        samenvatting:
          'De agressietraining voor evenementenbeveiligers van Bureau Weerbaar en Veilig leert beveiligers agressie herkennen en de-escaleren vóór fysieke escalatie, in een omgeving met grote aantallen mensen en beperkt zicht. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Verschillende vormen van agressie herkennen',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Situaties de-escaleren vóór fysieke escalatie',
          'De eigen emotionele reactie reguleren onder druk',
          'Incidenten correct melden volgens protocol',
        ],
        programma: [
          ['Agressie op een evenement', 'Vormen van agressie herkennen bij grote aantallen mensen en bezoekers onder invloed.'],
          ['Reguleren onder druk', 'De eigen emotionele reactie beheersen bij dronken bezoekers die weigeren te vertrekken.'],
          ['De-escaleren vóór fysiek', 'Groepsconflicten terugbrengen voordat ze fysiek worden.'],
          ['Omstanders', 'Handelen wanneer omstanders je interventie tegenwerken.'],
          ['Massapaniek en melden', 'Handelen bij dreigende massapaniek en incidenten correct melden volgens protocol.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de evenementenbeveiliging',
          'werkelijke situaties van de eigen werkvloer',
          'oefenen met de protocollen van de eigen organisatie',
        ],
        situaties: [
          'Dronken bezoekers die weigeren te vertrekken',
          'Groepsconflicten die dreigen uit te groeien',
          'Onvoorspelbare reacties van bezoekers onder invloed',
          'Omstanders die interventies tegenwerken',
          'Dreigende massapaniek',
        ],
        waarom: [
          'Grote aantallen mensen, wisselende locaties, beperkt zicht en bezoekers onder invloed maken de risico’s bij evenementen dynamisch en onvoorspelbaar.',
          'Zonder training escaleren situaties onnodig, met letsel en aansprakelijkheid als gevolg. De basistraining van Bureau Weerbaar en Veilig richt zich op de-escaleren vóórdat fysiek ingrijpen nodig is.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-horecaportiers-uitsmijters-basis', 'agressietraining-sportaccommodaties-zwembaden-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor evenementenbeveiligers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Beveiligers met basistraining die regelmatig bij grootschalige of hoogrisico-evenementen worden ingezet.',
        samenvatting:
          'De gevorderde agressietraining voor evenementenbeveiligers van Bureau Weerbaar en Veilig richt zich op groepsdynamiek, crowd control en gecoördineerd optreden bij meerpersoonsincidenten. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Groepsdynamieken herkennen voordat escalatie optreedt',
          'Gecoördineerd handelen met collega’s bij meerpersoonsincidenten',
          'Crowd control-principes toepassen',
          'Professioneel reageren wanneer er gefilmd wordt',
          'Omstanders neutraliseren zonder de focus te verliezen',
          'Bepalen wanneer wordt opgeschaald naar de politie',
        ],
        programma: [
          ['Groepsdynamiek lezen', 'Herkennen wanneer een groep gaat kantelen, vóórdat het escaleert.'],
          ['Gecoördineerd optreden', 'Samenwerken met collega’s bij incidenten met meerdere personen.'],
          ['Crowd control', 'Principes van crowd control toepassen bij massadrang en ongecontroleerde publieksstromen.'],
          ['Provocateurs en camera', 'Professioneel reageren op provocateurs die opnames gebruiken.'],
          ['Opschalen', 'Bepalen wanneer je opschaalt naar de politie, en proportioneel blijven.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen organisatie',
          'scenario’s die de grenzen opzoeken',
          'feedback op teamoptreden en proportionaliteit',
        ],
        situaties: [
          'Groepsconflicten die snel escaleren',
          'Georganiseerde confrontaties tussen rivaliserende groepen',
          'Massadrang en ongecontroleerde publieksstromen',
          'Provocateurs die opnames gebruiken',
          'Omstanders die de agressor steunen',
          'Agressie in combinatie met intoxicatie of psychiatrische ontregeling',
        ],
        waarom: [
          'Groepsincidenten bij evenementen vragen meer dan basisvaardigheden. Wie een groep verkeerd leest of niet gecoördineerd optreedt, maakt een situatie groter dan hij was.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig leert beveiligers complexe groepsdynamieken lezen en gecoördineerd handelen in hoogrisicoscenario’s.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-horecaportiers-uitsmijters-gevorderd', 'agressietraining-sportaccommodaties-zwembaden-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor hoofden beveiliging bij evenementen',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende rol in de evenementenbeveiliging met aantoonbare werkervaring',
        doelgroep:
          'Hoofden beveiliging, veiligheidsmanagers en senior beveiligers in een leidinggevende rol bij evenementen.',
        samenvatting:
          'De expert agressietraining voor hoofden beveiliging bij evenementen van Bureau Weerbaar en Veilig leert leidinggevenden risicoanalyses omzetten in maatregelen, teams briefen op incidentscenario’s en debriefing leiden na ernstige incidenten. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Risicoanalyses uitvoeren en vertalen naar veiligheidsmaatregelen',
          'Teams briefen op basis van incidentscenario’s',
          'Coördineren bij grootschalige incidenten',
          'Gestructureerde debriefing na ernstige incidenten leiden',
          'De juridische kaders rond geweldgebruik begrijpen',
          'De meldcultuur en leercyclus versterken',
        ],
        programma: [
          ['Risicoanalyse per evenement', 'Analyseren en omzetten in concrete veiligheidsmaatregelen.'],
          ['Briefen op scenario’s', 'Teams voorbereiden met realistische incidentscenario’s.'],
          ['Coördinatie bij grootschalige incidenten', 'Regie houden wanneer meerdere teams en hulpdiensten betrokken zijn.'],
          ['Debriefing en leercyclus', 'Gestructureerde debriefing leiden en de leercyclus na een evenement inrichten.'],
          ['Juridische kaders geweldgebruik', 'De juridische verantwoordelijkheid rond geweldgebruik begrijpen en uitleggen.'],
        ],
        werkvormen: [
          'analyse van incidentrapportages en teamcultuur',
          'strategische beleidsverdieping met teamcoaching',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Inconsistente teamreacties op vergelijkbare situaties',
          'Onvoldoende incidentanalyse na evenementen',
          'Samenwerking met politie en hulpdiensten bij escalaties',
          'Onduidelijke juridische verantwoordelijkheid bij geweldgebruik',
        ],
        waarom: [
          'Agressie-incidenten bij evenementen zijn zelden volledig te voorkomen. Wat wél te sturen is: hoe het beveiligingsteam erop reageert.',
          'Deze experttraining van Bureau Weerbaar en Veilig versterkt het strategische veiligheidsbeleid en de coaching van het team, met de juridische kaders rond geweldgebruik als vast onderdeel.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-horecaportiers-uitsmijters-expert', 'agressietraining-sportaccommodaties-zwembaden-expert'],
      },
    ],
  },
];
