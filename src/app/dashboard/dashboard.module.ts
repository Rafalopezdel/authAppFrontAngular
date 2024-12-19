import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutsComponent } from './layouts/dashboard-layouts/dashboard-layouts.component';


@NgModule({
  declarations: [
    DashboardLayoutsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
