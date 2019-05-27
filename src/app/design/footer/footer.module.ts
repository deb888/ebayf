import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from '../../router/app.router';
import { FooterComponent } from './component/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
  ],
  exports: [
    FooterComponent
  ],
  declarations: [FooterComponent]
})
export class FooterModule { }
