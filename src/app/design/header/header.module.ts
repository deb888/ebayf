import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from '../../router/app.router';
import { HeaderComponent } from './component/header.component';

import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports:[
    HeaderComponent
  ],

  declarations: [HeaderComponent]
})
export class HeaderModule { }
