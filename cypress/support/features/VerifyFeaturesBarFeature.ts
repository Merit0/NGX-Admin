import { HomePage } from '../pageObject/HomePage';
import { BarStatus, BarTabs } from '../pageObject/FeaturesSidebar';
import { PagesMap } from '../enums/PagesMap';

export class VerifyFeaturesBarFeature {

    private basicPage: HomePage;

    constructor() {
        this.basicPage = new HomePage();
    }

    public verifyCollapsed(): void {
        this.basicPage.
            verifyPageIsLoaded()
            .collapseSideBar()
            .getFeaturesMenu()
            .verifyBar(BarStatus.HIDDEN);
    }

    public verifyExpanded(): void {
        this.basicPage
            .verifyPageIsLoaded()
            .expandSideBar()
            .getFeaturesMenu()
            .verifyBar(BarStatus.EXPANDED);
    }


    public verifyverifyMainTabs(): void {
        this.basicPage
            .verifyPageIsLoaded()
            .expandSideBar()
            .getFeaturesMenu()
            .verifyBar(BarStatus.EXPANDED)
            .verifyMainTabs(Object.values(BarTabs));
    }
}