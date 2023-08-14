import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosOrdenPedidoComponent } from './precios-orden-pedido.component';

describe('PreciosOrdenPedidoComponent', () => {
  let component: PreciosOrdenPedidoComponent;
  let fixture: ComponentFixture<PreciosOrdenPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosOrdenPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreciosOrdenPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
