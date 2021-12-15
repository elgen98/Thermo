describe("Selecting a card should show input for card info", () => {
  it("should get card info", () => {
    cy.visit("/" + "/html/checkout.html");

    cy.get("select").select("#cardType > option");

    cy.get("input.cardInfoHidden").click();

    cy.get("div.CardInfoShow").should("have.length", 3);
  });
});
