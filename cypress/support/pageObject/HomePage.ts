import { BarStatus, FeaturesSidebar } from './FeaturesSidebar';
import { Header } from './Header';
import { HostPage } from './HostPage';

export class HomePage extends HostPage implements IPage {

    featuresMenu: FeaturesSidebar;
    header: Header;

    constructor() {
        super();
        this.featuresMenu = new FeaturesSidebar(this.getHostPage());
        this.header = new Header(this.getHostPage());
    }

    public verifyPageIsLoaded(): HomePage {
        this.header.verifyHeaderIsShown();
        return this;
    }

    public collapseSideBar(): HomePage {
        this.header.collapse();
        return this;
    }

    public expandSideBar(): HomePage {
        this.header.expand();
        return this;
    }

    public getFeaturesMenu(): FeaturesSidebar {
        return this.featuresMenu;
    }
}