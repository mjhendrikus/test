import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PostService } from '../shared/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  newmessage: any = null;
  Title: string;
  isEnabled: boolean;
  closeOnly: boolean;
  comment: string;
  okButtonText = 'OK';
  cancelButtonText = 'Cancel';
  closeButtonText = 'Cancel';
  private titleModel: any = '';
  private mainMessage: any = '';

  commentModel: any = {};
  returnData: any = {};
  time = Date.now();

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private post: PostService) {}
 
  openModal(template: TemplateRef<any>) {
    this.Title = 'TESTING';
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
  }

  openMessage(event) {
    this.isEnabled = true;
    this.commentModel = {invalid: false}
  }

  send() {
      const subscription = this.post.sendMessage(
        this.titleModel,
        this.mainMessage,
        this.time)
      .subscribe(data => {
      this.returnData = data;

      console.log(this.returnData)

      subscription.unsubscribe();
      });

      this.newmessage = 'respond';


      this.modalRef.hide();
  }

  cancel() {
    this.modalRef.hide();
  }

  hide() {
    this.modalRef.hide();
  }

}
