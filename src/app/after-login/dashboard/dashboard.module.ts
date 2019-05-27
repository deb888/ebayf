import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from 'src/app/router/app.router';
import { DashboardComponent } from './component/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
