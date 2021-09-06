import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';
import { Ad } from 'src/app/models/ad';
import { AdsService } from '../../dashboard/ads.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  clientAds: Ad[] = [];
  constructor(
    private authService: AuthService,
    private adsService: AdsService
  ) {}

  async ngOnInit() {
    const userInfo = await this.authService.getClientDetails();
    if (userInfo) {
      this.adsService.getAdsByUserId(userInfo.id).subscribe((adsObj) => {
        this.clientAds = adsObj.result;
      });
    }
  }
}
