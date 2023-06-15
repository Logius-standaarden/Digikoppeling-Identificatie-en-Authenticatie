# Gewenst niveau van identiteit

Het gewenste niveau van de identiteit wordt in dit hoofdstuk eerst bepaald aan
de hand van de eisen vanuit autorisatie, en daarna vanuit vastlegging.

## Autorisatie

In de Service Gerichte benadering van de NORA maken applicaties van de ene
organisatie gebruik van services van een andere organisatie. Een service mag
alleen afgenomen worden door geautoriseerde afnemers, namelijk die afnemers die
een juridische basis<sup>6</sup> of een overeenkomst hebben met de aanbieder van de
betreffende service.

<sup>6</sup>: De terminologie moet nog juridisch correct gemaakt worden; in deze notitie
    wordt (juridisch) wat losjes gesproken over 'zelfstandig bevoegd',
    'juridische basis' enzovoort.

Afnemers in de overheid kennen vele organisatorische 'niveaus' met diverse
juridische statussen: gemeentelijke diensten, departementale directoraten,
agentschappen, ZBO’s etc., al dan niet zijnde rechtspersonen. De vraag is dus
welk niveau, en dus welke identiteit, gebruikt zou moeten worden.

Het ligt voor de hand om hier uit te gaan van de organisatie(onderdeel), dat
kennelijk zelfstandig bevoegd is (bijv. op basis van een besluit of mandaat) dan
wel een juridische basis heeft. Een dergelijke vastlegging tussen aanbieder en
afnemer noemen we hierna een overeenkomst.

Uitgangspunt is:

- de identiteit van de afnemer die gebruikt wordt voor autorisatie tot het
    afnemen van een service, moet overeenkomen met de identiteit van de
    organisatie(onderdeel) waarmee een overeenkomst bestaat tot het gebruik van
    de service. Authenticatie en vervolgens autorisatie vinden daarom in eerste
    instantie plaats op het niveau van de identiteit die is gebruikt bij de
    overeenkomst.

De vraag is of dat niveau het juiste niveau is voor autorisatie of dat er nog
verfijning nodig is. Een serviceaanbieder kan theoretisch op verschillende
manieren de autorisatie en de daarvoor benodigde identificatie inrichten. De
aanbieder zou bijvoorbeeld kunnen stellen, dat medewerker X van
afnemersorganisatie A een service wel mag afnemen en medewerker Y van diezelfde
organisatie niet.

Er bestaat brede consensus (ook in andere landen), dat dit ongewenst is.
Enerzijds is namelijk de afnemende organisatie verantwoordelijk voor eigen
informatiebeveiliging, dus voor het op de juiste wijze autoriseren van de eigen
medewerkers. Anderzijds wordt de organisatie die de service aanbiedt dan niet
met medewerkers van een ander geconfronteerd en om dezelfde reden ook niet met
'afdelingen' of informatiesystemen van die organisatie. Het is gewenst is om
alleen maar te autoriseren op het niveau van een organisatie.

Als dat het autorisatieprincipe is, dan stelt dat als eis aan de identificatie,
dat alleen de identiteit van de afnemerorganisatie vastgesteld (geauthenticeerd)
hoeft te worden.

## Voorstel voor principe

1. Autorisatie tot afnemen van een service vindt plaats op basis van de identiteit van de zelfstandig bevoegde afnemerorganisatie, dat wil zeggen: op het niveau van de overheidsorganisatie waarop de juridische afspraak gemaakt is.
1. Autorisatie en authenticatie gebeurt bij de serviceaanbieder niet op een verder gedetailleerd niveau, zoals medewerker, afdeling, applicatie of wettelijke taak.

### Gevolg voor verantwoordelijkheden

Consequentie is, dat afnemende organisaties verantwoordelijk zijn voor de eigen
interne autorisaties (met betrekking tot medewerkers, afdelingen, taken
enzovoort), bijbehorende maatregelen moeten treffen en daar controleerbaar
verantwoording over moeten afleggen.

Alle overheidsorganisaties hebben al een dergelijke verplichting in het kader
van persoonsgegevens, in relatie tot de Algemene Verordening Gegevensbescherming (AVG).

Een belangrijk deel van de verantwoordelijkheid voor informatiebeveiliging komt
te liggen bij de afnemerorganisatie. Die dient ervoor zorg te dragen, dat
servicerequests alleen kunnen worden gedaan door daartoe bevoegde medewerkers en
daartoe bevoegde applicaties/systemen. Ook dit is feitelijk bezien vanuit WBP en
andere privacy/beveiligingskaders geen nieuwe eis.

### Beoogd resultaat

