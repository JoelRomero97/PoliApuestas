import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventocreateComponent } from './eventocreate.component';

describe('EventocreateComponent', () => {
  let component: EventocreateComponent;
  let fixture: ComponentFixture<EventocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
