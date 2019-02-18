import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashifyPipe } from './dashify.pipe';
import { GmtPipe } from './gmt.pipe';
import { TextifyPipe } from './textify.pipe';

@NgModule({
  declarations: [DashifyPipe, GmtPipe, TextifyPipe],
  imports: [
    CommonModule
  ],
  exports: [DashifyPipe, GmtPipe],
  providers: [DashifyPipe, GmtPipe]
})
export class PipesModule { }
