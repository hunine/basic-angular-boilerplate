import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [UserOutline, LockOutline];

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
];

const MODULES = [NzIconModule.forRoot(icons)];

@NgModule({
    imports: [RouterModule.forRoot(routes), ...MODULES],
    exports: [RouterModule],
})
export class AppRoutingModule {}
