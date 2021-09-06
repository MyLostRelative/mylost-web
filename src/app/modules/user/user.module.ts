import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddAdComponent } from './add-ad/add-ad.component';

const routes: Routes = [
  {
    path: 'cabinet',
    component: CabinetComponent
  },
  { path: 'add', component: AddAdComponent }
];

@NgModule({
  declarations: [CabinetComponent, AddAdComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class UserModule {}
