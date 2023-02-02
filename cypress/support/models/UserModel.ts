export class UserModel {
    private email: string;
    private password: string;

    public anEmail(name: string): UserModel {
        this.email = name;
        return this;
    }

    public aPassword(password: string): UserModel {
        this.password = password;
        return this;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public build(): UserModel {
        return new UserModel()
            .aPassword(this.password)
            .anEmail(this.email)
    }
}