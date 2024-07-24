import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROUTE_PATH } from '@shared/constants';
import { AuthService } from 'app/auth/auth.service';
import { SignInModel } from 'app/auth/models/auth';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
    signInForm!: FormGroup;
    ROUTE_PATH = ROUTE_PATH;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.signInForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            remember: [false],
        });
    }

    handleSubmit() {
        // TODO: Make API call

        const signInPayload = new SignInModel(this.signInForm.getRawValue());
        this.authService.signIn(signInPayload);
    }
}
