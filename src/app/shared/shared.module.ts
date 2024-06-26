import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';

const MODULES = [LayoutModule];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class SharedModule {}
