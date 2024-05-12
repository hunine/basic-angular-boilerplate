import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('@pages/auth').then((component) => component.routes),
    },
];
