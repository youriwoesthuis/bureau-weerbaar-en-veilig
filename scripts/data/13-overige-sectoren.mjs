/**
 * Brongegevens sectoren FARMACIE (sectorpagina), DIERENZORG, ASIELOPVANG en
 * UITVAART: bureauwenv.wizzinc-dev2.nl.
 */

export const sector = {
  naam: 'Farmacie',
  slug: 'farmacie',
  samenvatting:
    'Bureau Weerbaar en Veilig traint apotheekteams in het omgaan met agressie die voortkomt uit medicatie-afhankelijkheid: van pijn en angst tot verslavingsproblematiek. Voor apotheekmedewerkers en leidinggevenden, in drie niveaus.',
  afbeeldingAlt: 'Apothekersassistent overhandigt medicatie aan de balie',
  intro: [
    'De apotheek is de meest toegankelijke zorgverlener die er is: iedereen loopt er zonder afspraak binnen. Aan diezelfde balie komen ook alle spanningen samen: het recept dat niet klaarligt, het middel dat niet vergoed wordt, de herhaling die geweigerd moet worden.',
    'Wie afhankelijk is van medicatie, heeft weinig ruimte voor een "nee". Bureau Weerbaar en Veilig traint apotheekteams daarom op het herkennen van de emotie achter de agressie én op het consequent bewaken van grenzen, tot en met het beleid van de apotheker.',
  ],
};

const dierenzorg = {
  naam: 'Dierenzorg',
  slug: 'dierenzorg',
};

