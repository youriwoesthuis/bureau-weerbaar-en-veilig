/**
 * Brongegevens sector FINANCIËLE DIENSTVERLENING: bureauwenv.wizzinc-dev2.nl.
 * De oude slugs van hypotheek-basis en bank-expert eindigden op "-copy"; die zijn
 * hier opgeschoond (zie redirects.md).
 */

export const sector = {
  naam: 'Financiële dienstverlening',
  slug: 'financiele-dienstverlening',
  samenvatting:
    'Bureau Weerbaar en Veilig traint medewerkers in de financiële dienstverlening in het omgaan met agressie van klanten in financiële nood of crisis. Voor incasso, verzekeringen, hypotheekadvies en bankbalies, elk in drie niveaus.',
  afbeeldingAlt: 'Adviseur in gesprek met een klant over een financieel dossier',
  intro: [
    'In de financiële dienstverlening gaat elk moeilijk gesprek over geld dat iemand niet heeft, niet krijgt of kwijtraakt. Een afgewezen hypotheek, een geblokkeerde rekening, een afgewezen schadeclaim, een aanmaning: de klant staat vaak met de rug tegen de muur, en de medewerker is het gezicht van het besluit.',
    'Kenmerkend voor deze sector is dat medewerkers persoonlijk verantwoordelijk worden gehouden voor beslissingen van hun organisatie. Daarbij loopt veel agressie via de telefoon en per e-mail, en steeds vaker via klachtenprocedures en juridische dreiging. Bureau Weerbaar en Veilig traint deze beroepsgroepen daarom op het brengen van slecht nieuws en op het standhouden onder juridische druk.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Incasso & schuldhulpverlening',
    slug: 'incasso-schuldhulpverlening',
    afbeelding: 'incasso.jpg',
    afbeeldingAlt: 'Schuldbehandelaar voert een telefoongesprek over een betalingsregeling',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor incasso- en schuldbehandelaars in drie niveaus. Van agressie bij aanmaningen de-escaleren (basis) tot strategische weigeraars en onveilige huisbezoeken (gevorderd) en veiligheidsbeleid voor huisbezoeken (expert).',
    intro: [
      'Wie schulden invordert, komt binnen op het slechtste moment van iemands jaar. Debiteuren reageren op een aanmaning met woede of wanhoop, en soms met beide tegelijk, en de behandelaar moet toch tot een regeling komen.',
      'Voor deze beroepsgroep speelt daarnaast een morele vraag: hoe stel je grenzen aan iemand die het echt niet meer weet? Bureau Weerbaar en Veilig maakt die spanning in de training expliciet.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor incasso- en schuldbehandelaars',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Incasso- en schuldbehandelaars met direct contact met debiteuren.',
        samenvatting:
          'De agressietraining voor incasso- en schuldbehandelaars van Bureau Weerbaar en Veilig leert behandelaars agressie herkennen, begrenzen en de-escaleren bij debiteuren in schuldenproblematiek. De training duurt 1 dag, telt maximaal 10 deelnemers en besteedt expliciet aandacht aan de morele kant van het werk.',
        resultaat: [
          'Vormen van agressie herkennen',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Situaties de-escaleren',
          'Het agressieprotocol correct toepassen',
          'Incidenten correct melden',
        ],
        programma: [
          ['Woede en wanhoop', 'Herkennen wat je tegenover je hebt bij debiteuren in schuldenproblematiek.'],
          ['Reguleren aan de telefoon', 'Rustig blijven bij een schreeuwende debiteur en bij persoonlijke aanvallen.'],
          ['Begrenzen en de-escaleren', 'Professioneel begrenzen bij wanhopig-dreigend gedrag rond een schuldenregeling.'],
          ['Veilig op huisbezoek', 'Handelen bij intimidatie tijdens een huisbezoek.'],
          ['Protocol, melden en moraal', 'Het agressieprotocol toepassen, incidenten melden en de morele dimensie van het werk bespreken.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met incasso-ervaring',
          'casuïstiek uit eigen dossiers',
          'aandacht voor de morele dimensie van het werk',
        ],
        situaties: [
          'Schreeuwende debiteuren bij telefonisch contact',
          'Wanhopig-dreigend gedrag rond een schuldenregeling',
          'Persoonlijke aanvallen op de medewerker',
          'Intimidatie tijdens huisbezoeken',
          'Escalerende communicatie via telefoon of e-mail',
        ],
        waarom: [
          'Debiteuren in schuldenproblematiek reageren vaak agressief op aanmaningen. Voor incasso- en schuldbehandelaars is agressie daarmee geen incident maar een structureel risico van het vak.',
          'De basistraining van Bureau Weerbaar en Veilig voorkomt escalatie en langdurig verzuim, met trainers die het incassowerk van binnenuit kennen.',
        ],
        vragen: [
          [
            'Hoe stel je grenzen aan iemand die echt in nood zit?',
            'Dat is de morele kern van dit vak, en die wordt in de training expliciet besproken: begrenzen zonder de mens uit het oog te verliezen.',
          ],
        ],
        gerelateerd: ['agressietraining-sociale-dienst-uitkeringsinstanties-basis', 'agressietraining-bankmedewerkers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor incasso- en schuldbehandelaars',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met agressie-incidenten',
        doelgroep:
          'Incasso- en schuldbehandelaars met basistraining die regelmatig complexe agressie-incidenten hanteren.',
        samenvatting:
          'De gevorderde agressietraining voor incasso- en schuldbehandelaars van Bureau Weerbaar en Veilig richt zich op strategische weigeraars, extreme crisissituaties en onveilige huisbezoeken. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of aantoonbare werkervaring.',
        resultaat: [
          'Strategische weigeraars onderscheiden van debiteuren in nood',
          'Manipulatie- en intimidatietactieken neutraliseren',
          'Veilig handelen bij huisbezoeken',
          'Grenzen stellen aan ongewenst contact',
          'Professioneel standhouden in extreme situaties',
          'Teamafspraken maken bij herhaalde agressie',
        ],
        programma: [
          ['Weigeraar of noodgeval', 'Onderscheid maken tussen systematische weigering met intimidatie en echte nood.'],
          ['Manipulatie via rechtsmiddelen', 'Omgaan met het inzetten van rechtsmiddelen als druktactiek.'],
          ['Extreme crisissituaties', 'Professioneel standhouden bij een combinatie van schulden, dakloosheid, psychiatrie en verslaving.'],
          ['Veilig invorderen op locatie', 'Veiligheid bij huisbezoeken voor invordering.'],
          ['Contact buiten werktijd', 'Grenzen stellen aan benadering via privékanalen.'],
        ],
        werkvormen: [
          'casuïstiek uit eigen dossiers',
          'patroonsignalering met directe feedback',
          'aandacht voor emotionele balans en compassiemoeheid',
        ],
        situaties: [
          'Systematische weigering en intimidatie door debiteuren',
          'Extreme combinatiecrisis: schulden, dakloosheid, psychiatrie en verslaving',
          'Onveilige huisbezoeken voor invordering',
          'Benadering buiten werktijd via privékanalen',
          'Manipulatie via rechtsmiddelen als druktactiek',
        ],
        waarom: [
          'Sommige agressie in het incassowerk gaat verder dan een impulsieve reactie: debiteuren die strategisch weigeren en intimideren, of situaties waarin zoveel problemen samenkomen dat elk gesprek ontspoort.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die uitersten, met expliciete aandacht voor compassiemoeheid bij de behandelaar.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-sociale-dienst-uitkeringsinstanties-gevorderd', 'agressietraining-bankmedewerkers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in incasso en schuldhulpverlening',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een team incasso- of schuldbehandelaars',
        doelgroep:
          'Teamleiders, afdelingsmanagers en veiligheidscoördinatoren bij incassobureaus en schuldhulpverleningsorganisaties.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in incasso en schuldhulpverlening van Bureau Weerbaar en Veilig leert leidinggevenden agressiepatronen omzetten in beleid, veiligheidsprotocollen voor huisbezoeken opzetten en medewerkers coachen na zware contacten. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen herkennen en vertalen naar concrete beleidsmaatregelen',
          'Veiligheidsprotocollen voor huisbezoeken opzetten',
          'Medewerkers coachen na zware debiteurencontacten',
          'Grensstelling communiceren rond contact buiten werktijd',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Patronen naar beleid', 'Agressiepatronen zichtbaar maken en omzetten in concrete maatregelen.'],
          ['Protocol voor huisbezoeken', 'Veiligheidsprotocollen opzetten voor medewerkers die op huisbezoek gaan.'],
          ['Coachen na zware contacten', 'Structurele opvang inrichten na emotioneel zware debiteurencontacten.'],
          ['Grenzen en verantwoordelijkheid', 'Juridische verantwoordelijkheid helder beleggen en grenzen communiceren rond contact buiten werktijd.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie, met aandacht voor de belasting van de leidinggevende zelf.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid, dossieraard en organisatiecultuur',
          'beleidsverdieping met veiligheids- en coachingsstrategieën',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers melden zware contacten onvoldoende, waardoor patronen onzichtbaar blijven',
          'Onduidelijke protocollen bij grensoverschrijdend gedrag',
          'Onvoldoende opvang na emotioneel zware contacten',
          'Juridische verantwoordelijkheid is onduidelijk belegd',
        ],
        waarom: [
          'Agressie is in het incasso- en schuldwerk geen uitzondering maar dagelijkse realiteit. Dat maakt het tot een organisatievraagstuk in plaats van een kwestie van individuele weerbaarheid.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt leidinggevenden structurele verbetering te realiseren en duurzaam te borgen: met aandacht voor hun eigen belasting.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-sociale-dienst-uitkeringsinstanties-expert', 'agressietraining-bankmedewerkers-expert'],
      },
    ],
  },

  {
    naam: 'Verzekeringsmedewerkers',
    slug: 'verzekeringsmedewerkers',
    afbeelding: 'verzekeringen.jpg',
    afbeeldingAlt: 'Schadebehandelaar bekijkt een dossier met een klant',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor verzekeringsmedewerkers en schadebehandelaars in drie niveaus. Van agressie na een afgewezen claim de-escaleren (basis) tot manipulatie rond schadeclaims en fraudeweigering (gevorderd) en beleid rond grensoverschrijdend klantgedrag (expert).',
    intro: [
      'Wie een schadeclaim afwijst, praat met iemand die twee dingen tegelijk kwijt is: het bezit én de verwachting dat de verzekering dat zou opvangen. Emotionele schade en financiële teleurstelling komen in dat gesprek samen.',
      'Bij schadebehandeling speelt bovendien de fraudevraag. Een afwijzing die de klant als beschuldiging ervaart, maakt een gesprek onmiddellijk scherp. Bureau Weerbaar en Veilig traint deze groep daar specifiek op.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor verzekeringsmedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Verzekeringsmedewerkers en schadebehandelaars met direct klantcontact.',
        samenvatting:
          'De agressietraining voor verzekeringsmedewerkers van Bureau Weerbaar en Veilig leert medewerkers agressie herkennen en begrenzen bij klanten die emotionele schade en financiële teleurstelling combineren. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Verschillende vormen van agressie herkennen',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Situaties de-escaleren voordat ze onbeheersbaar worden',
          'Handelen volgens het agressieprotocol',
          'Incidenten correct melden',
        ],
        programma: [
          ['Schade en teleurstelling', 'Waarom de combinatie van emotionele schade en financiële teleurstelling agressie uitlokt.'],
          ['Reguleren onder druk', 'De eigen reactie beheersen wanneer een klant de afwijzing persoonlijk maakt.'],
          ['Begrenzen en de-escaleren', 'Professioneel begrenzen aan de telefoon en in gesprekken over een afgewezen claim.'],
          ['Klanten in crisis', 'Handelen bij klanten die in acute crisis zitten na ingrijpende schade.'],
          ['Protocol en melden', 'Handelen volgens het agressieprotocol en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de financiële dienstverlening',
          'casuïstiek uit de eigen schadepraktijk',
          'praktijkgericht oefenen zonder naïeve rollenspellen',
        ],
        situaties: [
          'Een klant reageert woedend op een afgewezen schadeclaim',
          'Persoonlijke verwijten richting de schadebehandelaar',
          'Dreiging met een klacht, de media of juridische stappen',
          'Klanten in acute crisis na ingrijpende schade',
          'Escalerende communicatie via telefoon en e-mail',
        ],
        waarom: [
          'Verzekeringsmedewerkers werken met klanten in stressvolle situaties. De combinatie van emotionele schade en financiële teleurstelling maakt agressie tot een reëel risico in dit werk.',
          'De basistraining van Bureau Weerbaar en Veilig geeft medewerkers concrete vaardigheden om die gesprekken te hanteren zonder zelf op te branden.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-bankmedewerkers-basis', 'agressietraining-hypotheek-kredietadviseurs-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor verzekeringsmedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Verzekeringsmedewerkers met basistraining die complexe agressiepatronen en manipulatie rond schadeclaims moeten hanteren.',
        samenvatting:
          'De gevorderde agressietraining voor verzekeringsmedewerkers van Bureau Weerbaar en Veilig richt zich op manipulatie rond schadeclaims, fraude-escalaties en onveilige schade-inspecties. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Onderscheid maken tussen instrumentele en crisisgerelateerde agressie',
          'Manipulatietactieken bij schadeclaims herkennen en neutraliseren',
          'Standhouden bij een fraudeweigering onder druk',
          'Veilig handelen bij locatiebezoeken',
          'Teamafspraken maken bij herhaalde escalaties',
          'Professionele grenzen bewaken zonder overmatige betrokkenheid',
        ],
        programma: [
          ['Instrumenteel of crisis', 'Onderscheiden of een klant systematisch druk uitoefent of echt in crisis zit.'],
          ['Manipulatie rond claims', 'Manipulatietactieken bij schadeclaims herkennen en neutraliseren.'],
          ['Fraudeweigering', 'Standhouden wanneer een klant de afwijzing van een claim niet accepteert.'],
          ['Druk via derden', 'Omgaan met druk via tussenpersonen, advocaten of juridische dreiging.'],
          ['Veilig op inspectie', 'Veilig handelen bij schade-inspecties ter plaatse.'],
        ],
        werkvormen: [
          'eigen casuïstiek met directe feedback',
          'analyse van escalatiepatronen',
          'aandacht voor de emotionele belasting van schadebehandeling',
        ],
        situaties: [
          'Klanten die systematisch druk uitoefenen voor een hogere vergoeding',
          'Fraude-gerelateerde escalaties waarbij de klant de afwijzing niet accepteert',
          'Klanten in acute crisis na ingrijpende schade',
          'Manipulatie via tussenpersonen of juridische druk',
          'Herhaalde contactmomenten die telkens escaleren',
          'Onveilige schade-inspecties ter plaatse',
        ],
        waarom: [
          'Rond schadeclaims wordt agressie vaak berekend ingezet: druk opvoeren tot de vergoeding hoger wordt, of een afwijzing niet accepteren en escaleren via elke beschikbare route.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op dat gedrag en op standhouden bij een fraudeweigering.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-bankmedewerkers-gevorderd', 'agressietraining-hypotheek-kredietadviseurs-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in de verzekeringsbranche',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor verzekeringsmedewerkers of schadebehandelaars',
        doelgroep: 'Teamleiders, managers en veiligheidscoördinatoren bij verzekeraars.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in de verzekeringsbranche van Bureau Weerbaar en Veilig leert leidinggevenden protocollen opstellen voor grensoverschrijdend klantgedrag en beleid ontwikkelen voor het beëindigen van klantrelaties. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen op afdelingsniveau herkennen en vertalen naar beleidsmaatregelen',
          'Protocollen opstellen voor grensoverschrijdend klantgedrag',
          'Medewerkers coachen na zware contactmomenten',
          'Beleid ontwikkelen voor het beëindigen van klantrelaties vanwege agressie',
          'Veiligheidsmaatregelen implementeren voor risicovolle contactmomenten',
        ],
        programma: [
          ['Patronen naar beleid', 'Meldingen op afdelingsniveau analyseren en omzetten in maatregelen.'],
          ['Protocol grensoverschrijdend gedrag', 'Een helder protocol opstellen voor klanten die over de grens gaan.'],
          ['Klantrelatie beëindigen', 'Beleid ontwikkelen om een klantrelatie te beëindigen vanwege agressie.'],
          ['Coachen en veiligheid', 'Opvang na zware gesprekken en veiligheidsmaatregelen bij risicovolle contactmomenten.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: ['beleidsanalyse op organisatieniveau', 'coaching- en ondersteuningsstrategieën', 'intervisie na 6 weken'],
        situaties: [
          'Medewerkers melden zware klantcontacten onvoldoende',
          'Structureel beleid voor grensoverschrijdend gedrag ontbreekt',
          'Ontoereikende opvang na emotioneel zware gesprekken',
          'Fraude-escalaties zonder structurele veiligheidsmaatregelen',
        ],
        waarom: [
          'Agressie in de verzekeringsbranche is structureel: het hoort bij een sector waarin dagelijks financiële teleurstellingen worden gecommuniceerd.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich daarom op de organisatie: leidinggevenden ondersteunen hun medewerkers én bouwen beleid dat blijft staan.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-bankmedewerkers-expert', 'agressietraining-hypotheek-kredietadviseurs-expert'],
      },
    ],
  },

  {
    naam: 'Hypotheek- & kredietadviseurs',
    slug: 'hypotheek-kredietadviseurs',
    afbeelding: 'hypotheekadvies.jpg',
    afbeeldingAlt: 'Hypotheekadviseur bespreekt een aanvraag met een klant',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor hypotheek- en kredietadviseurs in drie niveaus. Van slecht nieuws professioneel brengen (basis) tot schuld-projectie en combinatiecrisis (gevorderd) en beleid rond grensoverschrijdend klantgedrag (expert).',
    intro: [
      'Een hypotheekafwijzing raakt een levensplan: het huis gaat niet door, de verbouwing stopt, het bedrijf krijgt geen krediet. De adviseur die dat vertelt, wordt persoonlijk aangesproken op een beslissing van de geldverstrekker.',
      'Vaak zit er ook een crisis achter: een echtscheiding, ontslag en betalingsachterstand die samenkomen. Bureau Weerbaar en Veilig richt deze trainingen daarom op het brengen van slecht nieuws en op het gezond houden van de professionele grens.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor hypotheek- en kredietadviseurs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Hypotheek- en kredietadviseurs met direct klantcontact.',
        samenvatting:
          'De agressietraining voor hypotheek- en kredietadviseurs van Bureau Weerbaar en Veilig leert adviseurs slecht nieuws professioneel brengen en agressie de-escaleren wanneer een aanvraag wordt afgewezen. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Verschillende vormen van agressie herkennen',
          'De eigen reactie reguleren onder druk',
          'Slecht nieuws professioneel brengen',
          'Situaties de-escaleren',
          'Handelen volgens het agressieprotocol',
          'Incidenten correct melden',
        ],
        programma: [
          ['Persoonlijk aangesproken worden', 'Waarom adviseurs verantwoordelijk worden gehouden voor beslissingen van de organisatie.'],
          ['Slecht nieuws brengen', 'Een afwijzing of intrekking van krediet zo brengen dat escalatie zo klein mogelijk blijft.'],
          ['Reguleren en de-escaleren', 'Rustig blijven bij een furieuze reactie en de situatie terugbrengen.'],
          ['Dreiging met klacht of advocaat', 'Omgaan met dreiging met een klacht bij de AFM of met een advocaat.'],
          ['Wanhoop en protocol', 'Handelen bij een klant onder grote persoonlijke druk, en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de financiële dienstverlening',
          'casuïstiek uit de eigen adviespraktijk',
          'expliciete aandacht voor het brengen van slecht nieuws',
        ],
        situaties: [
          'Een furieuze reactie op een afgewezen hypotheekaanvraag',
          'Een klant die zijn kredietverlening ziet worden ingetrokken',
          'Dreiging met een klacht bij de AFM of met een advocaat',
          'Verbale agressie bij betalingsachterstanden',
          'Een wanhopige klant onder grote persoonlijke druk',
          'Escalerende communicatie buiten kantooruren',
        ],
        waarom: [
          'Hypotheek- en kredietadviseurs worden persoonlijk verantwoordelijk gesteld voor beslissingen die hun organisatie neemt. De klant ziet niet de acceptatienormen, maar de adviseur die "nee" zegt.',
          'De basistraining van Bureau Weerbaar en Veilig voorkomt verzuim, verloop en escalatie, met bijzondere aandacht voor het brengen van slecht nieuws.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-bankmedewerkers-basis', 'agressietraining-verzekeringsmedewerkers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor hypotheek- en kredietadviseurs',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met complexe klantgesprekken',
        doelgroep:
          'Adviseurs met basistraining die regelmatig complexe klantgesprekken voeren met klanten in financiële crisis.',
        samenvatting:
          'De gevorderde agressietraining voor hypotheek- en kredietadviseurs van Bureau Weerbaar en Veilig richt zich op manipulatie, schuld-projectie en klanten in combinatiecrisis. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met complexe klantgesprekken.',
        resultaat: [
          'Instrumentele agressie en manipulatie neutraliseren',
          'Standhouden in crisissituaties zonder defensief te reageren',
          'Grenzen stellen aan escalerend contact',
          'Gesprekken structureren met behoud van regie',
          'De professionele grens scherp en gezond houden',
        ],
        programma: [
          ['Manipulatie en juridische dreiging', 'Klanten die juridische dreiging gebruiken om een uitzondering af te dwingen.'],
          ['Schuld-projectie', 'Herkennen wanneer een klant jou verantwoordelijk maakt voor zijn situatie, en daar niet in meegaan.'],
          ['Combinatiecrisis', 'Standhouden bij klanten waar echtscheiding, ontslag en hypotheekproblemen samenkomen.'],
          ['Regie in het gesprek', 'Gesprekken structureren zodat je de regie houdt, ook onder maximale druk.'],
          ['Druk via derden en buiten werktijd', 'Omgaan met druk via partners of advocaten en met bedreigingen buiten werktijd.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen praktijk met directe feedback',
          'patroonherkenning rond manipulatie en schuld-projectie',
          'aandacht voor de emotionele belasting van het vak',
        ],
        situaties: [
          'Klanten die juridische dreiging gebruiken om uitzonderingen af te dwingen',
          'Schuld-projectie waarbij de adviseur verantwoordelijk wordt gesteld',
          'Combinatiecrisis: echtscheiding, ontslag en hypotheekproblemen tegelijk',
          'Druk via derden zoals partners of advocaten',
          'Persoonlijke bedreigingen buiten werktijd',
        ],
        waarom: [
          'Adviseurs krijgen te maken met patronen die verder gaan dan een eenmalige woede-uitbarsting: manipulatie, schuld-projectie en klanten wier hele leven tegelijk instort.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig helpt adviseurs die patronen te herkennen en de professionele grens scherp én gezond te houden onder maximale druk.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-bankmedewerkers-gevorderd', 'agressietraining-incasso-schuldhulpverlening-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in hypotheek- en kredietadvies',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een adviseursteam',
        doelgroep:
          'Teamleiders en directeuren van hypotheek- en kredietadviseurskantoren met ervaring in klantconflicten.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in hypotheek- en kredietadvies van Bureau Weerbaar en Veilig leert leidinggevenden een protocol opstellen voor grensoverschrijdend klantgedrag en adviseurs opvangen na zware gesprekken. De training duurt 2 dagen inclusief een vervolgmoment na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen herkennen en vertalen naar beleidsmaatregelen',
          'Een protocol opstellen voor grensoverschrijdend klantgedrag',
          'Adviseurs coachen na zware gesprekken',
          'Beleid ontwikkelen voor het beëindigen van klantrelaties',
          'De meldcultuur binnen het team versterken',
        ],
        programma: [
          ['Patronen naar beleid', 'Agressiepatronen zichtbaar maken en vertalen naar beleid.'],
          ['Protocol en grensstelling', 'Een protocol opstellen voor grensoverschrijdend klantgedrag en voor klachten en juridische dreiging.'],
          ['Adviseurs coachen', 'Opvang inrichten na zware klantgesprekken.'],
          ['Klantrelatie beëindigen', 'Beleid ontwikkelen om een klantrelatie te beëindigen.'],
          ['Vervolgmoment na 6 weken', 'Terugkombijeenkomst over de implementatie, met aandacht voor de belasting van de leidinggevende zelf.'],
        ],
        werkvormen: [
          'beleidsanalyse',
          'coaching- en ondersteuningsstrategieën',
          'vervolgmoment na 6 weken',
        ],
        situaties: [
          'Adviseurs melden agressieve gesprekken onvoldoende',
          'Er is geen structureel beleid voor grensstelling',
          'Onvoldoende opvang na zware klantcontacten',
          'Geen helder standpunt over klachten en juridische dreigementen',
          'Adviseurs hebben morele bezwaren om grenzen te stellen',
        ],
        waarom: [
          'Agressie-incidenten zijn in het hypotheek- en kredietadvies structureel: er wordt dagelijks nieuws gebracht dat mensen niet willen horen.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt leidinggevenden beleid op te stellen en hun adviseurs beter op te vangen na moeilijke gesprekken.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-bankmedewerkers-expert', 'agressietraining-verzekeringsmedewerkers-expert'],
      },
    ],
  },

  {
    naam: 'Bankmedewerkers & baliepersoneel',
    slug: 'bankmedewerkers',
    afbeelding: 'bankmedewerkers.jpg',
    afbeeldingAlt: 'Bankmedewerker helpt een klant aan de balie',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor bankmedewerkers en baliepersoneel in drie niveaus. Van agressie bij een geweigerde lening of geblokkeerde rekening (basis) tot instrumentele intimidatie (gevorderd) en beleid rond toegangsweigering en aangifte (expert).',
    intro: [
      'Aan de bankbalie en aan de telefoon komt financiële stress rechtstreeks binnen: een geweigerde lening, een geblokkeerde rekening, een oplopende schuld. De medewerker kan het besluit niet terugdraaien maar is wel de eerste die het te horen krijgt.',
      'Veel van die agressie verloopt telefonisch, waar je de ander niet kunt zien en niet kunt weglopen. Bureau Weerbaar en Veilig legt daar expliciet nadruk op.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor bankmedewerkers en baliepersoneel',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Medewerkers in de financiële dienstverlening met direct klantcontact aan de balie of aan de telefoon.',
        samenvatting:
          'De agressietraining voor bankmedewerkers en baliepersoneel van Bureau Weerbaar en Veilig leert medewerkers agressie herkennen, begrenzen en de-escaleren bij klanten in financiële stress, met expliciete aandacht voor telefonische agressie. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Vormen van agressie herkennen',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Situaties de-escaleren',
          'De protocollen van de organisatie toepassen',
          'Incidenten correct melden',
        ],
        programma: [
          ['Financiële stress aan de balie', 'Herkennen wat er speelt bij klanten die vastlopen op geld.'],
          ['Telefonische agressie', 'Rustig en professioneel blijven aan de telefoon bij dreiging en intimidatie.'],
          ['Begrenzen en de-escaleren', 'Professioneel begrenzen bij een geweigerde lening of geblokkeerde rekening.'],
          ['Gesprekken over schulden', 'Handelen bij escalerende gesprekken over betalingsachterstanden.'],
          ['Protocol en melden', 'De protocollen van de organisatie toepassen en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de financiële dienstverlening',
          'herkenbare scenario’s uit de eigen vestiging',
          'expliciete focus op telefonische agressie',
        ],
        situaties: [
          'Een klant schreeuwt over een geweigerde lening',
          'Een wanhopige reactie op een geblokkeerde rekening',
          'Telefonische dreiging en intimidatie',
          'Escalerende gesprekken over schulden',
        ],
        waarom: [
          'Klanten in financiële stress reageren regelmatig agressief op bankmedewerkers. De medewerker aan de balie of telefoon vangt dat als eerste op, zonder het besluit te kunnen veranderen.',
          'De basistraining van Bureau Weerbaar en Veilig voorkomt escalatie en verzuim door medewerkers concrete handvatten te geven, met bijzondere nadruk op agressie via de telefoon.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-verzekeringsmedewerkers-basis', 'agressietraining-hypotheek-kredietadviseurs-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor bankmedewerkers en baliepersoneel',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Bankmedewerkers en baliepersoneel met basistraining die complexe agressie-incidenten hanteren.',
        samenvatting:
          'De gevorderde agressietraining voor bankmedewerkers van Bureau Weerbaar en Veilig richt zich op doelgerichte intimidatie, manipulatie via klachten en sociale media, en inconsistente teamreacties. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Onderscheid maken tussen frustratie-agressie en doelgerichte intimidatie',
          'Druktactieken herkennen en neutraliseren',
          'Klantprofielen inschatten op risico',
          'Teamafspraken toepassen bij herhaalde agressie',
          'Standhouden onder emotionele druk',
        ],
        programma: [
          ['Frustratie of doelgericht', 'Onderscheiden of iemand overstuur is of bewust intimideert.'],
          ['Instrumentele intimidatie', 'Omgaan met intimidatie die wordt ingezet voor een uitzondering of kwijtschelding.'],
          ['Manipulatie via klacht en media', 'Omgaan met manipulatie via klachtenprocedures en sociale media.'],
          ['Klantprofielen en teamafspraken', 'Risico inschatten en afspraken toepassen bij herhaalde agressie.'],
          ['Standhouden onder druk', 'Professioneel blijven bij schuldenproblematiek en emotionele druk.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen vestiging',
          'live feedback op teamgedrag',
          'aandacht voor de morele spanning tussen grenzen stellen en klanten in nood',
        ],
        situaties: [
          'Klanten die bewust grenzen overschrijden en druk uitoefenen',
          'Instrumentele intimidatie voor uitzonderingen of kwijtschelding',
          'Manipulatie via klachten en sociale media',
          'Schuldenproblematiek met agressieve reacties',
          'Inconsistente teamreacties op dezelfde klant',
        ],
        waarom: [
          'Sommige agressie aan de bankbalie is niet impulsief maar bewust ingezet: precies genoeg druk om een uitzondering te krijgen.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die tactieken en op de morele spanning die het oplevert bij klanten die werkelijk in nood zitten.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-verzekeringsmedewerkers-gevorderd', 'agressietraining-incasso-schuldhulpverlening-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in de financiële dienstverlening',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'aantoonbare werkervaring met agressie in klantcontact binnen de financiële sector, in een leidinggevende rol',
        doelgroep:
          'Vestigingsmanagers, teamleiders en veiligheidscoördinatoren bij financiële instellingen.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in de financiële dienstverlening van Bureau Weerbaar en Veilig leert leidinggevenden agressiepatronen omzetten in beleid, beleid opstellen rond toegangsweigering en aangifte, en de balans vinden tussen klantvriendelijkheid en medewerkersveiligheid. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen analyseren en vertalen naar beleidsmaatregelen',
          'Het agressieprotocol toetsen en aanscherpen',
          'Medewerkers structureel coachen na incidenten',
          'Beleid opstellen rond toegangsweigering en aangifte',
          'De balans vinden tussen klantvriendelijkheid en medewerkersveiligheid',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Patronen en meldingsdata', 'Meldingsdata analyseren en patronen omzetten in beleid.'],
          ['Protocol, toegangsweigering en aangifte', 'Beleid opstellen dat duidelijk maakt wanneer toegang wordt geweigerd of aangifte wordt gedaan.'],
          ['Klantvriendelijk én veilig', 'De balans vinden tussen commerciële klantbenadering en de veiligheid van medewerkers.'],
          ['Coachen en compliance', 'Structurele opvang na incidenten, binnen de compliance-kaders van de sector.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid en meldingsdata',
          'organisatiegerichte beleidsverdieping',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Onvoldoende meldingen en nabespreking van incidenten',
          'Inconsistente reacties op vergelijkbare situaties',
          'Structurele nazorg na ernstige incidenten ontbreekt',
          'Spanning tussen compliance en klantbenadering',
        ],
        waarom: [
          'In de financiële dienstverlening is agressie structureel aanwezig. Leidinggevenden bepalen niet alleen hun eigen reactie, maar ook de structuren en de cultuur waarbinnen hun team werkt.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op die structuren, met bijzondere aandacht voor de balans tussen veiligheid en compliance.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-verzekeringsmedewerkers-expert', 'agressietraining-incasso-schuldhulpverlening-expert'],
      },
    ],
  },
];
