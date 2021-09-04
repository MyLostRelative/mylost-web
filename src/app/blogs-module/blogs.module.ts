import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogsService } from './blogs.service';
import { BlogsApi } from './blogs.api';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, BlogsRoutingModule, SharedModule],
  providers: [BlogsService, BlogsApi]
})
export class BlogsModule {}
