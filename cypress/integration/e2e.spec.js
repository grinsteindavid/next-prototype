/// <reference types="cypress" />

context('E2E testing whole webpage', () => {

    it('.visit() - homepage and check location', () => {
        cy.visit('/')

        cy.location().should(location => expect(location.pathname).to.eq('/users'))
    })

    it('.type() - search a github user from dropdown', () => {
        cy.findByTestId("search-users-dropdown")
            .click()
            .should("be.visible")
            .type("grinsteindavid")

        cy.get(".loading", { timeout: 30000 }).should("have.length", 0)
    })

    it('.type() - select a github user from dropdown', () => {
        cy.findByTestId("search-users-dropdown")
            .click()
            .should("be.visible")
            .type("{enter}")

        cy.get(".loading", { timeout: 30000 }).should("have.length", 0)
    })

    it('.type() - select a repository from dropdown', () => {
        cy.findByTestId("search-repositories-dropdown")
            .click()
            .should("be.visible")
            .type("next-prototype")
            .type("{enter}")

        cy.get(".loading", { timeout: 30000 }).should("have.length", 0)
    })
})
