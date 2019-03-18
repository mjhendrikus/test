import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { By } from '@angular/platform-browser';


@Component({
  template: `<app-user [user]="team"></app-user>`
})

class MockConsumer {
  team = {
    name: 'foo'
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

  fit('should bind user', () => {
    const userName = fixture.debugElement.query(By.css('.user-name')).nativeElement;
    fixture.detectChanges();

    console.log('userName--> ')
    console.log(userName.innerText)
    // expect(userName.innerText).toBe('foo');
  });
});
