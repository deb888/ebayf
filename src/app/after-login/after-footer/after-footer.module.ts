import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from 'src/app/router/app.router';
import { AfterFooterComponent } from './component/after-footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
  ],
  exports: [
    AfterFooterComponent
  ],
  declarations: [AfterFooterComponent]
})
export class AfterFooterModule { }
