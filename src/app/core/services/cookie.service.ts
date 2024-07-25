import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
    get(name: string) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}`);

        if (parts.length === 2) return parts.pop()?.split(';').shift();

        return null;
    }

    set<T>(name: string, value: T) {
        document.cookie = `${name}=${typeof value === 'object' ? JSON.stringify(value) : value}; path=/;`;
    }

    remove(name: string) {
        const date = new Date();
        date.setTime(date.getTime() - 2 * 24 * 60 * 60 * 1000);

        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=; Max-Age=0; ${expires}; path=/;`;
    }
}
