import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './message-dialog.component';

@NgModule({
  declarations: [MessageDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageDialogComponent],
  providers: [MessageDialogComponent]
})
export class MessageDialogModule { }
