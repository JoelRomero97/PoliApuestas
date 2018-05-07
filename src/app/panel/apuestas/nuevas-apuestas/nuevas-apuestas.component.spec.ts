import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasApuestasComponent } from './nuevas-apuestas.component';

describe('NuevasApuestasComponent', () => {
  let component: NuevasApuestasComponent;
  let fixture: ComponentFixture<NuevasApuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevasApuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
