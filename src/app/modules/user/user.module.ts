import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'cabinet',
    component: CabinetComponent
  }
];

@NgModule({
  declarations: [CabinetComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class UserModule {}
