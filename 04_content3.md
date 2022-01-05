# Kernbegrippen

Voor Kernbegrippen- zie ook voetnoten -<sup>2</sup>

<sup>2</sup>: Er circuleren vele tekstvarianten voor de definities; de kern is in het
    algemeen gelijk.

## Identificatie

Identificatie is het kenbaar maken van de identiteit van een subject<sup>3</sup> (een
persoon/gebruiker of een proces/systeem). De identiteit wordt gebruikt om de
autorisatie (zie verder) - de toegang tot een service - te beheersen.

<sup>3</sup>: Voor terminologie wordt aangesloten bij de OASIS standaarden, o.a. SAML:
    'Subject: A principal in the context of a security domain. SAML assertions
    make declarations about subjects'. De term subject wordt ook gehanteerd in
    de PKI-wereld, X509.

## Authenticatie

Authenticatie is als volgt gedefinieerd:

Authenticatie is het proces waarbij nagegaan wordt of een subject daadwerkelijk
is wie hij beweert te zijn, dat wil zeggen: daadwerkelijk de identiteit bezit
die hij opgeeft.

Bij de authenticatie wordt bijv. gecontroleerd of een opgegeven bewijs van
identiteit overeenkomt met echtheidskenmerken<sup>4</sup> <sup>5</sup>. Het proces van
authenticatie is dus onlosmakelijk verbonden met identiteit.

<sup>4</sup>: Voor authenticatie wordt daarom ook wel de term verificatie gehanteerd.

<sup>5</sup>: De definitie van authenticatie in de NORA gaat meer in op het aspect hoe
    authenticatie wordt uitgevoerd dan op wat het is. Daarom wordt die definitie
    hier niet overgenomen.

Authenticatie levert als het ware de kwaliteit van de identificatie. Tevens
speelt hier een 'chain of trust'. Als een paspoort beschikt over de
echtheidskenmerken (en het is niet gestolen of verlopen) dan mag men op de
inhoud vertrouwen. Hetzelfde geldt voor een PKIoverheid certificaat. Als het
'root' certificaat te vertrouwen is (en het certificaat is niet ingetrokken of
verlopen) dan mag men op de inhoud vertrouwen.

## Autorisatie

Autorisatie is het proces waarin een subject rechten krijgt op het benaderen van
een service. De autorisatie wordt toegekend door de service-eigenaar. Het
leidende principe (met name bij persoonsgegevens) is doelbinding: je mag alleen
zien wat je voor je taak nodig hebt.

De primaire reden voor het vaststellen van de identiteit van een subject is om
op basis daarvan vervolgens vast te stellen of dat subject ook gerechtigd is om
de gewenste service af te nemen. Die autorisatie (al of niet mede op basis van
rollen, machtigingen, vertegenwoordigingen enzovoort) is nadrukkelijk een op de
authenticatie volgende, aparte stap. De geauthenticeerde identiteit is dus nodig
om autorisatie te kunnen doen. Autorisatie stelt eisen aan authenticatie.

## Niveau van identiteit

Vooral het niveau van de identiteit is van belang . Het gaat dan om de vraag of
het niveau 'organisatie' voldoende is of dat het meer gedetailleerde niveau
'medewerker binnen een organisatie' noodzakelijk is.

## Vastlegging, audittrail

Met vastlegging wordt hier bedoeld het vastleggen (loggen, bijvoorbeeld in een
audittrail) van het resultaat van authenticatie en autorisatie. De eisen die
daaraan gesteld worden, zijn belangrijk. Moet jaren later nog voor de rechter
bewezen kunnen worden dat dit subject op dit tijdstip een specifieke service
vraag gesteld heeft, of wordt alleen vastgelegd ten behoeve van latere
statistische bewerkingen.

De eisen die gesteld worden aan vastlegging, zijn weliswaar belangrijk, maar ze
hebben met name betrekking op zaken als traceerbaarheid van authenticatie; heeft
authenticatie wel plaatsgevonden en hoe dan wel enzovoort Ze hoeven geen rol te
spelen bij de bepaling van de gewenste (niveau van) identiteit.

Dat kan anders zijn als de eisen aan niveau van zowel autorisatie als
vastlegging verschillen. Dat zou het geval kunnen zijn als er regels gelden
zoals: 'iedere medewerker van een geautoriseerde partij heeft toegang, maar er
moet wel onweerlegbaar worden vastgelegd welke medewerker het betrof'
(autorisatie op niveau van partij, vastlegging op niveau van medewerker). De
eisen vanuit de behoefte aan autorisatie en de noodzakelijke vastlegging voor
bewijs achteraf kunnen dus verschillen.

