import { Page } from '../enums/Page';
import { HomePage } from './HomePage'
import { HostPage } from './HostPage';

export class LoginPage extends HostPage implements IPage {

    pageName: string = Page.LOGIN;

    private loginContainer = this.getHostPage().find("nb-login");
    // private emailInput = this.loginContainer.c;
    // private passwordInput = this.loginContainer.get("#input-password");
    // private loginButton = this.loginContainer.get("button");

    public verifyPageIsLoaded(): LoginPage {
        cy.contains("h1", this.pageName).should("be.visible");
        return this;
    };

    public setEmail(email: string): LoginPage {
        this.getEmailInput().clear().type(email);
        return this;
    }

    public setPassword(password: string): LoginPage {
        this.getPasswordInput().clear().type(password);
        return this;
    }

    public clickLogin(): HomePage {
        this.getLoginBtn().click();
        return new HomePage();
    }

    private getEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.loginContainer.get("#input-email");
    }

    private getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.loginContainer.get("#input-password");
    }

    private getLoginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.loginContainer.get("button");
    }
}