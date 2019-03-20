import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
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

const getPersondata: any = require('src/assets/mock-data/persondata.json');
import { DataServiceStub } from 'src/assets/data-service-stub';

// *** TEAM - CALL ngOnInit() **/
describe('TeamComponent - ngOnInit()', () => {
  let de:any = null;
  let injector: TestBed;
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let service = DataService;

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
        { provide: DataService, useClass: OnInit_MockDataService }
      ]
    })
    .compileComponents();

    //Inject Service for function testing
    injector = getTestBed();
    service = injector.get(DataService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  //TEST THE FRONT END TABLE IS BUILD
  it('should create Team table', () => {
    de = fixture.debugElement.query(By.css('.card-body>div>table'));
    fixture.detectChanges();
    expect(de).toBeTruthy();

    // console.log('TABLE CSS CALL:')
    // console.log(de)

  });

   //TEST THE FRONT END TABLE TD IS BUILD
   it('should create Team table', () => {
    de = fixture.debugElement.query(By.css('.card-body>div>table>tbody>tr>td'));
    fixture.detectChanges();
    expect(de).not.toBeNull();

    // console.log('CSS CALL -->')
    // console.log(de)

  });

  //SPY TO DIRECT CALL
  xit('should Spy getMember with id ', () => {
    console.log('CALL MEMBER--> ');
    const spy = spyOn(fixture.componentInstance, 'getMember');
    console.log(spy)
  })

  //FAILING DIRECT CALLS
  xit('should Direct Component getMember with id  -- FAIL ', () => {
    console.log('CALL MEMBER--> ');
    console.log(component.getMember(2))
  })

  xit('should Direct ComponentInstance getMember with id  -- FAIL ', () => {
    console.log('CALL MEMBER--> ');
    console.log(fixture.componentInstance.getMember(2))
  })
});


//*** CALL SINGLE FUNCTION - getMember(id: number) */
describe('TeamComponent - getMember(id: number)', () => {
  let injector: TestBed;
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let service = DataService;

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
        { provide: DataService, useClass: Function_MockDataService }
      ]
    })
    .compileComponents();

    //Inject Service for function testing
    injector = getTestBed();
    service = injector.get(DataService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('should test getTeamDetails', async(() => {
    TestBed.compileComponents().then(() => {
      service.getTeamDetails(2).subscribe(data => {
        console.log('TEAM DETAILS --> ')
        console.log(data)
      })
    })
    fixture.detectChanges();
  }));
});

class OnInit_MockDataService {
  getTeam(): Observable<any>{
      return of(getPersondata)
  }
  getTeamDetails(id:number): Observable<any[]>{
    const mockdata: any = DataServiceStub.getTeamDetailsData();
    return of(mockdata);
  }
}

class Function_MockDataService {
  getTeam(): Observable<any>{
      return of(getPersondata)
  }
  getTeamDetails(id:number): Observable<any[]>{
    const mockdata: any = DataServiceStub.getTeamDetailsData();
    return of(mockdata);
  }
}

