require('@cypress/xpath');

class LoginPage {
    private username: string = "input[name='username']";
    private password: string = "input[name='password']";
    private loginButton: string = "//button[text()=' Login ']";

    public loginWith(username: string, password: string){
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
        return this;
    }
}

export default new LoginPage();