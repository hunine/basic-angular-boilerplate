import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';

const MODULES = [AuthRoutingModule, SharedModule];

@NgModule({
    declarations: [AuthComponent],
    imports: [...MODULES],
    providers: [AuthService],
})
export class AuthModule {}
