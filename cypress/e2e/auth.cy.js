"use strict";
exports.__esModule = true;
var loginPage_1 = require("./pages/loginPage");
var loginPage = new loginPage_1.LoginPage();
describe('All login tests', function () {
    it('should ok authorised user', function () {
        //loginPage.login('Admin', 'admin123');
        loginPage.loginAuthUser();
        cy.get(loginPage.signedUserFullName).should('exist');
    });
    
    it('should error Unauthorised user', function () {
        loginPage.login("nonvalidlogin", "nonvalidpassword");
        cy.get(loginPage.userInvalid).should('exist');
        //cy.get(loginPage.userInvalid).should('not.exist');         
    });
});
