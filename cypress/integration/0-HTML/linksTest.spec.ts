describe("HTML links tests", () => {
  //visits base url before each test
  beforeEach(() => {
    cy.visit("/");
  });
  it("Handling new Browser Tab", function () {
    cy.visit("/");
    cy.get("a.productpage").invoke("removeAttr", "target").click();
    cy.url().should("include", "/windows/new");
    cy.get("h3").should("have.text", "New Window");
  });
  it("should go to product page when link is clicked", () => {
    cy.get("a.productPage").click();

    cy.url().should("include", "/products.html");
    cy.url().should("eq", "/" + "/products.html");
  });
  it("should go to facebook when link is clicked", () => {
    cy.get("a#fbLink").click();

    cy.url().should("eq", "http://facebook.com");
  });
  it("should go to twitter when link is clicked", () => {
    cy.get("a#twitterLink").click();

    cy.url().should("eq", "http://twitter.com");
  });
  it("should go to instagram when link is clicked", () => {
    cy.get("a#instaLink").click();

    cy.url().should("eq", "http://instagram.com");
  });
});
