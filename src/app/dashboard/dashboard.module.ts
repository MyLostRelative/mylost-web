import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdsRoutingModule } from './dashboard.routing.module';
import { AdsComponent } from './ads/ads.component';

@NgModule({
  declarations: [DashboardComponent, AdsComponent],
  imports: [CommonModule, AdsRoutingModule]
})
export class AdsModule {}
