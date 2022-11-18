import { LoginPage } from "../support/pages/login-page";

const loginPage = new LoginPage();

describe('All login tests', function () {
    it('should ok authorised user', function () {        
        //loginPage.login('Admin', 'admin123');
        loginPage.loginAuthUser();
        cy.get(loginPage.signedUserFullName).should('exist');              
    })

    it('should error Unauthorised user', function () {
        loginPage.login("nonvalidlogin", "nonvalidpassword");
        cy.get(loginPage.userInvalid).should('exist');         
        //cy.get(loginPage.userInvalid).should('not.exist');         
    })
})
