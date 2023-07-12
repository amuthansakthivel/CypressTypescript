import loginPage from "../../pages/login.page";

describe('orange hrm suite', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('orange hrm test', () => {
        loginPage.loginWith("Admin", "admin123");
        //test to follow
    });

});