describe("modal functionality test", () => {
  it("get modal", () => {
    cy.visit("/");

    cy.get("button#cartBtn").click();

    cy.get("div#productModal").should("be.visible");
  });
});
