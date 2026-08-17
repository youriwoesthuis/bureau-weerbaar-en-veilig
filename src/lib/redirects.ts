/**
 * URL-mapping van de oude WordPress-site naar de nieuwe structuur.
 *
 * GitHub Pages kan geen server-side 301-redirects doen. Daarom genereert
 * `src/pages/[...pad].astro` voor elke oude URL een klein HTML-bestand met een
 * meta-refresh én een `<link rel="canonical">` naar de nieuwe pagina. Zoekmachines
 * behandelen die combinatie als een permanente verhuizing; bezoekers merken alleen
 * dat ze direct doorgaan.
 *
 * Sleutel = oud pad (zonder domein, mét sluitende slash), waarde = nieuw pad.
 * Volledige verantwoording per regel staat in redirects.md.
 */
export const REDIRECTS: Record<string, string> = {
  /* ---------- Zorg ---------- */
  '/trainingen/agressietraining-voor-thuiszorgmedewerkers-verzorgenden-en-wijkverpleegkundigen/':
    '/trainingen/agressietraining-thuiszorg-wijkverpleging-basis/',
  '/trainingen/gevorderde-agressietraining-voor-thuiszorgmedewerkers-verzorgenden-en-wijkverpleegkundigen/':
    '/trainingen/agressietraining-thuiszorg-wijkverpleging-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-de-thuiszorg-en-wijkverpleging/':
    '/trainingen/agressietraining-thuiszorg-wijkverpleging-expert/',
  '/trainingen/agressietraining-voor-zorgmedewerkers-in-verpleeghuizen-en-ouderenzorg/':
    '/trainingen/agressietraining-verpleeghuizen-ouderenzorg-basis/',
  '/trainingen/gevorderde-agressietraining-voor-leidinggevenden-in-verpleeghuizen-en-ouderenzorg/':
    '/trainingen/agressietraining-verpleeghuizen-ouderenzorg-gevorderd/',
  '/trainingen/expert-agressietraining-voor-zorgmedewerkers-in-verpleeghuizen-en-ouderenzorg/':
    '/trainingen/agressietraining-verpleeghuizen-ouderenzorg-expert/',
  '/trainingen/agressietraining-voor-medewerkers-van-de-ggd-en-publieke-gezondheidszorg/':
    '/trainingen/agressietraining-ggd-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-van-de-ggd-en-publieke-gezondheidszorg/':
    '/trainingen/agressietraining-ggd-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-de-ggd-en-publieke-gezondheidszorg/':
    '/trainingen/agressietraining-ggd-expert/',
  '/trainingen/agressietraining-begeleiders-woonbegeleiding-gehandicaptenzorg-basis/':
    '/trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-basis/',
  '/trainingen/gevorderde-agressietraining-voor-begeleiders-en-agogisch-medewerkers-in-de-woonbegeleiding-gehandicaptenzorg/':
    '/trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-de-woonbegeleiding-gehandicaptenzorg/':
    '/trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-expert/',
  '/trainingen/agressietraining-voor-persoonlijk-begeleiders-pb-ers-in-de-gehandicaptenzorg/':
    '/trainingen/agressietraining-persoonlijk-begeleiders-basis/',
  '/trainingen/gevorderde-agressietraining-voor-persoonlijk-begeleiders-pb-ers-in-de-gehandicaptenzorg/':
    '/trainingen/agressietraining-persoonlijk-begeleiders-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-over-persoonlijk-begeleiders-in-de-gehandicaptenzorg/':
    '/trainingen/agressietraining-gedragsdeskundigen-orthopedagogen-expert/',
  '/trainingen/agressietraining-voor-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg/':
    '/trainingen/agressietraining-gedragsdeskundigen-orthopedagogen-basis/',
  '/trainingen/gevorderde-agressietraining-voor-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg/':
    '/trainingen/agressietraining-gedragsdeskundigen-orthopedagogen-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-over-gedragsdeskundigen-en-orthopedagogen-in-de-gehandicaptenzorg/':
    '/trainingen/agressietraining-woonbegeleiding-gehandicaptenzorg-expert/',

  /* ---------- Onderwijs ---------- */
  '/trainingen/agressietraining-voor-leerplichtambtenaren/':
    '/trainingen/agressietraining-leerplichtambtenaren-basis/',
  '/trainingen/gevorderde-agressietraining-voor-leerplichtambtenaren/':
    '/trainingen/agressietraining-leerplichtambtenaren-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-over-leerplichtambtenaren/':
    '/trainingen/agressietraining-leerplichtambtenaren-expert/',

  /* ---------- Retail ---------- */
  '/trainingen/agressietraining-filiaalmanagers-teamleiders-retail/':
    '/trainingen/agressietraining-filiaalmanagers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-filiaalmanagers/':
    '/trainingen/agressietraining-filiaalmanagers-gevorderd/',
  '/trainingen/expert-agressietraining-leidinggevenden-expert/':
    '/trainingen/agressietraining-filiaalmanagers-expert/',

  /* ---------- Overheid & handhaving ---------- */
  '/trainingen/agressietraining-voor-medewerkers-bij-de-sociale-dienst-en-uitkeringsinstanties/':
    '/trainingen/agressietraining-sociale-dienst-uitkeringsinstanties-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-bij-de-sociale-dienst-en-uitkeringsinstanties/':
    '/trainingen/agressietraining-sociale-dienst-uitkeringsinstanties-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-de-sociale-dienst-en-uitkeringsinstanties/':
    '/trainingen/agressietraining-sociale-dienst-uitkeringsinstanties-expert/',
  '/trainingen/agressietraining-voor-medewerkers-van-de-sociale-dienst-en-participatiewet/':
    '/trainingen/agressietraining-sociale-dienst-participatiewet-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-van-de-sociale-dienst-en-participatiewet/':
    '/trainingen/agressietraining-sociale-dienst-participatiewet-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-de-sociale-dienst-en-participatiewet/':
    '/trainingen/agressietraining-sociale-dienst-participatiewet-expert/',
  '/trainingen/agressietraining-voor-medewerkers-aan-het-gemeenteloket-en-de-publieksbalie/':
    '/trainingen/agressietraining-gemeenteloket-publieksbalie-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-aan-het-gemeenteloket-en-de-publieksbalie/':
    '/trainingen/agressietraining-gemeenteloket-publieksbalie-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-gemeenten-en-publieke-dienstverlening/':
    '/trainingen/agressietraining-gemeenteloket-publieksbalie-expert/',
  '/trainingen/agressietraining-voor-medewerkers-bij-de-belastingdienst/':
    '/trainingen/agressietraining-belastingdienst-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-bij-de-belastingdienst/':
    '/trainingen/agressietraining-belastingdienst-gevorderd/',
  '/trainingen/expert-agressietraining-voor-medewerkers-bij-de-belastingdienst/':
    '/trainingen/agressietraining-belastingdienst-expert/',
  '/trainingen/agressietraining-voor-handhavers-en-boas/':
    '/trainingen/agressietraining-handhavers-boas-basis/',
  '/trainingen/gevorderde-agressietraining-voor-handhavers-en-boas/':
    '/trainingen/agressietraining-handhavers-boas-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-de-handhaving/':
    '/trainingen/agressietraining-handhavers-boas-expert/',
  '/trainingen/agressietraining-voor-parkeerwachters-en-toezichthouders-in-de-openbare-ruimte/':
    '/trainingen/agressietraining-parkeerwachters-toezichthouders-basis/',
  '/trainingen/gevorderde-agressietraining-voor-parkeerwachters-en-toezichthouders-in-de-openbare-ruimte/':
    '/trainingen/agressietraining-parkeerwachters-toezichthouders-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-over-parkeerwachters-en-toezichthouders-in-de-openbare-ruimte/':
    '/trainingen/agressietraining-parkeerwachters-toezichthouders-expert/',
  '/trainingen/agressietraining-voor-medewerkers-vergunningverlening-en-bezwaar-beroep/':
    '/trainingen/agressietraining-vergunningverlening-bezwaar-beroep-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-vergunningverlening-en-bezwaar-beroep/':
    '/trainingen/agressietraining-vergunningverlening-bezwaar-beroep-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-vergunningverlening-en-bezwaar-beroep/':
    '/trainingen/agressietraining-vergunningverlening-bezwaar-beroep-expert/',

  /* ---------- Financiële dienstverlening ---------- */
  '/trainingen/agressietraining-voor-incasso-en-schuldbehandelaars/':
    '/trainingen/agressietraining-incasso-schuldhulpverlening-basis/',
  '/trainingen/gevorderde-agressietraining-voor-incasso-en-schuldbehandelaars/':
    '/trainingen/agressietraining-incasso-schuldhulpverlening-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-incasso-en-schuldhulpverlening/':
    '/trainingen/agressietraining-incasso-schuldhulpverlening-expert/',
  '/trainingen/agressietraining-voor-verzekeringsmedewerkers/':
    '/trainingen/agressietraining-verzekeringsmedewerkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-verzekeringsmedewerkers/':
    '/trainingen/agressietraining-verzekeringsmedewerkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-de-verzekeringsbranche/':
    '/trainingen/agressietraining-verzekeringsmedewerkers-expert/',
  '/trainingen/agressietraining-voor-hypotheek-en-kredietadviseurs-copy/':
    '/trainingen/agressietraining-hypotheek-kredietadviseurs-basis/',
  '/trainingen/gevorderde-agressietraining-voor-hypotheek-en-kredietadviseurs/':
    '/trainingen/agressietraining-hypotheek-kredietadviseurs-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-hypotheek-en-kredietadvies/':
    '/trainingen/agressietraining-hypotheek-kredietadviseurs-expert/',
  '/trainingen/agressietraining-voor-bankmedewerkers-en-baliepersoneel/':
    '/trainingen/agressietraining-bankmedewerkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-bankmedewerkers-en-baliepersoneel/':
    '/trainingen/agressietraining-bankmedewerkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-de-financiele-dienstverlening-copy/':
    '/trainingen/agressietraining-bankmedewerkers-expert/',

  /* ---------- Openbaar vervoer & transport ---------- */
  '/trainingen/agressietraining-voor-treinpersoneel-conducteurs-en-metro-en-trambestuurders/':
    '/trainingen/agressietraining-treinpersoneel-basis/',
  '/trainingen/gevorderde-agressietraining-voor-treinpersoneel-conducteurs-en-metro-en-trambestuurders/':
    '/trainingen/agressietraining-treinpersoneel-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-het-rail-en-stadsvervoer/':
    '/trainingen/agressietraining-treinpersoneel-expert/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-het-ov/':
    '/trainingen/agressietraining-buschauffeurs-expert/',
  '/trainingen/agressietraining-voor-taxichauffeurs/':
    '/trainingen/agressietraining-taxichauffeurs-basis/',
  '/trainingen/gevorderde-agressietraining-voor-taxichauffeurs/':
    '/trainingen/agressietraining-taxichauffeurs-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-taxibedrijven-en-personenvervoerders/':
    '/trainingen/agressietraining-taxichauffeurs-expert/',
  '/trainingen/agressietraining-voor-bezorgers-in-pakket-en-maaltijdbezorging/':
    '/trainingen/agressietraining-pakket-maaltijdbezorgers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-bezorgers-in-pakket-en-maaltijdbezorging/':
    '/trainingen/agressietraining-pakket-maaltijdbezorgers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-bezorgdiensten/':
    '/trainingen/agressietraining-pakket-maaltijdbezorgers-expert/',

  /* ---------- Horeca, welzijn, sport, bibliotheken ---------- */
  '/trainingen/agressietraining-voor-bediening-gastheren-en-gastvrouwen-in-de-horeca/':
    '/trainingen/agressietraining-horeca-bediening-basis/',
  '/trainingen/gevorderde-agressietraining-voor-bediening-gastheren-en-gastvrouwen-in-de-horeca/':
    '/trainingen/agressietraining-horeca-bediening-gevorderd/',
  '/trainingen/expert-agressietraining-voor-horecamanagers-en-leidinggevenden/':
    '/trainingen/agressietraining-horeca-bediening-expert/',
  '/trainingen/agressietraining-voor-maatschappelijk-werkers/':
    '/trainingen/agressietraining-maatschappelijk-werkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-maatschappelijk-werkers/':
    '/trainingen/agressietraining-maatschappelijk-werkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-het-maatschappelijk-werk/':
    '/trainingen/agressietraining-maatschappelijk-werkers-expert/',
  '/trainingen/agressietraining-voor-medewerkers-in-sportaccommodaties-en-zwembaden/':
    '/trainingen/agressietraining-sportaccommodaties-zwembaden-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-in-sportaccommodaties-en-zwembaden/':
    '/trainingen/agressietraining-sportaccommodaties-zwembaden-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-sportaccommodaties-en-zwembaden/':
    '/trainingen/agressietraining-sportaccommodaties-zwembaden-expert/',
  '/trainingen/agressietraining-voor-bibliotheekmedewerkers-met-een-balie-en-publieksfunctie/':
    '/trainingen/agressietraining-bibliotheekmedewerkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-bibliotheekmedewerkers-met-een-balie-en-publieksfunctie/':
    '/trainingen/agressietraining-bibliotheekmedewerkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-vestigingsmanagers-en-leidinggevenden-in-bibliotheken/':
    '/trainingen/agressietraining-bibliotheekmedewerkers-expert/',

  /* ---------- Woningcorporaties ---------- */
  '/trainingen/agressietraining-voor-buurtbeheerders-en-opzichters-bij-woningcorporaties/':
    '/trainingen/agressietraining-buurtbeheerders-opzichters-basis/',
  '/trainingen/gevorderde-agressietraining-voor-buurtbeheerders-en-opzichters-bij-woningcorporaties/':
    '/trainingen/agressietraining-buurtbeheerders-opzichters-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-over-buurtbeheerders-en-opzichters-bij-woningcorporaties/':
    '/trainingen/agressietraining-buurtbeheerders-opzichters-expert/',
  '/trainingen/agressietraining-voor-medewerkers-klantcontact-en-woonconsulenten-bij-woningcorporaties/':
    '/trainingen/agressietraining-woonconsulenten-klantcontact-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-klantcontact-en-woonconsulenten-bij-woningcorporaties/':
    '/trainingen/agressietraining-woonconsulenten-klantcontact-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-woningcorporaties/':
    '/trainingen/agressietraining-woonconsulenten-klantcontact-expert/',

  /* ---------- Justitiële keten, energie, farmacie, dierenzorg, asiel, uitvaart ---------- */
  '/trainingen/agressietraining-voor-reclasseringsmedewerkers/':
    '/trainingen/agressietraining-reclasseringsmedewerkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-reclasseringsmedewerkers/':
    '/trainingen/agressietraining-reclasseringsmedewerkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-de-reclassering/':
    '/trainingen/agressietraining-reclasseringsmedewerkers-expert/',
  '/trainingen/agressietraining-voor-medewerkers-van-justitiele-jeugdinrichtingen/':
    '/trainingen/agressietraining-justitiele-jeugdinrichtingen-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-van-justitiele-jeugdinrichtingen/':
    '/trainingen/agressietraining-justitiele-jeugdinrichtingen-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-in-justitiele-jeugdinrichtingen/':
    '/trainingen/agressietraining-justitiele-jeugdinrichtingen-expert/',
  '/trainingen/agressietraining-voor-medewerkers-van-energie-en-nutsbedrijven-met-huisbezoeken/':
    '/trainingen/agressietraining-energie-nutsbedrijven-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-van-energie-en-nutsbedrijven-met-huisbezoeken/':
    '/trainingen/agressietraining-energie-nutsbedrijven-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-energie-en-nutsbedrijven/':
    '/trainingen/agressietraining-energie-nutsbedrijven-expert/',
  '/trainingen/agressietraining-voor-apotheekmedewerkers/':
    '/trainingen/agressietraining-apotheekmedewerkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-apotheekmedewerkers/':
    '/trainingen/agressietraining-apotheekmedewerkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-apothekers-en-leidinggevenden-van-apotheken/':
    '/trainingen/agressietraining-apotheekmedewerkers-expert/',
  '/trainingen/agressietraining-voor-dierenartsen-en-medewerkers-van-dierklinieken/':
    '/trainingen/agressietraining-dierenartsen-dierklinieken-basis/',
  '/trainingen/gevorderde-agressietraining-voor-dierenartsen-en-medewerkers-van-dierklinieken/':
    '/trainingen/agressietraining-dierenartsen-dierklinieken-gevorderd/',
  '/trainingen/expert-agressietraining-voor-praktijkhouders-en-leidinggevenden-van-dierklinieken/':
    '/trainingen/agressietraining-dierenartsen-dierklinieken-expert/',
  '/trainingen/agressietraining-voor-medewerkers-van-asielzoekerscentra-en-coa-locaties/':
    '/trainingen/agressietraining-asielopvang-coa-basis/',
  '/trainingen/gevorderde-agressietraining-voor-medewerkers-van-asielzoekerscentra-en-coa-locaties/':
    '/trainingen/agressietraining-asielopvang-coa-gevorderd/',
  '/trainingen/expert-agressietraining-voor-leidinggevenden-bij-asielzoekerscentra-en-coa-locaties/':
    '/trainingen/agressietraining-asielopvang-coa-expert/',
  '/trainingen/agressietraining-voor-uitvaartmedewerkers-en-begrafenisondernemers/':
    '/trainingen/agressietraining-uitvaartmedewerkers-basis/',
  '/trainingen/gevorderde-agressietraining-voor-uitvaartmedewerkers-en-begrafenisondernemers/':
    '/trainingen/agressietraining-uitvaartmedewerkers-gevorderd/',
  '/trainingen/expert-agressietraining-voor-uitvaartondernemers-en-leidinggevenden-in-de-uitvaartbranche/':
    '/trainingen/agressietraining-uitvaartmedewerkers-expert/',

  /* ---------- Kennisbank: opgeschoonde slugs ---------- */
  '/kennisbank/grensoverschrijdend-gedrag-herkennen-en-aanpakken-2/':
    '/kennisbank/grensoverschrijdend-gedrag-herkennen-en-aanpakken/',
  '/kennisbank/omgaan-met-onbegrepen-gedrag-bij-dementie-blog/':
    '/kennisbank/omgaan-met-onbegrepen-gedrag-bij-dementie/',
  '/kennisbank/herken-de-fase-begrijp-het-type-de-agressieladder-en-het-verschil-tussen-frustratie-en-manipulatie/':
    '/kennisbank/de-agressieladder-frustratie-of-manipulatie/',
  '/kennisbank/waarom-niet-de-gebeurtenis-maar-je-gedachte-de-stress-bepaalt-het-g-model/':
    '/kennisbank/het-g-model-je-gedachte-bepaalt-de-stress/',
  '/kennisbank/de-stoplichtmethode-voor-huisbezoeken-wanneer-is-het-rood-oranje-of-groen/':
    '/kennisbank/de-stoplichtmethode-voor-huisbezoeken/',
  '/kennisbank/lsd-in-de-spreekkamer-hoe-je-regie-houdt-als-de-deur-dicht-is/':
    '/kennisbank/lsd-in-de-spreekkamer/',
  '/kennisbank/waarom-een-meld-en-aangiftebeleid-bij-agressie-onmisbaar-is/':
    '/kennisbank/waarom-een-meld-en-aangiftebeleid-onmisbaar-is/',
  '/kennisbank/wanneer-emoties-het-gesprek-overnemen-wat-helpt-jou-om-professioneel-te-blijven/':
    '/kennisbank/wanneer-emoties-het-gesprek-overnemen/',
  '/kennisbank/wat-je-ziet-als-je-aanbelt-signalen-herkennen-bij-onrust/':
    '/kennisbank/wat-je-ziet-als-je-aanbelt/',
  '/kennisbank/de-rekensom-van-onveiligheid-wat-een-incidentje-jouw-organisatie-echt-kost/':
    '/kennisbank/de-rekensom-van-onveiligheid/',
  '/kennisbank/de-stille-bewaker-hoe-je-werkplek-agressie-kan-uitlokken-of-juist-voorkomen/':
    '/kennisbank/de-stille-bewaker-je-werkplek-als-factor/',
  '/kennisbank/de-emotionele-ehbo-koffer-van-je-team-wat-spreek-je-af-voordat-een-gesprek-ontspoort/':
    '/kennisbank/de-emotionele-ehbo-koffer-van-je-team/',
  '/kennisbank/de-digitale-klap-hoe-je-professioneel-blijft-als-de-agressie-via-e-mail-komt/':
    '/kennisbank/de-digitale-klap/',
  '/kennisbank/de-sluipmoordenaar-van-het-team-waarom-roddelen-en-buitensluiten-gevaarlijker-zijn-dan-een-schreeuwende-klant/':
    '/kennisbank/de-sluipmoordenaar-van-het-team/',
  '/kennisbank/de-ramptoerist-met-een-camera-wat-doe-je-als-je-werk-tijdens-een-crisis-wordt-gefilmd/':
    '/kennisbank/gefilmd-worden-tijdens-een-crisis/',
  '/kennisbank/de-stille-sabotage-herkennen-van-en-omgaan-met-de-passief-agressieve-leidinggevende/':
    '/kennisbank/de-stille-sabotage/',
  '/kennisbank/je-hoofd-resetten-hoe-de-matrixmethode-emotionele-lading-neutraliseert/':
    '/kennisbank/de-matrixmethode/',
  '/kennisbank/leren-als-organisatie-ontwikkeling-stopt-niet-na-de-training/':
    '/kennisbank/leren-stopt-niet-na-de-training/',
  '/kennisbank/ethische-keuzes-zonder-protocol-wat-je-doet-als-regels-niet-toereikend-zijn/':
    '/kennisbank/ethische-keuzes-zonder-protocol/',
  '/kennisbank/verantwoord-online-gedrag-hoe-teams-samen-normen-bepalen-voor-communicatie/':
    '/kennisbank/verantwoord-online-gedrag/',

  /* Samengevoegd om te voorkomen dat twee artikelen op dezelfde zoekterm
     concurreren (zie hoofdstuk 3.4 van de projectbrief). */
  '/kennisbank/professioneel-blijven-als-het-gesprek-uit-de-hand-loopt/':
    '/kennisbank/professioneel-blijven-aan-de-lijn/',
  '/kennisbank/wat-sterke-teams-doen-als-het-spannend-wordt/':
    '/kennisbank/hoe-teams-elkaar-sterker-maken-in-lastige-situaties/',
  '/kennisbank/wanneer-beleid-echt-gedragen-wordt-van-document-naar-dagelijks-gedrag/':
    '/kennisbank/waarom-beleid-pas-werkt-als-gedrag-volgt/',

  /* Buiten het domein van Bureau Weerbaar en Veilig: gaat over verzuimpreventie,
     niet over agressie. Hoort bij het brede aanbod van actinmove.nl. */
  '/kennisbank/van-controle-naar-contact/': '/kennisbank/',

  /* ---------- Kennisbank intern: boom vervalt ---------- */
  '/kennisbank_intern/weerbaarheid-op-de-werkvloer/':
    '/kennisbank/weerbaarheid-op-de-werkvloer-een-vaardigheid-die-je-samen-ontwikkelt/',
  '/kennisbank_intern/grensoverschrijdend-gedrag-herkennen/':
    '/kennisbank/grensoverschrijdend-gedrag-herkennen-en-aanpakken/',
  '/kennisbank_intern/opvang-en-nazorg-bieden-2/':
    '/kennisbank/waarom-goede-opvang-en-nazorg-na-een-incident-het-verschil-maakt/',
  '/kennisbank_intern/omgaan-met-telefonische-agressie-2/': '/kennisbank/professioneel-blijven-aan-de-lijn/',
  '/kennisbank_intern/omgaan-met-telefonische-agressie-professioneel-rustig-en-met-regie-reageren/':
    '/kennisbank/professioneel-blijven-aan-de-lijn/',
  '/kennisbank_intern/telefonische-agressie-training/': '/kennisbank/professioneel-blijven-aan-de-lijn/',
  '/kennisbank_intern/omgaan-met-verward-gedrag-bij-middelengebruik-2/':
    '/kennisbank/werken-met-mensen-onder-invloed/',
  '/kennisbank_intern/omgaan-met-onbegrepen-gedrag-bij-dementie-2/':
    '/kennisbank/omgaan-met-onbegrepen-gedrag-bij-dementie/',
  '/kennisbank_intern/veilig-huisbezoek-2/': '/kennisbank/de-stoplichtmethode-voor-huisbezoeken/',
  '/kennisbank_intern/ait-basistraining-stevig-samenwerken/':
    '/kennisbank/het-belang-van-een-agressie-interventie-team/',
  '/kennisbank_intern/sociale-veiligheid-op-de-werkvloer-2/': '/kennisbank/',
  '/kennisbank_intern/omgaan-met-fysieke-agressie-2/': '/kennisbank/',
  '/kennisbank_intern/generatieverschillen-op-de-werkvloer/': '/kennisbank/',
  '/kennisbank_intern/hospitality-training-2/': '/kennisbank/',
  '/kennisbank_intern/mediationvaardigheden-conflicten-oplossen/': '/kennisbank/',
  '/kennisbank_intern/grip-op-gedoe-2/': '/kennisbank/',
  '/kennisbank_intern/verzuimpreventie-en-inzetbaarheidsgesprekken/': '/kennisbank/',
  '/kennisbank_intern/overtuigend-presenteren-met-rust/': '/kennisbank/',
  '/kennisbank_intern/praktisch-leiderschap-sturen-met-rust-richting-en-resultaat/': '/kennisbank/',
  '/kennisbank_intern/lastige-gesprekken-voeren-2/': '/kennisbank/',
  '/kennisbank_intern/grip-op-stress-en-werkdruk-2/': '/kennisbank/',
  '/kennisbank_intern/feedback-training-2/': '/kennisbank/',
  '/kennisbank_intern/effectief-communiceren-2/': '/kennisbank/',
  '/kennisbank_intern/assertiviteitstraining-met-rust-en-duidelijkheid/': '/kennisbank/',
  '/kennisbank_intern/supermarkt-safari-gezonder-kiezen/': '/kennisbank/',
  '/kennisbank_intern/ontspannen-in-10-minuten/': '/kennisbank/',
  '/kennisbank_intern/ademhaling-en-rust/': '/kennisbank/',
  '/kennisbank_intern/mindfulness-op-het-werk/': '/kennisbank/',

  /* ---------- Teampagina's worden een sectie op /over-ons/ ---------- */
  '/team/jeroen-woesthuis/': '/over-ons/#team',
  '/team/cindy-woesthuis/': '/over-ons/#team',
  '/team/youri-woesthuis/': '/over-ons/#team',
  '/team/constant-cornelissen/': '/over-ons/#team',
  '/team/lucien-ost/': '/over-ons/#team',
  '/team/koen-van-weerden/': '/over-ons/#team',
  '/team/marieke-van-leeuwen/': '/over-ons/#team',
  '/team/sandra-den-dulk/': '/over-ons/#team',
};
