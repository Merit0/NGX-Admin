
import { VerifyFeaturesBarFeature as VerifyFeaturesMenuFeature } from "../support/features/VerifyFeaturesBarFeature"
import { NavigationFeature } from "../support/features/NavigationFeature"
import { OpenPageFeature } from "../support/features/OpenPageFeature"
import { LoginPage } from "../support/pageObject/LoginPage"
import { Page } from "../support/enums/Page"
import { LoginUserFeature } from "../support/features/LoginUserFeature"
import { UserModel } from "../support/models/UserModel"

describe("NGX Features Suite", () => {

    beforeEach('Before test', () => {
        cy.OpenApp();
    });

    // it("Verify NGX Features can be hidden", () => {  //TODO: Done
    //     new VerifyFeaturesMenuFeature().verifyCollapsed();
    // });

    // it("Verify NGX Features can be expanded", () => { //TODO: Done
    //     new VerifyFeaturesMenuFeature().verifyExpanded();
    // });

    // it("Verify NGX Features tabs are visible", () => { //TODO: Done
    //     new VerifyFeaturesMenuFeature().verifyverifyMainTabs();
    // });

    it("Navigation", () => {
        // new OpenPageFeature(new RegisterPage()).open();
        const user = new UserModel().anEmail("hugoBoss@gmail.com").aPassword("11112222").build();
        new OpenPageFeature(Page.LOGIN).open();
        new LoginUserFeature(user).login();
    });
})