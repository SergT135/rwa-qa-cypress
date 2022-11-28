import {TransactionPage, LoginPage } from "../..";

const transactionPage = new TransactionPage();
const loginPage = new LoginPage();

describe('Transactions page', function(){
    it('Navigation tabs changes transaction views', function(){
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');
        
        transactionPage.optionEveryone().click();
        transactionPage.transactionTypeHeader().should('have.text','Public');
        
        transactionPage.optionFriends().click();
        transactionPage.transactionTypeHeader().should('have.text','Contacts');
        
        transactionPage.optionMine().click();
        transactionPage.transactionTypeHeader().should('have.text','Personal')        
    })

    it.only('should select Date', function(){
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');

        transactionPage.optionEveryone().click();
        transactionPage.setDate();
        //cy.get('[data-test="transaction-list-filter-date-range-button"] > .MuiChip-label').should('exist');
        //cy.get('[data-test="transaction-list-filter-date-range-button"] > .MuiChip-label').click({force: true});


    })


})
