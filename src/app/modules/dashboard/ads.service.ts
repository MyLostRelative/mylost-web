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
    console.log('filters: ', filters);
    const { relationType, gender, fromAge, toAge, bloodType, city } = filters;
    return this.adsApi.getAds(
      relationType || '',
      gender || '',
      fromAge || '',
      toAge || '',
      bloodType || '',
      city || ''
    );
  }

  getAd(blogId: number): Observable<{ result: Ad }> {
    return this.adsApi.getAd(blogId);
  }
}
