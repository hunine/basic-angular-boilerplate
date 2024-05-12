import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputFormComponent } from '@lib/components/input-form/input-form.component';

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

    handleSubmit(): void {
        console.log('Form submitted');
    }
}