Met dit voorstel bereiken we, dat er uniformiteit ontstaat bij het afnemen van
services. Afgezien van de spreekwoordelijke uitzonderingen zal er duidelijkheid
en eenduidigheid ontstaan over welke overheidsorganisaties 'bestaan' in de
e-overheid.

De onderlinge verantwoordelijkheden worden hiermee scherper. Organisaties die
services aanbieden, hebben allemaal te maken met dezelfde afspraken met
organisaties die services afnemen. Een afnemende organisatie hoeft niet de ene
keer wel (een bewijs van) de identiteit van een medewerker mee te leveren om
geautoriseerd te kunnen worden voor een bepaalde service en de andere keer niet.

### Voorbeelden

Voorbeelden van zelfstandig bevoegde organisaties volgens bovenstaande
uitgangspunten zijn:

- Individuele gemeenten, provincies, waterschappen enzovoort.

- Uitvoeringsorganisaties, ZBO's.

- Agentschappen als RW en Logius

- Voorzieningen als MijnOverheid (met een bijzonder status volgens AmvB<sup>7</sup>).

- Organisaties als BKWI.

<sup>7</sup>: Algemene Maatregel van Bestuur

## Vastlegging

Ongeacht het voorgaande is het mogelijk, dat aan de afnemende organisatie
strengere eisen gesteld worden aan het vastleggen van het gebruik van gegevens.

Ook de WBP formuleert, in het kader van verstrekking aan derden en informeren
van betrokkene, de eisen op het niveau van verantwoordelijke dat wil zeggen de
rechtspersoon. Aangezien het hier een juridische omgeving betreft en de WBP
expliciet open geformuleerd is, dient dit in voorkomende gevallen verder
juridisch uitgezocht te worden.

Uitgangspunt in dit document is dat – in termen van de WBP - bij verstrekking
alleen de ontvangende verantwoordelijke relevant is en niet de kring van
«personen die onder rechtstreeks gezag van de verantwoordelijke gemachtigd zijn
om gegevens te verwerken». Personen lijken dus niet relevant, wel
verantwoordelijken in de zin van de WBP.

Een praktisch argument om niet de gegevens van medewerkers van de afnemer vast
te leggen bij de aanbieder is, dat overheidsorganisaties vaak een dossier of
zaak behandelen, waarbij diverse medewerkers van de betreffende organisatie
betrokken zijn. De aanbiedende organisatie kan hooguit zicht houden op de
toevallige eerste medewerker die informatie opvraagt, maar niet op alle volgende
medewerkers. Dat geldt zeker wanneer dat dossier actueel gehouden wordt door
(een mechanisme van) abonnementen.

De bovenstaande redenatie voor medewerkers is ook geldig voor andere
onderverdelingen, zoals medewerker afdeling, systeem, enzovoort bij de
(zelfstandig bevoegde) afnemer.

Conclusie:

| De vastlegging van de gebeurtenis van afnemen gebeurt door de aanbieder op het niveau van afnemerorganisatie. Het is niet nodig en niet gewenst om dat te doen op een niveau binnen die afnemer zoals medewerker afdeling, systeem of wettelijke taak. |
|---|

Gevolg van dit uitgangspunt is, dat een verantwoordelijke alleen maar inzage kan
geven in de organisaties aan wie gegevens zijn verstrekt. Die andere organisatie
moet dan vervolgens inzicht kunnen geven welke medewerkers (en welke andere
organisaties, indien van toepassing) de informatie hebben opgevraagd.

Iets heel anders is, dat er onderling kan worden afgesproken dat een naam van
een medewerker wordt meegegeven als onderdeel van de via de service
uitgewisselde informatie, zodat men daarmee contact kan opnemen bij verdere
vragen (vergelijk 'behandeld door').

### Beoogd resultaat

Met dit voorstel bereiken we dat de uniformiteit, die ontstaat door vanuit de
autorisatie, blijft bestaan als ook de vastlegging wordt meegenomen.

Als niet gekozen zou worden voor de vastlegging op niveau van organisatie, dan
kan een diversiteit ontstaan bij gebruik van services. Bepaalde
serviceaanbieders zouden dan kunnen gaan eisen, dat identiteitsbewijzen worden
meegeleverd bij een serviceaanvraag. Door een dergelijke eis van een bepaalde
serviceaanbieder zou een serviceafnemer gedwongen kunnen worden om extern
verifieerbare identiteitsbewijzen te kunnen leveren.

## Intermediair en koppelpunt

Een bijzondere situatie ontstaat wanneer er sprake is van een intermediaire
organisatie. Deze situatie komt tussen overheidsorganisaties het meest voor aan
de rand van een sector. Partijen in de sector communiceren via een sector
koppelpunt met de wereld buiten de sector. Zie hierover NORA paragraaf 6.5:

