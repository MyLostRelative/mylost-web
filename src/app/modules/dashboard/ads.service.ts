import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from 'src/app/models/filters';
import { Ad } from '../../models/ad';
import { AdsApi } from './ads.api';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  constructor(private adsApi: AdsApi) {}

  getAds(filters: Filters): Observable<{ result: Ad[] }> {
    const { relationType, gender, fromAge, toAge, bloodType, city } = filters;
    return this.adsApi.getAds(
      relationType || '',
      gender || '',
      fromAge || 0,
      toAge || 0,
      bloodType || '',
      city || ''
    );
  }

  getAd(adId: number): Observable<{ result: Ad }> {
    return this.adsApi.getAd(adId);
  }

  getAdsByUserId(userId: number): Observable<{result: Ad[]}> {
    return this.adsApi.getAdsByUserId(userId);
  }
}
