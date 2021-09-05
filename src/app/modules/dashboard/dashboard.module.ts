import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { AdsListComponent } from './ads-list/ads-list.component';
import { SharedModule } from '../shared/shared.module';
import { AdsService } from './ads.service';
import { AdsApi } from './ads.api';

@NgModule({
  declarations: [DashboardComponent, AdsListComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: [AdsService, AdsApi]
})
export class AdsModule {}
