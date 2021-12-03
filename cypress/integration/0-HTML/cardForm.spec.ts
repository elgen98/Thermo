describe("Selecting a card should show input for card info", () => {
  cy.visit("/" + "/checkout.html");

  cy.get("select").click("bottom");

  cy.get("input").click();

  cy.get("div.CardInfoShow").should("have.length", 3);
});
