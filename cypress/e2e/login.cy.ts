import { reject } from "cypress/types/bluebird";
import { LoginPage } from "../support/PageObject";

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

   


// Promise 
    it.skip('should work? work!!', async () => {
        let tag: Cypress.Chainable<unknown> | Promise<any>;
        var value: any;
        tag = loginPage.submitButton().get_tagName().then(($tag)=>{
            return new Cypress.Promise((resolve, reject)=>{
                resolve(tag);                
            })
        })
        tag.then(function(value: string){
            console.log(`inside of resolve of Promis: === ${value}`); //==BUTTON
            cy.log(value);
        })        

        console.log(`out of resolve funciton of Promise:  ${value}`);  //=undefined. Executed first, before resolve func
        
     })
     
     
    it('Sandbox for attributs reading', function(){
        loginPage.submitButton().get_backgroundColor().should('equal','rgb(63, 81, 181)');
        let tag: JQuery<HTMLElement> | Cypress.Chainable<any>
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