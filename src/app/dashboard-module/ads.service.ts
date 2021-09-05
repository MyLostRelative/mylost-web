import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from '../models/ad';
import { AdsApi } from './ads.api';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  constructor(private adsApi: AdsApi) {}

  getAds(): Observable<{ result: Ad[] }> {
    return this.adsApi.getAds();
  }

  getAd(blogId: number): Observable<{ result: Ad }> {
    return this.adsApi.getAd(blogId);
  }
}
