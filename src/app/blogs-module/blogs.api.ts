import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../config/api.config';
import { Blog } from '../models/blog';

@Injectable()
export class BlogsApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(urlHelper.api('/blogs'));
  }

  getBlog(blogId: number): Observable<Blog> {
    return this.http.get<Blog>(urlHelper.api(`/blogs/${blogId}`));
  }
}
