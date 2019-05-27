import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './component/left-panel.component';
import { AppRouting } from '../../router/app.router';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  exports: [
    LeftPanelComponent
  ],
  declarations: [LeftPanelComponent]
})
export class LeftPanelModule { }
