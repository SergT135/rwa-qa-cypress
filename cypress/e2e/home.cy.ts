import {HomePage, LoginPage } from "../..";

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('All HomePge tests', function(){
    it('should have text Public', function(){
        loginPage.loginRandomAuthUser();
        loginPage.signedUserFullName().should('exist');
        homePage.optionEveryone() .click();
        homePage.transactionTypeHeader().should('have.text','Public')

    })


})
