/// <reference types="cypress" />

describe('tax-ify', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays frontpage', () => {
    //cy.get('.todo-list li').should('have.length', 2)
    cy.contains('tax-ify')
    cy.contains('Kryptovaluutat')
    cy.contains('Arvopaperit')
  })
})
