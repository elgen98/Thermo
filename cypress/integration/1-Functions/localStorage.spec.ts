describe("CartList works as intended", () => {
  it("should add to cart", () => {
    cy.visit("/" + "/html/products.html");

    cy.get(":nth-child(2) > .sizeContainer > :nth-child(2)").click();

    cy.get(":nth-child(2) > .btnDivStyle > .cartBtnStyle").click();

    cy.reload();

    cy.get("#cartBtn > .fas").click();

    expect("#cartContainer > div").to.exist;
  });
});
