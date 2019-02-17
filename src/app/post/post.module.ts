import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { MessageDialogModule } from '../shared/message-dialog/message-dialog.module';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule, MessageDialogModule
  ]
})
export class PostModule { }
