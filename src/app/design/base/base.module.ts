import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from '../../router/app.router';
import { BaseComponent } from './component/base.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    HeaderModule,
    FooterModule
  ],
  declarations: [BaseComponent]
})
export class BaseModule { }
