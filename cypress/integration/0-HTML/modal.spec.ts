describe("modal functionality test", () => {
  it("get modal", () => {
    cy.visit("/" + "html/products.html");

    cy.get("#cartBtn > .fas").click();

    cy.get("div#productModal").should("be.visible");
  });
});
