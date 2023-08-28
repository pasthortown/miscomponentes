import { TestBed } from '@angular/core/testing';

import { BotonesPagoEfectivoService } from './botones-pago-efectivo.service';

describe('BotonesPagoEfectivoService', () => {
  let service: BotonesPagoEfectivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotonesPagoEfectivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
