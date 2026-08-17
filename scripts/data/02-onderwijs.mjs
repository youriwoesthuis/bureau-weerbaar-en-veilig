/** Brongegevens sector ONDERWIJS: overgenomen van bureauwenv.wizzinc-dev2.nl. */

export const sector = {
  naam: 'Onderwijs',
  slug: 'onderwijs',
  samenvatting:
    'Bureau Weerbaar en Veilig traint onderwijspersoneel in het begrenzen van grensoverschrijdend gedrag van leerlingen, studenten en ouders, zonder gezag of onderwijsrelatie te verliezen. Voor leraren in het voortgezet onderwijs en mbo en voor leerplichtambtenaren, elk in drie niveaus.',
  afbeeldingAlt: 'Leraar in gesprek met leerlingen in een klaslokaal',
  intro: [
    'Grensoverschrijdend gedrag in het onderwijs heeft één kenmerk dat het anders maakt dan agressie in andere sectoren: er kijkt altijd een groep mee. Een leraar die door één leerling wordt uitgedaagd, doet dat voor de ogen van dertig anderen, en de manier waarop hij of zij reageert, bepaalt het gezag van de rest van het schooljaar.',
    'Bureau Weerbaar en Veilig traint daarom niet alleen op het individuele gesprek maar ook op groepsdynamiek, en op de vraag hoe een team eenduidig reageert op dezelfde leerling. Daarnaast is er een aparte lijn voor leerplichtambtenaren, die het gezin thuis opzoeken met een handhavende bevoegdheid.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Leraren voortgezet onderwijs',
    slug: 'leraren-voortgezet-onderwijs',
    slugPrefix: 'agressietraining-leraren-voortgezet-onderwijs',
    afbeelding: 'leraren-vo.jpg',
    afbeeldingAlt: 'Leraar geeft les aan een klas in het voortgezet onderwijs',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor leraren in het voortgezet onderwijs in drie niveaus. Van grensoverschrijdend gedrag begrenzen zonder gezagsverlies (basis) tot manipulatief gedrag en klasdynamiek (gevorderd) en gedragsbeleid op schoolniveau (expert).',
    intro: [
      'Een leraar in het voortgezet onderwijs staat er alleen voor de klas, maar nooit alleen tegenover één leerling: de hele groep kijkt mee en weegt de reactie. Uitgescholden worden, belachelijk gemaakt worden of een leerling die weigert het lokaal te verlaten: het speelt zich altijd af in het bijzijn van publiek.',
      'Daar komt bij dat ouders steeds vaker onderdeel van het probleem zijn: een agressieve ouder op school vraagt een andere aanpak dan een leerling die zijn grenzen zoekt.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor leraren in het voortgezet onderwijs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Alle leraren en onderwijsmedewerkers in het voortgezet onderwijs met direct contact met leerlingen en ouders.',
        samenvatting:
          'De agressietraining voor leraren in het voortgezet onderwijs van Bureau Weerbaar en Veilig leert leraren grensoverschrijdend gedrag herkennen en begrenzen met rustige, heldere communicatie, zonder gezag te verliezen. De training duurt 1 dag, telt maximaal 10 deelnemers en behandelt ook agressieve ouders op school.',
        resultaat: [
          'Verschillende vormen van grensoverschrijdend gedrag herkennen',
          'De eigen reactie reguleren onder druk, zonder gezag te verliezen',
          'Gedrag professioneel begrenzen met heldere, rustige communicatie',
          'Situaties de-escaleren voordat ze fysiek worden',
          'Handelen volgens de schoolprotocollen',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Grensoverschrijdend gedrag in de klas', 'Vormen van gedrag herkennen en de signalen die eraan voorafgaan, met de groep als publiek.'],
          ['Gezag houden onder druk', 'De eigen reactie reguleren wanneer je wordt uitgescholden of belachelijk gemaakt.'],
          ['Begrenzen met rust', 'Gedrag begrenzen met heldere, rustige communicatie, ook bij weigering het lokaal te verlaten.'],
          ['Agressieve ouders', 'Professioneel handelen bij een ouder die op school agressief wordt.'],
          ['Protocol en melden', 'Handelen volgens de schoolprotocollen en incidenten correct melden en nabespreken.'],
        ],
        werkvormen: [
          'realistische oefeningen uit de praktijk van het voortgezet onderwijs',
          'casuïstiek van de eigen school',
          'praktijkgericht oefenen zonder naïeve rollenspellen',
        ],
        situaties: [
          'Leerlingen die leraren uitschelden of belachelijk maken',
          'Groepen die de les stelselmatig verstoren',
          'Dreigende taal of intimidatie',
          'Een leerling die weigert het klaslokaal te verlaten',
          'Agressieve ouders op school',
          'Fysieke dreiging of escalatie',
        ],
        waarom: [
          'Zonder concrete training weten leraren niet altijd hoe zij grensoverschrijdend gedrag effectief begrenzen. Het gevolg is gezagsverlies en een klas die structureel moeilijker te sturen is.',
          'De basistraining van Bureau Weerbaar en Veilig geeft leraren praktische handvatten om rustig en duidelijk te blijven, ook als de hele klas meekijkt.',
        ],
        vragen: [
          [
            'Wordt agressie van ouders ook behandeld?',
            'Ja. Een agressieve ouder op school is een aparte situatie met een eigen aanpak en komt expliciet aan bod in de training.',
          ],
        ],
        gerelateerd: ['agressietraining-leraren-mbo-basis', 'agressietraining-leerplichtambtenaren-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor leraren in het voortgezet onderwijs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met gedragsincidenten',
        doelgroep:
          'Leraren met basiskennis die regelmatig complexe of herhaalde gedragsincidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor leraren in het voortgezet onderwijs van Bureau Weerbaar en Veilig richt zich op gedrag dat niet impulsief is: manipulatie, valse beschuldigingen en klasdynamiek die omslaat. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met gedragsincidenten.',
        resultaat: [
          'Instrumenteel en manipulatief gedrag onderscheiden van frustratie',
          'Groepsdynamiek lezen en bijsturen voordat escalatie optreedt',
          'Gedragsprofielen hanteren en risico’s inschatten',
          'Teamafspraken formuleren bij herhaald grensoverschrijdend gedrag',
          'Consistent en eenduidig reageren als team',
          'Grenzen stellen zonder de onderwijsrelatie onnodig te beschadigen',
        ],
        programma: [
          ['Instrumenteel gedrag herkennen', 'Het verschil tussen frustratie en gedrag dat bewust wordt ingezet voor aandacht of verstoring.'],
          ['Klasdynamiek bijsturen', 'Groepsdynamiek lezen en ingrijpen vóór het moment dat een klas collectief omslaat.'],
          ['Manipulatie en valse beschuldigingen', 'Professioneel handelen bij manipulatie via valse beschuldigingen.'],
          ['Teamafspraken', 'Afspraken maken en nakomen bij leerlingen die herhaald grenzen overschrijden.'],
          ['Casuïstiek van de eigen school', 'Eigen situaties analyseren en oefenen, met aandacht voor patronen in het team.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen school',
          'patroonherkenning met feedback van de trainer',
          'oefeningen gericht op teamafspraken',
        ],
        situaties: [
          'Leerlingen die bewust en herhaald grenzen verleggen',
          'Instrumenteel gedrag gericht op aandacht of verstoring',
          'Een klasdynamiek die collectief omslaat',
          'Manipulatie via valse beschuldigingen',
          'Inconsistente teamreacties op dezelfde leerling',
        ],
        waarom: [
          'Sommig grensoverschrijdend gedrag is niet impulsief. Een leerling die precies weet welke knoppen werken, of een groep die een leraar collectief uitdaagt, vraagt meer dan rustig blijven en duidelijk begrenzen.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die patronen én op de teamconsistentie die uiteindelijk bepaalt of gedrag doorgaat of stopt.',
        ],
        vragen: [
          [
            'Waarom is teamconsistentie zo belangrijk?',
            'Omdat een leerling die bij de ene leraar wél wegkomt met gedrag en bij de andere niet, het gedrag blijft testen. Eenduidige teamafspraken zijn daarom een kernonderdeel van deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-leraren-mbo-gevorderd', 'agressietraining-leerplichtambtenaren-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leraren in sleutelfuncties in het voortgezet onderwijs',
        duur: '2 dagen',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of coördinerende functie met aantoonbare werkervaring met gedragsincidenten',
        doelgroep:
          'Teamleiders, afdelingsleiders, zorgcoördinatoren en senior leraren die collega’s begeleiden bij gedragsincidenten.',
        samenvatting:
          'De expert agressietraining voor leraren in sleutelfuncties in het voortgezet onderwijs van Bureau Weerbaar en Veilig leert schoolleiders gedragspatronen op schoolniveau analyseren, het gedragsprotocol aanscherpen en de meldcultuur versterken. De training duurt 2 dagen en telt maximaal 8 deelnemers.',
        resultaat: [
          'Gedragspatronen op schoolniveau analyseren en bespreekbaar maken',
          'Het gedragsprotocol toetsen op bruikbaarheid en aanscherpen',
          'Collega’s structureel coachen na ernstige incidenten',
          'Een heldere escalatiestructuur opzetten en borgen',
          'Juridische en organisatorische verantwoordelijkheid begrijpen en communiceren',
          'De meldcultuur op school versterken',
        ],
        programma: [
          ['Patronen op schoolniveau', 'Meldingsdata en cultuur analyseren om gedragspatronen zichtbaar en bespreekbaar te maken.'],
          ['Protocol toetsen op de klassenpraktijk', 'Werkt het gedragsprotocol ook op een dinsdagmiddag in een volle klas? Toetsen en aanscherpen.'],
          ['Collega’s coachen', 'Leraren structureel begeleiden na ernstige incidenten.'],
          ['Escalatie en verantwoordelijkheid', 'Een escalatiestructuur opzetten en de juridische en organisatorische verantwoordelijkheid helder communiceren.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid, meldingsdata en schoolcultuur',
          'casuïstiekbespreking',
          'concrete beleidsverbetering op schoolniveau',
        ],
        situaties: [
          'Incidenten worden onvoldoende gemeld of nabesproken',
          'Het gedragsprotocol wordt niet consistent toegepast',
          'Leraren reageren verschillend op dezelfde leerling',
          'Structurele nazorg na ernstige incidenten ontbreekt',
          'Het escalatiebeleid is onduidelijk',
          'Juridische en organisatorische verantwoordelijkheid is verdeeld',
        ],
        waarom: [
          'Grensoverschrijdend gedrag op school is zelden volledig te voorkomen. Wat een school wél kan sturen: hoe het team reageert en of het gedragsbeleid werkt in de dagelijkse klassenpraktijk.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op die schoolbrede kant: beleid, escalatiestructuur, nazorg en meldcultuur.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-leraren-mbo-expert', 'agressietraining-leerplichtambtenaren-expert'],
      },
    ],
  },

  {
    naam: 'Leraren mbo',
    slug: 'leraren-mbo',
    slugPrefix: 'agressietraining-leraren-mbo',
    afbeelding: 'leraren-mbo.jpg',
    afbeeldingAlt: 'Docent begeleidt studenten in een praktijklokaal op het mbo',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor leraren in het mbo in drie niveaus. Van grensoverschrijdend gedrag begrenzen (basis) tot strategisch gedrag en groepsdynamiek (gevorderd) en gedragsbeleid op instellingsniveau (expert).',
    intro: [
      'Mbo-studenten zijn jongvolwassenen, vaak met een complexe achtergrond en een leven buiten school dat de klas binnenkomt. Een docent heeft daardoor te maken met gedrag dat verder gaat dan puberaal grenzen zoeken: bewuste intimidatie, studenten onder invloed, groepen die de docent collectief testen.',
      'Bureau Weerbaar en Veilig traint mbo-docenten met trainers die de sector kennen, op basis van situaties uit de eigen instelling.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor leraren in het mbo',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Alle leraren en onderwijsondersteuners met direct studentcontact in het mbo.',
        samenvatting:
          'De agressietraining voor leraren in het mbo van Bureau Weerbaar en Veilig leert docenten grensoverschrijdend gedrag herkennen, hun eigen reactie reguleren en gedrag begrenzen met rustige, heldere communicatie. De training duurt 1 dag, telt maximaal 10 deelnemers en werkt met situaties uit de eigen instelling.',
        resultaat: [
          'Verschillende vormen van grensoverschrijdend gedrag herkennen',
          'De eigen reactie reguleren onder druk, zonder te escaleren',
          'Gedrag professioneel begrenzen met heldere, rustige communicatie',
          'Situaties de-escaleren voordat ze onbeheersbaar worden',
          'De protocollen van de instelling toepassen',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Grensoverschrijdend gedrag in het mbo', 'Vormen van gedrag herkennen bij jongvolwassenen met vaak complexe achtergronden.'],
          ['Reguleren onder druk', 'De eigen reactie beheersen wanneer een student je uitscheldt of belachelijk maakt.'],
          ['Begrenzen en de-escaleren', 'Gedrag begrenzen met rustige communicatie, ook bij weigering aanwijzingen op te volgen.'],
          ['Groepen en verstoring', 'Handelen bij groepen die de les verstoren en bewust grenzen testen.'],
          ['Onder invloed, protocol en melden', 'Handelen bij studenten onder invloed van alcohol of drugs, en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met mbo-ervaring',
          'casuïstiek van de eigen instelling',
          'praktijkgericht oefenen',
        ],
        situaties: [
          'Een student die de docent uitscheldt of belachelijk maakt',
          'Groepen die de les verstoren en grenzen bewust testen',
          'Dreigende taal of intimidatie',
          'Weigering om aanwijzingen op te volgen',
          'Fysieke intimidatie',
          'Studenten onder invloed van alcohol of drugs',
        ],
        waarom: [
          'Mbo-studenten hebben vaak complexe achtergronden, en grensoverschrijdend gedrag leidt in het mbo snel tot gezagsverlies en uitval van personeel.',
          'De basistraining van Bureau Weerbaar en Veilig helpt docenten die situaties professioneel beheersbaar te houden, met oefeningen die gebaseerd zijn op wat zij op hun eigen instelling meemaken.',
        ],
        vragen: [
          [
            'Komen studenten onder invloed aan bod?',
            'Ja. Handelen bij studenten onder invloed van alcohol of drugs is een herkenbare situatie in het mbo en wordt expliciet behandeld.',
          ],
        ],
        gerelateerd: ['agressietraining-leraren-voortgezet-onderwijs-basis', 'agressietraining-leerplichtambtenaren-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor leraren in het mbo',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met gedragsincidenten',
        doelgroep:
          'Leraren in het mbo die de basisvaardigheden beheersen en regelmatig te maken hebben met complexe of herhaalde gedragsincidenten.',
        samenvatting:
          'De gevorderde agressietraining voor leraren in het mbo van Bureau Weerbaar en Veilig richt zich op gedrag dat strategisch is: manipulatie van het systeem, groepen die collectief uitdagen en agressie in combinatie met verslavings- of psychiatrische problematiek. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Instrumenteel en manipulatief gedrag herkennen en adequaat reageren',
          'Groepsdynamiek analyseren en bijsturen vóór escalatie',
          'Gedragsprofielen gebruiken voor risico-inschatting',
          'Teamafspraken maken en consistent nakomen',
          'Eenduidige reacties van het team organiseren',
          'Grenzen stellen zonder de onderwijsrelatie te beschadigen',
        ],
        programma: [
          ['Strategisch gedrag herkennen', 'Studenten die bewust grenzen overschrijden en het systeem van de instelling manipuleren.'],
          ['Groepsdynamiek bijsturen', 'Analyseren en ingrijpen wanneer een groep de docent collectief uitdaagt.'],
          ['Complexe problematiek', 'Agressie in combinatie met verslavingsproblematiek of een psychiatrische achtergrond.'],
          ['Teamafspraken en consistentie', 'Afspraken maken en nakomen, zodat het team eenduidig reageert.'],
          ['Casuïstiek van de eigen instelling', 'Eigen situaties oefenen, met signalering van teampatronen door de trainer.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen instelling',
          'analyse van groeps- en teampatronen',
          'oefening van eigen situaties met feedback',
        ],
        situaties: [
          'Studenten die bewust grenzen overschrijden en het systeem manipuleren',
          'Groepen die de docent collectief uitdagen',
          'Agressie in combinatie met verslavingsproblematiek of psychiatrische achtergrond',
          'Inconsistente teamreacties die ongewenst gedrag in stand houden',
        ],
        waarom: [
          'Veel grensoverschrijdend gedrag in het mbo is niet impulsief maar strategisch: een student die precies weet hoe ver hij kan gaan, of een groep die samen de grens opzoekt.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op dat gedrag en op de teamconsistentie die bepaalt of het aanhoudt of stopt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-leraren-voortgezet-onderwijs-gevorderd', 'agressietraining-leerplichtambtenaren-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leraren in sleutelfuncties in het mbo',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of coördinerende functie met aantoonbare werkervaring met gedragsincidenten',
        doelgroep:
          'Teamleiders, zorgcoördinatoren en senior leraren in het mbo die het gedragsbeleid willen versterken en het team willen coachen.',
        samenvatting:
          'De expert agressietraining voor leraren in sleutelfuncties in het mbo van Bureau Weerbaar en Veilig leert teamleiders gedragspatronen op instellingsniveau analyseren, het gedragsprotocol aanscherpen en de meldcultuur versterken. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Gedragspatronen op instellingsniveau analyseren',
          'Het gedragsprotocol toetsen en aanscherpen',
          'Collega’s coachen na ernstige incidenten',
          'Een escalatiestructuur opzetten en borgen',
          'Juridische verantwoordelijkheid begrijpen en communiceren',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Patronen op instellingsniveau', 'Beleid, meldingsdata en cultuur analyseren om patronen zichtbaar te maken.'],
          ['Protocol aanscherpen', 'Het gedragsprotocol toetsen en verbeteren op basis van wat er werkelijk gebeurt.'],
          ['Coachen na incidenten', 'Collega’s structureel begeleiden na ernstige incidenten.'],
          ['Escalatie en verantwoordelijkheid', 'Een escalatiestructuur opzetten en verantwoordelijkheden helder maken.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie binnen de eigen instelling.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid, meldingsdata en cultuur',
          'casuïstiekbespreking',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Incidenten worden onvoldoende gemeld en nabesproken',
          'Het gedragsprotocol wordt inconsistent toegepast',
          'Leraren reageren verschillend op dezelfde student',
          'Structurele nazorg na incidenten ontbreekt',
          'Het escalatiebeleid is onduidelijk',
          'Verantwoordelijkheden zijn onhelder verdeeld',
        ],
        waarom: [
          'Grensoverschrijdend gedrag in het mbo is moeilijk volledig te voorkomen. Wat een instelling wél kan verbeteren: hoe het team samen optreedt en hoe effectief het gedragsbeleid is georganiseerd.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op die organisatiekant, van protocol tot meldcultuur.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-leraren-voortgezet-onderwijs-expert', 'agressietraining-leerplichtambtenaren-expert'],
      },
    ],
  },

  {
    naam: 'Leerplichtambtenaren',
    slug: 'leerplichtambtenaren',
    afbeelding: 'leerplichtambtenaren.jpg',
    afbeeldingAlt: 'Leerplichtambtenaar in gesprek met ouders aan de keukentafel',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor leerplichtambtenaren in drie niveaus. Van veilig werken tussen handhaving en hulpverlening (basis) tot complexe gezinssituaties en juridische dreiging (gevorderd) en veiligheidsbeleid voor solo-huisbezoeken (expert).',
    intro: [
      'Een leerplichtambtenaar komt binnen met twee rollen tegelijk: handhaver en hulpverlener. Dat is precies de spanning die agressie oproept: een gezin ziet de bevoegdheid, niet de bedoeling, en ervaart het bezoek als bemoeienis van de overheid.',
      'Daarbij gaat de leerplichtambtenaar naar de mensen toe, vaak alleen, in gezinnen waar meerdere problemen samenkomen. Bureau Weerbaar en Veilig traint deze beroepsgroep daarom expliciet op huisbezoeken en veiligheidstaxatie.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor leerplichtambtenaren',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Leerplichtambtenaren en RMC-medewerkers met direct contact met ouders en jongeren.',
        samenvatting:
          'De agressietraining voor leerplichtambtenaren van Bureau Weerbaar en Veilig leert leerplichtambtenaren de spanning tussen handhaving en hulpverlening als risicofactor herkennen, agressief gedrag begrenzen en veilig handelen bij huisbezoeken. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'De spanning tussen handhaving en hulpverlening als risicofactor herkennen',
          'Signalen van risicovolle gezinssituaties vroegtijdig identificeren',
          'De eigen reactie reguleren bij agressief gedrag',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Veilig handelen bij huisbezoeken',
          'Incidenten correct melden',
        ],
        programma: [
          ['Handhaver én hulpverlener', 'Waarom de dubbele rol van de leerplichtambtenaar zelf een risicofactor is.'],
          ['Signalen in het gezin', 'Risicovolle gezinssituaties vroegtijdig herkennen, vóór het huisbezoek.'],
          ['Begrenzen bij weerstand', 'Verbaal agressief gedrag begrenzen bij ouders die overheidsbemoeienis afwijzen.'],
          ['Veilig op huisbezoek', 'Veilig handelen aan de deur en in de woning, ook bij een vijandig gestemd gezin.'],
          ['Melden', 'Incidenten correct melden, ook bedreigingen via telefoon of sociale media.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de leerplichtcontext kennen',
          'herkenbare casuïstiek uit de eigen caseload',
          'aandacht voor de positie van de ambtenaar in een wantrouwend gezin',
        ],
        situaties: [
          'Agressieve reacties van ouders wanneer schoolverzuim wordt aangekaart',
          'Een vijandig gestemd gezin bij een huisbezoek',
          'Jongeren die de confrontatie opzoeken',
          'Ouders die bemoeienis van de overheid afwijzen',
          'Bedreigingen via telefoon of sociale media',
        ],
        waarom: [
          'Leerplichtambtenaren opereren tussen handhaving en hulpverlening. Die dubbelrol verhoogt het risico op escalatie: het gezin ziet vooral de bevoegdheid en het dwangmiddel.',
          'De basistraining van Bureau Weerbaar en Veilig geeft concrete handvatten om veilig en professioneel te werken in complexe gezinssituaties, inclusief het huisbezoek.',
        ],
        vragen: [
          [
            'Is er aandacht voor huisbezoeken?',
            'Ja. Veilig handelen bij huisbezoeken: aan de deur en binnen: is een kernonderdeel van de training, net als het vooraf herkennen van risicosignalen.',
          ],
        ],
        gerelateerd: ['agressietraining-leraren-voortgezet-onderwijs-basis', 'agressietraining-handhavers-boas-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor leerplichtambtenaren',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'afgeronde basistraining of aantoonbare werkervaring met complexe agressiesituaties in het leerplichtwerk',
        doelgroep:
          'Leerplichtambtenaren met basisvaardigheden die werken met gezinnen met complexe problematiek en hardnekkig verzuim.',
        samenvatting:
          'De gevorderde agressietraining voor leerplichtambtenaren van Bureau Weerbaar en Veilig richt zich op structurele agressie: gezinnen die elk contact saboteren, juridische dreiging en benadering buiten werktijd. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met complexe situaties.',
        resultaat: [
          'Complexe gezins- en agressiepatronen herkennen',
          'Professioneel standhouden bij juridische dreigingen',
          'Veiligheidstaxatie toepassen bij huisbezoeken',
          'Omgaan met agressie buiten werktijd via privékanalen',
          'Samenwerken met ketenpartners',
          'Professionele distantie bewaren',
        ],
        programma: [
          ['Complexe gezinspatronen', 'Herkennen wanneer een gezin elk contact structureel saboteert, en wat dat betekent voor je aanpak.'],
          ['Juridische dreiging', 'Professioneel standhouden wanneer ouders dreigen met juridische stappen.'],
          ['Veiligheidstaxatie', 'Systematisch taxeren van risico’s vóór en tijdens een huisbezoek bij meervoudige problematiek.'],
          ['Agressie in de privésfeer', 'Omgaan met benadering buiten werktijd, via sociale media of privékanalen.'],
          ['Ketensamenwerking en distantie', 'Samenwerken met jeugdzorg en andere partners, en professionele distantie bewaren.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen caseload',
          'analyse en oefening van ingebrachte situaties',
          'aandacht voor emotionele belasting',
        ],
        situaties: [
          'Gezinnen die elk contact actief saboteren',
          'Ouders die dreigen met juridische stappen',
          'Huisbezoeken in gezinnen met ernstige meervoudige problematiek',
          'Benadering buiten werktijd via sociale media',
          'Gezinnen waarbij meerdere instanties betrokken zijn',
          'Agressie die escaleert na gesprekken via derden',
        ],
        waarom: [
          'Sommige agressie in het leerplichtwerk is niet impulsief maar patroonmatig: een gezin dat systematisch elk contact blokkeert, of ouders die bij elke stap juridisch dreigen.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die structurele situaties, met veiligheidstaxatie bij huisbezoeken en samenwerking met ketenpartners.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-handhavers-boas-gevorderd', 'agressietraining-maatschappelijk-werkers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden over leerplichtambtenaren',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'coördinerende of leidinggevende verantwoordelijkheid voor een leerplichtteam',
        doelgroep:
          'Coördinatoren leerplicht, teamleiders en beleidsmedewerkers bij gemeenten die verantwoordelijk zijn voor de veiligheid van het leerplichtwerk.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden over leerplichtambtenaren van Bureau Weerbaar en Veilig leert coördinatoren een veiligheidsprotocol voor solo-huisbezoeken ontwikkelen, ketensamenwerking organiseren en medewerkers coachen na incidenten. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Een veiligheidsprotocol voor solo-huisbezoeken ontwikkelen',
          'Ketensamenwerking met jeugdzorg en politie organiseren',
          'Medewerkers coachen na agressie-incidenten',
          'Beleid opstellen voor structureel agressieve gezinnen',
          'Ondersteuning bieden bij juridische dreigingen',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Protocol voor solo-huisbezoeken', 'Een helder veiligheidsprotocol voor medewerkers die alleen op huisbezoek gaan.'],
          ['Ketensamenwerking', 'Samenwerking met jeugdzorg en politie organiseren zodat die er ook is als het nodig is.'],
          ['Beleid bij structureel agressieve gezinnen', 'Beleid opstellen voor gezinnen waar agressie een patroon is.'],
          ['Coachen en juridische ondersteuning', 'Debriefing na incidenten inrichten en medewerkers bijstaan bij juridische dreiging.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie binnen de gemeente.'],
        ],
        werkvormen: [
          'analyse van veiligheidsbeleid, incidentrapportages en ketensamenwerking',
          'beleidsverdieping met concrete protocollen',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Leerplichtambtenaren melden agressie niet structureel',
          'Er is geen protocol voor risicovolle huisbezoeken',
          'Debriefing na incidenten ontbreekt',
          'De ketensamenwerking verloopt moeizaam',
          'Er is geen beleid voor structureel agressieve gezinnen',
        ],
        waarom: [
          'Leerplichtambtenaren werken solo in complexe gezinssituaties, met juridische bevoegdheden die weerstand oproepen. Dat maakt hen kwetsbaar op momenten dat niemand meekijkt.',
          'Leidinggevenden zijn daarom bepalend: zij stellen het veiligheidsbeleid op en bouwen de cultuur waarin agressie serieus wordt genomen. Deze experttraining van Bureau Weerbaar en Veilig richt zich op precies die taak.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-handhavers-boas-expert', 'agressietraining-gemeenteloket-publieksbalie-expert'],
      },
    ],
  },
];
