import {HomePage, LoginPage } from "../..";

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Transactions page', function(){
    it('Navigation tabs changes transaction views', function(){
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');
        
        homePage.optionEveryone().click();
        homePage.transactionTypeHeader().should('have.text','Public');
        
        homePage.optionFriends().click();
        homePage.transactionTypeHeader().should('have.text','Contacts');
        
        homePage.optionMine().click();
        homePage.transactionTypeHeader().should('have.text','Personal')        
    })


})
