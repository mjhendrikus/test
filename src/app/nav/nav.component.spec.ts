import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  //ngModul

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from '../app-routing.module';

import { NavComponent } from './nav.component';
import { TeamComponent } from '../team/team.component';
import { HomeComponent } from '../home/home.component';
import { PostComponent } from '../post/post.component';

import { PipesModule } from '../shared/pipes/pipes.module';
import { CardComponent } from '../shared/card/card.component';
import { MessageDialogComponent } from '../shared/message-dialog/message-dialog.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, FontAwesomeModule, PipesModule, FormsModule ],
      declarations: [ 
        NavComponent, 
        HomeComponent, 
        TeamComponent, 
        PostComponent,
        CardComponent,
        MessageDialogComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
