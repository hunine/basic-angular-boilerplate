import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '@lib/services';

const components = [LayoutHorizontalComponent];
const modules = [CommonModule];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ...components, ...modules],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'basic-angular-boilerplate';

    isAuthenticated$ = inject(AuthService).isAuthenticated$;
}
