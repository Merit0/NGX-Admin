import { HostPage } from './HostPage';
export class FeaturesSidebar {

    private sideBarContainer: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(parent: Cypress.Chainable<JQuery<HTMLElement>>) {
        this.sideBarContainer = parent.find("nb-sidebar.menu-sidebar").should("be.visible");
    }

    expandTab(tabName: string): FeaturesSidebar {
        this.sideBarContainer.contains("a", tabName).parent("li").then(li => {
            cy.wrap(li).parent("ul").then(ul => {
                if (ul.hasClass("collapsed")) {
                    cy.wrap(ul).parent("li.menu-item").within(li => {
                        cy.wrap(li).find("a").eq(0).click();
                    })
                    this.sideBarContainer.contains("a", tabName).click();
                }
            })
        });
        return this;
    }

    public verifyBar(status: BarStatus): FeaturesSidebar {
        this.sideBarContainer.then(bar => {
            expect(bar.hasClass(`${status}`)).to.be.true;
        })
        return this;
    }

    public verifyMainTabs(tabs: BarTabs[]) {
        this.sideBarContainer.get("ul.menu-items")
            .find(">li a span")
            .filter(":visible")
            .then($el => {
                // return Cypress.$.makeArray($el).map(el => el.innerText) //TODO: OK
                return Cypress._.map($el, "innerText");
            })
            .should("have.length", tabs.length)
            .and("deep.equal", tabs);

    }

    public getContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.sideBarContainer;
    }

    verifyTabIsExpanded(tabName: string): FeaturesSidebar {
        this.getTabsLink(tabName).find('nb-icon.expand-state') //OK
            .invoke('attr', 'ng-reflect-icon').then(a => {
                expect(a.includes('down')).to.be.true
            });
        // .find('nb-icon.expand-state')  //OK
        // .should('have.attr', 'ng-reflect-icon', 'chevron-down-outline')
        return this;
    }

    verifyTabIsCollapsed(tabName: string): FeaturesSidebar {
        this.getTabsLink(tabName).find('nb-icon.expand-state') //OK
            .invoke('attr', 'ng-reflect-icon').then(a => {
                expect(a.includes('left')).to.be.true
            });
        // .find('nb-icon.expand-state')  //OK
        // .should('have.attr', 'ng-reflect-icon', 'chevron-left-outline')
        return this;
    }

    private getTabsLink(tab: string) {
        return cy.get('nb-sidebar.menu-sidebar.left')
            .should('be.visible')
            .contains('a', tab);
    }
}

export enum BarStatus {
    HIDDEN = "compacted",
    EXPANDED = "expanded"
}

export enum BarTabs {
    LAYOUT = "Layout",
    FORMS = "Forms",
    MODAL_AND_OVERLAYS = "Modal & Overlays",
    EXTRA_COMPONENTS = "Extra Components",
    TABLES_AND_DATA = "Tables & Data",
    AUTH = "Auth"
}