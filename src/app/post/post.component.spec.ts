import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  //ngModul
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MessageDialogComponent } from '../shared/message-dialog/message-dialog.component';
import { BsModalServiceStub } from '../shared/testing/bs-modal.service-stub';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, PipesModule ],
      declarations: [ 
        PostComponent,
        MessageDialogComponent
      ],
      providers: [ {provide: BsModalService, useClass: BsModalServiceStub},
      {provide: HttpClient, deps: [Router]} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
