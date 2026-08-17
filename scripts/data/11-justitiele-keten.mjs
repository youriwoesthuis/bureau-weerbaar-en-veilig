/** Brongegevens sector JUSTITIËLE KETEN: bureauwenv.wizzinc-dev2.nl. */

export const sector = {
  naam: 'Justitiële keten',
  slug: 'justitiele-keten',
  samenvatting:
    'Bureau Weerbaar en Veilig traint medewerkers in de justitiële keten die tegelijk moeten begrenzen en begeleiden, met cliënten en jongeren voor wie de inzet hoog is. Voor reclasseringsmedewerkers en medewerkers van justitiële jeugdinrichtingen, elk in drie niveaus.',
  afbeeldingAlt: 'Begeleider in gesprek met een jongere in een gesloten setting',
  intro: [
    'In de justitiële keten heeft vrijwel elke professional een dubbelrol: toezichthouder én begeleider, beveiliger én pedagoog. Die twee taken botsen op het moment dat het spannend wordt, en cliënten of jongeren voelen precies waar die spanning zit.',
    'Daarbij is de inzet groot: een terugmelding, een verlofbeslissing of een plaatsing raakt de vrijheid van iemand. Agressie is hier daarom vaker strategisch dan impulsief. Bureau Weerbaar en Veilig traint deze beroepsgroepen op dreigingsherkenning en op standhouden zonder de relatie op te geven.',
  ],
};

