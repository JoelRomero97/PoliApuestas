import { TestBed, inject } from '@angular/core/testing';

import { ApuestaService } from './apuesta.service';

describe('ApuestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApuestaService]
    });
  });

  it('should be created', inject([ApuestaService], (service: ApuestaService) => {
    expect(service).toBeTruthy();
  }));
});
