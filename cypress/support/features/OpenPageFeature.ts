import { NavigationFeature } from './NavigationFeature';
export class OpenPageFeature {

    private pagesName: string;
    private navigation: NavigationFeature;

    constructor(pagesName: string) {
        this.pagesName = pagesName;
        this.navigation = new NavigationFeature();
    }

    public open(): void {
        this.navigation.navigateTo(this.pagesName)
    }
}