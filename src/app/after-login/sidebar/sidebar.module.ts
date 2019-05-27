import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from 'src/app/router/app.router';
import { SidebarComponent } from './component/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent]
})
export class SidebarModule { }
