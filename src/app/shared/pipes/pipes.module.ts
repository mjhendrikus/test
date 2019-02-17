import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashifyPipe } from './dashify.pipe';
import { GmtPipe } from './gmt.pipe';
import { TextPipe } from './text.pipe';
import { TextifyPipe } from './textify.pipe';

@NgModule({
  declarations: [DashifyPipe, GmtPipe, TextPipe, TextifyPipe],
  imports: [
    CommonModule
  ],
  exports: [DashifyPipe, GmtPipe, TextPipe],
  providers: [DashifyPipe, GmtPipe, TextPipe]
})
export class PipesModule { }
