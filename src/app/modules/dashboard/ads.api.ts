import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../../config/api.config';
import { Ad } from '../../models/ad';

@Injectable()
export class AdsApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  getAds(): Observable<{ result: Ad[] }> {
    return this.http.get<{ result: Ad[] }>(urlHelper.api('/ads'));
  }

  getAd(blogId: number): Observable<{ result: Ad }> {
    return this.http.get<{ result: Ad }>(urlHelper.api(`/ads/${blogId}`));
  }
}
