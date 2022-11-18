/// <reference types = "cypress"/>

import { Button } from "../elements/button";
import {LeftMenuPage} from "./left-menuPage"

export class LoginPage {
    private userNameField: string = 'input[name="username"]';
    private passwordField: string = 'input[name="password"]';
    private rememberMeCheckBox: string  = 'input[name="remember"]';
    private signInButton: string = 'button[type="submit"]';
    private signUpReff: string = 'a[data-test="signup"]';
    public signedUserFullName: string = '[data-test="sidenav-user-full-name"]'; // full name of signed Up user
    public userInvalid: string = '[data-test="signin-error"]'; // invalid user alert

        
    private signInButton_: Button = new Button();
    private  cssButton = this.signInButton_.css = 'button[type="submit"]';
    
    public newclick(): LoginPage{
        this.signInButton_.click(); 
        return this;      
    }
   

    public enterUserName(username: string): LoginPage {
        cy.get(this.userNameField).type(username);
        return this;
    }

    public enterpassword(pass: string): LoginPage {
        cy.get(this.passwordField).type(pass);
        return this;
    }

    public clickSignIn(): LoginPage {
        cy.get(this.signInButton).click();
        return this;
    }

    public login(username: string, pass: string): LoginPage {
        this.enterUserName(username)
        .enterpassword(pass)
        .newclick();
        //.clickSignIn();       
        return this;
    }

    public loginAuthUser(): LeftMenuPage {
        cy.fixture('database.json').then((data) => {
            //var q_users = data['users'].length; 
            let randomUserNum: number = Math.floor(Math.random() * (data['users'].length));
            let randomUserName: string = data.users[randomUserNum].username;
            this.login(randomUserName, "s3cret");
        })
        return new LeftMenuPage();
    }
}
