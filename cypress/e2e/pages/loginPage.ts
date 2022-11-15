/// <reference types = "cypress"/>
export class LoginPage {
    private userNameField: string = 'input[name="username"]';
    private passwordField: string = 'input[name="password"]';
    private rememberMeCheckBox: string  = 'input[name="remember"]';
    public signInButton: string = 'button[type="submit"]';
    private signUpReff: string = 'a[data-test="signup"]';
    public signedUserFullName: string = '[data-test="sidenav-user-full-name"]'; // full name of signed Up user
    public userInvalid: string = '[data-test="signin-error"]'; // invalid user aler

    public enterUserName(username: string) {
        cy.get(this.userNameField).type(username);
    }

    public enterpassword(pass: string) {
        cy.get(this.passwordField).type(pass);
    }

    public clickSignIn() {
        cy.get(this.signInButton).click();
    }

    public login(username: string, pass: string) {
        this.enterUserName(username);
        this.enterpassword(pass);
        this.clickSignIn();
    }

    loginAuthUser() {
        cy.fixture('database.json').then((data) => {
            //var q_users = data['users'].length; 
            let randomUserNum: number = Math.floor(Math.random() * (data['users'].length));
            let randomUserName: string = data.users[randomUserNum].username;
            this.login(randomUserName, "s3cret");
        })
    }
}
