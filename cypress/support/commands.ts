/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    fillForm(email: string): Chainable<Subject>;
  }
}

function getRandomName() {
  const names = ["John Doe", "Jane Doe", "Alice", "Bob", "Charlie"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomDepartment() {
  const names = ["marketing", "IT", "sales", "management", "accounting"];
  return names[Math.floor(Math.random() * names.length)];
}

Cypress.Commands.add("fillForm", (email) => {
  cy.get('input[name="visitor"]').type(getRandomName());
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="isAgreementChecked"]').check();
  cy.get("#department-select").click();
  cy.get(`li[data-value=${getRandomDepartment()}]`).click();
});
