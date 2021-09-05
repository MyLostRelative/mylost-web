import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsDetailsComponent } from './ads-details/ads-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'ads/:id',
    component: AdsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
