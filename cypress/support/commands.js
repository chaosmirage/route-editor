import selectors from '../support/selectors';

const {
  addPointButtonSelector,
  pointNameInputSelector,
  pointsListItemSelector,
  deletePointButtonSelector,
} = selectors;

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('addItemToPointsList', (name) => {
  cy
    .get(pointNameInputSelector())
    .type(name)
    .should('have.value', name)
    .get(addPointButtonSelector())
    .click();
});

Cypress.Commands.add('pointsListContainsPoint', (name, id) => {
  cy
    .get(pointsListItemSelector(id))
    .contains(name);
});

Cypress.Commands.add('deletePoint', (id) => {
  cy
      .get(deletePointButtonSelector(id))
      .click();
});

Cypress.Commands.add('pointsListDoesNotContainPoint', (id) => {
  cy.get(pointsListItemSelector(id)).should('not.exist');
});
