import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, BlogsRoutingModule, SharedModule]
})
export class BlogsModule {}
