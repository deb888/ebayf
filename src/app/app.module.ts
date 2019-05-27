import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouting } from './router/app.router';
import { HeaderModule } from './design/header/header.module';
import { FooterModule } from './design/footer/footer.module';
import { BaseModule } from './design/base/base.module';
import { LandingPageModule } from './design/landing-page/landing-page.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LeftPanelModule } from './design/left-panel/left-panel.module';
import { HttpService } from './globalservice';
import { RequestInterceptorService } from './interceptor';
import { LoginModule } from './design/login/login.module';
import { AfterHeaderModule } from './after-login/after-header/after-header.module';
import { AfterFooterModule } from './after-login/after-footer/after-footer.module';
import { AfterBaseModule } from './after-login/after-base/after-base.module';
import { DashboardModule } from './after-login/dashboard/dashboard.module';
import { SidebarModule } from './after-login/sidebar/sidebar.module';
import { ProductDetailsModule } from './after-login/product-details/product-details.module';
import { AuthGuard } from './auth.gaurd';


@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HeaderModule,
    FooterModule,
    BaseModule,
    LandingPageModule,
    LeftPanelModule,
    LoginModule,
    AfterHeaderModule,
    AfterFooterModule,
    AfterBaseModule,
    DashboardModule,
    SidebarModule,
    ProductDetailsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },HttpService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
