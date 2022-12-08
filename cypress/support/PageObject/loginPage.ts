/// <reference types = "cypress"/>
import { Button, Field } from "./elements";
import { TransactionPage } from "../PageObject";


export class LoginPage {

    private button: Button;
        
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

    public login(username: string, pass: string): LoginPage {
        this.userNameField().clearAndType(username);
        this.passwordField().clearAndType(pass);
        this.submitButton().click();       
        return this;
    }

    // Login with random correct user
    public loginRandomAuthUser(): TransactionPage{
        cy.fixture('database.json').then((data) => {
            let randomUserNum: number = Math.floor(Math.random() * (data['users'].length));
            let randomUserName: string = data.users[randomUserNum].username;
            this.login(randomUserName, "s3cret");
        })
        return new TransactionPage();
    }

}