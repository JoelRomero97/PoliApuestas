import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuestasPasadasComponent } from './apuestas-pasadas.component';

describe('ApuestasPasadasComponent', () => {
  let component: ApuestasPasadasComponent;
  let fixture: ComponentFixture<ApuestasPasadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuestasPasadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuestasPasadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
