import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
  HttpClientModule
} from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable, of } from 'rxjs';

import { PipesModule } from '../shared/pipes/pipes.module';
import { CardComponent } from '../shared/card/card.component';
import { TeamComponent } from './team.component';
import { DataService } from '../shared/services/data.service';

import { UserComponent } from '../user/user.component';

import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router'

const getPersondata: any = require('src/assets/mock-data/persondata.json');

//
// ** TEAM - PARENT **
//
describe('TeamComponent - Parent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  class MockDataService {
    getTeam(): Observable<any>{
        return of(getPersondata)
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule, PipesModule, HttpClientModule ],
      declarations: [ 
        TeamComponent,
        CardComponent,
        UserComponent
      ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call updateTimeStamp', () => {

  //   spyOn(component, 'updateTimeStamp');

  //   component.update();

  //   expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();

  // });


});


// @Component({
//   selector  : 'app-card',
//   template  : '<app-card [persondata]="team"></app-card>'
//   // directives: [ ProductThumbnail ]
//  })
//  class PersonDataTemplate { 
//   persondata = {
//       name: 'test1',
//       address: ['1', '2', '3', '4'],
//       geo: ['1', '2'],
//       email: 'test1',
//       web: 'test1',
//       company: ['1', '2', '3']
//   }
//   // persondata = 'Testing input'; //mock your input 
//  }

// //
// // Test TeamComponents Child Component -- CardComponent
// //
// xdescribe('TeamComponent - Child (CardComponent)', () => {
//   let component: PersonDataTemplate;
//   let fixture: ComponentFixture<PersonDataTemplate>;


//   class MockDataService {
//     getTeam(): Observable<any>{
//         return of(getPersondata)
//     }
//   }

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [ FontAwesomeModule, PipesModule, HttpClientModule ],
//       declarations: [ CardComponent,
//         PersonDataTemplate
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         { provide: DataService, useClass: MockDataService }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PersonDataTemplate);
//     component = fixture.componentInstance;
//     // const cardName = fixture.debugElement.query(By.css('card-name'));
//     // component = fixture.debugElement.query(By.css('card-name'));
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   fit('should bind Parent', () => {

//     const cardName = fixture.debugElement.query(By.css('.card-name')).nativeElement;
//     fixture.detectChanges();

//     console.log('TEAM cardName # ')
//     console.log(cardName)
//     // console.log(fixture.debugElement.children[0])

//     // expect(component).toBeTruthy();
//   });
// });





