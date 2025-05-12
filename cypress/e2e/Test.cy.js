/// <reference types="Cypress"/>

describe('Test 1',function(){

  it('All Products',function(){

    cy.visit('https://www.amphora.net');
    cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').click();
    cy.get(':nth-child(1) > .products__card').click();
    cy.go('back');
    cy.get(':nth-child(2) > .products__card').click();
    cy.go('back');
    cy.get(':nth-child(3) > .products__card').click();
    cy.go('back');
    cy.get(':nth-child(4) > .products__card').click();
    cy.go('back');
    cy.get(':nth-child(5) > .products__card').click();
    cy.go('back');
    cy.get(':nth-child(6) > .products__card').click();
    cy.go('back');
    cy.get('.hero__newsletter-pop > div > .btn').click({force:true});
    cy.get('.formserv-email-field > .fserv-input-text').type('paladugsaiganesh@gmail.com')
    cy.get(':nth-child(2) > .fserv-input-text').type('Venkata Sai Ganesh')
    cy.get(':nth-child(3) > .fserv-input-text').type('Paladugu')
    cy.get('.fserv-button-submit').click();
  })
})