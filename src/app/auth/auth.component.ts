import { Component } from '@angular/core';

@Component({
    selector: 'app-auth',
    template: `
        <app-auth-layout>
            <router-outlet></router-outlet>
        </app-auth-layout>
    `,
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {}
