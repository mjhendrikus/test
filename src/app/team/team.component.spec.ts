import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientModule
} from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PipesModule } from '../shared/pipes/pipes.module';
import { CardComponent } from '../shared/card/card.component';
import { TeamComponent } from './team.component';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule, PipesModule, HttpClientModule ],
      declarations: [ 
        TeamComponent, 
        CardComponent 
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
});
