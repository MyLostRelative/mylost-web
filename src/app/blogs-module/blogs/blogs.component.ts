import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((value) => {
      console.log('got blogs: ', value);
    });
  }
}
