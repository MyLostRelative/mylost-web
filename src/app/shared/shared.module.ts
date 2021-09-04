import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: []
})
export class SharedModule {}
