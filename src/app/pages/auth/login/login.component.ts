import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputFormComponent } from '@lib/components/input-form/input-form.component';
import { AuthService } from '@lib/services';

const components = [InputFormComponent];
const modules = [ReactiveFormsModule];

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [...components, ...modules],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    formBuilder = inject(FormBuilder);

    loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
    });

    private readonly _router = inject(Router);
    private readonly _authService = inject(AuthService);

    handleSubmit(): void {
        this._authService.login();
        this._router.navigate(['/']);
    }
}
