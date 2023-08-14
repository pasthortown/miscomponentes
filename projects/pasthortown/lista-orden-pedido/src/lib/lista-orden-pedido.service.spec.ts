import { TestBed } from '@angular/core/testing';

import { ListaOrdenPedidoService } from './lista-orden-pedido.service';

describe('ListaOrdenPedidoService', () => {
  let service: ListaOrdenPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaOrdenPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
