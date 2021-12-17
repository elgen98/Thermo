describe("Check that all 8 products get printed in DOM", () => {
  it("should get correct objects and print them", () => {
    cy.visit("/" + "/html/products.html");

    cy.get("#productContainer").children().should("have.length", 8);
  });
});
