import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';

const MODULES = [AuthRoutingModule, SharedModule];

@NgModule({
    declarations: [AuthComponent],
    imports: [...MODULES],
})
export class AuthModule {}
