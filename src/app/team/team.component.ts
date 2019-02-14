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
    // this.data.runSet();

    this.data.getTeam().subscribe(data => {
      this.TeamData = data;
      console.log(this.TeamData)
    });
  }

  ngOnDestroy() {
    // this.data
  }

  getMember(id){

    this.data.getTeamDetails(id)
    .subscribe(data => {

    })
    console.log(id)

  }

  

}
