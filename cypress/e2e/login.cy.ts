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

   


    
    it('Sandbox for attributs reading', function(){
        loginPage.submitButton().get_backgroundColor().should('equal','rgb(63, 81, 181)');
        let tag
        tag = loginPage.submitButton().get_tagName().then($tag => {
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