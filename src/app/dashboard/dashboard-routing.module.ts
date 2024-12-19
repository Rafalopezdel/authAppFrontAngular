import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutsComponent } from './layouts/dashboard-layouts/dashboard-layouts.component';

const routes: Routes = [

  {
    path:'',
    component:DashboardLayoutsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
