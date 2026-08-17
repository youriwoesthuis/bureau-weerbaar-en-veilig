/**
 * Brongegevens sector ZORG: overgenomen van bureauwenv.wizzinc-dev2.nl.
 *
 * Correcties t.o.v. de bestaande site (bewust, gemotiveerd):
 * - Verpleeghuizen: de pagina's "gevorderde ... voor leidinggevenden" en
 *   "expert ... voor zorgmedewerkers" hadden verwisselde titels; de inhoud van
 *   de eerste is voor zorgmedewerkers (= gevorderd), de tweede voor
 *   leidinggevenden (= expert). Hier volgens de vaste niveaudefinities gezet.
 * - VG-expertpagina's: de pagina "expert ... over persoonlijk begeleiders" bevat
 *   inhoud over gedragsdeskundigen, en "expert ... over gedragsdeskundigen"
 *   bevat een duplicaat van de woonbegeleiding-expert. Inhoud is bij de juiste
 *   beroepsgroep gezet. Het expertniveau voor persoonlijk begeleiders ontbrak
 *   daardoor op de oude site en is nieuw geschreven op basis van de basis- en
 *   gevorderde PB-training (toegestaan volgens de projectbrief, hoofdstuk 5).
 */

export const sector = {
  naam: 'Zorg',
  slug: 'zorg',
  samenvatting:
    'Bureau Weerbaar en Veilig traint zorgmedewerkers in het omgaan met agressie die voortkomt uit ziekte, angst en verlies van controle: én met agressie van familieleden. Voor acht beroepsgroepen in de zorg, elk in drie niveaus.',
  afbeeldingAlt: 'Zorgmedewerker in gesprek met een cliënt in een zorginstelling',
  intro: [
    'Agressie in de zorg heeft een eigen karakter. Een bewoner met dementie die slaat tijdens de verzorging handelt niet uit kwaadwilligheid; een familielid dat de balie belaagt vaak wel bewust. Dat onderscheid: ziektegebonden gedrag of gedrag dat begrensd kan worden: bepaalt hoe een zorgmedewerker moet handelen, en het is precies waar de trainingen van Bureau Weerbaar en Veilig op ingaan.',
    'Daarbij werkt een groot deel van de zorg alleen: de wijkverpleegkundige in de woning van een cliënt, de ambulancemedewerker op straat, de persoonlijk begeleider tijdens een activiteit buitenshuis. Geen collega binnen bereik, geen achterwacht om de hoek. Bureau Weerbaar en Veilig traint per beroepsgroep, met trainers die de zorgpraktijk kennen en met situaties die deelnemers direct herkennen.',
  ],
};

