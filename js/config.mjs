import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Pieter Hering",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Pieter Hering"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Identificatie-en-Authenticatie",
  previousPublishDate: "2023-06-15",
  previousPublishVersion: "1.4.4",
  pubDomain: "dk",
  publishDate: "2025-05-15",
  publishVersion: "1.5.0",
  shortName: "idauth",
  specStatus: "DEF",
  specType: "ST"
});
