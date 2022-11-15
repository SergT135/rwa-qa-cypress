/**
 * Login Page
 */
 export class LoginPage {

    #userNameField = 'input[name="username"]';
    #passwordField = 'input[name="password"]';
    rememberMeCheckBox = 'input[name="remember"]';
    signInButton = 'button[type="submit"]';
    signUpReff = 'a[data-test="signup"]';
    signedUserFullName = '[data-test="sidenav-user-full-name"]'; // full name of signed Up user
    userInvalid = '[data-test="signin-error"]'; // invalid user alert

    enterUserName(username) {
        cy.get(this.#userNameField).type(username);
    }

    enterpassword(pass) {
        cy.log("!!!!!!!!!!!!!!!!!!!!!!!")
        cy.get(this.#passwordField).type(pass);
    }

    clickSignIn() {
        cy.get(this.signInButton).click();
    }

    login(username, pass) {
        this.enterUserName(username);
        this.enterpassword(pass);
        this.clickSignIn();
    }

    loginAuthUser() {
        cy.fixture('database.json').then((data) => {
            //var q_users = data['users'].length; 
            let randomUserNum = Math.floor(Math.random() * (data['users'].length));
            let randomUserName = data.users[randomUserNum].username;
            this.login(randomUserName, "s3cret");
        })
    }


}    