/// <reference types="cypress" />
const { faker } = require('faker-js/faker');

describe('Funcionalidade Pre Cadastro', () => {


    beforeEach ( () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });  

  it('Deve completar o pré cadastro com sucesso', () => {
    cy.get ('#reg_email'). type (faker.internet.email ())
    cy.get ('#reg_password'). type ('Teste@teste')
    cy.get (':nth-child(4) > .button').click ()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a'). click ()
cy.get('#account_first_name'). type ('Lili')
cy.get('#account_last_name'). type ('Jorge')
cy.get('.woocommerce-Button'). click ()


  });  
});