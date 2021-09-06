import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth.service';
import {
  bloodTypes,
  cities,
  genders,
  relationTypes
} from 'src/app/common/filters.data';
import { AdsService } from '../../dashboard/ads.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {
  userId: number;

  cities = cities;
  relationTypes = relationTypes;
  genders = genders;
  bloodTypes = bloodTypes;
  filteredCities = this.cities;

  addForm = new FormGroup({
    title: new FormControl(''),
    relationType: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    bloodType: new FormControl(''),
    city: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private adsService: AdsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  displayCityFn(value?: string) {
    return value
      ? this.filteredCities.find((city) => city.value === value).title
      : '';
  }

  async register() {
    console.log(this.addForm.value);
    if (!this.userId) {
      this.userId = (await this.authService.getClientDetails()).id;
    }
    this.adsService.createAd(this.userId, this.addForm.value).subscribe((adId) => {
      console.log(adId);
      this.router.navigate(['']);
    });
  }
}