export const beroepsgroepen = [
  {
    naam: 'Dierenartsen & medewerkers dierklinieken',
    slug: 'dierenartsen-dierklinieken',
    sector: 'dierenzorg',
    afbeelding: 'dierenartsen.jpg',
    afbeeldingAlt: 'Dierenarts onderzoekt een hond terwijl de eigenaar toekijkt',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor dierenartsen en medewerkers van dierklinieken in drie niveaus. Van rouw en woede bij eigenaren hanteren (basis) tot langdurige conflicten en online campagnes (gevorderd) en beleid rond de zorgrelatie en reputatie (expert).',
    intro: [
      'Het welzijn van een huisdier raakt mensen diep. Een diagnose die niet wordt geaccepteerd, een behandeling die te duur is of het verlies van een dier: de emotionele lading maakt de drempel voor agressie in de dierkliniek laag.',
      'Bijzonder aan deze sector is de nasleep: conflicten die maanden doorlopen via reviews, sociale media en juridische dreiging. Bureau Weerbaar en Veilig traint klinieken daarom ook op de lange adem.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor dierenartsen en medewerkers van dierklinieken',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Dierenartsen, dierenartsassistenten en baliemedewerkers met direct klantcontact.',
        samenvatting:
          'De agressietraining voor dierenartsen en medewerkers van dierklinieken van Bureau Weerbaar en Veilig leert teams de emotionele dynamiek achter agressie herkennen, slecht nieuws effectief brengen en kostengesprekken voeren zonder escalatie. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'De emotionele dynamiek achter agressie herkennen',
          'De eigen reactie reguleren in geladen situaties',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Slecht nieuws effectief communiceren',
          'Gesprekken over kosten voeren zonder escalatie',
          'Incidenten correct rapporteren',
        ],
        programma: [
          ['Emotie achter de agressie', 'Verdriet en machteloosheid herkennen als bron van woede, en onderscheiden van bewuste intimidatie.'],
          ['Slecht nieuws brengen', 'Een moeilijke diagnose of prognose communiceren op een manier die aankomt zonder te escaleren.'],
          ['Het kostengesprek', 'Over behandelkosten praten zonder dat het gesprek ontspoort.'],
          ['Begrenzen in de spreekkamer', 'Professioneel begrenzen bij eigenaren die de diagnose niet accepteren of een onverantwoorde behandeling eisen.'],
          ['Telefoon, online en rapporteren', 'Omgaan met telefonische en online agressie richting de kliniek, en incidenten correct rapporteren.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met kennis van de diergeneeskundige praktijk',
          'casuïstiek uit de eigen kliniek',
          'aandacht voor het onderscheid tussen verdriet en bewuste intimidatie',
        ],
        situaties: [
          'Eigenaren die een diagnose niet accepteren',
          'Financiële frustratie over behandelkosten',
          'Verdriet dat omslaat in woede na het verlies van een dier',
          'Online of telefonische agressie richting de kliniek',
          'Weigering van medisch niet-verantwoorde behandelingen',
          'Eigenaren die in emotionele toestand binnenkomen',
        ],
        waarom: [
          'Diereigenaren staan in de kliniek op emotioneel belastende momenten. Het welzijn van een huisdier raakt mensen diep, en die lading maakt de drempel voor agressief gedrag laag.',
          'De basistraining van Bureau Weerbaar en Veilig leert teams die emotie te herkennen en te hanteren, want verdriet en bewuste intimidatie vragen een verschillende reactie.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-huisartsassistenten-basis', 'agressietraining-apotheekmedewerkers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor dierenartsen en medewerkers van dierklinieken',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met complexe agressiesituaties',
        doelgroep:
          'Dierenartsen en kliniekmedewerkers met basistraining die te maken hebben met ernstige of langdurige agressiesituaties.',
        samenvatting:
          'De gevorderde agressietraining voor dierklinieken van Bureau Weerbaar en Veilig richt zich op langdurige conflicten: maandenlange klachten na het overlijden van een dier, online campagnes en beschuldigingen van nalatigheid. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met complexe situaties.',
        resultaat: [
          'Langdurige agressie hanteren zonder emotioneel uitgeput te raken',
          'Rouwgerelateerde escalatie herkennen en constructief beantwoorden',
          'Online beschuldigingen aanpakken en de rechten van de kliniek kennen',
          'Grenzen stellen aan aanhoudende agressieve communicatie',
          'Bepalen wanneer juridische stappen of politiecontact nodig zijn',
          'Professionele veerkracht behouden tijdens langdurige conflicten',
        ],
        programma: [
          ['De lange nasleep', 'Omgaan met maandenlange klachten en persoonlijke aanvallen na het overlijden van een dier.'],
          ['Rouw die escaleert', 'Rouwgerelateerde escalatie herkennen, ook maanden na de behandeling.'],
          ['Online campagnes', 'Georganiseerde social-mediacampagnes aanpakken en weten wat de kliniek juridisch kan.'],
          ['Betaalweigering en druk', 'Grenzen stellen bij klanten die betaling weigeren en druk opvoeren, of via een second opinion nalatigheid claimen.'],
          ['Escaleren en veerkracht', 'Bepalen wanneer juridische stappen of politiecontact passend zijn, en zelf overeind blijven.'],
        ],
        werkvormen: [
          'casuïstiek van de deelnemende klinieken',
          'analyse en oefening van eigen situaties',
          'aandacht voor de emotionele belasting en het effect op het team',
        ],
        situaties: [
          'Maandenlange klachten en negatieve reviews na het overlijden van een dier',
          'Klanten die betaling weigeren en tegelijk druk uitoefenen',
          'Georganiseerde social-mediacampagnes tegen de kliniek',
          'Rouwgedreven agressie, maanden na de behandeling',
          'Second-opinion-zoekers die nalatigheid of fraude claimen',
          'Groepsdruk van meerdere familieleden of vrienden',
        ],
        waarom: [
          'Complexe, langdurige klantconflicten vragen andere vaardigheden dan een incident aan de balie. Situaties waarin medewerkers maandenlang te maken hebben met agressieve of klagende eigenaren putten uit: professioneel en persoonlijk.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die lange adem, inclusief de online kant van het conflict.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-huisartsassistenten-gevorderd', 'agressietraining-apotheekmedewerkers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor praktijkhouders en leidinggevenden van dierklinieken',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of eigenaarverantwoordelijkheid voor een dierkliniek of team',
        doelgroep: 'Praktijkhouders, kliniekmanagers en leidinggevende dierenartsen van dierklinieken.',
        samenvatting:
          'De expert agressietraining voor praktijkhouders en leidinggevenden van dierklinieken van Bureau Weerbaar en Veilig leert leidinggevenden beleid opstellen voor het beëindigen van de zorgrelatie en het omgaan met online beschuldigingen en reputatieschade. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Helder beleid opstellen voor het beëindigen van de zorgrelatie',
          'Eenduidig teambeleid implementeren bij probleemeigenaren',
          'Medewerkers coachen na agressie-incidenten',
          'Omgaan met online beschuldigingen en reputatieschade',
          'De meldcultuur versterken',
          'De balans borgen tussen klanttevredenheid en veiligheid',
        ],
        programma: [
          ['Beleid rond de zorgrelatie', 'Vastleggen wanneer de kliniek de zorgrelatie beëindigt bij agressie.'],
          ['Eenduidig teambeleid', 'Zorgen dat probleemeigenaren bij elke medewerker dezelfde lijn tegenkomen.'],
          ['Coachen na incidenten', 'Medewerkers structureel ondersteunen, in plaats van incidenten als bedrijfsrisico af te doen.'],
          ['Reputatie en online', 'Beleid voor online beschuldigingen en reputatieschade.'],
          ['Klanttevredenheid én veiligheid', 'De balans tussen beide beleidsmatig borgen; intervisie na 6 weken.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid en kliniekcultuur',
          'beleidsverdieping met protocollen voor de diergeneeskundige context',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Grensoverschrijdend gedrag van eigenaren wordt gezien als onderdeel van het werk',
          'Er is geen beleid voor het beëindigen van zorg bij agressie',
          'Onvoldoende ondersteuning van medewerkers na incidenten',
          'Online beschuldigingen en reputatieschade blijven onbehandeld',
          'Inconsistente teamreacties bij probleemeigenaren',
          'Spanning tussen klanttevredenheid en medewerkersveiligheid',
        ],
        waarom: [
          'Kliniekmedewerkers werken met mensen op hun meest kwetsbare momenten. Zonder beleid wordt elke grens een individuele afweging, en wint uiteindelijk de klant die het hardst roept.',
          'Deze experttraining van Bureau Weerbaar en Veilig geeft praktijkhouders het beleid en de protocollen om veiligheid en zorgkwaliteit samen te bewaren.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-huisartsassistenten-expert', 'agressietraining-apotheekmedewerkers-expert'],
      },
    ],
  },

  {
    naam: 'Medewerkers asielzoekerscentra & COA-locaties',
    slug: 'asielopvang-coa',
    sector: 'asielopvang',
    afbeelding: 'asielopvang.jpg',
    afbeeldingAlt: 'Medewerker in gesprek met bewoners op een COA-locatie',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor medewerkers van asielzoekerscentra en COA-locaties in drie niveaus. Van agressie uit onzekerheid en trauma begrijpen (basis) tot collectieve onrust en crisis (gevorderd) en crisisprotocollen en ketensamenwerking (expert).',
    intro: [
      'Bewoners van een asielzoekerscentrum leven in extreme onzekerheid over hun toekomst. De medewerker op de locatie is het dagelijkse gezicht van een systeem waarover hij of zij niets te zeggen heeft, en vangt alle frustratie daarover op.',
      'Daarbij spelen trauma, taalbarrières en spanningen tussen bewonersgroepen, vaak met beperkte bezetting tijdens nachten en weekenden. Bureau Weerbaar en Veilig traint deze beroepsgroep op het herkennen van de bron van agressie én op veilig handelen wanneer je met weinig collega’s bent.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor medewerkers van asielzoekerscentra en COA-locaties',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep: 'Medewerkers van asielzoekerscentra en COA-locaties met direct bewonerscontact.',
        samenvatting:
          'De agressietraining voor medewerkers van asielzoekerscentra en COA-locaties van Bureau Weerbaar en Veilig leert medewerkers de bronnen van agressie herkennen: trauma, onzekerheid en culturele verschillen, en escalatie tussen groepen voorkomen. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Bronnen van agressie herkennen: trauma, onzekerheid en culturele verschillen',
          'De eigen reactie reguleren bij agressief gedrag',
          'Verbale agressie professioneel begrenzen',
          'Escalatie tussen groepen voorkomen',
          'Veilig handelen bij beperkte bezetting',
          'Incidenten correct overdragen',
        ],
        programma: [
          ['Waar de agressie vandaan komt', 'Trauma, onzekerheid en culturele verschillen herkennen als bron van gedrag.'],
          ['Reguleren en begrenzen', 'De eigen reactie beheersen en verbale agressie begrenzen, ook bij taalbarrières.'],
          ['Groepen en spanningen', 'Escalatie tussen bewonersgroepen zien aankomen en voorkomen.'],
          ['Beperkte bezetting', 'Veilig handelen tijdens diensten met weinig collega’s.'],
          ['Overdragen', 'Incidenten correct overdragen zodat de volgende dienst weet wat er speelt.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de asielopvang kennen',
          'casuïstiek van de eigen locatie',
          'praktijkgericht oefenen zonder naïeve rollenspellen',
        ],
        situaties: [
          'Agressieve reacties op een plaatsingsbeslissing',
          'Spanningen tussen bewonersgroepen',
          'Verbale agressie ondanks taalbarrières',
          'Bedreigingen na een systeembeslissing',
          'Diensten met beperkte bezetting',
        ],
        waarom: [
          'Bewoners van asielzoekerscentra leven in extreme onzekerheid over hun toekomst. Dat verlaagt de drempel voor agressief gedrag, en de medewerker op de vloer is het dagelijkse aanspreekpunt voor alle frustratie over het systeem.',
          'De basistraining van Bureau Weerbaar en Veilig geeft medewerkers concrete handvatten, met begrip voor de context én duidelijke grenzen.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-basis', 'agressietraining-justitiele-jeugdinrichtingen-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor medewerkers van asielzoekerscentra en COA-locaties',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare ervaring',
        doelgroep:
          'Medewerkers op asielzoekerscentra met basistraining die werken met complexe bewonerspopulaties en een hoge agressiebelasting.',
        samenvatting:
          'De gevorderde agressietraining voor asielzoekerscentra en COA-locaties van Bureau Weerbaar en Veilig richt zich op collectieve onrust, getraumatiseerde bewoners in acute crisis en georganiseerde intimidatie. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of aantoonbare ervaring.',
        resultaat: [
          'Vroege signalen van collectieve onrust herkennen',
          'Omgaan met getraumatiseerde bewoners in acute crisis',
          'Intimidatie herkennen en escaleren',
          'Veilig handelen bij minimale bezetting',
          'Bedreigingen correct melden',
          'Professionele distantie bewaren onder spanning',
        ],
        programma: [
          ['Collectieve onrust', 'Vroege signalen herkennen van onrust die kan uitgroeien tot groepsgeweld.'],
          ['Acute crisis', 'Handelen bij ernstig getraumatiseerde bewoners in crisis.'],
          ['Georganiseerde intimidatie', 'Intimidatie door bewonersgroepen herkennen en tijdig escaleren.'],
          ['Nacht- en weekenddiensten', 'Veilig handelen bij minimale bezetting.'],
          ['Buiten de locatie', 'Bedreigingen buiten de locatie of via sociale media correct melden, en professionele distantie bewaren.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen locatie',
          'directe feedback op reacties',
          'aandacht voor de balans tussen empathie en professionele grenzen',
        ],
        situaties: [
          'Collectieve onrust met risico op groepsgeweld',
          'Ernstig getraumatiseerde bewoners in acute crisis',
          'Georganiseerde intimidatie door bewonersgroepen',
          'Minimale bezetting tijdens nacht- en weekenddiensten',
          'Bedreigingen buiten de locatie of via sociale media',
          'Escalaties rond ingrijpende beslissingen',
        ],
        waarom: [
          'Collectieve onrust, getraumatiseerde bewoners in crisis en georganiseerde intimidatie vragen meer dan basisvaardigheden, zeker wanneer je er tijdens een nachtdienst met een minimale bezetting voor staat.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig bereidt medewerkers voor op professioneel handelen onder maximale druk.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd', 'agressietraining-justitiele-jeugdinrichtingen-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden bij asielzoekerscentra en COA-locaties',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of coördinerende verantwoordelijkheid op een opvanglocatie',
        doelgroep:
          'Locatiemanagers, coördinatoren en operationeel leidinggevenden bij asielzoekerscentra.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden bij asielzoekerscentra en COA-locaties van Bureau Weerbaar en Veilig leert leidinggevenden crisisprotocollen opstellen voor collectieve incidenten en medewerkers steunen onder politieke en maatschappelijke druk. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Crisisprotocollen opstellen voor collectieve incidenten',
          'Samenwerking organiseren met politie, beveiliging en ketenpartners',
          'Medewerkers coachen na ernstige incidenten',
          'Beleid ontwikkelen voor structureel agressieve bewoners',
          'De meldcultuur versterken',
          'Medewerkers ondersteunen die onder politieke en maatschappelijke druk werken',
        ],
        programma: [
          ['Crisisprotocol', 'Een helder protocol voor collectieve incidenten, afgestemd op de eigen locatie.'],
          ['Ketensamenwerking', 'Samenwerking met politie, beveiliging en partners organiseren vóórdat het nodig is.'],
          ['Beleid bij structurele agressie', 'Beleid voor bewoners bij wie agressie een patroon is.'],
          ['Coachen en debriefing', 'Structurele opvang na ernstige incidenten inrichten.'],
          ['Politieke en maatschappelijke druk', 'Voorkomen dat de druk op de organisatie doorslaat naar de individuele medewerker; intervisie na 6 weken.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid en incidenten',
          'beleidsverdieping met crisisprotocollen voor de opvangpraktijk',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Er is geen helder protocol voor collectieve incidenten',
          'Agressie-incidenten worden onvoldoende gemeld',
          'Debriefing na ernstige incidenten is gebrekkig',
          'De samenwerking met ketenpartners verloopt stroef',
          'Er is geen beleid voor structureel agressieve bewoners',
          'Politieke en maatschappelijke druk werkt door op medewerkers',
        ],
        waarom: [
          'Op een opvanglocatie is veiligheid geen kwestie van individuele vaardigheden maar van organisatie: het crisisprotocol, de ketensamenwerking en de opvang van medewerkers na incidenten.',
          'Deze experttraining van Bureau Weerbaar en Veilig versterkt beide kanten tegelijk: de bescherming van medewerkers én een humane opvang.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-expert', 'agressietraining-justitiele-jeugdinrichtingen-expert'],
      },
    ],
  },

  {
    naam: 'Uitvaartmedewerkers & begrafenisondernemers',
    slug: 'uitvaartmedewerkers',
    sector: 'uitvaart',
    afbeelding: 'uitvaart.jpg',
    afbeeldingAlt: 'Uitvaartverzorger in gesprek met nabestaanden',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor uitvaartmedewerkers en begrafenisondernemers in drie niveaus. Van rouw-agressie herkennen en familieconflicten hanteren (basis) tot langdurige klachten en online beschuldigingen (gevorderd) en beleid voor probleemfamilies (expert).',
    intro: [
      'Uitvaartmedewerkers werken met mensen op de zwaarste dagen van hun leven. Rouw, schuldgevoel en machteloosheid zoeken een uitweg, en soms is de uitvaartverzorger het dichtstbijzijnde doelwit.',
      'Familieconflicten spelen daarbij een eigen rol: oude spanningen komen bij een overlijden aan de oppervlakte, en de medewerker wordt tussen de partijen in getrokken. Bureau Weerbaar en Veilig traint deze beroepsgroep op begrenzen zonder de zorgrelatie met de nabestaanden te beschadigen.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor uitvaartmedewerkers en begrafenisondernemers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Alle uitvaartmedewerkers, uitvaartverzorgers en medewerkers met direct contact met nabestaanden.',
        samenvatting:
          'De agressietraining voor uitvaartmedewerkers en begrafenisondernemers van Bureau Weerbaar en Veilig leert medewerkers de emotionele dynamiek achter agressie herkennen: rouw, schuld en machteloosheid, en familieconflicten hanteren zonder partij te kiezen. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'De emotionele dynamiek achter agressie herkennen: rouw, schuld en machteloosheid',
          'De eigen reactie reguleren bij agressief gedrag van nabestaanden',
          'Verbale agressie professioneel begrenzen zonder de zorgrelatie te beschadigen',
          'Familieconflicten hanteren zonder partij te kiezen',
          'Moeilijke boodschappen zo brengen dat de kans op escalatie klein blijft',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Rouw en agressie', 'Begrijpen hoe verdriet, schuldgevoel en machteloosheid omslaan in woede.'],
          ['Reguleren in geladen situaties', 'Rustig blijven bij nabestaanden die in acute rouw de controle verliezen.'],
          ['Begrenzen met behoud van de relatie', 'Professioneel begrenzen bij agressie over kosten of afspraken.'],
          ['Tussen familieleden', 'Familieconflicten hanteren zonder zondebok of scheidsrechter te worden.'],
          ['De plechtigheid en daarna', 'Handelen bij spanningen tijdens de plechtigheid en bij online beschuldigingen na afloop.'],
        ],
        werkvormen: [
          'realistische oefeningen op basis van herkenbare praktijksituaties',
          'expliciete aandacht voor de dynamiek tussen rouw en agressie',
          'geen generieke rollenspellen',
        ],
        situaties: [
          'Nabestaanden die agressief reageren op de uitvaartkosten',
          'Familieleden in onderlinge ruzie die de medewerker als zondebok gebruiken',
          'Personen in acute rouw die de controle verliezen',
          'Afwijzing van afspraken, met dreigende escalatie',
          'Spanningen tijdens de plechtigheid zelf',
          'Online beschuldigingen na afloop',
        ],
        waarom: [
          'Nabestaanden zijn in acute rouw en emotioneel kwetsbaar op het moment dat zij met de uitvaartverzorger aan tafel zitten. Die instabiliteit vergroot het risico op agressie aanzienlijk.',
          'De basistraining van Bureau Weerbaar en Veilig leert medewerkers die dynamiek te herkennen en te hanteren, met behoud van de zorgrelatie die dit vak vraagt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-maatschappelijk-werkers-basis', 'agressietraining-dierenartsen-dierklinieken-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor uitvaartmedewerkers en begrafenisondernemers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring',
        doelgroep:
          'Uitvaartmedewerkers met basistraining die complexe familieconflicten en langdurige klachtsituaties hanteren.',
        samenvatting:
          'De gevorderde agressietraining voor de uitvaartbranche van Bureau Weerbaar en Veilig richt zich op langdurige conflicten: maandenlange klachten na een uitvaart, online campagnes en nabestaanden die medewerkers thuis opzoeken. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of aantoonbare werkervaring.',
        resultaat: [
          'Rouw- en familiedynamiek herkennen en de eigen rol professioneel bepalen',
          'Langdurige conflicten hanteren zonder emotioneel uitgeput te raken',
          'Grenzen stellen aan agressieve communicatie',
          'Omgaan met online beschuldigingen en reputatieschade',
          'Bepalen wanneer juridische interventie nodig is',
          'Professionele distantie bewaren in belaste situaties',
        ],
        programma: [
          ['De lange nasleep', 'Maandenlange klachten en persoonlijke aanvallen na een uitvaart hanteren.'],
          ['Complexe familiedynamiek', 'De eigen rol bepalen bij families met tegengestelde belangen.'],
          ['Online beschuldigingen', 'Omgaan met social-mediacampagnes en reputatieschade.'],
          ['Grenzen en juridische stappen', 'Grenzen stellen aan agressieve communicatie en bepalen wanneer juridische interventie nodig is.'],
          ['Distantie en veerkracht', 'Professionele distantie bewaren, ook wanneer nabestaanden je thuis opzoeken.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen onderneming',
          'analyse en oefening van ingebrachte situaties',
          'expliciete aandacht voor de emotionele belasting van medewerkers',
        ],
        situaties: [
          'Maandenlange klachten en persoonlijke aanvallen na een uitvaart',
          'Social-mediacampagnes tegen de onderneming',
          'Complexe familiesituaties met tegengestelde belangen',
          'Dreiging met juridische stappen',
          'Agressie tijdens de plechtigheid',
          'Nabestaanden die de medewerker thuis opzoeken',
        ],
        waarom: [
          'Sommige conflicten in de uitvaartbranche eindigen niet bij de condoleance: klachten lopen maanden door, verhuizen naar sociale media en worden persoonlijk.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig helpt medewerkers die lange conflicten te hanteren zonder er zelf aan onderdoor te gaan, want wie werkt op momenten van grote kwetsbaarheid, verdient zelf ook professionele bescherming.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-maatschappelijk-werkers-gevorderd', 'agressietraining-dierenartsen-dierklinieken-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor uitvaartondernemers en leidinggevenden in de uitvaartbranche',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of eigenaarverantwoordelijkheid voor een uitvaartonderneming of team',
        doelgroep:
          'Uitvaartondernemers, praktijkmanagers en leidinggevenden die verantwoordelijk zijn voor de veiligheid van hun medewerkers.',
        samenvatting:
          'De expert agressietraining voor uitvaartondernemers en leidinggevenden van Bureau Weerbaar en Veilig leert leidinggevenden beleid opstellen over het beëindigen van dienstverlening bij grensoverschrijdend gedrag en teambeleid implementeren voor risicosituaties. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Beleid opstellen over het beëindigen van dienstverlening bij grensoverschrijdend gedrag',
          'Teambeleid implementeren voor probleemfamilies en risicosituaties',
          'Medewerkers coachen na agressie-incidenten, met debriefing en nazorg',
          'Omgaan met online beschuldigingen en reputatieschade',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Intake en analyse', 'De training start met een intakegesprek; bestaand beleid, klantenpopulatie en cultuur worden geanalyseerd.'],
          ['Beleid rond dienstverlening', 'Vastleggen wanneer de onderneming dienstverlening beëindigt bij grensoverschrijdend gedrag.'],
          ['Teambeleid risicosituaties', 'Eenduidige afspraken voor probleemfamilies en hoogrisicosituaties.'],
          ['Coachen, reputatie en meldcultuur', 'Debriefing en nazorg inrichten, omgaan met online beschuldigingen en zorgen dat incidenten gemeld worden.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie.'],
        ],
        werkvormen: [
          'analyse van beleid, klantenpopulatie en veiligheidscultuur',
          'maatwerk op basis van een intakegesprek',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Grensoverschrijdend gedrag van nabestaanden wordt genormaliseerd',
          'Medewerkers worden onvoldoende ondersteund na incidenten',
          'Er is geen eenduidig teambeleid bij bekende risicogroepen',
          'Balanceren tussen klanttevredenheid, reputatie en veiligheid',
        ],
        waarom: [
          'De uitvaartbranche onderschat structureel de agressie van nabestaanden: het past niet bij het beeld van het vak, dus wordt het niet benoemd.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt ondernemers hun medewerkers te beschermen zonder de dienstverlening aan rouwenden op te geven.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-maatschappelijk-werkers-expert', 'agressietraining-dierenartsen-dierklinieken-expert'],
      },
    ],
  },
];
