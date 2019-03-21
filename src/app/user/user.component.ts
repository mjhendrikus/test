import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

//User Component Log
export class UserComponent implements OnInit {
  @Input() user;

  constructor() { }

  ngOnInit() {
    console.log('User Component ngOnInit value: ')
    console.log(this.user)
  }

}
