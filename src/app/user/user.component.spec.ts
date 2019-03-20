import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { By } from '@angular/platform-browser';


@Component({
  template: `<app-user [user]="team"></app-user>`
})

class MockConsumer {
  team = {
    name: 'Mock Name'
  };
}

describe('UserComponent', () => {
  let component: MockConsumer;
  let fixture: ComponentFixture<MockConsumer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, MockConsumer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockConsumer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind user', () => {
    let userName = fixture.debugElement.query(By.css('.user-name'));
    fixture.detectChanges();
    expect(userName).toBeTruthy();
    const content = userName.children;
    const name: any = userName.nativeElement;
    const expected = {name: 'Mock Name'};

    console.log('content--> ')
    console.log(content)

    expect(name.innerText).not.toBeUndefined;
  });
});
