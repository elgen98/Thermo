describe("CartList works as intended", () => {
  it("should add to cart", () => {
    cy.visit("/" + "/html/products.html");

    cy.get("button.addToCart").click();

    cy.get("button#cartBtn").click();

    cy.get("ul").should("have.length", 1);
  });
});
