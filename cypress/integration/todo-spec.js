/// <reference types="cypress" />
describe('Todo App', () => {
    it('completes an item', () => {
      // base url is stored in "cypress.json" file
      cy.visit('http://localhost:3000/')
      // there are several existing todos
      cy.get('.todo').should('have.length', 3)
      cy.log('**adding a todo**')
      cy.get('.input').type('write tests{enter}')
      cy.get('.todo').should('have.length', 4)
  
      cy.log('**completing a todo**')
      cy.contains('.todo', 'Learn about Cypress').contains('button', 'Complete').click()
      cy.contains('.todo', 'Learn about Rest Assured')
        .should('have.css', 'font-size', '12px')
  
      cy.log('**removing a todo**')
      // due to quarantine, we have to delete an item
      // without completing it
      cy.contains('.todo', 'Learn about React').contains('button', 'x').click()
      cy.contains('.todo', 'Learn about React').should('not.exist')

    })
  })