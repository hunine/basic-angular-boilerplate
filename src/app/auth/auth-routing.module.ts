import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { SignInComponent } from './pages';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
            },
            {
                path: '**',
                redirectTo: 'sign-in',
                pathMatch: 'full',
            },
        ],
    },
];

const MODULES = [NzFormModule, NzInputModule, NzCheckboxModule, NzButtonModule, NzGridModule, ReactiveFormsModule];
const COMPONENTS = [SignInComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [RouterModule.forChild(routes), ...MODULES],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
