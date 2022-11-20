/// <reference types = "cypress"/>
import {Button} from "./elements/button";
import {Field} from "./elements/field";

export class LoginPage  {
        
    private userNameField (): Field{
         return new Field ('input[name="username"]');        
    }

    private passwordField (): Field{
        return new Field ('input[name="password"]');
    }
    
    public signedUserFullName(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[data-test="sidenav-user-full-name"]'); // full name of signed Up user
    }

    public userInvalid(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[data-test="signin-error"]'); // invalid user alert
    }

    public submitButton(): Button{        
        return new Button('button[type="submit"]');          
    }

    public getColor(): string{
        cy.log("TagName =" + this.submitButton().tagName)
        return this.submitButton().tagName;
    }

    public login(username: string, pass: string): LoginPage {
        this.userNameField().type(username);
        this.passwordField().type(pass);
        this.submitButton().click();       
        return this;
    }

    // Login with random correct user
    public loginRandomAuthUser(){
        cy.fixture('database.json').then((data) => {
            let randomUserNum: number = Math.floor(Math.random() * (data['users'].length));
            let randomUserName: string = data.users[randomUserNum].username;
            this.login(randomUserName, "s3cret");
        })
    }




}