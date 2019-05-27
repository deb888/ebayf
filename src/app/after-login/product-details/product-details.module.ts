import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from '../../router/app.router';
import { ProductDetailsComponent } from './component/product-details.component';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    ModalModule.forRoot()
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }
