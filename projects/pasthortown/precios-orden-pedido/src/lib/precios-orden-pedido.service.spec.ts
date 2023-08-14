import { TestBed } from '@angular/core/testing';

import { PreciosOrdenPedidoService } from './precios-orden-pedido.service';

describe('PreciosOrdenPedidoService', () => {
  let service: PreciosOrdenPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreciosOrdenPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
