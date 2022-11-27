import { LoginPage } from "../..";

const loginPage = new LoginPage();

describe('All layot tests of LoginPage)', function(){
    it('should BUTTON Submit tagName', ()=>{
        loginPage.submitButton().get_tagName().should('equal', 'BUTTON');
    })

    it('should rgb(63, 81, 181) background-color Submit', ()=>{
        loginPage.submitButton().get_backgroundColor().should('equal', 'rgb(63, 81, 181)');
    })

    it('should rgb(250, 250,25 0) background-color body page', ()=>{
        cy.get('body').should('have.css', 'background-color', 'rgb(250, 250, 250)');
    })
})
