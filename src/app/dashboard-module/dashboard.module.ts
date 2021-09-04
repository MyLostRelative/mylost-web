import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { AdsComponent } from './ads/ads.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, AdsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class AdsModule {}
