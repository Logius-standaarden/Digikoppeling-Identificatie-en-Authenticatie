# Bijlage 1: Nummersystematiek OIN en HRN

## OIN formaat, als thans in gebruik voor (Overheids)organisaties

Het basisformaat van het OIN - Organisatie Identificatie Nummer- is:

>   \<prefix\>\<nummer\>\<suffix\>

Voor het nummer maakt Logius voor overheidsorganisaties primair gebruik van het
Rechtspersonen en Samenwerkingsverbanden Identificatie Nummer (RSIN) uit het HR.
In die gevallen waar een overheidsorganisatie geen RSIN heeft, kan worden
uitgeweken naar alternatieven. Het RSIN is inhoudelijk gelijk aan het
Fiscaal(Fi)-nummer.

Om rekening te houden met een andere systematiek in de toekomst is de lengte van
het prefixveld bepaald op 8 posities.

De prefix definieert welk soort nummer volgt.

De waarde van het OIN in het OIN Register en in het veld subject.serialNumber is
inclusief de prefix en suffix en daarbij behorende voorloopnullen. Door het
gehele nummer te gebruiken wordt zeker gesteld dat het nummer uniek is.

| Prefix   | Identificerend nummer                   | Bron                                                                                                                                                       |
|---|---|---|
| **00000001** | RSIN                                    | Handelsregister                                                                                                                                            |
| **00000002** | Fi-nummer                               | Het fiscaal nummer wordt verstrekt door de Belastingdienst aan de organisatie zelf<sup>10</sup> (alleen voor organisaties die niet in het Handelsregister staan).  |
| **00000003** | KvK nummer                              | Handelsregister<sup>11</sup>                                                                                                                                       |
| **00000004** | subnummer                               | subOIN register                                                                                                                                            |
| **00000005** | Onderdelen van de Staat der Nederlanden | nog aan te wijzen                                                                                                                                          |
| **00000006** | Onderdelen van het Rijk                 | nog aan te wijzen                                                                                                                                          |
| **00000007** | BRIN nummer                             | De Basisregistratie Instellingen (BRIN) is een register van onderwijsinstellingen dat door DUO wordt beheerd in opdracht van het Ministerie van OCW.       |
|**00000008** | Buitenlandse nummers                    | Buitenlandse nummers                                                                                                                                       |
| **00000009** | UZI-nummer| Het Unieke Zorgverlener Identificatie Register (UZI-register) is de organisatie die de unieke identificatie van zorgaanbieders en indicatieorganen in het elektronisch verkeer mogelijk maakt.|
| **00000099** | Test OIN’s                              | Elke organisatie mag een test OIN gebruiken mits voorzien van deze prefix.                                                                                 |

<sup>10</sup>: In uitzonderlijke gevallen kan het Fi-nummer worden gebruikt indien
    verstrekt door de organisatie zelf. Dit is b.v. het geval bij onderdelen van
    de Staat der Nederlanden die niet ingeschreven in het Handelsregister zoals
    de Tweede Kamer der Staten-Generaal of de Algemene Rekenkamer.

<sup>11</sup>: Het KvK nummer mag worden gebruikt door private partijen in de communicatie
    met de overheid.

- Het RSIN wordt opgegeven door de aanvrager en bij het HR gecontroleerd door
    Logius..

- Het KvK-nummer kan in het Handelsregister van de KvK na opgave door de
    aanvrager gecontroleerd worden door Logius.

Voorbeelden:

OIN o.b.v. RSIN: 00000001123456789000

OIN o.b.v. Logius-beheerder: 00000004123456789000

Het gehele nummer wordt opgenomen in het certificaat (subject.serialNumber). Dat
gehele nummer geldt dus als OIN.

## HRN formaat, te gebruiken voor Bedrijven

De opbouw van het HRN (Handels Register Nummer) is identiek aan het OIN:

>   \<prefix\>\<nummer\>\<suffix\>

Voor het HRN worden tot nog toe alleen onderstaande mogelijkheden onderkend.

| **Prefix**           | **Nummer**                      | **Suffix**                     |
|---|---|---|
| **00000001**             | RSIN uit HR (9 posities)        | “000”                          |
| **00000003**             | KvK nummer uit NHR (8 posities) | Volgnummer “0000” (4 posities) |
| **00000002** en **00000004** | Niet gebruikt.                  |                                |
| vanaf **00000005**       | Niet gebruikt.                  |                                |

In de HRN-variant worden de nummers vastgesteld door de TSP, op basis van het
door de aanvrager opgegeven KvK-nummer, dat door de TSP wordt gecontroleerd.
