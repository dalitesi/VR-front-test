Cypress.Commands.add("visitHome", function () {
  cy.visit("https://www.vr.com.br/");
  cy.get("#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm").click();
});

Cypress.Commands.add("topMenu", () => {
  cy.get(".vr-main-navigation__menu");
});

Cypress.Commands.add("scrollPage", (up, down) => {
  cy.scrollTo(up, down);
});

Cypress.Commands.add("mapSection", () => {
  cy.get("#mapSection");
});

Cypress.Commands.add("validMap", () => {
  cy.get("#mapa_pagina");
});

Cypress.Commands.add("botãoMeuCartão", () => {
  cy.contains("Onde usar o meu cartão");
});
