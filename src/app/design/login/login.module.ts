import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting} from  '../../router/app.router';
import { LoginComponent } from './component/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
