import { LoginPage } from "./pages/loginPage";

const loginPage: LoginPage = new LoginPage();

describe('All login tests (TS2)', function () {
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