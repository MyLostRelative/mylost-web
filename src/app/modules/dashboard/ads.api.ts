import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../../config/api.config';
import { Ad } from '../../models/ad';

@Injectable()
export class AdsApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  getAds(
    relationType: string,
    gender: string,
    fromAge: number,
    toAge: number,
    bloodType: string,
    city: string
  ): Observable<{ result: Ad[] }> {
    const params = new HttpParams()
      .set('relationType', relationType)
      .set('gender', gender)
      .set('fromAge', fromAge.toString())
      .set('toAge', toAge.toString())
      .set('bloodType', bloodType)
      .set('city', city);
    return this.http.get<{ result: Ad[] }>(urlHelper.api('/ads'), {params});
  }

  getAd(blogId: number): Observable<{ result: Ad }> {
    return this.http.get<{ result: Ad }>(urlHelper.api(`/ads/${blogId}`));
  }
}
