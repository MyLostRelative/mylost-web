import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  ads: Ad[] = [];
  constructor(private adsService: AdsService) {}

  ngOnInit(): void {
    this.adsService.getAds().subscribe((adsObj) => {
      console.log(adsObj);
      this.ads = adsObj.result;
    });
  }
}
