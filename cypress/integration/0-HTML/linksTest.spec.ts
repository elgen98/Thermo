describe("product link test", () => {
  it("should go to product page when link is clicked", () => {
    cy.visit("/");

    cy.get("a.startShop").click();

    cy.url().should("include", "/products.html");
  });
});
