import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/common/user-info.entity';
import { UsersService } from 'src/app/common/user.service';
import { Ad } from 'src/app/models/ad';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {
  activeRoute: ActivatedRoute;
  ad: Ad;
  contactUser: UserInfo;
  constructor(
    protected injector: Injector,
    private adsService: AdsService,
    private usersService: UsersService
  ) {
    this.activeRoute = injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    const adId = +this.activeRoute.snapshot.params.id;
    this.adsService.getAd(adId).subscribe((adObj) => {
      this.ad = adObj.result;
      console.log(this.ad);
      this.usersService.getUserInfo(this.ad.userID).subscribe((userInfoObj) => {
        console.log(userInfoObj);
        this.contactUser = userInfoObj.result;
      });
    });
    console.log(adId);
  }

  redirectToMail(email: string) {
    document.location.href = `mailto:${email}`;
  }
}