export const beroepsgroepen = [
  {
    naam: 'Reclasseringsmedewerkers',
    slug: 'reclasseringsmedewerkers',
    afbeelding: 'reclassering.jpg',
    afbeeldingAlt: 'Reclasseringsmedewerker voert een toezichtgesprek met een cliënt',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor reclasseringsmedewerkers in drie niveaus. Van de spanning tussen toezicht en begeleiding hanteren (basis) tot complexe dreigingspatronen en systematische intimidatie (gevorderd) en dreigingsmanagementbeleid (expert).',
    intro: [
      'Een reclasseringsmedewerker begeleidt iemand én houdt toezicht op diezelfde persoon. Wie voorwaarden moet handhaven of een terugmelding overweegt, weet dat de gevolgen voor de cliënt groot zijn, en dat de cliënt dat ook weet.',
      'Dat maakt de machtsdynamiek in elk gesprek voelbaar. Bureau Weerbaar en Veilig behandelt die dynamiek expliciet, samen met veilig werken bij huisbezoeken.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor reclasseringsmedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Reclasseringsmedewerkers met direct cliëntcontact in toezicht- en begeleidingstrajecten.',
        samenvatting:
          'De agressietraining voor reclasseringsmedewerkers van Bureau Weerbaar en Veilig leert medewerkers de spanning tussen toezicht en begeleiding hanteren, dreigend gedrag herkennen en veilig handelen bij huisbezoeken. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'De spanning tussen toezicht en begeleiding herkennen als risicofactor',
          'Signalen van oplopende spanning bij cliënten identificeren',
          'De eigen reactie reguleren bij dreigend gedrag',
          'Veilig handelen bij huisbezoeken',
          'Grenzen stellen aan ongewenst contact',
          'Incidenten correct melden en overdragen',
        ],
        programma: [
          ['Toezichthouder én begeleider', 'Waarom de dubbelrol van de reclassering zelf een risicofactor is.'],
          ['Spanning zien oplopen', 'Signalen bij cliënten herkennen voordat een gesprek ontspoort.'],
          ['Reguleren bij dreiging', 'De eigen reactie beheersen wanneer een cliënt de voorwaarden betwist en dreigend wordt.'],
          ['Veilig op huisbezoek', 'Handelen bij onvoorspelbare escalatie en bij een dreigende omgeving.'],
          ['Na de terugmelding', 'Grenzen stellen aan ongewenst contact en intimidatie na een terugmelding, en correct melden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die de reclasseringscontext kennen',
          'casuïstiek uit de eigen caseload',
          'expliciete aandacht voor de machtsdynamiek tussen medewerker en cliënt',
        ],
        situaties: [
          'Een cliënt betwist de voorwaarden en reageert dreigend',
          'Agressie bij een dreigende terugmelding',
          'Huisbezoeken met onvoorspelbare escalatie',
          'Een omgeving die dreigend aanwezig is tijdens het gesprek',
          'Intimidatie na een terugmelding',
        ],
        waarom: [
          'Reclasseringsmedewerkers vervullen een dubbelrol: toezichthouder én begeleider. Dat schept een unieke spanning, want dezelfde professional die helpt, kan ook de vrijheid van de cliënt beperken.',
          'De basistraining van Bureau Weerbaar en Veilig geeft medewerkers de vaardigheden om die situaties veilig beheersbaar te houden, met de machtsdynamiek expliciet op tafel.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-justitiele-jeugdinrichtingen-basis', 'agressietraining-maatschappelijk-werkers-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor reclasseringsmedewerkers',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Reclasseringsmedewerkers met basistraining die werken met cliënten met een ernstig gewelddadig verleden of een hoog risicoprofiel.',
        samenvatting:
          'De gevorderde agressietraining voor reclasseringsmedewerkers van Bureau Weerbaar en Veilig richt zich op complexe dreigingspatronen: systematisch volgen, netwerkdruk en dreiging die pas achteraf zichtbaar wordt. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Complexe dreigingspatronen onderscheiden van impulsieve agressie',
          'Risicovolle situaties taxeren met gestructureerde methoden',
          'Professioneel standhouden bij manipulatieve cliënten',
          'Veiligheidsmaatregelen treffen bij huisbezoeken',
          'Systematische intimidatie herkennen en escaleren',
          'Professionele distantie behouden in langdurige relaties',
        ],
        programma: [
          ['Dreiging of impuls', 'Onderscheid maken tussen een impulsieve uitbarsting en een bewust dreigingspatroon.'],
          ['Gestructureerde risicotaxatie', 'Risicovolle situaties systematisch taxeren in plaats van op gevoel.'],
          ['Manipulatie en standhouden', 'Professioneel blijven bij cliënten die bewust manipuleren.'],
          ['Systematische intimidatie', 'Volgen, fotograferen en netwerkdruk via medeverdachten of familie herkennen en escaleren.'],
          ['Huisbezoek in risicovolle omgeving', 'Veiligheidsmaatregelen bij huisbezoeken in omgevingen met georganiseerde criminaliteit.'],
        ],
        werkvormen: [
          'casuïstiek uit de eigen organisatie',
          'directe feedback op dreigingsherkenning',
          'oefening van ingebrachte situaties',
        ],
        situaties: [
          'Cliënten die bewust grensoverschrijdend gedrag vertonen',
          'Onvoorspelbare escalatie bij toenemende druk',
          'Systematisch volgen of fotograferen door cliënten',
          'Netwerkdruk via medeverdachten of familie',
          'Huisbezoeken in omgevingen met georganiseerde criminaliteit',
          'Dreiging die pas achteraf via sociale media duidelijk wordt',
        ],
        waarom: [
          'Sommige agressie in de reclassering is niet impulsief maar bewust manipulerend of intimiderend. Het patroon wordt vaak pas zichtbaar als je de losse signalen naast elkaar legt.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig bereidt medewerkers voor op die complexe dreigingspatronen, met gestructureerde risicotaxatie als basis.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-justitiele-jeugdinrichtingen-gevorderd', 'agressietraining-maatschappelijk-werkers-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in de reclassering',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'leidinggevende verantwoordelijkheid voor een team reclasseringsmedewerkers',
        doelgroep: 'Teamleiders, unitmanagers en veiligheidscoördinatoren bij reclasseringsorganisaties.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in de reclassering van Bureau Weerbaar en Veilig leert leidinggevenden dreigingsmanagementbeleid implementeren en medewerkers steunen bij moeilijke terugmeldbeslissingen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Structureel dreigingsmanagementbeleid implementeren',
          'Medewerkers coachen bij moeilijke meldingsbeslissingen',
          'Debriefing en nazorg na incidenten organiseren',
          'Dreigingspatronen herkennen en vertalen naar maatregelen',
          'Samenwerking met externe partners versterken',
          'De meldcultuur verankeren',
        ],
        programma: [
          ['Dreigingsmanagement', 'Structureel beleid voor cliënten met een hoog risicoprofiel.'],
          ['Steun bij terugmeldbeslissingen', 'Medewerkers coachen op het moment dat een terugmelding gevolgen heeft.'],
          ['Patronen over tijd', 'Intimidatiepatronen zichtbaar maken die anders buiten het zicht blijven.'],
          ['Politie en OM', 'De samenwerking met politie en Openbaar Ministerie versterken.'],
          ['Zorgmissie én veiligheid', 'Beide borgen zonder medewerkers op te offeren voor de relatie met de cliënt.'],
        ],
        werkvormen: [
          'analyse van veiligheidsbeleid en incidentrapportages',
          'beleidsverdieping vanuit kennis van de justitiële sector',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers melden dreiging structureel niet, waardoor risicoprofielen onvolledig blijven',
          'Er is geen dreigingsmanagementbeleid voor cliënten met een hoog risicoprofiel',
          'Structurele debriefing na ernstige incidenten ontbreekt',
          'Medewerkers krijgen onvoldoende steun bij terugmeldbeslissingen',
          'Intimidatiepatronen over langere tijd blijven buiten het zicht',
          'Samenwerking met politie en OM verloopt niet optimaal',
        ],
        waarom: [
          'In de reclassering staan twee missies naast elkaar: de zorg voor de cliënt en de veiligheid van de medewerker. Zonder beleid wordt die spanning stilzwijgend bij de individuele medewerker gelegd.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich op de vraag hoe je beide borgt, zonder medewerkers op te offeren voor de relatie met de cliënt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-justitiele-jeugdinrichtingen-expert', 'agressietraining-maatschappelijk-werkers-expert'],
      },
    ],
  },

  {
    naam: 'Justitiële jeugdinrichtingen',
    slug: 'justitiele-jeugdinrichtingen',
    afbeelding: 'jeugdinrichtingen.jpg',
    afbeeldingAlt: 'Groepsleider begeleidt jongeren in een justitiële jeugdinrichting',
    samenvatting:
      'Bureau Weerbaar en Veilig biedt agressietraining voor medewerkers van justitiële jeugdinrichtingen in drie niveaus. Van gezag uitstralen zonder escalatie (basis) tot strategische escalatie en informele leiders (gevorderd) en eenduidig teambeleid bij risicojongeren (expert).',
    intro: [
      'Groepsleiders en pedagogisch medewerkers in een justitiële jeugdinrichting werken met jongeren die niet weg kunnen en die vaak in permanente spanning leven. Statusgedrag hoort bij de groep: de confrontatie met een medewerker levert aanzien op.',
      'De dubbelrol is hier extra scherp: begrenzen én begeleiden, in een gesloten ruimte, met een groep die alles meemaakt. Bureau Weerbaar en Veilig traint daarom sterk op groepsdynamiek en op eenduidig teamoptreden.',
    ],
    trainingen: [
      {
        niveau: 'basis',
        titel: 'Agressietraining voor medewerkers van justitiële jeugdinrichtingen',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: null,
        doelgroep:
          'Groepsleiders, pedagogisch medewerkers en beveiligers in justitiële jeugdinrichtingen.',
        samenvatting:
          'De agressietraining voor medewerkers van justitiële jeugdinrichtingen van Bureau Weerbaar en Veilig leert medewerkers agressiedynamiek in gesloten settings herkennen en gezag uitstralen zonder te escaleren. De training duurt 1 dag en telt maximaal 10 deelnemers.',
        resultaat: [
          'Agressiedynamiek in gesloten settings herkennen, waaronder statusgedrag en groepsdruk',
          'Signalen van oplopende spanning vroegtijdig herkennen',
          'De eigen reactie reguleren bij provocerend gedrag',
          'Gezag uitstralen zonder te escaleren',
          'Groepsdynamieken bijsturen',
          'Incidenten correct melden',
        ],
        programma: [
          ['Agressie in een gesloten setting', 'Statusgedrag en groepsdruk herkennen als drijvende krachten achter agressie.'],
          ['Spanning vroeg herkennen', 'Signalen zien voordat een jongere of een groep omslaat.'],
          ['Reguleren bij provocatie', 'De eigen reactie beheersen wanneer een jongere je bewust uitdaagt.'],
          ['Gezag zonder escalatie', 'Duidelijk zijn en gezag houden zonder de confrontatie op te zoeken.'],
          ['Begrenzen én begeleiden', 'De dubbelrol hanteren, ook bij bedreigingen en intimidatie door familieleden.'],
        ],
        werkvormen: [
          'realistische oefeningen met trainers die jeugddetentie kennen',
          'casuïstiek van de eigen leefgroep',
          'expliciete focus op de dubbelrol: begrenzen én begeleiden',
        ],
        situaties: [
          'Agressieve reacties op een verlof- of plaatsingsbeslissing',
          'Escalatie in groepssituaties door wederzijdse versterking',
          'Statusgedrag via confrontatie met een medewerker',
          'Fysieke agressie of dreiging',
          'Persoonlijke aanvallen via bedreigingen',
          'Intimidatie door familieleden',
        ],
        waarom: [
          'Medewerkers van justitiële jeugdinrichtingen werken in een van de meest veeleisende omgevingen die er zijn: met jongeren die in spanning en frustratie leven en die niet weg kunnen.',
          'Zonder training ontstaan gevaarlijke situaties en hoog verzuim. De basistraining van Bureau Weerbaar en Veilig richt zich op gezag uitstralen zonder te escaleren.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-reclasseringsmedewerkers-basis', 'agressietraining-woonbegeleiding-gehandicaptenzorg-basis'],
      },
      {
        niveau: 'gevorderd',
        titel: 'Gevorderde agressietraining voor medewerkers van justitiële jeugdinrichtingen',
        duur: '1 dag',
        groep: 'maximaal 10 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'afgeronde basistraining',
        doelgroep:
          'Medewerkers met een afgeronde basistraining die werken in de gesloten justitiële jeugdzorg met ernstige agressieproblematiek.',
        samenvatting:
          'De gevorderde agressietraining voor justitiële jeugdinrichtingen van Bureau Weerbaar en Veilig richt zich op strategische escalatie, informele leiders en collectieve weigeringen. De training duurt 1 dag, telt maximaal 10 deelnemers en vraagt een afgeronde basistraining.',
        resultaat: [
          'Strategische agressiepatronen onderscheiden van impulsieve patronen',
          'Groepsdynamieken en informele leiders identificeren',
          'Veilig ingrijpen bij fysiek geweld',
          'Omgaan met psychiatrische complexiteit',
          'Collectieve weigeringen de-escaleren',
          'Intimidatie buiten werktijd herkennen en rapporteren',
        ],
        programma: [
          ['Strategisch escaleren', 'Herkennen wanneer een jongere bewust escaleert om een overplaatsing of ander doel te bereiken.'],
          ['Informele leiders', 'Identificeren wie in de groep het gezag van het team ondermijnt.'],
          ['Fysiek geweld in gesloten ruimtes', 'Veilig ingrijpen bij ernstig fysiek geweld.'],
          ['Psychiatrische complexiteit', 'Handelen bij onvoorspelbare uitbarstingen met psychiatrische achtergrond.'],
          ['Collectieve weigering', 'De-escaleren bij collectieve weigeringen of opstanden, en intimidatie via sociale media rapporteren.'],
        ],
        werkvormen: [
          'casuïstiek van eigen situaties van deelnemers',
          'analyse van groeps- en teamdynamiek',
          'expliciete aandacht voor de emotionele belasting in een gesloten setting',
        ],
        situaties: [
          'Bewuste escalatie door jongeren om een overplaatsing of ander doel te bereiken',
          'Informele leiders die het gezag van het team ondermijnen',
          'Ernstig fysiek geweld in gesloten ruimtes',
          'Psychiatrische problematiek met onvoorspelbare uitbarstingen',
          'Collectieve weigeringen of opstanden',
          'Intimidatie via sociale media of door familieleden',
        ],
        waarom: [
          'Sommige agressie in een jeugdinrichting is niet impulsief maar strategisch: gedrag dat een doel dient, of dat status oplevert binnen de groep.',
          'Deze verdiepingstraining van Bureau Weerbaar en Veilig vraagt om vaardigheden voorbij basiscommunicatie, met expliciete aandacht voor wat dit werk emotioneel van medewerkers vraagt.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-reclasseringsmedewerkers-gevorderd', 'agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd'],
      },
      {
        niveau: 'expert',
        titel: 'Expert agressietraining voor leidinggevenden in justitiële jeugdinrichtingen',
        duur: '2 dagen (inclusief intervisie na 6 weken)',
        groep: 'maximaal 8 deelnemers',
        cert: 'deelnamecertificaat na afloop',
        voorwaarde: 'coördinerende of leidinggevende verantwoordelijkheid in een justitiële jeugdinrichting',
        doelgroep:
          'Groepsleiders met coördinerende verantwoordelijkheid, afdelingshoofden en managers in justitiële jeugdinrichtingen.',
        samenvatting:
          'De expert agressietraining voor leidinggevenden in justitiële jeugdinrichtingen van Bureau Weerbaar en Veilig leert leidinggevenden eenduidig teambeleid implementeren bij risicojongeren en leefgroepsdynamiek bijsturen. De training duurt 2 dagen inclusief intervisie na 6 weken en telt maximaal 8 deelnemers.',
        resultaat: [
          'Eenduidig teambeleid implementeren bij risicojongeren',
          'Leefgroepsdynamieken analyseren en bijsturen',
          'Structurele debriefing en nazorg na incidenten organiseren',
          'Nieuwe medewerkers systematisch voorbereiden',
          'De pedagogische en beveiligingstaken beleidsmatig verankeren',
          'De meldcultuur en het veiligheidsbeleid versterken',
        ],
        programma: [
          ['Eenduidig teambeleid', 'Zorgen dat het hele team hetzelfde doet bij dezelfde jongere.'],
          ['Leefgroepsdynamiek', 'Escalatiepatronen in de leefgroep analyseren en bijsturen.'],
          ['Debriefing en nazorg', 'Structurele opvang na ernstige incidenten inrichten.'],
          ['Nieuwe medewerkers', 'Systematische voorbereiding van nieuwe medewerkers op de agressiebelasting.'],
          ['Pedagogiek én beveiliging', 'Beide taken beleidsmatig verankeren in plaats van bij de groepsleider laten botsen.'],
        ],
        werkvormen: [
          'analyse van veiligheidsbeleid en incidentrapportages',
          'beleidsverdieping met concrete protocollen voor de jeugdinrichting',
          'intervisie na 6 weken',
        ],
        situaties: [
          'Medewerkers reageren inconsistent op dezelfde jongeren',
          'Analyse van escalatiepatronen ontbreekt',
          'Onvoldoende nazorg na ernstige incidenten',
          'Spanning tussen de pedagogische missie en de beveiligingstaken',
        ],
        waarom: [
          'Veiligheid voor medewerkers begint bij helder beleid en een eenduidige teamaanpak. In een gesloten setting met hoge agressiebelasting is inconsistentie het grootste risico.',
          'Deze experttraining van Bureau Weerbaar en Veilig richt zich daarom op teambeleid, leefgroepsdynamiek en het verankeren van pedagogiek én beveiliging.',
        ],
        vragen: [],
        gerelateerd: ['agressietraining-reclasseringsmedewerkers-expert', 'agressietraining-woonbegeleiding-gehandicaptenzorg-expert'],
      },
    ],
  },
];
