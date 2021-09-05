import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {
  activeRoute: ActivatedRoute;
  blog: Blog;
  constructor(protected injector: Injector, private blogsService: BlogsService) {
    this.activeRoute = injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    const blogId = +this.activeRoute.snapshot.params.id;
    this.blogsService.getBlog(blogId).subscribe((blogObj) => {
      this.blog = blogObj.result;
    });
  }
}
