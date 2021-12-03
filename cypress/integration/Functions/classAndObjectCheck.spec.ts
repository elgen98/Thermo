describe("Check that objects exist and follow contructor", () => {
  it("should get correct objects and have approriate properties", () => {
    cy.get("Products")
      .should("have.property", "name")
      .should("have.a.property");
  });
});
