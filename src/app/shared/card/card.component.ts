import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() persondata;
  name: string;
  address: any[] = [];
  company: any[] = [];
  geo: any [] = [];
  email: string;
  web: string;

  constructor() { }

  ngOnInit() {

console.log(this.persondata)

    this.name = this.persondata.name;
    this.address[0] = this.persondata.address.street;
    this.address[1] = this.persondata.address.suite;
    this.address[2] = this.persondata.address.city;
    this.address[3] = this.persondata.address.zipcode;
    this.geo[0] = this.persondata.address.geo.lat;
    this.geo[1] = this.persondata.address.geo.lng;
    this.email = this.persondata.email;
    this.web = this.persondata.website;

    this.company[0] = this.persondata.company.name;
    this.company[1] = this.persondata.company.bs;
    this.company[2] = this.persondata.company.catchPhrase;

  }

}
