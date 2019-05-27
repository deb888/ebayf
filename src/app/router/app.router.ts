import { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '../design/header/component/header.component';
import { FooterComponent } from '../design/footer/component/footer.component';
import { BaseComponent } from '../design/base/component/base.component';
import { LandingPageComponent } from '../design/landing-page/component/landing-page.component';
import { LeftPanelComponent } from '../design/left-panel/component/left-panel.component';
import { LoginComponent } from '../design/login/component/login.component';

// After Login modules

// After Login modules
import { AfterHeaderComponent } from '../after-login/after-header/component/after-header.component';
import { AfterFooterComponent } from '../after-login/after-footer/component/after-footer.component';
import { SidebarComponent } from '../after-login/sidebar/component/sidebar.component';

import { AfterBaseComponent } from '../after-login/after-base/component/after-base.component';
import { DashboardComponent } from '../after-login/dashboard/component/dashboard.component';
import { ProductDetailsComponent } from '../after-login/product-details/component/product-details.component';
import { AuthGuard } from '../auth.gaurd';





const routes: Routes = [

  {
    path: '',
    component: BaseComponent,

    children: [
      {
        path: '',
        component: LandingPageComponent,

      },

      {
        path: 'home',
        component: LandingPageComponent,

      },

      {
        path: 'login',
        component: LoginComponent,

      },

    ]
  },



  {
    path: '',
    component: AfterBaseComponent,

    children: [
      {
        path: '',
        component: DashboardComponent,

      },

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'product-table',
        component: ProductDetailsComponent,
        canActivate: [AuthGuard]
      },


    ]
  },


]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false, useHash: true });

