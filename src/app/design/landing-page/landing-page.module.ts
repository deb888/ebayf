import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from '../../router/app.router';
import { LandingPageComponent } from './component/landing-page.component';
import { LeftPanelModule } from '../left-panel/left-panel.module';
import { HttpService } from 'src/app/globalservice';

// import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatIconModule, MatSliderModule, MatTabsModule,
//   MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    LeftPanelModule

  ],
providers:[HttpService],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
