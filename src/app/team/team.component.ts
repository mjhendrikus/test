import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  TeamData: object;
  personData: any = {};
  private subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.getTeam()
      .subscribe(data => {
      this.TeamData = data;

        console.log('Team Component ngOnInit values: ')
        console.log(this.TeamData)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getMember(id: number) {
    this.subscription = this.data.getTeamDetails(id)
      .subscribe(data => {
      this.personData = data;

      console.log('Team Component getMember values: ')
      console.log(this.personData)

    });
  }

  closeMember() {
    this.personData = null;
  }

}
