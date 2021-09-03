import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import { AdsRoutingModule } from './ads.routing.module';

@NgModule({
  declarations: [AdsComponent],
  imports: [CommonModule, AdsRoutingModule]
})
export class AdsModule {}
