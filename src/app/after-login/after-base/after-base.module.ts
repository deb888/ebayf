import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from 'src/app/router/app.router';
import { AfterHeaderModule } from '../after-header/after-header.module';
import { AfterFooterModule } from '../after-footer/after-footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AfterBaseComponent } from './component/after-base.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    AfterHeaderModule,
    AfterFooterModule,
    SidebarModule
  ],
  declarations: [AfterBaseComponent]
})
export class AfterBaseModule { }
