import { SignInPayload } from '../interfaces/auth.interface';

export class SignInModel {
    username: string = '';
    password: string = '';

    constructor(signInPayload: SignInPayload) {
        this.username = signInPayload.username;
        this.password = signInPayload.password;
    }
}
