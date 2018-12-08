import { NgModule } from '@angular/core';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class MaterialModule { }
