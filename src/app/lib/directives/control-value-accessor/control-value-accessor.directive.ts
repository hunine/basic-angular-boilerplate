/* eslint-disable @typescript-eslint/unbound-method */
import { Directive, Injector, OnInit, inject } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormControlDirective,
    FormControlName,
    FormGroupDirective,
    NgControl,
    Validators,
} from '@angular/forms';
import { Subject, distinctUntilChanged, startWith, takeUntil, tap } from 'rxjs';

@Directive({
    selector: '[appControlValueAccessor]',
    standalone: true,
})
export class ControlValueAccessorDirective<T> implements ControlValueAccessor, OnInit {
    injector = inject(Injector);

    control: FormControl | undefined;
    isRequired = false;

    private _isDisabled = false;
    private _destroy$ = new Subject<void>();
    private _onTouched!: () => T;

    ngOnInit(): void {
        this.setFormControl();
        this.isRequired = this.control?.hasValidator(Validators.required) ?? false;
    }

    setFormControl(): void {
        try {
            const formControl = this.injector.get(NgControl);

            switch (formControl.constructor) {
                case FormControlName:
                    this.control = this.injector.get(FormGroupDirective).getControl(formControl as FormControlName);
                    break;
                default:
                    this.control = (formControl as FormControlDirective).form;
                    break;
            }
        } catch (error) {
            this.control = new FormControl();
        }
    }

    writeValue(value: T): void {
        this.control ? this.control.setValue(value) : (this.control = new FormControl(value));
    }

    registerOnChange(fn: (val: T | null) => T): void {
        this.control?.valueChanges
            .pipe(
                takeUntil(this._destroy$),
                startWith(this.control.value),
                distinctUntilChanged(),
                tap((val: T | null) => fn(val)),
            )
            .subscribe(() => this.control?.markAsUntouched());
    }

    registerOnTouched(fn: () => T): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this._isDisabled = isDisabled;
    }
}
