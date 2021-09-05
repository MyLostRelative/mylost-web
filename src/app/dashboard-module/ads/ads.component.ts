import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  constructor(private adsService: AdsService) {}

  ngOnInit(): void {
    this.adsService.getAds().subscribe((adsObj) => {
      console.log(adsObj);
    });
  }
}
