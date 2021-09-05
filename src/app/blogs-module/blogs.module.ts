import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogsService } from './blogs.service';
import { BlogsApi } from './blogs.api';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';

@NgModule({
  declarations: [BlogsListComponent, BlogsDetailsComponent],
  imports: [CommonModule, BlogsRoutingModule, SharedModule],
  providers: [BlogsService, BlogsApi]
})
export class BlogsModule {}