Koppelpunten versus aanspreekpunten

Voor de koppeling tussen servicebussen kan gekozen worden tussen twee niveaus:

- een puur logistieke koppeling, dat wil zeggen: een overslagpunt waarin
    verkeer over de ene bus naar de andere wordt overgebracht door middel van
    koppelpunten, zonder interpretatie van de gegevensinhoud;

- een inhoudelijke koppeling, dat wil zeggen: een keten, sector- of
    domeinloket of –aanspreekpunt, dat de interne complexiteit van de keten, de
    sector of het domein voor de buitenwereld afschermt.

De belangrijkste factor in dit onderscheid zit niet op de eerste plaats in het
technische of functionele. Veel belangrijker is dat er in geval van een
inhoudelijke koppeling een echte overheidsorganisatie (of wellicht privaat
publieke organisatie) moet worden aangewezen of gecreëerd die de bedoelde
inhoudelijke diensten ook feitelijk namens de keten, de sector of het domein kan
aanbieden of afnemen en daarvoor inhoudelijk verantwoordelijk gehouden kan
worden, op basis van en/of passend in toepasselijke wetgeving. Anders gezegd,
hier is sprake van inhoudelijke intermediatie. Denk hierbij bijvoorbeeld aan:

- een virtueel ketendossier dat via één loket voor afnemers buiten de keten
    wordt ontsloten

- het sectorloket voor het onderwijsveld, ondergebracht bij de IB-Groep

- het BKWI dat namens het werk- en inkomensveld bevragingen doet bij de RDW
    e.a.

Aanspreekpunten kunnen beide kanten op werken: zij kunnen services namens de
hele sector, keten of domein aanbieden aan 'externe partijen', maar zij kunnen
ook, namens de gehele sector, keten of domein diensten afnemen van buiten.

Een inhoudelijke koppeling is niet mogelijk zonder een logistieke koppeling.
Andersom kan wel: een logistieke koppeling zonder een inhoudelijk aanspreekpunt.
In dat geval is er alleen sprake van een logistieke 'brug' naar de sector,
zonder dat de keten, de sector of het domein als geheel is aan te spreken of
handelt. Mengvormen zijn ook mogelijk, waarin de sector, het domein of de keten
voor bepaalde services als geheel optreedt en voor andere niet.

### Identiteit, authenticatie en vastlegging bij koppelpunten

In het onderlijnde gedeelte van bovenstaande NORA tekst is al aangegeven, dat in
de variant van de inhoudelijke koppeling een echte overheidsorganisatie moet
bestaan die verantwoordelijk kan worden gehouden. Voorgesteld wordt om die
variant van de inhoudelijke koppeling in deze notitie als intermediair te
benoemen. In dat geval wordt de intermediaire organisatie op basis van de
toepasselijke wetgeving (dus weer 'zelfstandig bevoegd') als serviceafnemer
beschouwd, die geauthenticeerd en geautoriseerd moet worden. Voor de
serviceaanbieder is dat gelijk aan het aanbieden van een service aan een
'gewone' organisatie. Er dient dan ook alleen vastgelegd te worden, dat de
intermediair de service heeft afgenomen. Het formeel vastleggen, dat een
achterliggende partij eigenlijk de service wil afnemen, gebeurt dan niet bij de
uiteindelijke service verlener, maar natuurlijk wel bij de intermediair. Ook de
vastlegging gebeurt bij de serviceaanbieder (net als bij een normale afnemer).

In het geval van een logistiek koppelpunt heeft de aanbieder feitelijk te maken
met de identiteit van de achterliggende afnemer. Het logistieke koppelpunt wordt
niet gezien. Bij de vastlegging is het de vraag of het noodzakelijk is te weten
of de serviceaanvraag via het logistieke koppelpunt tot stand kwam.

Als we consequent de redenatie volgen zoals in § 4.3 - is beschreven, dan is het
niet nodig om het logistieke koppelpunt in de vastlegging mee te nemen.
Uiteraard kan dat alleen als er voldoende waarborgen en afspraken (bijvoorbeeld
bewerkerovereenkomst<sup>8</sup>) zijn.

<sup>8</sup>: Andere vormen van bewerkers, die ten behoeve van een verantwoordelijke (in
    de zin van de WBP) gegevens verwerken, laten we hier vooralsnog buiten
    beschouwing. De hoofdlijn is ook daar dat er voor de identiteit uitgegaan
    wordt van de 'zelfstandig bevoegde', dus de verantwoordelijke.

De criteria die bepalen wanneer een intermediair als inhoudelijk koppelpunt
beschouwd wordt en wanneer als een puur logistiek koppelpunt, moeten nog worden
aangescherpt.

