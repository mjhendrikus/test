import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit, OnChanges {
  @Input() Title;
  @Input() Header;
  @Input() Body;

  commentModel = {};

  title: string;
  header: string;
  body: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.body[0] = this.Body.userId;
    this.body[1] = this.Body.header;
    this.body[2] = this.Body.body;
    this.body[3] = this.Body.timestamp;

    console.log('$$$$  ')
    console.log(this.body)
  }

}
