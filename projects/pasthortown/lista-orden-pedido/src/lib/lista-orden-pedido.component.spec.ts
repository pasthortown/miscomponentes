import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenPedidoComponent } from './lista-orden-pedido.component';

describe('ListaOrdenPedidoComponent', () => {
  let component: ListaOrdenPedidoComponent;
  let fixture: ComponentFixture<ListaOrdenPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdenPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOrdenPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
