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

![Overzicht van de onderdelen van de Digikoppeling Standaard, de standaard is onderverdeeld in normatieve en ondersteunende onderdelen](media/DK_Specificatie_structuur.svg "Opbouw documentatie Digikoppeling")
(Zie voor een tekstuele toelichting [Digikoppeling Standaard](https://publicatie.centrumvoorstandaarden.nl#Digikoppeling_structuur)


<details>
    <summary> Tekstalternatief </summary>
<ul>
	<li>Digikoppeling Standaard
		<ul>
			<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/beheer/">DK Beheermodel en releasebeleid</a>* </li>
			<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/actueel/">DK Overzicht Actuele Documentatie en Compliance</a>* </li>
			<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/architectuur">DK Architectuur</a>*
				<ul>
					<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/idauth/">DK Identificatie en Authenticatie</a>*
						<ul>
							<li><i> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/gbachtcert/">Digikoppeling Gebruik en Achtergronden Certificaten</a></i>† </li>
						</ul>
					</li>
					<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/beveilig/">DK Beveiligingsstandaarden en voorschriften</a>* </li>
					<li>Koppelvlakstandaarden
						<ul>
							<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/wus/">DK Koppelvlakstandaard WUS</a>*
								<ul>
									<li><i><a href="https://publicatie.centrumvoorstandaarden.nl/dk/bpwus">Best-practice WUS</a></i>† </li>
								</ul>
							</li>
							<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/ebms/">DK Koppelvlakstandaard ebMS2</a>*
								<ul>
									<li> <i><a href="https://publicatie.centrumvoorstandaarden.nl/dk/bpebms">Best-practice ebMS2</a></i>† </li>
								</ul>
							</li>
							<li> <a href="https://publicatie.centrumvoorstandaarden.nl/dk/gb/">DK Koppelvlakstandaard Grote Berichten</a>*
								<ul>
									<li> <i><a href="https://publicatie.centrumvoorstandaarden.nl/dk/bpgb">Best-practice Grote Berichten</a></i>†</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
    <i><a href="https://publicatie.centrumvoorstandaarden.nl/dk/watisdk/">Wat is Digikoppeling</a></i>†
  </li>
		</ul>
	</li>
</ul>
<p>* Normatief document</p>
<p>† Ondersteunend document</p>
</details>
