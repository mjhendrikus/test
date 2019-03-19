import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CardComponent } from './card.component';
import { PipesModule } from '../pipes/pipes.module';
// import { TeamComponent } from './team.component';
import { DataService } from '../services/data.service';

const getPersondata: any = require('src/assets/mock-data/persondata.json');

@Component({
  selector  : 'app-card',
  template  : '<app-card [persondata]="team"></app-card>'
  // directives: [ ProductThumbnail ]
 })
 class MockPersonData { 
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

xdescribe('CardComponent', () => {
  let component: MockPersonData;
  let fixture: ComponentFixture<MockPersonData>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PipesModule ],
      declarations: [ CardComponent, MockPersonData ],
      // providers: [{persondata: getPersondata}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPersonData);
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




