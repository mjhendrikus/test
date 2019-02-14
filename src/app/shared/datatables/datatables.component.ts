import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss']
})
export class DatatablesComponent implements OnInit {
  @Input() public data: any[];

  constructor() { }

  ngOnInit() {

console.log(this.data)

  }

}
