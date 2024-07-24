import { Injectable } from '@angular/core';
import { SignInModel } from './models/auth';
import { ApiService } from 'app/core/services/api.service';

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) {}

    signIn(payload: SignInModel) {
        this.apiService.post('', payload);
    }
}
