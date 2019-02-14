import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatablesComponent } from './datatables.component';

@NgModule({
  declarations: [DatatablesComponent],
  imports: [
    CommonModule
  ],
  exports: [DatatablesComponent]
})
export class DatatablesModule { }
