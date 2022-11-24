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


    
    it.only('Sandbox for attributs reading', function(){
        let tag
        tag = loginPage.getSomeProp().then($tag => {
            tag= $tag;
            console.log(tag);
            return tag;
        });
        
        console.log(`Tag name из свойста ${tag}`);        
        // cy.get('button[type="submit"]').invoke('prop', 'tagName').then(tagName => {
        //     cy.log("непосрественно из су " + tagName);            
        // })
        
        //loginPage.getSomeProp().should("equal", "BUTTON");
        ///loginPage.submitButton().getBackGroundColor().should("equal", "submit");
    })


})