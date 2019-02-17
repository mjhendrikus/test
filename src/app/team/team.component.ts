import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  TeamData: object;
  personData: any = {};

  constructor(private data: DataService) { }

  ngOnInit() {
    const subscription = this.data.getTeam()
      .subscribe(data => {
      this.TeamData = data;
      subscription.unsubscribe();
    });
  }

  ngOnDestroy() {
  }

  getMember(id: number) {
    const subscription = this.data.getTeamDetails(id)
      .subscribe(data => {
      this.personData = data;

      console.log(this.personData)

      subscription.unsubscribe();
    });
  }

  closeMember() {
    this.personData = null;
  }

}
