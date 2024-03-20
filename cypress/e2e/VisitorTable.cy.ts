import { domain } from "./domainUrl";

const TOMS_EMAIL = "tom@example.com";
const PETERS_EMAIL = "peter@example.com";
const JOHNS_EMAIL = "martin@example.com";

function addThreeVisitors() {
  cy.fillForm(JOHNS_EMAIL);
  cy.get('[data-testid="add-visitor-button"]').click();
  cy.fillForm(TOMS_EMAIL);
  cy.get('[data-testid="add-visitor-button"]').click();
  cy.fillForm(PETERS_EMAIL);
  cy.get('[data-testid="add-visitor-button"]').click();
}

// Tests
describe("On checking one visitors out of 3 and pressing REMOVE SELECTED button", () => {
  beforeEach(() => {
    cy.visit(domain);
    addThreeVisitors();
    cy.get('[data-testid="visitors-table"]').should("contain", TOMS_EMAIL);
    cy.get(`[data-testid="visitor-checkbox-${TOMS_EMAIL}"]`).check();
    cy.get('[data-testid="remove-selected-button"]').click();
  });
  it("Should delete the correct visitors", () => {
    cy.get('[data-testid="visitors-table"]').should("not.contain", TOMS_EMAIL);
  });
});

describe("On checking 2 visitors out of 3", () => {
  beforeEach(() => {
    cy.visit(domain);
    addThreeVisitors();
    cy.get('[data-testid="visitors-table"]').should("contain", TOMS_EMAIL);
    cy.get('[data-testid="visitors-table"]').should("contain", PETERS_EMAIL);
    cy.get('[data-testid="visitors-table"]').should("contain", JOHNS_EMAIL);
    cy.get(`[data-testid="visitor-checkbox-${TOMS_EMAIL}"]`).check();
    cy.get(`[data-testid="visitor-checkbox-${PETERS_EMAIL}"]`).check();
    cy.get('[data-testid="visitors-table"]').should("contain", JOHNS_EMAIL);
    cy.get('[data-testid="remove-selected-button"]').click();
  });

  it("Should delete 2 correct visitors on REMOVE SELECTED button click", () => {
    cy.get('[data-testid="visitors-table"]').should("not.contain", TOMS_EMAIL);
    cy.get('[data-testid="visitors-table"]').should(
      "not.contain",
      PETERS_EMAIL
    );
  });

  it("Should not delete the not selected visitor", () => {
    cy.get('[data-testid="visitors-table"]').should("contain", JOHNS_EMAIL);
  });
});

describe("On checking All visitors and pressing REMOVE SELECTED button", () => {
  beforeEach(() => {
    cy.visit(domain);
    cy.get('[data-testid="select-all-checkbox"]').check();
    cy.get('[data-testid="remove-selected-button"]').click();
  });

  it("Should delete all visitors", () => {
    cy.get('[data-testid="visitors-table"]').should(
      "not.contain",
      "mike@email.com"
    );
  });

  it("Should display 'No visitor checked in so far' text and hide REMOVE SELECTED button and disable select all checkbox", () => {
    cy.get('[data-testid="table-footer"]').should(
      "contain",
      "No visitor checked in so far"
    );
    cy.get('[data-testid="table-footer"]').within(() => {
      cy.get('[data-testid="remove-selected-button"]').should("not.exist");
    });

    cy.get('[data-testid="select-all-checkbox"]').should("be.disabled");
  });
});
