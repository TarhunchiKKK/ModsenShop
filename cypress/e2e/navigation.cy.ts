describe("Navigation tests", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("home_url"));
    });

    it("Navigate to home page", () => {
        cy.visit(Cypress.env("shop_url"));
        cy.contains("Modsen SHOPPE").click();
        cy.url().should("eq", Cypress.env("home_url"));
    });

    it("Navigate to shop page", () => {
        cy.contains("Shop").click();
        cy.url().should("eq", Cypress.env("shop_url"));
    });

    it("Navigate to product page", () => {
        const selector: string = 'img[src*="' + Cypress.env("api_url") + '"]';
        cy.get(selector).first().closest("div").click({ timeout: 1000 });
        cy.url().should("include", Cypress.env("product_url"));
    });

    it("Navigate to contact page", () => {
        cy.contains("Contact").click();
        cy.url().should("eq", Cypress.env("contact_url"));
    });

    it("Navigate to cart page", () => {
        cy.get('img[alt="Basket"]').click();
        cy.url().should("eq", Cypress.env("cart_url"));
    });
});
