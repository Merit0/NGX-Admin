import { UserModel } from '../models/UserModel';
import { OpenPageFeature } from './OpenPageFeature';
import { LoginPage } from '../pageObject/LoginPage';
export class LoginUserFeature {

    private user: UserModel;
    private openPageFeature: OpenPageFeature;
    private loginPage: LoginPage;

    constructor(userModel: UserModel) {
        this.user = userModel;
        this.loginPage = new LoginPage();
    }

    public login(): void {
        this.loginPage
            .setEmail(this.user.getEmail())
            .setPassword(this.user.getPassword())
            .clickLogin();

    }
}