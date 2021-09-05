import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsListComponent
  },
  {
    path: ':id',
    component: BlogsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {}
