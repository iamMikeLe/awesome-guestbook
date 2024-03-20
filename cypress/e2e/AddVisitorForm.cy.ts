import { domain } from "./domainUrl";

function assertFormReset() {
  cy.get('input[name="visitor"]').should("have.value", "");
  cy.get('input[name="email"]').should("have.value", "");
  cy.get('input[name="isAgreementChecked"]').should("not.be.checked");
  cy.get('[data-testid="check-to-submit-warning"]').should("exist");
  cy.get('[data-testid="add-visitor-button"]').should("be.disabled");
}

describe("On initial visit, When the form is not filled, it", () => {
  beforeEach(() => {
    cy.visit(domain);
  });

  it("Should show disabled ADD NEW VISITOR button ", () => {
    cy.get('[data-testid="add-visitor-button"]').should("be.disabled");
  });

  it("Should display *Agree to add new visitor warning ", () => {
    cy.get('[data-testid="check-to-submit-warning"]').should("exist");
  });

  it("When the checkbox is checked, it should enable ADD VISITOR BUTTON and hide the agree warning", () => {
    cy.get('input[name="isAgreementChecked"]').check();
    cy.get('[data-testid="add-visitor-button"]').should("not.be.disabled");
    cy.get('[data-testid="check-to-submit-warning"]').should("not.exist");
  });
});

describe("Given form is filled correctly", () => {
  beforeEach(() => {
    cy.visit(domain);
    cy.fillForm("john.doe@example.com");
  });

  it("when pressing reset button, it should reset all fields", () => {
    cy.get('[data-testid="add-visitor-button"]').click();

    assertFormReset();
  });

  it("when pressing ADD NEW VISITOR button, it should add new Visitor to the table and reset form", () => {
    cy.get('[data-testid="add-visitor-button"]').click();

    cy.get('[data-testid="visitors-table"]').within(() => {
      cy.contains("john.doe@example.com").should("exist");
    });

    assertFormReset();
  });

  it("when adding existing email, it should not add Visitor and display email exists alert", () => {
    cy.get('[data-testid="add-visitor-button"]').click();
    cy.fillForm("john.doe@example.com");
    cy.get('[data-testid="add-visitor-button"]').click();
    cy.get('[data-testid="email-exist-warning"]').should("exist");
  });
});

describe("Given form is not filled correctly", () => {
  const invalidEmail = "invalidEmail";

  it("when pressing ADD NEW VISITOR button, it should not add Visitor", () => {
    cy.visit(domain);
    cy.fillForm(invalidEmail);

    cy.get('[data-testid="visitors-table"]').within(() => {
      cy.contains(invalidEmail).should("not.exist");
    });
  });
});
