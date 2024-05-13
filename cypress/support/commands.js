Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Caio')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('caiomarques04@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})