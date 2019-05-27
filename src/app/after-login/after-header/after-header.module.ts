import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from 'src/app/router/app.router';
import { AfterHeaderComponent } from './component/after-header.component';


@NgModule({
  imports: [
    CommonModule,
    AppRouting,
  ],
  exports: [
    AfterHeaderComponent
  ],
  declarations: [AfterHeaderComponent]
})
export class AfterHeaderModule { }
