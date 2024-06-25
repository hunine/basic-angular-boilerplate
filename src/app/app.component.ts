import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'basic-angular-boilerplate';
}
