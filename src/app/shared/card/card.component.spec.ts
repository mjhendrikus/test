import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable, of } from 'rxjs';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientModule
} from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { PipesModule } from '../pipes/pipes.module';
// import { TeamComponent } from './team.component';
import { DataService } from '../services/data.service';

const getPersondata: any = require('src/assets/mock-data/persondata.json');


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PipesModule ],
      declarations: [ CardComponent ],
      // providers: [{persondata: getPersondata}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test Person Data input', () => {
    // component.persondata = getPersondata;
    // component
  });
});

@Component({
  selector  : 'app-card-test',
  template  : '<app-card-test [persondata]="team"></app-card-test>'
  // directives: [ ProductThumbnail ]
 })
 class PersonDataTemplate { 
  team = {
      name: 'test1',
      address: ['1', '2', '3', '4'],
      geo: ['1', '2'],
      email: 'test1',
      web: 'test1',
      company: ['1', '2', '3']
  }
  // persondata = 'Testing input'; //mock your input 
 }

//
// Test TeamComponents Child Component -- CardComponent
//
xdescribe('CardComponent - Child (CardComponent)', () => {
  let component: PersonDataTemplate;
  let fixture: ComponentFixture<PersonDataTemplate>;

  class MockDataService {
    getTeam(): Observable<any>{
        return of(getPersondata)
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule, PipesModule, HttpClientModule ],
      declarations: [ CardComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDataTemplate);
    component = fixture.componentInstance;
    // const cardName = fixture.debugElement.query(By.css('card-name'));
    // component = fixture.debugElement.query(By.css('card-name'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind Parent to Child', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    // const cardName = fixture.debugElement.query(By.css('.card-name')).nativeElement;
    fixture.detectChanges();

    console.log('TEAM cardName # ')
    console.log(compiled.querySelectorAll('app-card'))
    // console.log(fixture.debugElement.children[0])

    // expect(component).toBeTruthy();
  });
});



