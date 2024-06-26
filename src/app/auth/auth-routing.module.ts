import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
