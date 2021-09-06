import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad';
import { Filters } from 'src/app/models/filters';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ads: Ad[] = [];
  constructor(private adsService: AdsService) {}

  ngOnInit(): void {
    this.getFilteredAds();
  }

  getFilteredAds(filters?: Filters) {
    this.adsService.getAds(filters || {} as Filters).subscribe((adsObj) => {
      this.ads = adsObj.result;
    });
  }

  filterAds(filters: Filters) {
    console.log(filters);
    this.getFilteredAds(filters);
  }
}
