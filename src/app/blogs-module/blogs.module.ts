import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, BlogsRoutingModule]
})
export class BlogsModule {}
