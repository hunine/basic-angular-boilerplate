import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OneColumnLayoutComponent } from './one-column-layout/one-column-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const COMPONENTS = [HeaderComponent, FooterComponent, OneColumnLayoutComponent, AuthLayoutComponent];

@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class LayoutModule {}
