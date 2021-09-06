import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad';
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

  getFilteredAds() {
    this.adsService.getAds().subscribe((adsObj) => {
      this.ads = adsObj.result;
    });
  }

  filterAds(e) {
    console.log(e);
    this.getFilteredAds();
  }
}
