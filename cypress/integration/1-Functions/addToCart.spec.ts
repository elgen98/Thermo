describe("CartList works as intended", () => {
  cy.visit("/");

  cy.get("button.addToCart").click();

  cy.get("button#cartBtn").click();

  cy.get("ul").should("have.length", 1);
});
