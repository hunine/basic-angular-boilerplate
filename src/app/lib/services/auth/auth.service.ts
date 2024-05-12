import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuthenticated$ = new BehaviorSubject<boolean>(!!localStorage.getItem('appSession'));

    get isAuthenticated(): boolean {
        return this.isAuthenticated$.getValue();
    }

    login(): void {
        localStorage.setItem('appSession', JSON.stringify({ user: 'user-id', token: 'token' }));
        this.isAuthenticated$.next(true);
    }

    logout(): void {
        localStorage.removeItem('appSession');
        this.isAuthenticated$.next(false);
    }
}
