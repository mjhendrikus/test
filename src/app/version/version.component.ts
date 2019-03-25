import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit, OnDestroy {
  versionData: any[] = [];
  private subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.getVersion()
    .subscribe(data => {

console.log(data)

    this.versionData = data;

    console.log('versionData values: ')
    console.log(this.versionData)

  });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
