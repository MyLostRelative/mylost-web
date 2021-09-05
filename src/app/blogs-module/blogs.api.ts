import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../config/api.config';
import { Blog } from '../models/blog';

@Injectable()
export class BlogsApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  getBlogs(): Observable<{ result: Blog[] }> {
    return this.http.get<{ result: Blog[] }>(urlHelper.api('/blogs'));
  }

  getBlog(blogId: number): Observable<{ result: Blog }> {
    return this.http.get<{ result: Blog }>(urlHelper.api(`/blogs/${blogId}`));
  }
}
