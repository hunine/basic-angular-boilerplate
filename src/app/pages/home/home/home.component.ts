import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private readonly _authService = inject(AuthService);
    private readonly _router = inject(Router);

    handleLogout(): void {
        this._authService.logout();
        this._router.navigate(['/auth/login']);
    }
}
