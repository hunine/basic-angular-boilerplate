import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorDirective } from '@lib/directives/control-value-accessor/control-value-accessor.directive';

const modules = [CommonModule, FormsModule, ReactiveFormsModule];

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
    selector: 'app-input-form',
    standalone: true,
    imports: [...modules],
    templateUrl: './input-form.component.html',
    styleUrl: './input-form.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => InputFormComponent),
        },
    ],
})
export class InputFormComponent<T> extends ControlValueAccessorDirective<T> {
    @Input() inputId = '';
    @Input() label = '';
    @Input() type: InputType = 'text';
}
