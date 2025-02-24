# Inleiding

Dit document beschrijft de uitgangspunten en principes voor identificatie- en
authenticatieafspraken die gehanteerd worden tussen overheidsorganisaties bij
gebruik van Digikoppeling.

Digikoppeling maakt het mogelijk voor overheidsorganisaties om op een
gestandaardiseerde wijze gebruik te maken van elkaars services, conform de NORA
(Nederlandse Overheids Referentie Architectuur).

In de e-overheid gaat het over geautomatiseerde systemen van die organisaties
die services aanbieden en afnemen dus over zogeheten system-to-system verkeer.

Conform de NORA moet eerst duidelijkheid bestaan over de bedrijfs- en
informatiearchitectuur voor dit onderwerp. Daarvan afgeleid komt pas de
technische architectuur. Die architectuuraspecten van identificatie en
authenticatie richten zich op drie verschillende onderwerpen, die in separate
documenten worden beschreven:

- Welke identiteit is gewenst en waarom (bedrijfs- en informatiearchitectuur)
    \- dat wordt in dit document beschreven.

- Wat betekent die benadering van identiteit voor het authenticatiemiddel in
    combinatie met PKIoverheid certificaten (informatie- en technische
    architectuur).

- Hoe wordt authenticatie ondersteund op Digikoppeling, dat wil zeggen: hoe
    wordt met dat middel omgegaan (technische architectuur).

## Doelgroep van dit document

Onderstaande tabel geeft de doelgroep van dit document weer.

| Afkorting | Rol                             | Taak                                                                                                       | Doelgroep? |
|---|---|---|---|
| [MT]      | Management                      | Bevoegdheid om namens organisatie (strategische) besluiten te nemen.                                       | **Nee**    |
| [PL]      | Projectleiding                  | Verzorgen van de aansturing van projecten.                                                                 | **Nee**    |
| [A&D]     | Analyseren & ontwerpen (design) | Analyseren en ontwerpen van oplossings-richtingen. Het verbinden van Business aan de IT.                   | **Ja**     |
| [OT&B]    | Ontwikkelen, testen en beheer   | Ontwikkelt, bouwt en configureert de techniek conform specificaties. Zorgen voor beheer na ingebruikname.  | **Ja**     |

## Leeswijzer

Dit document gaat over de bedrijfsarchitectuur op landelijk niveau, en specifiek
over de identificatie en authenticatie van organisaties. Eerst beschrijven we de
probleemstelling in hoofdstuk 2. De kernbegrippen staan gedefinieerd in
hoofdstuk 3. In hoofdstuk 4 analyseren we het gewenste niveau van de identiteit
voor overheidsorganisaties, uitmondend in een architectuurprincipe. Hoofdstuk 5
gaat in op de vraag hoe de (nummer)identiteit vorm krijgt.

## Digikoppeling standaarden

Dit document is een onderdeel van de Digikoppeling standaarden:

<figure>
  <object data="https://logius-standaarden.github.io/publicatie/dk/actueel/media/DK_Specificatie_structuur.svg" type="image/svg+xml" id="infographic">Overzicht van de onderdelen van de Digikoppeling Standaard, de standaard is onderverdeeld in normatieve en ondersteunende onderdelen</object>
  <figcaption>Opbouw documentatie Digikoppeling</figcaption>
</figure>

<b>Legenda</b>


<table class="legendum">
    <thead>
        <tr>
            <th><strong>Kleur</strong></th>
            <th><strong>Soort Document</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="green">Groen</td>
            <td>Standaard documentatie</td>
        </tr>
        <tr>
            <td class="grey">Grijs</td>
            <td>Ondersteunende documentatie</td>
        </tr>
    </tbody>
</table>


<b>Beheer</b>

- De standaarddocumenten (groen/vierkant aangegeven) vallen onder het beheer zoals geformaliseerd in het document [[[?DK-Beheermodel]]].

- De ondersteunende documentatie wordt onderhouden door Logius als de beheerder van de standaard (en afgestemd met stakeholders/ gebruikers).

- Alle goedgekeurde documenten zijn te vinden op de website van Logius, [www.logius.nl](https://www.logius.nl/onze-dienstverlening/domeinen/gegevensuitwisseling/digikoppeling).
