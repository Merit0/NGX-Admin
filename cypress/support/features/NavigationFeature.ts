import { FeaturesSidebar } from '../pageObject/FeaturesSidebar';
import { HomePage } from '../pageObject/HomePage';
export class NavigationFeature {

    private basicPage: HomePage;

    constructor() {
        this.basicPage = new HomePage();
    }

    public navigateTo(page: string): void {
        this.basicPage
            .verifyPageIsLoaded()
            .expandSideBar()
            .getFeaturesMenu()
            .expandTab(page);

    }


}