export const beroepsgroepen = [
  /* ---------------- Huisartsassistenten (trainingen al aanwezig) ---------------- */
  {
    naam: 'Huisartsassistenten',
    slug: 'huisartsassistenten',
    afbeelding: 'huisartsassistenten.jpg',
    afbeeldingAlt: 'Huisartsassistent aan de balie in gesprek met een patiënt',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor huisartsassistenten in drie niveaus. Van agressie aan balie en telefoon de-escaleren (basis) tot instrumenteel gedrag en manipulatie (gevorderd) en het agressiebeleid van de praktijk (expert).',
    intro: [
      'Huisartsassistenten beslissen de hele dag over dingen die patiënten raken: wel of geen spoedafspraak, wel of geen recept, welke urgentie de triage krijgt. Elke afwijzing kan een uitbarsting worden: aan de balie, in de wachtkamer of via de telefoon.',
      'Bijzonder aan deze beroepsgroep is dat de agressie zelden anoniem is: het gaat om patiënten die morgen weer aan de balie staan. Begrenzen zonder de zorgrelatie te beschadigen is daarom een vaardigheid apart.',
    ],
    trainingen: [],
  },

  /* ---------------- Ambulancemedewerkers (basis al aanwezig) ---------------- */
  {
    naam: 'Ambulancemedewerkers',
    slug: 'ambulancemedewerkers',
    afbeelding: 'ambulancemedewerkers.jpg',
    afbeeldingAlt: 'Ambulancemedewerkers verlenen zorg aan een patiënt op straat',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor ambulancemedewerkers in drie niveaus. Van agressie ter plaatse de-escaleren (basis) tot instrumenteel gedrag en duo-afspraken (gevorderd) en organisatiebeleid en nazorg (expert).',
    intro: [
      'Ambulancemedewerkers komen aan op een plek die niemand heeft voorbereid: een woonkamer, een uitgaansgebied, de berm van een snelweg. De patiënt is onder invloed of in crisis, familie is in paniek, omstanders filmen mee. Beschermde werkomgeving bestaat hier niet.',
      'Bovendien werken ambulancemedewerkers met twee. Wat het duo onderling afspreekt en hoe eenduidig het optreedt, bepaalt in de praktijk of een situatie beheersbaar blijft.',
    ],
    trainingen: [
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor ambulancemedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met agressie-incidenten',
        doelgroep:
          'Ambulancemedewerkers met een basistraining die regelmatig complexe of herhaalde agressie-incidenten meemaken.',
        samenvatting:
          'De gevorderde agressietraining voor ambulancemedewerkers van Bureau Weerbaar en Veilig richt zich op agressie die niet impulsief is: instrumenteel gedrag om snellere behandeling af te dwingen, juridische dreiging en escalaties ondanks de-escalatiepogingen. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of aantoonbare werkervaring.',
        resultaat: [
          'Instrumentele agressie onderscheiden van frustratie-agressie',
          'Manipulatie en druktactieken herkennen en neutraliseren',
          'Werken met risicoprofielen',
          'Teamafspraken maken bij herhaalde agressie',
          'Als duo eenduidig reageren',
          'Grenzen stellen bij instrumentele agressie',
        ],
        programma: [
          ['Instrumentele agressie herkennen', 'Het verschil tussen frustratie en doelgericht gedrag om snellere behandeling of vervoer af te dwingen.'],
          ['Manipulatie en juridische dreiging', 'Omgaan met dreiging via klacht of advocaat, en het neutraliseren van druktactieken.'],
          ['Risicoprofielen en teamafspraken', 'Werken met risicoprofielen en afspraken maken bij patiënten die herhaald agressief zijn.'],
          ['Eenduidig optreden als duo', 'Voorkomen dat verschillend optreden van de twee medewerkers de situatie laat escaleren.'],
          ['Verwardheid en intoxicatie', 'Agressie bij verwardheid en middelengebruik begrenzen met behoud van de eigen veiligheid.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen organisatie',
          'analyse en oefening van eigen situaties',
          'oefeningen gericht op het werken als duo',
        ],
        situaties: [
          'Patiënten die bewust grenzen overschrijden',
          'Instrumentele agressie om een snellere behandeling af te dwingen',
          'Manipulatie via juridische dreigingen',
          'Niet-eenduidig optreden van het duo',
          'Escalaties ondanks de-escalatiepogingen',
          'Agressie in combinatie met verwardheid of intoxicatie',
        ],
        waarom: [
          'Standaard basisvaardigheden volstaan niet bij agressie die doelgericht is. Een patiënt die precies weet hoe hij sneller vervoer afdwingt, of familie die dreigt met een advocaat, vraagt een andere reactie dan iemand die overstuur is.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig sluit aan op de specifieke omstandigheden van de pre-hospitale hulpverlening en versterkt de afspraken binnen het duo.',
        ],
        vragen: [
          [
            'Waarom is het werken als duo een apart onderwerp?',
            'Omdat ambulancemedewerkers met twee mensen werken en een patiënt direct voelt wanneer die twee verschillend reageren. Eenduidig optreden als duo is daarom een vaste module in deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-huisartsassistenten-gevorderd', 'agressietraining-ggd-gevorderd'],
        afbeeldingAlt: 'Ambulancemedewerkers overleggen na een complexe inzet',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor ambulancemedewerkers in sleutelfuncties',
        duur: '2 dagen',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of coördinerende functie met aantoonbare werkervaring met agressie',
        doelgroep:
          'Rayonmanagers, teamleiders, veiligheidscoördinatoren en senior medewerkers in leidinggevende rollen bij ambulancediensten.',
        samenvatting:
          'De expert agressietraining voor ambulancemedewerkers in sleutelfuncties van Bureau Weerbaar en Veilig leert leidinggevenden agressiepatronen op organisatieniveau analyseren, het agressieprotocol toetsen en de meldcultuur versterken. De training duurt 2 dagen, telt maximaal 8 deelnemers en start met een intakegesprek.',
        resultaat: [
          'Agressiepatronen op organisatieniveau analyseren',
          'Het agressieprotocol toetsen op bruikbaarheid in de praktijk',
          'Collega’s professioneel coachen na incidenten',
          'Een escalatiestructuur opzetten en borgen',
          'Juridische verantwoordelijkheid begrijpen en communiceren',
          'De meldcultuur binnen de organisatie versterken',
        ],
        programma: [
          ['Intake en patroonanalyse', 'Intakegesprek vooraf; analyse van incidentgegevens en meldgedrag binnen de dienst.'],
          ['Protocol toetsen op de praktijk', 'Werkt het agressieprotocol ook op straat, midden in de nacht, met twee mensen? Toetsen en aanscherpen.'],
          ['Coachen en nazorg', 'Medewerkers structureel begeleiden na incidenten en nazorg organiseren die niet afhangt van de dienstdoende leidinggevende.'],
          ['Escalatie en juridische kaders', 'Een escalatiestructuur opzetten en de juridische verantwoordelijkheid helder communiceren.'],
        ],
        werkvormen: ['casuïstiekbespreking', 'beleidsanalyse', 'organisatiegericht advies na intakegesprek'],
        situaties: [
          'Incidenten worden onvoldoende gemeld',
          'Het protocol wordt inconsistent toegepast',
          'Medewerkers reageren verschillend op dezelfde agressie',
          'Structurele nazorg ontbreekt',
          'Het escalatiebeleid is onduidelijk',
        ],
        waarom: [
          'Agressie in de pre-hospitale hulpverlening is zelden volledig te voorkomen. Wat een organisatie wél kan sturen: hoe teams reageren, hoe snel er van incidenten geleerd wordt en of het beleid in de praktijk werkt.',
          'Deze experttraining van Bureau Weerbaar en Veilig bereidt leidinggevenden voor op die organisatorische verantwoordelijkheid en op duurzame veiligheid voor hun mensen.',
        ],
        vragen: [
          [
            'Hoe wordt de training op onze dienst afgestemd?',
            'Een intakegesprek vooraf brengt de situatie in kaart. Bureau Weerbaar en Veilig analyseert incidentgegevens en het bestaande beleid, zodat de training aansluit op de eigen organisatie.',
          ],
        ],
        gerelateerd: ['agressietraining-huisartsassistenten-expert', 'agressietraining-ggd-expert'],
        afbeeldingAlt: 'Teamleider bespreekt incidentmeldingen met ambulancepersoneel',
      },
    ],
  },

  /* ---------------- Thuiszorg & wijkverpleging ---------------- */
  {
    naam: 'Thuiszorg & wijkverpleging',
    slug: 'thuiszorg-wijkverpleging',
    afbeelding: 'thuiszorg.jpg',
    afbeeldingAlt: 'Wijkverpleegkundige verleent zorg bij een cliënt thuis',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor thuiszorgmedewerkers, verzorgenden en wijkverpleegkundigen in drie niveaus. Van veilig alleen werken in de woning van een cliënt (basis) tot structurele en complexe agressie (gevorderd) en veiligheidsbeleid voor thuisbezoeken (expert).',
    intro: [
      'Thuiszorgmedewerkers werken op de meest bijzondere werkplek die er is: de woonkamer van iemand anders. Zij zijn te gast, alleen, zonder achterwacht en zonder de mogelijkheid om even weg te stappen naar een collega. Wat binnen die voordeur gebeurt, moeten zij zelf oplossen.',
      'Daar komt bij dat de zorgrelatie langdurig is. Grenzen stellen bij een cliënt die je volgende week weer bezoekt, of bij een mantelzorger die altijd aanwezig is: vraagt een andere aanpak dan een eenmalige confrontatie.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor thuiszorgmedewerkers, verzorgenden en wijkverpleegkundigen',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Alle thuiszorgmedewerkers, verzorgenden en wijkverpleegkundigen die zorg verlenen in de privéomgeving van cliënten.',
        samenvatting:
          'De agressietraining voor thuiszorgmedewerkers, verzorgenden en wijkverpleegkundigen van Bureau Weerbaar en Veilig leert medewerkers agressie herkennen, grenzen stellen zonder de zorgrelatie te beschadigen en bepalen wanneer een bezoek veilig kan worden beëindigd. De training duurt 1 dag, telt maximaal 10 deelnemers en gaat expliciet in op alleen werken zonder achterwacht.',
        resultaat: [
          'Vormen van agressie herkennen: frustratie, dementie, psychiatrische ontregeling en seksueel grensoverschrijdend gedrag',
          'De eigen reactie reguleren onder druk',
          'Professioneel grenzen stellen zonder de zorgrelatie te beschadigen',
          'Bepalen wanneer een bezoek veilig kan worden beëindigd',
          'Veilig handelen bij agressie van familie of mantelzorgers',
          'Incidenten correct melden en overdragen',
        ],
        programma: [
          ['Agressie achter de voordeur', 'Vormen van agressie in de thuissituatie: frustratie, dementie, psychiatrische ontregeling en seksueel grensoverschrijdend gedrag.'],
          ['Alleen werken zonder achterwacht', 'Wat het betekent om er alleen voor te staan, en hoe je de eigen reactie reguleert wanneer niemand kan bijspringen.'],
          ['Grenzen stellen in een langdurige zorgrelatie', 'Begrenzen zonder de relatie met cliënt of mantelzorger onnodig te beschadigen.'],
          ['Een bezoek beëindigen', 'Bepalen wanneer je weggaat, en hoe je dat doet als je wordt tegengehouden.'],
          ['Melden en overdragen', 'Incidenten correct melden en zorgen dat de volgende collega weet wat er speelt.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de thuiszorg',
          'casuïstiek uit de eigen wijk',
          'oefeningen gericht op alleen werken in een privéomgeving',
        ],
        situaties: [
          'Een cliënt reageert agressief zodra je binnenkomt',
          'Intimidatie door familieleden of mantelzorgers',
          'Seksueel grensoverschrijdend gedrag tijdens de verzorging',
          'Onvoorspelbare reacties van cliënten met dementie',
          'Je wilt de woning verlaten maar wordt tegengehouden',
          'Agressie zonder collega’s in de buurt',
        ],
        waarom: [
          'Thuiszorgmedewerkers werken alleen in de woning van een cliënt. Er is geen balie tussen hen en de ander, geen collega die meekijkt en geen achterwacht om de hoek. Die kwetsbaarheid maakt agressie in de thuiszorg wezenlijk anders dan agressie in een instelling.',
          'Zonder concrete training leidt dat tot handelingsverlegenheid en hoog verzuim. De basistraining van Bureau Weerbaar en Veilig geeft medewerkers de vaardigheden om situaties beheersbaar te houden, inclusief het besluit om weg te gaan.',
        ],
        vragen: [
          [
            'Leren medewerkers ook wanneer ze een bezoek mogen afbreken?',
            'Ja. Bepalen wanneer een bezoek veilig kan worden beëindigd is een vast onderdeel van de training, inclusief wat je doet als je wordt tegengehouden.',
          ],
          [
            'Komt seksueel grensoverschrijdend gedrag aan bod?',
            'Ja. Seksueel grensoverschrijdend gedrag tijdens de verzorging is een herkenbare situatie in de thuiszorg en wordt expliciet behandeld en geoefend.',
          ],
        ],
        gerelateerd: ['agressietraining-verpleeghuizen-ouderenzorg-basis', 'agressietraining-energie-nutsbedrijven-basis'],
        afbeeldingAlt: 'Wijkverpleegkundige belt aan bij een cliënt thuis',
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor thuiszorgmedewerkers, verzorgenden en wijkverpleegkundigen',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met complexe agressiesituaties',
        doelgroep:
          'Thuiszorgmedewerkers en wijkverpleegkundigen met basiskennis die regelmatig werken met cliënten met structurele of complexe agressie.',
        samenvatting:
          'De gevorderde agressietraining voor de thuiszorg van Bureau Weerbaar en Veilig richt zich op structurele en complexe situaties: gevorderde dementie met fysiek verzet, een mantelzorger als risicofactor en signalen van huiselijk geweld. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met complexe agressiesituaties.',
        resultaat: [
          'Agressie bij dementie begrijpen vanuit het cliëntperspectief, met behoud van de eigen veiligheid',
          'Grensoverschrijdend gedrag consequent aanpakken en registreren',
          'Veiligheidsrisico’s in de thuissituatie taxeren, waaronder geweld en verwaarlozing',
          'Omgaan met situaties waarin de partner of mantelzorger de risicofactor is',
          'Bepalen wanneer zorgverlening moet stoppen en dat besluit communiceren',
          'Complexe situaties escaleren binnen het team',
        ],
        programma: [
          ['Dementie en fysiek verzet', 'Agressie bij gevorderde dementie begrijpen vanuit de cliënt, zonder de eigen veiligheid uit het oog te verliezen.'],
          ['De mantelzorger als risicofactor', 'Structurele intimidatie door een partner of mantelzorger herkennen en aanpakken.'],
          ['Risicotaxatie in de thuissituatie', 'Veiligheidsrisico’s taxeren, inclusief signalen van huiselijk geweld en verwaarlozing.'],
          ['Grenzen aan de zorg', 'Bepalen wanneer zorgverlening stopt, hoe je dat besluit onderbouwt en communiceert.'],
          ['Belasting en escaleren', 'Grensvervaging en compassiemoeheid bij jezelf herkennen, en complexe situaties tijdig binnen het team escaleren.'],
        ],
        werkvormen: [
          'casusgebaseerd leren met eigen situaties',
          'patroonanalyse door trainers met thuiszorgervaring',
          'aandacht voor emotionele belasting en grensvervaging',
        ],
        situaties: [
          'Cliënten met gevorderde dementie en fysiek verzet bij de verzorging',
          'Structurele intimidatie door een partner of mantelzorger',
          'Psychiatrische problematiek met escalerende agressie',
          'Seksueel grensoverschrijdend gedrag in een langdurige zorgrelatie',
          'Signalen van huiselijk geweld of verwaarlozing',
          'Onverwachte gedragsverandering in de laatste levensfase',
        ],
        waarom: [
          'Sommige agressie in de thuiszorg is niet incidenteel maar structureel: een cliënt die bij elke verzorging fysiek verzet pleegt, een mantelzorger die de medewerker systematisch onder druk zet, een situatie waarin je vermoedt dat er meer aan de hand is.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig bereidt medewerkers voor op langdurige zorgrelaties met voorspelbare én onvoorspelbare risico’s, met expliciete aandacht voor de emotionele belasting die dat meebrengt.',
        ],
        vragen: [
          [
            'Wordt huiselijk geweld ook behandeld?',
            'Ja. Het taxeren van veiligheidsrisico’s in de thuissituatie omvat signalen van huiselijk geweld en verwaarlozing, en wat een medewerker daarmee doet.',
          ],
          [
            'Wat als de mantelzorger het probleem is?',
            'Dat is een vaste module. Structurele intimidatie door een partner of mantelzorger vraagt een andere aanpak dan agressie van de cliënt zelf.',
          ],
        ],
        gerelateerd: ['agressietraining-verpleeghuizen-ouderenzorg-gevorderd', 'agressietraining-energie-nutsbedrijven-gevorderd'],
        afbeeldingAlt: 'Thuiszorgmedewerkers bespreken een complexe cliëntsituatie',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in de thuiszorg en wijkverpleging',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende of coördinerende verantwoordelijkheid voor een thuiszorgteam',
        doelgroep: 'Teamleiders, zorgcoördinatoren en managers in de thuiszorg en wijkverpleging.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in de thuiszorg en wijkverpleging van Bureau Weerbaar en Veilig leert teamleiders veiligheidsbeleid voor thuisbezoeken opstellen, risicovolle cliëntsituaties vertalen naar afspraken en medewerkers coachen na incidenten. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Helder veiligheidsbeleid voor thuisbezoeken opstellen',
          'Risicovolle cliëntsituaties signaleren en vertalen naar veiligheidsafspraken',
          'Medewerkers coachen na agressie-incidenten',
          'De grenzen van het zorgcontract helder communiceren',
          'Samenwerking met huisartsen en GGZ organiseren',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Veiligheidsbeleid voor thuisbezoeken', 'Beleid opstellen dat werkt voor medewerkers die alleen en zonder achterwacht werken.'],
          ['Risicovolle cliëntsituaties', 'Signaleren en vertalen naar concrete veiligheidsafspraken per cliënt.'],
          ['Coachen en nazorg', 'Medewerkers structureel begeleiden na incidenten, met een vaste vorm van debriefing.'],
          ['Grenzen van het zorgcontract', 'Helder communiceren wanneer zorg wordt aangepast of beëindigd: naar medewerker, cliënt en familie.'],
          ['Samenwerking en intervisie', 'Samenwerking met huisartsen en GGZ organiseren; na 6 weken intervisie over de implementatie.'],
        ],
        werkvormen: [
          'analyse van bestaand beleid en cliëntpopulatie',
          'beleidsmatige verdieping gecombineerd met concrete protocollen',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers melden incidenten onvoldoende',
          'Het beleid over het beëindigen van bezoeken is vaag',
          'Onvoldoende ondersteuning van medewerkers na incidenten',
          'Gebrekkige samenwerking met externe partners zoals huisarts en GGZ',
        ],
        waarom: [
          'Thuiszorgmedewerkers werken alleen, zonder achterwacht, in de woning van een cliënt. Dat maakt de leidinggevende verantwoordelijk voor iets wat hij of zij niet kan zien gebeuren.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich daarom op wat wél te sturen is: helder veiligheidsbeleid, duidelijke afspraken per cliënt, structurele nazorg en samenwerking met huisartsen en GGZ.',
        ],
        vragen: [
          [
            'Hoe zit de intervisie in het programma?',
            'De training bestaat uit 2 dagen, waarvan de tweede na ongeveer 6 weken plaatsvindt. Deelnemers brengen dan hun eigen casussen en de voortgang van de implementatie in.',
          ],
        ],
        gerelateerd: ['agressietraining-verpleeghuizen-ouderenzorg-expert', 'agressietraining-ggd-expert'],
        afbeeldingAlt: 'Zorgcoördinator bespreekt veiligheidsafspraken met een thuiszorgteam',
      },
    ],
  },

  /* ---------------- Verpleeghuizen & ouderenzorg ---------------- */
  {
    naam: 'Verpleeghuizen & ouderenzorg',
    slug: 'verpleeghuizen-ouderenzorg',
    afbeelding: 'verpleeghuizen.jpg',
    afbeeldingAlt: 'Verzorgende helpt een bewoner in een verpleeghuis',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor zorgmedewerkers in verpleeghuizen en de ouderenzorg in drie niveaus. Van agressie bij dementie begrijpen en begrenzen (basis) tot ernstig fysiek verzet op PG-afdelingen (gevorderd) en veiligheidsbeleid op afdelingsniveau (expert).',
    intro: [
      'In het verpleeghuis komt agressie zelden voort uit kwaadwilligheid. Een bewoner met dementie die slaat of bijt tijdens de verzorging reageert op angst, pijn of onbegrip. Dat vraagt om begrip van de belevingswereld van de bewoner: én om technieken die de medewerker fysiek en emotioneel heel houden.',
      'Tegelijk is er de andere kant: familieleden die zorgmedewerkers intimideren over de zorg voor hun naaste. Dat gedrag is wél begrensbaar. Het onderscheid tussen ziektegebonden en begrensbare agressie is de kern van alle trainingen van Bureau Weerbaar en Veilig in deze sector.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor zorgmedewerkers in verpleeghuizen en ouderenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Alle zorgmedewerkers, verzorgenden en verpleegkundigen in verpleeghuizen en ouderenzorginstellingen.',
        samenvatting:
          'De agressietraining voor zorgmedewerkers in verpleeghuizen en ouderenzorg van Bureau Weerbaar en Veilig leert medewerkers agressie bij dementie begrijpen vanuit de bewoner, onderscheid maken tussen ziektegebonden en begrensbaar gedrag, en familieleden professioneel aanspreken. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Agressie bij dementie begrijpen vanuit de belevingswereld van de bewoner',
          'Onderscheid maken tussen ziektegebonden en begrensbare agressie',
          'De eigen reactie reguleren bij fysieke agressie, zonder te escaleren',
          'Familieleden professioneel aanspreken bij grensoverschrijdend gedrag',
          'Situaties de-escaleren met passende technieken',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Agressie bij dementie', 'Waarom een bewoner slaat, bijt of krabt tijdens de verzorging: begrijpen vanuit angst, pijn en verwardheid.'],
          ['Ziektegebonden of begrensbaar', 'Het onderscheid maken dat bepaalt hoe je handelt, en waarom dat onderscheid zo belangrijk is.'],
          ['Eigen reactie bij fysieke agressie', 'Reguleren van de eigen reactie zodat een situatie niet verder escaleert.'],
          ['Familieleden aanspreken', 'Grensoverschrijdend gedrag van familieleden professioneel begrenzen.'],
          ['De-escaleren en melden', 'Passende de-escalatietechnieken toepassen en incidenten correct melden en nabespreken.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers uit de ouderenzorg',
          'casuïstiek van de eigen afdeling',
          'theorie die de praktijk ondersteunt',
        ],
        situaties: [
          'Bewoners met dementie die slaan, bijten of krabben tijdens de verzorging',
          'Heftige reacties op aanraking door angst, pijn of verwardheid',
          'Agressief gedrag van familieleden richting zorgmedewerkers',
          'Verbale intimidatie en schreeuwen',
          'Psychiatrische problematiek met dreigend gedrag',
          'Spanningen tussen bewoners onderling',
        ],
        waarom: [
          'Zorgmedewerkers in verpleeghuizen werken dagelijks met agressie die voortkomt uit kwetsbaarheid, ziekte en verlies van controle. Dat is geen kwade wil, maar het raakt medewerkers wel: fysiek en emotioneel.',
          'Zonder training ontstaan handelingsverlegenheid, fysieke belasting en verzuim. De basistraining van Bureau Weerbaar en Veilig geeft medewerkers houvast, juist door het onderscheid te leren tussen gedrag dat bij de ziekte hoort en gedrag dat begrensd kan worden.',
        ],
        vragen: [
          [
            'Wordt agressie van familieleden ook behandeld?',
            'Ja. Familieleden die zorgmedewerkers intimideren over de zorg voor hun naaste vormen een aparte module: dit gedrag is begrensbaar en vraagt een andere aanpak dan agressie bij dementie.',
          ],
          [
            'Leert de training ook fysieke technieken?',
            'De nadruk ligt op het begrijpen van het gedrag, het reguleren van de eigen reactie en de-escaleren met passende technieken, zodat een situatie niet verder escaleert.',
          ],
        ],
        gerelateerd: ['agressietraining-thuiszorg-wijkverpleging-basis', 'agressietraining-woonbegeleiding-gehandicaptenzorg-basis'],
        afbeeldingAlt: 'Verzorgende ondersteunt een bewoner met dementie',
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor zorgmedewerkers in verpleeghuizen en ouderenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met ernstige agressie in de ouderenzorg',
        doelgroep:
          'Zorgmedewerkers op afdelingen met een hoge agressiebelasting, zoals PG-afdelingen en gecombineerde somatiek- en dementieafdelingen.',
        samenvatting:
          'De gevorderde agressietraining voor de ouderenzorg van Bureau Weerbaar en Veilig richt zich op afdelingen met hoge agressiebelasting: ernstig fysiek verzet bij gevorderde dementie, grensoverschrijdend familiegedrag en afdelingsdynamieken. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met ernstige agressie.',
        resultaat: [
          'Complexe gedragspatronen bij gevorderde dementie herkennen en de benadering aanpassen',
          'Fysiek agressief gedrag professioneel hanteren',
          'Grensoverschrijdend familiegedrag aanpakken via teamafspraken',
          'Eenduidig teamhandelen bij terugkerende agressie',
          'Afdelingsdynamieken herkennen en bespreekbaar maken',
          'De eigen emotionele belasting herkennen en delen',
        ],
        programma: [
          ['Gevorderde dementie en fysiek verzet', 'Complexe gedragspatronen herkennen en de zorgbenadering daarop aanpassen.'],
          ['Fysieke agressie hanteren', 'Professioneel handelen wanneer je alleen tegenover fysieke agressie staat.'],
          ['Familiegedrag en teamafspraken', 'Grensoverschrijdend familiegedrag aanpakken met afspraken die het hele team draagt.'],
          ['Afdelingsdynamiek', 'Herkennen wanneer meerdere bewoners met gedragsproblematiek elkaar versterken, en dat bespreekbaar maken.'],
          ['Eigen belasting', 'De emotionele en fysieke belasting van dit werk herkennen en binnen het team delen.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen afdeling',
          'analyse van teampatronen',
          'aandacht voor emotionele en fysieke belasting',
        ],
        situaties: [
          'Bewoners met gevorderde dementie en ernstig fysiek verzet',
          'Grensoverschrijdend gedrag en intimidatie door familieleden',
          'Afdelingsdynamieken met meerdere bewoners met gedragsproblematiek',
          'Bewoners met psychiatrische comorbiditeit',
          'Alleen staan tegenover fysieke agressie',
        ],
        waarom: [
          'Sommige agressie in de ouderenzorg vraagt meer dan basisvaardigheden. Op PG-afdelingen en gecombineerde afdelingen is agressie geen incident maar een dagelijkse werkomstandigheid, met een hoge fysieke en emotionele belasting.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig verdiept de kennis over complexe gedragspatronen en richt zich op eenduidig teamhandelen, omdat verschil in aanpak tussen collega’s de problematiek versterkt.',
        ],
        vragen: [
          [
            'Voor welke afdelingen is deze training bedoeld?',
            'Voor afdelingen met een hoge agressiebelasting, zoals PG-afdelingen en gecombineerde somatiek- en dementieafdelingen.',
          ],
          [
            'Is er aandacht voor de belasting van medewerkers zelf?',
            'Ja. Het herkennen en delen van de eigen emotionele en fysieke belasting is een expliciet onderdeel van de training.',
          ],
        ],
        gerelateerd: ['agressietraining-thuiszorg-wijkverpleging-gevorderd', 'agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd'],
        afbeeldingAlt: 'Zorgteam bespreekt een casus op een PG-afdeling',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in verpleeghuizen en ouderenzorg',
        duur: '2 dagen',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een team in een verpleeghuis of ouderenzorginstelling',
        doelgroep: 'Teamleiders, afdelingshoofden en locatiemanagers in verpleeghuizen en de ouderenzorg.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in verpleeghuizen en ouderenzorg van Bureau Weerbaar en Veilig leert leidinggevenden agressiepatronen op afdelingsniveau herkennen, eenduidig teambeleid opstellen en de balans tussen zorgkwaliteit en teamveiligheid borgen. De training duurt 2 dagen en telt maximaal 8 deelnemers.',
        resultaat: [
          'Agressiepatronen op afdelingsniveau herkennen en bespreken',
          'Eenduidig teambeleid opstellen bij terugkerende agressie',
          'Medewerkers coachen na agressie-incidenten',
          'Beleid formuleren voor grensoverschrijdend gedrag van familieleden',
          'De meldcultuur versterken',
          'De balans tussen zorgkwaliteit en teamveiligheid borgen',
        ],
        programma: [
          ['Patronen op afdelingsniveau', 'Agressiepatronen zichtbaar maken en bespreekbaar houden, ook wanneer ze genormaliseerd zijn.'],
          ['Eenduidig teambeleid', 'Beleid opstellen dat het hele team volgt bij terugkerende agressie van dezelfde bewoner.'],
          ['Familiebeleid', 'Helder beleid formuleren voor grensoverschrijdend gedrag van familieleden.'],
          ['Coachen en meldcultuur', 'Medewerkers begeleiden na incidenten en zorgen dat er weer gemeld wordt.'],
          ['Zorgkwaliteit én teamveiligheid', 'De balans borgen tussen goede zorg voor de bewoner en veiligheid voor het team.'],
        ],
        werkvormen: [
          'beleidsanalyse',
          'coaching- en ondersteuningsstrategieën',
          'praktijkgericht ontwerp van afdelingsbeleid',
        ],
        situaties: [
          'Onvoldoende agressiemeldingen doordat gedrag genormaliseerd is',
          'Inconsistente teamreacties op agressie van bewoners',
          'Ontoereikende ondersteuning van medewerkers na incidenten',
          'Onduidelijk beleid richting familieleden',
        ],
        waarom: [
          'Agressie in de ouderenzorg is complex: het gedrag is vaak ziektegebonden, de emotionele belasting voor medewerkers is groot en incidenten raken genormaliseerd: "het hoort bij dementie" wordt een reden om niet meer te melden.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt leidinggevenden het veiligheidsbeleid te verankeren en de teamcultuur structureel te verbeteren, zonder de zorgkwaliteit voor de bewoner uit het oog te verliezen.',
        ],
        vragen: [
          [
            'Hoe voorkom je dat agressie genormaliseerd wordt?',
            'Door meldgedrag zichtbaar te maken, patronen op afdelingsniveau te bespreken en incidenten consequent na te bespreken. Dat is een kernonderdeel van deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-thuiszorg-wijkverpleging-expert', 'agressietraining-woonbegeleiding-gehandicaptenzorg-expert'],
        afbeeldingAlt: 'Afdelingshoofd bespreekt agressiebeleid met een zorgteam',
      },
    ],
  },

  /* ---------------- GGD & publieke gezondheidszorg ---------------- */
  {
    naam: 'GGD & publieke gezondheidszorg',
    slug: 'ggd',
    afbeelding: 'ggd.jpg',
    afbeeldingAlt: 'GGD-medewerker in gesprek met een burger aan een balie',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor medewerkers van de GGD en publieke gezondheidszorg in drie niveaus. Van agressie bij burgercontact de-escaleren (basis) tot ideologisch gemotiveerde en georganiseerde weerstand (gevorderd) en veiligheidsbeleid bij online bedreigingen (expert).',
    intro: [
      'GGD-medewerkers werken op een bijzonder snijvlak: zij hebben overheidsbevoegdheden nodig én de medewerking van burgers. Wie een oproep voor contactonderzoek krijgt, een inspectie op bezoek heeft of bij een vaccinatielocatie werkt, merkt hoe snel dat spanning oplevert.',
      'Wat deze beroepsgroep bovendien apart maakt: de agressie is vaak niet persoonlijk maar ideologisch. Medewerkers krijgen niet te maken met een boze klant, maar met iemand die hun legitimiteit als overheidsdienaar betwist, soms georganiseerd, soms via sociale media en tot in de privésfeer.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor medewerkers van de GGD en publieke gezondheidszorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Alle GGD-medewerkers en professionals in de publieke gezondheidszorg met direct burgercontact.',
        samenvatting:
          'De agressietraining voor medewerkers van de GGD en publieke gezondheidszorg van Bureau Weerbaar en Veilig leert medewerkers agressie herkennen die voortkomt uit frustratie, wantrouwen of ideologie, en die professioneel begrenzen. De training duurt 1 dag, telt maximaal 10 deelnemers en behandelt ook veilig werken bij huisbezoeken en op buitenlocaties.',
        resultaat: [
          'Agressievormen herkennen: frustratie, ideologisch gemotiveerd gedrag en wantrouwen',
          'De eigen reactie reguleren onder druk',
          'Verbaal agressief gedrag professioneel begrenzen',
          'Veilig handelen bij huisbezoeken en op buitenlocaties',
          'Het agressieprotocol van de eigen organisatie toepassen',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['Agressie in een klimaat van wantrouwen', 'Herkennen wat je tegenover je hebt: frustratie, diep wantrouwen of ideologisch gemotiveerd gedrag.'],
          ['Optreden namens de overheid', 'De eigen reactie reguleren wanneer je positie of legitimiteit ter discussie wordt gesteld.'],
          ['Begrenzen en de-escaleren', 'Verbaal agressief gedrag professioneel begrenzen, aan de balie, telefonisch en per e-mail.'],
          ['Veilig op locatie', 'Veilig handelen bij huisbezoeken, inspecties en solo-werkzaamheden op risicovolle locaties.'],
          ['Protocol en melden', 'Het agressieprotocol van de eigen organisatie toepassen en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de publieke gezondheidszorg kennen',
          'casuïstiek uit de eigen organisatie',
          'aandacht voor optreden namens de overheid',
        ],
        situaties: [
          'Agressieve reacties op een oproep voor contactonderzoek',
          'Vijandige reacties bij GGD-inspecties',
          'Bedreigingen tijdens vaccinatiecampagnes',
          'Onveilige huisbezoeken',
          'Verbale agressie via telefoon of e-mail',
          'Solo-werkzaamheden op risicovolle locaties',
        ],
        waarom: [
          'GGD-medewerkers opereren in een spanningsvolle context: zij hebben overheidsbevoegdheden én de medewerking van burgers nodig. Structureel wantrouwen en polarisatie leiden daar tot agressie-incidenten en verzuim.',
          'De basistraining van Bureau Weerbaar en Veilig geeft medewerkers concrete vaardigheden om die situaties te hanteren, ook wanneer de agressie niet over hén gaat, maar over de overheid die zij vertegenwoordigen.',
        ],
        vragen: [
          [
            'Behandelt de training ook agressie via e-mail en telefoon?',
            'Ja. Een deel van de agressie richting GGD-medewerkers verloopt schriftelijk of telefonisch; die situaties komen expliciet aan bod.',
          ],
          [
            'Is er aandacht voor huisbezoeken en buitenlocaties?',
            'Ja. Veilig handelen bij huisbezoeken, inspecties en solo-werkzaamheden op risicovolle locaties is een vast onderdeel.',
          ],
        ],
        gerelateerd: ['agressietraining-huisartsassistenten-basis', 'agressietraining-handhavers-boas-basis'],
        afbeeldingAlt: 'GGD-medewerker voert een gesprek tijdens een huisbezoek',
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor medewerkers van de GGD en publieke gezondheidszorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'afgeronde basistraining of aantoonbare werkervaring met complexe agressiesituaties in de publieke gezondheidszorg',
        doelgroep:
          'GGD-professionals zoals inspecteurs, contactonderzoekers en medewerkers reizigersvaccinatie die regelmatig met ernstige of complexe agressie-incidenten te maken hebben.',
        samenvatting:
          'De gevorderde agressietraining voor de GGD en publieke gezondheidszorg van Bureau Weerbaar en Veilig richt zich op agressie die bewust georganiseerd is: ideologisch gemotiveerd gedrag, betwisting van legitimiteit en online intimidatiecampagnes. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met complexe situaties.',
        resultaat: [
          'Ideologisch gemotiveerde agressie onderscheiden en adequaat reageren',
          'Professioneel standhouden wanneer je legitimiteit wordt betwist',
          'Georganiseerde weerstand herkennen en escaleren',
          'Veilig handelen op risicovolle locaties',
          'Omgaan met online bedreigingen en intimidatiecampagnes',
          'Professionele distantie bewaren onder politieke druk',
        ],
        programma: [
          ['Ideologische agressie', 'Onderscheiden van frustratie, en reageren op agressie die voortkomt uit overtuiging in plaats van emotie.'],
          ['Betwiste legitimiteit', 'Professioneel standhouden wanneer iemand je bevoegdheid of het bestaansrecht van je organisatie ter discussie stelt.'],
          ['Georganiseerde weerstand', 'Herkennen wanneer weerstand gecoördineerd is, en dat tijdig escaleren.'],
          ['Online bedreiging', 'Omgaan met bedreigingen en intimidatiecampagnes die zich richten op de persoon achter de functie.'],
          ['Politieke druk en distantie', 'Professionele distantie bewaren wanneer het werk politiek onder druk staat.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen organisatie',
          'analyse van reactiepatronen op ideologische agressie',
          'aandacht voor emotionele belasting',
        ],
        situaties: [
          'Georganiseerde weerstand tegen GGD-interventies',
          'Diepgeworteld wantrouwen richting de overheid',
          'Ideologisch gemotiveerde agressie bij vaccinatie- of testlocaties',
          'Inspecties op risicovolle locaties',
          'Online bedreigingen na een beslissing',
        ],
        waarom: [
          'Sommige agressie richting de publieke gezondheidszorg is niet impulsief maar bewust georganiseerd. Wie te maken krijgt met een groep die zijn legitimiteit betwist, of met een intimidatiecampagne op sociale media, heeft andere vaardigheden nodig dan de-escalatietechnieken.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig gaat in op ideologisch gemotiveerde agressie en op het standhouden onder politieke en publieke druk.',
        ],
        vragen: [
          [
            'Wat is ideologisch gemotiveerde agressie?',
            'Agressie die niet voortkomt uit frustratie over een concrete beslissing, maar uit een overtuiging over de overheid of de gezondheidszorg. Die vraagt een andere reactie, omdat de-escaleren het onderliggende motief niet wegneemt.',
          ],
          [
            'Komen online bedreigingen aan bod?',
            'Ja. Online bedreigingen en intimidatiecampagnes richting individuele medewerkers zijn een vaste module in deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-handhavers-boas-gevorderd', 'agressietraining-gemeenteloket-publieksbalie-gevorderd'],
        afbeeldingAlt: 'GGD-inspecteurs bespreken een casus over georganiseerde weerstand',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden bij de GGD en publieke gezondheidszorg',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'leidinggevende verantwoordelijkheid voor een team GGD-medewerkers of publieke gezondheidsprofessionals',
        doelgroep:
          'Teamleiders, afdelingshoofden en managers bij de GGD en aanverwante organisaties die medewerkers aansturen in agressieve burgersituaties.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden bij de GGD en publieke gezondheidszorg van Bureau Weerbaar en Veilig leert leidinggevenden veiligheidsprotocollen opzetten voor solo-werkzaamheden, beleid ontwikkelen tegen online bedreigingen en medewerkers structureel coachen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Veiligheidsprotocollen opzetten voor solo-werkzaamheden op risicovolle locaties',
          'Beleid ontwikkelen voor online bedreigingen en intimidatiecampagnes',
          'Medewerkers coachen na incidenten met structurele debriefing',
          'Politieke druk vertalen naar concrete ondersteuning voor teams',
          'Samenwerken met politie en justitie bij georganiseerde weerstand',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Protocol voor solo-werkzaamheden', 'Een helder veiligheidsprotocol voor medewerkers die alleen op risicovolle locaties werken.'],
          ['Beleid tegen online bedreiging', 'Beleid ontwikkelen voor bedreigingen en intimidatiecampagnes gericht op individuele medewerkers.'],
          ['Coachen en debriefing', 'Structurele debriefing na incidenten inrichten, zodat opvang niet afhangt van wie er dienst heeft.'],
          ['Politieke druk en samenwerking', 'Politieke druk vertalen naar ondersteuning, en samenwerken met politie en justitie bij georganiseerde weerstand.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie in de eigen organisatie.'],
        ],
        werkvormen: [
          'analyse van veiligheidsbeleid en incidentrapportages',
          'beleidsverdieping met concrete protocollen',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers melden agressie niet omdat zij het als onderdeel van het werk zien',
          'Er is geen helder protocol voor solo-werkzaamheden op risicovolle locaties',
          'Online bedreigingen richten zich op individuele medewerkers',
          'Onvoldoende ondersteuning na ernstige incidenten',
        ],
        waarom: [
          'Medewerkers in de publieke gezondheidszorg worden geconfronteerd met burgers die hun legitimiteit betwisten, met georganiseerde weerstand en in het uiterste geval met persoonlijke bedreigingen. Dat is een ander veiligheidslandschap dan tien jaar geleden.',
          'Deze experttraining van Bureau Weerbaar en Veilig bereidt leidinggevenden daarop voor: met protocollen voor solo-werk, beleid tegen online bedreiging en structurele nazorg voor hun mensen.',
        ],
        vragen: [
          [
            'Wat doet de organisatie als een medewerker persoonlijk wordt bedreigd?',
            'Het ontwikkelen van beleid voor online bedreigingen en intimidatiecampagnes richting individuele medewerkers is een kernonderdeel van deze training, inclusief de samenwerking met politie en justitie.',
          ],
        ],
        gerelateerd: ['agressietraining-handhavers-boas-expert', 'agressietraining-gemeenteloket-publieksbalie-expert'],
        afbeeldingAlt: 'Managers bij de GGD werken aan veiligheidsbeleid voor hun teams',
      },
    ],
  },

  /* ---------------- Woonbegeleiding gehandicaptenzorg ---------------- */
  {
    naam: 'Begeleiders woonbegeleiding (VG)',
    slug: 'woonbegeleiding-gehandicaptenzorg',
    afbeelding: 'woonbegeleiding.jpg',
    afbeeldingAlt: 'Begeleider ondersteunt een cliënt op een woongroep',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor begeleiders en agogisch medewerkers in de woonbegeleiding gehandicaptenzorg in drie niveaus. Van agressie uit onvermogen begrijpen en begrenzen (basis) tot ernstige gedragsproblematiek en groepsspanning (gevorderd) en veiligheidsbeleid per woongroep (expert).',
    intro: [
      'Op een woongroep in de gehandicaptenzorg is agressie meestal geen kwade wil maar een communicatieprobleem: een cliënt die geen woorden heeft voor wat hem overkomt, reageert met zijn lichaam. Begeleiders moeten dat gedrag begrijpen en tegelijk hun eigen veiligheid bewaken.',
      'Wat het extra complex maakt, is de groep. Eén cliënt die ontregelt kan een hele woongroep meenemen, en spanningen bouwen zich over dagen op. Bureau Weerbaar en Veilig traint begeleiders daarom niet alleen op individueel gedrag, maar ook op groeps- en teamdynamiek.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor begeleiders en agogisch medewerkers in de woonbegeleiding gehandicaptenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Alle begeleiders en agogisch medewerkers in de gehandicaptenzorg die werkzaam zijn in de woonbegeleiding.',
        samenvatting:
          'De agressietraining voor begeleiders in de woonbegeleiding gehandicaptenzorg van Bureau Weerbaar en Veilig leert medewerkers agressie begrijpen vanuit de belevingswereld van cliënten met een verstandelijke beperking, en onderscheid maken tussen agressie uit onvermogen en gedrag dat begrensd kan worden. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Agressie begrijpen vanuit de belevingswereld van cliënten met een verstandelijke beperking',
          'Onderscheid maken tussen agressie uit onvermogen en agressie die begrensd kan worden',
          'De eigen reactie reguleren zonder escalatie of schade aan de zorgrelatie',
          'Situaties de-escaleren met technieken die aansluiten bij de cliënt',
          'Veilig handelen wanneer meerdere cliënten ontregelen',
          'Incidenten correct melden en teampatronen zichtbaar maken',
        ],
        programma: [
          ['Agressie als communicatie', 'Waarom een cliënt met een verstandelijke beperking agressief reageert, en wat het gedrag probeert te zeggen.'],
          ['Onvermogen of begrensbaar', 'Het onderscheid maken dat bepaalt of je begrijpt of begrenst.'],
          ['De-escaleren op maat', 'Technieken kiezen die aansluiten bij het niveau en de prikkelgevoeligheid van de cliënt.'],
          ['Groepsescalatie', 'Veilig handelen wanneer meerdere cliënten op de woongroep tegelijk ontregelen.'],
          ['Melden en teampatronen', 'Incidenten correct melden zodat patronen in het team zichtbaar worden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met VG-ervaring',
          'casuïstiek van de eigen woongroep',
          'theorie die de praktijk ondersteunt',
        ],
        situaties: [
          'Agressieve reacties op grensstelling of een verandering in de routine',
          'Ontregeling door prikkels in de omgeving',
          'Escalatie van de hele groep op een woongroep',
          'Fysieke agressie tijdens de verzorging',
          'Doelgerichte agressie richting een specifieke medewerker',
          'Agressie van familieleden',
        ],
        waarom: [
          'Agressie in de woonbegeleiding is doorgaans geen kwaadwilligheid maar een communicatieprobleem. Een cliënt die de verandering in zijn dag niet kan plaatsen of overprikkeld raakt, heeft geen woorden, en gebruikt zijn lichaam.',
          'Dat begrijpen is de helft van het werk; de andere helft is veilig blijven. De basistraining van Bureau Weerbaar en Veilig geeft begeleiders beide: inzicht in het gedrag en concrete vaardigheden om situaties te de-escaleren.',
        ],
        vragen: [
          [
            'Wat is het verschil tussen agressie uit onvermogen en begrensbare agressie?',
            'Agressie uit onvermogen komt voort uit de beperking zelf: een cliënt kan niet anders reageren. Begrensbaar gedrag is gedrag waar een cliënt wél invloed op heeft. Het onderscheid bepaalt of je de situatie aanpast of het gedrag begrenst, en is de kern van deze training.',
          ],
          [
            'Wordt groepsescalatie behandeld?',
            'Ja. Veilig handelen wanneer meerdere cliënten op een woongroep tegelijk ontregelen is een vast onderdeel van het programma.',
          ],
        ],
        gerelateerd: ['agressietraining-persoonlijk-begeleiders-basis', 'agressietraining-verpleeghuizen-ouderenzorg-basis'],
        afbeeldingAlt: 'Begeleider in gesprek met een cliënt in de woonkamer van een woongroep',
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor begeleiders en agogisch medewerkers in de woonbegeleiding gehandicaptenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'afgeronde basistraining of aantoonbare werkervaring met ernstige gedragsproblematiek in de gehandicaptenzorg',
        doelgroep:
          'Begeleiders op woongroepen met een hoge agressiebelasting, werkzaam met cliënten met ernstige meervoudige beperkingen of LVB-plus problematiek.',
        samenvatting:
          'De gevorderde agressietraining voor de woonbegeleiding gehandicaptenzorg van Bureau Weerbaar en Veilig richt zich op ernstige gedragsproblematiek: fysiek geweld bij grensstelling, doelgerichte agressie en structurele spanning op de woongroep. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met ernstige gedragsproblematiek.',
        resultaat: [
          'Ernstige gedragspatronen herkennen en de zorgbenadering aanpassen',
          'Doelgerichte agressie identificeren zonder de dynamiek te versterken',
          'Eenduidig teamhandelen bij complexe gedragsproblematiek',
          'Veilig optreden bij ernstig fysiek geweld',
          'Spanningen op de woongroep signaleren als structureel veiligheidsprobleem',
          'De eigen belasting herkennen en bespreekbaar maken',
        ],
        programma: [
          ['Ernstige gedragspatronen', 'Patronen herkennen bij ernstige meervoudige beperkingen en LVB-plus problematiek, en de benadering daarop aanpassen.'],
          ['Doelgerichte agressie', 'Identificeren wanneer agressie zich richt op een specifieke medewerker, zonder die dynamiek te versterken.'],
          ['Ernstig fysiek geweld', 'Veilig optreden bij ernstig fysiek geweld, ook tijdens een nachtdienst in alleenstand.'],
          ['Groeps- en teamdynamiek', 'Structurele spanning op de woongroep signaleren, en herkennen wanneer inconsistent teamgedrag de problematiek versterkt.'],
          ['Eigen belasting', 'De emotionele en fysieke belasting van dit werk herkennen en binnen het team bespreekbaar maken.'],
        ],
        werkvormen: [
          'casuïstiek van de eigen woongroep',
          'analyse van gedrags-, team- en groepsdynamieken',
          'aandacht voor emotionele en fysieke belasting',
        ],
        situaties: [
          'Ernstig fysiek geweld als reactie op het stellen van grenzen',
          'Doelgerichte agressie richting een specifieke medewerker',
          'Structureel hoge spanning op de woongroep',
          'Verstandelijke beperking in combinatie met psychiatrische of verslavingsproblematiek',
          'Inconsistent teamgedrag dat de problematiek versterkt',
          'Geweld tijdens een nachtdienst in alleenstand',
        ],
        waarom: [
          'Sommige agressie op een woongroep gaat verder dan een impulsieve reactie. Bij ernstige meervoudige beperkingen of LVB-plus problematiek is het gedrag heftiger, gerichter en vaker terugkerend, en soms sta je er ’s nachts alleen voor.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig bereidt begeleiders voor op die situaties, met nadruk op eenduidig teamhandelen: verschil in aanpak tussen collega’s houdt problematiek in stand.',
        ],
        vragen: [
          [
            'Wordt alleen werken tijdens nachtdiensten behandeld?',
            'Ja. Veilig optreden bij geweld tijdens een nachtdienst in alleenstand is een expliciet onderdeel van deze training.',
          ],
          [
            'Wat als agressie zich richt op één specifieke medewerker?',
            'Doelgerichte agressie richting een specifieke begeleider is een aparte module: hoe je die dynamiek herkent en aanpakt zonder haar te versterken.',
          ],
        ],
        gerelateerd: ['agressietraining-persoonlijk-begeleiders-gevorderd', 'agressietraining-verpleeghuizen-ouderenzorg-gevorderd'],
        afbeeldingAlt: 'Begeleiders analyseren gedragspatronen tijdens een training',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in de woonbegeleiding gehandicaptenzorg',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een woongroep of locatie in de gehandicaptenzorg',
        doelgroep: 'Teamleiders, locatiemanagers en gedragscoördinatoren in de woonbegeleiding gehandicaptenzorg.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in de woonbegeleiding gehandicaptenzorg van Bureau Weerbaar en Veilig leert leidinggevenden gedragsplannen beoordelen vanuit medewerkersveiligheid, eenduidig teambeleid implementeren en de meldcultuur versterken. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Gedragsplannen beoordelen vanuit het perspectief van medewerkersveiligheid',
          'Eenduidig teambeleid implementeren bij terugkerende agressiepatronen',
          'Medewerkers structureel coachen na incidenten',
          'De meldcultuur versterken',
          'Samenwerking met gedragsdeskundigen organiseren',
          'De balans borgen tussen cliëntenzorg en teamveiligheid',
        ],
        programma: [
          ['Gedragsplannen en veiligheid', 'Gedragsplannen beoordelen met de veiligheid van medewerkers als expliciet criterium.'],
          ['Eenduidig teambeleid', 'Beleid implementeren dat het hele team volgt bij terugkerende agressiepatronen.'],
          ['Coachen en meldcultuur', 'Medewerkers structureel begeleiden na incidenten en normalisering van agressie doorbreken.'],
          ['Samenwerking met gedragsdeskundigen', 'De samenwerking organiseren tussen woongroep, gedragsdeskundige en leidinggevende.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie op de eigen locatie.'],
        ],
        werkvormen: [
          'beleidsmatige verdieping met concrete veiligheidsprotocollen',
          'analyse van gedragsbeleid en incidentrapportages',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Onvoldoende incidentmeldingen doordat agressie genormaliseerd is',
          'Geen eenduidig beleid bij complexe gedragsproblematiek',
          'Onvoldoende ondersteuning van medewerkers na incidenten',
          'Onduidelijke samenwerking tussen woongroep en gedragsdeskundigen',
        ],
        waarom: [
          'Woongroepen in de gehandicaptenzorg horen tot de zwaarste werkomgevingen in de zorg. Agressie is er tegelijk een zorgvraagstuk en een veiligheidsvraagstuk, en die twee kunnen op gespannen voet staan.',
          'Deze experttraining van Bureau Weerbaar en Veilig helpt leidinggevenden de stap te maken van zelf handelen naar het structureel versterken van veiligheid: in gedragsplannen, teambeleid, nazorg en meldcultuur.',
        ],
        vragen: [
          [
            'Hoe verhoudt medewerkersveiligheid zich tot het gedragsplan van een cliënt?',
            'Beide zijn nodig. In deze training leren leidinggevenden gedragsplannen te beoordelen met medewerkersveiligheid als expliciet criterium, zonder de zorg voor de cliënt te ondermijnen.',
          ],
        ],
        gerelateerd: ['agressietraining-persoonlijk-begeleiders-expert', 'agressietraining-gedragsdeskundigen-orthopedagogen-expert'],
        afbeeldingAlt: 'Locatiemanager overlegt met een gedragsdeskundige over teamveiligheid',
      },
    ],
  },

  /* ---------------- Persoonlijk begeleiders (VG) ---------------- */
  {
    naam: 'Persoonlijk begeleiders (VG)',
    slug: 'persoonlijk-begeleiders',
    afbeelding: 'persoonlijk-begeleiders.jpg',
    afbeeldingAlt: 'Persoonlijk begeleider onderneemt een activiteit met een cliënt',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor persoonlijk begeleiders in de gehandicaptenzorg in drie niveaus. Van de risico’s van één-op-één begeleiding (basis) tot grensvervaging en ontspoorde begeleidingsrelaties (gevorderd) en beleid rond intensieve begeleidingsrelaties (expert).',
    intro: [
      'De kracht van een persoonlijk begeleider is de relatie: jij kent deze cliënt beter dan wie ook. Precies die intensiteit is ook het risico. Een cliënt weet wat werkt bij jou, welke grens hij kan opzoeken, en hoe hij jou los kan weken van de rest van het team.',
      'Daarbij werken persoonlijk begeleiders vaak alleen: tijdens een activiteit buitenshuis, bij een bezoek, in een één-op-één moment. Bureau Weerbaar en Veilig richt zich in deze trainingen dan ook expliciet op grensvervaging in langdurige relaties.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor persoonlijk begeleiders in de gehandicaptenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Persoonlijk begeleiders in de gehandicaptenzorg die werken in een één-op-één begeleidingsrelatie met intensief cliëntcontact.',
        samenvatting:
          'De agressietraining voor persoonlijk begeleiders in de gehandicaptenzorg van Bureau Weerbaar en Veilig leert begeleiders de dynamiek van één-op-één begeleiding als risicofactor herkennen en grenzen stellen zonder de begeleidingsrelatie te beschadigen. De training duurt 1 dag, telt maximaal 10 deelnemers en behandelt ook veilig werken tijdens activiteiten buitenshuis.',
        resultaat: [
          'De unieke dynamiek van één-op-één begeleiding als risicofactor herkennen',
          'Onderscheid maken tussen agressie uit onvermogen en agressie die begrensd moet worden',
          'De eigen reactie reguleren bij agressief gedrag van cliënten',
          'Grenzen stellen zonder de begeleidingsrelatie onnodig te beschadigen',
          'Veilig handelen tijdens activiteiten buitenshuis wanneer je alleen bent',
          'Incidenten correct melden en bespreken',
        ],
        programma: [
          ['De één-op-één relatie als risicofactor', 'Waarom juist de intensiteit van de begeleidingsrelatie risico’s meebrengt.'],
          ['Onvermogen of begrensbaar', 'Onderscheid maken tussen gedrag dat bij de beperking hoort en gedrag dat begrensd moet worden.'],
          ['Grenzen stellen zonder schade', 'Begrenzen op een manier die de begeleidingsrelatie intact laat.'],
          ['Alleen op pad', 'Veilig handelen tijdens activiteiten buitenshuis, zonder collega in de buurt.'],
          ['Contact buiten werktijd', 'Omgaan met contact via sociale media buiten werktijd, en met agressie van familieleden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de gehandicaptenzorg kennen',
          'casuïstiek uit de eigen begeleidingspraktijk',
          'aandacht voor grensvervaging in langdurige relaties',
        ],
        situaties: [
          'Een cliënt reageert agressief op een confrontatie over niet nagekomen afspraken',
          'Frustratie van de cliënt wordt op de persoonlijk begeleider afgereageerd',
          'Manipulatie en grensoverschrijding door de cliënt',
          'Agressie tijdens een activiteit buitenshuis',
          'Contact buiten werktijd via sociale media',
          'Agressie van familieleden',
        ],
        waarom: [
          'Persoonlijk begeleiders werken in intensieve relaties, en dat is tegelijk hun kracht en hun risico. De cliënt kent hen goed, inclusief wat werkt om iets af te dwingen.',
          'Zonder concrete training weten persoonlijk begeleiders niet altijd hoe zij agressief gedrag kunnen begrenzen zonder de relatie te beschadigen. De basistraining van Bureau Weerbaar en Veilig geeft hun daarvoor de handvatten.',
        ],
        vragen: [
          [
            'Waarom een aparte training voor persoonlijk begeleiders?',
            'Omdat de één-op-één begeleidingsrelatie een eigen dynamiek heeft. Grenzen stellen bij een cliënt met wie je een langdurige, intensieve relatie hebt vraagt een andere aanpak dan bij incidenteel contact.',
          ],
          [
            'Wordt contact via sociale media behandeld?',
            'Ja. Contact buiten werktijd via sociale media is een herkenbaar risico in intensieve begeleidingsrelaties en komt expliciet aan bod.',
          ],
        ],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-basis', 'agressietraining-gedragsdeskundigen-orthopedagogen-basis'],
        afbeeldingAlt: 'Persoonlijk begeleider en cliënt tijdens een activiteit buitenshuis',
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor persoonlijk begeleiders (PB-ers) in de gehandicaptenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'afgeronde basistraining of aantoonbare werkervaring met complexe begeleidingsrelaties in de gehandicaptenzorg',
        doelgroep:
          'Persoonlijk begeleiders die de basistraining hebben gevolgd en werken met cliënten met een hoog risicoprofiel of complexe gedragsproblematiek.',
        samenvatting:
          'De gevorderde agressietraining voor persoonlijk begeleiders van Bureau Weerbaar en Veilig richt zich op agressie die structureel is: manipulatieve patronen in langdurige relaties, grensvervaging en cliënten die de begeleider van het team isoleren. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met complexe begeleidingsrelaties.',
        resultaat: [
          'Manipulatieve gedragspatronen in langdurige begeleidingsrelaties herkennen',
          'Grensvervaging bij jezelf en collega’s signaleren en bespreekbaar maken',
          'Ontspoorde begeleidingsrelaties herstellen',
          'Ernstige agressie-incidenten in een één-op-één context professioneel hanteren',
          'Isolatie door cliënten herkennen en doorbreken',
          'Professionele distantie bewaken in intensieve relaties',
        ],
        programma: [
          ['Manipulatieve patronen', 'Herkennen hoe een cliënt de vertrouwensrelatie gebruikt om grenzen op te rekken.'],
          ['Grensvervaging zien bij jezelf', 'Signaleren wanneer je eigen grenzen zijn verschoven zonder dat je het merkte, en dat bespreekbaar maken.'],
          ['Ontspoorde relaties herstellen', 'Een begeleidingsrelatie die is ontspoord weer op professionele voet krijgen.'],
          ['Ernstige incidenten één-op-één', 'Professioneel handelen bij ernstige agressie wanneer er niemand anders is.'],
          ['Isolatie doorbreken', 'Herkennen wanneer een cliënt je van het team isoleert, en die dynamiek doorbreken.'],
        ],
        werkvormen: [
          'eigen casuïstiek van deelnemers',
          'signalering van grensvervaging door de trainer, met directe feedback',
          'aandacht voor de emotionele kant van intensieve relaties',
        ],
        situaties: [
          'Cliënten die de vertrouwensrelatie gebruiken om grenzen op te rekken',
          'Grensvervaging die begeleiders zelf niet meer zien',
          'Ernstige agressie-incidenten uit een ontspoorde relatie',
          'Cliënten die begeleiders van het team isoleren',
          'Agressiepatronen die pas zichtbaar worden als je ze naast elkaar legt',
        ],
        waarom: [
          'Sommige agressie in de persoonlijke begeleiding is niet impulsief maar structureel. Ze ontstaat langzaam, in een relatie die goed begon, en is juist daardoor moeilijk te zien voor de begeleider zelf.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig richt zich op die patronen: grensvervaging, isolatie en manipulatie in langdurige relaties, en op het herstellen van professionele distantie.',
        ],
        vragen: [
          [
            'Wat wordt bedoeld met grensvervaging?',
            'Dat de grens tussen professioneel en persoonlijk langzaam verschuift in een intensieve, langdurige begeleidingsrelatie. Begeleiders zien dat bij zichzelf vaak als laatste; deze training leert die signalen herkennen en bespreken.',
          ],
        ],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd', 'agressietraining-gedragsdeskundigen-orthopedagogen-gevorderd'],
        afbeeldingAlt: 'Persoonlijk begeleiders bespreken grensvervaging tijdens een training',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden over persoonlijk begeleiders in de gehandicaptenzorg',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een team persoonlijk begeleiders in de gehandicaptenzorg',
        doelgroep:
          'Teamleiders, locatiemanagers en gedragscoördinatoren die persoonlijk begeleiders aansturen in intensieve één-op-één begeleidingsrelaties.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden over persoonlijk begeleiders van Bureau Weerbaar en Veilig leert leidinggevenden grensvervaging in begeleidingsrelaties tijdig signaleren, veiligheidsafspraken maken voor één-op-één werk en medewerkers structureel coachen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Grensvervaging in begeleidingsrelaties tijdig signaleren en bespreekbaar maken',
          'Veiligheidsafspraken maken voor één-op-één werk en activiteiten buitenshuis',
          'Beleid opstellen voor contact buiten werktijd en via sociale media',
          'Medewerkers structureel coachen na incidenten',
          'Isolatie van een begeleider door een cliënt doorbreken',
          'De meldcultuur versterken',
        ],
        programma: [
          ['Grensvervaging signaleren als leidinggevende', 'Hoe je ziet dat een begeleidingsrelatie verschuift, terwijl de begeleider zelf niets merkt.'],
          ['Veiligheidsafspraken voor één-op-één werk', 'Afspraken maken over activiteiten buitenshuis en momenten zonder collega in de buurt.'],
          ['Beleid voor contact buiten werktijd', 'Helder beleid over sociale media en contact buiten diensttijd.'],
          ['Coachen en meldcultuur', 'Structurele begeleiding na incidenten, en zorgen dat begeleiders blijven melden.'],
          ['Intervisie na 6 weken', 'Terugkombijeenkomst over de implementatie in de eigen organisatie.'],
        ],
        werkvormen: [
          'casuïstiekbespreking op teamniveau',
          'beleidsverdieping met concrete veiligheidsafspraken',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Grensvervaging in een begeleidingsrelatie wordt te laat opgemerkt',
          'Er zijn geen afspraken over één-op-één werk en activiteiten buitenshuis',
          'Beleid over contact via sociale media ontbreekt',
          'Een begeleider raakt geïsoleerd van het team',
          'Incidenten in een één-op-één context worden niet gemeld',
        ],
        waarom: [
          'Een leidinggevende ziet de intensieve begeleidingsrelaties van zijn team van een afstand. Juist daardoor kan hij of zij signaleren wat de begeleider zelf niet meer ziet: dat een relatie is verschoven, dat iemand geïsoleerd raakt, dat afspraken zijn opgerekt.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op die signalerende en beleidsmatige rol, met concrete afspraken voor één-op-één werk en structurele coaching na incidenten.',
        ],
        vragen: [
          [
            'Waarom is dit een apart expertniveau?',
            'Omdat het aansturen van persoonlijk begeleiders andere vragen oproept dan het leiden van een woongroep. De risico’s zitten in de één-op-één relatie zelf: grensvervaging, isolatie en werk zonder toezicht.',
          ],
        ],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-expert', 'agressietraining-gedragsdeskundigen-orthopedagogen-expert'],
        afbeeldingAlt: 'Teamleider bespreekt begeleidingsrelaties met een persoonlijk begeleider',
      },
    ],
  },

  /* ---------------- Gedragsdeskundigen & orthopedagogen (VG) ---------------- */
  {
    naam: 'Gedragsdeskundigen & orthopedagogen',
    slug: 'gedragsdeskundigen-orthopedagogen',
    afbeelding: 'gedragsdeskundigen.jpg',
    afbeeldingAlt: 'Gedragsdeskundige bespreekt een gedragsplan met begeleiders',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor gedragsdeskundigen en orthopedagogen in de gehandicaptenzorg in drie niveaus. Van de agressierisico’s van een adviserende rol (basis) tot georganiseerde familiedruk en juridische dreiging (gevorderd) en beleid dat professionele autonomie beschermt (expert).',
    intro: [
      'Gedragsdeskundigen en orthopedagogen zitten in een bijzondere positie: zij adviseren over gedrag, maar voeren de zorg niet zelf uit. Als een gedragsplan ingrijpt in het leven van een cliënt, krijgen zij de reactie van familie, van begeleiders en van de cliënt zelf, zonder directe zeggenschap over de uitvoering.',
      'De druk komt daarbij van meerdere kanten tegelijk, en steeds vaker via advocaten, media en sociale kanalen. Bureau Weerbaar en Veilig richt deze trainingen daarom op standhouden bij een professioneel advies, ook wanneer dat advies onder maximale druk staat.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor gedragsdeskundigen en orthopedagogen in de gehandicaptenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Gedragsdeskundigen, orthopedagogen en gedragsondersteuners die werkzaam zijn in de zorg voor mensen met een beperking.',
        samenvatting:
          'De agressietraining voor gedragsdeskundigen en orthopedagogen van Bureau Weerbaar en Veilig leert professionals de agressierisico’s van hun adviserende rol herkennen, grenzen stellen aan onprofessionele druk en veilig handelen bij dreigend gedrag. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'De agressierisico’s van een adviserende rol herkennen',
          'De eigen reactie reguleren bij agressief gedrag',
          'Grenzen stellen aan onprofessionele druk',
          'Veilig handelen bij dreigend gedrag',
          'Omgaan met intimidatie via verschillende kanalen',
          'Incidenten correct melden',
        ],
        programma: [
          ['De adviserende rol als risicofactor', 'Waarom je aangesproken wordt op gevolgen van beleid waarover je geen directe zeggenschap hebt.'],
          ['Reageren onder druk', 'De eigen reactie reguleren bij agressie van familieleden, cliënten of begeleiders.'],
          ['Grenzen aan druk', 'Grenzen stellen wanneer iemand je onder druk zet om een advies aan te passen.'],
          ['Veilig bij observatie en diagnostiek', 'Veilig handelen bij dreigend gedrag tijdens observaties en diagnostisch contact.'],
          ['Intimidatie via kanalen', 'Omgaan met intimidatie via e-mail en sociale media, en incidenten correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers met kennis van de gehandicaptenzorg',
          'casuïstiek uit de eigen praktijk',
          'aandacht voor meervoudige druk',
        ],
        situaties: [
          'Familieleden reageren agressief op een gedragsplan',
          'Cliënten worden agressief tijdens een observatie',
          'Confrontaties met begeleiders over de uitvoering van een advies',
          'Druk om een advies aan te passen',
          'Intimidatie via e-mail of sociale media',
          'Werksituaties waarin je alleen bent en je onveilig voelt',
        ],
        waarom: [
          'Gedragsdeskundigen worden van meerdere kanten aangesproken op de gevolgen van beleid waarover zij geen directe zeggenschap hebben. Familie vindt het advies te streng, begeleiders vinden het onuitvoerbaar, en de cliënt merkt vooral dat er iets verandert.',
          'Die meervoudige druk veroorzaakt handelingsverlegenheid. De basistraining van Bureau Weerbaar en Veilig biedt concrete kennis en vaardigheden om situaties beheersbaar te houden en professioneel te blijven werken.',
        ],
        vragen: [
          [
            'Waarom een agressietraining voor een adviserende functie?',
            'Omdat gedragsdeskundigen wél de reacties krijgen op beslissingen die ingrijpen in het leven van een cliënt, zonder de uitvoering in eigen hand te hebben. Dat brengt eigen agressierisico’s mee, van familiedruk tot intimidatie via e-mail.',
          ],
          [
            'Komt intimidatie via e-mail en sociale media aan bod?',
            'Ja. Intimidatie via verschillende kanalen, ook buiten het directe contact, is een vast onderdeel van deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-basis', 'agressietraining-persoonlijk-begeleiders-basis'],
        afbeeldingAlt: 'Orthopedagoog voert een observatie uit op een woongroep',
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor gedragsdeskundigen en orthopedagogen in de gehandicaptenzorg',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining of aantoonbare werkervaring met ernstige druk of agressie',
        doelgroep:
          'Gedragsdeskundigen en orthopedagogen met een basistraining die werken met cliënten in complexe familiesituaties, forensische contexten of met ernstige meervoudige problematiek.',
        samenvatting:
          'De gevorderde agressietraining voor gedragsdeskundigen en orthopedagogen van Bureau Weerbaar en Veilig richt zich op georganiseerde druk: families die via advocaten en media druk uitoefenen, juridische dreiging en intimidatie via privékanalen. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining of ervaring met ernstige druk.',
        resultaat: [
          'Georganiseerde familiedruk herkennen en professioneel hanteren',
          'Standhouden bij een professioneel advies onder maximale druk',
          'Veilig handelen bij diagnostisch contact met cliënten met ernstige gedragsproblematiek',
          'Juridische dreigingen evalueren en escaleren',
          'Intimidatie via privékanalen buiten werktijd aanpakken',
          'Complexe dreiging- en agressiesituaties escaleren naar leidinggevenden',
        ],
        programma: [
          ['Georganiseerde familiedruk', 'Herkennen wanneer druk gecoördineerd is en via advocaten of media loopt, en hoe je daar professioneel op reageert.'],
          ['Standhouden onder druk', 'Een professioneel advies handhaven wanneer de druk om het aan te passen maximaal is.'],
          ['Veilig diagnostisch contact', 'Veilig werken met cliënten bij wie elk diagnostisch contact tot fysieke agressie kan leiden.'],
          ['Juridische dreiging', 'Juridische dreigingen evalueren, onderscheiden van bluf, en tijdig escaleren.'],
          ['Intimidatie in de privésfeer', 'Intimidatie via privékanalen en buiten werktijd aanpakken.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen organisatie',
          'analyse en oefening van ingebrachte situaties',
          'aandacht voor de emotionele belasting van professionals',
        ],
        situaties: [
          'Families die via advocaten en media druk uitoefenen',
          'Cliënten bij wie elk diagnostisch contact tot fysieke agressie leidt',
          'Intimidatie om een professioneel advies terug te draaien',
          'Juridische dreigingen als reactie op een gedragsmatige beslissing',
          'Agressie via sociale media buiten werktijd',
        ],
        waarom: [
          'Sommige druk op gedragsdeskundigen is niet impulsief maar georganiseerd: een familie die een advocaat inschakelt, een campagne op sociale media, een dreiging die precies op het juiste moment komt.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig gaat in op die situaties en op de spanning die er voor deze beroepsgroep altijd is: inhoudelijke verantwoordelijkheid dragen zonder directe controle over de uitvoering.',
        ],
        vragen: [
          [
            'Hoe weeg je een juridische dreiging?',
            'Het evalueren van juridische dreigingen: wat is reëel, wat is druk uitoefenen, en het tijdig escaleren daarvan is een expliciete module in deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd', 'agressietraining-persoonlijk-begeleiders-gevorderd'],
        afbeeldingAlt: 'Gedragsdeskundigen bespreken een casus over familiedruk',
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden over gedragsdeskundigen en orthopedagogen',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde:
          'leidinggevende verantwoordelijkheid voor een team gedragsdeskundigen of orthopedagogen in de gehandicaptenzorg',
        doelgroep:
          'Managers, coördinatoren en bestuurders in de gehandicaptenzorg die teams van gedragsdeskundigen en orthopedagogen leiden.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden over gedragsdeskundigen en orthopedagogen van Bureau Weerbaar en Veilig leert leidinggevenden beleid opstellen dat de inhoudelijke autonomie van professionals beschermt tegen familiedruk en juridische dreiging. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Beleid opstellen dat de inhoudelijke autonomie van gedragsdeskundigen beschermt',
          'Protocollen ontwikkelen voor omgang met familiedruk en juridische dreiging',
          'Professionals coachen na incidenten',
          'De meldcultuur versterken',
          'Veiligheidsprotocollen voor solo-werkzaamheden implementeren',
          'Samenwerking met juridische ondersteuning organiseren',
        ],
        programma: [
          ['Autonomie beschermen', 'Beleid dat voorkomt dat inhoudelijke adviezen wijken onder druk van buiten.'],
          ['Protocol bij familiedruk en juridische dreiging', 'Concrete protocollen voor het moment dat een familie escaleert of juridisch dreigt.'],
          ['Coachen en meldcultuur', 'Professionals begeleiden na incidenten en intimidatiecampagnes, en zorgen dat er gemeld wordt.'],
          ['Solo-werkzaamheden', 'Veiligheidsprotocollen voor professionals die alleen op locatie werken.'],
          ['Juridische ondersteuning en intervisie', 'Samenwerking met juridische ondersteuning organiseren; na 6 weken intervisie over de implementatie.'],
        ],
        werkvormen: [
          'beleidsanalyse en onderzoek van incidentrapportages',
          'beleidsverdieping met concrete protocollen',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Druk op gedragsdeskundigen om adviezen aan te passen',
          'Ontbrekend beleid bij juridische dreigingen',
          'Onvoldoende ondersteuning na intimidatiecampagnes',
          'Georganiseerde familiedruk op het gedragsbeleid',
          'Solo-werkzaamheden zonder zicht op de veiligheidssituatie',
        ],
        waarom: [
          'Gedragsdeskundigen worden onder druk gezet: door families, soms door de eigen organisatie: om adviezen aan te passen. Zonder beleid dat hun professionele autonomie beschermt, wordt inhoud een kwestie van wie het hardst duwt.',
          'Deze experttraining van Bureau Weerbaar en Veilig versterkt zowel de veiligheid als de professionele autonomie in de bijzondere driehoek tussen cliënt, familie en organisatie.',
        ],
        vragen: [
          [
            'Wat betekent het beschermen van inhoudelijke autonomie?',
            'Dat een gedragsdeskundige een professioneel advies kan handhaven zonder dat familiedruk, juridische dreiging of interne druk de inhoud bepaalt. Beleid daarvoor opstellen is het uitgangspunt van deze training.',
          ],
        ],
        gerelateerd: ['agressietraining-woonbegeleiding-gehandicaptenzorg-expert', 'agressietraining-persoonlijk-begeleiders-expert'],
        afbeeldingAlt: 'Manager overlegt met een team gedragsdeskundigen over beleid',
      },
    ],
  },
];
