import { LoginPage } from "../support/PageObject/loginPage";

const loginPage = new LoginPage();

describe('All login tests (new ver))', function(){
    it('should error incorrect user', function(){
        loginPage.login('nonvalidlogin', 'nonvalidpassword');
        loginPage.userInvalid().should('exist')
    })

    it('should ok correct random user', function(){
        loginPage.loginRandomAuthUser();        
        loginPage.signedUserFullName().should('exist');        
    })


    
    it('Sandbox for attributs reading', ()=>{
        cy.log(`Tag name из свойста ${loginPage.getSomeProp()}`);
        //invoke('attr', 'type')
        cy.get('button[type="submit"]').invoke('prop', 'tagName').then(tagName => {
            cy.log("непосрественно из су " + tagName);            
        })
    })


})