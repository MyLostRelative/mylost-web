import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdsDetailsComponent } from './ads-details/ads-details.component';
import { DetailedFiltersComponent } from './detailed-filters/detailed-filters.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdsDetailsComponent,
    DetailedFiltersComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: []
})
export class AdsModule {}
