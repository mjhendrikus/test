import { Component, OnInit, Input } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit {
  @Input() lat;
  @Input() lng;

  constructor() { }

  ngOnInit() {
  }

}
