import { TestBed } from '@angular/core/testing';

import { MenuOrdenPedidoService } from './menu-orden-pedido.service';

describe('MenuOrdenPedidoService', () => {
  let service: MenuOrdenPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOrdenPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
