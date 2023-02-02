import { Page } from '../enums/Page';
export class RegisterPage implements IPage {

    pageName: string = Page.REGISTER;


    public verifyPageIsLoaded(): void {
        cy.contains("h1", this.pageName).should("be.visible");
    };
}