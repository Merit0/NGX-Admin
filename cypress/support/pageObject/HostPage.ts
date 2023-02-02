export abstract class HostPage implements IPage {

    abstract verifyPageIsLoaded(): void;

    public getHostPage() {
        return cy.get("ngx-app");
    }


}