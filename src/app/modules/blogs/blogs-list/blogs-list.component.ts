import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((blogsObj) => {
      console.log('got blogs: ', blogsObj);
      this.blogs = blogsObj.result;
    });
  }
}
