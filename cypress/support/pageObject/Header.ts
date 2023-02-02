import { execSync } from 'child_process';
import * as cypress from 'cypress';
import { HomePage } from './HomePage';
import { BarStatus } from './FeaturesSidebar';
export class Header {

    private container: Cypress.Chainable<JQuery<HTMLElement>>;
    private sidebarToogle: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(parent: Cypress.Chainable<JQuery<HTMLElement>>) {
        this.container = parent.find("ngx-header").should("be.visible");
        this.sidebarToogle = this.container.find("a.sidebar-toggle");
    }

    public verifyHeaderIsShown(): Header {
        this.sidebarToogle.should('be.visible');
        return this;
    }

    // public toogleSidebar(): Header {
    //     this.sidebarToogle.click();
    //     return this;
    // }

    public collapse(): Header {
        this.sidebarToogle.click();
        cy.get("nb-sidebar").then(menu => {
            if (menu.hasClass("expanded")) {
                this.sidebarToogle.click();
            }
        });
        return this;
    }

    public expand(): Header {
        this.sidebarToogle.click();
        cy.get("nb-sidebar").then(menu => {
            if (menu.hasClass(`${BarStatus.HIDDEN}`)) {
                this.sidebarToogle.click();
            }
        });
        return this;
    }
}