describe("modal functionality test", () => {
  cy.visit("/");

  cy.get("button.btnStyle").click();

  cy.get("div#productModal").should("be.visible");
});
