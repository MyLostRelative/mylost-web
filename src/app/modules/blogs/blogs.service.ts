import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogsApi } from './blogs.api';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private blogsApi: BlogsApi) {}

  getBlogs(): Observable<{ result: Blog[] }> {
    return this.blogsApi.getBlogs();
  }

  getBlog(blogId: number): Observable<{ result: Blog }> {
    return this.blogsApi.getBlog(blogId);
  }
}
