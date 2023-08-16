import { TestBed } from '@angular/core/testing';

import { CabeceraInformativaService } from './cabecera-informativa.service';

describe('CabeceraInformativaService', () => {
  let service: CabeceraInformativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabeceraInformativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
