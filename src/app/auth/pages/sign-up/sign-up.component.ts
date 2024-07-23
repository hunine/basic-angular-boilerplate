import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    signUpForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.signUpForm = this.formBuilder.group({
            email: [''],
            password: [''],
            checkPassword: [''],
            username: [''],
            agree: [false],
        });
    }

    handleSubmit() {
        // TODO: Make API Call
    }

    updateConfirmValidator() {}
}
