//import {TransactionPage, LoginPage } from "../..";
import {TransactionPage, LoginPage } from "../support/PageObject";

const transactionPage = new TransactionPage();
const loginPage = new LoginPage();

describe('Transactions page', function(){
    it('Navigation tabs changes transaction views', function(){
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');
        
        transactionPage.optionHome();
        transactionPage.optionEveryone().click();
        transactionPage.transactionTypeHeader().should('have.text','Public');
        
        transactionPage.optionFriends().click();
        transactionPage.transactionTypeHeader().should('have.text','Contacts');
        
        transactionPage.optionMine().click();
        transactionPage.transactionTypeHeader().should('have.text','Personal')        
    })

    it('should exist No Transaction Text', function(){
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');

        transactionPage.optionHome();
        transactionPage.optionEveryone().click();
        transactionPage.setDate("1985-01-28", "1985-01-29");
        transactionPage.NoTransactionText().should('exist');
    })


    it.skip('should exist amount', ()=>{
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');
        
        transactionPage.optionHome();
        transactionPage.optionEveryone().click();
        transactionPage.setAmount();


    })


})
