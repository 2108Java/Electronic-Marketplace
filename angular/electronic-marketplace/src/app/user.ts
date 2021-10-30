export class User {
    public username: string;
    public password: string;
    public userId: number;
    public email: string;
    public phoneNumber: string;

    constructor(username: string, password: string, userId: number, email: string, phoneNumber: string) {
        this.username = username;
        this.password = password;
        this.userId = userId;
        this.email = email;
        this.phoneNumber = phoneNumber
    };

    

}
